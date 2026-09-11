const fs = require('fs');
const path = require('path');

const vercelPath = path.join('./', 'vercel.json');
let vercel = JSON.parse(fs.readFileSync(vercelPath, 'utf8'));
if (!vercel.redirects) vercel.redirects = [];

const fix404 = fs.readFileSync(path.join('./reports', '404_FIXES.csv'), 'utf8').split('\n');
let newRedirectsCount = 0;
for (let i = 1; i < fix404.length; i++) {
    if (!fix404[i]) continue;
    let parts = fix404[i].match(/("[^"]+"|[^",]+)/g);
    if (!parts || parts.length < 5) continue;
    
    let oldUrlStr = parts[0].replace(/"/g, '');
    let action = parts[4].replace(/"/g, '');
    let newUrlStr = parts[2].replace(/"/g, '');
    
    if (action.includes('301 Redirect') && newUrlStr) {
        try {
            let oldPath = new URL(oldUrlStr).pathname;
            let newPath = new URL(newUrlStr).pathname;
            
            // Check if redirect already exists
            let exists = vercel.redirects.find(r => r.source === oldPath || r.source === oldPath + '(.*)');
            if (!exists && oldPath !== newPath) {
                vercel.redirects.push({
                    source: oldPath,
                    destination: newPath,
                    permanent: true
                });
                newRedirectsCount++;
            }
        } catch (e) {
            console.error('Invalid URL:', oldUrlStr, newUrlStr);
        }
    }
}

const fixRedirect = fs.readFileSync(path.join('./reports', 'REDIRECT_FIXES.csv'), 'utf8').split('\n');
for (let i = 1; i < fixRedirect.length; i++) {
    if (!fixRedirect[i]) continue;
    let parts = fixRedirect[i].match(/("[^"]+"|[^",]+)/g);
    if (!parts || parts.length < 4) continue;
    
    let sourceUrl = parts[0].replace(/"/g, '');
    let finalUrl = parts[3].replace(/"/g, '');
    
    if (sourceUrl && finalUrl && sourceUrl !== finalUrl) {
        try {
            let oldPath = new URL(sourceUrl).pathname;
            let newPath = new URL(finalUrl).pathname;
            
            let exists = vercel.redirects.find(r => r.source === oldPath || r.source === oldPath + '(.*)');
            if (!exists && oldPath !== newPath) {
                vercel.redirects.push({
                    source: oldPath,
                    destination: newPath,
                    permanent: true
                });
                newRedirectsCount++;
            }
        } catch (e) {}
    }
}

fs.writeFileSync(vercelPath, JSON.stringify(vercel, null, 4));
console.log('Added ' + newRedirectsCount + ' new redirects to vercel.json');
