/* script.js — Home page only */
(function () {
  'use strict';

  // Gentle fade-in of the hero content
  var items = document.querySelectorAll('.hero-text > *');
  items.forEach(function (el, i) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(14px)';
    el.style.transition = 'opacity .6s ease, transform .6s ease';
    setTimeout(function () { el.style.opacity = '1'; el.style.transform = 'none'; }, 80 + i * 90);
  });

  // Photo loaded -> hide the CSS circle (the photo has its own)
  var photo = document.querySelector('.profile-img');
  function photoOk() { if (photo.naturalWidth > 0) photo.parentNode.classList.add('has-photo'); }
  if (photo) { if (photo.complete) photoOk(); photo.addEventListener('load', photoOk); }

  // --- Typewriter role animation (migrated unchanged in behaviour from the old HomeScript.js) ---
  var roles = ['Web Developer', 'Frontend Developer', 'Video Creator', 'Problem Solver'];
  var roleElement = document.getElementById('role');
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var currentRoleIndex = 0;
  var charIndex = roles[0].length;
  var isDeleting = true;

  function runTypewriter() {
    if (prefersReducedMotion || !roleElement) return;

    function tick() {
      var currentWord = roles[currentRoleIndex];

      if (isDeleting) { charIndex--; } else { charIndex++; }

      roleElement.textContent = currentWord.slice(0, charIndex);

      var waitTime = isDeleting ? 55 : 110;

      if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        waitTime = 1800; // Pause after completing the word
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        currentRoleIndex = (currentRoleIndex + 1) % roles.length;
        waitTime = 350; // Pause before typing the next word
      }

      setTimeout(tick, waitTime);
    }

    tick();
  }

  runTypewriter();
})();
