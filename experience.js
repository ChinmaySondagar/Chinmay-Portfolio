/* experience.js — Experience page only: reveal timeline entries in sequence */
(function () {
  'use strict';
  var entries = document.querySelectorAll('.entry');
  if (!('IntersectionObserver' in window)) return;
  entries.forEach(function (el) { el.style.opacity = '0'; el.style.transform = 'translateX(-14px)'; el.style.transition = 'opacity .6s ease, transform .6s ease'; });
  var io = new IntersectionObserver(function (list) {
    list.forEach(function (e) {
      if (e.isIntersecting) { e.target.style.opacity = '1'; e.target.style.transform = 'none'; io.unobserve(e.target); }
    });
  }, { threshold: 0.2 });
  entries.forEach(function (el, i) { el.style.transitionDelay = i * 90 + 'ms'; io.observe(el); });
})();
