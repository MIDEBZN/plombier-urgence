// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.plombierurgence.be',
  trailingSlash: 'always',
  integrations: [sitemap()],
  redirects: {
    '/blog/tarif-plombier/': {
      status: 301,
      destination: '/tarifs/'
    },
    '/blog/deboucher-canalisation/': {
      status: 301,
      destination: '/service/debouchage-canalisation/'
    },
    '/blog/deboucher-wc/': {
      status: 301,
      destination: '/service/debouchage-canalisation/'
    },
    '/blog/debouchage-egout-bruxelles-cout/': {
      status: 301,
      destination: '/service/debouchage-canalisation/'
    }
  }
});
