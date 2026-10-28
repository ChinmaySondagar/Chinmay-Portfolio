/* ==========================================================
   common.js — shared navigation, icons, image fallbacks
   Single source of truth for the nav bar on all seven pages.
   ========================================================== */
(function () {
  'use strict';

  // ---- Site-wide settings ----
  // >>> Put your WhatsApp number here ONCE: country code + number, digits only (e.g. 919876543210).
  // It is used by the footer on every page and by the Contact page.
  var SITE = window.SITE = { whatsapp: '919054436270' };

  // ---- Single navigation definition (name, file, page key) ----
  var NAV = [
    ['Home', 'index.html', 'home'],
    ['Services', 'services.html', 'services'],
    ['Skills', 'skills.html', 'skills'],
    ['Education', 'education.html', 'education'],
    ['Experience', 'experience.html', 'experience'],
    ['Projects', 'projects.html', 'projects'],
    ['Contact', 'contact.html', 'contact']
  ];

  // ---- SVG icon sprite (use with <svg class="i"><use href="#i-name"/></svg>) ----
  var SPRITE = '<svg xmlns="http://www.w3.org/2000/svg" style="display:none" aria-hidden="true">' +
    sym('code', '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/><line x1="14" y1="4" x2="10" y2="20"/>') +
    sym('monitor', '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/>') +
    sym('java', '<path d="M4 11h13v4a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z"/><path d="M17 12h1.5a2 2 0 0 1 0 4H17"/><path d="M8 3c0 2 2 2 2 4M12 3c0 2 2 2 2 4"/>') +
    sym('gear', '<circle cx="12" cy="12" r="3.2"/><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M5.3 18.7l2.1-2.1M16.6 7.4l2.1-2.1"/>') +
    sym('bulb', '<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.8 10.6c.7.6 1 1.4 1 2.4h5.6c0-1 .3-1.8 1-2.4A6 6 0 0 0 12 3z"/>') +
    sym('cap', '<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.5"/><path d="M22 9v5"/>') +
    sym('arrow', '<path d="M5 12h14M13 6l6 6-6 6"/>') +
    sym('github', '<path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/>') +
    sym('linkedin', '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>') +
    // sym('x', '<path d="M4 4l16 16M20 4L4 20"/>') +
    sym('mail', '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>') +
    sym('user', '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-7 8-7s8 3 8 7"/>') +
    sym('list', '<path d="M9 6h12M9 12h12M9 18h12"/><circle cx="4.5" cy="6" r="1"/><circle cx="4.5" cy="12" r="1"/><circle cx="4.5" cy="18" r="1"/>') +
    sym('chat', '<rect x="4" y="3" width="16" height="15" rx="3"/><path d="M8 9h8M8 13h5"/><path d="M9 18l-3 3v-3"/>') +
    sym('whatsapp', '<path d="M3 21l1.7-5A9 9 0 1 1 8 19.3z"/><path d="M9 9c0 3.5 3 6 6 6l1.2-1.4-2-1-1 .7c-1-.4-1.8-1.2-2.200-2.200l.7-1-1-2z"/>') +
    sym('send', '<path d="M21 3L3 10.5l7 3 3 7z"/><path d="M21 3L10 13.500"/>') +
    sym('school', '<path d="M3 21h18M5 21V10l7-5 7 5v11"/><path d="M12 5V2M9 21v-5h6v5M9 11h.01M15 11h.01M12 11h.01"/>') +
    sym('book', '<path d="M2 5c3-1 7-1 10 1 3-2 7-2 10-1v14c-3-1-7-1-10 1-3-2-7-2-10-1z"/><path d="M12 6v14"/>') +
    sym('star', '<path d="M12 3l2.7 5.6 6.1.9-4.4 4.300 1 6.100L12 17l-5.400 2.900 1-6.100L3.200 9.500l6.100-.9z"/>') +
    sym('check', '<path d="M4 12.500l5 5L20 6.500"/>') +
    sym('bookmark', '<path d="M7 3h10a1 1 0 0 1 1 1v17l-6-4-6 4V4a1 1 0 0 1 1-1z"/>') +
    sym('quote', '<path d="M9 7H6a2 2 0 0 0-2 2v4h4v4H4M20 7h-3a2 2 0 0 0-2 2v4h4v4h-4"/>') +
    sym('target', '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.200"/><path d="M12 12l8-8"/>') +
    sym('mountain', '<path d="M2 20l7-12 4 6 3-4 6 10z"/><path d="M9 8l-2 3"/>') +
    sym('leaf', '<path d="M20 4C10 4 4 9 4 16c0 1.500.3 2.800.8 4C6 12 12 9 20 9c0-2-.5-3.500 0-5z"/><path d="M4 20c4-6 8-8 12-9"/>') +
    sym('shield', '<path d="M12 3l8 3v6c0 5-3.500 8-8 9-4.500-1-8-4-8-9V6z"/><path d="M8.500 12l2.500 2.500 4.500-5"/>') +
    sym('truck', '<rect x="2" y="6" width="12" height="10" rx="1"/><path d="M14 10h4l4 3v3h-8"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/>') +
    sym('external', '<path d="M14 4h6v6M20 4l-9 9"/><path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>') +
    sym('brain', '<path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 4.500A3 3 0 0 0 12 18V6a2 2 0 0 0-3-2zM15 4a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 4.500A3 3 0 0 1 12 18"/>') +
    sym('users', '<circle cx="9" cy="8" r="3.500"/><path d="M2 20c0-3.500 3-6 7-6s7 2.500 7 6"/><circle cx="17" cy="9" r="2.500"/><path d="M17 14c3 0 5 2 5 5"/>') +
    sym('message', '<path d="M4 5h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H10l-5 4v-4H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z"/>') +
    '</svg>';

  function sym(id, body) {
    return '<symbol id="i-' + id + '" viewBox="0 0 24 24">' + body + '</symbol>';
  }

  function buildHeader() {
    var page = document.body.getAttribute('data-page');
    var links = NAV.map(function (n) {
      var active = n[2] === page;
      return '<a href="' + n[1] + '" class="nav-link' + (active ? ' active' : '') + '"' +
        (active ? ' aria-current="page"' : '') + '>' + n[0] + '</a>';
    }).join('');

    return '<header class="site-header" id="site-header"><div class="nav-inner container">' +
      '<a class="logo" href="index.html" aria-label="Chinmay – home">' +
      '<span class="logo-frame"><img class="logo-img" src="images/logo.png" alt="Chinmay logo"></span>' +
      '<span class="logo-text"><span class="logo-c">C</span>hinmay</span></a>' +
      '<button class="nav-toggle" id="nav-toggle" aria-label="Toggle menu" aria-expanded="false" aria-controls="primary-nav">' +
      '<span></span><span></span><span></span></button>' +
      '<nav class="nav-links" id="primary-nav" aria-label="Primary">' + links + '</nav>' +
      '</div></header>';
  }

  // ---- Footer (identical on every page; markup migrated from the old Contact/Project pages) ----
  function buildFooter() {
    var hasWa = /^\d{10,15}$/.test(SITE.whatsapp);
    var href = hasWa ? 'https://wa.me/' + SITE.whatsapp : 'contact.html';
    var ext = hasWa ? ' target="_blank" rel="noopener noreferrer"' : '';
    return '<footer class="footer" id="site-footer">' +
      '<div class="mountain-mark" aria-hidden="true"><svg viewBox="0 0 60 35"><path d="M2 31 17 10 24 20 32 5 57 31Z"/></svg></div>' +
      '<div class="footer-message"><span></span><p>Let\u2019s build something meaningful together.</p><span></span></div>' +
      '<div class="footer-right">' +
      '<a class="footer-whatsapp" id="footer-wa" href="' + href + '"' + ext + ' aria-label="Contact Chinmay on WhatsApp">' +
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 11.8a8.5 8.5 0 0 1-12.6 7.4L3 20.5l1.4-4.7A8.5 8.5 0 1 1 20.5 11.8Z"/>' +
      '<path d="M8.5 7.5c.3-.5.6-.5.9-.5h.4c.2 0 .4.1.5.4l.8 1.8c.1.2.1.4-.1.6l-.6.8c-.2.2-.2.4 0 .6.5.9 1.3 1.7 2.2 2.2.2.1.4.1.6-.1l.9-1.1c.2-.2.4-.2.6-.1l1.7.8c.3.1.4.3.4.5 0 .3-.1 1.1-.7 1.6-.5.5-1.2.7-1.9.6-1-.1-2.3-.7-3.8-2-1.3-1.2-2.2-2.7-2.4-3.7-.2-.8.1-1.4.5-1.9Z"/></svg></a>' +
      '<small>\u00a9 <span data-year>2026</span> Chinmay. All rights reserved.</small>' +
      '</div></footer>';
  }

  function init() {
    // Sprite + header
    document.body.insertAdjacentHTML('afterbegin', SPRITE + buildHeader());

    // Footer: placed right after <main>, once per page
    if (!document.getElementById('site-footer')) {
      var main = document.querySelector('main');
      if (main) main.insertAdjacentHTML('afterend', buildFooter());
      else document.body.insertAdjacentHTML('beforeend', buildFooter());
    }

    // Mobile menu toggle
    var toggle = document.getElementById('nav-toggle');
    var nav = document.getElementById('primary-nav');
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') { nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); }
    });

    // Logo image: show only if the file actually exists
    var logo = document.querySelector('.logo');
    var logoImg = logo.querySelector('.logo-img');
    function logoOk() { logo.classList.add('has-logo'); }
    if (logoImg.complete && logoImg.naturalWidth > 0) logoOk();
    logoImg.addEventListener('load', logoOk);

    // Optional images: hide gracefully if missing (layout never depends on them)
    document.querySelectorAll('img[data-optional]').forEach(function (img) {
      function hide() { img.style.visibility = 'hidden'; }
      if (img.complete && img.naturalWidth === 0) hide();
      img.addEventListener('error', hide);
    });

    // Footer year
    document.querySelectorAll('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
