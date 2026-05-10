// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

import node from '@astrojs/node';

export default defineConfig({
  site: 'https://rabagas-suites.com',

  // output: 'static' is default — API routes use prerender = false

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'el'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  image: {
    domains: [],
  },

  vite: {
    css: {
      preprocessorOptions: {},
    },
    plugins: [tailwindcss()],
  },

  integrations: [sitemap()],

  adapter: node({
    mode: 'standalone',
  }),
});