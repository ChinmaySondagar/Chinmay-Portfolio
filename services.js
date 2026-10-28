/* services.js — Services page only */
(function () {
  'use strict';
  var cards = document.querySelectorAll('.service');
  if (!('IntersectionObserver' in window)) return;
  cards.forEach(function (c, i) { c.style.opacity = '0'; c.style.transform = 'translateY(18px)'; c.style.transitionDelay = (i % 3) * 80 + 'ms'; });
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.style.opacity = '1'; e.target.style.transform = ''; io.unobserve(e.target); }
    });
  }, { threshold: 0.15 });
  cards.forEach(function (c) { io.observe(c); });
})();
