// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://plombierurgence.be',
  trailingSlash: 'always',
  integrations: [sitemap()],
  redirects: {
    '/services': { status: 301, destination: '/services/' },
    '/contact': { status: 301, destination: '/contact/' },
    '/zones': { status: 301, destination: '/zones/' }
  }
});
