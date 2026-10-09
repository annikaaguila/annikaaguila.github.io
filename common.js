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

// "My Personality" section — build cards from assets/data/personality-reels.js.
// Editing that data file is the only thing needed to add/update real cards;
// this just renders whatever is in window.PERSONALITY_REELS.
(function () {
  var data = window.PERSONALITY_REELS;
  if (!Array.isArray(data)) return;

  var PLATFORM_LABEL = { tiktok: 'TikTok', instagram: 'Instagram' };
  var STAT_ORDER = ['views', 'likes', 'comments', 'shares', 'saves'];

  function fmt(n) { return n.toLocaleString('en-US'); }

  function statsLine(stats) {
    if (!stats) return null;
    var parts = STAT_ORDER
      .filter(function (k) { return typeof stats[k] === 'number'; })
      .map(function (k) { return fmt(stats[k]) + ' ' + k; });
    return parts.length ? parts.join(' · ') : null;
  }

  function buildMedia(item) {
    var wrap = document.createElement('div');
    wrap.className = 'phone personality-phone';
    var screen = document.createElement('div');
    screen.className = 'phone-screen';
    var media = document.createElement('div');
    media.className = 'personality-media';

    if (item.reelUrl) {
      // Real reel: show the approved local thumbnail if provided, and always
      // give a direct link to watch the real thing — never autoplay, never
      // fabricate a preview image.
      if (item.thumbnail) {
        var img = document.createElement('img');
        img.src = item.thumbnail;
        img.alt = item.title || 'Reel preview';
        img.loading = 'lazy';
        img.decoding = 'async';
        media.appendChild(img);
      } else {
        var noThumb = document.createElement('p');
        noThumb.className = 'personality-placeholder-text';
        noThumb.textContent = 'Preview image coming soon';
        media.appendChild(noThumb);
      }
      var watchLink = document.createElement('a');
      watchLink.className = 'personality-watch-link';
      watchLink.href = item.reelUrl;
      watchLink.target = '_blank';
      watchLink.rel = 'noopener';
      watchLink.textContent = 'Watch on ' + (PLATFORM_LABEL[item.platform] || 'original platform') + ' ↗';
      media.appendChild(watchLink);
    } else {
      // Placeholder: intentionally inert, no link, no fake thumbnail.
      media.classList.add('is-placeholder');
      var badge = document.createElement('p');
      badge.className = 'personality-placeholder-badge';
      badge.textContent = 'Placeholder';
      var text = document.createElement('p');
      text.className = 'personality-placeholder-text';
      text.textContent = 'Reel coming soon';
      media.appendChild(badge);
      media.appendChild(text);
    }

    screen.appendChild(media);
    wrap.appendChild(screen);
    return wrap;
  }

  function buildMeta(item) {
    var meta = document.createElement('div');
    meta.className = 'personality-meta';

    var title = document.createElement('p');
    title.className = 'personality-title';
    title.textContent = item.title || 'Title TBD';
    meta.appendChild(title);

    var sub = document.createElement('p');
    sub.className = 'personality-sub';
    var platformLabel = PLATFORM_LABEL[item.platform] || 'Platform TBD';
    sub.textContent = 'Personal · ' + platformLabel;
    meta.appendChild(sub);

    if (item.context) {
      var context = document.createElement('p');
      context.className = 'personality-context';
      context.textContent = item.context;
      meta.appendChild(context);
    }

    if (item.role) {
      var role = document.createElement('p');
      role.className = 'personality-role';
      role.textContent = item.role;
      meta.appendChild(role);
    }

    if (item.credit) {
      var credit = document.createElement('p');
      credit.className = 'personality-credit';
      credit.textContent = item.credit;
      meta.appendChild(credit);
    }

    var line = statsLine(item.stats);
    var stats = document.createElement('p');
    stats.className = 'personality-stats';
    if (line) {
      stats.textContent = line;
      if (item.statsAsOf) {
        var asOf = document.createElement('span');
        asOf.className = 'personality-stats-date';
        asOf.textContent = ' · Stats as of ' + item.statsAsOf;
        stats.appendChild(asOf);
      }
    } else {
      stats.classList.add('is-pending');
      stats.textContent = 'Stats pending';
    }
    meta.appendChild(stats);

    return meta;
  }

  data.forEach(function (item) {
    var container = document.querySelector('.personality-cards[data-lane="' + item.lane + '"]');
    if (!container) return;
    var card = document.createElement('div');
    card.className = 'personality-card';
    card.dataset.id = item.id;
    if (!item.reelUrl) card.classList.add('is-placeholder');
    card.appendChild(buildMedia(item));
    card.appendChild(buildMeta(item));
    container.appendChild(card);
  });
})();
