const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

const targetDir = path.join(__dirname, 'src');

let count = 0;
walkDir(targetDir, function(filePath) {
  if (filePath.endsWith('.astro') || filePath.endsWith('.js') || filePath.endsWith('.ts') || filePath.endsWith('.css') || filePath.endsWith('.md')) {
    let content = fs.readFileSync(filePath, 'utf8');
    if (content.includes('470123456')) {
      let updated = content.replace(/470123456/g, '465685158');
      fs.writeFileSync(filePath, updated, 'utf8');
      count++;
    }
  }
});

console.log('Replaced in ' + count + ' files.');
