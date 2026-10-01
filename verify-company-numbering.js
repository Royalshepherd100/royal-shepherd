const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');

const appSource = fs.readFileSync('app.js', 'utf8');

function extractObject(name, sandbox = {}) {
  const declaration = appSource.indexOf(`const ${name} =`);
  assert.notEqual(declaration, -1, `Missing ${name} in app.js`);
  const start = appSource.indexOf('{', declaration);
  let depth = 0;
  let quote = '';
  let escaped = false;
  for (let index = start; index < appSource.length; index += 1) {
    const character = appSource[index];
    if (quote) {
      if (escaped) escaped = false;
      else if (character === '\\') escaped = true;
      else if (character === quote) quote = '';
      continue;
    }
    if (character === '"' || character === "'" || character === '`') {
      quote = character;
    } else if (character === '{') {
      depth += 1;
    } else if (character === '}' && --depth === 0) {
      return vm.runInNewContext(`(${appSource.slice(start, index + 1)})`, sandbox);
    }
  }
  throw new Error(`Unclosed ${name} object in app.js`);
}

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

function getNameTokenCount(name) {
  const key = normalizeMemberComparisonKey(name);
  return key ? key.split(' ').length : 0;
}

const masterContext = { window: {} };
vm.createContext(masterContext);
vm.runInContext(fs.readFileSync('membership-data.js', 'utf8'), masterContext);
vm.runInContext(fs.readFileSync('official-division-serials.js', 'utf8'), masterContext);
const masterNames = Array.from(masterContext.window.RS_TOTAL_MEMBERS);
const textMaster = fs.readFileSync('AGBALA-ITURA DIVISION SERIAL STRENGTH.txt', 'utf8')
  .split(/\r?\n/)
  .map((line) => line.match(/^\s*(\d+)\.\s*(.*?)\s*$/))
  .filter(Boolean)
  .map((match) => ({ serial: Number(match[1]), name: match[2] }));

assert.equal(masterNames.length, textMaster.length, 'Runtime master count differs from the numbered Division list');
textMaster.forEach(({ serial, name }, index) => {
  assert.equal(serial, index + 1, `Master serial gap or reorder at ${serial}`);
  assert.equal(normalizeMemberComparisonKey(masterNames[index]), normalizeMemberComparisonKey(name), `Runtime master differs at serial ${serial}`);
});

const memberRosters = extractObject('officialCompanyMemberRosterConfig');
const sectionRosters = extractObject('officialCompanySectionRosterConfig', { officialCompanyMemberRosterConfig: memberRosters });
const captainAliases = extractObject('captainDivisionNameAliases');
const companyContext = { window: {} };
vm.createContext(companyContext);
vm.runInContext(fs.readFileSync('coy-membership-data.js', 'utf8'), companyContext);
const coyMembership = companyContext.window.RS_COY_MEMBERSHIP || {};
const indexHtml = fs.readFileSync('index.html', 'utf8');
const captainNames = new Map();
for (const match of indexHtml.matchAll(/<article\b[^>]*data-company="(\d+)"[^>]*>([\s\S]*?)<\/article>/g)) {
  const captain = match[2].match(/<strong>Captain:<\/strong>\s*([^<]+)/i)?.[1]?.trim();
  if (captain && !/^(?:not provided|not available)$/i.test(captain)) captainNames.set(match[1], captain);
}

function getCompanyCandidates(companyId) {
  const source = coyMembership[String(companyId)];
  const sections = (source
    ? (source.layout === 'columns' ? source.columns.flat() : source.sections)
    : sectionRosters[companyId] || [])
    .filter((section) => !/\b255th\b/i.test(section.heading || ''));
  const captainName = captainNames.get(String(companyId)) || '';
  const candidates = [];
  if (captainName) candidates.push({ name: captainName, sectionKey: 'captain' });
  sections.forEach((section) => {
    (section.members || []).forEach((name) => {
      if (!captainName || normalizeMemberComparisonKey(name) !== normalizeMemberComparisonKey(captainName)) {
        candidates.push({ name, sectionKey: section.key || section.heading || '' });
      }
    });
  });
  return candidates;
}

const originalMasterCount = 475;
const supplementalMasterNames = masterNames.slice(originalMasterCount);
const supplementalMasterKeys = supplementalMasterNames.map(normalizeMemberComparisonKey);
const supplementalMasterKeySet = new Set(supplementalMasterKeys);
assert.equal(masterNames.length, 561, 'Expected the 475-entry Division master plus 86 supported additions');
assert.equal(supplementalMasterNames.length, 86, 'Unexpected supplemental member count');
assert.equal(supplementalMasterKeySet.size, supplementalMasterKeys.length, 'Duplicate supplemental names were added');
const separate255thNames = coyMembership['4'].columns.flat()
  .filter((section) => /\b255th\b/i.test(section.heading || ''))
  .flatMap((section) => section.members || []);
assert.equal(separate255thNames.length, 22, 'The separate 255th roster must remain intact and unnumbered as Company 04');
const supplementalSourceOrder = [];
const supplementalOwners = new Map();
for (let companyId = 1; companyId <= 9; companyId += 1) {
  getCompanyCandidates(companyId).forEach((entry) => {
    const key = normalizeMemberComparisonKey(entry.name);
    if (!supplementalMasterKeySet.has(key)) return;
    supplementalSourceOrder.push(key);
    supplementalOwners.set(key, (supplementalOwners.get(key) || 0) + 1);
  });
}
assert.deepEqual(supplementalSourceOrder, supplementalMasterKeys, 'Supplemental serials do not follow company/list source order');
supplementalOwners.forEach((ownerCount, key) => assert.equal(ownerCount, 1, `Supplemental member ${key} is not assigned to exactly one company`));

const serialsByName = new Map();
const duplicateMasterNames = new Set();
masterNames.forEach((name, index) => {
  const key = normalizeMemberComparisonKey(name);
  if (serialsByName.has(key)) duplicateMasterNames.add(key);
  else serialsByName.set(key, index + 1);
});
duplicateMasterNames.forEach((key) => serialsByName.delete(key));

const report = [];
const generalSerialOwners = new Map();
for (let companyId = 1; companyId <= 9; companyId += 1) {
  const candidates = getCompanyCandidates(companyId);

  const seenNames = new Set();
  const seenGeneralSerials = new Set();
  const assignments = candidates
    .map((entry, index) => {
      const key = normalizeMemberComparisonKey(entry.name);
      const lookupName = entry.sectionKey === 'captain'
        ? captainAliases[companyId] || entry.name
        : entry.name;
      return { ...entry, index, key, generalSerial: serialsByName.get(normalizeMemberComparisonKey(lookupName)) || null };
    })
    .filter((entry) => entry.key && entry.generalSerial && getNameTokenCount(entry.name) >= 2)
    .sort((first, second) => first.generalSerial - second.generalSerial || first.index - second.index)
    .filter((entry) => {
      if (seenNames.has(entry.key) || seenGeneralSerials.has(entry.generalSerial)) return false;
      seenNames.add(entry.key);
      seenGeneralSerials.add(entry.generalSerial);
      return true;
    })
    .map((entry, index) => ({ ...entry, companySerial: index + 1 }));

  assert.ok(assignments.length > 0, `Company ${companyId} had no records to validate`);
  const companySerials = new Set();
  let previousGeneralSerial = 0;
  assignments.forEach((entry) => {
    assert.equal(entry.companySerial, companySerials.size + 1, `Company ${companyId} suffix is not continuous`);
    assert.ok(!companySerials.has(entry.companySerial), `Duplicate company suffix ${entry.companySerial} in ${companyId}`);
    companySerials.add(entry.companySerial);
    assert.ok(entry.generalSerial > previousGeneralSerial, `Company ${companyId} is not ordered by master serial`);
    previousGeneralSerial = entry.generalSerial;
    assert.equal(serialsByName.get(normalizeMemberComparisonKey(entry.name)) || serialsByName.get(normalizeMemberComparisonKey(captainAliases[companyId] || '')), entry.generalSerial, `Incorrect master serial for ${entry.name}`);
    assert.match(`AI.D${String(companyId).padStart(2, '0')}/${String(entry.generalSerial).padStart(3, '0')}/${String(entry.companySerial).padStart(3, '0')}`, /^AI\.D\d{2}\/\d{3}\/\d{3}$/);
    const masterName = masterNames[entry.generalSerial - 1];
    const priorOwner = generalSerialOwners.get(entry.generalSerial);
    assert.ok(!priorOwner, `General serial ${entry.generalSerial} is assigned more than once: ${priorOwner} and company ${companyId}`);
    generalSerialOwners.set(entry.generalSerial, `company ${companyId}: ${normalizeMemberComparisonKey(masterName)}`);
  });

  const numberedKeys = new Set(assignments.map((entry) => entry.key));
  candidates.forEach((entry) => {
    const key = normalizeMemberComparisonKey(entry.name);
    const lookupName = entry.sectionKey === 'captain' ? captainAliases[companyId] || entry.name : entry.name;
    const isEligible = serialsByName.has(normalizeMemberComparisonKey(lookupName)) && getNameTokenCount(entry.name) >= 2;
    if (!isEligible) assert.ok(!numberedKeys.has(key), `Non-master or one-name entry received a number: ${entry.name}`);
  });

  report.push({ company: String(companyId).padStart(2, '0'), numberedMembers: assignments.length, unmatchedOrOneName: candidates.length - assignments.length, first: assignments[0].generalSerial, last: assignments.at(-1).generalSerial });
}

assert.equal(`AI.D08/${String(7).padStart(3, '0')}/${String(1).padStart(3, '0')}`, 'AI.D08/007/001');
console.log(JSON.stringify({
  masterEntries: masterNames.length,
  supplementalMembersAdded: supplementalMasterNames.length,
  firstSupplementalSerial: originalMasterCount + 1,
  finalDivisionSerial: masterNames.length,
  duplicateMasterNames: duplicateMasterNames.size,
  separate255thEntriesExcluded: separate255thNames.length,
  companies: report
}, null, 2));
