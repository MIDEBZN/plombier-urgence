const fs = require('fs');
const path = require('path');

const blogDir = path.join(__dirname, 'src', 'pages', 'blog');
const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.astro'));

for (const file of files) {
  const content = fs.readFileSync(path.join(blogDir, file), 'utf-8');
  const match = content.match(/const faqs = (\[[\s\S]*?\]);/);
  if (match) {
    try {
      JSON.parse(match[1]);
    } catch (e) {
      console.log(`Error parsing JSON in ${file}: ${e.message}`);
    }
  }
}
