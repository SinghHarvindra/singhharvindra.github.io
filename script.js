/* =================================================================
   Dr. Harvindra Singh — Academic Personal Website
   script.js — Smooth scroll, mobile menu, active link highlighting
   ================================================================= */

(function () {
  'use strict';

  /* -------- Footer year -------- */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* -------- Mobile nav toggle -------- */
  var toggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');

  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });

    /* Close mobile menu after clicking a link */
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
      });
    });
  }

  /* -------- Smooth-scroll fallback (browsers without CSS smooth) -------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId.length <= 1) return;
      var target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      var top = target.getBoundingClientRect().top + window.pageYOffset - 70;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });

  /* -------- Active nav link on scroll -------- */
  var sections = document.querySelectorAll('section[id]');
  var links = document.querySelectorAll('.nav-links a');

  function setActiveLink() {
    var scrollPos = window.scrollY + 100;
    sections.forEach(function (section) {
      var top = section.offsetTop;
      var height = section.offsetHeight;
      var id = section.getAttribute('id');
      if (scrollPos >= top && scrollPos < top + height) {
        links.forEach(function (link) {
          link.style.color = '';
          link.style.background = '';
          if (link.getAttribute('href') === '#' + id) {
            link.style.color = '#2563eb';
            link.style.background = '#eff4fb';
          }
        });
      }
    });
  }

  window.addEventListener('scroll', setActiveLink, { passive: true });
  setActiveLink();
})();
