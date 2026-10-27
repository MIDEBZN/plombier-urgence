// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.plombierurgence.be',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/lp/'),
      lastmod: new Date(),
      serialize(item) {
        item.lastmod = new Date().toISOString();
        return item;
      }
    })
  ]
});
