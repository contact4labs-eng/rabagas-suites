// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

import node from '@astrojs/node';

export default defineConfig({
  site: 'https://rabagas-suites.com',

  // output: 'static' is default — API routes use prerender = false

  i18n: {
    defaultLocale: 'el',
    locales: ['el', 'en', 'fr'],
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

  integrations: [
    sitemap({
      // Phase 10: emit <xhtml:link rel="alternate" hreflang> annotations
      // per URL so crawlers cluster the 3 locale variants of each page.
      i18n: {
        defaultLocale: 'el',
        locales: {
          el: 'el-GR',
          en: 'en-US',
          fr: 'fr-FR',
        },
      },
      // Astro's built-in i18n hreflang inference relies on path-prefix
      // matching, which only works for `/en/...` (same canonical
      // segments). Our FR routes use translated segments
      // (`/fr/les-suites`, `/fr/notre-histoire`), so the integration
      // can't auto-pair them with `/suites` and `/our-story`.
      //
      // serialize() rewrites every emitted URL with the correct trio
      // of hreflang alternates, computed from the canonical path via
      // a small mapping below.
      serialize(item) {
        const SITE = 'https://rabagas-suites.com';
        // Map an absolute URL → its canonical (locale-stripped) path.
        const stripLocale = (/** @type {string} */ u) => {
          const path = u.replace(SITE, '').replace(/\/$/, '') || '/';
          // FR translated segments → canonical
          const FR_SEGMENT_MAP = [
            ['/fr/les-suites', '/suites'],
            ['/fr/notre-histoire', '/our-story'],
            ['/fr/contact', '/contact'],
            ['/fr', '/'],
          ];
          for (const [from, to] of FR_SEGMENT_MAP) {
            if (path === from) return to;
            if (path.startsWith(from + '/')) return to + path.slice(from.length);
          }
          if (path === '/en') return '/';
          if (path.startsWith('/en/')) return path.slice(3) || '/';
          return path;
        };
        // Map a canonical path → the localized path for the given locale.
        const localize = (/** @type {string} */ canonical, /** @type {string} */ locale) => {
          if (locale === 'el') {
            return canonical === '/' ? '/' : canonical + '/';
          }
          if (locale === 'en') {
            return canonical === '/' ? '/en/' : '/en' + canonical + '/';
          }
          // fr — translated segments
          if (canonical === '/') return '/fr/';
          const FR = [['/suites', '/les-suites'], ['/our-story', '/notre-histoire'], ['/contact', '/contact']];
          for (const [from, to] of FR) {
            if (canonical === from) return '/fr' + to + '/';
            if (canonical.startsWith(from + '/')) return '/fr' + to + canonical.slice(from.length) + '/';
          }
          return '/fr' + canonical + '/';
        };
        const canonical = stripLocale(item.url);
        // Skip non-content paths (404, API, etc.)
        if (canonical.startsWith('/api/') || canonical === '/404') return undefined;
        item.links = [
          { url: SITE + localize(canonical, 'el'), lang: 'el-GR' },
          { url: SITE + localize(canonical, 'en'), lang: 'en-US' },
          { url: SITE + localize(canonical, 'fr'), lang: 'fr-FR' },
          { url: SITE + localize(canonical, 'el'), lang: 'x-default' },
        ];
        return item;
      },
    }),
  ],

  adapter: node({
    mode: 'standalone',
  }),
});