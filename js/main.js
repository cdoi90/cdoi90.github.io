/* ═══════════════════════════════════════════════
   CLOE DOI PORTFOLIO — main.js
   Shared nav, footer, scroll reveal, animations
   ═══════════════════════════════════════════════ */

/* ── SHARED NAV HTML ── */
function injectNav(activePage) {
  const nav = document.getElementById('nav');
  if (!nav) return;
  nav.innerHTML = `
    <div class="container">
      <div class="nav-inner">
        <a href="index.html" class="nav-logo">CLOE <span>DOI</span></a>
        <ul class="nav-links" id="navLinks">
          <li><a href="index.html" ${activePage==='home'?'class="active"':''}>Home</a></li>
          <li><a href="about.html" ${activePage==='about'?'class="active"':''}>About</a></li>
          <li><a href="portfolio.html" ${activePage==='portfolio'?'class="active"':''}>Portfolio</a></li>
          <li><a href="index.html#contact" ${activePage==='contact'?'class="active"':''}>Contact</a></li>
        </ul>
        <a href="assets/images/CloeDoi_Resume.pdf" class="nav-cv" target="_blank" rel="noopener">Download Resume</a>
        <button class="nav-hamburger" id="hamburger" aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>`;

  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');
  hamburger && hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-open');
    document.body.classList.toggle('nav-mobile-open');
    hamburger.setAttribute('aria-expanded', navLinks.classList.contains('mobile-open'));
  });
  // Close on link click
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('mobile-open');
      document.body.classList.remove('nav-mobile-open');
    });
  });
}

/* ── SHARED FOOTER HTML ── */
function injectFooter() {
  const footer = document.getElementById('site-footer');
  if (!footer) return;
  footer.innerHTML = `
    <section id="contact" style="background:var(--navy); padding-bottom:0; position:relative; z-index:1;">
      <div class="container">
        <div class="contact-inner reveal">
          <div>
            <div class="section-eyebrow">Connect With Me</div>
            <h2 class="contact-headline">Let's build something<br><em>with data.</em></h2>
            <p class="contact-sub">Open to Product Strategy, Business Manager, and Analytics roles in financial services at Capital One, Visa, Mastercard, Amex, and top US banks.</p>
            <div class="contact-info">
              <div class="contact-row" style="margin-bottom:4px;">
                <svg viewBox="0 0 24 24" style="stroke:var(--gold);"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                <span style="color:var(--white); font-weight:500; font-size:15px;">Cloe Doi</span>
              </div>
              <div class="contact-row">
                <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <span>hanganvudoi@gmail.com</span>
              </div>
              <div class="contact-row">
                <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <span>(608) 895-1109</span>
              </div>
              <div class="contact-row">
                <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>Wisconsin, USA · Open to relocation</span>
              </div>
            </div>
          </div>
          <div class="contact-actions">
            <a href="https://www.linkedin.com/in/ha-doi/" target="_blank" rel="noopener" class="btn-primary">Connect on LinkedIn</a>
            <a href="mailto:hanganvudoi@gmail.com" class="btn-ghost">Send an Email</a>
            <a href="assets/images/CloeDoi_Resume.pdf" target="_blank" rel="noopener" class="btn-ghost">Download Resume</a>
          </div>
        </div>
      </div>
      <div class="footer-bar">
        <div class="container">
          <div class="footer-inner">
            <span class="footer-copy">© 2026 Cloe Doi · Product Strategy & Analytics</span>
            <div class="footer-links">
              <a href="https://www.linkedin.com/in/ha-doi/" target="_blank" rel="noopener">LinkedIn</a>
              <a href="mailto:hanganvudoi@gmail.com">Email</a>
              <a href="portfolio.html">Portfolio</a>
            </div>
          </div>
        </div>
      </div>
    </section>`;
}

/* ── SCROLL REVEAL ── */
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), 80);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => obs.observe(el));

  // Stagger grid children
  document.querySelectorAll('.expertise-grid, .testi-grid, .metrics-grid, .portfolio-grid, .highlights-grid').forEach(grid => {
    grid.querySelectorAll('.reveal').forEach((el, i) => {
      el.style.transitionDelay = `${i * 0.08}s`;
    });
  });
}

/* ── ACTIVE NAV ON SCROLL ── */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const links    = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 140) current = s.id;
    });
    links.forEach(a => {
      const href = a.getAttribute('href');
      if (href === '#' + current || (current && href && href.includes(current))) {
        a.style.color = 'var(--violet-soft)';
      } else {
        a.style.color = '';
      }
    });
  });
}

/* ── COUNTER ANIMATION ── */
function animateCounters() {
  const counters = document.querySelectorAll('[data-count]');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el     = e.target;
      const target = parseFloat(el.dataset.count);
      const prefix = el.dataset.prefix || '';
      const suffix = el.dataset.suffix || '';
      const dec    = el.dataset.dec ? parseInt(el.dataset.dec) : 0;
      const dur    = 1400;
      const start  = performance.now();
      const tick = (now) => {
        const prog = Math.min((now - start) / dur, 1);
        const ease = 1 - Math.pow(1 - prog, 3);
        el.textContent = prefix + (target * ease).toFixed(dec) + suffix;
        if (prog < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      obs.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(c => obs.observe(c));
}

/* ── SLIDERS ── */
document.querySelectorAll('[data-slider]').forEach(slider => {
  const track  = slider.querySelector('.slider-track');
  const slides = [...slider.querySelectorAll('.slide')];
  const dotsEl = slider.querySelector('.slider-dots');
  const prev   = slider.querySelector('.slider-prev');
  const next   = slider.querySelector('.slider-next');
  if (slides.length < 2) { slider.querySelectorAll('.slider-btn').forEach(b => b.remove()); return; }

  let i = 0;

  const dots = slides.map((_, n) => {
    const d = document.createElement('button');
    d.type = 'button';
    d.className = 'slider-dot';
    d.setAttribute('aria-label', `Dashboard ${n + 1}`);
    d.addEventListener('click', () => go(n));
    dotsEl.appendChild(d);
    return d;
  });

  function go(n) {
    i = Math.max(0, Math.min(n, slides.length - 1));
    track.style.transform = `translateX(-${i * 100}%)`;
    dots.forEach((d, n2) => d.classList.toggle('active', n2 === i));
    prev.disabled = i === 0;
    next.disabled = i === slides.length - 1;
  }

  prev.addEventListener('click', () => go(i - 1));
  next.addEventListener('click', () => go(i + 1));

  // keyboard
  slider.tabIndex = 0;
  slider.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft')  { e.preventDefault(); go(i - 1); }
    if (e.key === 'ArrowRight') { e.preventDefault(); go(i + 1); }
  });

  // swipe
  let x0 = null;
  slider.addEventListener('touchstart', e => { x0 = e.touches[0].clientX; }, { passive: true });
  slider.addEventListener('touchend', e => {
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 45) go(dx < 0 ? i + 1 : i - 1);
    x0 = null;
  }, { passive: true });

  go(0);
});

/* ── INIT ALL ── */
document.addEventListener('DOMContentLoaded', () => {
  initReveal();
  initScrollSpy();
  animateCounters();
  injectFooter();
});
