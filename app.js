(() => {
  console.log('app.js starting');
  const RS_BACKEND_BASE_URL = 'https://royal-shepherd-bacl.onrender.com';
  window.RS_BACKEND_URL = RS_BACKEND_BASE_URL;
  window.__rsAppJsLoaded = true;
  const header = document.querySelector('.site-header');
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');
  const symbolCards = document.querySelectorAll('.symbol-card');
  const modal = document.getElementById('symbolModal');
  const modalClose = document.getElementById('modalClose');
  const modalBackdrops = document.querySelectorAll('.modal-backdrop');
  const modalTitle = document.getElementById('modalTitle');
  const modalList = document.getElementById('modalList');
  const captainTrigger = document.querySelectorAll('.captain-trigger, .dashboard-trigger');
  const captainModal = document.getElementById('captainModal');
  const captainClose = document.getElementById('captainClose');
  const captainForm = document.getElementById('captainForm');
  const captainEmail = document.getElementById('captainEmail');
  const captainPassword = document.getElementById('captainPassword');
  const captainCompany = document.getElementById('captainCompany');
  const captainCompanyField = document.getElementById('captainCompanyField');
  const captainNotice = document.getElementById('captainNotice');
  const authTabs = document.querySelectorAll('.auth-tab');
  const dashboardModal = document.getElementById('dashboardModal');
  const dashboardClose = document.getElementById('dashboardClose');
  const dashboardGrid = document.querySelector('#dashboardModal .dashboard-grid, #captainDashboardGrid');
  const commanderDashboardGrid = document.querySelector('#commanderDashboardModal .dashboard-grid, #commanderDashboardGrid');
  const divisionTotalMembers = document.getElementById('divisionTotalMembers');
  const divisionTotalOfficers = document.getElementById('divisionTotalOfficers');
  const homeTotalMembers = document.getElementById('homeTotalMembers');
  const homeTotalOfficers = document.getElementById('homeTotalOfficers');
  const dashboardForm = document.getElementById('dashboardForm');
  const commanderDashboardForm = document.getElementById('commanderDashboardForm');
  const commanderImportBtn = document.getElementById('commanderImportMembers');
  const commanderImportFile = document.getElementById('commanderImportFile');
  const commanderModal = document.getElementById('commanderModal');
  const commanderClose = document.getElementById('commanderClose');
  const commanderDashboardModal = document.getElementById('commanderDashboardModal');
  const commanderForm = document.getElementById('commanderForm');
  const commanderEmail = document.getElementById('commanderEmail');
  const commanderPassword = document.getElementById('commanderPassword');
  const commanderNotice = document.getElementById('commanderNotice');
  const commanderDashboardClose = document.getElementById('commanderDashboardClose');
  const excoDashboardModal = document.getElementById('excoDashboardModal');
  const excoDashboardClose = document.getElementById('excoDashboardClose');
  const excoDashboardGrid = document.querySelector('#excoDashboardModal .dashboard-grid, #excoDashboardGrid');
  const excoDashboardForm = document.getElementById('excoDashboardForm');
  const openExcoDashboardBtn = document.getElementById('openExcoDashboardBtn');
  const openExcoDashboardFromAdminBtn = document.getElementById('openExcoDashboardFromAdmin');
  const commanderTrigger = document.querySelectorAll('.commander-trigger');
  const excoTrigger = document.querySelectorAll('.exco-trigger');
  const companyCards = document.querySelectorAll('.company-card');
  const form = document.getElementById('enlistmentForm');
  const formSuccess = document.getElementById('formSuccess');
  const fillAnother = document.getElementById('fillAnother');
  const galleryFilters = document.querySelectorAll('.filter-btn');
  const galleryGrid = document.querySelector('.gallery-grid');
  const galleryPanel = document.querySelector('.gallery-panel');
  const galleryToggle = document.querySelector('.gallery-toggle');
  const gallerySearch = document.getElementById('gallerySearch');
  const galleryModal = document.getElementById('galleryModal');
  const galleryClose = document.getElementById('galleryClose');
  const galleryBackdrop = galleryModal?.querySelector('.modal-backdrop');
  const galleryPreviewImage = document.getElementById('galleryPreviewImage');
  const galleryPreviewTitle = document.getElementById('galleryPreviewTitle');
  const galleryPreviewDescription = document.getElementById('galleryPreviewDescription');
  const galleryPreviewCategory = document.getElementById('galleryPreviewCategory');
  const galleryPreviewDownload = document.getElementById('galleryPreviewDownload');

  const excoRoleDefinitions = [
    { key: 'founder-cac-agbala-itura-worldwide', label: 'Founder CAC Agbala-Itura W/W' },
    { key: 'prophet-dr-s-k-abiara', label: 'Prophet (Dr) Samuel Kayode Abiara' },
    { key: 'pastor-s-o-oladele', label: 'CAC President W/W' },
    { key: 'pastor-e-olusoko', label: 'Akiling Region Superintendent' },
    { key: 'bishop-kehinde-abiara', label: 'Agbala-Itura DCC Superintendent Lagos' },
    { key: 'rs-major-general-j-p-akinyemi', label: 'Akiling Region Commander' },
    { key: 'rs-colonel-o-olowe', label: 'Akiling Region Deputy Commander' },
    { key: 'rs-lt-colonel-o-olasupo', label: 'Akiling Region Organizing Secretary' },
    { key: 'rs-captain-s-a-ilori', label: 'Akiling Region Training Officer 1 / Acting Divisional Commander' },
    { key: 'akiling-region-superintendent', label: 'Akiling Region Superintendent' },
    { key: 'agbala-itura-dcc-superintendent-lagos', label: 'Agbala-Itura DCC Superintendent Lagos' },
    { key: 'national-organizing-secretary', label: 'National Organizing Secretary' },
    { key: 'assistant-national-organizing-secretary', label: 'Assistant National Organizing Secretary' },
    { key: 'akiling-region-commander', label: 'Akiling Region Commander' },
    { key: 'akiling-region-deputy-commander', label: 'Akiling Region Deputy Commander' },
    { key: 'akiling-region-organizing-secretary', label: 'Akiling Region Organizing Secretary' },
    { key: 'akiling-region-training-officer-acting-divisional-commander', label: 'Akiling Region Training Officer 1 / Acting Divisional Commander' },
    { key: 'pro-captain-olaitan-awoniyi', label: 'PRO' },
    { key: 'financial-secretary-provost-anjola-olayiwola', label: 'Financial Secretary' },
    { key: 'general-secretary', label: 'General Secretary' },
    { key: 'divisional-commander', label: 'Divisional Commander' },
    { key: 'band-master-lieu-solomon-o-adeniji', label: 'Band Master' },
    { key: 'assistant-band-master', label: 'Assistant Band Master' },
    { key: 'treasurer', label: 'Treasurer' },
    { key: 'training-officer-capt-segun', label: 'Training Officer' }
  ];

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

  const defaultExcoProfiles = {
    'founder-cac-agbala-itura-worldwide': { name: 'Prophet (Dr) Samuel Kayode Abiara', email: '', phone: '', bio: 'Founder CAC Agbala-Itura W/W.' },
    'prophet-dr-s-k-abiara': { name: 'Prophet (Dr) Samuel Kayode Abiara', email: '', phone: '', bio: 'Founder CAC Agbala-Itura W/W.' },
    'pastor-s-o-oladele': { name: 'Pastor S.O Oladele', email: '', phone: '', bio: 'CAC President W/W.' },
    'pastor-e-olusoko': { name: 'Pastor S.O. Olukoso', email: '', phone: '', bio: 'Akiling Region Superintendent.' },
    'bishop-kehinde-abiara': { name: 'Bishop Isaac Kehinde Abiara', email: '', phone: '', bio: 'Agbala-Itura DCC Superintendent Lagos.' },
    'rs-major-general-e-b-adegbite': { name: 'RS Major General E. B. Adegbite', email: '', phone: '', bio: 'National Organizing Secretary.' },
    'rs-brigadier-general-s-oludahunsi': { name: 'Pastor S.O. Oladahusi', email: '', phone: '', bio: 'Assistant National Organizing Secretary.' },
    'rs-major-general-j-p-akinyemi': { name: 'Pastor J.P. Akinyemi', email: '', phone: '', bio: 'Akiling Region Commander.' },
    'rs-colonel-o-olowe': { name: 'Colonel Olamide Olowe', email: '', phone: '', bio: 'Akiling Region Deputy Commander.' },
    'rs-lt-colonel-o-olasupo': { name: 'Lieutenant Colonel (Elder) Olasupo Olukunmi', email: '', phone: '', bio: 'Akiling Region Organizing Secretary.' },
    'rs-captain-s-a-ilori': { name: 'Captain Samuel A. Ilori', email: '', phone: '', bio: 'Akiling Region Training Officer 1 / Acting Divisional Commander.' },
    'akiling-region-superintendent': { name: 'Pastor S.O. Olukoso', email: '', phone: '', bio: 'Akiling Region Superintendent.' },
    'agbala-itura-dcc-superintendent-lagos': { name: 'Bishop Isaac Kehinde Abiara', email: '', phone: '', bio: 'Agbala-Itura DCC Superintendent Lagos.' },
    'national-organizing-secretary': { name: 'RS Major General E. B. Adegbite', email: '', phone: '', bio: 'National Organizing Secretary.' },
    'assistant-national-organizing-secretary': { name: 'Pastor S.O. Oladahusi', email: '', phone: '', bio: 'Assistant National Organizing Secretary.' },
    'akiling-region-commander': { name: 'Pastor J.P. Akinyemi', email: '', phone: '', bio: 'Akiling Region Commander.' },
    'akiling-region-deputy-commander': { name: 'Colonel Olamide Olowe', email: '', phone: '', bio: 'Akiling Region Deputy Commander.' },
    'akiling-region-organizing-secretary': { name: 'Lieutenant Colonel (Elder) Olasupo Olukunmi', email: '', phone: '', bio: 'Akiling Region Organizing Secretary.' },
    'akiling-region-training-officer-acting-divisional-commander': { name: 'Captain Samuel A. Ilori', email: '', phone: '', bio: 'Akiling Region Training Officer 1 / Acting Divisional Commander.' },
    'pro-captain-olaitan-awoniyi': { name: 'Captain Olaitan Awoniyi', email: '', phone: '', bio: 'Divisional PRO.' },
    'financial-secretary-provost-anjola-olayiwola': { name: 'Provost Anjola Olayiwola', email: '', phone: '', bio: 'Divisional Financial Secretary.' },
    'general-secretary': { name: 'RS Lieu. Olamilekan O. Aina', email: '', phone: '', bio: 'Divisional General Secretary.' },
    'divisional-commander': { name: '', email: '', phone: '', bio: 'Divisional Commander.' },
    'band-master-lieu-solomon-o-adeniji': { name: 'Lieu. Solomon O. Adeniji', email: '', phone: '', bio: 'Divisional Band Master.' },
    'assistant-band-master': { name: '', email: '', phone: '', bio: 'Divisional Assistant Band Master.' },
    'treasurer': { name: '', email: '', phone: '', bio: 'Divisional Treasurer.' },
    'training-officer-capt-segun': { name: 'Capt. Segun Lawal', email: '', phone: '', bio: 'Divisional Training Officer.' }
  };

  const leadershipPhotoMap = {
    'founder-cac-agbala-itura-worldwide': 'pa sk abiara.jpeg',
    'prophet-dr-s-k-abiara': 'pa sk abiara.jpeg',
    'pastor-s-o-oladele': './pastor s.o oladele cac president.jpeg',
    'pastor-e-olusoko': 'Pastor S.O. Olukoso.jpeg',
    'bishop-kehinde-abiara': 'bishop isaac.jpeg',
    'rs-major-general-e-b-adegbite': 'nos adegnite.jpeg',
    'rs-brigadier-general-s-oludahunsi': 'pastor s.o oladahusi.jpeg',
    'rs-major-general-j-p-akinyemi': 'akiling regional commander  akinyemi.jpeg',
    'rs-colonel-o-olowe': 'RS Colonel O. Olowe.jpeg',
    'rs-lt-colonel-o-olasupo': 'major olasupo .jpeg',
    'rs-captain-s-a-ilori': 'captain samuel.A.ilori divisional commander and also region training officer 1.jpeg',
    'national-organizing-secretary': 'nos adegnite.jpeg',
    'assistant-national-organizing-secretary': 'pastor s.o oladahusi.jpeg',
    'general-secretary': 'rs lieu.olamilekan o. aina.jpeg',
    'financial-secretary-provost-anjola-olayiwola': 'fin sec anjola jesu.jpeg',
    'akiling-region-commander': 'akiling regional commander  akinyemi.jpeg',
    'akiling-region-organizing-secretary': 'major olasupo .jpeg',
    'akiling-region-training-officer-acting-divisional-commander': 'captain samuel.A.ilori divisional commander and also region training officer 1.jpeg',
    'pro-captain-olaitan-awoniyi': 'captain olaitan awoniyi.jpeg',
    'band-master-lieu-solomon-o-adeniji': 'lieu.solomon o.adeniji.jpeg',
    'training-officer-capt-segun': 'capt segun lawal.jpeg'
  };

  const featuredLeadershipGroups = [
    {
      title: 'CAC Authorities',
      keys: [
        'pastor-s-o-oladele',
        'pastor-e-olusoko',
        'bishop-kehinde-abiara'
      ]
    },
    {
      title: 'Regional EXCO Leadership',
      keys: [
        'national-organizing-secretary',
        'assistant-national-organizing-secretary',
        'rs-major-general-j-p-akinyemi',
        'rs-colonel-o-olowe',
        'rs-lt-colonel-o-olasupo',
        'rs-captain-s-a-ilori'
      ]
    },
    {
      title: 'Division EXCO Leadership',
      keys: [
        'divisional-commander',
        'general-secretary',
        'financial-secretary-provost-anjola-olayiwola',
        'training-officer-capt-segun',
        'band-master-lieu-solomon-o-adeniji',
        'pro-captain-olaitan-awoniyi',
        'assistant-band-master'
      ]
    }
  ];

const symbolCards = document.querySelectorAll('.symbol-card');
const enlistmentForm = document.getElementById('enlistmentForm');
const formSuccess = document.getElementById('formSuccess');
const fillAnotherBtn = document.getElementById('fillAnother');
const enlistmentCompanySelect = document.getElementById('enlistmentCompany');

const newsGrid = document.getElementById('newsGrid');
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

  // Backend-backed storage helpers
  let __rsBackendCache = null;
  let __rsSaveTimer = null;
  let __rsSaveQueue = Promise.resolve();
  let __rsPendingSaveCount = 0;
  let __rsLocalRevision = 0;

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

  async function saveState(payload) {
    const body = JSON.parse(JSON.stringify(payload || getAppStatePayload()));
    const saveRevision = __rsLocalRevision;
    __rsPendingSaveCount += 1;
    const queuedSave = __rsSaveQueue.then(async () => {
      const response = await rsBackend.saveState(body);
      if (saveRevision === __rsLocalRevision) {
        __rsBackendCache = response || body;
      }
      if (response && typeof response === 'object' && saveRevision === __rsLocalRevision) {
        applySharedState(response);
        renderCompanyLists();
        renderDivisionSummary();
        renderOfficerLeadership();
        renderFounderStory();
        renderGallery();
        renderNews();
      }
      return true;
    }).catch((err) => {
      console.warn('saveState failed', err);
      return false;
    }).finally(() => {
      __rsPendingSaveCount -= 1;
    });
    __rsSaveQueue = queuedSave.catch(() => false);
    return queuedSave;
  }

// ============================================================================
// NAVIGATION AND UI BINDINGS
// ============================================================================

function bindMobileMenu() {
  if (!menuToggle || !navMenu) return;
  if (menuToggle.dataset.mobileMenuBound === 'true') return;
  menuToggle.dataset.mobileMenuBound = 'true';

  function setStoredItem(key, value) {
    try {
      const prop = mapStorageKeyToPayloadProp(key);
      if (!__rsBackendCache) __rsBackendCache = {};
      if (prop) {
        try {
          __rsBackendCache[prop] = JSON.parse(String(value));
        } catch {
          __rsBackendCache[prop] = value;
        }
      } else {
        __rsBackendCache[key] = (() => {
          try { return JSON.parse(String(value)); } catch { return value; }
        })();
      }
      scheduleStateSave();
    } catch (e) {
      console.warn('setStoredItem backend write failed', e);
    }
  }

  function removeStoredItem(key) {
    try {
      const prop = mapStorageKeyToPayloadProp(key);
      if (!__rsBackendCache) __rsBackendCache = {};
      if (prop && (__rsBackendCache[prop] !== undefined)) {
        delete __rsBackendCache[prop];
      } else if (__rsBackendCache[key] !== undefined) {
        delete __rsBackendCache[key];
      }
      scheduleStateSave();
    } catch (err) {
      console.warn('removeStoredItem backend update failed', err);
    }
  }

  function scheduleStateSave() {
    if (__rsSaveTimer) clearTimeout(__rsSaveTimer);
    __rsSaveTimer = setTimeout(() => {
      saveState(__rsBackendCache).catch(() => {});
      __rsSaveTimer = null;
    }, 600);
  }

  async function saveAppState(immediate = false) {
    __rsLocalRevision += 1;
    __rsBackendCache = getAppStatePayload();
    if (immediate) {
      if (__rsSaveTimer) {
        clearTimeout(__rsSaveTimer);
        __rsSaveTimer = null;
      }
      return saveState(__rsBackendCache);
    }
    scheduleStateSave();
  }

  async function refreshSharedState() {
    if (__rsPendingSaveCount > 0) return;
    try {
      const payload = await rsBackend.getState();
      if (!payload || typeof payload !== 'object') return;
      const current = JSON.stringify(__rsBackendCache || {});
      const next = JSON.stringify(payload);
      if (current === next) return;
      __rsBackendCache = payload;
      applySharedState(payload);
      populateCaptainCompanySelect();
      populateEnlistmentCompanySelect();
      renderCompanyLists();
      renderDivisionSummary();
      renderOfficerLeadership();
      renderFounderStory();
      renderGallery();
      renderNews();
      if (window.location.pathname.includes('commander-dashboard.html')) {
        if (renderCommanderWorkspaceAccess()) {
          buildCommanderDashboard();
        }
      }
      if (window.location.pathname.includes('captain-dashboard.html')) {
        const queryParams = new URLSearchParams(window.location.search);
        const companyId = queryParams.get('company') || state.activeCaptainCompany;
        if (companyId && state.companyData[companyId]) {
          state.activeCaptainCompany = companyId;
          buildCaptainDashboard(companyId);
        }
        renderCaptainWorkspaceAccess();
      }
      if (window.location.pathname.includes('exco-dashboard.html')) {
        buildExcoDashboard();
      }
    } catch (err) {
      console.warn('refreshSharedState failed', err);
    }
  }

  const ACTIVE_COMMANDER_KEY = 'royalShepherdActiveCommander';

  function getBackendBaseUrl() {
    return RS_BACKEND_BASE_URL;
  }

  async function requestJson(path, options = {}) {
    const baseUrl = getBackendBaseUrl();
    if (!baseUrl) {
      console.warn(`No backend URL configured. Skipping request to ${path}.`);
      return null;
    }
    const url = `${baseUrl}${path}`;
    const response = await fetch(url, {
      headers: { 'Content-Type': 'application/json' },
      ...options
    });
    if (!response.ok) {
      const detail = await response.text();
      throw new Error(detail || response.statusText || 'Request failed');
    }
    const contentType = response.headers.get('content-type') || '';
    if (!contentType.includes('application/json')) {
      return null;
    }
    return response.json();
  }

  async function checkBackendHealth() {
    const healthUrl = `${getBackendBaseUrl()}/api/health`;
    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), 8000);

    try {
      const response = await fetch(healthUrl, {
        method: 'GET',
        headers: { Accept: 'application/json' },
        signal: controller.signal
      });
      if (!response.ok) throw new Error(`Health check failed with HTTP ${response.status}`);
      __rsBackendAvailable = true;
      showBackendStatus('Backend Active', 'success');
      return true;
    } catch (error) {
      __rsBackendAvailable = false;
      showBackendStatus('Backend Inactive', 'error');
      console.warn('Backend health check failed', error);
      return false;
    } finally {
      window.clearTimeout(timeoutId);
    }
  }

  async function loadSharedStateFromBackend() {
    try {
      const payload = await rsBackend.getState();
      if (payload && typeof payload === 'object') {
        return payload;
      }
    } catch (error) {
      console.warn('Backend state unavailable.', error);
    }
    return null;
  }

  function applySharedState(payload) {
    if (!payload || typeof payload !== 'object') return;
    const companies = payload.companies || payload.companyData || {};
    state.companyData = normalizeCompanyData(companies);
    state.captainAccounts = normalizeAccountMap(payload.captainAccounts || payload.captains || {});
    state.commanderAccounts = normalizeAccountMap(payload.commanderAccounts || payload.commanders || {});
    state.commanderVerificationCodes = payload.commanderVerificationCodes || {};
    state.captainRequests = payload.captainRequests || {};
    state.enlistmentApplications = payload.enlistmentApplications || {};
    state.commanderSettings = payload.commanderSettings || {};
    state.excoProfiles = { ...defaultExcoProfiles, ...(payload.excoProfiles || {}) };
    state.divisionMembers = payload.divisionMembers || { active: [] };
    state.commandStructure = normalizeCommandStructure(payload.commandStructure || {});
    state.founderStory = payload.founderStory || defaultFounderStory;
    state.newsItems = Array.isArray(payload.newsItems) ? payload.newsItems : [];
    state.examScores = payload.examScores || {};
    state.activeExamYear = payload.activeExamYear || String(new Date().getFullYear());
    state.galleryItems = Array.isArray(payload.galleryItems) ? payload.galleryItems : [];
    state.activeCaptainCompany = payload.activeCaptainCompany || '';
    state.activeCommanderEmail = getActiveCommanderEmail();
  }

  async function persistSharedState() {
    await saveAppState(true);
  }

  const ACTIVE_ROLE_KEY = 'royalShepherdActiveRole';
  const ACTIVE_CAPTAIN_COMPANY_KEY = 'royalShepherdActiveCaptainCompany';

  function getActiveCommanderEmail() {
    return sessionStorage.getItem(ACTIVE_COMMANDER_KEY) || null;
  }

  function setActiveCommanderEmail(email) {
    if (email) {
      sessionStorage.setItem(ACTIVE_COMMANDER_KEY, email.toString().trim().toLowerCase());
      state.activeCommanderEmail = email.toString().trim().toLowerCase();
    } else {
      sessionStorage.removeItem(ACTIVE_COMMANDER_KEY);
      state.activeCommanderEmail = null;
    }
  }

  function isCommanderLoggedIn() {
    return Boolean(state.activeCommanderEmail && state.commanderAccounts[state.activeCommanderEmail]?.verified);
  }

  function isCaptainLoggedIn() {
    const companyId = getActiveCaptainCompany();
    return getActiveRole() === 'captain' && Boolean(companyId && (state.companyData[companyId] || defaultCompanyData[companyId]));
  }

  function renderCaptainWorkspaceAccess() {
    if (!captainForm || !dashboardForm) return false;

    const loggedIn = isCaptainLoggedIn();
    captainForm.style.display = loggedIn ? 'none' : '';
    dashboardForm.style.display = loggedIn ? '' : 'none';

    const notice = document.getElementById('dashboardNotice');
    if (notice) {
      notice.textContent = loggedIn ? '' : 'Captain login required to view your company dashboard. Please sign in or register.';
    }

    return loggedIn;
  }

  function getActiveRole() {
    const raw = getStoredItem(ACTIVE_ROLE_KEY);
    if (!raw) return 'visitor';
    try { return JSON.parse(raw); } catch { return String(raw); }
  }

  function setActiveRole(role, companyId = '') {
    const normalizedRole = String(role || 'visitor').trim().toLowerCase();
    const normalizedCaptainCompanyId = String(companyId || '').trim();
    setStoredItem(ACTIVE_ROLE_KEY, JSON.stringify(normalizedRole));
    if (normalizedCaptainCompanyId) {
      setStoredItem(ACTIVE_CAPTAIN_COMPANY_KEY, JSON.stringify(normalizedCaptainCompanyId));
    } else {
      try { removeStoredItem(ACTIVE_CAPTAIN_COMPANY_KEY); } catch {}
    }
  }

  function getActiveCaptainCompany() {
    const raw = getStoredItem(ACTIVE_CAPTAIN_COMPANY_KEY) || '';
    try { return (JSON.parse(raw) || '').toString().trim(); } catch { return (String(raw) || '').trim(); }
  }

  function normalizeAccountMap(rawData) {
    const parsed = {};
    if (!rawData || typeof rawData !== 'object') return parsed;

    if (Array.isArray(rawData)) {
      rawData.forEach((entry) => {
        if (!entry || typeof entry !== 'object') return;
        const emailKey = String(entry.email || entry.username || '').trim().toLowerCase();
        if (!emailKey) return;
        parsed[emailKey] = {
          ...entry,
          email: emailKey,
          password: entry.password || entry.pass || '',
          companyId: entry.companyId || entry.company || entry.company_id || ''
        };
      });
      return parsed;
    }

    Object.entries(rawData).forEach(([key, value]) => {
      if (!value || typeof value !== 'object') return;
      const emailKey = String(value.email || key || '').trim().toLowerCase();
      if (!emailKey) return;
      parsed[emailKey] = {
        ...value,
        email: emailKey,
        password: value.password || value.pass || '',
        companyId: value.companyId || value.company || value.company_id || ''
      };
    });

    return parsed;
  }

  function normalizeCommandStructure(rawData) {
    const entries = Array.isArray(rawData?.officers) ? rawData.officers : [];
    const normalized = defaultOfficerRanks.map((rank) => {
      const existing = entries.find((entry) => entry && entry.rank === rank);
      return {
        rank,
        name: existing?.name || ''
      };
    });

    return { officers: normalized };
  }

  const state = {
    companyData: JSON.parse(JSON.stringify(defaultCompanyData)),
    captainAccounts: {},
    commanderAccounts: {},
    commanderVerificationCodes: {},
    captainRequests: {},
    enlistmentApplications: {},
    commanderSettings: {},
    excoProfiles: { ...defaultExcoProfiles },
    divisionMembers: { active: [] },
    commandStructure: normalizeCommandStructure({}),
    founderStory: defaultFounderStory,
    newsItems: [],
    examScores: {},
    activeExamYear: String(new Date().getFullYear()),
    activeCaptainCompany: '',
    activeCommanderEmail: getActiveCommanderEmail(),
    galleryItems: []
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

  function bindOpeners() {
    document.querySelectorAll('[data-open-modal]').forEach((trigger) => {
      trigger.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = trigger.getAttribute('data-open-modal');
        if (targetId) {
          openModal(targetId);
        }
      });
    });

    document.querySelectorAll('.captain-trigger, .dashboard-trigger').forEach((trigger) => {
      trigger.addEventListener('click', (event) => {
        event.preventDefault();
        const page = trigger.dataset.dashboardPage || 'captain-dashboard.html';
        if (window.location.pathname.includes('captain-dashboard.html')) {
          const url = new URL(window.location.href);
          url.searchParams.set('company', trigger.dataset.companyId || '');
          window.history.replaceState({}, '', url);
          return;
        }
        window.open(page, '_blank', 'noopener,noreferrer');
      });
    });

    document.querySelectorAll('.commander-trigger').forEach((trigger) => {
      trigger.addEventListener('click', (event) => {
        event.preventDefault();
        const page = trigger.dataset.dashboardPage || 'commander-dashboard.html';
        openAdminDashboardPage();
      });
    });

    document.querySelectorAll('.exco-trigger').forEach((trigger) => {
      trigger.addEventListener('click', (event) => {
        event.preventDefault();
        openExcoDashboard();
      });
    });
  }

  function bindAuthTabs() {
    authTabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        const authGroup = tab.closest('.auth-toggle');
        const form = tab.closest('.modal')?.querySelector('form')
          || tab.closest('.dashboard-page-card')?.querySelector('form')
          || tab.closest('section')?.querySelector('form')
          || tab.closest('form');
        if (!authGroup || !form) return;

        authGroup.querySelectorAll('.auth-tab').forEach((item) => item.classList.remove('active'));
        tab.classList.add('active');
        form.dataset.mode = tab.dataset.mode || 'login';
        updateCaptainCompanyMode(form.dataset.mode || 'login');
        const notice = form.querySelector('.captain-notice');
        if (notice) notice.textContent = '';
      });
    });
  }

  function bindModalCloseButtons() {
    modalClose?.addEventListener('click', closeAllModals);
    modalBackdrops.forEach((backdrop) => {
      backdrop.addEventListener('click', closeAllModals);
    });
    captainClose?.addEventListener('click', () => closeModal('captainModal'));
    commanderClose?.addEventListener('click', () => closeModal('commanderModal'));
    commanderDashboardClose?.addEventListener('click', () => closeModal('commanderDashboardModal'));
    excoDashboardClose?.addEventListener('click', () => closeModal('excoDashboardModal'));
    dashboardClose?.addEventListener('click', () => closeModal('dashboardModal'));
    galleryClose?.addEventListener('click', () => closeModal('galleryModal'));
    galleryBackdrop?.addEventListener('click', () => closeModal('galleryModal'));
  }

  function bindEscapeKey() {
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
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

  function resolveImagePath(src) {
    if (!src) return '';
    const normalized = String(src).trim().replace(/\\/g, '/');
    if (/^(https?:)?\/\//i.test(normalized) || normalized.startsWith('data:')) return normalized;
    const path = normalized.startsWith('image/') || normalized.startsWith('../') || normalized.startsWith('./') ? normalized : `image/${normalized}`;
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

  function getGalleryItems() {
    const allowedCategories = new Set(['parades', 'band', 'rehearsals', 'moments-enjoyment', 'exams', 'trophies', 'member-catalogue']);
    const mergedItems = new Map();
    [...galleryData, ...(Array.isArray(state.galleryItems) ? state.galleryItems : [])].forEach((item) => {
      if (!item?.src) return;
      if (item.category === 'officers' || item.category === 'founder' || !allowedCategories.has(item.category || 'parades')) return;
      const key = String(item.src).trim();
      const category = item.category === 'training' ? 'rehearsals' : (item.category || 'parades');
      mergedItems.set(key, { ...mergedItems.get(key), ...item, category, src: key });
    });
    return Array.from(mergedItems.values());
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
      article.innerHTML = `
        <button type="button" class="gallery-thumb" aria-label="${escapeHtml(item.title || 'Gallery picture')}">
          <img src="${resolveImagePath(item.src)}" alt="${escapeHtml(item.title || 'Gallery picture')}" />
          <div class="gallery-overlay">
            <h3>${escapeHtml(item.title || 'Gallery picture')}</h3>
            <p>${escapeHtml(item.description || '')}</p>
          </div>
        </button>
        <a class="gallery-download btn btn-outline" href="${resolveImagePath(item.src)}" download aria-label="Download ${item.title}">Download</a>
      `;
      galleryGrid.appendChild(article);
    });

    const emptyState = document.createElement('p');
    emptyState.className = 'gallery-empty-state';
    emptyState.hidden = true;
    galleryGrid.appendChild(emptyState);

    applyGalleryFilter('all');
  }

  function renderNews() {
    if (!newsGrid) return;
    const items = [...defaultNewsItems, ...(Array.isArray(state.newsItems) ? state.newsItems : [])]
      .filter((item, index, allItems) => allItems.findIndex((candidate) => candidate.id === item.id) === index)
      .filter((item) => item && item.title && item.description)
      .sort((first, second) => new Date(second.date || 0) - new Date(first.date || 0));
    newsGrid.innerHTML = items.length ? items.map((item) => `
      <article class="news-card glass-card">
        ${item.image ? `<img class="news-image" src="${resolveImagePath(item.image)}" alt="${escapeHtml(item.title)}" />` : ''}
        <div class="news-card-copy">
          <p class="news-date">${escapeHtml(item.date || '')}</p>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.description)}</p>
          ${item.link ? `<div class="news-actions"><a class="btn btn-outline" href="${resolvePublicAssetPath(item.link)}" target="_blank" rel="noopener">${item.id === 'rs-constitution' ? 'Read Constitution' : 'Read Handbook'}</a><a class="btn btn-secondary" href="${resolvePublicAssetPath(item.link)}" download="${escapeHtml(item.downloadName || 'Royal-Shepherd-document.pdf')}">Download PDF</a></div>` : ''}
        </div>
      </article>
    `).join('') : '<p class="news-empty">No latest updates have been posted yet.</p>';
  }

  function openGalleryPreview(item) {
    if (!item) return;
    if (galleryPreviewImage) {
      galleryPreviewImage.src = resolveImagePath(item.src);
      galleryPreviewImage.alt = item.title;
      galleryPreviewImage.hidden = false;
    }
    if (galleryPreviewTitle) {
      galleryPreviewTitle.textContent = item.title;
    }
    if (galleryPreviewDescription) {
      galleryPreviewDescription.textContent = item.description;
    }
    if (galleryPreviewCategory) {
      galleryPreviewCategory.textContent = galleryCategoryLabels?.[item.category] || item.category || 'PARADES PICS';
    }
    if (galleryPreviewDownload) {
      galleryPreviewDownload.href = resolveImagePath(item.src);
      galleryPreviewDownload.download = item.title || 'royal-shepherd-picture';
    }
    openModal('galleryModal');
  }

  function applyGalleryFilter(filter, elements = null) {
    galleryFilters.forEach((button) => {
      button.classList.toggle('active', button.dataset.filter === filter);
    });

    const itemsToToggle = elements || Array.from(galleryGrid?.querySelectorAll('.gallery-item') || []);
    let visibleCount = 0;
    itemsToToggle.forEach((item) => {
      const query = (gallerySearch?.value || '').trim().toLowerCase();
      const searchable = `${item.textContent || ''} ${item.dataset.category || ''}`.toLowerCase();
      const show = (filter === 'all' || item.dataset.category === filter) && (!query || searchable.includes(query));
      item.classList.toggle('is-hidden', !show);
      if (show) visibleCount += 1;
    });
    const emptyState = galleryGrid?.querySelector('.gallery-empty-state');
    if (emptyState) {
      emptyState.hidden = visibleCount > 0;
      emptyState.textContent = filter === 'trophies'
        ? 'No saved trophy or award pictures are currently available.'
        : (filter === 'moments-enjoyment' ? 'No saved enjoyment pictures are currently available.' : 'No gallery pictures match this search.');
    }
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

    galleryFilters.forEach((button) => {
      button.addEventListener('click', () => applyGalleryFilter(button.dataset.filter));
    });
    gallerySearch?.addEventListener('input', () => {
      const activeFilter = document.querySelector('.filter-btn.active')?.dataset.filter || 'all';
      applyGalleryFilter(activeFilter);
    });
  }

  function parseTextareaLines(value) {
    return (value || '')
      .toString()
      .split(/\r?\n/)
      .map((item) => item.trim())
      .filter(Boolean);
  }

  function arraysEqual(first, second) {
    if (!Array.isArray(first) || !Array.isArray(second)) return false;
    if (first.length !== second.length) return false;
    return first.every((item, index) => item === second[index]);
  }

  function scoreEntriesEqual(first, second) {
    return JSON.stringify(first || []) === JSON.stringify(second || []);
  }

  function officerEntriesEqual(first, second) {
    if (!Array.isArray(first) || !Array.isArray(second)) return false;
    if (first.length !== second.length) return false;
    return first.every((entry, index) => entry?.rank === second[index]?.rank && entry?.name === second[index]?.name);
  }

  const examGradeSections = [
    { key: 'intermediate1', label: 'Intermediate 1' },
    { key: 'intermediate2', label: 'Intermediate 2' },
    { key: 'senior1', label: 'Senior 1' },
    { key: 'senior2', label: 'Senior 2' },
    { key: 'seniorAdvance', label: 'Senior Advance' },
    { key: 'advancedJunior', label: 'Advanced Junior' }
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
    } catch (err) {
      console.warn('Auto-open EXCO dashboard failed:', err);
    }

    const summaryCard = document.createElement('div');
    summaryCard.className = 'dashboard-card';
    summaryCard.innerHTML = `
      <h4>Division Setup</h4>
      <label>
        <span>ESTC Exam Year</span>
        <input type="number" name="exam-year" value="${(state.activeExamYear || getLatestExamYear()).replace(/"/g, '&quot;')}" />
      </label>
      <label>
        <span>Division Active Members</span>
        <textarea name="division-active-members" placeholder="Add division active members one per line">${(state.divisionMembers?.active || []).join('\n')}</textarea>
      </label>
    `;
    commanderDashboardGrid.appendChild(summaryCard);

    const leadershipCard = document.createElement('div');
    leadershipCard.className = 'dashboard-card';
    leadershipCard.innerHTML = `
      <h4>Officer and Commander Names</h4>
      <p class="dashboard-intro">Edit the names shown on the public Officers and Commanders section.</p>
      ${defaultOfficerRanks.map((rank) => {
        const entry = (state.commandStructure?.officers || []).find((item) => item.rank === rank);
        return `
          <label>
            <span>${rank}</span>
            <input type="text" name="officer-${rank.toLowerCase().replace(/[^a-z0-9]+/g, '-')}" value="${escapeHtml(entry?.name || '')}" />
          </label>
        `;
      }).join('')}
    `;
    commanderDashboardGrid.appendChild(leadershipCard);

    const founderStoryCard = document.createElement('div');
    founderStoryCard.className = 'dashboard-card';
    founderStoryCard.innerHTML = `
      <h4>Founder Biography</h4>
      <p class="dashboard-intro">Update the Pa SK Abiara story shown on the homepage.</p>
      <label>
        <span>Biography</span>
        <textarea name="founder-story" rows="8">${escapeHtml(state.founderStory || defaultFounderStory)}</textarea>
      </label>
    `;
    commanderDashboardGrid.appendChild(founderStoryCard);

    const newsCard = document.createElement('div');
    newsCard.className = 'dashboard-card news-admin-card';
    newsCard.innerHTML = `
      <h4>Latest News &amp; Updates</h4>
      <p class="dashboard-intro">Add, edit, or delete public news, announcements, events, and important updates.</p>
      <input type="hidden" name="news-edit-id" value="" />
      <label><span>Title</span><input type="text" name="news-title" /></label>
      <label><span>Date</span><input type="date" name="news-date" value="${new Date().toISOString().slice(0, 10)}" /></label>
      <label><span>Description</span><textarea name="news-description" rows="4"></textarea></label>
      <label><span>Optional Image Path or URL</span><input type="text" name="news-image" placeholder="image/example.jpeg or https://..." /></label>
      <div class="dashboard-actions"><button type="button" class="btn btn-gold" data-news-action="save">Publish Update</button><button type="button" class="btn btn-secondary" data-news-action="cancel" hidden>Cancel Edit</button></div>
      <div class="news-admin-list"></div>
    `;
    commanderDashboardGrid.appendChild(newsCard);
    const newsAdminList = newsCard.querySelector('.news-admin-list');
    const newsItems = [...(state.newsItems || [])].sort((first, second) => new Date(second.date || 0) - new Date(first.date || 0));
    newsAdminList.innerHTML = newsItems.length ? newsItems.map((item) => `
      <div class="news-admin-item">
        <div><strong>${escapeHtml(item.title)}</strong><small>${escapeHtml(item.date || '')}</small></div>
        <div class="request-actions"><button type="button" class="btn btn-outline" data-news-action="edit" data-news-id="${escapeHtml(item.id)}">Edit</button><button type="button" class="btn btn-secondary" data-news-action="delete" data-news-id="${escapeHtml(item.id)}">Delete</button></div>
      </div>
    `).join('') : '<p>No news updates posted yet.</p>';

    const galleryManagementCard = document.createElement('div');
    galleryManagementCard.className = 'dashboard-card gallery-management-card';
    galleryManagementCard.innerHTML = `
      <h4>Gallery Management</h4>
      <p class="dashboard-intro">Upload one or more public gallery pictures, choose a category, preview them, and publish them to every visitor.</p>
      <label><span>Pictures</span><input type="file" class="gallery-upload-input" accept="image/png,image/jpeg,image/jpg,image/webp" multiple /></label>
      <label><span>Category for selected pictures</span><select class="gallery-upload-category"><option value="parades">Parades Pics</option><option value="band">Band Pics</option><option value="rehearsals">Rehearsal Pics</option><option value="moments-enjoyment">Moments of Enjoyment</option><option value="exams">Exams Pics</option><option value="trophies">Trophies Cabinet</option><option value="member-catalogue">Member Catalogue</option></select></label>
      <div class="gallery-upload-preview"></div>
      <div class="dashboard-actions"><button type="button" class="btn btn-gold" data-gallery-action="publish">Publish Pictures</button></div>
      <div class="gallery-admin-list"></div>
    `;
    commanderDashboardGrid.appendChild(galleryManagementCard);
    const galleryAdminList = galleryManagementCard.querySelector('.gallery-admin-list');
    const managedItems = (state.galleryItems || []).filter((item) => item && item.src);
    galleryAdminList.innerHTML = managedItems.length ? managedItems.map((item) => `
      <div class="gallery-admin-item"><span>${escapeHtml(item.title || item.src)}</span><button type="button" class="btn btn-secondary" data-gallery-action="delete" data-gallery-id="${escapeHtml(item.id || item.src)}">Delete</button></div>
    `).join('') : '<p>No admin-uploaded pictures yet. Repository gallery pictures remain available to visitors.</p>';

    const requestCard = document.createElement('div');
    requestCard.className = 'dashboard-card';
    requestCard.innerHTML = `
      <h4>Pending Account Creation Requests</h4>
      <p class="dashboard-intro">Approve or deny captain creation requests submitted by members.</p>
      <div class="request-list"></div>
    `;
    commanderDashboardGrid.appendChild(requestCard);

    const requestList = requestCard.querySelector('.request-list');
    const pendingRequests = Object.entries(state.captainRequests).map(([email, request]) => ({
      email,
      request
    }));

    if (!pendingRequests.length) {
      requestList.innerHTML = '<p>No pending account creation requests.</p>';
    } else {
      pendingRequests.forEach(({ email, request }) => {
        const item = document.createElement('div');
        item.className = 'dashboard-card';
        item.innerHTML = `
          <h5>Captain Request: ${email}</h5>
          <p>Company ${request.companyId}</p>
          <p>Submitted: ${new Date(request.submittedAt).toLocaleString()}</p>
          <div class="request-actions">
            <button type="button" class="btn btn-gold request-action" data-request="approve" data-request-type="captain" data-email="${email}">Approve</button>
            <button type="button" class="btn btn-secondary request-action" data-request="deny" data-request-type="captain" data-email="${email}">Deny</button>
          </div>
        `;
        requestList.appendChild(item);
      });
    }

    const applicationsCard = document.createElement('div');
    applicationsCard.className = 'dashboard-card';
    applicationsCard.innerHTML = `
      <h4>Enlistment Applications</h4>
      <p class="dashboard-intro">Review pending enlistment applications from prospective members.</p>
      <div class="applications-list"></div>
    `;
    commanderDashboardGrid.appendChild(applicationsCard);

    const applicationsList = applicationsCard.querySelector('.applications-list');
    const pendingApplications = Object.entries(state.enlistmentApplications || {})
      .filter(([_, app]) => app.status === 'Pending')
      .sort((a, b) => new Date(b[1].submittedAt) - new Date(a[1].submittedAt));

    if (!pendingApplications.length) {
      applicationsList.innerHTML = '<p>No pending enlistment applications.</p>';
    } else {
      pendingApplications.forEach(([appId, app]) => {
        const companyName = getCompanyDisplayName(app.company, state.companyData[app.company]);
        const item = document.createElement('div');
        item.className = 'dashboard-card';
        item.innerHTML = `
          <h5>Enlistment: ${escapeHtml(app.fullName)}</h5>
          <p><strong>Email:</strong> ${escapeHtml(app.email)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(app.phone)}</p>
          <p><strong>Date of Birth:</strong> ${app.dob}</p>
          <p><strong>Gender:</strong> ${escapeHtml(app.gender)}</p>
          <p><strong>Preferred Company:</strong> ${escapeHtml(companyName)}</p>
          <p><strong>Reason:</strong> ${escapeHtml(app.reason)}</p>
          <p><strong>Submitted:</strong> ${new Date(app.submittedAt).toLocaleString()}</p>
          <div class="request-actions">
            <button type="button" class="btn btn-gold request-action" data-request="approve" data-request-type="application" data-app-id="${appId}">Approve</button>
            <button type="button" class="btn btn-secondary request-action" data-request="deny" data-request-type="application" data-app-id="${appId}">Deny</button>
          </div>
        `;
        applicationsList.appendChild(item);
      });
    }

    Object.entries(state.companyData).forEach(([companyId, company]) => {
      const examData = getExamDataForCompany(companyId, state.activeExamYear || getLatestExamYear());
      const card = document.createElement('div');
      card.className = 'dashboard-card';
      card.innerHTML = `
        <h4>${company.name}</h4>
        <label>
          <span>Company Name</span>
          <input type="text" name="company-name-${companyId}" value="${(company.name || '').replace(/"/g, '&quot;')}" />
        </label>
        <label>
          <span>Total Members</span>
          <input type="number" name="total-members-${companyId}" value="${getCompanyMemberCount(company)}" />
        </label>
        <label>
          <span>Total NCOs</span>
          <input type="number" name="total-ncos-${companyId}" value="${getCompanyNcoCount(company)}" />
        </label>
        <label>
          <span>Total Commissioned Officers</span>
          <input type="number" name="total-officers-${companyId}" value="${getCompanyOfficerCount(company)}" />
        </label>
        ${companySectionDefinitions.map((section) => `
          <label>
            <span>${section.label}</span>
            <textarea name="${section.key}-${companyId}" placeholder="Add names for ${section.label.toLowerCase()} one per line">${(company[section.key] || []).join('\n')}</textarea>
          </label>
        `).join('')}
        ${examGradeSections.map((section) => `
          <label>
            <span>${section.label} Scores</span>
            <textarea name="${section.key}-scores-${companyId}" placeholder="Name | Score per line">${formatScoreEntries(examData[section.key] || []).join('\n')}</textarea>
          </label>
        `).join('')}
      `;
      commanderDashboardGrid.appendChild(card);
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

    commanderForm?.addEventListener('submit', (event) => {
      event.preventDefault();
      const mode = commanderForm.dataset.mode || 'login';
      const email = commanderEmail.value.trim().toLowerCase();
      const password = commanderPassword.value.trim();

      if (!email || !password) {
        commanderNotice.textContent = 'Please enter your commander email and password.';
        commanderNotice.style.color = 'hsl(0, 70%, 60%)';
        return;
      }

      const account = state.commanderAccounts[email];

      if (mode === 'register') {
        if (account) {
          commanderNotice.textContent = 'This email already has commander access.';
          commanderNotice.style.color = 'hsl(0, 70%, 60%)';
          return;
        }

        state.commanderAccounts[email] = { password, verified: true, email };
        saveCommanderAccounts();
        setActiveCommanderEmail(email);
        setActiveRole('admin');
        commanderNotice.textContent = `Admin account created for ${email}. Opening the admin dashboard.`;
        commanderNotice.style.color = 'var(--gold-400)';
        closeModal('commanderModal');
        openCommanderDashboard();
        return;
      }

      if (!account || account.password !== password) {
        commanderNotice.textContent = 'Invalid commander email or password.';
        commanderNotice.style.color = 'hsl(0, 70%, 60%)';
        return;
      }

      if (!account.verified) {
        commanderNotice.textContent = 'Your commander account is not verified yet.';
        commanderNotice.style.color = 'hsl(0, 70%, 60%)';
        return;
      }

      setActiveCommanderEmail(email);
      setActiveRole('admin');
      commanderNotice.textContent = 'Commander access granted. Opening the commander dashboard.';
      commanderNotice.style.color = 'var(--gold-400)';
      closeModal('commanderModal');
      openCommanderDashboard();
    });

    const commanderLogoutBtn = document.getElementById('commanderLogoutBtn');
    commanderLogoutBtn?.addEventListener('click', (event) => {
      event.preventDefault();
      setActiveCommanderEmail(null);
      setActiveRole('visitor');
      showToast('Commander logged out');
      renderCommanderWorkspaceAccess();
    });

    dashboardForm?.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!state.activeCaptainCompany) return;

      const dashboardNotice = document.getElementById('dashboardNotice');
      if (dashboardNotice) {
        dashboardNotice.textContent = '';
      }

      const formData = new FormData(dashboardForm);
      const companyId = String(state.activeCaptainCompany);
      const savedCompany = state.companyData[companyId] || defaultCompanyData[companyId];
      const sectionValues = companySectionDefinitions.reduce((accumulator, section) => {
        const rawValue = formData.get(`${section.key}-${companyId}`);
        const parsedValue = parseTextareaLines(rawValue);
        accumulator[section.key] = parsedValue.length ? parsedValue : (savedCompany[section.key] || []);
        return accumulator;
      }, {});
      const companyCounts = {
        anchor: sectionValues.anchor,
        junior: sectionValues.junior,
        intermediate: sectionValues.intermediate,
        senior: sectionValues.senior,
        officer: sectionValues.officer
      };
      const totalMembers = getCompanyMemberCount(companyCounts);
      const totalNcos = getCompanyNcoCount(companyCounts);
      const totalOfficers = getCompanyOfficerCount(companyCounts);
      const name = (formData.get(`company-name-${companyId}`) || '')
        .toString()
        .trim() || savedCompany?.name || `Company ${companyId}`;

      const noChanges =
        savedCompany?.name === name &&
        arraysEqual(savedCompany?.anchor || [], sectionValues.anchor) &&
        arraysEqual(savedCompany?.junior || [], sectionValues.junior) &&
        arraysEqual(savedCompany?.intermediate || [], sectionValues.intermediate) &&
        arraysEqual(savedCompany?.senior || [], sectionValues.senior) &&
        arraysEqual(savedCompany?.officer || [], sectionValues.officer);

      if (noChanges) {
        if (dashboardNotice) {
          dashboardNotice.textContent = 'No changes detected. Your company data is already saved.';
        }
        return;
      }

      state.companyData[companyId] = {
        name,
        ...sectionValues,
        active: sectionValues.anchor,
        inactive: sectionValues.junior,
        officers: sectionValues.officer,
        totalMembers,
        totalNcos,
        totalOfficers
      };
      saveCompanies();
      renderCompanyLists();
      closeModal('dashboardModal');
    });

    commanderDashboardForm?.addEventListener('submit', (event) => {
      event.preventDefault();
      const commanderDashboardNotice = document.getElementById('commanderDashboardNotice');
      if (commanderDashboardNotice) {
        commanderDashboardNotice.textContent = '';
      }

      const formData = new FormData(commanderDashboardForm);

      const previousNewsItems = JSON.stringify(state.newsItems || []);
      const newsTitle = (formData.get('news-title') || '').toString().trim();
      const newsDate = (formData.get('news-date') || '').toString().trim();
      const newsDescription = (formData.get('news-description') || '').toString().trim();
      const newsImage = (formData.get('news-image') || '').toString().trim();
      const newsEditId = (formData.get('news-edit-id') || '').toString().trim();
      if (newsTitle && newsDate && newsDescription) {
        const newsItem = { id: newsEditId || `news-${Date.now()}`, title: newsTitle, date: newsDate, description: newsDescription, image: newsImage };
        const existingIndex = state.newsItems.findIndex((item) => item.id === newsItem.id);
        if (existingIndex >= 0) state.newsItems[existingIndex] = newsItem;
        else state.newsItems.push(newsItem);
        renderNews();
      }

      const divisionMembers = parseTextareaLines(formData.get('division-active-members'));
      const officerEntries = defaultOfficerRanks.map((rank) => ({
        rank,
        name: (formData.get(`officer-${rank.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`) || '').toString().trim()
      }));
      const founderStory = (formData.get('founder-story') || '').toString().trim() || defaultFounderStory;
      const examYear = (formData.get('exam-year') || '').toString().trim() || state.activeExamYear || String(new Date().getFullYear());

      const companyDataValues = Object.keys(state.companyData).reduce((accumulator, companyId) => {
        const sectionValues = companySectionDefinitions.reduce((sectionAcc, section) => {
          const rawValue = formData.get(`${section.key}-${companyId}`);
          const parsedValue = parseTextareaLines(rawValue);
          sectionAcc[section.key] = parsedValue.length ? parsedValue : (state.companyData[companyId]?.[section.key] || []);
          return sectionAcc;
        }, {});
        const name = (formData.get(`company-name-${companyId}`) || '')
          .toString()
          .trim() || state.companyData[companyId]?.name || `Company ${companyId}`;
        const totalMembers = getCompanyMemberCount(sectionValues);
        const totalNcos = getCompanyNcoCount(sectionValues);
        const totalOfficers = getCompanyOfficerCount(sectionValues);

        const scoreSections = examGradeSections.reduce((scoreAcc, section) => {
          scoreAcc[section.key] = parseScoreEntries(formData.get(`${section.key}-scores-${companyId}`));
          return scoreAcc;
        }, {});

        accumulator[companyId] = {
          name,
          sectionValues,
          scoreSections,
          totalMembers,
          totalNcos,
          totalOfficers
        };
        return accumulator;
      }, {});

      const noChanges =
        arraysEqual(divisionMembers, state.divisionMembers?.active || []) &&
        officerEntriesEqual(officerEntries, state.commandStructure?.officers || []) &&
        founderStory === state.founderStory &&
        examYear === state.activeExamYear &&
        JSON.stringify(state.newsItems || []) === previousNewsItems &&
        Object.keys(state.companyData).every((companyId) => {
          const expected = state.companyData[companyId] || defaultCompanyData[companyId];
          const current = companyDataValues[companyId];
          return (
            expected.name === current.name &&
            Number(expected.totalMembers || 0) === Number(current.totalMembers || 0) &&
            Number(expected.totalNcos || 0) === Number(current.totalNcos || 0) &&
            Number(expected.totalOfficers || 0) === Number(current.totalOfficers || 0) &&
            arraysEqual(expected.anchor || [], current.sectionValues.anchor) &&
            arraysEqual(expected.junior || [], current.sectionValues.junior) &&
            arraysEqual(expected.intermediate || [], current.sectionValues.intermediate) &&
            arraysEqual(expected.senior || [], current.sectionValues.senior) &&
            arraysEqual(expected.officer || [], current.sectionValues.officer) &&
            scoreEntriesEqual(state.examScores[examYear]?.[companyId] || [], current.scoreSections[companyId] || [])
          );
        });

      if (noChanges) {
        if (commanderDashboardNotice) {
          commanderDashboardNotice.textContent = 'No changes detected. Your commander dashboard data is already saved.';
        }
        return;
      }

      state.divisionMembers = { active: divisionMembers };
      saveDivisionMembers();

      state.commandStructure = { officers: officerEntries };
      saveCommandStructure();

      state.founderStory = founderStory;
      saveFounderStory();

      state.activeExamYear = examYear;
      state.examScores[examYear] = state.examScores[examYear] || {};

      renderFounderStory();
      renderOfficerLeadership();

      Object.keys(state.companyData).forEach((companyId) => {
        const current = companyDataValues[companyId];
        state.companyData[companyId] = {
          name: current.name,
          ...current.sectionValues,
          active: current.sectionValues.anchor,
          inactive: current.sectionValues.junior,
          officers: current.sectionValues.officer,
          totalMembers: current.totalMembers,
          totalNcos: current.totalNcos,
          totalOfficers: current.totalOfficers
        };
        state.examScores[examYear][companyId] = current.scoreSections;
      });

      saveCompanies();
      saveExamScores();
      saveAppState(true).catch(() => {});
      renderCompanyLists();
      populateCaptainCompanySelect();
      populateEnlistmentCompanySelect();
      closeModal('commanderDashboardModal');
      showToast('Commander dashboard saved', 3000);
    });

    commanderDashboardGrid?.addEventListener('click', (event) => {
      const actionButton = event.target.closest('[data-news-action]');
      if (!actionButton) return;
      const action = actionButton.dataset.newsAction;
      const newsCard = actionButton.closest('.news-admin-card');
      if (!newsCard) return;
      const newsId = actionButton.dataset.newsId;
      if (action === 'save') {
        commanderDashboardForm?.requestSubmit();
        return;
      }
      if (action === 'delete') {
        state.newsItems = state.newsItems.filter((item) => item.id !== newsId);
        saveAppState(true).catch(() => {});
        renderNews();
        buildCommanderDashboard();
        return;
      }
      if (action === 'edit') {
        const item = state.newsItems.find((entry) => entry.id === newsId);
        if (!item) return;
        newsCard.querySelector('[name="news-edit-id"]').value = item.id;
        newsCard.querySelector('[name="news-title"]').value = item.title || '';
        newsCard.querySelector('[name="news-date"]').value = item.date || '';
        newsCard.querySelector('[name="news-description"]').value = item.description || '';
        newsCard.querySelector('[name="news-image"]').value = item.image || '';
        newsCard.querySelector('[data-news-action="save"]').textContent = 'Save Update';
        newsCard.querySelector('[data-news-action="cancel"]').hidden = false;
      }
      if (action === 'cancel') {
        buildCommanderDashboard();
      }
    });

    commanderDashboardGrid?.addEventListener('change', (event) => {
      const input = event.target.closest('.gallery-upload-input');
      if (!input) return;
      const defaultCategory = input.closest('.gallery-management-card')?.querySelector('.gallery-upload-category')?.value || 'parades';
      pendingGalleryFiles = Array.from(input.files || [])
        .filter((file) => /^image\/(jpeg|jpg|png|webp)$/i.test(file.type))
        .map((file) => ({ file, category: defaultCategory }));
      const preview = input.closest('.gallery-management-card')?.querySelector('.gallery-upload-preview');
      if (preview) {
        preview.innerHTML = pendingGalleryFiles.map((entry, index) => `<div class="gallery-upload-preview-item"><img src="${URL.createObjectURL(entry.file)}" alt="${escapeHtml(entry.file.name)}" /><span>${escapeHtml(entry.file.name)}</span><input class="gallery-upload-item-title" data-gallery-index="${index}" value="${escapeHtml(entry.file.name)}" aria-label="Picture name" /><select class="gallery-upload-item-category" data-gallery-index="${index}"><option value="parades" ${entry.category === 'parades' ? 'selected' : ''}>Parades Pics</option><option value="band" ${entry.category === 'band' ? 'selected' : ''}>Band Pics</option><option value="rehearsals" ${entry.category === 'rehearsals' ? 'selected' : ''}>Rehearsal Pics</option><option value="moments-enjoyment" ${entry.category === 'moments-enjoyment' ? 'selected' : ''}>Moments of Enjoyment</option><option value="exams" ${entry.category === 'exams' ? 'selected' : ''}>Exams Pics</option><option value="trophies" ${entry.category === 'trophies' ? 'selected' : ''}>Trophies Cabinet</option><option value="member-catalogue" ${entry.category === 'member-catalogue' ? 'selected' : ''}>Member Catalogue</option></select></div>`).join('');
      }
    });

    commanderDashboardGrid?.addEventListener('change', (event) => {
      const titleInput = event.target.closest('.gallery-upload-item-title');
      if (titleInput) {
        const entry = pendingGalleryFiles[Number(titleInput.dataset.galleryIndex)];
        if (entry) entry.title = titleInput.value.trim() || entry.file.name;
        return;
      }
      const categorySelect = event.target.closest('.gallery-upload-item-category');
      if (!categorySelect) return;
      const entry = pendingGalleryFiles[Number(categorySelect.dataset.galleryIndex)];
      if (entry) entry.category = categorySelect.value;
    });

    commanderDashboardGrid?.addEventListener('click', async (event) => {
      const actionButton = event.target.closest('[data-gallery-action]');
      if (!actionButton) return;
      const action = actionButton.dataset.galleryAction;
      if (action === 'delete') {
        const galleryId = actionButton.dataset.galleryId;
        state.galleryItems = (state.galleryItems || []).filter((item) => (item.id || item.src) !== galleryId);
        const saved = await saveAppState(true);
        if (saved) {
          renderGallery();
          buildCommanderDashboard();
          showToast('Gallery picture deleted');
        }
        return;
      }
      if (action === 'publish') {
        const card = actionButton.closest('.gallery-management-card');
        if (!pendingGalleryFiles.length) {
          showToast('Choose at least one picture first');
          return;
        }
        const uploadedItems = await Promise.all(pendingGalleryFiles.map((entry) => new Promise((resolve, reject) => {
          const file = entry.file;
          const reader = new FileReader();
          reader.onload = () => resolve({
            id: `gallery-${Date.now()}-${Math.random().toString(36).slice(2)}`,
            src: reader.result,
            category: entry.category,
            title: entry.title || file.name,
            description: galleryCategoryLabels?.[entry.category] || 'Royal Shepherd gallery picture'
          });
          reader.onerror = reject;
          reader.readAsDataURL(file);
        })));
        state.galleryItems = [...(state.galleryItems || []), ...uploadedItems];
        const saved = await saveAppState(true);
        if (saved) {
          pendingGalleryFiles = [];
          renderGallery();
          buildCommanderDashboard();
          showToast(`${uploadedItems.length} gallery picture(s) published`);
        }
      }
    });

    excoDashboardForm?.addEventListener('submit', async (event) => {
      event.preventDefault();
      saveExcoFormChanges(true);
      closeModal('excoDashboardModal');
    });

    openExcoDashboardBtn?.addEventListener('click', (event) => {
      event.preventDefault();
      openExcoDashboard();
    });

    openExcoDashboardFromAdminBtn?.addEventListener('click', (event) => {
      event.preventDefault();
      openExcoDashboard();
    });

    // Export EXCO profiles button
    document.addEventListener('click', (event) => {
      if (event.target.id === 'exportExcoProfiles') {
        event.preventDefault();
        saveExcoFormChanges(false);
        exportExcoProfilesToJson();
      }
    });

    // Import members (CSV / JSON) handler for commander admin page
    function normalizeSectionKey(key) {
      if (!key) return null;
      const k = String(key || '').trim().toLowerCase();
      if (['anchor', 'active'].includes(k)) return 'anchor';
      if (['junior', 'inactive'].includes(k)) return 'junior';
      if (['intermediate'].includes(k)) return 'intermediate';
      if (['senior'].includes(k)) return 'senior';
      if (['officer', 'officers'].includes(k)) return 'officer';
      return null;
    }

    function parseCsvTextToRows(text) {
      const lines = String(text || '').split(/\r?\n/).map(l => l.trim()).filter(Boolean);
      if (!lines.length) return [];
      const headerParts = lines[0].split(/,|\t/).map(h => h.trim().toLowerCase());
      const hasHeader = headerParts.includes('company') && (headerParts.includes('name') || headerParts.includes('member'));
      const rows = [];
      const start = hasHeader ? 1 : 0;
      for (let i = start; i < lines.length; i++) {
        const parts = lines[i].split(/,|\t/).map(p => p.trim());
        if (hasHeader) {
          const obj = {};
          headerParts.forEach((h, idx) => { obj[h] = parts[idx] || ''; });
          rows.push(obj);
        } else {
          // assume company,section,name order
          rows.push({ company: parts[0] || '', section: parts[1] || '', name: parts.slice(2).join(' ') });
        }
      }
      return rows;
    }

    commanderImportBtn?.addEventListener('click', () => {
      commanderImportFile?.click();
    });

    commanderImportFile?.addEventListener('change', (event) => {
      const file = event.target.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        try {
          let rows = [];
          if (/json$/i.test(file.name) || file.type.includes('json')) {
            const data = JSON.parse(String(reader.result || 'null'));
            if (Array.isArray(data)) {
              rows = data.map((r) => ({ company: r.company || r.companyId || r.company_id || '', section: r.section || r.type || '', name: r.name || r.member || '' }));
            } else if (data && typeof data === 'object') {
              // object mapping: { companyId: { anchor: [...], junior: [...] } }
              Object.entries(data).forEach(([companyId, company]) => {
                Object.entries(company || {}).forEach(([sectionKey, arr]) => {
                  if (Array.isArray(arr)) {
                    arr.forEach((nm) => rows.push({ company: companyId, section: sectionKey, name: String(nm || '') }));
                  }
                });
              });
            }
          } else {
            rows = parseCsvTextToRows(String(reader.result || ''));
          }

          let imported = 0;
          rows.forEach((row) => {
            const companyId = String(row.company || '').trim();
            const section = normalizeSectionKey(row.section || '');
            const name = String(row.name || '').trim();
            if (!companyId || !section || !name) return;
            if (!state.companyData[companyId]) {
              state.companyData[companyId] = { name: `Company ${companyId}` };
              companySectionDefinitions.forEach((s) => { state.companyData[companyId][s.key] = state.companyData[companyId][s.key] || []; });
            }
            state.companyData[companyId][section] = state.companyData[companyId][section] || [];
            if (!state.companyData[companyId][section].includes(name)) {
              state.companyData[companyId][section].push(name);
              imported++;
            }
          });

          if (imported > 0) {
            // Recompute totals for affected companies
            Object.keys(state.companyData).forEach((cid) => {
              const comp = state.companyData[cid] || {};
              comp.totalMembers = getCompanyMemberCount(comp);
              comp.totalNcos = getCompanyNcoCount(comp);
              comp.totalOfficers = getCompanyOfficerCount(comp);
            });
            saveCompanies();
            renderCompanyLists();
            try { buildCommanderDashboard(); } catch {}
            showToast(`Imported ${imported} member(s) and saved.`);
          } else {
            showToast('No valid rows found in the uploaded file.');
          }
        } catch (err) {
          console.warn('Import failed', err);
          showToast('Import failed. See console for details.');
        }
      };
      reader.readAsText(file);
      // reset input so same file can be re-used
      event.target.value = '';
    });

    excoDashboardForm?.addEventListener('input', scheduleExcoAutoSave);
    excoDashboardForm?.addEventListener('change', scheduleExcoAutoSave);

    excoDashboardGrid?.addEventListener('click', (event) => {
      const button = event.target.closest('.exco-photo-button');
      const photoCircle = event.target.closest('.profile-photo-circle');
      const triggerElement = button || photoCircle;
      if (!triggerElement) return;
      const roleKey = triggerElement.dataset.role;
      if (!roleKey) return;
      const card = excoDashboardGrid.querySelector(`.dashboard-card[data-role="${roleKey}"]`);
      const fileInput = card?.querySelector(`.exco-photo-input[data-role="${roleKey}"]`);
      fileInput?.click();
    });

    excoDashboardGrid?.addEventListener('click', (event) => {
      const removeButton = event.target.closest('.exco-remove-photo');
      if (!removeButton) return;
      const roleKey = removeButton.dataset.role;
      const card = excoDashboardGrid.querySelector(`.dashboard-card[data-role="${roleKey}"]`);
      resetExcoPhotoCard(card);
      if (card) {
        const uploadButton = card.querySelector('.exco-photo-button');
        if (uploadButton) uploadButton.textContent = 'Upload Picture';
      }
      scheduleExcoAutoSave();
    });

    excoDashboardGrid?.addEventListener('change', async (event) => {
      const input = event.target.closest('.exco-photo-input');
      if (!input) return;
      const roleKey = input.dataset.role;
      const card = excoDashboardGrid.querySelector(`.dashboard-card[data-role="${roleKey}"]`);
      if (!card || !input.files?.[0]) return;

      const file = input.files[0];
      if (!/^image\/(jpeg|jpg|png|webp)$/i.test(file.type)) {
        alert('Please select a JPG, JPEG, PNG, or WebP image.');
        input.value = '';
        return;
      }

      try {
        const previewDataUrl = await resizeImageFileToDataUrl(file);
        card.dataset.tempPhoto = previewDataUrl;
        clearPhotoRemovalFlag(card);
        updateExcoProfilePreview(card, previewDataUrl);
        const removeButton = card.querySelector('.exco-remove-photo');
        if (removeButton) removeButton.hidden = false;
        const uploadButton = card.querySelector('.exco-photo-button');
        if (uploadButton) uploadButton.textContent = 'Change Picture';
        saveExcoFormChanges(false);
        renderOfficerLeadership();
      } catch (error) {
        console.warn('Error preparing EXCO photo preview:', error);
      }
    });

    dashboardGrid?.addEventListener('click', (event) => {
      const downloadButton = event.target.closest('[data-download-pdf="true"]');
      if (!downloadButton) return;

      exportExamResultsPdf(
        downloadButton.dataset.companyId,
        downloadButton.dataset.year || getLatestExamYear()
      );
    });

    commanderDashboardGrid?.addEventListener('click', (event) => {
      const actionButton = event.target.closest('.request-action');
      if (!actionButton) return;

      const requestType = actionButton.dataset.requestType;
      const email = actionButton.dataset.email;
      const appId = actionButton.dataset.appId;
      const requestAction = actionButton.dataset.request;
      if (!requestType || !requestAction) return;

      if (requestType === 'captain') {
        if (!email) return;
        if (requestAction === 'approve') {
          const request = state.captainRequests[email];
          if (request) {
            state.captainAccounts[email] = { password: request.password, companyId: request.companyId, verified: true, email };
            delete state.captainRequests[email];
            saveCaptains();
            saveCaptainRequests();
          }
        } else if (requestAction === 'deny') {
          delete state.captainRequests[email];
          saveCaptainRequests();
        }
      } else if (requestType === 'application') {
        if (!appId) return;
        if (requestAction === 'approve') {
          if (state.enlistmentApplications[appId]) {
            state.enlistmentApplications[appId].status = 'Approved';
            saveEnlistmentApplications();
            (async () => {
              try {
                await requestJson(`/applications/${appId}/approve`, { method: 'POST' });
                const backendState = await loadSharedStateFromBackend();
                if (backendState) {
                  applySharedState(backendState);
                }
                renderCompanyLists();
                buildCommanderDashboard();
              } catch (error) {
                console.warn('Could not approve application in backend.', error);
              }
            })();
          }
        } else if (requestAction === 'deny') {
          if (state.enlistmentApplications[appId]) {
            state.enlistmentApplications[appId].status = 'Denied';
            saveEnlistmentApplications();
            requestJson(`/applications/${appId}/deny`, { method: 'POST' }).catch(() => {});
          }
        }
      }

      buildCommanderDashboard();
    });

    form?.addEventListener('submit', (event) => {
      event.preventDefault();

      const requiredFields = Array.from(form.querySelectorAll('[required]'));
      let valid = true;

      requiredFields.forEach((field) => {
        if (!field.value.trim()) {
          valid = false;
          field.style.borderColor = 'hsl(0, 70%, 60%)';
        } else {
          field.style.borderColor = '';
        }
      });

      const emailField = form.querySelector('input[type="email"]');
      const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField?.value || '');
      if (emailField && !emailValid) {
        valid = false;
        emailField.style.borderColor = 'hsl(0, 70%, 60%)';
      }

      if (!valid) return;

      const fullName = (form.querySelector('input[name="fullName"]')?.value || '').toString().trim();
      const email = (form.querySelector('input[name="email"]')?.value || '').toString().trim().toLowerCase();
      const dob = form.querySelector('input[name="dob"]')?.value || '';
      const phone = form.querySelector('input[name="phone"]')?.value || '';
      const gender = form.querySelector('select[name="gender"]')?.value || '';
      const company = form.querySelector('select[name="company"]')?.value || '';
      const reason = form.querySelector('textarea[name="reason"]')?.value || '';

      // Do NOT add public enlistment submissions to `divisionMembers.active`.
      // Active members should only be set from the commander workspace.

      const applicationId = `app_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      state.enlistmentApplications[applicationId] = {
        id: applicationId,
        fullName,
        email,
        dob,
        phone,
        gender,
        company,
        reason,
        submittedAt: new Date().toISOString(),
        status: 'Pending'
      };
      saveEnlistmentApplications();

      form.style.display = 'none';
      formSuccess?.classList.add('active');
      formSuccess?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });

    fillAnother?.addEventListener('click', () => {
      form.reset();
      form.style.display = '';
      formSuccess?.classList.remove('active');
    });
  }
}

// Start the application when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}
