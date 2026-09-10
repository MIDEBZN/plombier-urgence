const fs = require('fs');
const path = require('path');

const DIST_DIR = path.join(__dirname, '../dist');
const REPORTS_DIR = path.join(__dirname, '../reports');

if (!fs.existsSync(REPORTS_DIR)) {
  fs.mkdirSync(REPORTS_DIR, { recursive: true });
}

function getFiles(dir, filesList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getFiles(filePath, filesList);
    } else if (filePath.endsWith('.html')) {
      filesList.push(filePath);
    }
  }
  return filesList;
}

const htmlFiles = getFiles(DIST_DIR);
const SITE_URL = 'https://www.plombierurgence.be';

const inventory = [];
const linkGraph = new Map();

// Helper to extract via regex
function extractMatch(content, regex, defaultVal = '') {
  const match = content.match(regex);
  return match ? match[1].trim() : defaultVal;
}

for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf-8');
  
  // Calculate relative URL
  let relPath = file.replace(DIST_DIR, '').replace(/\\/g, '/');
  if (relPath.endsWith('/index.html')) {
    relPath = relPath.replace('/index.html', '/');
  } else if (relPath.endsWith('.html')) {
    relPath = relPath.replace('.html', '/');
  }
  if (!relPath.startsWith('/')) relPath = '/' + relPath;
  if (relPath === '//') relPath = '/';

  const fullUrl = SITE_URL + relPath;
  
  // Extract Metadata
  const title = extractMatch(content, /<title[^>]*>([\s\S]*?)<\/title>/);
  const title_length = title.length;
  
  const h1 = extractMatch(content, /<h1[^>]*>([\s\S]*?)<\/h1>/).replace(/(<([^>]+)>)/ig, '').trim();
  
  let meta_description = extractMatch(content, /<meta\s+name=["']description["']\s+content=["']([\s\S]*?)["']/i);
  if (!meta_description) {
     meta_description = extractMatch(content, /<meta\s+content=["']([\s\S]*?)["']\s+name=["']description["']/i);
  }
  const description_length = meta_description.length;

  const canonical = extractMatch(content, /<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i) || 
                    extractMatch(content, /<link\s+href=["']([^"']+)["']\s+rel=["']canonical["']/i);

  let indexable = 'Yes';
  const robots = extractMatch(content, /<meta\s+name=["']robots["']\s+content=["']([^"']+)["']/i);
  if (robots && robots.toLowerCase().includes('noindex')) {
    indexable = 'No';
  }

  // Count words in body (strip script/style first)
  const bodyMatch = content.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  let word_count = 0;
  if (bodyMatch) {
    const textOnly = bodyMatch[1]
      .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
      .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
      .replace(/(<([^>]+)>)/ig, ' ')
      .replace(/\s+/g, ' ')
      .trim();
    word_count = textOnly.split(' ').filter(w => w.length > 0).length;
  }

  // Find outlinks
  const outlinks = [];
  const hrefRegex = /href=["']([^"']+)["']/gi;
  let match;
  while ((match = hrefRegex.exec(content)) !== null) {
    let link = match[1];
    if (link.startsWith('http')) {
      if (link.startsWith(SITE_URL)) {
        link = link.replace(SITE_URL, '');
      } else {
        continue; // external link
      }
    }
    // normalize link
    link = link.split('#')[0].split('?')[0];
    if (link && !link.startsWith('tel:') && !link.startsWith('mailto:')) {
       if (!link.endsWith('/') && !link.includes('.')) link += '/';
       outlinks.push(link);
    }
  }
  
  linkGraph.set(relPath, [...new Set(outlinks)]); // unique outlinks
  
  let template = 'page';
  if (relPath.startsWith('/blog/')) template = 'blog';
  else if (relPath.startsWith('/service/')) template = 'service';
  else if (relPath.startsWith('/zones/')) template = 'location';
  else if (relPath.startsWith('/faq/')) template = 'faq';
  
  inventory.push({
    url: fullUrl,
    relPath: relPath,
    status: 200, // built statically
    indexable,
    canonical,
    title: `"${title.replace(/"/g, '""')}"`,
    title_length,
    meta_description: `"${meta_description.replace(/"/g, '""')}"`,
    description_length,
    h1: `"${h1.replace(/"/g, '""')}"`,
    word_count,
    template,
    cluster: '',
    outlinks_count: outlinks.length,
    redirect_target: '',
    notes: ''
  });
}

// Calculate inlinks
for (const item of inventory) {
  let inlinksCount = 0;
  for (const [source, links] of linkGraph.entries()) {
    if (links.includes(item.relPath) && source !== item.relPath) {
      inlinksCount++;
    }
  }
  item.inlinks_count = inlinksCount;
}

// Write CSV
const header = 'url,status,indexable,canonical,title,title_length,meta_description,description_length,h1,word_count,template,cluster,inlinks,outlinks,redirect_target,notes\n';
const rows = inventory.map(i => 
  `${i.url},${i.status},${i.indexable},${i.canonical},${i.title},${i.title_length},${i.meta_description},${i.description_length},${i.h1},${i.word_count},${i.template},${i.cluster},${i.inlinks_count},${i.outlinks_count},${i.redirect_target},${i.notes}`
).join('\n');

fs.writeFileSync(path.join(REPORTS_DIR, 'seo-url-inventory.csv'), header + rows);
console.log('Inventory generated at reports/seo-url-inventory.csv');
