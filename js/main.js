// Venous Systems Inc - Main JS

(function () {
  'use strict';

  // Mobile menu toggle with hamburger animation
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
      toggle.classList.toggle('active');
      var expanded = nav.classList.contains('open');
      toggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    });
  }

  // Close mobile menu when a link is clicked
  document.querySelectorAll('.nav a').forEach(function (link) {
    link.addEventListener('click', function () {
      if (nav) nav.classList.remove('open');
      if (toggle) toggle.classList.remove('active');
    });
  });

  // Header scroll effect
  var header = document.querySelector('.header');
  if (header) {
    var onScroll = function () {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Fade-in on scroll using IntersectionObserver
  var fadeEls = document.querySelectorAll('.fade-in');
  if (fadeEls.length > 0 && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    fadeEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback: show all immediately
    fadeEls.forEach(function (el) {
      el.classList.add('visible');
    });
  }

  // Smooth scroll for hash links
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Contact form handler
  var form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var status = document.querySelector('#form-status');
      var submitBtn = form.querySelector('button[type="submit"]');

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
