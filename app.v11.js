(() => {
  console.log('app.js starting');
  // Force the canonical Render backend for all deployed pages.
  // This overrides any stale fallback embedded in cached HTML or scripts.
  window.RS_BACKEND_URL = 'https://royal-shepherd-bac1.onrender.com';
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
  const galleryModal = document.getElementById('galleryModal');
  const galleryClose = document.getElementById('galleryClose');
  const galleryBackdrop = galleryModal?.querySelector('.modal-backdrop');
  const galleryPreviewImage = document.getElementById('galleryPreviewImage');
  const galleryPreviewTitle = document.getElementById('galleryPreviewTitle');
  const galleryPreviewDescription = document.getElementById('galleryPreviewDescription');
  const galleryPreviewCategory = document.getElementById('galleryPreviewCategory');

  const excoRoleDefinitions = [
    { key: 'founder-cac-agbala-itura-worldwide', label: 'Founder CAC Agbala-Itura W/W' },
    { key: 'prophet-dr-s-k-abiara', label: 'Prophet (Dr) Samuel Kayode Abiara' },
    { key: 'pastor-s-o-oladele', label: 'CAC President W/W' },
    { key: 'pastor-e-olusoko', label: 'Akiling Region Superintendent' },
    { key: 'bishop-kehinde-abiara', label: 'Agbala-Itura DCC Superintendent Lagos' },
    { key: 'rs-major-general-e-b-adegbite', label: 'National Organizing Secretary' },
    { key: 'rs-brigadier-general-s-oludahunsi', label: 'Assistant National Organizing Secretary' },
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
    { key: 'divisional-secretary', label: 'Assistant General Secretary' },
    { key: 'assistant-secretary', label: 'Assistant Secretary' },
    { key: 'divisional-extra-post', label: 'Additional Divisional Post' },
    { key: 'band-master-lieu-solomon-o-adeniji', label: 'Band Master' },
    { key: 'assistant-band-master', label: 'Assistant Band Master' },
    { key: 'treasurer', label: 'Treasurer' },
    { key: 'training-officer-capt-segun', label: 'Training Officer' }
  ];

  const defaultOfficerRanks = [
    'Divisional Commander',
    'Company Captain',
    'Organising Secretary',
    'Assistant Organising Secretary',
    'PRO'
  ];

  const companySectionDefinitions = [
    { key: 'anchor', label: 'Anchor Section' },
    { key: 'junior', label: 'Junior Section' },
    { key: 'intermediate', label: 'Intermediate Section' },
    { key: 'senior', label: 'Senior Section' },
    { key: 'officer', label: 'Officer Section' }
  ];

  const defaultFounderStory = `Prophet Samuel Kayode Abiara, fondly called Pa SK Abiara, is the revered founder of CAC Agbala Itura Worldwide and the former General Evangelist of CAC Worldwide. He is one of the spiritual pillars of Royal Shepherd and a great servant of God whose ministry has touched many lives through evangelism, discipline, and unwavering faith.

CAC Agbala Itura stands as a spiritual home of comfort, holiness, and divine instruction, and it remains a landmark place of worship and impact in the life of the church and the nation.

Prophet Samuel Kayode Abiara was born on August 8, 1942, in Erinmo Ijesha, Obokun Local Government Area, Osun State. He was raised with humility and diligence, and his journey into ministry began through divine calling and faithful service. His life continues to inspire Royal Shepherd members to live in holiness, obedience, and service to God and humanity.`;

  const defaultExcoProfiles = {
    'founder-cac-agbala-itura-worldwide': { name: 'Prophet (Dr) Samuel Kayode Abiara', email: '', phone: '', bio: 'Founder CAC Agbala-Itura W/W.' },
    'prophet-dr-s-k-abiara': { name: 'Prophet (Dr) Samuel Kayode Abiara', email: '', phone: '', bio: 'Founder CAC Agbala-Itura W/W.' },
    'pastor-s-o-oladele': { name: 'Pastor S.O Oladele', email: '', phone: '', bio: 'CAC President W/W.' },
    'pastor-e-olusoko': { name: 'Pastor S.O Olusoko', email: '', phone: '', bio: 'Akiling Region Superintendent.' },
    'bishop-kehinde-abiara': { name: 'Bishop Isaac Kehinde Abiara', email: '', phone: '', bio: 'Agbala-Itura DCC Superintendent Lagos.' },
    'rs-major-general-e-b-adegbite': { name: 'Pastor E. B. Adegbite', email: '', phone: '', bio: 'National Organizing Secretary.' },
    'rs-brigadier-general-s-oludahunsi': { name: 'Pastor S.O. Oluwadahunsi', email: '', phone: '', bio: 'Assistant National Organizing Secretary.' },
    'rs-major-general-j-p-akinyemi': { name: 'Pastor J.P. Akinyemi', email: '', phone: '', bio: 'Akiling Region Commander.' },
    'rs-colonel-o-olowe': { name: 'Colonel Olamide Olowe', email: '', phone: '', bio: 'Akiling Region Deputy Commander.' },
    'rs-lt-colonel-o-olasupo': { name: 'Lieutenant Colonel (Elder) Olasupo Olukunmi', email: '', phone: '', bio: 'Akiling Region Organizing Secretary.' },
    'rs-captain-s-a-ilori': { name: 'Captain Samuel A. Ilori', email: '', phone: '', bio: 'Akiling Region Training Officer 1 / Acting Divisional Commander.' },
    'akiling-region-superintendent': { name: 'Pastor S.O Olusoko', email: '', phone: '', bio: 'Akiling Region Superintendent.' },
    'agbala-itura-dcc-superintendent-lagos': { name: 'Bishop Isaac Kehinde Abiara', email: '', phone: '', bio: 'Agbala-Itura DCC Superintendent Lagos.' },
    'national-organizing-secretary': { name: 'Pastor E. B. Adegbite', email: '', phone: '', bio: 'National Organizing Secretary.' },
    'assistant-national-organizing-secretary': { name: 'Pastor S.O. Oluwadahunsi', email: '', phone: '', bio: 'Assistant National Organizing Secretary.' },
    'akiling-region-commander': { name: 'Pastor J.P. Akinyemi', email: '', phone: '', bio: 'Akiling Region Commander.' },
    'akiling-region-deputy-commander': { name: 'Colonel Olamide Olowe', email: '', phone: '', bio: 'Akiling Region Deputy Commander.' },
    'akiling-region-organizing-secretary': { name: 'Lieutenant Colonel (Elder) Olasupo Olukunmi', email: '', phone: '', bio: 'Akiling Region Organizing Secretary.' },
    'akiling-region-training-officer-acting-divisional-commander': { name: 'Captain Samuel A. Ilori', email: '', phone: '', bio: 'Akiling Region Training Officer 1 / Acting Divisional Commander.' },
    'pro-captain-olaitan-awoniyi': { name: 'Captain Olaitan Awoniyi', email: '', phone: '', bio: 'Divisional PRO.' },
    'financial-secretary-provost-anjola-olayiwola': { name: 'Provost Anjola Olayiwola', email: '', phone: '', bio: 'Divisional Financial Secretary.' },
    'general-secretary': { name: '', email: '', phone: '', bio: 'Divisional General Secretary.' },
    'divisional-commander': { name: '', email: '', phone: '', bio: 'Divisional Commander.' },
    'divisional-secretary': { name: '', email: '', phone: '', bio: 'Assistant General Secretary.' },
    'assistant-secretary': { name: '', email: '', phone: '', bio: 'Divisional Assistant Secretary.' },
    'divisional-extra-post': { name: '', email: '', phone: '', bio: 'Additional Divisional EXCO post.' },
    'band-master-lieu-solomon-o-adeniji': { name: 'Lieu. Solomon O. Adeniji', email: '', phone: '', bio: 'Divisional Band Master.' },
    'assistant-band-master': { name: '', email: '', phone: '', bio: 'Divisional Assistant Band Master.' },
    'treasurer': { name: '', email: '', phone: '', bio: 'Divisional Treasurer.' },
    'training-officer-capt-segun': { name: 'Capt. Segun', email: '', phone: '', bio: 'Divisional Training Officer.' }
  };

  const leadershipPhotoMap = {
    'founder-cac-agbala-itura-worldwide': 'pa sk abiara.jpeg',
    'prophet-dr-s-k-abiara': 'pa sk abiara.jpeg',
    'pastor-s-o-oladele': 'pastor s.o oladele cac president.jpeg',
    'pastor-e-olusoko': 'Pastor S.O. Olukoso.jpeg',
    'bishop-kehinde-abiara': '',
    'rs-major-general-e-b-adegbite': 'RS Major General E. B. Adegbite.jpeg',
    'rs-brigadier-general-s-oludahunsi': '',
    'rs-major-general-j-p-akinyemi': '',
    'rs-colonel-o-olowe': 'RS Colonel O. Olowe.jpeg',
    'rs-lt-colonel-o-olasupo': '',
    'rs-captain-s-a-ilori': '',
    'national-organizing-secretary': '',
    'assistant-national-organizing-secretary': 'RS Major General E. B. Adegbite.jpeg'
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
        'divisional-secretary',
        'financial-secretary-provost-anjola-olayiwola',
        'training-officer-capt-segun',
        'band-master-lieu-solomon-o-adeniji',
        'pro-captain-olaitan-awoniyi',
        'assistant-secretary',
        'divisional-extra-post',
        'assistant-band-master'
      ]
    }
  ];

  const leadershipTitleOverrides = {
    'founder-cac-agbala-itura-worldwide': 'Founder CAC Agbala-Itura W/W',
    'pastor-s-o-oladele': 'CAC President W/W',
    'pastor-e-olusoko': 'Akiling Region Superintendent',
    'bishop-kehinde-abiara': 'Agbala-Itura DCC Superintendent Lagos',
    'rs-major-general-e-b-adegbite': 'National Organizing Secretary',
    'rs-brigadier-general-s-oludahunsi': 'Assistant National Organizing Secretary',
    'rs-major-general-j-p-akinyemi': 'Akiling Region Commander',
    'rs-colonel-o-olowe': 'Akiling Region Deputy Commander',
    'rs-lt-colonel-o-olasupo': 'Akiling Region Organizing Secretary',
    'rs-captain-s-a-ilori': 'Akiling Region Training Officer 1 / Acting Divisional Commander'
  };

  const defaultCompanyData = {
    1: { name: 'Oke Odo - 12th Akiling Regional Coy', anchor: [], junior: [], intermediate: [], senior: [], officer: [], active: [], inactive: [], officers: [] },
    2: { name: 'Ikorodu - 15th Akiling Regional Coy', anchor: [], junior: [], intermediate: [], senior: [], officer: [], active: [], inactive: [], officers: [] },
    3: { name: 'Iyesi - 17th Akiling Regional Coy', anchor: [], junior: [], intermediate: [], senior: [], officer: [], active: [], inactive: [], officers: [] },
    4: { name: 'Sango - 28th Akiling Regional Coy', anchor: [], junior: [], intermediate: [], senior: [], officer: [], active: [], inactive: [], officers: [] },
    5: { name: 'Command - 31st Akiling Regional Coy', anchor: [], junior: [], intermediate: [], senior: [], officer: [], active: [], inactive: [], officers: [] },
    6: { name: 'Ipaja - 38th Akiling Regional Coy', anchor: [], junior: [], intermediate: [], senior: [], officer: [], active: [], inactive: [], officers: [] },
    7: { name: 'Ijaba - 44th Akiling Regional Coy', anchor: [], junior: [], intermediate: [], senior: [], officer: [], active: [], inactive: [], officers: [] },
    8: { name: 'Ijoko - 48th Akiling Regional Coy', anchor: [], junior: [], intermediate: [], senior: [], officer: [], active: [], inactive: [], officers: [] },
    9: { name: 'Ikeja - 49th Akiling Regional Coy', anchor: [], junior: [], intermediate: [], senior: [], officer: [], active: [], inactive: [], officers: [] }
  };

  // Backend-backed storage helpers
  let __rsBackendCache = null;
  let __rsSaveTimer = null;
  let __rsBackendAvailable = true;
  let __rsLoadedFromLocalStorage = false;

  function isBackendAvailableSync() {
    try {
      return Boolean(getBackendBaseUrl()) && __rsBackendAvailable;
    } catch {
      return false;
    }
  }

  function mergeStateValue(existingValue, incomingValue) {
    if (Array.isArray(existingValue) && Array.isArray(incomingValue)) {
      if (incomingValue.length > 0) return incomingValue;
      if (existingValue.length > 0) return existingValue;
      return [];
    }

    if (existingValue && typeof existingValue === 'object' && !Array.isArray(existingValue) && incomingValue && typeof incomingValue === 'object' && !Array.isArray(incomingValue)) {
      const merged = { ...existingValue };
      Object.entries(incomingValue).forEach(([key, value]) => {
        if (value && typeof value === 'object' && !Array.isArray(value)) {
          if (Object.keys(value).length > 0) {
            merged[key] = mergeStateValue(existingValue[key], value);
          } else if (existingValue[key] && typeof existingValue[key] === 'object' && !Array.isArray(existingValue[key])) {
            merged[key] = existingValue[key];
          } else {
            merged[key] = {};
          }
        } else if (Array.isArray(value)) {
          if (value.length > 0) {
            merged[key] = value;
          } else if (Array.isArray(existingValue[key]) && existingValue[key].length > 0) {
            merged[key] = existingValue[key];
          } else {
            merged[key] = [];
          }
        } else if (value === null || value === undefined || value === '') {
          if (existingValue[key] !== null && existingValue[key] !== undefined && existingValue[key] !== '') {
            merged[key] = existingValue[key];
          } else {
            merged[key] = value;
          }
        } else {
          merged[key] = value;
        }
      });
      return merged;
    }

    if (incomingValue === null || incomingValue === undefined || incomingValue === '') {
      return existingValue !== null && existingValue !== undefined && existingValue !== '' ? existingValue : incomingValue;
    }

    return incomingValue;
  }

  function getAppStatePayload() {
    const pendingRequests = state.captainRequests || {};
    return {
      companies: state.companyData,
      captainAccounts: state.captainAccounts,
      commanderAccounts: state.commanderAccounts,
      commanderVerificationCodes: state.commanderVerificationCodes,
      captainRequests: pendingRequests,
      companyDashboardRequests: pendingRequests,
      pendingRequests,
      enlistmentApplications: state.enlistmentApplications,
      divisionMembers: state.divisionMembers,
      commandStructure: state.commandStructure,
      founderStory: state.founderStory,
      excoProfiles: state.excoProfiles,
      examScores: state.examScores,
      activeExamYear: state.activeExamYear,
      galleryItems: state.galleryItems || [],
      commanderSettings: state.commanderSettings,
      activeCaptainCompany: state.activeCaptainCompany,
      activeRole: getActiveRole()
    };
  }

  function getLocalState() {
    try {
      const json = window.localStorage.getItem('royalShepherdAppState');
      if (!json) return null;
      const payload = JSON.parse(json);
      return payload && typeof payload === 'object' ? payload : null;
    } catch (err) {
      console.warn('getLocalState failed', err);
      return null;
    }
  }

  function saveLocalState(payload) {
    try {
      const body = payload || getAppStatePayload();
      if (window.location.protocol === 'file:') {
        window.localStorage.setItem('royalShepherdAppState', JSON.stringify(body));
      }
      return true;
    } catch (err) {
      console.warn('saveLocalState failed', err);
      return false;
    }
  }

  async function apiGetState() {
    return requestJson('/state', { method: 'GET' });
  }

  async function apiSaveState(payload) {
    return requestJson('/state', { method: 'POST', body: JSON.stringify(payload) });
  }

  async function apiApproveApplication(applicationId) {
    return requestJson(`/applications/${applicationId}/approve`, { method: 'POST' });
  }

  async function apiDenyApplication(applicationId) {
    return requestJson(`/applications/${applicationId}/deny`, { method: 'POST' });
  }

  const rsBackend = {
    getState: apiGetState,
    saveState: apiSaveState,
    approveApplication: apiApproveApplication,
    denyApplication: apiDenyApplication
  };
  window.RoyalShepherdAPI = window.RoyalShepherdAPI || rsBackend;

  async function loadState() {
    try {
      const payload = await rsBackend.getState();
      if (payload) {
        console.log('[RS-FRONTEND] Response from GET /state', payload);
        __rsBackendCache = payload;
        __rsBackendAvailable = true;
        __rsLoadedFromLocalStorage = false;
        return payload;
      }
    } catch (err) {
      console.warn('loadState failed', err);
      __rsBackendAvailable = false;
    }

    const localPayload = getLocalState();
    if (localPayload) {
      __rsBackendCache = mergeStateValue(localPayload, __rsBackendCache || {});
      __rsLoadedFromLocalStorage = true;
      return __rsBackendCache;
    }

    __rsLoadedFromLocalStorage = false;
    return null;
  }

  async function loadStateWithRetry(attempts = 3, delayMs = 500) {
    let lastError = null;
    for (let attempt = 1; attempt <= attempts; attempt += 1) {
      const payload = await loadState();
      if (payload) {
        return payload;
      }
      lastError = `loadState attempt ${attempt} failed`;
      if (attempt < attempts) {
        await new Promise((resolve) => setTimeout(resolve, delayMs));
      }
    }
    console.warn('loadStateWithRetry: backend state unavailable after retries', lastError);
    return null;
  }

  let __rsSaveQueue = Promise.resolve();

  async function saveState(payload) {
    const body = payload || getAppStatePayload();
    const mergedBody = mergeStateValue(__rsBackendCache || {}, body);
    const savePromise = __rsSaveQueue.then(async () => {
      if (!isBackendAvailableSync()) {
        __rsBackendCache = mergedBody;
        saveLocalState(mergedBody);
        return true;
      }

      try {
        console.log('[RS-FRONTEND] Members before save', getMemberSnapshot(mergedBody.companies));
        console.log('[RS-FRONTEND] Payload sent to backend', mergedBody);
        const persisted = await rsBackend.saveState(mergedBody);
        console.log('[RS-FRONTEND] Backend state after save', persisted || mergedBody);
        __rsBackendCache = persisted || mergedBody;
        return true;
      } catch (err) {
        console.warn('saveState failed', err);
        __rsBackendAvailable = false;
        saveLocalState(mergedBody);
        return false;
      }
    });

    __rsSaveQueue = savePromise.catch(() => false);
    return savePromise;
  }

  function mapStorageKeyToPayloadProp(key) {
    const map = {
      'royalShepherdCompanies': 'companies',
      'royalShepherdCaptains': 'captainAccounts',
      'royalShepherdCaptainRequests': 'captainRequests',
      'royalShepherdCommanderAccounts': 'commanderAccounts',
      'royalShepherdCommanderVerificationCodes': 'commanderVerificationCodes',
      'royalShepherdExcoProfiles': 'excoProfiles',
      'royalShepherdDivisionMembers': 'divisionMembers',
      'royalShepherdCommandStructure': 'commandStructure',
      'royalShepherdFounderStory': 'founderStory',
      'royalShepherdExamScores': 'examScores',
      'royalShepherdActiveExamYear': 'activeExamYear',
      'royalShepherdEnlistmentApplications': 'enlistmentApplications',
      'royalShepherdGalleryItems': 'galleryItems',
      'royalShepherdActiveRole': 'activeRole',
      'royalShepherdActiveCaptainCompany': 'activeCaptainCompany'
    };
    return map[key] || null;
  }

  function getStoredItem(key) {
    try {
      if (__rsBackendCache && typeof __rsBackendCache === 'object') {
        const prop = mapStorageKeyToPayloadProp(key);
        if (prop && (__rsBackendCache[prop] !== undefined)) {
          const val = __rsBackendCache[prop];
          return (typeof val === 'string') ? String(val) : JSON.stringify(val);
        }
        if (__rsBackendCache[key] !== undefined) {
          const v = __rsBackendCache[key];
          return (typeof v === 'string') ? v : JSON.stringify(v);
        }
      }
    } catch (e) {
      console.warn('getStoredItem backend read failed', e);
    }
    return null;
  }

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
    // Always return the canonical Render backend host (no local fallbacks).
    return 'https://royal-shepherd-bac1.onrender.com';
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
    const companies = mergeStateValue(state.companyData || {}, payload.companies || payload.companyData || {});
    state.companyData = normalizeCompanyData(companies);
    state.captainAccounts = normalizeAccountMap(payload.captainAccounts || payload.captains || {});
    state.commanderAccounts = normalizeAccountMap(payload.commanderAccounts || payload.commanders || {});
    state.commanderVerificationCodes = payload.commanderVerificationCodes || {};
    const pendingRequests = mergeStateValue(state.captainRequests || {}, payload.captainRequests || payload.companyDashboardRequests || payload.pendingRequests || payload.pendingCompanyRequests || {});
    state.captainRequests = pendingRequests;
    state.enlistmentApplications = mergeStateValue(state.enlistmentApplications || {}, payload.enlistmentApplications || {});
    state.commanderSettings = mergeStateValue(state.commanderSettings || {}, payload.commanderSettings || {});
    state.excoProfiles = { ...defaultExcoProfiles, ...(payload.excoProfiles || {}) };
    state.divisionMembers = mergeStateValue(state.divisionMembers || { active: [] }, payload.divisionMembers || { active: [] });
    state.commandStructure = normalizeCommandStructure(payload.commandStructure || {});
    state.founderStory = payload.founderStory || defaultFounderStory;
    state.examScores = mergeStateValue(state.examScores || {}, payload.examScores || {});
    state.activeExamYear = payload.activeExamYear || String(new Date().getFullYear());
    state.galleryItems = Array.isArray(payload.galleryItems) ? payload.galleryItems : [];
    state.activeCaptainCompany = payload.activeCaptainCompany || '';
    state.activeCommanderEmail = getActiveCommanderEmail();
    console.log('[RS-FRONTEND] Members after refresh', getMemberSnapshot(state.companyData));
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
    examScores: {},
    activeExamYear: String(new Date().getFullYear()),
    activeCaptainCompany: '',
    activeCommanderEmail: getActiveCommanderEmail(),
    galleryItems: []
  };

  const galleryData = window.galleryData || [];

  populateCaptainCompanySelect();
  populateEnlistmentCompanySelect();

  function ensureDefaultCommanderAccount() {
    const defaultEmail = 'commander@royalshepherd.com';
    const defaultPassword = 'royalshepherd2026';

    if (!state.commanderAccounts[defaultEmail]) {
      state.commanderAccounts[defaultEmail] = { password: defaultPassword, verified: true, email: defaultEmail };
      return true;
    }
    return false;
  }

  function ensureLegacyCaptainAccounts() {
    const legacyEmails = ['captain@royalshepherd.com', 'admin@royalshepherd.com'];
    let changed = false;
    legacyEmails.forEach((email) => {
      if (!state.captainAccounts[email]) {
        state.captainAccounts[email] = { password: 'royalshepherd2026', companyId: '1', email, verified: true };
        changed = true;
      }
    });
    return changed;
  }

  function getCompanyDisplayName(companyId, company = {}) {
    const name = String(company?.name || '').trim();
    return name || defaultCompanyData[companyId]?.name || `Company ${companyId}`;
  }

  function populateCaptainCompanySelect() {
    if (!captainCompany) return;

    const currentValue = captainCompany.value || '';
    const companyEntries = Object.entries(state.companyData || {}).sort(([a], [b]) => Number(a) - Number(b));

    captainCompany.innerHTML = '<option value="">Select Company</option>' + companyEntries.map(([companyId, company]) => {
      const label = getCompanyDisplayName(companyId, company);
      return `<option value="${companyId}">${escapeHtml(label)}</option>`;
    }).join('');

    if (currentValue && state.companyData[currentValue]) {
      captainCompany.value = String(currentValue);
    }
  }

  function populateEnlistmentCompanySelect() {
    const enlistmentCompanySelect = document.getElementById('enlistmentCompany');
    if (!enlistmentCompanySelect) return;

    const companyEntries = Object.entries(state.companyData || {}).sort(([a], [b]) => Number(a) - Number(b));
    enlistmentCompanySelect.innerHTML = '<option value="">Select Company</option>' + companyEntries.map(([companyId, company]) => {
      const label = getCompanyDisplayName(companyId, company);
      return `<option value="${companyId}">${escapeHtml(label)}</option>`;
    }).join('');
  }

  function updateCaptainCompanyMode(mode = 'login') {
    if (!captainCompany) return;
    const registerMode = mode === 'register';
    captainCompany.required = registerMode;
    if (!registerMode) {
      captainCompany.value = '';
    }
  }

  function getMemberSnapshot(companies) {
    return Object.entries(companies || {}).reduce((accumulator, [companyId, company]) => {
      accumulator[companyId] = {
        members: Array.isArray(company?.members) ? company.members.map((member) => (typeof member === 'string' ? member : member?.name || '')).filter(Boolean) : [],
        anchor: Array.isArray(company?.anchor) ? company.anchor : [],
        junior: Array.isArray(company?.junior) ? company.junior : [],
        officer: Array.isArray(company?.officer) ? company.officer : []
      };
      return accumulator;
    }, {});
  }

  function normalizeCompanyData(rawData) {
    const parsed = {};
    Object.entries(rawData || {}).forEach(([companyId, company]) => {
      if (company && typeof company === 'object') {
        const sectionMap = companySectionDefinitions.reduce((accumulator, section) => {
          accumulator[section.key] = Array.isArray(company[section.key]) ? company[section.key] : [];
          return accumulator;
        }, {});

        const memberEntries = Array.isArray(company.members) ? company.members : [];
        memberEntries.forEach((entry) => {
          if (typeof entry === 'string') {
            const trimmed = entry.trim();
            if (trimmed) {
              sectionMap.anchor.push(trimmed);
            }
            return;
          }
          if (!entry || typeof entry !== 'object') return;
          const name = String(entry.name || entry.fullName || entry.memberName || '').trim();
          if (!name) return;
          const section = String(entry.section || entry.sectionName || '').trim().toLowerCase();
          if (section === 'anchor' || section === 'active') {
            sectionMap.anchor.push(name);
          } else if (section === 'junior' || section === 'inactive') {
            sectionMap.junior.push(name);
          } else if (section === 'intermediate') {
            sectionMap.intermediate.push(name);
          } else if (section === 'senior') {
            sectionMap.senior.push(name);
          } else if (section === 'officer' || section === 'officers') {
            sectionMap.officer.push(name);
          } else {
            sectionMap.anchor.push(name);
          }
        });

        const anchor = sectionMap.anchor.length ? sectionMap.anchor : (Array.isArray(company.active) ? company.active : []);
        const junior = sectionMap.junior.length ? sectionMap.junior : (Array.isArray(company.inactive) ? company.inactive : []);
        const officer = sectionMap.officer.length ? sectionMap.officer : (Array.isArray(company.officers) ? company.officers : []);

        parsed[companyId] = {
          name: getCompanyDisplayName(companyId, company),
          anchor,
          junior,
          intermediate: sectionMap.intermediate,
          senior: sectionMap.senior,
          officer,
          active: anchor,
          inactive: junior,
          officers: officer,
          members: Array.isArray(company.members) ? company.members : []
        };
      }
    });
    return parsed;
  }

  async function bootstrapCompanyData() {
    let backendState = await loadStateWithRetry(3, 400);
    if (backendState) {
      __rsBackendCache = backendState;
      applySharedState(backendState);
      window.__royalShepherdState = state;
      if (!__rsBackendAvailable && __rsLoadedFromLocalStorage) {
        showBackendStatus('Backend unavailable. Using cached local data until the live backend is reachable.', 'warning');
      }
      return;
    }

    const configuredUrl = getBackendBaseUrl();
    if (!configuredUrl) {
      showBackendStatus('Backend sync is disabled. Set window.RS_BACKEND_URL to your deployed backend URL.');
    } else {
      showBackendStatus(`Backend unavailable at ${configuredUrl}. Using default in-memory state.`, 'error');
    }

    state.companyData = JSON.parse(JSON.stringify(defaultCompanyData));
    state.captainAccounts = {};
    state.commanderAccounts = {};
    state.commanderVerificationCodes = {};
    state.captainRequests = {};
    state.enlistmentApplications = {};
    state.commanderSettings = {};
    state.excoProfiles = { ...defaultExcoProfiles };
    state.divisionMembers = { active: [] };
    state.commandStructure = normalizeCommandStructure({});
    state.founderStory = defaultFounderStory;
    state.examScores = {};
    state.activeExamYear = String(new Date().getFullYear());
    state.galleryItems = [];

    if (configuredUrl) {
      setTimeout(() => {
        refreshSharedState().catch(() => {});
      }, 1000);
    }
  }

  async function saveCompanies() {
    await saveAppState(true);
  }

  function saveCaptains() {
    saveAppState(true).catch(() => {});
  }

  function saveCaptainRequests() {
    saveAppState(true).catch(() => {});
  }

  function saveCommanderAccounts() {
    saveAppState(true).catch(() => {});
  }

  function saveCommanderVerificationCodes() {
    saveAppState(true).catch(() => {});
  }

  let excoAutoSaveTimer = null;
  const EXCO_AUTO_SAVE_DELAY_MS = 1200;

  function saveExcoProfiles() {
    saveAppState(true).catch(() => {});
  }

  function saveExcoFormChanges(showToastOnSave = false) {
    if (!excoDashboardForm || !excoDashboardGrid) return;

    const formData = new FormData(excoDashboardForm);
    for (const role of excoRoleDefinitions) {
      const card = excoDashboardGrid.querySelector(`.dashboard-card[data-role="${role.key}"]`);
      if (!card) continue;

      const name = (formData.get(`${role.key}-name`) || '').toString().trim();
      const email = (formData.get(`${role.key}-email`) || '').toString().trim();
      const phone = (formData.get(`${role.key}-phone`) || '').toString().trim();
      const bio = (formData.get(`${role.key}-bio`) || '').toString().trim();
      const tempPhoto = card.dataset.tempPhoto;
      const photoRemoved = card.dataset.photoRemoved === 'true';

      const profile = { role: role.label, name, email, phone, bio };

      if (tempPhoto) {
        profile.photo = tempPhoto;
      } else if (!photoRemoved && state.excoProfiles[role.key]?.photo) {
        profile.photo = state.excoProfiles[role.key].photo;
      }

      if (name || email || phone || bio || profile.photo) {
        state.excoProfiles[role.key] = profile;
      } else {
        delete state.excoProfiles[role.key];
      }
    }

    saveExcoProfiles();
    renderOfficerLeadership();

    if (showToastOnSave) {
      showToast('EXCO profile updates saved');
    }
  }

  function scheduleExcoAutoSave() {
    if (excoAutoSaveTimer) {
      window.clearTimeout(excoAutoSaveTimer);
    }

    excoAutoSaveTimer = window.setTimeout(() => {
      excoAutoSaveTimer = null;
      saveExcoFormChanges(true);
    }, EXCO_AUTO_SAVE_DELAY_MS);
  }

  function resizeImageFileToDataUrl(file, outputSize = 512) {
    return new Promise((resolve, reject) => {
      if (!file || !file.type.startsWith('image/')) {
        return reject(new Error('Invalid image file'));
      }

      const reader = new FileReader();
      reader.onload = () => {
        const image = new Image();
        image.onload = () => {
          const canvas = document.createElement('canvas');
          canvas.width = outputSize;
          canvas.height = outputSize;
          const context = canvas.getContext('2d');
          if (!context) {
            return reject(new Error('Canvas context unavailable'));
          }

          const scale = Math.max(outputSize / image.width, outputSize / image.height);
          const width = image.width * scale;
          const height = image.height * scale;
          const x = (outputSize - width) / 2;
          const y = (outputSize - height) / 2;

          context.clearRect(0, 0, outputSize, outputSize);
          context.drawImage(image, x, y, width, height);
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
    const preview = card.querySelector('.profile-photo-preview');
    if (!preview) return;

    const img = preview.querySelector('img');
    const placeholder = preview.querySelector('.profile-photo-placeholder');

    if (imageUrl) {
      if (img) {
        img.src = imageUrl;
      } else {
        preview.innerHTML = `<img src="${escapeHtml(imageUrl)}" alt="Profile photo preview" />`;
      }
      if (placeholder) placeholder.style.display = 'none';
    } else {
      if (img) img.remove();
      if (placeholder) placeholder.style.display = 'flex';
      preview.innerHTML = preview.innerHTML || '<div class="profile-photo-placeholder"><span>Preview</span></div>';
    }
  }

  function resetExcoPhotoCard(card) {
    const removeButton = card.querySelector('.exco-remove-photo');
    const fileInput = card.querySelector('.exco-photo-input');
    if (fileInput) fileInput.value = '';
    if (removeButton) removeButton.hidden = true;
    card.dataset.tempPhoto = '';
    card.dataset.photoRemoved = 'true';
    updateExcoProfilePreview(card, '');
  }

  function clearPhotoRemovalFlag(card) {
    if (!card) return;
    card.dataset.photoRemoved = 'false';
  }

  function saveDivisionMembers() {
    saveAppState(true).catch(() => {});
  }

  function saveCommandStructure() {
    saveAppState(true).catch(() => {});
  }

  function saveFounderStory() {
    saveAppState(true).catch(() => {});
  }

  function escapeHtml(value) {
    return String(value || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function showToast(message) {
    let container = document.getElementById('toastContainer');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toastContainer';
      container.style.position = 'fixed';
      container.style.bottom = '2rem';
      container.style.right = '2rem';
      container.style.zIndex = '99999';
      container.style.display = 'flex';
      container.style.flexDirection = 'column';
      container.style.gap = '0.5rem';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>${escapeHtml(message)}</span>`;
    container.appendChild(toast);

    // Trigger reflow
    toast.offsetHeight;
    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
      toast.classList.add('hide');
      toast.addEventListener('transitionend', () => {
        toast.remove();
      }, { once: true });
      // Fallback
      setTimeout(() => {
        toast.remove();
      }, 500);
    }, 3000);

    return toast;
  }

  function showBackendStatus(message, type = 'warning') {
    let banner = document.getElementById('rs-backend-status-banner');
    if (!banner) {
      banner = document.createElement('div');
      banner.id = 'rs-backend-status-banner';
      banner.style.position = 'fixed';
      banner.style.top = '0';
      banner.style.left = '0';
      banner.style.right = '0';
      banner.style.zIndex = '99998';
      banner.style.padding = '12px 16px';
      banner.style.textAlign = 'center';
      banner.style.fontSize = '0.95rem';
      banner.style.fontFamily = 'sans-serif';
      banner.style.transition = 'transform 200ms ease, opacity 200ms ease';
      banner.style.transform = 'translateY(-100%)';
      banner.style.opacity = '0';
      banner.style.pointerEvents = 'none';
      document.body.appendChild(banner);
      requestAnimationFrame(() => {
        banner.style.transform = 'translateY(0)';
        banner.style.opacity = '1';
      });
    }

    banner.textContent = message;
    if (type === 'error') {
      banner.style.background = 'rgba(220, 50, 50, 0.96)';
      banner.style.color = '#fff';
    } else {
      banner.style.background = 'rgba(255, 165, 0, 0.96)';
      banner.style.color = '#111';
    }
  }

  function saveExamScores() {
    saveAppState(true).catch(() => {});
  }

  function saveEnlistmentApplications() {
    saveAppState(true).catch(() => {});
  }

  function openModal(id) {
    const modalElement = document.getElementById(id);
    if (!modalElement) return;
    modalElement.classList.add('active');
    modalElement.setAttribute('aria-hidden', 'false');
  }

  function closeModal(id) {
    const modalElement = document.getElementById(id);
    if (!modalElement) return;
    modalElement.classList.remove('active');
    modalElement.setAttribute('aria-hidden', 'true');
  }

  function closeAllModals() {
    closeModal('symbolModal');
    closeModal('captainModal');
    closeModal('dashboardModal');
    closeModal('commanderModal');
    closeModal('commanderDashboardModal');
    closeModal('excoDashboardModal');
    closeModal('galleryModal');
  }

  function bindMobileMenu() {
    if (!menuToggle || !navMenu) return;

    menuToggle.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      const isOpen = navMenu.classList.toggle('open');
      menuToggle.classList.toggle('open', isOpen);
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  function bindSmoothScrolling() {
    navLinks.forEach((link) => {
      link.addEventListener('click', (event) => {
        const targetId = link.getAttribute('href');
        if (!targetId || !targetId.startsWith('#')) return;

        event.preventDefault();
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        navLinks.forEach((item) => item.classList.remove('active'));
        link.classList.add('active');

        if (window.innerWidth <= 760) {
          navMenu?.classList.remove('open');
          menuToggle?.classList.remove('open');
          menuToggle?.setAttribute('aria-expanded', 'false');
        }
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
    if (normalized.startsWith('image/')) return normalized;
    return `image/${normalized}`;
  }

  function renderGallery() {
    if (!galleryGrid) return;
    galleryGrid.innerHTML = '';

    const itemsToRender = (state.galleryItems && state.galleryItems.length ? state.galleryItems : galleryData);
    itemsToRender.forEach((item, index) => {
      const article = document.createElement('article');
      article.className = 'gallery-item glass-card';
      article.dataset.category = item.category || 'parades';
      article.dataset.index = index;
      article.innerHTML = `
        <button type="button" class="gallery-thumb" aria-label="${item.title}">
          <img src="${resolveImagePath(item.src)}" alt="${item.title}" />
          <div class="gallery-overlay">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
          </div>
        </button>
      `;
      galleryGrid.appendChild(article);
    });

    state.galleryItems = itemsToRender;
    applyGalleryFilter('all');
  }

  function openGalleryPreview(item) {
    if (!item) return;
    if (galleryPreviewImage) {
      galleryPreviewImage.src = resolveImagePath(item.src);
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
        const sourceItems = (state.galleryItems && state.galleryItems.length ? state.galleryItems : galleryData);
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
        const sourceItems = (state.galleryItems && state.galleryItems.length ? state.galleryItems : galleryData);
        const item = sourceItems[index];
        if (item) {
          openGalleryPreview(item);
        }
      }
    });

    galleryFilters.forEach((button) => {
      button.addEventListener('click', () => applyGalleryFilter(button.dataset.filter));
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

  function parseScoreEntries(value) {
    return parseTextareaLines(value).reduce((accumulator, line) => {
      const separatorIndex = line.indexOf('|');
      if (separatorIndex === -1) return accumulator;

      const name = line.slice(0, separatorIndex).trim();
      const score = line.slice(separatorIndex + 1).trim();

      if (name && score) {
        accumulator.push({ name, score });
      }

      return accumulator;
    }, []);
  }

  function formatScoreEntries(items) {
    return (items || []).map((item) => `${item.name} | ${item.score}`);
  }

  function getExamYears() {
    return Object.keys(state.examScores || {})
      .filter((year) => /^\d+$/.test(year))
      .sort((a, b) => Number(b) - Number(a));
  }

  function getLatestExamYear() {
    return getExamYears()[0] || state.activeExamYear || String(new Date().getFullYear());
  }

  function getExamDataForCompany(companyId, year) {
    const data = state.examScores?.[year || getLatestExamYear()] || {};
    const companyData = data[String(companyId)] || {};
    return examGradeSections.reduce((accumulator, section) => {
      accumulator[section.key] = Array.isArray(companyData[section.key]) ? companyData[section.key] : [];
      return accumulator;
    }, {});
  }

  function getCompanyMemberCount(company) {
    return Number(company?.totalMembers || 0) || (
      (company?.anchor || []).filter(Boolean).length +
      (company?.junior || []).filter(Boolean).length +
      (company?.intermediate || []).filter(Boolean).length +
      (company?.senior || []).filter(Boolean).length +
      (company?.officer || []).filter(Boolean).length
    );
  }

  function getCompanyNcoCount(company) {
    return Number(company?.totalNcos || 0) || ((company?.anchor || []).length + (company?.junior || []).length + (company?.intermediate || []).length + (company?.senior || []).length);
  }

  function getCompanyOfficerCount(company) {
    return Number(company?.totalOfficers || 0) || (company?.officer || []).filter(Boolean).length;
  }

  function renderDivisionSummary() {
    let totalMembers = 0;
    let totalOfficers = 0;
    // Active members display should reflect the commissioned officers who have names
    const allCommandOfficers = Array.isArray(state.commandStructure?.officers) ? state.commandStructure.officers : [];
    const commissionedWithNames = allCommandOfficers.filter((o) => (o && String(o.name || '').trim()));
    const divisionActiveMembers = Array.isArray(state.divisionMembers?.active) ? state.divisionMembers.active.filter(Boolean) : [];

    Object.values(state.companyData).forEach((company) => {
      totalMembers += getCompanyMemberCount(company);
      totalOfficers += getCompanyOfficerCount(company);
    });

    totalMembers += commissionedWithNames.length;
    totalMembers += divisionActiveMembers.length;
    totalOfficers += commissionedWithNames.length;

    if (divisionTotalMembers) {
      divisionTotalMembers.textContent = totalMembers;
    }
    if (divisionTotalOfficers) {
      divisionTotalOfficers.textContent = totalOfficers;
    }
    if (homeTotalMembers) {
      homeTotalMembers.textContent = (typeof totalMembers === 'number') ? (totalMembers === 0 ? '0' : String(totalMembers)) : '150+';
    }
    if (homeTotalOfficers) {
      homeTotalOfficers.textContent = (typeof totalOfficers === 'number') ? (totalOfficers === 0 ? '0' : String(totalOfficers)) : '15+';
    }
  }

  function exportExamResultsPdf(companyId, year) {
    const company = state.companyData[companyId] || defaultCompanyData[companyId] || {};
    const examData = getExamDataForCompany(companyId, year);
    const examYear = year || getLatestExamYear();
    const displayName = company.name || `Company ${companyId}`;
    const safeFileName = `ESTC_Exam_Results_${displayName.replace(/[\\/:*?"<>|]+/g, '').replace(/\s+/g, '_')}_${examYear}.pdf`;
    const PdfConstructor = window.jspdf?.jsPDF || window.jsPDF || window.jspdf?.default || window.jspdf;

    if (typeof PdfConstructor === 'function') {
      const doc = new PdfConstructor({ unit: 'pt', format: 'letter' });
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();
      const margin = 40;
      const maxWidth = pageWidth - margin * 2;
      let y = margin + 10;

      // Helper: draw a simple vertical gradient by painting narrow rectangles
      function drawVerticalGradient(x, y0, w, h, startRgb, endRgb, steps = 40) {
        const [r1, g1, b1] = startRgb;
        const [r2, g2, b2] = endRgb;
        for (let i = 0; i < steps; i++) {
          const t = i / Math.max(1, steps - 1);
          const r = Math.round(r1 + (r2 - r1) * t);
          const g = Math.round(g1 + (g2 - g1) * t);
          const b = Math.round(b1 + (b2 - b1) * t);
          doc.setFillColor(r, g, b);
          const sliceH = h / steps;
          doc.rect(x, y0 + i * sliceH, w, sliceH + 0.5, 'F');
        }
      }

      // Page header with gradient background
      const headerH = 72;
      drawVerticalGradient(margin - 10, y - 6, pageWidth - margin * 2 + 20, headerH, [16, 81, 150], [106, 168, 255], 60);
      doc.setTextColor(255, 255, 255);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(20);
      doc.text(displayName, margin + 8, y + 20);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(11);
      doc.text(`ESTC Exam Results — ${examYear}`, margin + 8, y + 40);
      doc.setTextColor(40, 40, 40);
      y += headerH + 10;

      const addPageIfNeeded = (lineHeight = 18) => {
        if (y > pageHeight - margin) {
          doc.addPage();
          y = margin + 10;
        }
      };

      examGradeSections.forEach((section, index) => {
        addPageIfNeeded();

        // Section header bar
        const barH = 20;
        const barX = margin;
        const barW = pageWidth - margin * 2;
        // use a gentle color strip for each section
        const sectionColor = index % 2 === 0 ? [14, 120, 70] : [200, 90, 40];
        doc.setFillColor(...sectionColor);
        doc.roundedRect(barX, y, barW, barH, 4, 4, 'F');
        doc.setTextColor(255, 255, 255);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(12);
        doc.text(section.label, barX + 8, y + 14);
        y += barH + 8;

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(11);
        doc.setTextColor(40, 40, 40);

        const entries = examData[section.key] || [];
        if (!entries.length) {
          const lines = doc.splitTextToSize('No scores posted yet.', maxWidth);
          lines.forEach((line) => {
            addPageIfNeeded();
            doc.text(line, margin, y);
            y += 16;
          });
        } else {
          entries.forEach((item) => {
            addPageIfNeeded();
            const text = `${item.name || 'Candidate'} — ${item.score || 'No score'}`;
            const lines = doc.splitTextToSize(text, maxWidth);
            lines.forEach((line) => {
              doc.text(line, margin, y);
              y += 16;
            });
            y += 4;
          });
        }

        y += 6;
      });

      try {
        doc.save(safeFileName);
      } catch (error) {
        console.warn('PDF download failed, trying Blob method:', error);
        try {
          const pdfBlob = doc.output('blob');
          const link = document.createElement('a');
          link.href = URL.createObjectURL(pdfBlob);
          link.download = safeFileName;
          document.body.appendChild(link);
          link.click();
          link.remove();
          URL.revokeObjectURL(link.href);
        } catch (innerError) {
          console.error('All PDF download options failed:', innerError);
          alert('Could not download PDF. Please try a different browser.');
        }
      }
      return;
    }

    // Fallback: Download results as a clean text file if jsPDF is unavailable
    try {
      const textLines = [];
      textLines.push(displayName.toUpperCase());
      textLines.push('='.repeat(displayName.length));
      textLines.push(`ESTC Exam Results - ${examYear}`);
      textLines.push('Royal Shepherd Nigeria Agbala Itura Division, Lagos');
      textLines.push('');

      examGradeSections.forEach((section) => {
        textLines.push(`[${section.label}]`);
        const entries = examData[section.key] || [];
        if (!entries.length) {
          textLines.push('No scores posted yet.');
        } else {
          entries.forEach((item) => {
            textLines.push(`  - ${item.name || 'Candidate'}: ${item.score || 'No score'}`);
          });
        }
        textLines.push('');
      });

      const textBlob = new Blob([textLines.join('\n')], { type: 'text/plain;charset=utf-8' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(textBlob);
      link.download = safeFileName.replace('.pdf', '.txt');
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(link.href);
    } catch (fallbackError) {
      console.error('Text fallback download failed:', fallbackError);
      alert('Could not download exam results.');
    }
  }

  function renderFounderStory() {
    const founderCard = document.querySelector('#founders .founder-card');
    if (!founderCard) return;

    const paragraphs = (state.founderStory || defaultFounderStory)
      .split(/\n\s*\n/)
      .map((paragraph) => paragraph.trim())
      .filter(Boolean);

    founderCard.innerHTML = `
      <div class="founder-portrait">
        <img src="image/pa sk abiara.jpeg?v=3" alt="Prophet Samuel Kayode Abiara" />
      </div>
      <div class="founder-copy">
        ${paragraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join('')}
      </div>
    `;
  }

  function renderOfficerLeadership() {
    const officersList = document.querySelector('.officers-list');
    if (officersList) {
      officersList.innerHTML = '';
      const authoritiesGroup = featuredLeadershipGroups.find((group) => group.title === 'CAC Authorities');
      if (authoritiesGroup) {
        renderLeadershipGroup(officersList, authoritiesGroup);
      }
    }

    const excoList = document.querySelector('.exco-list');
    if (excoList) {
      excoList.innerHTML = '';
      const excoGroups = featuredLeadershipGroups.filter((group) => group.title !== 'CAC Authorities');
      excoGroups.forEach((group) => renderLeadershipGroup(excoList, group));
    }
  }

  function renderLeadershipGroup(container, group) {
    const groupWrapper = document.createElement('section');
    groupWrapper.className = 'leadership-group';

    const groupHeading = document.createElement('h3');
    groupHeading.className = 'leadership-group-title';
    groupHeading.textContent = group.title;
    groupWrapper.appendChild(groupHeading);

    const grid = document.createElement('div');
    grid.className = 'leadership-grid';

    group.keys.forEach((key) => {
      const roleDefinition = excoRoleDefinitions.find((entry) => entry.key === key);
      const profile = state.excoProfiles[key] || defaultExcoProfiles[key] || {};
      const name = (profile.name || roleDefinition?.label || 'Enter name here').trim();
      const role = leadershipTitleOverrides[key] || (profile.role || roleDefinition?.label || 'Leadership Post').trim();

      const card = document.createElement('article');
      card.className = 'leadership-card';

      const photo = profile.photo || leadershipPhotoMap[key] || '';
      const imageSrc = resolveImagePath(photo);
      const initials = (name || role || 'RS')
        .split(/\s+/)
        .filter(Boolean)
        .slice(0, 2)
        .map((part) => part[0])
        .join('')
        .toUpperCase() || 'RS';

      card.innerHTML = `
        <div class="leadership-photo-wrap">
          ${photo ? `<img class="leadership-photo" src="${imageSrc}" alt="${escapeHtml(name)}" />` : `<div class="leadership-photo avatar empty" aria-hidden="true">${escapeHtml(initials)}</div>`}
        </div>
        <div class="leadership-details">
          <h4>${escapeHtml(role)}</h4>
          <p class="leadership-role">${escapeHtml(name || 'Enter name here')}</p>
        </div>
      `;
      grid.appendChild(card);
    });

    groupWrapper.appendChild(grid);
    container.appendChild(groupWrapper);
  }

  function renderCompanyLists() {
    companyCards.forEach((card) => {
      const companyId = card.dataset.company;
      const company = state.companyData[companyId] || defaultCompanyData[companyId];
      const title = card.querySelector('h3');
      const caption = card.querySelector('.company-caption');
      const displayName = getCompanyDisplayName(companyId, company);
      if (title) title.textContent = displayName;
      if (caption) caption.textContent = `Company ${companyId}`;

      let stats = card.querySelector('.company-stats');
      if (!stats) {
        stats = document.createElement('div');
        stats.className = 'company-stats';
        const details = card.querySelector('.company-details');
        if (details) {
          card.insertBefore(stats, details);
        } else {
          card.appendChild(stats);
        }
      }
      stats.innerHTML = `<span>${getCompanyMemberCount(company)} members</span><span>${getCompanyNcoCount(company)} NCOs</span><span>${getCompanyOfficerCount(company)} officers</span>`;

      const details = card.querySelector('.company-details');
      if (details) {
        details.hidden = true;
        if (!card.querySelector('.company-toggle')) {
          const toggle = document.createElement('button');
          toggle.type = 'button';
          toggle.className = 'company-toggle';
          toggle.textContent = 'View Members';
          card.insertBefore(toggle, details);
        }
      }

      card.querySelectorAll('.company-list').forEach((list) => {
        const type = list.dataset.list;
        const items = company[type] || [];
        list.innerHTML = '';
        items.forEach((item) => {
          const li = document.createElement('li');
          li.textContent = item;
          list.appendChild(li);
        });
      });
    });

    renderDivisionSummary();
  }

  function buildCaptainDashboard(companyId) {
    if (!dashboardGrid) return;
    const company = state.companyData[companyId] || defaultCompanyData[companyId];
    const examYear = getLatestExamYear();
    const examData = getExamDataForCompany(companyId, examYear);
    dashboardGrid.innerHTML = '';

    const companyCard = document.createElement('div');
    companyCard.className = 'dashboard-card';
    companyCard.innerHTML = `
      <h4>${company.name}</h4>
      <label>
        <span>Company Name</span>
        <input type="text" name="company-name-${companyId}" value="${(company.name || '').replace(/"/g, '&quot;')}" readonly />
      </label>
      ${companySectionDefinitions.map((section) => `
        <label>
          <span>${section.label}</span>
          <textarea name="${section.key}-${companyId}" placeholder="Add names for ${section.label.toLowerCase()} one per line">${(company[section.key] || []).join('\n')}</textarea>
        </label>
      `).join('')}
    `;
    dashboardGrid.appendChild(companyCard);

    const scoreCard = document.createElement('div');
    scoreCard.className = 'dashboard-card';
    scoreCard.innerHTML = `
      <h4>ESTC Exam Results</h4>
      <p class="dashboard-intro">Scores posted by the admin for ${examYear} for your company only.</p>
      <div class="dashboard-actions">
        <button type="button" class="btn btn-secondary" data-download-pdf="true" data-company-id="${companyId}" data-year="${examYear}">Download PDF</button>
      </div>
      <div class="score-columns">
        ${examGradeSections.map((section) => `
          <div class="score-panel">
            <h5>${section.label}</h5>
            <ul class="score-list">
              ${(examData[section.key] || []).length ? (examData[section.key] || []).map((item) => `<li><strong>${(item.name || '').replace(/"/g, '&quot;')}</strong> — ${item.score}</li>`).join('') : '<li>No scores posted yet.</li>'}
            </ul>
          </div>
        `).join('')}
      </div>
    `;
    dashboardGrid.appendChild(scoreCard);
  }

  function openCaptainDashboard(companyId) {
    state.activeCaptainCompany = companyId;
    setActiveRole('captain', companyId);
    buildCaptainDashboard(companyId);

    if (window.location.pathname.includes('captain-dashboard.html')) {
      renderCaptainWorkspaceAccess();
      const url = new URL(window.location.href);
      url.searchParams.set('company', companyId);
      window.history.replaceState({}, '', url);
      return;
    }

    const pageUrl = new URL('captain-dashboard.html', window.location.href);
    pageUrl.searchParams.set('company', companyId);
    window.open(pageUrl.toString(), '_blank', 'noopener,noreferrer');
  }

  function buildCommanderDashboard() {
    window.__royalShepherdBuildCommanderDashboard = true;
    if (!renderCommanderWorkspaceAccess()) return;
    if (!commanderDashboardGrid) return;
    commanderDashboardGrid.innerHTML = '';

    // If the commander workspace is opened as its own page, open EXCO dashboard automatically once.
    try {
      if (window.location.pathname.includes('commander-dashboard.html') && isCommanderLoggedIn() && !window.__royalShepherdExcoOpened) {
        window.__royalShepherdExcoOpened = true;
        openExcoDashboard();
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
    console.log('[RS-FRONTEND] Request displayed in Admin', pendingRequests);

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
  }

  function openCommanderDashboard() {
    buildCommanderDashboard();

    if (window.location.pathname.includes('commander-dashboard.html')) {
      return;
    }

    window.open('commander-dashboard.html', '_blank', 'noopener,noreferrer');
  }

  function renderExcoAccessDenied() {
    const excoForm = document.getElementById('excoDashboardForm');
    if (!excoForm) return;
    excoForm.innerHTML = `
      <div class="dashboard-card glass-card">
        <h3>Access Restricted</h3>
        <p>Only verified admin users may open the EXCO dashboard.</p>
        <button type="button" class="btn btn-secondary" id="openCommanderDashboardForExco">Open Admin Login</button>
      </div>
    `;
    const button = document.getElementById('openCommanderDashboardForExco');
    button?.addEventListener('click', () => {
      window.open('commander-dashboard.html', '_blank', 'noopener,noreferrer');
    });
  }

  function renderCommanderWorkspaceAccess() {
    const notice = document.getElementById('commanderDashboardNotice');
    const isLoggedIn = isCommanderLoggedIn();

    if (!commanderDashboardForm) return false;

    if (commanderForm) {
      commanderForm.style.display = isLoggedIn ? 'none' : '';
      commanderForm.hidden = isLoggedIn;
    }

    commanderDashboardForm.style.display = isLoggedIn ? '' : 'none';
    commanderDashboardForm.hidden = !isLoggedIn;

    if (openExcoDashboardFromAdminBtn) {
      openExcoDashboardFromAdminBtn.classList.toggle('hidden', !isLoggedIn);
    }
    if (openExcoDashboardBtn) {
      openExcoDashboardBtn.classList.toggle('hidden', !isLoggedIn);
    }
    const commanderLogoutBtn = document.getElementById('commanderLogoutBtn');
    if (commanderLogoutBtn) {
      commanderLogoutBtn.classList.toggle('hidden', !isLoggedIn);
    }

    if (!isLoggedIn) {
      if (commanderDashboardGrid) commanderDashboardGrid.innerHTML = '';
      if (notice) {
        notice.textContent = 'Commander login required to view the admin workspace. Please login above.';
      }
      return false;
    }

    if (notice) notice.textContent = '';
    return true;
  }

  function openAdminDashboardPage() {
    const pageUrl = new URL('commander-dashboard.html', window.location.href);
    pageUrl.searchParams.set('from', 'home');
    window.open(pageUrl.toString(), '_blank', 'noopener,noreferrer');
  }

  function exportExcoProfilesToJson() {
    const dataToExport = {
      timestamp: new Date().toISOString(),
      excoProfiles: state.excoProfiles,
      leadershipPhotoMap: leadershipPhotoMap
    };
    
    const jsonString = JSON.stringify(dataToExport, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `exco-profiles-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(link.href);
    
    showToast('EXCO profiles exported to JSON file');
  }

  function buildExcoDashboard() {
    if (!excoDashboardGrid) return;
    excoDashboardGrid.innerHTML = '';

    // Add header with export button
    const headerDiv = document.createElement('div');
    headerDiv.className = 'dashboard-card glass-card';
    headerDiv.style.gridColumn = '1 / -1';
    headerDiv.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <div>
          <h3>EXCO Leadership Profiles</h3>
          <p>Edit names and upload photos. Changes save automatically. Export to backup or commit manually to GitHub.</p>
        </div>
        <button type="button" class="btn btn-gold" id="exportExcoProfiles">📥 Export JSON</button>
      </div>
    `;
    excoDashboardGrid.appendChild(headerDiv);

    excoRoleDefinitions.forEach((role) => {
      const profile = state.excoProfiles[role.key] || {};
      const profilePhoto = profile.photo || '';
      const card = document.createElement('div');
      card.className = 'dashboard-card';
      card.dataset.role = role.key;
      card.dataset.photoRemoved = 'false';
      card.innerHTML = `
        <h4>${role.label}</h4>
        <p class="dashboard-intro">Create or update the profile for ${role.label}.</p>
        <div class="profile-photo-card">
          <div class="profile-photo-circle">
            <div class="profile-photo-preview">
              ${profilePhoto ? `<img src="${escapeHtml(profilePhoto)}" alt="${escapeHtml(role.label)} photo" />` : '<div class="profile-photo-placeholder"><i class="fa-solid fa-user"></i></div>'}
            </div>
            <button type="button" class="profile-photo-circle-button exco-photo-button" data-role="${role.key}" aria-label="Upload profile photo">
              <i class="fa-solid fa-camera"></i>
            </button>
          </div>
          <p class="profile-photo-hint">Tap to choose from gallery</p>
          <div class="profile-photo-actions">
            <button type="button" class="btn btn-outline exco-photo-button" data-role="${role.key}">${profilePhoto ? 'Change Photo' : 'Add Photo'}</button>
            <button type="button" class="btn btn-secondary exco-remove-photo" data-role="${role.key}" ${profilePhoto ? '' : 'hidden'}>Remove Picture</button>
            <input type="file" name="${role.key}-photo" accept="image/png,image/jpeg,image/jpg,image/webp" class="exco-photo-input" data-role="${role.key}" hidden />
          </div>
        </div>
        <label>
          <span>Full Name</span>
          <input type="text" name="${role.key}-name" value="${(profile.name || '').replace(/"/g, '&quot;')}" />
        </label>
        <label>
          <span>Email Address</span>
          <input type="email" name="${role.key}-email" value="${(profile.email || '').replace(/"/g, '&quot;')}" />
        </label>
        <label>
          <span>Phone Number</span>
          <input type="tel" name="${role.key}-phone" value="${(profile.phone || '').replace(/"/g, '&quot;')}" />
        </label>
        <label>
          <span>Short Bio</span>
          <textarea name="${role.key}-bio">${(profile.bio || '').replace(/"/g, '&quot;')}</textarea>
        </label>
      `;
      excoDashboardGrid.appendChild(card);
    });
  }

  function openExcoDashboard() {
    if (!isCommanderLoggedIn()) {
      showToast('Admin access is required to open the EXCO dashboard.');
      window.open('commander-dashboard.html', '_blank', 'noopener,noreferrer');
      return;
    }

    buildExcoDashboard();

    if (window.location.pathname.includes('exco-dashboard.html')) {
      return;
    }

    const targetUrl = 'exco-dashboard.html?excoOpenRequest=true';
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  }

  function bindForms() {
    captainForm?.addEventListener('submit', (event) => {
      event.preventDefault();
      const mode = captainForm.dataset.mode || 'login';
      const email = captainEmail.value.trim().toLowerCase();
      const password = captainPassword.value.trim();
      const companyId = captainCompany.value;

      if (!email || !password) {
        captainNotice.textContent = 'Please complete the email and password fields.';
        captainNotice.style.color = 'hsl(0, 70%, 60%)';
        return;
      }

      if (mode === 'register') {
        if (!companyId) {
          captainNotice.textContent = 'Please select your company before registering.';
          captainNotice.style.color = 'hsl(0, 70%, 60%)';
          return;
        }
        if (state.captainAccounts[email]) {
          captainNotice.textContent = 'This email already has a captain account.';
          captainNotice.style.color = 'hsl(0, 70%, 60%)';
          return;
        }
        if (state.captainRequests[email]) {
          captainNotice.textContent = 'A request for this email is already pending approval.';
          captainNotice.style.color = 'hsl(0, 70%, 60%)';
          return;
        }

        state.captainRequests[email] = {
          email,
          password,
          companyId,
          submittedAt: new Date().toISOString()
        };
        console.log('[RS-FRONTEND] Request submitted', state.captainRequests[email]);
        saveCaptainRequests();
        refreshSharedState().catch(() => {});
        captainForm.reset();
        captainForm.dataset.mode = 'login';
        updateCaptainCompanyMode('login');
        captainNotice.textContent = 'Captain registration submitted. Await admin approval before logging in.';
        captainNotice.style.color = 'var(--gold-400)';
        return;
      }

      const account = state.captainAccounts[email];
      if (!account || account.password !== password) {
        captainNotice.textContent = 'Invalid captain email or password.';
        captainNotice.style.color = 'hsl(0, 70%, 60%)';
        return;
      }

      const accountCompanyId = String(account.companyId || companyId || '');
      if (!accountCompanyId) {
        captainNotice.textContent = 'This captain account is missing a company assignment.';
        captainNotice.style.color = 'hsl(0, 70%, 60%)';
        return;
      }

      if (captainCompany) {
        captainCompany.value = accountCompanyId;
      }

      setActiveRole('captain', accountCompanyId);
      captainNotice.textContent = 'Access granted. Opening your company dashboard.';
      captainNotice.style.color = 'var(--gold-400)';
      closeModal('captainModal');
      openCaptainDashboard(accountCompanyId);
      if (window.location.pathname.includes('captain-dashboard.html')) {
        renderCaptainWorkspaceAccess();
      }
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
      renderCompanyLists();
      populateCaptainCompanySelect();
      populateEnlistmentCompanySelect();
      closeModal('commanderDashboardModal');
      showToast('Commander dashboard saved', 3000);
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

  function init() {
    window.__royalShepherdInit = true;
    window.addEventListener('scroll', () => {
      header?.classList.toggle('scrolled', window.scrollY > 50);
    });
    bindMobileMenu();
    bindSmoothScrolling();
    bindOpeners();
    bindAuthTabs();
    updateCaptainCompanyMode(captainForm?.dataset.mode || 'login');
    bindModalCloseButtons();
    bindEscapeKey();
    bindSymbolCards();
    bindGallery();
    bindForms();
    document.addEventListener('click', (event) => {
      const toggle = event.target.closest('.company-toggle');
      if (!toggle) return;
      const card = toggle.closest('.company-card');
      const details = card?.querySelector('.company-details');
      if (!details) return;
      const hidden = details.hidden;
      details.hidden = !hidden;
      toggle.textContent = hidden ? 'Hide Members' : 'View Members';
    });
    ensureDefaultCommanderAccount();
    ensureLegacyCaptainAccounts();
    window.__royalShepherdState = state;
    window.__royalShepherdRenderCommanderWorkspaceAccess = renderCommanderWorkspaceAccess;
    window.__royalShepherdIsCommanderLoggedIn = isCommanderLoggedIn;
    window.__royalShepherdBootstrapStarted = true;
    bootstrapCompanyData().then(() => {
      window.__royalShepherdBootstrapResolved = true;
      populateCaptainCompanySelect();
      populateEnlistmentCompanySelect();
      renderCompanyLists();
      if (window.location.pathname.includes('commander-dashboard.html')) {
        window.__royalShepherdCommanderPath = true;
        if (renderCommanderWorkspaceAccess()) {
          buildCommanderDashboard();
        }
      }
      if (window.location.pathname.includes('captain-dashboard.html')) {
        window.__royalShepherdCaptainPath = true;
        const queryParams = new URLSearchParams(window.location.search);
        const companyId = queryParams.get('company') || state.activeCaptainCompany;
        if (companyId && state.companyData[companyId]) {
          state.activeCaptainCompany = companyId;
          buildCaptainDashboard(companyId);
        }
        renderCaptainWorkspaceAccess();
      }
      if (window.location.pathname.includes('exco-dashboard.html')) {
        window.__royalShepherdExcoPath = true;
        const queryParams = new URLSearchParams(window.location.search);
        const openRequest = queryParams.get('excoOpenRequest') === 'true';

        if (!isCommanderLoggedIn() && !openRequest) {
          renderExcoAccessDenied();
        } else {
          buildExcoDashboard();
          if (openRequest && window.history && window.history.replaceState) {
            window.history.replaceState(null, '', window.location.pathname);
          }
        }
      }
    }).catch((error) => {
      window.__royalShepherdBootstrapFailed = true;
      window.__royalShepherdBootstrapError = error?.message || String(error);
    });
    renderFounderStory();
    renderOfficerLeadership();
    renderGallery();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

