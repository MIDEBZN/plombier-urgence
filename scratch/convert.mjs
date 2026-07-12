import fs from 'fs';
import path from 'path';
import TurndownService from 'turndown';

const turndownService = new TurndownService({ headingStyle: 'atx' });

const inputDir = '../src/pages/blog';
const outputDir = '../public/blog';

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const files = fs.readdirSync(inputDir).filter(f => f.endsWith('.astro') && f !== 'index.astro');

for (const file of files) {
  const content = fs.readFileSync(path.join(inputDir, file), 'utf-8');
  
  // Extract title
  let title = '';
  const titleMatch = content.match(/title\s*=\s*["']([^"']+)["']/);
  if (titleMatch) {
    title = titleMatch[1];
  } else {
    const titleMatch2 = content.match(/<Layout[^>]*title=["']([^"']+)["']/);
    if (titleMatch2) title = titleMatch2[1];
  }
  
  // Extract article content
  const articleMatch = content.match(/<article[^>]*>([\s\S]*?)<\/article>/);
  let htmlContent = '';
  if (articleMatch) {
    htmlContent = articleMatch[1];
  } else {
    // If no <article>, maybe try to get everything between Layout
    const layoutMatch = content.match(/<Layout[^>]*>([\s\S]*?)<\/Layout>/);
    if (layoutMatch) {
      htmlContent = layoutMatch[1];
    } else {
      console.warn(`No <article> or <Layout> found in ${file}`);
      continue;
    }
  }

  // Pre-process some Astro specific syntax
  htmlContent = htmlContent.replace(/<CTABanner[^>]*\/>/g, '');
  htmlContent = htmlContent.replace(/<CTABanner[\s\S]*?<\/CTABanner>/g, '');
  htmlContent = htmlContent.replace(/<!--[\s\S]*?-->/g, '');
  
  // Handle Astro variables like {variable} inside HTML. We just remove { and } if they wrap simple text, or strip complex ones.
  // Actually, Turndown might just treat them as text, which is fine, but they look weird in MD.
  // Most astro blogs here are static. Let's just turndown.

  let markdown = turndownService.turndown(htmlContent);
  
  // Clean up markdown
  markdown = markdown.replace(/\n{3,}/g, '\n\n');
  
  // If title is not inside the markdown as # H1, add it
  if (!markdown.includes('# ') && title) {
    markdown = `# ${title}\n\n${markdown}`;
  }
  
  const outPath = path.join(outputDir, file.replace('.astro', '.md'));
  fs.writeFileSync(outPath, markdown);
  console.log(`Converted ${file}`);
}
