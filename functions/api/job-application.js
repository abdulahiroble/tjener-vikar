const MAX_FILE_SIZE = 10 * 1024 * 1024;
const ALLOWED_EXTENSIONS = new Set(['pdf', 'doc', 'docx']);
const ALLOWED_MIME_TYPES = new Set([
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]);

function jsonResponse(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
    },
  });
}

function escapeHtml(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function getFileExtension(filename) {
  const parts = String(filename || '').toLowerCase().split('.');
  return parts.length > 1 ? parts.pop() : '';
}

function sanitizeFilename(filename) {
  return String(filename || 'cv')
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9._-]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 120) || 'cv';
}

function validateText(value, label, maxLength = 500) {
  const text = String(value || '').trim();

  if (!text) {
    return { error: `${label} mangler.` };
  }

  if (text.length > maxLength) {
    return { error: `${label} er for lang.` };
  }

  return { value: text };
}

function arrayBufferToBase64(buffer) {
  const bytes = new Uint8Array(buffer);
  let binary = '';
  const chunkSize = 0x8000;

  for (let i = 0; i < bytes.length; i += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(i, i + chunkSize));
  }

  return btoa(binary);
}

async function sendEmail(env, payload) {
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      authorization: `Bearer ${env.RESEND_API_KEY}`,
      'content-type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data?.message || 'Email kunne ikke sendes.');
  }

  return data;
}

export async function onRequestPost({ request, env }) {
  try {
    if (!env.CV_BUCKET) {
      return jsonResponse({ success: false, message: 'CV storage mangler konfiguration.' }, 500);
    }

    if (!env.RESEND_API_KEY) {
      return jsonResponse({ success: false, message: 'Email service mangler konfiguration.' }, 500);
    }

    const formData = await request.formData();

    if (formData.get('botcheck')) {
      return jsonResponse({ success: true, message: 'Tak for din ansøgning.' });
    }

    const name = validateText(formData.get('name'), 'Navn', 120);
    const email = validateText(formData.get('email'), 'Email', 160);
    const phone = validateText(formData.get('phone'), 'Telefon', 80);
    const role = validateText(formData.get('role'), 'Rolle', 120);

    for (const result of [name, email, phone, role]) {
      if (result.error) {
        return jsonResponse({ success: false, message: result.error }, 400);
      }
    }

    const experience = String(formData.get('experience') || '').trim().slice(0, 40);
    const message = String(formData.get('message') || '').trim().slice(0, 2000);
    const cv = formData.get('attachment');

    if (!(cv instanceof File) || !cv.name || cv.size === 0) {
      return jsonResponse({ success: false, message: 'Upload venligst dit CV.' }, 400);
    }

    if (cv.size > MAX_FILE_SIZE) {
      return jsonResponse({ success: false, message: 'CV må maks være 10MB.' }, 400);
    }

    const extension = getFileExtension(cv.name);

    if (!ALLOWED_EXTENSIONS.has(extension)) {
      return jsonResponse({ success: false, message: 'CV skal være PDF, DOC eller DOCX.' }, 400);
    }

    if (cv.type && !ALLOWED_MIME_TYPES.has(cv.type)) {
      return jsonResponse({ success: false, message: 'CV filtypen er ikke tilladt.' }, 400);
    }

    const timestamp = new Date().toISOString();
    const key = `job-applications/${timestamp.slice(0, 10)}/${crypto.randomUUID()}-${sanitizeFilename(cv.name)}`;
    const cvBuffer = await cv.arrayBuffer();

    await env.CV_BUCKET.put(key, cvBuffer, {
      httpMetadata: {
        contentType: cv.type || 'application/octet-stream',
      },
      customMetadata: {
        applicantName: name.value,
        applicantEmail: email.value,
        originalFilename: cv.name,
        submittedAt: timestamp,
      },
    });

    const html = `
      <h1>Ny jobansøgning - Tjenervikar.dk</h1>
      <p><strong>Navn:</strong> ${escapeHtml(name.value)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email.value)}</p>
      <p><strong>Telefon:</strong> ${escapeHtml(phone.value)}</p>
      <p><strong>Rolle:</strong> ${escapeHtml(role.value)}</p>
      <p><strong>Erfaring:</strong> ${escapeHtml(experience || 'Ikke angivet')}</p>
      <p><strong>Besked:</strong></p>
      <p>${escapeHtml(message || 'Ingen besked angivet.').replace(/\n/g, '<br>')}</p>
      <hr>
      <p><strong>CV fil:</strong> ${escapeHtml(cv.name)}</p>
      <p><strong>R2 nøgle:</strong> ${escapeHtml(key)}</p>
      <p>CV'et er gemt i Cloudflare R2 bucketten. Log ind i Cloudflare for at hente filen.</p>
    `;

    await sendEmail(env, {
      from: env.RESEND_FROM || 'Tjenervikar <onboarding@resend.dev>',
      to: [env.JOB_APPLICATION_TO || 'job@tjenervikar.dk'],
      reply_to: email.value,
      subject: 'Ny jobansøgning - Tjenervikar.dk',
      html,
      attachments: [
        {
          filename: cv.name,
          content: arrayBufferToBase64(cvBuffer),
          contentType: cv.type || 'application/octet-stream',
        },
      ],
    });

    return Response.redirect(new URL('/tak', request.url), 303);
  } catch (error) {
    console.error('Job application error:', error);
    return jsonResponse({ success: false, message: 'Ansøgningen kunne ikke sendes lige nu. Prøv igen senere.' }, 500);
  }
}

export async function onRequestGet() {
  return jsonResponse({ success: false, message: 'Method not allowed.' }, 405);
}
