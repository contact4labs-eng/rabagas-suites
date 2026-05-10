import type { Locale } from '../data/translations';
import { translate } from '../data/translations';

export type { Locale };

export const defaultLocale: Locale = 'el';
export const locales: Locale[] = ['el', 'en', 'fr'];

/**
 * Path-segment translation for FR.
 * Canonical (EL/EN) path → FR path. Routing structure:
 *   EL (default, no prefix): /suites, /our-story, /contact
 *   EN: /en/suites, /en/our-story, /en/contact
 *   FR: /fr/les-suites, /fr/notre-histoire, /fr/contact
 *
 * The detail-page slug under /fr/les-suites/[slug] keeps the shared English
 * suite slug (e.g. boutique-suite) — translating the *segment*, not the slug,
 * keeps cross-locale linking simple.
 */
const FR_SEGMENTS: Array<[string, string]> = [
  ['/suites', '/les-suites'],
  ['/our-story', '/notre-histoire'],
  ['/contact', '/contact'],
];

export function getLocaleFromUrl(url: URL): Locale {
  const first = url.pathname.split('/').filter(Boolean)[0];
  if (first === 'en') return 'en';
  if (first === 'fr') return 'fr';
  return 'el';
}

/**
 * Convert a canonical path (in EL/EN terms) to its locale-specific URL.
 * Examples:
 *   getLocalizedPath('/', 'el')                      → '/'
 *   getLocalizedPath('/', 'en')                      → '/en/'
 *   getLocalizedPath('/', 'fr')                      → '/fr/'
 *   getLocalizedPath('/suites', 'el')                → '/suites'
 *   getLocalizedPath('/suites', 'en')                → '/en/suites'
 *   getLocalizedPath('/suites', 'fr')                → '/fr/les-suites'
 *   getLocalizedPath('/suites/boutique-suite', 'fr') → '/fr/les-suites/boutique-suite'
 *   getLocalizedPath('/our-story', 'fr')             → '/fr/notre-histoire'
 */
export function getLocalizedPath(canonicalPath: string, locale: Locale): string {
  const path = canonicalPath || '/';
  if (locale === 'el') return path;
  if (locale === 'fr') {
    for (const [from, to] of FR_SEGMENTS) {
      if (path === from || path.startsWith(from + '/')) {
        return '/fr' + to + path.slice(from.length);
      }
    }
    return path === '/' ? '/fr/' : '/fr' + path;
  }
  // EN
  return path === '/' ? '/en/' : '/en' + path;
}

/** Strip locale prefix and reverse FR-translated segments. Returns canonical path. */
export function stripLocale(path: string): string {
  let p = path;
  if (p === '/en' || p.startsWith('/en/')) {
    p = p.replace(/^\/en/, '') || '/';
  } else if (p === '/fr' || p.startsWith('/fr/')) {
    p = p.replace(/^\/fr/, '') || '/';
    for (const [canonical, fr] of FR_SEGMENTS) {
      if (p === fr || p.startsWith(fr + '/')) {
        p = canonical + p.slice(fr.length);
        break;
      }
    }
  }
  return p || '/';
}

/** Build hreflang alternates for every supported locale. */
export function getAlternates(currentPath: string): Array<{ locale: Locale; url: string }> {
  const canonical = stripLocale(currentPath);
  return locales.map((loc) => ({
    locale: loc,
    url: `https://rabagas-suites.com${getLocalizedPath(canonical, loc)}`,
  }));
}

export function t(key: string, locale: Locale): string {
  return translate(key, locale);
}

export function getSuiteUrl(slug: string, locale: Locale): string {
  return getLocalizedPath(`/suites/${slug}`, locale);
}
