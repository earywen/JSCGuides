import './style.css';
import i18next, { i18nPromise } from './i18n.js';

// Logic to handle difficulty switching
const MODES = ['normal', 'heroic', 'mythic'];
const STORAGE_KEY = 'wow-strat-difficulty';

function setDifficulty(mode, triggerAnimate = false) {
  if (!MODES.includes(mode)) return;

  if (triggerAnimate) {
    const content = document.querySelector('.content-area');
    if (content) {
      content.classList.remove('blur-fade');
      void content.offsetWidth; // Force reflow
      content.classList.add('blur-fade');
    }
  }

  // Update Body Class
  document.body.classList.remove(...MODES.map(m => `mode-${m}`));
  document.body.classList.add(`mode-${mode}`);

  // Update Buttons
  document.querySelectorAll('.diff-btn').forEach(btn => {
    if (btn.dataset.mode === mode) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Persist
  localStorage.setItem(STORAGE_KEY, mode);
}

function initDifficulty() {
  const savedMode = localStorage.getItem(STORAGE_KEY) || 'normal';
  setDifficulty(savedMode);

  // Attach Listeners
  document.querySelectorAll('.diff-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const mode = e.target.dataset.mode;
      setDifficulty(mode);
    });
  });
}

// Sidebar logic
function initSidebar() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-item').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Mobile Menu Logic
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const sidebar = document.querySelector('.dashboard-sidebar');

  if (!menuBtn || !sidebar) return;

  // Create overlay if it doesn't exist
  let overlay = document.querySelector('.sidebar-backdrop');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.className = 'sidebar-backdrop';
    document.body.appendChild(overlay);
  }

  const toggleMenu = () => {
    const isActive = sidebar.classList.contains('active');
    if (isActive) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  const openMenu = () => {
    sidebar.classList.add('active');
    overlay.classList.add('active');
    menuBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  const closeMenu = () => {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
    menuBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  overlay.addEventListener('click', closeMenu);

  // Close when clicking a link
  sidebar.querySelectorAll('.nav-item').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sidebar.classList.contains('active')) {
      closeMenu();
    }
  });
}

// Inject Wowhead Tooltip Script
function initWowhead() {
  const script = document.createElement('script');
  script.src = 'https://wow.zamimg.com/js/tooltips.js';
  document.head.appendChild(script);

  // Config
  window.whTooltips = { colorLinks: true, iconizeLinks: true, renameLinks: true };
}

// Video Lightbox Logic
function initVideoLightbox() {
  const trigger = document.getElementById('videoTrigger');
  const lightbox = document.getElementById('videoLightbox');
  const container = document.getElementById('lightboxVideoContainer');
  const closeBtn = document.querySelector('.close-lightbox');

  if (!trigger || !lightbox) return;

  // Extract ID from thumbnail URL
  let videoId = 'OvdVWjN7DcU'; // Default (Averzian)

  const img = trigger.querySelector('img');
  if (img && img.src) {
    const match = img.src.match(/vi\/([^\/]+)\//);
    if (match && match[1]) {
      videoId = match[1];
    }
  }

  const openLightbox = () => {
    lightbox.classList.add('active');
    container.innerHTML = `
            <iframe 
                src="https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0" 
                title="Boss Strategy Video" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
        `;
    document.body.style.overflow = 'hidden';
  };


  const closeLightbox = () => {
    lightbox.classList.remove('active');
    container.innerHTML = '';
    document.body.style.overflow = '';
  };

  trigger.addEventListener('click', openLightbox);
  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });
}

// Accordion Logic
function initAccordion() {
  const accordions = document.querySelectorAll('.accordion-item');

  accordions.forEach((item, index) => {
    const header = item.querySelector('.accordion-header');
    const content = item.querySelector('.accordion-content');

    if (index === 0) {
      item.classList.add('active');
      content.style.maxHeight = content.scrollHeight + 'px';
    }

    header.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      if (isActive) {
        item.classList.remove('active');
        content.style.maxHeight = null;
      } else {
        item.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  initDifficulty();
  initSidebar();
  initMobileMenu();
  initWowhead();
  initVideoLightbox();
  initAccordion();
  initLangSwitcher();

  // i18n Initialization
  i18next.on('languageChanged', (lng) => {
    console.log('Language changed to:', lng);
    if (i18next.isInitialized) {
      updateContent();
    }
  });

  i18nPromise.then(() => {
    console.log('i18next initialized successfully');
    console.log('Current Language:', i18next.language);
    console.log('Resources:', i18next.store.data);

    // Expose for debugging
    window.i18n = i18next;

    updateContent();
  }).catch(err => {
    console.error('i18next initialization failed:', err);
    // Fallback?
  });
});

function updateContent() {
  if (!i18next.isInitialized) return;

  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    const options = element.getAttribute('data-i18n-options'); // For future interpolation
    element.innerHTML = i18next.t(key, options ? JSON.parse(options) : {});
  });

  // Update Buttons Active State
  const currentLang = i18next.language;
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.dataset.lang === currentLang || (currentLang && currentLang.startsWith(btn.dataset.lang))) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

// Language Switcher Logic
function initLangSwitcher() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      i18next.changeLanguage(lang);
    });
  });
}
