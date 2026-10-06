export function onRequestGet({ env }) {
  const configured = Boolean(env.TURNSTILE_SITE_KEY && env.TURNSTILE_SECRET_KEY);
  return new Response(JSON.stringify({
    siteKey: configured ? env.TURNSTILE_SITE_KEY : null,
  }), {
    status: configured ? 200 : 503,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
    },
  });
}
