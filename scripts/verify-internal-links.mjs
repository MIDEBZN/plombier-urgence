import fs from 'node:fs';
import path from 'node:path';

const distDir = path.resolve('dist');

function getAllHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir, { withFileTypes: true });
  for (const dirent of list) {
    const fullPath = path.join(dir, dirent.name);
    if (dirent.isDirectory()) {
      results = results.concat(getAllHtmlFiles(fullPath));
    } else if (dirent.name.endsWith('.html')) {
      results.push(fullPath);
    }
  }
  return results;
}

const htmlFiles = getAllHtmlFiles(distDir);
console.log(`Found ${htmlFiles.length} HTML files.`);

// Map file path to canonical URL path
function fileToUrlPath(filePath) {
  let rel = path.relative(distDir, filePath).replace(/\\/g, '/');
  if (rel === 'index.html') return '/';
  if (rel.endsWith('/index.html')) {
    return '/' + rel.replace(/\/index\.html$/, '') + '/';
  }
  return '/' + rel;
}

const allUrls = new Set(htmlFiles.map(fileToUrlPath));
const inLinks = new Map();
const outLinks = new Map();

for (const url of allUrls) {
  inLinks.set(url, new Set());
  outLinks.set(url, new Set());
}

const linkRegex = /href="([^"#?]+)"/g;

for (const filePath of htmlFiles) {
  const fromUrl = fileToUrlPath(filePath);
  const content = fs.readFileSync(filePath, 'utf-8');
  let match;
  while ((match = linkRegex.exec(content)) !== null) {
    let href = match[1];
    if (href.startsWith('https://www.plombierurgence.be')) {
      href = href.replace('https://www.plombierurgence.be', '');
    }
    if (href.startsWith('/')) {
      // Normalize trailing slash
      if (!href.endsWith('/') && !href.includes('.')) {
        href = href + '/';
      }
      if (allUrls.has(href)) {
        outLinks.get(fromUrl).add(href);
        inLinks.get(href).add(fromUrl);
      }
    }
  }
}

// Find orphans or low-inlink pages (excluding thank-you)
const orphans = [];
const lowInlinks = [];

for (const [url, set] of inLinks.entries()) {
  if (url === '/thank-you/') continue;
  if (set.size === 0) {
    orphans.push(url);
  } else if (set.size <= 2) {
    lowInlinks.push({ url, count: set.size });
  }
}

console.log(`\n=== RESULTS ===`);
console.log(`Total URLs: ${allUrls.size}`);
console.log(`True Orphans (0 inlinks): ${orphans.length}`);
if (orphans.length > 0) {
  console.log(`Orphans:`, orphans);
}
console.log(`Low Inlinks (<=2 inlinks): ${lowInlinks.length}`);
if (lowInlinks.length > 0) {
  console.log(`Low Inlinks Sample:`, lowInlinks.slice(0, 5));
}

// Check sample blog article and sample commune
console.log(`\nSample Inlinks for /zones/bruxelles-capitale/ixelles/: ${inLinks.get('/zones/bruxelles-capitale/ixelles/')?.size || 0}`);
console.log(`Sample Inlinks for /zones/hainaut/charleroi/: ${inLinks.get('/zones/hainaut/charleroi/')?.size || 0}`);
console.log(`Sample Inlinks for /zones/province-de-liege/: ${inLinks.get('/zones/province-de-liege/')?.size || 0}`);
console.log(`Sample Inlinks for /blog/artisan-plombier-vs-societe-depannage/: ${inLinks.get('/blog/artisan-plombier-vs-societe-depannage/')?.size || 0}`);
console.log(`Sample Inlinks for /blog/debouchage-colonne-generale-bruxelles/: ${inLinks.get('/blog/debouchage-colonne-generale-bruxelles/')?.size || 0}`);
