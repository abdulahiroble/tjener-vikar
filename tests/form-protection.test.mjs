import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import vm from 'node:vm';
import { protectForm } from '../functions/_lib/form-protection.js';
import { onRequestGet as config } from '../functions/api/form-config.js';
import { onRequestPost as contact } from '../functions/api/contact.js';
import { onRequestPost as price } from '../functions/api/price-inquiry.js';
import { onRequestPost as job } from '../functions/api/job-application.js';

const env = {
  TURNSTILE_SITE_KEY: 'public-test-site-key',
  TURNSTILE_SECRET_KEY: 'private-test-secret',
  RESEND_API_KEY: 'test-email-key',
};
const actions = [['contact', contact, '/tak'], ['price-inquiry', price, '/tak'], ['job-application', job, '/tak-vikar']];

function form(token = 'test-token') {
  const data = new FormData();
  for (const [name, value] of Object.entries({
    name: 'Test Person', email: 'test@example.com', phone: '12345678',
    company: 'Test Company', message: 'Please contact me', role: 'Tjener',
    'cf-turnstile-response': token,
  })) data.set(name, value);
  data.set('attachment', new File(['test CV'], 'cv.pdf', { type: 'application/pdf' }));
  return data;
}

function request(data, action = 'contact', headers = {}) {
  return new Request(`https://tjenervikar.dk/api/${action}`, {
    method: 'POST', body: data,
    headers: { origin: 'https://tjenervikar.dk', ...headers },
  });
}

const mockedTests = new WeakSet();
function mockFetch(t, callback) {
  if (!mockedTests.has(t)) {
    const original = globalThis.fetch;
    t.after(() => { globalThis.fetch = original; });
    mockedTests.add(t);
  }
  globalThis.fetch = callback;
}

test('configuration exposes only the public site key and fails closed', async () => {
  const response = config({ env });
  assert.equal(response.status, 200);
  assert.equal(response.headers.get('cache-control'), 'no-store');
  assert.deepEqual(await response.json(), { siteKey: env.TURNSTILE_SITE_KEY });
  const missing = config({ env: { TURNSTILE_SITE_KEY: env.TURNSTILE_SITE_KEY } });
  assert.equal(missing.status, 503);
  assert.deepEqual(await missing.json(), { siteKey: null });
});

test('missing configuration and missing/oversized tokens are rejected without verification', async (t) => {
  mockFetch(t, () => assert.fail('Must not call external services'));
  assert.equal((await protectForm(request(form()), {}, form(), 'contact')).status, 503);
  for (const token of ['', 'x'.repeat(2049)]) {
    const data = form(token);
    assert.equal((await protectForm(request(data), env, data, 'contact')).status, 400);
  }
});

test('cross-origin submissions are rejected', async (t) => {
  mockFetch(t, () => assert.fail('Must not verify a cross-origin request'));
  const data = form();
  assert.equal((await protectForm(request(data, 'contact', { origin: 'https://spam.example' }), env, data, 'contact')).status, 403);
});

test('honeypots silently discard submissions on all endpoints without side effects', async (t) => {
  mockFetch(t, () => assert.fail('Must not send email or verify a honeypot submission'));
  for (const [action, handler, path] of actions) {
    for (const field of ['website', 'botcheck']) {
      const data = form();
      data.set(field, 'spam');
      const response = await handler({
        request: request(data, action),
        env: { ...env, CV_BUCKET: { put: () => assert.fail('Must not store spam') } },
      });
      assert.equal(response.status, 303);
      assert.equal(response.headers.get('location'), `https://tjenervikar.dk${path}`);
    }
  }
});

test('failed, expired, reused, wrong-host and wrong-action tokens are rejected', async (t) => {
  for (const result of [
    { success: false, 'error-codes': ['timeout-or-duplicate'] },
    { success: true, hostname: 'spam.example', action: 'contact' },
    { success: true, hostname: 'tjenervikar.dk', action: 'job-application' },
    { success: true },
    null,
  ]) {
    mockFetch(t, async () => Response.json(result));
    const data = form();
    assert.equal((await protectForm(request(data), env, data, 'contact')).status, 403);
  }
});

test('verification outages, malformed JSON and HTTP failures fail closed', async (t) => {
  for (const callback of [
    async () => { throw new Error('Network unavailable'); },
    async () => new Response('invalid json'),
    async () => new Response('unavailable', { status: 503 }),
  ]) {
    mockFetch(t, callback);
    const data = form();
    assert.equal((await protectForm(request(data), env, data, 'contact')).status, 503);
  }
});

test('invalid email is rejected even with a verified token', async (t) => {
  mockFetch(t, async () => Response.json({ success: true, hostname: 'tjenervikar.dk', action: 'contact' }));
  for (const email of ['not-an-email', 'a@example.com\r\nBcc:spam@example.com']) {
    const data = form();
    data.set('email', email);
    assert.equal((await protectForm(request(data), env, data, 'contact')).status, 400);
  }
});

test('all endpoints reject direct POSTs without sending email or storing CVs', async (t) => {
  mockFetch(t, () => assert.fail('Must not call external services'));
  for (const [action, handler] of actions) {
    const response = await handler({
      request: request(form(''), action),
      env: { ...env, CV_BUCKET: { put: () => assert.fail('Must not store CV') } },
    });
    assert.equal(response.status, 400);
  }
});

test('verified submissions preserve email, CV storage and thank-you redirects', async (t) => {
  for (const [action, handler, path] of actions) {
    let emails = 0;
    let uploads = 0;
    mockFetch(t, async (url, options) => {
      if (url.endsWith('/siteverify')) {
        assert.equal(options.body.get('secret'), env.TURNSTILE_SECRET_KEY);
        assert.equal(options.body.get('response'), 'test-token');
        assert.equal(options.body.get('remoteip'), '192.0.2.1');
        return Response.json({ success: true, hostname: 'tjenervikar.dk', action });
      }
      assert.equal(url, 'https://api.resend.com/emails');
      const payload = JSON.parse(options.body);
      assert.equal(payload.reply_to, 'test@example.com');
      if (action === 'job-application') assert.equal(payload.attachments[0].filename, 'cv.pdf');
      emails++;
      return Response.json({ id: 'test-email' });
    });
    const response = await handler({
      request: request(form(), action, { 'cf-connecting-ip': '192.0.2.1' }),
      env: { ...env, CV_BUCKET: { put: async () => { uploads++; } } },
    });
    assert.equal(response.status, 303);
    assert.equal(response.headers.get('location'), `https://tjenervikar.dk${path}`);
    assert.equal(emails, 1);
    assert.equal(uploads, action === 'job-application' ? 1 : 0);
  }
});

test('all three forms include a honeypot, widget and accessible status', async () => {
  const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
  const forms = [...html.matchAll(/<form\b[^>]*>([\s\S]*?)<\/form>/g)];
  assert.equal(forms.length, 3);
  for (const [markup] of forms) {
    assert.match(markup, /data-protected-form="/);
    assert.match(markup, /name="website"/);
    assert.match(markup, /data-turnstile/);
    assert.match(markup, /data-form-security-status role="status" aria-live="polite"/);
  }
  assert.match(html, /src="\/assets\/form-protection\.js" defer/);
});

async function browserHarness(configResponse) {
  const source = await readFile(new URL('../assets/form-protection.js', import.meta.url), 'utf8');
  const listeners = {};
  const status = { textContent: '', scrollIntoView() {} };
  const button = { textContent: 'Send', disabled: false, dataset: {} };
  const form = {
    id: 'price-form', dataset: { protectedForm: 'price-inquiry' },
    querySelector: (selector) => selector === '[data-form-security-status]' ? status : {},
    addEventListener: (event, callback, capture) => {
      assert.equal(capture, true);
      listeners[event] = callback;
    },
  };
  const scripts = [];
  const window = { addEventListener: (event, callback) => { listeners[event] = callback; } };
  vm.runInNewContext(source, {
    window,
    document: {
      querySelectorAll: () => [form],
      querySelector: () => button,
      createElement: () => ({}),
      head: { appendChild: (script) => scripts.push(script) },
    },
    fetch: async () => configResponse,
    Map,
  });
  await new Promise((resolve) => setImmediate(resolve));
  return { window, listeners, status, button, scripts };
}

function submit(browser) {
  const event = {
    blocked: false, stopped: false,
    preventDefault() { this.blocked = true; },
    stopImmediatePropagation() { this.stopped = true; },
  };
  browser.listeners.submit(event);
  return event;
}

test('browser blocks unverified submits, permits verification and invalidates expired tokens', async () => {
  const browser = await browserHarness(Response.json({ siteKey: env.TURNSTILE_SITE_KEY }));
  assert.equal(submit(browser).blocked, true);
  assert.equal(submit(browser).stopped, true);
  assert.equal(browser.button.disabled, false);
  assert.match(browser.scripts[0].src, /^https:\/\/challenges.cloudflare.com\/turnstile\//);
  let options;
  browser.window.turnstile = {
    render: (_container, config) => { options = config; return 'widget'; },
    reset: () => { options.callback('fresh-token'); },
  };
  browser.window.onFormTurnstileReady();
  assert.equal(options.action, 'price-inquiry');
  options.callback('verified-token');
  assert.equal(submit(browser).blocked, false);
  options['expired-callback']();
  assert.equal(submit(browser).blocked, true);
  options.callback('another-token');
  options['error-callback']();
  assert.equal(submit(browser).blocked, true);
  browser.button.disabled = true;
  browser.button.textContent = 'Sender...';
  browser.listeners.pageshow({ persisted: true });
  assert.equal(browser.button.disabled, false);
  assert.equal(browser.button.textContent, 'Send');
});

test('browser shows an actionable error when protection is not configured', async () => {
  const browser = await browserHarness(new Response('', { status: 503 }));
  assert.match(browser.status.textContent, /Genindlæs siden, eller ring til os/);
  assert.equal(browser.scripts.length, 0);
  assert.equal(submit(browser).blocked, true);
});
