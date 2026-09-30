(() => {
  const officialMembers = window.RS_TOTAL_MEMBERS.slice();
  const insertAfterUniqueMember = (anchorName, memberName) => {
    const matchingIndexes = officialMembers
      .map((name, index) => name === anchorName ? index : -1)
      .filter((index) => index !== -1);
    if (matchingIndexes.length !== 1) {
      throw new Error(`Cannot place official Division roster entry after ${anchorName}.`);
    }
    officialMembers.splice(matchingIndexes[0] + 1, 0, memberName);
  };

  insertAfterUniqueMember('Busari Elijah Qudus', 'Daini Tiwalade');
  insertAfterUniqueMember('Oluwadimu Samuel Oluwashindara', 'Oluwole Emmanuel');
  window.RS_TOTAL_MEMBERS = officialMembers;
})();