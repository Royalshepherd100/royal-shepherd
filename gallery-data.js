const galleryCategoryLabels = {
  parades: 'PARADES PICS',
  band: 'BAND PICS',
  rehearsals: 'REHEARSAL PICS',
  'moments-enjoyment': 'MOMENTS OF ENJOYMENT',
  exams: 'EXAMS PICS',
  trophies: 'TROPHIES CABINET',
  'member-catalogue': 'MEMBER CATALOGUE'
};

function createGalleryItems(prefix, count, category, titlePrefix = prefix) {
  return Array.from({ length: count }, (_, index) => {
    const number = index + 1;
    const filename = `${prefix} (${number}).jpeg`;
    return {
      src: `image/${filename}`,
      category,
      title: `${titlePrefix} ${number}`,
      description: galleryCategoryLabels[category]
    };
  });
}

window.galleryData = [
  {
    src: 'image/parade.png',
    category: 'parades',
    title: 'Parade',
    description: galleryCategoryLabels.parades
  },
  ...createGalleryItems('parade', 63, 'parades', 'Parade'),
  ...createGalleryItems('band', 46, 'band', 'Band'),
  ...createGalleryItems('rehearsal', 2, 'rehearsals', 'Rehearsal'),
  { src: 'image/exam.jpeg', category: 'exams', title: 'Exam 0', description: galleryCategoryLabels.exams },
  ...createGalleryItems('exam', 11, 'exams', 'Exam'),
  ...createGalleryItems('members cat', 84, 'member-catalogue', 'Unmatched member photo')
    .map((item) => ({
      ...item,
      description: 'Member Catalogue. Name not stored in the repository.'
    }))
];