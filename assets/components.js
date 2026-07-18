(function () {
  var nav = document.createElement('nav');
  nav.className = 'nav';
  nav.innerHTML = '\
    <div class="container nav-container">\
      <a href="/" class="nav-logo" style="color:white;text-decoration:none">TjenerVikar</a>\
      <div class="nav-menu">\
        <a href="/" class="nav-link">Forside</a>\
        <a href="/#prisberegner" class="nav-link">Prisberegner</a>\
        <a href="/tjener-vikar.html" class="nav-link">Tjener Vikar</a>\
        <a href="/lej-en-kok.html" class="nav-link">Lej Kok</a>\
        <a href="/lej-tjener.html" class="nav-link">Lej Tjener</a>\
        <a href="/vikarbureau-koebenhavn.html" class="nav-link">København</a>\
        <a href="/#kontakt" class="nav-link">Kontakt</a>\
        <a href="/#prisberegner" class="nav-cta">Beregn pris</a>\
        <a href="tel:+4527857773" class="nav-phone">\
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>\
          Ring nu\
        </a>\
      </div>\
      <button class="mobile-menu-toggle" aria-label="Menu">\u2630</button>\
    </div>';
  document.body.insertBefore(nav, document.body.firstChild);

  var footer = document.createElement('footer');
  footer.className = 'footer';
  footer.innerHTML = '\
    <div class="container">\
      <div class="footer-grid">\
        <div class="footer-brand">\
          <h4>TjenerVikar</h4>\
          <p>Vi leverer erfarent personale til events, service og køkken. Vi opererer i Stork\u00f8benhavn og Sj\u00e6lland. Hurtigt, trygt og til gennemsigtige priser.</p>\
        </div>\
        <div class="footer-links">\
          <h4>Services</h4>\
          <ul>\
            <li><a href="/tjener-vikar.html">Tjener Vikar</a></li>\
            <li><a href="/lej-tjener.html">Lej Tjener</a></li>\
            <li><a href="/leje-af-tjenere.html">Leje af Tjenere</a></li>\
            <li><a href="/lej-en-kok.html">Lej Kok</a></li>\
            <li><a href="/lej-en-bartender.html">Lej Bartender</a></li>\
            <li><a href="/koekkenmedhjaelper.html">K\u00f8kkenmedhj\u00e6lper</a></li>\
            <li><a href="/serveringspersonale.html">Serveringspersonale</a></li>\
          </ul>\
        </div>\
        <div class="footer-links">\
          <h4>Omr\u00e5der</h4>\
          <ul>\
            <li><a href="/vikarbureau-koebenhavn.html">K\u00f8benhavn</a></li>\
            <li><a href="/vikarbureau-amager.html">Amager</a></li>\
            <li><a href="/vikarbureau-frederiksberg.html">Frederiksberg</a></li>\
            <li><a href="/vikarbureau-oesterbro.html">\u00d8sterbro</a></li>\
            <li><a href="/vikarbureau-nordsjaelland.html">Nordsj\u00e6lland</a></li>\
            <li><a href="/vikarbureau-sjaelland.html">Sj\u00e6lland</a></li>\
          </ul>\
        </div>\
        <div class="footer-links">\
          <h4>Guides</h4>\
          <ul>\
            <li><a href="/kokke-loen.html">Kokke l\u00f8n</a></li>\
            <li><a href="/koekkenmedhjaelper-loen.html">K\u00f8kkenmedhj\u00e6lper l\u00f8n</a></li>\
            <li><a href="/hvor-meget-tjener-en-vikar.html">Vikarl\u00f8n</a></li>\
            <li><a href="/sommelier-loen.html">Sommelier l\u00f8n</a></li>\
            <li><a href="/bryllup-huskeliste.html">Bryllup huskeliste</a></li>\
            <li><a href="/tilkaldevikar-koebenhavn.html">Tilkaldevikar</a></li>\
            <li><a href="/hvad-er-et-vikarbureau.html">Hvad er et vikarbureau?</a></li>\
          </ul>\
        </div>\
      </div>\
      <div class="footer-bottom">\
        <p>\u00a9 2025 TjenerVikar. Alle rettigheder forbeholdes. Vi hj\u00e6lper prim\u00e6rt virksomheder i Stork\u00f8benhavn og p\u00e5 Sj\u00e6lland.</p>\
      </div>\
    </div>';
  document.body.appendChild(footer);

  var phone = document.createElement('a');
  phone.href = 'tel:+4527857773';
  phone.className = 'floating-phone';
  phone.setAttribute('aria-label', 'Ring til TjenerVikar');
  phone.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>';
  document.body.appendChild(phone);

  var toggle = document.querySelector('.mobile-menu-toggle');
  var menu = document.querySelector('.nav-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      if (menu.style.display === 'flex') {
        menu.style.display = 'none';
      } else {
        menu.style.display = 'flex';
        menu.style.flexDirection = 'column';
        menu.style.position = 'absolute';
        menu.style.top = '100%';
        menu.style.left = '0';
        menu.style.right = '0';
        menu.style.backgroundColor = '#0A1628';
        menu.style.padding = '20px';
        menu.style.gap = '15px';
      }
    });
  }

  var faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(function (item) {
    var question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', function () {
        item.classList.toggle('active');
      });
    }
  });
})();
