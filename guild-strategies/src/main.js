import './style.css'

// Logic to handle difficulty switching
const MODES = ['normal', 'heroic', 'mythic'];
const STORAGE_KEY = 'wow-strat-difficulty';

function setDifficulty(mode) {
  if (!MODES.includes(mode)) return;
  
  // Update Body Class
  document.body.classList.remove(...MODES.map(m => `mode-${m}`));
  document.body.classList.add(`mode-${mode}`);
  
  // Update Buttons
  document.querySelectorAll('.difficulty-btn').forEach(btn => {
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
  document.querySelectorAll('.difficulty-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const mode = e.target.dataset.mode;
        setDifficulty(mode);
    });
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

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initDifficulty();
    initWowhead();
});
