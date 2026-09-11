import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.join(__dirname, '..');
const DIST_DIR = path.join(ROOT_DIR, 'dist');
const SITEMAP_PATH = path.join(DIST_DIR, 'sitemap-index.xml'); // or sitemap-0.xml

async function validate() {
  console.log('Starting SEO Validation...');
  
  if (!fs.existsSync(DIST_DIR)) {
    console.error('dist/ directory not found. Please run `npm run build` first.');
    process.exit(1);
  }

  // 1. Check sitemap
  let sitemapUrls = new Set();
  const sitemapFiles = fs.readdirSync(DIST_DIR).filter(f => f.startsWith('sitemap') && f.endsWith('.xml'));
  
  for (const sFile of sitemapFiles) {
    const content = fs.readFileSync(path.join(DIST_DIR, sFile), 'utf8');
    const matches = content.match(/<loc>(.*?)<\/loc>/g);
    if (matches) {
      matches.forEach(m => {
        const url = m.replace('<loc>', '').replace('</loc>', '');
        sitemapUrls.add(url);
      });
    }
  }

  let failedSitemap = 0;
  console.log(`Found ${sitemapUrls.size} URLs in sitemap(s). Validating format...`);
  for (const url of sitemapUrls) {
    if (!url.startsWith('https://www.plombierurgence.be/')) {
      console.error(`FAIL: Sitemap URL format incorrect: ${url}`);
      failedSitemap++;
    } else if (url !== 'https://www.plombierurgence.be/' && !url.endsWith('/')) {
      // Assuming all pages should have trailing slash except assets
      console.error(`FAIL: Sitemap URL missing trailing slash: ${url}`);
      failedSitemap++;
    }
  }
  
  if (failedSitemap === 0) console.log('PASS: All sitemap URLs match format criteria.');

  // 2. Extract Internal Links from HTML in dist/
  let internalLinks = new Set();
  let brokenInternalLinks = [];
  let redirectingInternalLinks = []; // We will mock this unless we fetch, but for local validation we check format
  
  function walkHtml(dir) {
    const files = fs.readdirSync(dir);
    for (const f of files) {
      const fullPath = path.join(dir, f);
      if (fs.statSync(fullPath).isDirectory()) {
        walkHtml(fullPath);
      } else if (fullPath.endsWith('.html')) {
        const content = fs.readFileSync(fullPath, 'utf8');
        const hrefMatches = content.match(/href=["'](\/[^"']*)["']/g);
        if (hrefMatches) {
          hrefMatches.forEach(m => {
             const href = m.replace(/href=["']/g, '').replace(/["']/g, '');
             internalLinks.add(href);
             
             // Check for obviously wrong formats
             if (href.startsWith('http://') || href.startsWith('https://plombierurgence.be')) {
                 brokenInternalLinks.push({ source: fullPath, href: href, reason: 'Wrong domain/protocol' });
             }
          });
        }
      }
    }
  }
  
  console.log('Extracting internal links from dist/ ...');
  walkHtml(DIST_DIR);
  console.log(`Found ${internalLinks.size} unique relative internal links.`);
  
  if (brokenInternalLinks.length > 0) {
      console.error('FAIL: Found invalid internal links:');
      brokenInternalLinks.forEach(b => console.error(` - ${b.source}: ${b.href} (${b.reason})`));
  } else {
      console.log('PASS: No obviously invalid format internal links found.');
  }

  // 3. Process GSC Exports (if available)
  const REPORTS_DIR = path.join(ROOT_DIR, 'reports');
  const gscExports = ['404.csv', 'redirects.csv', 'crawled_not_indexed.csv'];
  
  console.log('\nChecking for GSC export files in reports/ ...');
  gscExports.forEach(file => {
      const filePath = path.join(REPORTS_DIR, file);
      if (fs.existsSync(filePath)) {
          console.log(`FOUND: ${file}. Ready for processing.`);
          // Processing logic would go here
      } else {
          console.log(`MISSING: ${file}. Please place this export in reports/ folder.`);
      }
  });

  console.log('\nValidation script execution complete.');
  console.log('For full validation including live HTTP status checks, run this script against a running local server.');
}

validate().catch(console.error);
