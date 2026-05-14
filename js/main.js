// Venous Systems Inc - Main JS

(function () {
  'use strict';

  // Mobile menu toggle
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
      const expanded = nav.classList.contains('open');
      toggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    });
  }

  // Close mobile menu when a link is clicked
  document.querySelectorAll('.nav a').forEach(function (link) {
    link.addEventListener('click', function () {
      if (nav) nav.classList.remove('open');
    });
  });

  // Smooth scroll for hash links
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Contact form handler
  const form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const status = document.querySelector('#form-status');
      const submitBtn = form.querySelector('button[type="submit"]');

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
      }

      // Simulated submission - replace with real endpoint in production
      setTimeout(function () {
        if (status) {
          status.innerHTML = '<div class="callout"><strong>Thank you!</strong> Your request has been received. A Venous Systems specialist will contact you within one business day.</div>';
          status.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        form.reset();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Submit Request';
        }
      }, 800);
    });
  }

  // Set current year in footer
  document.querySelectorAll('.current-year').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
