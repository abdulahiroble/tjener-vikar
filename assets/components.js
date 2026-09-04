(function () {
  // UI behaviors only. The nav and footer are now static HTML in every page
  // so search engines can crawl internal links without JavaScript rendering.

  var toggle = document.querySelector('.mobile-menu-toggle');
  var menu = document.querySelector('.nav-menu');
  if (toggle && menu) {
    var setMenu = function (open) {
      menu.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    };

    toggle.addEventListener('click', function () {
      setMenu(!menu.classList.contains('open'));
    });

    // Close the menu after tapping a nav link
    menu.addEventListener('click', function (event) {
      if (event.target.closest('a')) setMenu(false);
    });

    // Never leak the open mobile menu into the desktop layout on resize
    window.addEventListener('resize', function () {
      if (window.innerWidth > 768) setMenu(false);
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
