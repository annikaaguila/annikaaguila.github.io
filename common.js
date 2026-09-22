document.getElementById('year').textContent = new Date().getFullYear();

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window) {
  var els = document.querySelectorAll('[data-animate]');
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  els.forEach(function (el) { io.observe(el); });
} else {
  document.querySelectorAll('[data-animate]').forEach(function (el) { el.classList.add('in'); });
}

// mobile nav toggle
(function () {
  var header = document.querySelector('header.site-nav');
  var toggle = header && header.querySelector('.nav-toggle');
  if (!toggle) return;
  function setOpen(open) {
    header.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  }
  toggle.addEventListener('click', function () {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });
  header.querySelectorAll('nav.links a').forEach(function (a) {
    a.addEventListener('click', function () { setOpen(false); });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && header.classList.contains('open')) { setOpen(false); toggle.focus(); }
  });
  document.addEventListener('click', function (e) {
    if (header.classList.contains('open') && !header.contains(e.target)) setOpen(false);
  });
  window.matchMedia('(min-width: 761px)').addEventListener('change', function (e) {
    if (e.matches) setOpen(false);
  });
})();

// nav: hide on scroll down, reveal on scroll up
(function () {
  var header = document.querySelector('header.site-nav');
  if (!header) return;
  var lastY = window.scrollY;
  var ticking = false;
  var THRESHOLD = 8; // ignore tiny scroll jitter

  function onScroll() {
    var y = window.scrollY;
    var delta = y - lastY;
    var menuOpen = header.classList.contains('open');
    var focusInside = header.contains(document.activeElement);
    if (!menuOpen && !focusInside) {
      if (y <= 0) {
        header.classList.remove('nav-hidden');
      } else if (delta > THRESHOLD) {
        header.classList.add('nav-hidden');
      } else if (delta < -THRESHOLD) {
        header.classList.remove('nav-hidden');
      }
    }
    lastY = y;
    ticking = false;
  }

  window.addEventListener('scroll', function () {
    if (!ticking) {
      window.requestAnimationFrame(onScroll);
      ticking = true;
    }
  }, { passive: true });

  // always reveal if keyboard focus lands in the nav (e.g. tabbing to a link)
  header.addEventListener('focusin', function () { header.classList.remove('nav-hidden'); });
})();
