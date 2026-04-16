// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://clg-f-legros.fr',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/draft/'),
      serialize(item) {
        if (item.url === 'https://clg-f-legros.fr/') {
          item.priority = 1.0;
          item.changefreq = 'daily';
        } else if (item.url.includes('/categorie/')) {
          item.priority = 0.8;
          item.changefreq = 'weekly';
        } else if (item.url.includes('/articles/')) {
          item.priority = 0.6;
          item.changefreq = 'monthly';
        } else {
          item.priority = 0.5;
          item.changefreq = 'monthly';
        }
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});