// Global configuration and state
const isDev = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
const RS_BACKEND_URL = window.RS_BACKEND_URL || 'https://royal-shepherd-bacl.onrender.com';

// Application state
const state = {
  activeExamYear: String(new Date().getFullYear()),
  galleryItems: [],
  activeCaptainCompany: '',
  activeCommanderEmail: '',
};

// Cache DOM elements
const captainModal = document.getElementById('captainModal');
const captainForm = document.getElementById('captainForm');
const captainEmail = document.getElementById('captainEmail');
const captainPassword = document.getElementById('captainPassword');
const captainCompany = document.getElementById('captainCompany');
const captainNotice = document.getElementById('captainNotice');
const captainAuthTabs = document.querySelectorAll('.captain-auth-tab');
const captainTriggers = document.querySelectorAll('.captain-trigger');
const captainClose = document.getElementById('captainClose');

const commanderModal = document.getElementById('commanderModal');
const commanderForm = document.getElementById('commanderForm');
const commanderEmail = document.getElementById('commanderEmail');
const commanderPassword = document.getElementById('commanderPassword');
const commanderNotice = document.getElementById('commanderNotice');
const commanderAuthTabs = document.querySelectorAll('.commander-auth-tab');
const commanderTriggers = document.querySelectorAll('.commander-trigger');
const commanderClose = document.getElementById('commanderClose');

const dashboardModal = document.getElementById('dashboardModal');
const dashboardForm = document.getElementById('dashboardForm');
const dashboardGrid = document.querySelector('.dashboard-grid');
const dashboardClose = document.getElementById('dashboardClose');

const commanderDashboardModal = document.getElementById('commanderDashboardModal');
const commanderDashboardForm = document.getElementById('commanderDashboardForm');
const commanderDashboardGrid = document.querySelector('.commander-dashboard-grid');
const commanderDashboardClose = document.getElementById('commanderDashboardClose');
const openExcoDashboardBtn = document.getElementById('openExcoDashboardBtn');

const excoDashboardModal = document.getElementById('excoDashboardModal');
const excoDashboardForm = document.getElementById('excoDashboardForm');
const excoDashboardGrid = document.querySelector('.exco-dashboard-grid');
const excoDashboardClose = document.getElementById('excoDashboardClose');

const galleryModal = document.getElementById('galleryModal');
const galleryPreviewImage = document.getElementById('galleryPreviewImage');
const galleryPreviewTitle = document.getElementById('galleryPreviewTitle');
const galleryPreviewDescription = document.getElementById('galleryPreviewDescription');
const galleryPreviewCategory = document.getElementById('galleryPreviewCategory');
const galleryClose = document.getElementById('galleryClose');

const symbolModal = document.getElementById('symbolModal');
const modalTitle = document.getElementById('modalTitle');
const modalList = document.getElementById('modalList');
const modalClose = document.getElementById('modalClose');

const galleryPanel = document.querySelector('.gallery-panel');
const galleryGrid = document.querySelector('.gallery-grid');
const galleryToggle = document.querySelector('.gallery-toggle');
const galleryFilters = document.querySelectorAll('.filter-btn');

const symbolCards = document.querySelectorAll('.symbol-card');
const enlistmentForm = document.getElementById('enlistmentForm');
const formSuccess = document.getElementById('formSuccess');
const fillAnotherBtn = document.getElementById('fillAnother');
const enlistmentCompanySelect = document.getElementById('enlistmentCompany');

const newsGrid = document.getElementById('newsGrid');
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

const companyCards = document.querySelectorAll('.company-card');

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

function resizeImageFileToDataUrl(file, outputSize = 512) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const image = new Image();
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      image.onload = () => {
        const maxSide = Math.max(image.width, image.height);
        canvas.width = (image.width / maxSide) * outputSize;
        canvas.height = (image.height / maxSide) * outputSize;
        context.drawImage(image, 0, 0, canvas.width, canvas.height);
        const mimeType = file.type === 'image/png' ? 'image/png' : 'image/jpeg';
        const dataUrl = canvas.toDataURL(mimeType, 0.85);
        resolve(dataUrl);
      };
      image.onerror = () => reject(new Error('Unable to load image'));
      image.src = reader.result;
    };
    reader.onerror = () => reject(new Error('Unable to read file'));
    reader.readAsDataURL(file);
  });
}

function updateExcoProfilePreview(card, imageUrl) {
  const preview = card.querySelector('.exco-photo-preview');
  const deleteBtn = card.querySelector('.delete-exco-photo');
  if (preview) {
    preview.src = imageUrl;
    preview.style.display = 'block';
  }
  if (deleteBtn) {
    deleteBtn.style.display = 'block';
    card.dataset.photoRemovalPending = 'true';
  }
}

function resetExcoPhotoCard(card) {
  const fileInput = card.querySelector('input[type="file"]');
  const preview = card.querySelector('.exco-photo-preview');
  const deleteBtn = card.querySelector('.delete-exco-photo');
  if (fileInput) fileInput.value = '';
  if (preview) preview.style.display = 'none';
  if (deleteBtn) deleteBtn.style.display = 'none';
}

function clearPhotoRemovalFlag(card) {
  delete card.dataset.photoRemovalPending;
}

function saveDivisionMembers() {
  // Implementation for saving division members
  // This would sync with your backend
}

function saveCommandStructure() {
  // Implementation for saving command structure
}

function saveFounderStory() {
  // Implementation for saving founder story
}

function escapeHtml(value) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return String(value).replace(/[&<>"']/g, (m) => map[m]);
}

function showToast(message) {
  // Simple toast notification (implement as needed)
  console.log('Toast:', message);
}

function showBackendStatus(message, type = 'warning') {
  console.log(`Backend Status [${type}]:`, message);
}

function saveExamScores() {
  // Implementation for saving exam scores
}

function saveEnlistmentApplications() {
  // Implementation for saving enlistment applications
}

// ============================================================================
// MODAL MANAGEMENT
// ============================================================================

function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.setAttribute('aria-hidden', 'false');
    modal.style.display = 'flex';
  }
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.setAttribute('aria-hidden', 'true');
    modal.style.display = 'none';
  }
}

function closeAllModals() {
  document.querySelectorAll('.modal').forEach((m) => {
    m.setAttribute('aria-hidden', 'true');
    m.style.display = 'none';
  });
}

// ============================================================================
// NAVIGATION AND UI BINDINGS
// ============================================================================

function bindMobileMenu() {
  if (!menuToggle || !navMenu) return;
  if (menuToggle.dataset.mobileMenuBound === 'true') return;
  menuToggle.dataset.mobileMenuBound = 'true';

  const setOpen = (open) => {
    menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    navMenu.classList.toggle('mobile-open', open);
  };

  menuToggle.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    setOpen(!isOpen);
  }, { passive: false });

  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setOpen(false));
  });

  document.addEventListener('click', (event) => {
    if (!navMenu.classList.contains('mobile-open')) return;
    if (navMenu.contains(event.target) || menuToggle.contains(event.target)) return;
    setOpen(false);
  });
}
function bindSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

function bindOpeners() {
  captainTriggers.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      openModal('captainModal');
    });
  });
  commanderTriggers.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      openModal('commanderModal');
    });
  });
}

function bindAuthTabs() {
  captainAuthTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const mode = tab.dataset.mode;
      captainAuthTabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');
      captainForm.dataset.mode = mode;
    });
  });

  commanderAuthTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const mode = tab.dataset.mode;
      commanderAuthTabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');
      commanderForm.dataset.mode = mode;
    });
  });
}

function bindModalCloseButtons() {
  const closeButtons = [
    { btn: captainClose, modal: 'captainModal' },
    { btn: commanderClose, modal: 'commanderModal' },
    { btn: dashboardClose, modal: 'dashboardModal' },
    { btn: commanderDashboardClose, modal: 'commanderDashboardModal' },
    { btn: excoDashboardClose, modal: 'excoDashboardModal' },
    { btn: galleryClose, modal: 'galleryModal' },
    { btn: modalClose, modal: 'symbolModal' },
  ];

  closeButtons.forEach(({ btn, modal }) => {
    btn?.addEventListener('click', () => closeModal(modal));
  });

  document.querySelectorAll('.modal-backdrop[data-close="true"]').forEach((backdrop) => {
    backdrop.addEventListener('click', () => {
      closeAllModals();
    });
  });
}

function bindEscapeKey() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllModals();
    }
  });
}

function bindSymbolCards() {
  symbolCards.forEach((card) => {
    card.addEventListener('click', () => {
      const title = card.dataset.title || 'Symbol Meaning';
      const items = JSON.parse(card.dataset.items || '[]');
      if (modalTitle && modalList) {
        modalTitle.textContent = title;
        modalList.innerHTML = '';
        items.forEach((item) => {
          const li = document.createElement('li');
          li.textContent = item;
          modalList.appendChild(li);
        });
        openModal('symbolModal');
      }
    });
  });
}

// ============================================================================
// IMAGE PATH RESOLUTION
// ============================================================================

function resolveImagePath(src) {
  if (!src) return '';
  const normalized = String(src).trim().replace(/\\/g, '/');
  if (/^(https?:)?\/\//i.test(normalized) || normalized.startsWith('data:')) return normalized;
  const path = normalized.startsWith('image/') ? normalized : `image/${normalized}`;
  const [pathWithoutQuery, suffix = ''] = path.split(/([?#].*)/, 2);
  return pathWithoutQuery.split('/').map((segment, index) => index === 0 ? segment : encodeURIComponent(segment)).join('/') + suffix;
}

function resolvePublicAssetPath(src) {
  if (!src) return '';
  const normalized = String(src).trim().replace(/\\/g, '/');
  if (/^(https?:)?\/\//i.test(normalized) || normalized.startsWith('data:')) return normalized;
  const [pathWithoutQuery, suffix = ''] = normalized.split(/([?#].*)/, 2);
  return pathWithoutQuery.split('/').map((segment) => encodeURIComponent(segment)).join('/') + suffix;
}

// ============================================================================
// GALLERY MANAGEMENT
// ============================================================================

function getGalleryItems() {
  return state.galleryItems && state.galleryItems.length > 0 ? state.galleryItems : (window.galleryData || []);
}

function renderGallery() {
  if (!galleryGrid) return;
  galleryGrid.innerHTML = '';

  const itemsToRender = getGalleryItems();
  itemsToRender.forEach((item, index) => {
    const article = document.createElement('article');
    article.className = 'gallery-item glass-card';
    article.dataset.category = item.category || 'parades';
    article.dataset.index = index;
    
    // Resolve image path with proper URL encoding
    const imagePath = resolveImagePath(item.src);
    
    article.innerHTML = `
      <button type="button" class="gallery-thumb" aria-label="${item.title}">
        <img src="${imagePath}" alt="${item.title}" loading="lazy" />
        <div class="gallery-overlay">
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </div>
      </button>
      <a class="gallery-download btn btn-outline" href="${imagePath}" download="${item.title}.jpg" aria-label="Download ${item.title}">Download</a>
    `;
    galleryGrid.appendChild(article);
  });

  applyGalleryFilter('all');
}

function renderNews() {
  if (!newsGrid) return;
  // Render news from backend or state
  newsGrid.innerHTML = '<p>Latest news will be displayed here.</p>';
}

function openGalleryPreview(item) {
  if (!item) return;
  if (galleryPreviewImage) {
    const imagePath = resolveImagePath(item.src);
    galleryPreviewImage.src = imagePath;
    galleryPreviewImage.alt = item.title;
  }
  if (galleryPreviewTitle) {
    galleryPreviewTitle.textContent = item.title;
  }
  if (galleryPreviewDescription) {
    galleryPreviewDescription.textContent = item.description;
  }
  if (galleryPreviewCategory) {
    galleryPreviewCategory.textContent = (item.category || 'parades').charAt(0).toUpperCase() + (item.category || 'parades').slice(1);
  }
  openModal('galleryModal');
}

function applyGalleryFilter(filter, elements = null) {
  galleryFilters.forEach((button) => {
    button.classList.toggle('active', button.dataset.filter === filter);
  });

  const itemsToToggle = elements || Array.from(galleryGrid?.querySelectorAll('.gallery-item') || []);
  itemsToToggle.forEach((item) => {
    const show = filter === 'all' || item.dataset.category === filter;
    item.classList.toggle('is-hidden', !show);
  });
}

function bindGallery() {
  galleryToggle?.addEventListener('click', () => {
    const hidden = galleryPanel?.classList.toggle('is-collapsed');
    galleryToggle.textContent = hidden ? 'Open Gallery' : 'Hide Gallery';
    galleryToggle.setAttribute('aria-expanded', hidden ? 'false' : 'true');
  });

  galleryGrid?.addEventListener('click', (event) => {
    const button = event.target.closest('.gallery-thumb');
    if (!button) return;
    const card = button.closest('.gallery-item');
    if (!card) return;
    const index = Number(card.dataset.index);
    if (!Number.isNaN(index)) {
      const sourceItems = getGalleryItems();
      const item = sourceItems[index];
      if (item) {
        openGalleryPreview(item);
      }
    }
  });

  galleryGrid?.addEventListener('keydown', (event) => {
    if (!['Enter', ' '].includes(event.key)) return;
    const button = event.target.closest('.gallery-thumb');
    if (!button) return;
    event.preventDefault();
    const card = button.closest('.gallery-item');
    if (!card) return;
    const index = Number(card.dataset.index);
    if (!Number.isNaN(index)) {
      const sourceItems = getGalleryItems();
      const item = sourceItems[index];
      if (item) {
        openGalleryPreview(item);
      }
    }
  });

  // Handle gallery filters
  galleryFilters.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      applyGalleryFilter(filter);
    });
  });
}

// ============================================================================
// FORM PROCESSING
// ============================================================================

function parseTextareaLines(value) {
  return value.split('\n').map((line) => line.trim()).filter((line) => line.length > 0);
}

function arraysEqual(first, second) {
  if (first.length !== second.length) return false;
  return first.every((item, idx) => item === second[idx]);
}

function scoreEntriesEqual(first, second) {
  if (first.length !== second.length) return false;
  return first.every((entry, idx) => {
    const other = second[idx];
    return entry.name === other.name && entry.score === other.score;
  });
}

// ============================================================================
// INITIALIZATION
// ============================================================================

function initializeApp() {
  bindMobileMenu();
  bindSmoothScrolling();
  bindOpeners();
  bindAuthTabs();
  bindModalCloseButtons();
  bindEscapeKey();
  bindSymbolCards();
  bindGallery();
  
  renderGallery();
  renderNews();
  
  // Initialize enlistment form
  enlistmentForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    showToast('Registration submitted! Thank you for your interest.');
    formSuccess?.classList.add('show');
    enlistmentForm.style.display = 'none';
  });

  fillAnotherBtn?.addEventListener('click', () => {
    enlistmentForm.reset();
    enlistmentForm.style.display = 'block';
    formSuccess?.classList.remove('show');
  });

  // Populate company selects
  const companies = [
    { value: '1', label: 'Oke Odo - 12th Akiling Regional Coy' },
    { value: '2', label: 'Ikorodu - 15th Akiling Regional Coy' },
    { value: '3', label: 'Iyesi - 17th Akiling Regional Coy' },
    { value: '4', label: 'Sango - 28th Akiling Regional Coy' },
    { value: '5', label: 'Command - 31st Akiling Regional Coy' },
    { value: '6', label: 'Ipaja - 38th Akiling Regional Coy' },
    { value: '7', label: 'Ijaba - 44th Akiling Regional Coy' },
    { value: '8', label: 'Ijoko - 48th Akiling Regional Coy' },
    { value: '9', label: 'Ikeja - 49th Akiling Regional Coy' },
  ];

  if (enlistmentCompanySelect) {
    companies.forEach(({ value, label }) => {
      const option = document.createElement('option');
      option.value = value;
      option.textContent = label;
      enlistmentCompanySelect.appendChild(option);
    });
  }
}

// Start the application when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}
