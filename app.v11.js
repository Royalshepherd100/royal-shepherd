(() => {
  console.log('app.js starting');
  // Force the canonical Render backend for all deployed pages.
  // This overrides any stale fallback embedded in cached HTML or scripts.
  window.RS_BACKEND_URL = 'https://royal-shepherd-bacl.onrender.com';
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
... (file continues)
