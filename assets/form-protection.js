(() => {
  const forms = document.querySelectorAll('form[data-protected-form]');
  if (!forms.length) return;

  const states = new Map();
  forms.forEach((form) => {
    const status = form.querySelector('[data-form-security-status]');
    const state = { token: '', widget: null, status };
    states.set(form, state);
    // Capture runs before the calculator's submit handler disables its button.
    form.addEventListener('submit', (event) => {
      if (!state.token) {
        event.preventDefault();
        event.stopImmediatePropagation();
        status.textContent = 'Vent på sikkerhedstjekket, eller genindlæs siden og prøv igen.';
        status.scrollIntoView({ block: 'center', behavior: 'smooth' });
      }
    }, true);
  });

  const showFailure = () => {
    states.forEach(({ status }) => {
      status.textContent = 'Sikkerhedstjekket kunne ikke indlæses. Genindlæs siden, eller ring til os.';
    });
  };

  // bfcache can restore an already-used or expired token and a disabled button.
  window.addEventListener('pageshow', (event) => {
    if (!event.persisted) return;
    states.forEach((state, form) => {
      state.token = '';
      if (state.widget !== null && window.turnstile) window.turnstile.reset(state.widget);
      const button = document.querySelector(`button[form="${form.id}"]`) ||
        form.querySelector('button[type="submit"]');
      if (button) {
        button.disabled = false;
        button.textContent = button.dataset.originalLabel;
      }
    });
  });
  forms.forEach((form) => {
    const button = document.querySelector(`button[form="${form.id}"]`) ||
      form.querySelector('button[type="submit"]');
    if (button) button.dataset.originalLabel = button.textContent;
  });

  fetch('/api/form-config', { cache: 'no-store' })
    .then(async (response) => {
      if (!response.ok) throw new Error('Form protection unavailable');
      const { siteKey } = await response.json();
      if (!siteKey) throw new Error('Missing site key');

      window.onFormTurnstileReady = () => {
        try {
          states.forEach((state, form) => {
            state.widget = window.turnstile.render(form.querySelector('[data-turnstile]'), {
              sitekey: siteKey,
              action: form.dataset.protectedForm,
              size: 'flexible',
              language: 'da',
              callback: (token) => {
                state.token = token;
                state.status.textContent = '';
              },
              'expired-callback': () => {
                state.token = '';
                state.status.textContent = 'Sikkerhedstjekket udløb. Bekræft igen før afsendelse.';
              },
              'error-callback': () => {
                state.token = '';
                state.status.textContent = 'Sikkerhedstjekket mislykkedes. Genindlæs siden og prøv igen.';
              },
            });
          });
        } catch {
          showFailure();
        }
      };
      const script = document.createElement('script');
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onFormTurnstileReady&render=explicit';
      script.async = true;
      script.onerror = showFailure;
      document.head.appendChild(script);
    })
    .catch(showFailure);
})();
