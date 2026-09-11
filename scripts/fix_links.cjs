const fs = require('fs');
const path = require('path');

function walk(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
  });
}

let modifiedFiles = 0;
walk('./src', function(filePath) {
  if (filePath.endsWith('.astro') || filePath.endsWith('.md') || filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    
    // Fix non-www to www and http to https
    content = content.replace(/http:\/\/plombierurgence\.be/g, 'https://www.plombierurgence.be');
    content = content.replace(/http:\/\/www\.plombierurgence\.be/g, 'https://www.plombierurgence.be');
    content = content.replace(/https:\/\/plombierurgence\.be/g, 'https://www.plombierurgence.be');
    
    // Fix /services/ to /service/ (for specific known replacements)
    content = content.replace(/href=\"(\/?)services\/(debouchage-canalisation|recherche-fuite|reparation-robinetterie|depannage-chaudiere|urgence-plomberie|debouchage-charleroi)\/?\"/g, 'href=\"$1service/$2/\"');
    
    // Enforce trailing slashes on local paths starting with /
    // e.g. href="/devis" -> href="/devis/"
    content = content.replace(/href=\"(\/[^\"#\.\?]+?)([^\/])\"/g, 'href=\"$1$2/\"');
    
    // Enforce trailing slashes on absolute URLs
    content = content.replace(/href=\"(https:\/\/www\.plombierurgence\.be\/[^\"#\.\?]+?)([^\/])\"/g, 'href=\"$1$2/\"');

    if (original !== content) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Fixed:', filePath);
      modifiedFiles++;
    }
  }
});
console.log('Total files modified:', modifiedFiles);
