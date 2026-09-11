/**
 * PRAJWAL POUDEL — PORTFOLIO JAVASCRIPT (VANILLA ES6+)
 * Strictly no frameworks, libraries, or external dependencies.
 */

// Default data constants
const DEFAULT_PORTRAIT = './Screenshot 2026-09-10 215926 (1).jpg';
const DEFAULT_EMAIL = 'poudelprajwal0303@gmail.com';

const DEFAULT_ACHIEVEMENTS = [
  {
    id: 'ach-01',
    number: '01',
    title: 'Self-Taught Web & Tech Experimenter',
    description: 'Independently built and deployed live digital projects from Butwal, mastering modern web architecture and creative design tools without formal mentorship.',
    year: '2025',
    category: 'SKILL & CODE',
    highlight: 'Hands-on Mastery'
  },
  {
    id: 'ach-02',
    number: '02',
    title: 'First High-Altitude Himalayan Trek',
    description: 'Completed my first independent multi-day mountain trek into the Himalayan foothills, pushing personal endurance limits and documenting high-altitude landscapes.',
    year: '2024',
    category: 'EXPEDITION & HEALTH',
    highlight: 'High Altitude Resilience'
  },
  {
    id: 'ach-03',
    number: '03',
    title: 'Digital Content & Community Builder',
    description: 'Authored visual stories and creative media showcasing youth perspectives in Nepal, cultivating an engaged local network of peers passionate about technology.',
    year: '2025',
    category: 'CREATIVE & COMMUNITY',
    highlight: 'Organic Reach'
  },
  {
    id: 'ach-04',
    number: '04',
    title: 'Academic & Personal Discipline',
    description: 'Balanced rigorous secondary schooling with daily coding sessions, fitness training, and continuous self-education to build a solid foundation for the future.',
    year: '2026',
    category: 'MILESTONE & GROWTH',
    highlight: 'Daily Consistency'
  }
];

const INTERESTS_DATA = {
  trekking: {
    title: 'TREKKING',
    category: 'EXPLORATION',
    tagline: 'Endurance through high mountain trails and alpine passes.'
  },
  mountains: {
    title: 'MOUNTAINS',
    category: 'EXPLORATION',
    tagline: 'The majesty of the Himalayas, eternal perspective and humility.'
  },
  nepal: {
    title: 'NEPAL',
    category: 'GROWTH',
    tagline: 'Our culture, heritage, resilient people, and homeland pride.'
  },
  technology: {
    title: 'TECHNOLOGY',
    category: 'TECHNOLOGY',
    tagline: 'Building software, solving real problems, and shaping tomorrow.'
  },
  creativity: {
    title: 'CREATIVITY',
    category: 'CREATION',
    tagline: 'Editorial design, thoughtful aesthetics, and intentional expression.'
  },
  content: {
    title: 'CONTENT',
    category: 'CREATION',
    tagline: 'Visual storytelling, video narratives, and honest documentation.'
  },
  learning: {
    title: 'LEARNING',
    category: 'GROWTH',
    tagline: 'Curiosity-driven self education, reading, and perpetual growth.'
  },
  photography: {
    title: 'PHOTOGRAPHY',
    category: 'CREATION',
    tagline: 'Capturing candid moments, natural light, and mountain horizons.'
  }
};

const PROJECTS_DATA = {
  'prj-01': {
    number: '01',
    title: 'THE DREAMER: EXPLORING EVERY CORNER OF NEPAL',
    subtitle: 'A lifelong quest to traverse all 77 districts, mountain trails, and forgotten hamlets',
    category: 'EXPEDITION & EXPLORATION',
    year: 'LIFELONG',
    role: 'Dreamer & Solo Explorer',
    imageUrl: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
    description: 'At my core, I am a dreamer driven by an unyielding ambition: to experience, understand, and document every single corner of my motherland, Nepal. From the windswept passes of the high Himalayas to the lush riverbanks of the Terai and remote mid-hill settlements, I want to immerse myself in the raw beauty, diverse heritage, and resilient spirits of our people — walking each trail with humility and deep pride.',
    technologies: ['77 Districts', 'Himalayan Trails', 'Cultural Documentation', 'Visual Storytelling', 'Mountain Passes']
  },
  'prj-02': {
    number: '02',
    title: 'Chasing Horizons: Video Vignettes',
    subtitle: 'Short-form cinematic reels documenting the authentic Nepali spirit',
    category: 'CREATIVE CONTENT / CINEMATOGRAPHY',
    year: '2026',
    role: 'Director & Editor',
    imageUrl: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80',
    description: 'A continuous series of short cinematic videos and visual reels highlighting early morning street life in Butwal, hillside tea gardens, and the quiet dignity of everyday workers.',
    technologies: ['Premiere Pro', 'Color Grading', 'Sound Design']
  },
  'prj-03': {
    number: '03',
    title: 'Digital Commerce & Server Solutions',
    subtitle: 'Custom web development, online storefronts, and server hosting setup',
    category: 'DIGITAL COMMERCE / WEB & SERVERS',
    year: '2026',
    role: 'Creator & Web Builder',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    description: 'Taking our first bold steps in digital commerce alongside my friend. We assist clients, local creators, and entrepreneurs in building fast custom websites, setting up reliable cloud servers, and launching their online presence.',
    technologies: ['Websites', 'Server Deployment', 'E-Commerce', 'Custom Development']
  }
};

// Global App State
const state = {
  theme: localStorage.getItem('prajwal_theme') || 'dark',
  currentPhoto: localStorage.getItem('prajwal_photo') || DEFAULT_PORTRAIT,
  isEditingAchievements: false,
  achievements: JSON.parse(localStorage.getItem('prajwal_achievements') || 'null') || DEFAULT_ACHIEVEMENTS,
  facebookUrl: localStorage.getItem('prajwal_facebook') || 'https://facebook.com',
  currentModalProject: null
};

// ==========================================================================
// Initialization
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initClock();
  initNavbar();
  initScrollSpy();
  initPhotoCustomizer();
  initJourney();
  initAchievements();
  initInterests();
  initProjectsModal();
  initSocial();
  initContact();
  initRevealAnimations();
});

// ==========================================================================
// Theme Toggle (Dark / Light)
// ==========================================================================
function initTheme() {
  document.documentElement.setAttribute('data-theme', state.theme);
  updateThemeToggleUI();

  const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', state.theme);
      localStorage.setItem('prajwal_theme', state.theme);
      updateThemeToggleUI();
      showToast(`Switched to ${state.theme === 'dark' ? 'Dark' : 'Light'} theme`);
    });
  });
}

function updateThemeToggleUI() {
  const icons = document.querySelectorAll('.theme-toggle-btn svg');
  icons.forEach(svg => {
    if (state.theme === 'light') {
      // Show Moon icon for switching to dark
      svg.innerHTML = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>';
    } else {
      // Show Sun icon for switching to light
      svg.innerHTML = '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>';
    }
  });
}

// ==========================================================================
// Live Nepal Time (UTC +5:45)
// ==========================================================================
function initClock() {
  const clockEl = document.getElementById('live-nepal-time');
  if (!clockEl) return;

  function updateClock() {
    const now = new Date();
    // UTC milliseconds + timezone offset
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    // Nepal Standard Time is UTC + 5:45 (5.75 hours)
    const nptDate = new Date(utc + (3600000 * 5.75));

    const hours = String(nptDate.getHours()).padStart(2, '0');
    const minutes = String(nptDate.getMinutes()).padStart(2, '0');
    const seconds = String(nptDate.getSeconds()).padStart(2, '0');

    clockEl.textContent = `${hours}:${minutes}:${seconds} NPT`;
  }

  updateClock();
  setInterval(updateClock, 1000);
}

// ==========================================================================
// Navbar Scroll & Mobile Menu
// ==========================================================================
function initNavbar() {
  const header = document.getElementById('main-header');
  const mobileToggle = document.getElementById('mobile-menu-toggle-btn');
  const mobileDrawer = document.getElementById('mobile-nav-drawer');

  // Scroll effect on header
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  }, { passive: true });

  // Mobile drawer toggle
  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', String(isOpen));
      const icon = mobileToggle.querySelector('svg');
      if (icon) {
        icon.innerHTML = isOpen
          ? '<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>'
          : '<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>';
      }
    });

    // Close mobile drawer when link clicked
    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
        const icon = mobileToggle.querySelector('svg');
        if (icon) {
          icon.innerHTML = '<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>';
        }
      });
    });
  }
}

// ==========================================================================
// ScrollSpy & Smooth Section Navigation
// ==========================================================================
function initScrollSpy() {
  const sections = ['hero', 'intro', 'about', 'journey', 'achievements', 'interests', 'work', 'nepal', 'social', 'contact', 'biography'];
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 250;

    for (const sectionId of sections) {
      const el = document.getElementById(sectionId);
      if (el) {
        const top = el.offsetTop;
        const height = el.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          navLinks.forEach(link => {
            if (link.getAttribute('href') === `#${sectionId}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
          break;
        }
      }
    }
  }, { passive: true });

  // Scroll to top button in footer
  const backToTopBtn = document.getElementById('footer-back-to-top-btn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

// ==========================================================================
// Photo Customizer & Portrait System
// ==========================================================================
function initPhotoCustomizer() {
  updatePortraitsInDOM(state.currentPhoto);

  const modal = document.getElementById('photo-modal');
  const openBtns = document.querySelectorAll('[data-action="open-photo-modal"]');
  const closeBtn = document.getElementById('close-photo-modal-btn');
  const previewImg = document.getElementById('photo-customizer-preview-img');
  const fileInput = document.getElementById('photo-modal-file-input');
  const directFileInput = document.getElementById('portrait-direct-file-input');
  const urlInput = document.getElementById('photo-modal-url-input');
  const applyUrlBtn = document.getElementById('apply-photo-url-btn');
  const saveBtn = document.getElementById('save-photo-modal-btn');
  const resetBtn = document.getElementById('reset-photo-modal-btn');
  const directResetBtn = document.getElementById('portrait-reset-btn');

  let pendingPhoto = state.currentPhoto;

  function openModal() {
    pendingPhoto = state.currentPhoto;
    if (previewImg) previewImg.src = pendingPhoto;
    if (urlInput) urlInput.value = '';
    modal?.classList.add('open');
  }

  function closeModal() {
    modal?.classList.remove('open');
  }

  openBtns.forEach(btn => btn.addEventListener('click', openModal));
  closeBtn?.addEventListener('click', closeModal);

  modal?.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // Handle local file upload
  function handleFile(file) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        pendingPhoto = e.target.result;
        if (previewImg) previewImg.src = pendingPhoto;
      }
    };
    reader.readAsDataURL(file);
  }

  fileInput?.addEventListener('change', (e) => handleFile(e.target.files[0]));

  // Direct file input on portrait frame
  directFileInput?.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          saveNewPhoto(event.target.result);
          showToast('Portrait photo updated successfully!');
        }
      };
      reader.readAsDataURL(file);
    }
  });

  applyUrlBtn?.addEventListener('click', () => {
    const url = urlInput?.value.trim();
    if (url) {
      pendingPhoto = url;
      if (previewImg) previewImg.src = pendingPhoto;
      showToast('Image preview updated');
    }
  });

  saveBtn?.addEventListener('click', () => {
    saveNewPhoto(pendingPhoto);
    closeModal();
    showToast('Portrait photo saved!');
  });

  resetBtn?.addEventListener('click', () => {
    saveNewPhoto(DEFAULT_PORTRAIT);
    closeModal();
    showToast('Portrait reset to official original!');
  });

  directResetBtn?.addEventListener('click', () => {
    saveNewPhoto(DEFAULT_PORTRAIT);
    showToast('Portrait reset to official original!');
  });
}

function saveNewPhoto(url) {
  state.currentPhoto = url;
  localStorage.setItem('prajwal_photo', url);
  updatePortraitsInDOM(url);
}

function updatePortraitsInDOM(url) {
  const portraits = document.querySelectorAll('.dynamic-portrait-img');
  portraits.forEach(img => {
    img.src = url;
  });

  const directResetBtn = document.getElementById('portrait-reset-btn');
  if (directResetBtn) {
    directResetBtn.style.display = (url !== DEFAULT_PORTRAIT) ? 'inline-flex' : 'none';
  }
}

// ==========================================================================
// Journey Milestones Accordion
// ==========================================================================
function initJourney() {
  const milestoneCards = document.querySelectorAll('.milestone-card');

  milestoneCards.forEach((card, index) => {
    card.addEventListener('click', () => {
      milestoneCards.forEach((c, idx) => {
        if (idx === index) {
          c.classList.toggle('active');
        } else {
          c.classList.remove('active');
        }
      });
    });
  });
}

// ==========================================================================
// Achievements & Dynamic Editing Mode
// ==========================================================================
function initAchievements() {
  renderAchievements();

  const editToggleBtn = document.getElementById('achievements-edit-mode-btn');
  const resetBtn = document.getElementById('achievements-reset-btn');
  const indicator = document.getElementById('achievements-edit-indicator');

  editToggleBtn?.addEventListener('click', () => {
    state.isEditingAchievements = !state.isEditingAchievements;
    if (editToggleBtn) {
      editToggleBtn.innerHTML = state.isEditingAchievements
        ? '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg><span>DONE EDITING</span>'
        : '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg><span>EDIT ENTRIES</span>';
    }

    if (indicator) {
      indicator.style.display = state.isEditingAchievements ? 'flex' : 'none';
    }

    if (resetBtn) {
      resetBtn.style.display = state.isEditingAchievements ? 'inline-flex' : 'none';
    }

    const cards = document.querySelectorAll('.achievement-card');
    cards.forEach(c => c.classList.toggle('editable', state.isEditingAchievements));
  });

  resetBtn?.addEventListener('click', () => {
    state.achievements = [...DEFAULT_ACHIEVEMENTS];
    localStorage.removeItem('prajwal_achievements');
    renderAchievements();
    showToast('Achievements reset to defaults');
  });

  // Modal handlers
  const modal = document.getElementById('achievement-modal');
  const closeBtn = document.getElementById('close-achievement-modal-btn');
  const cancelBtn = document.getElementById('cancel-achievement-modal-btn');
  const form = document.getElementById('achievement-edit-form');

  function closeModal() {
    modal?.classList.remove('open');
  }

  closeBtn?.addEventListener('click', closeModal);
  cancelBtn?.addEventListener('click', closeModal);
  modal?.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const id = document.getElementById('edit-achievement-id')?.value;
    const title = document.getElementById('edit-achievement-title')?.value;
    const category = document.getElementById('edit-achievement-category')?.value;
    const year = document.getElementById('edit-achievement-year')?.value;
    const highlight = document.getElementById('edit-achievement-highlight')?.value;
    const description = document.getElementById('edit-achievement-desc')?.value;

    state.achievements = state.achievements.map(item => {
      if (item.id === id) {
        return { ...item, title, category, year, highlight, description };
      }
      return item;
    });

    localStorage.setItem('prajwal_achievements', JSON.stringify(state.achievements));
    renderAchievements();
    closeModal();
    showToast('Achievement updated successfully!');
  });
}

function renderAchievements() {
  const container = document.getElementById('achievements-container');
  if (!container) return;

  container.innerHTML = state.achievements.map(item => `
    <div
      class="achievement-card glass-surface ${state.isEditingAchievements ? 'editable' : ''}"
      id="achievement-card-${item.number}"
      data-id="${item.id}"
    >
      <div class="achievement-grid">
        <div class="achievement-big-number font-display">
          ${item.number}
        </div>
        <div>
          <div class="achievement-tags-row">
            <span class="achievement-category font-mono">${escapeHTML(item.category)}</span>
            ${item.highlight ? `<span class="achievement-highlight-pill font-mono">${escapeHTML(item.highlight)}</span>` : ''}
          </div>
          <h3 class="achievement-title font-display">${escapeHTML(item.title)}</h3>
          <p class="achievement-desc">${escapeHTML(item.description)}</p>
        </div>
        <div class="achievement-year-col">
          <span class="achievement-year font-mono">${escapeHTML(item.year)}</span>
          ${state.isEditingAchievements ? `<span style="font-family: var(--font-mono); font-size: 0.7rem; color: var(--color-accent-amber); margin-top: 1rem;">Click to edit</span>` : ''}
        </div>
      </div>
    </div>
  `).join('');

  // Attach click listener for editing
  container.querySelectorAll('.achievement-card').forEach(card => {
    card.addEventListener('click', () => {
      if (!state.isEditingAchievements) return;
      const id = card.getAttribute('data-id');
      const item = state.achievements.find(a => a.id === id);
      if (item) {
        openAchievementEditModal(item);
      }
    });
  });
}

function openAchievementEditModal(item) {
  const modal = document.getElementById('achievement-modal');
  if (!modal) return;

  document.getElementById('edit-achievement-id').value = item.id;
  document.getElementById('edit-achievement-title').value = item.title;
  document.getElementById('edit-achievement-category').value = item.category || '';
  document.getElementById('edit-achievement-year').value = item.year;
  document.getElementById('edit-achievement-highlight').value = item.highlight || '';
  document.getElementById('edit-achievement-desc').value = item.description;

  modal.classList.add('open');
}

// ==========================================================================
// Interests Dynamic Context Preview
// ==========================================================================
function initInterests() {
  const items = document.querySelectorAll('.marquee-item');
  const tagEl = document.getElementById('interests-preview-tag');
  const descEl = document.getElementById('interests-preview-desc');

  items.forEach(item => {
    item.addEventListener('mouseenter', () => {
      const topicKey = item.getAttribute('data-topic');
      const data = INTERESTS_DATA[topicKey];
      if (data && tagEl && descEl) {
        tagEl.innerHTML = `<span class="status-dot"></span> ACTIVE FOCUS: ${data.title} // ${data.category}`;
        descEl.textContent = data.tagline;
      }
    });
  });
}

// ==========================================================================
// Project Dossier Modal
// ==========================================================================
function initProjectsModal() {
  const modal = document.getElementById('project-modal');
  const closeBtn = document.getElementById('close-project-modal-btn');
  const bottomCloseBtn = document.getElementById('bottom-close-project-modal-btn');
  const openBtns = document.querySelectorAll('[data-action="open-project-modal"]');

  function openProject(projectId) {
    const project = PROJECTS_DATA[projectId];
    if (!project || !modal) return;

    document.getElementById('modal-project-img').src = project.imageUrl;
    document.getElementById('modal-project-category').textContent = `PROJECT ${project.number} // ${project.category}`;
    document.getElementById('modal-project-title').textContent = project.title;
    document.getElementById('modal-project-timeline').textContent = project.year;
    document.getElementById('modal-project-role').textContent = project.role;
    document.getElementById('modal-project-desc').textContent = project.description;

    const chipsContainer = document.getElementById('modal-project-tech-chips');
    if (chipsContainer) {
      chipsContainer.innerHTML = project.technologies.map(t =>
        `<span class="project-tech-chip">${escapeHTML(t)}</span>`
      ).join('');
    }

    modal.classList.add('open');
  }

  function closeModal() {
    modal?.classList.remove('open');
  }

  openBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-project');
      openProject(id);
    });
  });

  closeBtn?.addEventListener('click', closeModal);
  bottomCloseBtn?.addEventListener('click', closeModal);
  modal?.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
      document.getElementById('photo-modal')?.classList.remove('open');
      document.getElementById('achievement-modal')?.classList.remove('open');
    }
  });
}

// ==========================================================================
// Social Media & Facebook Customizer
// ==========================================================================
function initSocial() {
  const fbLink = document.getElementById('social-facebook-link');
  if (fbLink && state.facebookUrl) {
    fbLink.href = state.facebookUrl;
  }

  const editFbBtn = document.getElementById('edit-facebook-url-btn');
  editFbBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    const newUrl = prompt('Enter your custom Facebook profile or page URL:', state.facebookUrl);
    if (newUrl && newUrl.trim()) {
      state.facebookUrl = newUrl.trim();
      localStorage.setItem('prajwal_facebook', state.facebookUrl);
      if (fbLink) fbLink.href = state.facebookUrl;
      showToast('Facebook URL updated!');
    }
  });
}

// ==========================================================================
// Contact Section & Email Copy
// ==========================================================================
function initContact() {
  const copyBtn = document.getElementById('contact-copy-email-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(DEFAULT_EMAIL).then(() => {
        copyBtn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg><span>COPIED TO CLIPBOARD!</span>';
        showToast('Email address copied to clipboard!');
        setTimeout(() => {
          copyBtn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg><span>COPY EMAIL</span>';
        }, 2500);
      });
    });
  }

  const contactForm = document.getElementById('contact-message-form');
  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contact-sender-name')?.value || 'Visitor';
    const email = document.getElementById('contact-sender-email')?.value || '';
    const message = document.getElementById('contact-sender-message')?.value || '';

    if (!message.trim()) return;

    const subject = encodeURIComponent(`Message for Prajwal Poudel from ${name}`);
    const body = encodeURIComponent(`From: ${name} (${email})\n\nMessage:\n${message}`);

    showToast('Opening default email client...');
    window.location.href = `mailto:${DEFAULT_EMAIL}?subject=${subject}&body=${body}`;

    contactForm.reset();
  });
}

// ==========================================================================
// Reveal On Scroll Animations (IntersectionObserver)
// ==========================================================================
function initRevealAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
}

// ==========================================================================
// Toast Notifications
// ==========================================================================
function showToast(message) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast-message';
  toast.textContent = message;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// Utility: escape HTML
function escapeHTML(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
