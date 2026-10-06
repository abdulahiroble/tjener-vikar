function reject(message, status) {
  return new Response(JSON.stringify({ success: false, message }), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
    },
  });
}

// Run before sending email or storing attachments. Never trust browser-only checks.
export async function protectForm(request, env, formData, action) {
  if (formData.get('botcheck') || formData.get('website')) {
    const path = action === 'job-application' ? '/tak-vikar' : '/tak';
    return Response.redirect(new URL(path, request.url), 303);
  }

  const origin = request.headers.get('origin');
  if (origin && origin !== new URL(request.url).origin) {
    return reject('Formularen skal sendes fra vores hjemmeside.', 403);
  }

  if (!env.TURNSTILE_SECRET_KEY || !env.TURNSTILE_SITE_KEY) {
    return reject('Formularen er midlertidigt utilgængelig. Ring venligst til os.', 503);
  }

  const token = formData.get('cf-turnstile-response');
  if (typeof token !== 'string' || !token || token.length > 2048) {
    return reject('Bekræft venligst sikkerhedstjekket, og prøv igen.', 400);
  }

  const verification = new URLSearchParams({
    secret: env.TURNSTILE_SECRET_KEY,
    response: token,
  });
  const ip = request.headers.get('cf-connecting-ip');
  if (ip) verification.set('remoteip', ip);

  let result;
  try {
    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: verification,
      signal: AbortSignal.timeout(10000),
    });
    if (!response.ok) throw new Error('Verification unavailable');
    result = await response.json();
  } catch {
    return reject('Sikkerhedstjekket kunne ikke gennemføres. Prøv igen senere.', 503);
  }

  if (result?.success !== true ||
      result.hostname !== new URL(request.url).hostname ||
      result.action !== action) {
    return reject('Sikkerhedstjekket udløb eller mislykkedes. Prøv igen.', 403);
  }

  const email = formData.get('email');
  if (typeof email !== 'string' || email.length > 160 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    return reject('Angiv venligst en gyldig emailadresse.', 400);
  }

  return null;
}
