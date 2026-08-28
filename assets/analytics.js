/*
 * TjenerVikar — GA4-måling med Consent Mode v2
 *
 * Opsætning:
 *   1) Opret en GA4-property og en web-datastream i Google Analytics.
 *   2) Erstat GA4_MEASUREMENT_ID herunder med måle-id'et (format: G-XXXXXXXXXX).
 *
 * Events (kun efter samtykke til statistik):
 *   phone_clicked              { link_location }         — alle tel:-links
 *   contact_form_submitted     {}                        — kontaktformularen (#contact-form)
 *   price_inquiry_submitted    { role }                  — prisberegneren (#price-form)
 *   job_application_submitted  {}                        — vikaransøgning (#job-form)
 *
 * Ingen data sendes, før den besøgende har accepteret statistik-cookies.
 */
(function () {
  'use strict';

  var GA4_MEASUREMENT_ID = 'G-5WCFJEQ00J';
  var CONSENT_KEY = 'tv-cookie-consent';

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };

  // Consent Mode v2: alt afvist som standard, sat FØR gtag.js indlæses
  window.gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied'
  });

  function ga4Active() {
    return document.getElementById('ga4-script') !== null;
  }

  function loadGa4() {
    if (ga4Active()) return;
    var script = document.createElement('script');
    script.id = 'ga4-script';
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA4_MEASUREMENT_ID;
    document.head.appendChild(script);
    window.gtag('js', new Date());
    window.gtag('config', GA4_MEASUREMENT_ID);
  }

  function track(eventName, params) {
    if (!ga4Active()) return;
    window.gtag('event', eventName, params || {});
  }

  // --- Konverteringsevents ---

  document.addEventListener('click', function (event) {
    var link = event.target.closest ? event.target.closest('a[href^="tel:"]') : null;
    if (!link) return;
    var location = 'other';
    if (link.closest('.nav')) location = 'nav';
    else if (link.closest('.floating-phone')) location = 'floating_button';
    else if (link.closest('.cta-section')) location = 'cta_section';
    else if (link.closest('.contact-section')) location = 'contact_section';
    track('phone_clicked', { link_location: location });
  });

  document.addEventListener('submit', function (event) {
    var form = event.target;
    if (!form || form.nodeName !== 'FORM') return;
    if (form.id === 'contact-form') {
      track('contact_form_submitted');
    } else if (form.id === 'job-form') {
      track('job_application_submitted');
    } else if (form.id === 'price-form') {
      var roleField = form.querySelector('#role');
      track('price_inquiry_submitted', { role: roleField ? roleField.value : '' });
    }
  });

  // --- Minimal samtykke-banner (dansk, opt-in før måling) ---

  function applyConsent(granted) {
    try { localStorage.setItem(CONSENT_KEY, granted ? 'granted' : 'denied'); } catch (e) { /* ignore */ }
    window.gtag('consent', 'update', {
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      analytics_storage: granted ? 'granted' : 'denied'
    });
    if (granted) loadGa4();
  }

  function showBanner() {
    var bar = document.createElement('div');
    bar.id = 'tv-consent-banner';
    bar.setAttribute('role', 'dialog');
    bar.setAttribute('aria-label', 'Cookie-samtykke');
    bar.style.cssText =
      'position:fixed;left:16px;right:16px;bottom:16px;z-index:9999;' +
      'background:#0a1628;color:#fff;padding:16px 20px;border-radius:12px;' +
      'box-shadow:0 10px 30px rgba(0,0,0,.25);display:flex;gap:16px;' +
      'align-items:center;flex-wrap:wrap;font:14px/1.5 Inter,system-ui,sans-serif;';
    var text = document.createElement('p');
    text.style.cssText = 'flex:1 1 320px;margin:0;';
    text.textContent =
      'Vi bruger cookies til statistik (Google Analytics) for at forbedre siden. ' +
      'Vælger du "Kun nødvendige", måler vi ingenting.';
    var accept = document.createElement('button');
    accept.type = 'button';
    accept.textContent = 'Accepter statistik';
    accept.style.cssText =
      'background:#2563eb;color:#fff;border:0;border-radius:8px;' +
      'padding:10px 18px;cursor:pointer;font-weight:600;';
    accept.addEventListener('click', function () { applyConsent(true); bar.remove(); });
    var decline = document.createElement('button');
    decline.type = 'button';
    decline.textContent = 'Kun nødvendige';
    decline.style.cssText =
      'background:transparent;color:#fff;border:1px solid rgba(255,255,255,.4);' +
      'border-radius:8px;padding:10px 18px;cursor:pointer;';
    decline.addEventListener('click', function () { applyConsent(false); bar.remove(); });
    bar.appendChild(text);
    bar.appendChild(accept);
    bar.appendChild(decline);
    document.body.appendChild(bar);
  }

  var savedConsent = null;
  try { savedConsent = localStorage.getItem(CONSENT_KEY); } catch (e) { /* ignore */ }

  if (savedConsent === 'granted') {
    loadGa4();
  } else if (savedConsent !== 'denied') {
    showBanner(); // spørg én gang; afvisning gemmes og banneret vises ikke igen
  }
})();
