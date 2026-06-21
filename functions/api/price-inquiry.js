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
      return jsonResponse({ success: true, message: 'Tak for din forespørgsel.' });
    }

    const company = validateText(formData.get('company'), 'Virksomhed', 120);
    const name = validateText(formData.get('name'), 'Navn', 120);
    const email = validateText(formData.get('email'), 'Email', 160);
    const phone = validateText(formData.get('phone'), 'Telefon', 80);

    for (const result of [company, name, email, phone]) {
      if (result.error) {
        return jsonResponse({ success: false, message: result.error }, 400);
      }
    }

    const role = String(formData.get('role') || '').trim().slice(0, 120);
    const location = String(formData.get('location') || '').trim().slice(0, 120);
    const staffCount = String(formData.get('staff_count') || '').trim().slice(0, 10);
    const hoursPerDay = String(formData.get('hours_per_day') || '').trim().slice(0, 10);
    const startDate = String(formData.get('start_date') || '').trim().slice(0, 20);
    const endDate = String(formData.get('end_date') || '').trim().slice(0, 20);
    const daysCount = String(formData.get('days_count') || '').trim().slice(0, 10);
    const hourlyPrice = String(formData.get('hourly_price') || '').trim().slice(0, 20);
    const totalPrice = String(formData.get('total_price') || '').trim().slice(0, 20);
    const message = String(formData.get('message') || '').trim().slice(0, 2000);

    const html = `
      <h1>Ny prisforespørgsel - Tjenervikar.dk</h1>
      <p><strong>Virksomhed:</strong> ${escapeHtml(company.value)}</p>
      <p><strong>Kontaktperson:</strong> ${escapeHtml(name.value)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email.value)}</p>
      <p><strong>Telefon:</strong> ${escapeHtml(phone.value)}</p>
      <hr>
      <h2>Beregnet pris</h2>
      <p><strong>Rolle:</strong> ${escapeHtml(role || 'Ikke valgt')}</p>
      <p><strong>Lokation:</strong> ${escapeHtml(location || 'Ikke valgt')}</p>
      <p><strong>Antal medarbejdere:</strong> ${escapeHtml(staffCount || 'Ikke angivet')}</p>
      <p><strong>Timer pr. dag:</strong> ${escapeHtml(hoursPerDay || 'Ikke angivet')}</p>
      <p><strong>Periode:</strong> ${escapeHtml(startDate || '—')} til ${escapeHtml(endDate || '—')}</p>
      <p><strong>Antal dage:</strong> ${escapeHtml(daysCount || '1')}</p>
      <p><strong>Timepris fra:</strong> ${escapeHtml(hourlyPrice || '—')}</p>
      <p><strong>Estimeret total:</strong> ${escapeHtml(totalPrice || '—')}</p>
      ${message ? `<hr><p><strong>Besked:</strong></p><p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>` : ''}
    `;

    await sendEmail(env, {
      from: env.RESEND_FROM || 'Tjenervikar <onboarding@resend.dev>',
      to: [env.INQUIRY_TO || 'info@tjenervikar.dk'],
      reply_to: email.value,
      subject: 'Ny prisforespørgsel - Tjenervikar.dk',
      html,
    });

    return Response.redirect(new URL('/tak', request.url), 303);
  } catch (error) {
    console.error('Price inquiry error:', error);
    return jsonResponse({ success: false, message: 'Forespørgslen kunne ikke sendes lige nu. Prøv igen senere.' }, 500);
  }
}

export async function onRequestGet() {
  return jsonResponse({ success: false, message: 'Method not allowed.' }, 405);
}
