/* projects.js — Projects page only */
(function () {
  'use strict';
  // Set this to your live project URL when it is ready.
  var PROJECT_URL = '';
  var btn = document.getElementById('view-project');
  if (PROJECT_URL) { btn.href = PROJECT_URL; btn.target = '_blank'; btn.rel = 'noopener'; }
  else {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      alert('Nexora Agri Mart is still in progress — live link coming soon!');
    });
  }
})();
