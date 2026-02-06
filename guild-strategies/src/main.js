import './style.css'

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
  initWowhead();
  initVideoLightbox();
  initAccordion();
});
