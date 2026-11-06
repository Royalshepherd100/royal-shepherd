const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const output = path.join(root, 'dist');
const publicFiles = [
  'index.html',
  'index-v2.html',
  'captain-dashboard.html',
  'commander-dashboard.html',
  'exco-dashboard.html',
  'index.css',
  'app.js',
  'gallery-data.js',
  'membership-data.js',
  'official-division-serials.js',
  'coy-membership-data.js',
  'CNAME',
  'robots.txt',
  'sitemap.xml',
  'RS New Constitution Book.pdf'
];
const publicAssetFiles = [
  'assets/jspdf.umd.min.js',
  'assets/emblem.svg'
];
const publicImageExtensions = new Set(['.avif', '.gif', '.jpeg', '.jpg', '.png', '.svg', '.webp']);

fs.rmSync(output, { recursive: true, force: true });
fs.mkdirSync(output, { recursive: true });

function copyFile(relativePath) {
  const source = path.join(root, relativePath);
  if (!fs.existsSync(source) || !fs.statSync(source).isFile()) return;
  const destination = path.join(output, relativePath);
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.copyFileSync(source, destination);
}

function copyPublicImages(relativePath) {
  const source = path.join(root, relativePath);
  if (!fs.existsSync(source)) return;
  for (const entry of fs.readdirSync(source, { withFileTypes: true })) {
    const childRelativePath = path.join(relativePath, entry.name);
    if (entry.isDirectory()) {
      copyPublicImages(childRelativePath);
    } else if (entry.isFile() && publicImageExtensions.has(path.extname(entry.name).toLowerCase())) {
      copyFile(childRelativePath);
    }
  }
}

publicFiles.forEach(copyFile);
publicAssetFiles.forEach(copyFile);
['image', 'images'].forEach(copyPublicImages);
for (const entry of fs.readdirSync(root, { withFileTypes: true })) {
  if (entry.isFile() && publicImageExtensions.has(path.extname(entry.name).toLowerCase())) {
    copyFile(entry.name);
  }
}