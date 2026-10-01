(() => {
  const officialMembers = window.RS_TOTAL_MEMBERS.slice();
  const replaceUniqueMember = (oldName, newName) => {
    const matchingIndexes = officialMembers
      .map((name, index) => name === oldName ? index : -1)
      .filter((index) => index !== -1);
    if (matchingIndexes.length !== 1) {
      throw new Error(`Cannot sync official Division roster entry ${oldName}.`);
    }
    officialMembers[matchingIndexes[0]] = newName;
  };

  const insertAfterUniqueMember = (anchorName, memberName) => {
    const matchingIndexes = officialMembers
      .map((name, index) => name === anchorName ? index : -1)
      .filter((index) => index !== -1);
    if (matchingIndexes.length !== 1) {
      throw new Error(`Cannot place official Division roster entry after ${anchorName}.`);
    }
    officialMembers.splice(matchingIndexes[0] + 1, 0, memberName);
  };

  replaceUniqueMember('Abdullahi John O.', 'Abdullahi John Olayiwala');
  insertAfterUniqueMember('Busari Elijah Qudus', 'Daini Tiwalade');
  insertAfterUniqueMember('Oluwadimu Samuel Oluwashindara', 'Oluwole Emmanuel');

  officialMembers.push(
    'Shondunke Michael', 'Owolabi Abigael', 'Ade Alabi', 'Alli Boniface', 'Adeyemi Akerede', 'Ikubiwaoye Mayowa H.',
    'Ogungbonyi Abisola', 'Olatunde Omolola', 'Aurosinmi Taiwo', 'Oluwasegun Alabi', 'Bamnete Ifeoluwa', 'Obochukwu Micheal Oresi',
    'Ibekele Micheal', 'Adewale Michael', 'Ogunbuyi Abigeal', 'Ogungbuyi Busayo', 'Bangbose Ayomide', 'Awoluyi Ayomide',
    'Ajiseluoluwa Akerede', 'Akinwunmi Samuel', 'Omolade Fimola', 'Femitola Rachael', 'Oluwale Emmanuel', 'Agatto Victoria',
    'Kulani Danibola', 'Adefemi Olanirekun', 'TijaniObarobuwa Joseph', 'Oigsope Tasanmi', 'Okuyemi Tomilayo', 'Ala Iretamni',
    'Agba Nathanael', 'Raven Omolosho', 'Okuyemi Fnioluwaoba', 'Agibade Pemisire',
    'Awoyomi Elijah', 'Erujeje Joshua',
    'Adedayo Boluwatife', 'Ademola Success', 'Adekunle Christianah', 'Adepoju Tobiloba', 'Kudabo Victoria', 'Olawuyi Isreal',
    'Oluwunmi Ebunoluwa', 'Oretuga Tosin', 'Adewole Peace', 'Abiola Inioluwa', 'Abioye Oluwakisi', 'Ajani Moreoluwa',
    'Sulaimon Praise Iyanuoluwa', 'Adewunmi Oluwatunmise Naomi',
    'Albert Ndidi Blessing', 'Shoyemi Damilola Abidemi', 'Ademola Esther Omolade', 'Albert Darasimi Hannah',
    'Albert Emmanuel Chukwudi', 'Fagbuaro Esther Jesumolawa', 'Ojo Mercy Omolola', 'Orelusi Testimony Oluwasemilore',
    'Olujumoke Aramide', 'Adenisimi David', 'Adenuga Good luck', 'Otunmakinwa Victoria', 'Ajayi Tope', 'Daini Akinsanmi',
    'Ifeoluwa Oluwakemi', 'Saidi Adunola', 'Alonge Victor', 'Oludele Pecious', 'Dlagoke Israel', 'Dluvole Pelumi', 'Oludele Semilog',
    'Afusat Ajiboye', 'Elizabeth Salako', 'Olusesi Alex', 'Anifowoshe Ogooluwa', 'Olusesi Israel', 'Akinogun Abigail',
    'Anifowoshe Ifeoluwa', 'Eldad M. Rapheal', 'Akinogun Glory', 'Agboola David', 'Anifowoshe Ire', 'Akinsiku Daniel',
    'Allen Destiny', 'Medad J. Rapheal', 'Fatunbi Prevail'
  );
  window.RS_TOTAL_MEMBERS = officialMembers;
})();