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
  const membershipStatTrigger = document.getElementById('membershipStatTrigger');
  const membershipClose = document.getElementById('totalMembershipClose');
  const membershipLookupForm = document.getElementById('membershipLookupForm');
  const membershipLookupInput = document.getElementById('membershipLookupInput');
  const membershipLookupResults = document.getElementById('membershipLookupResults');
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

  const defaultOfficerRanks = [
    'Divisional Commander',
    'Company Captain',
    'Organising Secretary',
    'Assistant Organising Secretary',
    'PRO'
  ];

  const companySectionDefinitions = [
    { key: 'officer', label: 'Officer Section' },
    { key: 'senior', label: 'Senior Section' },
    { key: 'intermediate', label: 'Intermediate Section' },
    { key: 'junior', label: 'Junior Section' },
    { key: 'anchor', label: 'Anchor Section' }
  ];

  const defaultFounderStory = `Prophet Samuel Kayode Abiara, fondly called Pa SK Abiara, is the revered founder of CAC Agbala Itura Worldwide and the former General Evangelist of CAC Worldwide. He is one of the spiritual pillars of Royal Shepherd and a great servant of God whose ministry has touched many lives through evangelism, discipline, and unwavering faith.

CAC Agbala Itura stands as a spiritual home of comfort, holiness, and divine instruction, and it remains a landmark place of worship and impact in the life of the church and the nation.

Prophet Samuel Kayode Abiara was born on August 8, 1942, in Erinmo Ijesha, Obokun Local Government Area, Osun State. He was raised with humility and diligence, and his journey into ministry began through divine calling and faithful service. His life continues to inspire Royal Shepherd members to live in holiness, obedience, and service to God and humanity.`;

  const defaultExcoProfiles = {
    'founder-cac-agbala-itura-worldwide': { name: 'Prophet (Dr) Samuel Kayode Abiara', email: '', phone: '', bio: 'Founder CAC Agbala-Itura W/W.' },
    'prophet-dr-s-k-abiara': { name: 'Prophet (Dr) Samuel Kayode Abiara', email: '', phone: '', bio: 'Founder CAC Agbala-Itura W/W.' },
    'pastor-s-o-oladele': { name: 'Pastor S.O Oladele', email: '', phone: '', bio: 'CAC President W/W.' },
    'pastor-e-olusoko': { name: 'Pastor S.O. Olukoso', email: '', phone: '', bio: 'Akiling Region Superintendent.' },
    'bishop-kehinde-abiara': { name: 'Bishop Isaac Kehinde Abiara', email: '', phone: '', bio: 'Agbala-Itura DCC Superintendent Lagos.' },
    'rs-major-general-e-b-adegbite': { name: 'RS MAJOR GENERAL E. B. ADEGBITE', email: '', phone: '', bio: 'National Organizing Secretary.' },
    'rs-brigadier-general-s-oludahunsi': { name: 'RS BRIGADIER GENERAL S. OLUDAHUNSI', email: '', phone: '', bio: 'Assistant National Organizing Secretary.' },
    'rs-major-general-j-p-akinyemi': { name: 'RS MAJOR GENERAL J.P. AKINYEMI', email: '', phone: '', bio: 'Akiling Region Commander.' },
    'rs-colonel-o-olowe': { name: 'Colonel Olamide Olowe', email: '', phone: '', bio: 'Akiling Region Deputy Commander.' },
    'rs-lt-colonel-o-olasupo': { name: 'Lieutenant Colonel (Elder) Olasupo Olukunmi', email: '', phone: '', bio: 'Akiling Region Organizing Secretary.' },
    'rs-captain-s-a-ilori': { name: 'Captain Samuel A. Ilori', email: '', phone: '', bio: 'Akiling Region Training Officer 1 / Acting Divisional Commander.' },
    'akiling-region-superintendent': { name: 'Pastor S.O. Olukoso', email: '', phone: '', bio: 'Akiling Region Superintendent.' },
    'agbala-itura-dcc-superintendent-lagos': { name: 'Bishop Isaac Kehinde Abiara', email: '', phone: '', bio: 'Agbala-Itura DCC Superintendent Lagos.' },
    'national-organizing-secretary': { name: 'RS MAJOR GENERAL E. B. ADEGBITE', email: '', phone: '', bio: 'National Organizing Secretary.' },
    'assistant-national-organizing-secretary': { name: 'RS BRIGADIER GENERAL S. OLUDAHUNSI', email: '', phone: '', bio: 'Assistant National Organizing Secretary.' },
    'akiling-region-commander': { name: 'RS MAJOR GENERAL J.P. AKINYEMI', email: '', phone: '', bio: 'Akiling Region Commander.' },
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
    'rs-brigadier-general-s-oludahunsi': './RS Major General E. B. Adegbite.jpeg',
    'rs-major-general-j-p-akinyemi': 'akiling regional commander  akinyemi.jpeg',
    'rs-colonel-o-olowe': 'RS Colonel O. Olowe.jpeg',
    'rs-lt-colonel-o-olasupo': 'major olasupo .jpeg',
    'rs-captain-s-a-ilori': 'captain samuel.A.ilori divisional commander and also region training officer 1.jpeg',
    'national-organizing-secretary': 'nos adegnite.jpeg',
    'assistant-national-organizing-secretary': './RS Major General E. B. Adegbite.jpeg',
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
        'general-secretary',
        'financial-secretary-provost-anjola-olayiwola',
        'training-officer-capt-segun',
        'band-master-lieu-solomon-o-adeniji',
        'pro-captain-olaitan-awoniyi'
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

  const officialCompanyMemberRosterConfig = {
    2: [
      'Adedigba Samuel', 'Adisa Darasimi', 'Awoyomi Elijah (SERGEANT)', 'Eriayo Charles', 'Eruje Gideon', 'Foyinkayomi Ayansola (SERGEANT)', 'Kolawole Mathew', 'Nifemi Joshua', 'Ogundare Kolade (STAFF SERGEANT)', 'Ogunsanya Caleb (CORPORAL)', 'Ogunsanya Joshua (SERGEANT)', 'Olaitan Omotayo (STAFF SERGEANT)', 'Omokehinde Ayomide', 'Omolade Mathew (SERGEANT)', 'Onyema Moses (SERGEANT)', 'Adesanya Timileyin', 'Eniola Semilore', 'Erujeje Joshua', 'Fashila Ayomi De', 'Odunsanya Samuel (LANCE CORPORAL)', 'Ogundare Omotola', 'Olatunde Adura', 'Olaitan Damilola', 'Oluwo Moyin', 'Omokehinde Emmanuel', 'Omolade Oyindamola', 'Ajetumobi Isreal', 'Ajike Oladapo', 'Darasimi Awoyomi', 'Darasimi Ayo Dele', 'Idowu Taiwo', 'Odunsanya Samson', 'Onyema Tochukwu', 'Seun Banjoko', 'Taiye Obafemi', 'Kehinde Obafemi', 'Ayodele Kenny', 'Ayodele Taiye', 'Dauda Adesope', 'Ogundare Ajike'
    ],
    3: [
      'Abiola Oluwafisayo', 'Adedayo Boluwatife', 'Adedokun Adedamola', 'Adedokun Adebusayo', 'Adedokun Temiloluwa', 'Ademola Success', 'Adeniyi Ebunoluwa', 'Adekunle Christianah', 'Adepoju Precious', 'Adepoju Tobiloba', 'Adio Favour', 'Ajiboye Ololade', 'Akinola Samuel', 'Emmanuel Temitope', 'Fashola Ayomide', 'Kudabo Victoria', 'Olaleye Omobolawa', 'Olaleye Oluwabori', 'Olawuyi Isreal', 'Oluwunmi Ebunoluwa', 'Oretuga Tosin', 'Adewole Julius', 'Adewole Nifemi', 'Adewole Peace', 'Idowu Elisabeth', 'Kudabo Victor', 'Obasi Chimaze', 'Obasi Sharon', 'Ogunleye Tomiwa', 'Solomon Emmanuel', 'Taiwo Moyinoluwa', 'Tomiwa Ogunmeye', 'Abioye Divine', 'Abiola Inioluwa', 'Ademola Olamilekan', 'Adewole Jude', 'Adio David', 'Alonge Martyr', 'Idowu David', 'Joseph Prince', 'Kudabo Semilore', 'Obasi Zion', 'Okanlawon Emmanuel', 'Olaleye Babalola', 'Olanipekun Kehinde', 'Pamilerin', 'Taiwo Mary', 'Abioye Oluwakisi', 'Ajani Moreoluwa', 'Farayola', 'Olaleye Elizabeth', 'Oseni Richard'
    ],
    4: [
      'Capt. Segun Lawal', 'Akinsinde Oluwatimileyin', 'Adewole Samuel Ayodele', 'Adesanya Abisola Elizabeth', 'Michael Esther Oluwafunke', 'Olaleye Adeyemi David', 'Alabi Mariam Iremide', 'Alabi Lekan Mohammed', 'Ogunwede Ezekiel Tolulope', 'Adeniyi Samuel Adeyemi', 'Samson David Oluwaseun', 'Oyedotun Boluwatife Samson', 'Adesanya Favour Oluwapelumi', 'Sulaimon Praise Iyanuoluwa', 'Michael Samuel Olatoye', 'Abiola Solomon Ayodele', 'Shobola Iyanuoluwa Boluwatife', 'Tanimowo Covenant Toluwanimi', 'Sobayo Olamilekan Ezekiel', 'Adebowale Oluwatoyin Esther', 'Olorode Paul Oluwaseun', 'Adesina Oreoluwa Christiana', 'James Desmond', 'Ogunsina Elizabeth Adenike', 'Ogunsina Tofunmi Enioluwa', 'Adewunmi Oluwatunmise Naomi', 'Ifeanyi Chisom', 'Oladega Israel Jesutobiloba', 'Bamidele Elizabeth Oluwabusayomi'
    ],
    5: [
      'Captain Olaitan Ayodele Awoniyi', 'Albert Ndidi Blessing', 'Ibikunle Olamide Emmanuel', 'Shoyemi Damilola Abidemi', 'Albert Samuel Darasimi', 'Ayodele Anuoluwapo Victoria', 'Babafemi Favour Diekolaoluwa', 'Daodu Favour Christianah', 'Olosunde Oluwajuwon Francis', 'Olayera Omobolanle Mary', 'Orelusi Gift Esther', 'Fagbuaro Dorcas Jesutofunmi', 'Adegbola Christiana Boluwatife', 'Adedeji David', 'Ademola Esther Omolade', 'Albert Darasimi Hannah', 'Albert Emmanuel Chukwudi', 'Fagbuaro Esther Jesumolawa', 'Felix Elizabeth Mercy', 'Obidele Dorcas Feyikemi', 'Obidele Ezekiel Fisayomi', 'Ojo Mercy Omolola', 'Oladehinde Elizabeth Damilola', 'Olayera Tobiloba Ebenezer', 'Olayinka Ayomide Isreal', 'Olufodunrin Anjolaoluwa Grace', 'Oke Moriyanu Sesede', 'Orelusi Testimony Oluwasemilore', 'Shoyemi Anuoluwapo Deborah', 'Taiwo Deborah Inioluwa', 'Obidele Fiyinfoluwa', 'Adaramola Joseph Kehinde', 'Adaramola John Taiwo', 'Adeola Ayodele Desmond', 'Adelani Deborah Oluwatoyin', 'Agunbiade Faridah Ibukunoluwa', 'Awoniyi Asamoh Andrew', 'Emmanuel Ayomiposi Ibukun', 'Fakolade Motunrayo Monsurat', 'Ilebiyi Bolarinwa Ayanfe', 'Obidele Emmanuel Foladara', 'Oladehinde Emmanuel Damilare', 'Taiwo Dorcas Ireoluwa', 'Temilade Racheal Dewunmi', 'Adedoyin Inioluwa Ashabi', 'Awoniyi Cecilia Hephzibah', 'Awoniyi Adoa Peace', 'Oladehinde Micheal Darasimi', 'Taiwo Christiana Ayanfeoluwa', 'Ilebiyi Solomon iremide'
    ],
    6: [
      'Adebayo Femi', 'Ogundele Bisola', 'Akingbolu Daniel', 'Akingbolu Dorcas', 'Akinlade Isreal', 'Adeolu Anjola', 'Awofala Pamilerin', 'Ayanjimi Sarah', 'Dehinola Samuel', 'Obe Fisayo', 'Olumekun Olumide', 'Olorunjuwon Fikayo', 'Adesola Deborah', 'Adesola Joseph', 'Adewaye Gbogo', 'Akingbolu Deborah', 'Ajayi David', 'Ajayi Mary', 'Dehinola Treasure', 'Joseph Posi', 'Olorunfunmi Esther', 'Adesola Destiny', 'Adeyinka Mitchelle', 'Ajiboye Samuel', 'Olushola Gold'
    ],
    7: [
      'Adelani David', 'Saidi Adunola', 'Fagbire Mary', 'Oluyide Mohammed', 'Idowu Omolayo', 'Idowu Precious', 'Arowolo Ayodeji', 'Adeyemi Isaac', 'Alonge Victor', 'Oludele Pecious', 'Sunday Isaac', 'Ayegboyin Ezekiel', 'Daini Tiwalade adare Deborah', 'Dlagoke Israel', 'Dluvole Pelumi', 'Sikiru Testimony', 'Adenuga Comfort', 'Igbinosu Rokanmi', 'Oluwole Taiwo', 'Oluwole Kehinde', 'Obakoya Taiwo', 'Obakoya Kehinde', 'Adenuga Favour', 'Sikiru Miracle', 'Olujumoke Aramide', 'Adenisimi David', 'Bamiteko Abigeal Adeyemi Mayowa', 'Ogedengbe Felix', 'Ogunronbi Hannah', 'Oluwole Emmanuel', 'Timileyin', 'Officer Sikiru', 'Officer B.O.', 'Officer Olu', 'Officer Fadare', 'Officer Akinb', 'Officer Bukola', 'A Ire', 'Zoe', 'Obagade', 'Damilare', 'Ismail', 'Oludele Semilog', 'Daini Tiwalade', 'Adenuga Good luck', 'Otunmakinwa Victoria', 'Ajayi Tope', 'Daini Akinsanmi', 'Fagbire Mercy', 'Igbinosu Benedicta', 'Dada Tumininu', 'Arowolo Ayomikun', 'Sikiru Obanijesu', 'Ayegboyin Deborah', 'Adeyemi Olamide', 'Idowu Adeola', 'Ifeoluwa Oluwakemi', 'Makinde Sarah', 'Bamiteko Blessing', 'Ogedengbe Festus'
    ],
    8: [
      'Officer Afusat Ajiboye', 'Officer Elizabeth Salako', 'Anjorin Funmilayo', 'Ayodele Praise', 'Increase Olukayode', 'Moyinoluwa Owolawi', 'Olusesi Alex', 'Paul Deborah', 'Rotimi Abimbola Mary', 'Fatunbi Victor', 'Anifowoshe Ogooluwa', 'Abolarinwa Emmanuel', 'Adeyemo Prince Orikomiyo', 'Akala Peace', 'Fatunbi Peculiar', 'Kehinde Ezekiel', 'Marvellous Olukayode', 'Olusesi Israel', 'Rasheed Rodia', 'Sharon Olukayode', 'Akinogun Abigail', 'Anifowoshe Ifeoluwa', 'Bolade Emmanuel', 'Eldad M. Rapheal', 'Salako Ayomiposi', 'Shofela Desola', 'Akinogun Glory', 'Agboola David', 'Anifowoshe Ire', 'Akinsiku Daniel', 'Allen Destiny', 'Medad J. Rapheal', 'Salako Oluwatumininu', 'Fatunbi Prevail'
    ],
    9: [
      'Jacob Tomiwa B.', 'Eyinfunjowo Elijah O', 'Babatunde Waris', 'Agboola Aanuoluwapo', 'Agboola Inioluwa', 'Bankole Adeola', 'Ilori Oyindamola', 'Ishola Happiness', 'Ishola Oyindamola', 'Julius Hephzibah', 'Opaleye Precious', 'Ilori Similoluwa', 'Julius Israel', 'Opaleye Caleb', 'Salako Joshua', 'Ayodele Emmanuel'
    ],
    11: [
      'Ajisegiri Eniola Samuel', 'Sobayo Anjola Marvelous', 'Osunyinka David', 'Sulaimon Emmanuel Ayomide', 'Olaleye Josiah Opeyemi', 'Ogunni Samuel Adeyemi', 'Osunyinka Peter', 'Otun Basit', 'Oluwagbemiga Deborah', 'Alabi Samuel', 'Omoingho Richard', 'Olugbade Ayomide', 'Adeyemi Inioluwa Barakat', 'Ogunsakin Moyinoluwa Eunice', 'Akinsola Oluwaseyi', 'Oluwagbemiga James', 'Jolaosho Bose', 'Busari Elijah Qudus', 'Olabanji Enouch', 'Olabanji Boluwatife', 'Anfela Jesulayomi', 'Akintunde Blessing', 'Moses Oyinkansola', 'Busari Deborah', 'Sulaimon Christiana', 'Oluwadimu Samuel Oluwashindara', 'Alabi Barnabas', 'Anfela Semilore', 'Akinsinde Elizabeth', 'Kusimo James', 'Shobola Emmanuel'
    ]
  };

  const officialCompanySerialByRecordId = Object.fromEntries(
    Array.from(companyCards)
      .map((card) => {
        const recordId = String(card.dataset.company || '').trim();
        const companyNumber = Number(recordId);
        return [recordId, Number.isInteger(companyNumber) && companyNumber > 0 ? String(companyNumber).padStart(2, '0') : ''];
      })
      .filter(([recordId, serial]) => recordId && serial)
  );

  const captainDivisionNameAliases = {
    1: 'Ilori Samuel A.',
    2: 'Adebayo Joseph',
    4: 'Lawal Segun Q.',
    5: 'Awoniyi Olaitan',
    8: 'Aina Olamilekan O.'
  };
  const officialCompanyCaptainProfiles = Object.fromEntries(
    Array.from(document.querySelectorAll('.captains-grid .captain-card[data-company]'))
      .map((card) => {
        const companyId = String(card.dataset.company || '').trim();
        const captainLine = Array.from(card.querySelectorAll('.captain-bio'))
          .find((line) => line.textContent.trim().startsWith('Captain:'));
        const captainName = String(captainLine?.textContent || '')
          .replace(/^\s*Captain:\s*/i, '')
          .trim();
        return [companyId, {
          name: /^(?:not provided|not available)$/i.test(captainName) ? '' : captainName,
          divisionName: captainDivisionNameAliases[companyId] || captainName,
          photo: card.querySelector('img.captain-photo')?.getAttribute('src') || ''
        }];
      })
      .filter(([companyId]) => companyId)
  );

  const officialCompanySectionRosterConfig = {
    1: null,
    2: [
      { key: 'senior', heading: 'SNR SECTION', members: officialCompanyMemberRosterConfig[2].slice(0, 15) },
      { key: 'intermediate', heading: 'INTER SECTION', members: officialCompanyMemberRosterConfig[2].slice(15, 26) },
      { key: 'junior', heading: 'JNR SECTION', members: officialCompanyMemberRosterConfig[2].slice(26, 36) },
      { key: 'anchor', heading: 'ANCHOR SECTION', members: officialCompanyMemberRosterConfig[2].slice(36, 40) }
    ],
    3: [
      { key: 'senior', heading: 'SNR SECTION', members: officialCompanyMemberRosterConfig[3].slice(0, 21) },
      { key: 'intermediate', heading: 'INTER SECTION', members: officialCompanyMemberRosterConfig[3].slice(21, 32) },
      { key: 'junior', heading: 'JNR SECTION', members: officialCompanyMemberRosterConfig[3].slice(32, 47) },
      { key: 'anchor', heading: 'ANCHOR SECTION', members: officialCompanyMemberRosterConfig[3].slice(47, 52) }
    ],
    4: [
      { key: 'officer', heading: 'OFFICER SECTIONS', members: officialCompanyMemberRosterConfig[4].slice(0, 7) },
      { key: 'senior', heading: 'SNR SECTIONS', members: officialCompanyMemberRosterConfig[4].slice(7, 29) }
    ],
    5: [
      { key: 'officer', heading: 'OFFICER', members: officialCompanyMemberRosterConfig[5].slice(0, 4) },
      { key: 'senior', heading: 'SNR SECTION', members: officialCompanyMemberRosterConfig[5].slice(4, 13) },
      { key: 'intermediate', heading: 'INTER SECTION', members: officialCompanyMemberRosterConfig[5].slice(13, 31) },
      { key: 'junior', heading: 'JNR SECTION', members: officialCompanyMemberRosterConfig[5].slice(31, 45) },
      { key: 'anchor', heading: 'ANCHOR SECTION', members: officialCompanyMemberRosterConfig[5].slice(45, 50) }
    ],
    6: [
      { key: 'senior', heading: 'SNR SECTION', members: officialCompanyMemberRosterConfig[6].slice(0, 2) },
      { key: 'intermediate', heading: 'INTER SECTION', members: officialCompanyMemberRosterConfig[6].slice(2, 12) },
      { key: 'junior', heading: 'JNR SECTION', members: officialCompanyMemberRosterConfig[6].slice(12, 21) },
      { key: 'anchor', heading: 'ANCHOR SECTION', members: officialCompanyMemberRosterConfig[6].slice(21, 25) }
    ],
    7: [
      { key: 'officer', heading: 'OFFICERS', members: officialCompanyMemberRosterConfig[7].slice(31, 36) },
      { key: 'senior', heading: 'SNR SECTION', members: officialCompanyMemberRosterConfig[7].slice(22, 31) },
      { key: 'intermediate', heading: 'INTER SECTION', members: officialCompanyMemberRosterConfig[7].slice(44, 61) },
      { key: 'junior', heading: 'JNR SECTION', members: officialCompanyMemberRosterConfig[7].slice(0, 15) },
      { key: 'anchor', heading: 'ANCHOR SECTION', members: officialCompanyMemberRosterConfig[7].slice(15, 22) },
      { key: 'other', heading: 'NEW MEMBERS', members: officialCompanyMemberRosterConfig[7].slice(36, 44) }
    ],
    8: [
      { key: 'officer', heading: 'OFFICER', members: officialCompanyMemberRosterConfig[8].slice(0, 2) },
      { key: 'senior', heading: 'SNR SECTION', members: officialCompanyMemberRosterConfig[8].slice(2, 11) },
      { key: 'intermediate', heading: 'INTER SECTION', members: officialCompanyMemberRosterConfig[8].slice(11, 22) },
      { key: 'junior', heading: 'JNR SECTION', members: officialCompanyMemberRosterConfig[8].slice(22, 31) },
      { key: 'anchor', heading: 'ANCHOR SECTION', members: officialCompanyMemberRosterConfig[8].slice(31, 34) }
    ],
    9: [
      { key: 'officer', heading: 'OFFICER', members: officialCompanyMemberRosterConfig[9].slice(0, 1) },
      { key: 'senior', heading: 'SNR SECTION', members: officialCompanyMemberRosterConfig[9].slice(1, 3) },
      { key: 'intermediate', heading: 'INTER SECTION', members: officialCompanyMemberRosterConfig[9].slice(3, 11) },
      { key: 'junior', heading: 'JNR SECTION', members: officialCompanyMemberRosterConfig[9].slice(11, 15) },
      { key: 'anchor', heading: 'ANCHOR SECTION', members: officialCompanyMemberRosterConfig[9].slice(15, 16) }
    ]
  };

  function normalizeMemberComparisonKey(name) {
    return String(name || '')
      .normalize('NFKD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/\s*\((?:sergeant|staff sergeant|corporal|lance corporal)\)\s*/gi, ' ')
      .replace(/^(?:(?:\d+(?:st|nd|rd|th)\s*)?(?:captain|capt|officer|warrant\s+officer|warrant|lieutenant|provost)\.?\s*)+/gi, '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, ' ')
      .trim()
      .replace(/\s+/g, ' ');
  }
  
  const unwantedCompanyMemberPlaceholders = new Set(['ada', 'john doe']);
  
  function isUnwantedCompanyMemberPlaceholder(name, companyId) {
    return String(companyId) === '1' && unwantedCompanyMemberPlaceholders.has(normalizeMemberComparisonKey(name));
  }

  function getOfficialCompanySections(companyId) {
    const pdfMembership = window.RS_COY_MEMBERSHIP?.[companyId];
    if (pdfMembership) {
      const rawSections = pdfMembership.layout === 'columns' ? pdfMembership.columns.flat() : pdfMembership.sections;
      return (rawSections || []).map((section) => ({
        key: getCompanySectionKey(section.heading),
        heading: section.heading,
        members: Array.isArray(section.members) ? section.members.slice() : []
      }));
    }

    if (Array.isArray(officialCompanySectionRosterConfig[companyId])) {
      return officialCompanySectionRosterConfig[companyId].map((section) => ({
        ...section,
        members: section.members.slice()
      }));
    }
    return [];
  }

  function getCompanySectionKey(heading) {
    const normalizedHeading = String(heading || '').toLowerCase();
    if (normalizedHeading.includes('officer')) return 'officer';
    if (normalizedHeading.includes('senior')) return 'senior';
    if (normalizedHeading.includes('inter')) return 'intermediate';
    if (normalizedHeading.includes('junior')) return 'junior';
    if (normalizedHeading.includes('anchor')) return 'anchor';
    return 'other';
  }

  function getCompanySerialForMember(companyId, memberName) {
    const targetKey = normalizeMemberComparisonKey(memberName);
    if (!targetKey) return null;
    const company = state.companyData[companyId] || defaultCompanyData[companyId] || {};
    const serialMap = new Map();
    const seenKeys = new Set();
    const addMember = (name, sectionKey = '') => {
      const key = normalizeMemberComparisonKey(name);
      if (!key || seenKeys.has(key)) return;
      seenKeys.add(key);
      serialMap.set(key, serialMap.size + 1);
    };

    const captainName = getOfficialCaptainForCompany(companyId);
    if (captainName) addMember(captainName, 'captain');

    const sections = getOfficialCompanySections(companyId);
    if (sections.length) {
      sections.forEach((section) => {
        (section.members || []).forEach((name) => addMember(name, section.key));
      });
    } else {
      ['officer', 'senior', 'intermediate', 'junior', 'anchor', 'other'].forEach((sectionKey) => {
        (Array.isArray(company[sectionKey]) ? company[sectionKey] : []).forEach((name) => addMember(name, sectionKey));
      });
    }

    const websiteOnly = getWebsiteOnlyCompanyMembers(companyId);
    websiteOnly.forEach(({ name }) => addMember(name, 'website'));
    return serialMap.get(targetKey) || null;
  }

  function getOfficialCaptainForCompany(companyId) {
    const companySerial = Number(companyId);
    if (!Number.isInteger(companySerial) || !officialCompanySerialByRecordId[companySerial]) return '';
    if ([6, 7, 9].includes(companySerial)) return '';
    const explicitCaptain = String(officialCompanyCaptainProfiles[companySerial]?.name || '').trim();
    if (explicitCaptain) return explicitCaptain;
    const captainCard = document.querySelector(`.captains-grid .captain-card[data-company="${companySerial}"]`);
    if (captainCard?.dataset.captainLocked === 'blank') return '';
    const companyCaptain = (state.companyData[companySerial]?.members || []).find((member) => {
      return member && (String(member.section || '').toLowerCase() === 'captain'
        || String(member.rank || '').toLowerCase() === 'captain'
        || String(member.category || '').toUpperCase() === 'COMMISSIONED_OFFICER' && /captain/i.test(String(member.title || member.designation || '')));
    });
    if (companyCaptain?.name) return String(companyCaptain.name).trim();
    const roster = getOfficialCompanySections(companySerial).flatMap((section) => section.members || []);
    const captainFromRoster = roster.find((name) => /^\s*(?:capt(?:ain)?\.?\s+|capt\.?\s+)/i.test(String(name || '')));
    return captainFromRoster ? String(captainFromRoster).trim() : '';
  }

  function getOfficialCaptainDivisionSerial(companyId, captainName = getOfficialCaptainForCompany(companyId)) {
    const profile = officialCompanyCaptainProfiles[Number(companyId)];
    const divisionName = String(profile?.divisionName || '').trim();
    return getGeneralDivisionMemberSerial(divisionName || captainName);
  }

  function syncCompanyCaptainReferences() {
    const captainsGrid = document.querySelector('.captains-grid');
    if (!captainsGrid) return;
    const captainCards = new Map(Array.from(captainsGrid.querySelectorAll('.captain-card[data-company]'))
      .map((card) => [String(card.dataset.company), card]));

    companyCards.forEach((companyCard) => {
      const companyId = String(companyCard.dataset.company || '').trim();
      const companyReference = officialCompanySerialByRecordId[companyId];
      if (!companyId || !companyReference) return;
      companyCard.id = `company-${companyReference}`;
      companyCard.dataset.companyReference = companyReference;

      let captainCard = captainCards.get(companyId);
      if (!captainCard) {
        captainCard = document.createElement('article');
        captainCard.className = 'captain-card glass-card';
        captainCard.dataset.company = companyId;
        captainCard.innerHTML = '<div class="captain-photo-wrap"></div><div class="captain-details"><h3></h3><p class="captain-role"></p><p class="captain-bio captain-name"></p></div>';
        captainsGrid.appendChild(captainCard);
        captainCards.set(companyId, captainCard);
      }

      const company = state.companyData[companyId] || defaultCompanyData[companyId] || {};
      const displayName = getCompanyDisplayName(companyId, company);
      const shortName = displayName.split(/\s+-\s+/)[0] || displayName;
      const captainName = getOfficialCaptainForCompany(companyId);
      const profile = officialCompanyCaptainProfiles[companyId] || {};
      const heading = captainCard.querySelector('h3');
      const role = captainCard.querySelector('.captain-role');
      const nameLine = captainCard.querySelector('.captain-name') || Array.from(captainCard.querySelectorAll('.captain-bio'))
        .find((item) => item.textContent.trim().startsWith('Captain:'));
      const photoWrap = captainCard.querySelector('.captain-photo-wrap');

      captainCard.dataset.companyReference = companyReference;
      captainCard.dataset.captainReference = captainName
        ? (getOfficialMemberDivisionId(companyId, captainName, 1) || '')
        : '';
      if (heading) heading.textContent = `${companyReference} — ${shortName}`;
      if (role) role.textContent = displayName;
      if (nameLine) nameLine.textContent = `Captain: ${captainName || 'Not provided'}`;

      if (photoWrap && profile.photo) {
        let image = photoWrap.querySelector('img.captain-photo');
        if (!image) {
          image = document.createElement('img');
          image.className = 'captain-photo';
          image.loading = 'lazy';
          photoWrap.replaceChildren(image);
        }
        image.src = profile.photo;
        image.alt = `Captain ${captainName || 'photograph'}, ${displayName}`;
      } else if (photoWrap) {
        let placeholder = photoWrap.querySelector('.captain-photo-placeholder');
        if (!placeholder) {
          placeholder = document.createElement('div');
          placeholder.className = 'captain-photo-placeholder';
          photoWrap.replaceChildren(placeholder);
        }
        placeholder.setAttribute('role', 'img');
        placeholder.setAttribute('aria-label', 'Captain photograph not provided');
        placeholder.textContent = 'Captain photograph not provided';
      }
    });
  }
  function normalizePersonnelCategory(value) {
    const normalized = String(value || '').trim().toLowerCase().replace(/[^a-z]+/g, ' ');
    if (!normalized) return null;
    if (/\b(nco|non commissioned officer)\b/.test(normalized) || /\bwarrant officer\b|\bsergeant\b|\bcorporal\b|\bprovost\b/.test(normalized)) return 'nco';
    if (/\bcommissioned officer\b|\bcaptain\b|\bcapt\b|\blieutenant\b|\bcolonel\b|\bmajor\b|\bgeneral\b|\bcommander\b|\bbrigadier\b|\bensign\b/.test(normalized)) return 'commissioned';
    if (/\bofficer\b/.test(normalized)) return 'officer';
    if (/\bmember\b/.test(normalized)) return 'member';
    return null;
  }

  function getPersonnelCategory(memberName, companyId = '', sectionKey = '', companyOverride = null) {
    const company = companyOverride || (companyId ? state.companyData[String(companyId)] : null);
    const targetKey = normalizeMemberComparisonKey(memberName);
    const generalSerial = getGeneralDivisionMemberSerial(memberName);
    if (generalSerial && generalSerial <= 11) return 'commissioned';
    const memberRecord = (company?.members || []).find((entry) => entry && normalizeMemberComparisonKey(entry.name) === targetKey);
    const explicitRank = normalizePersonnelCategory(memberRecord?.rank || memberRecord?.designation || memberRecord?.title);
    if (explicitRank) return explicitRank;

    const nameDesignation = normalizePersonnelCategory(memberName);
    if (nameDesignation && nameDesignation !== 'member') return nameDesignation;

    const explicitCategory = normalizePersonnelCategory(memberRecord?.category || memberRecord?.classification);
    if (explicitCategory) return explicitCategory;

    if (String(sectionKey || memberRecord?.section || '').toLowerCase() === 'officer') return 'officer';
    return 'member';
  }

  function getCompanyPersonnelCounts(companyId, company) {
    const counts = { member: 0, nco: 0, officer: 0, commissioned: 0 };
    const sections = getOfficialCompanySections(companyId);
    const useOfficialRoster = Boolean(companyId && sections.length);
    const sourceEntries = useOfficialRoster
      ? sections.flatMap((section) => section.members.map((name) => ({ name, sectionKey: section.key })))
      : ['officer', 'senior', 'intermediate', 'junior', 'anchor', 'other'].flatMap((sectionKey) => (company?.[sectionKey] || []).map((name) => ({ name, sectionKey })));

    sourceEntries.forEach(({ name, sectionKey }) => {
      counts[getPersonnelCategory(name, companyId, sectionKey, company)] += 1;
    });
    const captainName = getOfficialCaptainForCompany(companyId);
    if (captainName) counts.commissioned += 1;
    if (useOfficialRoster) {
      getWebsiteOnlyCompanyMembers(companyId).forEach(({ name, sectionKey }) => {
        counts[getPersonnelCategory(name, companyId, sectionKey, company)] += 1;
      });
    }
    return counts;
  }

  function getOfficialCompanyMemberRoster(companyId) {
    return getOfficialCompanySections(companyId)
      .flatMap((section) => section.members);
  }

  function getWebsiteOnlyCompanyMembers(companyId) {
    const company = state.companyData[companyId] || {};
    const officialNames = new Set(getOfficialCompanyMemberRoster(companyId).map(normalizeMemberComparisonKey));
    const captainName = getOfficialCaptainForCompany(companyId);
    if (captainName) officialNames.add(normalizeMemberComparisonKey(captainName));
    const websiteOnly = ['officer', 'senior', 'intermediate', 'junior', 'anchor', 'other'].flatMap((sectionKey) => {
      const members = Array.isArray(company[sectionKey]) ? company[sectionKey] : [];
      return members
        .filter((name) => !officialNames.has(normalizeMemberComparisonKey(name)) && !isUnwantedCompanyMemberPlaceholder(name, companyId))
        .map((name) => ({ name, sectionKey }));
    });
    const displayedCounts = new Map();
    websiteOnly.forEach(({ name }) => {
      const key = normalizeMemberComparisonKey(name);
      displayedCounts.set(key, (displayedCounts.get(key) || 0) + 1);
    });

    (Array.isArray(company.members) ? company.members : []).forEach((member) => {
      const key = normalizeMemberComparisonKey(member?.name);
      if (!key || officialNames.has(key) || isUnwantedCompanyMemberPlaceholder(member?.name, companyId)) return;
      const alreadyDisplayed = displayedCounts.get(key) || 0;
      if (alreadyDisplayed) {
        displayedCounts.set(key, alreadyDisplayed - 1);
        return;
      }
      websiteOnly.push({ name: member.name, sectionKey: member.section || 'members' });
    });
    return websiteOnly;
  }

  function getRenderedCompanyMemberEntries(companyId) {
    const sections = getOfficialCompanySections(companyId);
    const entries = sections.flatMap((section) => (section.members || []).map((name) => ({
      name,
      sectionKey: section.key || getCompanySectionKey(section.heading)
    })));
    const captainName = getOfficialCaptainForCompany(companyId);
    const captainKey = normalizeMemberComparisonKey(captainName);
    if (captainName) {
      const captainIndex = entries.findIndex((entry) => normalizeMemberComparisonKey(entry.name) === captainKey);
      const captainEntry = captainIndex >= 0
        ? entries.splice(captainIndex, 1)[0]
        : { name: captainName, sectionKey: 'captain' };
      entries.unshift({ ...captainEntry, name: captainName, sectionKey: 'captain' });
    }
    getWebsiteOnlyCompanyMembers(companyId).forEach((entry) => entries.push(entry));
    return entries;
  }

  function syncOfficialCompanyMembersToState() {
    let changed = false;
    Object.keys(officialCompanySerialByRecordId).forEach((recordId) => {
      const company = state.companyData[recordId];
      if (!company) return;
      const sections = getOfficialCompanySections(recordId);
      const companyMemberSerials = getRenderedCompanyMemberEntries(recordId).map((entry, index) => ({
        name: entry.name,
        section: entry.sectionKey,
        companySerial: String(index + 1).padStart(3, '0')
      }));
      if (JSON.stringify(company.companyMemberSerials || []) !== JSON.stringify(companyMemberSerials)) {
        company.companyMemberSerials = companyMemberSerials;
        changed = true;
      }
      const officialNames = new Set(sections.flatMap((section) => section.members.map(normalizeMemberComparisonKey)));
      const previousValues = new Map();
          ['officer', 'senior', 'intermediate', 'junior', 'anchor', 'other'].forEach((key) => {
        previousValues.set(key, Array.isArray(company[key]) ? company[key] : []);
      });

      sections.forEach((section) => {
        if (!['officer', 'senior', 'intermediate', 'junior', 'anchor', 'other'].includes(section.key)) return;
        const websiteOnly = previousValues.get(section.key)
          .filter((name) => !officialNames.has(normalizeMemberComparisonKey(name)) && !isUnwantedCompanyMemberPlaceholder(name, recordId));
        const nextMembers = [...section.members, ...websiteOnly];
        if (JSON.stringify(company[section.key] || []) !== JSON.stringify(nextMembers)) changed = true;
        company[section.key] = nextMembers;
      });
      company.active = company.anchor;
      company.inactive = company.junior;
      company.officers = company.officer;

      const existingMembers = Array.isArray(company.members) ? company.members.slice() : [];
      for (let index = existingMembers.length - 1; index >= 0; index -= 1) {
        if (isUnwantedCompanyMemberPlaceholder(existingMembers[index]?.name, recordId)) {
          existingMembers.splice(index, 1);
          changed = true;
        }
      }
      const assignedCaptainKey = normalizeMemberComparisonKey(getOfficialCaptainForCompany(recordId));
      for (let index = existingMembers.length - 1; index >= 0; index -= 1) {
        const member = existingMembers[index];
        if (member?.section === 'captain' && member?.rank === 'Captain' && member?.category === 'COMMISSIONED_OFFICER' && normalizeMemberComparisonKey(member.name) !== assignedCaptainKey) {
          existingMembers.splice(index, 1);
          changed = true;
        }
      }
      sections.forEach((section) => {
        section.members.forEach((memberName) => {
          const memberKey = normalizeMemberComparisonKey(memberName);
          const existingMember = existingMembers.find((member) => normalizeMemberComparisonKey(member?.name) === memberKey);
          if (existingMember) {
            if (existingMember.section !== section.key) {
              existingMember.section = section.key;
              changed = true;
            }
            return;
          }
          existingMembers.push({ name: memberName, section: section.key });
          changed = true;
        });
      });
      company.members = existingMembers;
      const captainName = getOfficialCaptainForCompany(recordId);
      if (captainName && !existingMembers.some((member) => normalizeMemberComparisonKey(member?.name) === normalizeMemberComparisonKey(captainName))) {
        company.members.push({ name: captainName, section: 'captain', rank: 'Captain', category: 'COMMISSIONED_OFFICER' });
        changed = true;
      }
    });
    return changed;
  }

  function getGeneralDivisionMemberSerial(memberName) {
    const lookupNames = Array.isArray(window.RS_TOTAL_MEMBERS) ? window.RS_TOTAL_MEMBERS : [];
    const targetKey = normalizeMemberComparisonKey(memberName);
    if (!targetKey) return null;

    const matchingIndexes = lookupNames
      .map((candidate, index) => normalizeMemberComparisonKey(candidate) === targetKey ? index + 1 : -1)
      .filter((index) => index !== -1);
    return matchingIndexes.length === 1 ? matchingIndexes[0] : null;
  }

  function getOfficialMemberDivisionId(companyId, memberName, companySerialOverride = null) {
    const companyIdText = officialCompanySerialByRecordId[companyId];
    const roster = getOfficialCompanyMemberRoster(companyId);
    const cleanedName = String(memberName || '').trim();
    if (!companyIdText || !cleanedName) return '';

    const targetKey = normalizeMemberComparisonKey(cleanedName);
    if (!targetKey) return '';

    const generalSerial = getGeneralDivisionMemberSerial(cleanedName);
    const overrideSerial = Number(companySerialOverride);
    const companySerial = Number.isInteger(overrideSerial) && overrideSerial > 0
      ? overrideSerial
      : getCompanySerialForMember(companyId, cleanedName);
    if (generalSerial && companySerial) {
      return `AI.D/${String(companyIdText).padStart(2, '0')}/${String(generalSerial).padStart(3, '0')}/${String(companySerial).padStart(3, '0')}`;
    }

    const captainName = getOfficialCaptainForCompany(companyId);
    if (captainName && normalizeMemberComparisonKey(captainName) === targetKey) {
      const captainDivisionSerial = generalSerial || getOfficialCaptainDivisionSerial(companyId, captainName) || Number(companyId) + 1;
      return `AI.D/${String(companyIdText).padStart(2, '0')}/${String(captainDivisionSerial).padStart(3, '0')}/${String(companySerial || 1).padStart(3, '0')}`;
    }

    if (generalSerial && generalSerial <= 11 && Number(companyIdText) === generalSerial) {
      return `AI.D/${String(generalSerial).padStart(2, '0')}/${String(generalSerial).padStart(3, '0')}/${String(companySerial || 1).padStart(3, '0')}`;
    }

    if (!roster.length) return '';

    const matchingIndexes = roster
      .map((candidate, index) => normalizeMemberComparisonKey(candidate) === targetKey ? index : -1)
      .filter((index) => index !== -1);
    if (matchingIndexes.length !== 1) return '';
    const matchingIndex = matchingIndexes[0];

    const companyOccurrenceCount = Object.keys(officialCompanySerialByRecordId).reduce((count, recordId) => {
      return count + getOfficialCompanyMemberRoster(recordId)
        .filter((candidate) => normalizeMemberComparisonKey(candidate) === targetKey).length;
    }, 0);
    if (companyOccurrenceCount !== 1) return '';

    const matchedGeneralSerial = getGeneralDivisionMemberSerial(roster[matchingIndex]);
    if (!matchedGeneralSerial) return '';

    const fallbackCompanySerial = company || matchingIndex + 2;
    return `AI.D/${companyIdText}/${String(matchedGeneralSerial).padStart(3, '0')}/${String(fallbackCompanySerial).padStart(3, '0')}`;
  }

  function getOfficialDivisionIdForMember(memberName) {
    const targetKey = normalizeMemberComparisonKey(memberName);
    if (!targetKey) return '';

    for (const companyId of Object.keys(officialCompanySerialByRecordId)) {
      const captainName = getOfficialCaptainForCompany(companyId);
      if (captainName && normalizeMemberComparisonKey(captainName) === targetKey) {
        const generalSerial = getOfficialCaptainDivisionSerial(companyId, captainName);
        if (generalSerial) {
          return `AI.D/${String(officialCompanySerialByRecordId[companyId]).padStart(2, '0')}/${String(generalSerial).padStart(3, '0')}/001`;
        }
      }
    }

    const captainSerial = getGeneralDivisionMemberSerial(memberName);
    if (captainSerial && captainSerial <= 11) {
      return `AI.D/${String(captainSerial).padStart(2, '0')}/${String(captainSerial).padStart(3, '0')}/001`;
    }

    const matches = [];
    for (const companyId of Object.keys(officialCompanySerialByRecordId)) {
      getOfficialCompanyMemberRoster(companyId).forEach((candidate) => {
        if (normalizeMemberComparisonKey(candidate) === targetKey) matches.push(companyId);
      });
    }
    if (matches.length !== 1) return '';
    return getOfficialMemberDivisionId(matches[0], memberName);
  }

  function buildOfficialMemberDivisionIdSnapshot() {
    const recordsById = new Map();
    for (const recordId of Object.keys(officialCompanySerialByRecordId)) {
      getRenderedCompanyMemberEntries(recordId).forEach(({ name: memberName }, index) => {
        const id = getOfficialMemberDivisionId(recordId, memberName, index + 1);
        if (!id) return;
        const [, companySerial, generalSerial, memberSerial] = id.match(/^AI\.D\/(\d{2})\/(\d{3})\/(\d{3})$/) || [];
        if (!companySerial || !generalSerial || !memberSerial) return;
        recordsById.set(id, {
          id,
          name: memberName,
          companyRecordId: String(Number(companySerial)),
          companySerial,
          generalSerial: Number(generalSerial),
          memberSerial: Number(memberSerial)
        });
      });
    }
    return [...recordsById.values()];
  }

  async function persistOfficialMemberDivisionIds() {
    const membersChanged = syncOfficialCompanyMembersToState();
    const records = buildOfficialMemberDivisionIdSnapshot();
    state.memberDivisionIds = records;
    if (!isBackendAvailableSync()) return;

    const currentRecords = __rsBackendCache?.memberDivisionIds;
    if (!membersChanged && JSON.stringify(currentRecords) === JSON.stringify(records)) return;

    try {
      const response = await rsBackend.saveState({
        companies: state.companyData,
        memberDivisionIds: records
      });
      if (response && typeof response === 'object') __rsBackendCache = response;
    } catch (error) {
      console.warn('Official Division IDs could not be persisted.', error);
    }
  }

  function renderMemberNameWithDivisionId(memberName, companyId, sectionKey = '', companySerial = null) {
    const wrapper = document.createElement('div');
    wrapper.className = 'member-division-name';
    if (companySerial !== null && Number(companySerial) > 0) {
      wrapper.dataset.companySerial = String(companySerial).padStart(3, '0');
    }
    const name = document.createElement('span');
    name.textContent = memberName;
    const id = document.createElement('span');
    id.className = 'member-division-id';
    const divisionId = companyId
      ? getOfficialMemberDivisionId(companyId, memberName, companySerial)
      : getOfficialDivisionIdForMember(memberName);
    id.textContent = divisionId ? ` — ${divisionId}` : '';
    wrapper.append(name, id);
    return wrapper;
  }

  // Backend-backed storage helpers
  let __rsBackendCache = null;
  let __rsSaveTimer = null;
  let __rsSaveQueue = Promise.resolve();
  let __rsPendingSaveCount = 0;
  let __rsLocalRevision = 0;

  function isBackendAvailableSync() {
    try {
      return Boolean(getBackendBaseUrl());
    } catch {
      return false;
    }
  }

  function getAppStatePayload() {
    return {
      companies: state.companyData,
      memberDivisionIds: state.memberDivisionIds || [],
      captainAccounts: state.captainAccounts,
      commanderAccounts: state.commanderAccounts,
      commanderVerificationCodes: state.commanderVerificationCodes,
      captainRequests: state.captainRequests,
      enlistmentApplications: state.enlistmentApplications,
      divisionMembers: state.divisionMembers,
      commandStructure: state.commandStructure,
      founderStory: state.founderStory,
      excoProfiles: state.excoProfiles,
      newsItems: state.newsItems || [],
      examScores: state.examScores,
      activeExamYear: state.activeExamYear,
      galleryItems: state.galleryItems || [],
      companyDocuments: state.companyDocuments || [],
      commanderSettings: state.commanderSettings,
      activeCaptainCompany: state.activeCaptainCompany,
      activeRole: getActiveRole(),
      _fullState: true
    };
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
        __rsBackendCache = payload;
        return payload;
      }
    } catch (err) {
      console.warn('loadState failed', err);
    }
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
      'royalShepherdNewsItems': 'newsItems',
      'royalShepherdExamScores': 'examScores',
      'royalShepherdActiveExamYear': 'activeExamYear',
      'royalShepherdEnlistmentApplications': 'enlistmentApplications',
      'royalShepherdGalleryItems': 'galleryItems',
      'royalShepherdCompanyDocuments': 'companyDocuments',
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
      await persistOfficialMemberDivisionIds();
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
    state.memberDivisionIds = Array.isArray(payload.memberDivisionIds) ? payload.memberDivisionIds : [];
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
    state.companyDocuments = normalizeCompanyDocuments(payload.companyDocuments || payload.companyDocs || []);
    state.activeCaptainCompany = payload.activeCaptainCompany || '';
    state.activeCommanderEmail = getActiveCommanderEmail();
  }

  async function persistSharedState() {
    await saveAppState(true);
  }

  const ACTIVE_ROLE_KEY = 'royalShepherdActiveRole';
  const ACTIVE_CAPTAIN_COMPANY_KEY = 'royalShepherdActiveCaptainCompany';

  function getSessionStorageSafely() {
    try {
      return window.sessionStorage;
    } catch (error) {
      console.warn('Session storage unavailable; continuing as a visitor.', error);
      return null;
    }
  }

  function getActiveCommanderEmail() {
    const storage = getSessionStorageSafely();
    if (!storage) return null;
    try {
      return storage.getItem(ACTIVE_COMMANDER_KEY) || null;
    } catch (error) {
      console.warn('Session storage read failed; continuing as a visitor.', error);
      return null;
    }
  }

  function setActiveCommanderEmail(email) {
    const storage = getSessionStorageSafely();
    if (email) {
      const normalizedEmail = email.toString().trim().toLowerCase();
      try {
        storage?.setItem(ACTIVE_COMMANDER_KEY, normalizedEmail);
      } catch (error) {
        console.warn('Session storage write failed.', error);
      }
      state.activeCommanderEmail = normalizedEmail;
    } else {
      try {
        storage?.removeItem(ACTIVE_COMMANDER_KEY);
      } catch (error) {
        console.warn('Session storage clear failed.', error);
      }
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

  function normalizeCompanyDocument(documentEntry) {
    if (!documentEntry || typeof documentEntry !== 'object') return null;
    const companyId = String(documentEntry.companyId || documentEntry.company || '').trim();
    const documentName = String(documentEntry.documentName || documentEntry.title || documentEntry.filename || 'Company document').trim();
    const src = String(documentEntry.src || documentEntry.url || '').trim();
    if (!src && !documentName) return null;
    return {
      id: documentEntry.id || `document-${Date.now()}-${Math.random().toString(16).slice(2)}`,
      companyId,
      documentName,
      filename: String(documentEntry.filename || documentEntry.name || 'document.pdf').trim(),
      src,
      uploadedAt: documentEntry.uploadedAt || new Date().toISOString(),
      uploadedBy: String(documentEntry.uploadedBy || '').trim(),
    };
  }

  function normalizeCompanyDocuments(rawData) {
    if (!Array.isArray(rawData)) return [];
    return rawData.map(normalizeCompanyDocument).filter(Boolean);
  }

  function listCompanyDocumentsForCompany(companyId) {
    if (!companyId) return [];
    return (Array.isArray(state.companyDocuments) ? state.companyDocuments : []).filter((documentEntry) => String(documentEntry.companyId || '') === String(companyId));
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
    memberDivisionIds: [],
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
    galleryItems: [],
    companyDocuments: []
  };

  populateCaptainCompanySelect();
  populateEnlistmentCompanySelect();

  const galleryData = window.galleryData || [];
  const newsGrid = document.getElementById('newsGrid');
  const defaultNewsItems = [
    {
      id: 'rs-handbook',
      title: 'RS Handbook',
      date: '2026-09-08',
      description: 'Read the Royal Shepherd RS Handbook.',
      image: '',
      link: 'RS New Constitution Book.pdf',
      downloadName: 'RS-Handbook.pdf'
    },
    {
      id: 'rs-constitution',
      title: 'RS New Constitution',
      date: '2026-09-08',
      description: 'Read the Royal Shepherd New Constitution.',
      image: '',
      link: 'RS New Constitution Book.pdf',
      downloadName: 'RS-New-Constitution.pdf'
    }
  ];
  let pendingGalleryFiles = [];
  let galleryRenderItems = [];
  let galleryRenderOffset = 0;
  const GALLERY_RENDER_CHUNK_SIZE = 36;

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
    const canonicalName = defaultCompanyData[companyId]?.name || '';
    if (officialCompanySerialByRecordId[companyId] && /^company\s+\d+$/i.test(name) && canonicalName) {
      return canonicalName;
    }
    return name || defaultCompanyData[companyId]?.name || `Company ${companyId}`;
  }

  function getOfficialCompanyEntries() {
    return Object.entries(state.companyData || {})
      .filter(([companyId]) => Object.prototype.hasOwnProperty.call(defaultCompanyData, companyId))
      .sort(([leftId], [rightId]) => Number(leftId) - Number(rightId));
  }

  function populateCaptainCompanySelect() {
    if (!captainCompany) return;

    const currentValue = captainCompany.value || '';
    const companyEntries = getOfficialCompanyEntries();

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

    const companyEntries = getOfficialCompanyEntries();
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

  function normalizeCompanyData(rawData) {
    const parsed = {};
    Object.entries(rawData || {}).forEach(([companyId, company]) => {
      if (company && typeof company === 'object') {
        const sectionMap = companySectionDefinitions.reduce((accumulator, section) => {
          accumulator[section.key] = Array.isArray(company[section.key]) ? company[section.key] : [];
          return accumulator;
        }, {});

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
          other: Array.isArray(company.other) ? company.other : [],
          members: Array.isArray(company.members) ? company.members : [],
          companyMemberSerials: Array.isArray(company.companyMemberSerials) ? company.companyMemberSerials : [],
          totalMembers: Number(company.totalMembers || 0),
          totalNcos: Number(company.totalNcos || 0),
          totalOfficers: Number(company.totalOfficers || 0),
          totalCommissionedOfficers: Number(company.totalCommissionedOfficers || 0),
          active: anchor,
          inactive: junior,
          officers: officer
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
      await persistOfficialMemberDivisionIds();
      window.__royalShepherdState = state;
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
    state.newsItems = [];
    state.examScores = {};
    state.activeExamYear = String(new Date().getFullYear());
    state.galleryItems = [];
    state.companyDocuments = [];
    state.memberDivisionIds = buildOfficialMemberDivisionIdSnapshot();

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

  async function apiUploadGalleryImages(entries) {
    const backendUrl = getBackendBaseUrl();
    if (!backendUrl) {
      throw new Error('Backend is not configured');
    }
    const formData = new FormData();
    entries.forEach((entry) => {
      const file = entry?.file;
      if (!file) return;
      formData.append('files', file);
      formData.append('titles', String(entry.title || file.name || 'Gallery picture'));
      formData.append('descriptions', String(galleryCategoryLabels?.[entry.category] || 'Royal Shepherd gallery picture'));
      formData.append('categories', String(entry.category || 'parades'));
    });
    const response = await fetch(`${backendUrl}/api/gallery/upload`, {
      method: 'POST',
      body: formData
    });
    const data = await response.json().catch(() => null);
    if (!response.ok) {
      throw new Error(data?.detail || 'Gallery upload failed');
    }
    return Array.isArray(data?.items) ? data.items : [];
  }

  async function apiUploadCompanyDocument(file, companyId, documentName, uploadedBy = '') {
    const backendUrl = getBackendBaseUrl();
    if (!backendUrl) {
      throw new Error('Backend is not configured');
    }
    const formData = new FormData();
    formData.append('file', file);
    formData.append('companyId', String(companyId || ''));
    formData.append('documentName', String(documentName || file.name || 'Company document'));
    formData.append('uploadedBy', String(uploadedBy || ''));
    const response = await fetch(`${backendUrl}/api/company-documents`, {
      method: 'POST',
      body: formData
    });
    const data = await response.json().catch(() => null);
    if (!response.ok) {
      throw new Error(data?.detail || 'PDF upload failed');
    }
    return data?.item || null;
  }

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
    // Intentionally hidden from the public UI while backend checks continue internally.
    return null;
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
    closeModal('totalMembershipModal');
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
        openExco
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
    membershipStatTrigger?.addEventListener('click', () => openModal('totalMembershipModal'));
    membershipClose?.addEventListener('click', () => closeModal('totalMembershipModal'));
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

  function getGalleryRenderItems(filter = 'all') {
    const query = (gallerySearch?.value || '').trim().toLowerCase();
    return getGalleryItems().filter((item) => {
      const matchesCategory = filter === 'all' || item.category === filter;
      const searchable = `${item.title || ''} ${item.description || ''} ${item.category || ''}`.toLowerCase();
      return matchesCategory && (!query || searchable.includes(query));
    });
  }

  function appendGalleryChunk() {
    if (!galleryGrid || galleryRenderOffset >= galleryRenderItems.length) return;
    const fragment = document.createDocumentFragment();
    const end = Math.min(galleryRenderOffset + GALLERY_RENDER_CHUNK_SIZE, galleryRenderItems.length);
    for (let index = galleryRenderOffset; index < end; index += 1) {
      const item = galleryRenderItems[index];
      const article = document.createElement('article');
      article.className = 'gallery-item glass-card';
      article.dataset.category = item.category || 'parades';
      article.dataset.index = String(getGalleryItems().findIndex((candidate) => candidate.src === item.src));
      article.innerHTML = `
        <button type="button" class="gallery-thumb" aria-label="${escapeHtml(item.title || 'Gallery picture')}">
          <img src="${resolveImagePath(item.src)}" alt="${escapeHtml(item.title || 'Gallery picture')}" loading="lazy" decoding="async" fetchpriority="low" />
          <div class="gallery-overlay">
            <h3>${escapeHtml(item.title || 'Gallery picture')}</h3>
            <p>${escapeHtml(item.description || '')}</p>
          </div>
        </button>
        <a class="gallery-download btn btn-outline" href="${resolveImagePath(item.src)}" download aria-label="Download ${escapeHtml(item.title || 'Gallery picture')}">Download</a>
      `;
      fragment.appendChild(article);
    }
    galleryRenderOffset = end;
    galleryGrid.appendChild(fragment);
  }

  function renderGallery(filter = 'all') {
    if (!galleryGrid) return;
    galleryGrid.innerHTML = '';
    galleryRenderItems = getGalleryRenderItems(filter);
    galleryRenderOffset = 0;
    appendGalleryChunk();
    const emptyState = document.createElement('p');
    emptyState.className = 'gallery-empty-state';
    emptyState.hidden = galleryRenderItems.length > 0;
    emptyState.textContent = 'No gallery pictures match this search.';
    galleryGrid.appendChild(emptyState);
    applyGalleryFilter(filter);
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
    galleryPanel?.querySelector('.gallery-panel-inner')?.addEventListener('scroll', () => {
      const scrollContainer = galleryPanel.querySelector('.gallery-panel-inner');
      if (scrollContainer.scrollTop + scrollContainer.clientHeight >= scrollContainer.scrollHeight - 600) {
        appendGalleryChunk();
      }
    }, { passive: true });

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
      button.addEventListener('click', () => renderGallery(button.dataset.filter));
    });
    gallerySearch?.addEventListener('input', () => {
      const activeFilter = document.querySelector('.filter-btn.active')?.dataset.filter || 'all';
      renderGallery(activeFilter);
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

  function getCompanyMemberCount(company, companyId = '') {
    return Object.values(getCompanyPersonnelCounts(companyId, company)).reduce((total, count) => total + count, 0);
  }

  function getCompanyNcoCount(company, companyId = '') {
    return getCompanyPersonnelCounts(companyId, company).nco;
  }

  function getCompanyOfficerCount(company, companyId = '') {
    return getCompanyPersonnelCounts(companyId, company).officer;
  }

  function getCompanyCommissionedOfficerCount(company, companyId = '') {
    return getCompanyPersonnelCounts(companyId, company).commissioned;
  }

  function renderDivisionSummary() {
    let totalMembers = 0;
    let totalCommissionedOfficers = 0;
    const allCommandOfficers = Array.isArray(state.commandStructure?.officers) ? state.commandStructure.officers : [];
    const commissionedWithNames = allCommandOfficers.filter((officer) => {
      if (!officer || !String(officer.name || '').trim()) return false;
      return normalizePersonnelCategory(officer.rank) === 'commissioned' || normalizePersonnelCategory(officer.name) === 'commissioned';
    });
    const divisionActiveMembers = Array.isArray(state.divisionMembers?.active) ? state.divisionMembers.active.filter(Boolean) : [];

    Object.entries(state.companyData).forEach(([companyId, company]) => {
      totalMembers += getCompanyMemberCount(company, companyId);
      totalCommissionedOfficers += getCompanyCommissionedOfficerCount(company, companyId);
    });

    totalMembers += commissionedWithNames.length;
    totalMembers += divisionActiveMembers.length;
    totalCommissionedOfficers += commissionedWithNames.length;

    if (divisionTotalMembers) {
      divisionTotalMembers.textContent = Array.isArray(window.RS_TOTAL_MEMBERS)
        ? window.RS_TOTAL_MEMBERS.length
        : 473;
    }
    if (divisionTotalOfficers) {
      divisionTotalOfficers.textContent = totalCommissionedOfficers;
    }
    if (homeTotalMembers) {
      homeTotalMembers.textContent = Array.isArray(window.RS_TOTAL_MEMBERS)
        ? window.RS_TOTAL_MEMBERS.length
        : 473;
    }
    if (homeTotalOfficers) {
      homeTotalOfficers.textContent = String(totalCommissionedOfficers);
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

  function getExcoDisplayName(key, profile, roleDefinition, isExcoGroup) {
    const fixedNames = {
  'national-organizing-secretary': 'RS MAJOR GENERAL E. B. ADEGBITE',
  'assistant-national-organizing-secretary': 'RS BRIGADIER GENERAL S. OLUDAHUNSI',
      'akiling-region-commander': 'Pastor J. P. Akinyemi'
    };
    const name = fixedNames[key] || (profile.name || roleDefinition?.label || 'Enter name here').trim();
    if (!isExcoGroup || /^RS\s/i.test(name)) return name;
    return `RS ${name}`;
  }

  function renderLeadershipGroup(container, group) {
    const isExcoGroup = group.title !== 'CAC Authorities';
    const visibleKeys = group.keys.filter((key) => {
      const roleDefinition = excoRoleDefinitions.find((entry) => entry.key === key);
      const profile = state.excoProfiles[key] || defaultExcoProfiles[key] || {};
      const name = getExcoDisplayName(key, profile, roleDefinition, isExcoGroup);
      const role = (leadershipTitleOverrides[key] || profile.role || roleDefinition?.label || '').trim();
      const photo = (profile.photo || leadershipPhotoMap[key] || '').trim();
      return Boolean(name || photo);
    });

    if (!visibleKeys.length) return;

    const groupWrapper = document.createElement('section');
    groupWrapper.className = 'leadership-group';

    const groupHeading = document.createElement('h3');
    groupHeading.className = 'leadership-group-title';
    groupHeading.textContent = group.title;
    groupWrapper.appendChild(groupHeading);

    const grid = document.createElement('div');
    grid.className = 'leadership-grid';

    visibleKeys.forEach((key) => {
      const roleDefinition = excoRoleDefinitions.find((entry) => entry.key === key);
      const profile = state.excoProfiles[key] || defaultExcoProfiles[key] || {};
      const name = getExcoDisplayName(key, profile, roleDefinition, isExcoGroup);
      const role = leadershipTitleOverrides[key] || (profile.role || roleDefinition?.label || 'Leadership Post').trim();

      const card = document.createElement('article');
      card.className = 'leadership-card';

      const fixedPhotos = {
        'national-organizing-secretary': 'nos adegnite.jpeg',
        'assistant-national-organizing-secretary': './RS Major General E. B. Adegbite.jpeg',
        'akiling-region-commander': 'akiling regional commander  akinyemi.jpeg'
      };
      const photo = fixedPhotos[key] || profile.photo || leadershipPhotoMap[key] || '';
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

  function renderTotalMembershipList() {
    const list = document.getElementById('totalMembershipList');
    const count = document.getElementById('totalMembershipCount');
    if (!list) return;

    const names = Array.isArray(window.RS_TOTAL_MEMBERS) ? window.RS_TOTAL_MEMBERS : [];
    list.replaceChildren(...names.map((name) => {
      const item = document.createElement('li');
      item.appendChild(renderMemberNameWithDivisionId(name));
      return item;
    }));
    if (count) count.textContent = `${names.length} members`;
  }

  function bindMembershipLookup() {
    membershipLookupForm?.addEventListener('submit', (event) => {
      event.preventDefault();
      const query = membershipLookupInput?.value.trim().toLocaleLowerCase() || '';
      if (!membershipLookupResults) return;
      membershipLookupResults.replaceChildren();

      if (!query) {
        membershipLookupResults.textContent = 'Enter your full name.';
        return;
      }

      const names = Array.isArray(window.RS_TOTAL_MEMBERS) ? window.RS_TOTAL_MEMBERS : [];
      const matches = names.filter((name) => name.toLocaleLowerCase().includes(query));
      if (!matches.length) {
        membershipLookupResults.textContent = 'No matching membership record found.';
        return;
      }

      const status = document.createElement('p');
      status.textContent = matches.length > 1
        ? `${matches.length} matching records. Select your name.`
        : '1 matching membership record.';
      membershipLookupResults.appendChild(status);

      const matchList = document.createElement('div');
      matchList.className = 'membership-match-list';
      matches.forEach((name) => {
        const record = {
          name,
          division: 'Agbala-Itura Division',
          membershipNumber: getOfficialDivisionIdForMember(name)
        };
        const result = document.createElement('button');
        result.type = 'button';
        result.className = 'membership-match';
        result.setAttribute('aria-pressed', 'false');

        const nameText = document.createElement('strong');
        nameText.textContent = `Member Name: ${record.name}`;
        const divisionText = document.createElement('span');
        divisionText.textContent = `Division: ${record.division}`;
        const numberText = document.createElement('span');
        numberText.textContent = `Membership Number: ${record.membershipNumber || 'Not Assigned Yet'}`;
        result.append(nameText, divisionText, numberText);
        result.addEventListener('click', () => {
          matchList.querySelectorAll('.membership-match').forEach((item) => {
            item.setAttribute('aria-pressed', 'false');
          });
          result.setAttribute('aria-pressed', 'true');
        });
        matchList.appendChild(result);
      });
      membershipLookupResults.appendChild(matchList);
    });
  }

  function renderCompanyLists() {
    syncCompanyCaptainReferences();
    companyCards.forEach((card) => {
      const companyId = card.dataset.company;
      const company = state.companyData[companyId] || defaultCompanyData[companyId];
      const title = card.querySelector('h3');
      const caption = card.querySelector('.company-caption');
      const displayName = getCompanyDisplayName(companyId, company);
      const officialCompanySerial = officialCompanySerialByRecordId[companyId];
      if (title) title.textContent = displayName;
      if (caption) caption.textContent = officialCompanySerial ? `Company ${officialCompanySerial}` : 'Legacy Company';
      const companyNumber = card.querySelector('.company-number');
      if (companyNumber) companyNumber.textContent = officialCompanySerial || '';

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
      const pdfMembership = window.RS_COY_MEMBERSHIP?.[companyId];
      const hasOfficialRoster = Boolean(pdfMembership || Array.isArray(officialCompanyMemberRosterConfig[companyId]));
      const configuredSections = Array.isArray(officialCompanySectionRosterConfig[companyId])
        ? getOfficialCompanySections(companyId)
        : null;
      const legacyPdfSections = pdfMembership
        ? (pdfMembership.layout === 'columns'
          ? pdfMembership.columns.flat()
          : pdfMembership.sections)
        : [];
      const pdfSections = configuredSections || (hasOfficialRoster
        ? (legacyPdfSections.length ? legacyPdfSections : [{ heading: 'Official PDF Order', members: getOfficialCompanyMemberRoster(companyId) }])
        : []);
      const pdfMemberCount = pdfSections.reduce((total, section) => total + section.members.length, 0);
      const personnelCounts = getCompanyPersonnelCounts(companyId, company);
      const captainName = getOfficialCaptainForCompany(companyId);
      stats.innerHTML = `
        <div><h4>MEMBERS</h4><strong>${personnelCounts.member}</strong></div>
        <div><h4>NCOs</h4><strong>${personnelCounts.nco}</strong></div>
        <div><h4>OFFICERS</h4><strong>${personnelCounts.officer}</strong></div>
        <div><h4>C.O — COMMISSIONED OFFICERS</h4><strong>${personnelCounts.commissioned}</strong></div>
      `;

      const details = card.querySelector('.company-details');
      if (details) {
        details.hidden = true;
        if (hasOfficialRoster) {
          details.classList.add('company-pdf-details');
          details.replaceChildren();
          const columns = configuredSections
            ? [configuredSections]
            : (pdfMembership?.layout === 'columns' ? pdfMembership.columns : [pdfSections]);
          const renderColumns = columns.map((sections) => sections.map((section) => ({
            ...section,
            members: Array.isArray(section.members) ? section.members.slice() : []
          })));
          const captainKey = normalizeMemberComparisonKey(captainName);
          if (captainName) {
            let sourceCaptainMoved = false;
            renderColumns.forEach((sections) => {
              sections.forEach((section) => {
                if (sourceCaptainMoved) return;
                const captainIndex = section.members.findIndex((name) => normalizeMemberComparisonKey(name) === captainKey);
                if (captainIndex >= 0) {
                  section.members.splice(captainIndex, 1);
                  sourceCaptainMoved = true;
                }
              });
            });
            if (!renderColumns.length) renderColumns.push([]);
            renderColumns[0].unshift({ key: 'captain', heading: 'COMPANY CAPTAIN', members: [captainName] });
          }
          const columnContainer = document.createElement('div');
          columnContainer.className = pdfMembership?.layout === 'columns'
            ? 'company-pdf-columns'
            : 'company-pdf-columns company-pdf-columns-single';
          let nextMemberSerial = 1;
          renderColumns.forEach((sections) => {
            const column = document.createElement('div');
            column.className = 'company-pdf-column';
            sections.forEach((section) => {
              const sectionElement = document.createElement('section');
              sectionElement.className = 'company-pdf-section';
              const heading = document.createElement('h4');
              heading.textContent = section.heading;
              const members = document.createElement('ol');
              members.className = 'company-pdf-members';
              members.start = nextMemberSerial;
              section.members.forEach((name) => {
                const item = document.createElement('li');
                item.dataset.companySerial = String(nextMemberSerial).padStart(3, '0');
                const display = renderMemberNameWithDivisionId(name, companyId, section.key || getCompanySectionKey(section.heading), nextMemberSerial);
                if (section.key === 'captain') {
                  display.insertBefore(document.createTextNode('Company Captain — '), display.firstChild);
                }
                item.replaceChildren(display);
                members.appendChild(item);
                nextMemberSerial += 1;
              });
              sectionElement.append(heading, members);
              column.appendChild(sectionElement);
            });
            columnContainer.appendChild(column);
          });
          details.appendChild(columnContainer);
          const websiteOnlyMembers = getWebsiteOnlyCompanyMembers(companyId);
          if (websiteOnlyMembers.length) {
            const websiteOnlySection = document.createElement('section');
            websiteOnlySection.className = 'company-pdf-section website-only-members';
            const heading = document.createElement('h4');
            heading.textContent = 'Website-only records';
            const members = document.createElement('ol');
            members.className = 'company-pdf-members website-only-member-list';
            members.start = nextMemberSerial;
            websiteOnlyMembers.forEach(({ name, sectionKey }) => {
              const item = document.createElement('li');
              item.dataset.companySerial = String(nextMemberSerial).padStart(3, '0');
              const display = renderMemberNameWithDivisionId(name, companyId, sectionKey, nextMemberSerial);
              const note = document.createElement('span');
              note.textContent = `Website-only; ${sectionKey} section; ID unassigned`;
              display.appendChild(note);
              item.appendChild(display);
              members.appendChild(item);
              nextMemberSerial += 1;
            });
            websiteOnlySection.append(heading, members);
            details.appendChild(websiteOnlySection);
          }
        }
        if (!card.querySelector('.company-toggle')) {
          const toggle = document.createElement('button');
          toggle.type = 'button';
          toggle.className = 'company-toggle';
          toggle.textContent = 'View Members';
          card.insertBefore(toggle, details);
        }
      }

      let nextMemberSerial = 1;
      card.querySelectorAll('.company-list').forEach((sourceList) => {
        let list = sourceList;
        if (list.tagName !== 'OL') {
          const orderedList = document.createElement('ol');
          orderedList.className = list.className;
          orderedList.dataset.list = list.dataset.list;
          list.replaceWith(orderedList);
          list = orderedList;
        }
        const type = list.dataset.list;
        const items = company[type] || [];
        list.start = nextMemberSerial;
        list.innerHTML = '';
        items.forEach((item) => {
          const li = document.createElement('li');
          li.dataset.companySerial = String(nextMemberSerial).padStart(3, '0');
          const content = renderMemberNameWithDivisionId(item, companyId, type, nextMemberSerial);
          li.replaceChildren(content);
          list.appendChild(li);
          nextMemberSerial += 1;
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
    const companyDocuments = listCompanyDocumentsForCompany(companyId);
    dashboardGrid.innerHTML = '';

    const companyCard = document.createElement('div');
    companyCard.className = 'dashboard-card';
    const officialCompanySerial = officialCompanySerialByRecordId[companyId];
    companyCard.innerHTML = `
      <h4>${officialCompanySerial ? `Company ${officialCompanySerial} - ` : ''}${company.name}</h4>
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

    const memberIdSummary = document.createElement('div');
    memberIdSummary.className = 'dashboard-card';
    const summaryList = document.createElement('ul');
    summaryList.className = 'member-division-summary';
    const captainName = getOfficialCaptainForCompany(companyId);
    if (captainName) {
      const captainHeading = document.createElement('li');
      captainHeading.className = 'member-division-section-heading';
      captainHeading.textContent = 'COMPANY CAPTAIN';
      summaryList.appendChild(captainHeading);
      const captainItem = document.createElement('li');
      const captainDisplay = renderMemberNameWithDivisionId(captainName, companyId, 'captain');
      captainItem.appendChild(captainDisplay);
      summaryList.appendChild(captainItem);
    }
    let captainSourceMoved = false;
    getOfficialCompanySections(companyId).forEach((section) => {
      const headingItem = document.createElement('li');
      headingItem.className = 'member-division-section-heading';
      headingItem.textContent = section.heading;
      summaryList.appendChild(headingItem);
      section.members.forEach((memberName) => {
        if (captainName && !captainSourceMoved && normalizeMemberComparisonKey(memberName) === normalizeMemberComparisonKey(captainName)) {
          captainSourceMoved = true;
          return;
        }
        const divisionId = getOfficialMemberDivisionId(companyId, memberName);
        const item = document.createElement('li');
        const name = document.createElement('span');
        name.textContent = memberName;
        const id = document.createElement('strong');
        id.textContent = divisionId || 'ID unresolved';
        item.append(name, id);
        summaryList.appendChild(item);
      });
    });
    const websiteOnlyMembers = getWebsiteOnlyCompanyMembers(companyId);
    if (websiteOnlyMembers.length) {
      const headingItem = document.createElement('li');
      headingItem.className = 'member-division-section-heading';
      headingItem.textContent = 'Website-only records';
      summaryList.appendChild(headingItem);
      websiteOnlyMembers.forEach(({ name, sectionKey }) => {
        const item = document.createElement('li');
        const nameText = document.createElement('span');
        nameText.textContent = name;
        const id = document.createElement('strong');
        id.textContent = `Website-only; ${sectionKey}; ID unassigned`;
        item.append(nameText, id);
        summaryList.appendChild(item);
      });
    }
    memberIdSummary.innerHTML = '<h4>Official Division IDs</h4>';
    memberIdSummary.appendChild(summaryList);
    dashboardGrid.appendChild(companyCard);
    dashboardGrid.appendChild(memberIdSummary);

    const pdfCard = document.createElement('div');
    pdfCard.className = 'dashboard-card';
    pdfCard.innerHTML = `
      <h4>Company PDFs</h4>
      <p class="dashboard-intro">Official documents assigned to ${company.name}.</p>
      ${companyDocuments.length ? companyDocuments.map((documentEntry) => `
        <div class="company-document-item">
          <p><strong>${escapeHtml(documentEntry.documentName || documentEntry.filename || 'Company PDF')}</strong></p>
          <div class="dashboard-actions">
            <a class="btn btn-outline" href="${escapeHtml(documentEntry.src || '#')}" target="_blank" rel="noopener">Open PDF</a>
            <a class="btn btn-secondary" href="${escapeHtml(documentEntry.src || '#')}" download="${escapeHtml(documentEntry.filename || documentEntry.documentName || 'company-document.pdf')}">Download</a>
          </div>
        </div>
      `).join('') : '<p>No company PDFs have been uploaded for this company yet.</p>'}
    `;
    dashboardGrid.appendChild(pdfCard);

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
      <label><span>Add Pictures</span><input type="file" class="gallery-upload-input" accept="image/*" multiple /></label>
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

    const documentManagementCard = document.createElement('div');
    documentManagementCard.className = 'dashboard-card pdf-management-card';
    documentManagementCard.innerHTML = `
      <h4>Company PDF Management</h4>
      <p class="dashboard-intro">Upload a PDF for a company and give it a proper display name that visitors will see.</p>
      <label><span>Company</span><select class="company-pdf-company">${getOfficialCompanyEntries().map(([companyId, company]) => `<option value="${companyId}">${escapeHtml(getCompanyDisplayName(companyId, company))}</option>`).join('')}</select></label>
      <label><span>Document Name</span><input type="text" class="company-pdf-name" placeholder="8th Awori Lagos Company Training Handbook" /></label>
      <label><span>PDF File</span><input type="file" class="company-pdf-input" accept="application/pdf" /></label>
      <div class="dashboard-actions"><button type="button" class="btn btn-gold" data-company-pdf-action="upload">Upload PDF</button></div>
      <div class="company-pdf-admin-list"></div>
    `;
    commanderDashboardGrid.appendChild(documentManagementCard);
    const companyPdfAdminList = documentManagementCard.querySelector('.company-pdf-admin-list');
    const companyPdfEntries = Array.isArray(state.companyDocuments) ? state.companyDocuments : [];
    companyPdfAdminList.innerHTML = companyPdfEntries.length ? companyPdfEntries.map((documentEntry) => `
      <div class="gallery-admin-item"><span>${escapeHtml(documentEntry.documentName || documentEntry.filename || 'Company PDF')} (${escapeHtml(getCompanyDisplayName(documentEntry.companyId, state.companyData[documentEntry.companyId]))})</span><button type="button" class="btn btn-secondary" data-company-pdf-action="delete" data-document-id="${escapeHtml(documentEntry.id || documentEntry.src)}">Delete</button></div>
    `).join('') : '<p>No company PDFs uploaded yet.</p>';

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

    getOfficialCompanyEntries().forEach(([companyId, company]) => {
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
          <span>MEMBERS</span>
          <input type="number" name="total-members-${companyId}" value="${getCompanyMemberCount(company, companyId)}" readonly />
        </label>
        <label>
          <span>NCOs</span>
          <input type="number" name="total-ncos-${companyId}" value="${getCompanyNcoCount(company, companyId)}" readonly />
        </label>
        <label>
          <span>OFFICERS</span>
          <input type="number" name="total-officers-${companyId}" value="${getCompanyOfficerCount(company, companyId)}" readonly />
        </label>
        <label>
          <span>C.O — COMMISSIONED OFFICERS</span>
          <input type="number" name="total-commissioned-officers-${companyId}" value="${getCompanyCommissionedOfficerCount(company, companyId)}" readonly />
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
      const fixedNames = {
        'rs-major-general-e-b-adegbite': 'RS MAJOR GENERAL E. B. ADEGBITE',
        'rs-brigadier-general-s-oludahunsi': 'RS BRIGADIER GENERAL S. OLUDAHUNSI',
        'national-organizing-secretary': 'RS MAJOR GENERAL E. B. ADEGBITE',
        'assistant-national-organizing-secretary': 'RS BRIGADIER GENERAL S. OLUDAHUNSI'
      };
      const fixedPhotos = {
        'rs-major-general-e-b-adegbite': './RS Major General E. B. Adegbite.jpeg',
        'rs-brigadier-general-s-oludahunsi': 'pastor s.o oladahusi.jpeg',
        'national-organizing-secretary': './RS Major General E. B. Adegbite.jpeg',
        'assistant-national-organizing-secretary': 'pastor s.o oladahusi.jpeg'
      };
      const profileName = fixedNames[role.key] || profile.name || '';
      const profilePhoto = fixedPhotos[role.key] || profile.photo || '';
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
          <input type="text" name="${role.key}-name" value="${profileName.replace(/"/g, '&quot;')}" />
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
        saveCaptainRequests();
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
        ...savedCompany,
        anchor: sectionValues.anchor,
        junior: sectionValues.junior,
        intermediate: sectionValues.intermediate,
        senior: sectionValues.senior,
        officer: sectionValues.officer
      };
      const totalMembers = getCompanyMemberCount(companyCounts);
      const totalNcos = getCompanyNcoCount(companyCounts);
      const totalOfficers = getCompanyOfficerCount(companyCounts);
      const totalCommissionedOfficers = getCompanyCommissionedOfficerCount(companyCounts);
      const name = (formData.get(`company-name-${companyId}`) || '')
        .toString()
        .trim() || savedCompany?.name || `Company ${companyId}`;

      const noChanges =
        savedCompany?.name === name &&
        Number(savedCompany?.totalMembers || 0) === totalMembers &&
        Number(savedCompany?.totalNcos || 0) === totalNcos &&
        Number(savedCompany?.totalOfficers || 0) === totalOfficers &&
        Number(savedCompany?.totalCommissionedOfficers || 0) === totalCommissionedOfficers &&
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
        ...savedCompany,
        name,
        ...sectionValues,
        active: sectionValues.anchor,
        inactive: sectionValues.junior,
        officers: sectionValues.officer,
        totalMembers,
        totalNcos,
        totalOfficers,
        totalCommissionedOfficers
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
        const companyCounts = { ...(state.companyData[companyId] || {}), ...sectionValues };
        const totalMembers = getCompanyMemberCount(companyCounts);
        const totalNcos = getCompanyNcoCount(companyCounts);
        const totalOfficers = getCompanyOfficerCount(companyCounts);
        const totalCommissionedOfficers = getCompanyCommissionedOfficerCount(companyCounts);

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
          totalOfficers,
          totalCommissionedOfficers
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
            Number(expected.totalCommissionedOfficers || 0) === Number(current.totalCommissionedOfficers || 0) &&
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
          ...(state.companyData[companyId] || {}),
          name: current.name,
          ...current.sectionValues,
          active: current.sectionValues.anchor,
          inactive: current.sectionValues.junior,
          officers: current.sectionValues.officer,
          totalMembers: current.totalMembers,
          totalNcos: current.totalNcos,
          totalOfficers: current.totalOfficers,
          totalCommissionedOfficers: current.totalCommissionedOfficers
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

    commanderDashboardGrid?.addEventListener('click', async (event) => {
      const pdfActionButton = event.target.closest('[data-company-pdf-action]');
      if (pdfActionButton) {
        const action = pdfActionButton.dataset.companyPdfAction;
        if (action === 'upload') {
          const card = pdfActionButton.closest('.pdf-management-card');
          const companyId = card?.querySelector('.company-pdf-company')?.value || '';
          const fileInput = card?.querySelector('.company-pdf-input');
          const documentName = card?.querySelector('.company-pdf-name')?.value || '';
          const file = fileInput?.files?.[0];
          if (!companyId || !file || !documentName.trim()) {
            showToast('Select a company, document name, and PDF file before uploading.');
            return;
          }
          try {
            const item = await apiUploadCompanyDocument(file, companyId, documentName.trim(), state.activeCommanderEmail || 'admin');
            if (!item) {
              throw new Error('PDF upload returned no data');
            }
            state.companyDocuments = normalizeCompanyDocuments([...(Array.isArray(state.companyDocuments) ? state.companyDocuments : []), item]);
            await saveAppState(true);
            buildCommanderDashboard();
            showToast('Company PDF uploaded successfully.');
          } catch (error) {
            console.error('PDF upload failed:', error);
            showToast(error.message || 'PDF upload failed.');
          }
          return;
        }
        if (action === 'delete') {
          const documentId = pdfActionButton.dataset.documentId;
          if (!documentId) return;
          state.companyDocuments = (Array.isArray(state.companyDocuments) ? state.companyDocuments : []).filter((documentEntry) => String(documentEntry.id || documentEntry.src) !== String(documentId));
          await saveAppState(true);
          buildCommanderDashboard();
          showToast('Company PDF deleted.');
          return;
        }
      }

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
        try {
          const uploadedItems = await apiUploadGalleryImages(pendingGalleryFiles);
          if (!uploadedItems.length) {
            throw new Error('No gallery pictures were saved');
          }
          state.galleryItems = [...(state.galleryItems || []), ...uploadedItems];
          const saved = await saveAppState(true);
          if (saved) {
            pendingGalleryFiles = [];
            renderGallery();
            buildCommanderDashboard();
            showToast(`${uploadedItems.length} gallery picture(s) published`);
          } else {
            throw new Error('Gallery publish did not save to the backend');
          }
        } catch (error) {
          console.error('Gallery publish failed:', error);
          showToast(error.message || 'Gallery picture publish failed.');
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
              comp.totalCommissionedOfficers = getCompanyCommissionedOfficerCount(comp);
              comp.totalCommissionedOfficers = getCompanyCommissionedOfficerCount(comp);
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
    renderTotalMembershipList();
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
    bindMembershipLookup();
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
      checkBackendHealth().catch(() => {});
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
    renderNews();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

