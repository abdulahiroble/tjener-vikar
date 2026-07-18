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
    if (!env.RESEND_API_KEY) {
      return jsonResponse({ success: false, message: 'Email service mangler konfiguration.' }, 500);
    }

    const formData = await request.formData();

    if (formData.get('botcheck')) {
      return Response.redirect(new URL('/tak', request.url), 303);
    }

    const name = validateText(formData.get('name'), 'Navn', 120);
    const email = validateText(formData.get('email'), 'Email', 160);
    const phone = validateText(formData.get('phone'), 'Telefon', 80);
    const message = validateText(formData.get('message'), 'Besked', 2000);

    for (const result of [name, email, phone, message]) {
      if (result.error) {
        return jsonResponse({ success: false, message: result.error }, 400);
      }
    }

    const company = String(formData.get('company') || '').trim().slice(0, 120);

    const html = `
      <h1>Ny kontaktbesked - Tjenervikar.dk</h1>
      <p><strong>Virksomhed:</strong> ${escapeHtml(company || 'Ikke angivet')}</p>
      <p><strong>Navn:</strong> ${escapeHtml(name.value)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email.value)}</p>
      <p><strong>Telefon:</strong> ${escapeHtml(phone.value)}</p>
      <hr>
      <p><strong>Besked:</strong></p>
      <p>${escapeHtml(message.value).replace(/\n/g, '<br>')}</p>
    `;

    await sendEmail(env, {
      from: env.RESEND_FROM || 'Tjenervikar <onboarding@resend.dev>',
      to: [env.INQUIRY_TO || 'info@tjenervikar.dk'],
      reply_to: email.value,
      subject: 'Ny kontaktbesked - Tjenervikar.dk',
      html,
    });

    return Response.redirect(new URL('/tak', request.url), 303);
  } catch (error) {
    console.error('Contact form error:', error);
    return jsonResponse({ success: false, message: 'Beskeden kunne ikke sendes lige nu. Prøv igen senere.' }, 500);
  }
}

export async function onRequestGet() {
  return jsonResponse({ success: false, message: 'Method not allowed.' }, 405);
}
