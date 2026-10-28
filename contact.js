/* contact.js — Contact page only: validates the form and opens WhatsApp with the message */
(function () {
  'use strict';

  // The WhatsApp number is set once in common.js (SITE.whatsapp).
  var WHATSAPP_NUMBER = (window.SITE && window.SITE.whatsapp) || '';

  function waUrl(text) {
    var base = 'https://wa.me/' + WHATSAPP_NUMBER;
    return text ? base + '?text=' + encodeURIComponent(text) : base;
  }

  var waLink = document.getElementById('wa-link');
  waLink.href = waUrl('Hi Chinmay!');
  waLink.addEventListener('click', function (e) {
    if (!WHATSAPP_NUMBER) { e.preventDefault(); alert('Add your WhatsApp number in common.js (SITE.whatsapp).'); }
  });

  var form = document.getElementById('contact-form');
  var error = document.getElementById('form-error');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = form.name.value.trim();
    var subject = form.subject.value.trim();
    var message = form.message.value.trim();

    if (!name || !subject || !message) {
      error.hidden = false;
      error.textContent = 'Please fill in your name, subject and message.';
      return;
    }
    error.hidden = true;

    if (!WHATSAPP_NUMBER) {
      error.hidden = false;
      error.textContent = 'WhatsApp number not set yet — add it in common.js (SITE.whatsapp).';
      return;
    }
    var text = 'Hi Chinmay, I am ' + name + '.\nSubject: ' + subject + '\n\n' + message;
    window.open(waUrl(text), '_blank', 'noopener');
    form.reset();
  });
})();
