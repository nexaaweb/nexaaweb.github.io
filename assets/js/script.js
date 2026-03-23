/* ============================================
   NEXAAWEB — script.js
   assets/js/script.js
============================================ */

async function loadComponent(placeholderId, filePath) {
  const el = document.getElementById(placeholderId);
  if (!el) return;
  try {
    const res  = await fetch(filePath);
    const html = await res.text();
    el.innerHTML = html;
    if (placeholderId === 'header-placeholder') initHeader();
  } catch (e) {
    console.warn('Could not load:', filePath, e);
  }
}

function initHeader() {
  const header     = document.getElementById('siteHeader');
  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const mBtn       = document.getElementById('mBtn');
  const mSub       = document.getElementById('mSub');

  /* scroll shadow */
  window.addEventListener('scroll', () => {
    if (header) header.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  /* hamburger open/close */
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', isOpen);
      mobileMenu.classList.toggle('open', isOpen);
    });
  }

  /* mobile services sub-dropdown */
  if (mBtn && mSub) {
    mBtn.addEventListener('click', function () {
      this.classList.toggle('open');
      mSub.classList.toggle('open');
    });
  }

  /* active nav link */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const linkPage = (link.getAttribute('href') || '').split('/').pop();
    if (linkPage === currentPage) link.classList.add('active');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  loadComponent('header-placeholder', '/components/header.html');
  loadComponent('footer-placeholder', '/components/footer.html');
});
