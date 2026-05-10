import type { Locale } from '../data/translations';
import { translate } from '../data/translations';

export type { Locale };

export const defaultLocale: Locale = 'en';
export const locales: Locale[] = ['en', 'el'];

export function getLocaleFromUrl(url: URL): Locale {
  const segments = url.pathname.split('/').filter(Boolean);
  if (segments[0] === 'el') return 'el';
  return 'en';
}

export function getLocalizedPath(path: string, locale: Locale): string {
  const cleanPath = path.replace(/^\/el/, '').replace(/^\/$/, '') || '/';
  if (locale === 'en') return cleanPath;
  return `/el${cleanPath === '/' ? '' : cleanPath}`;
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === 'en' ? 'el' : 'en';
}

export function t(key: string, locale: Locale): string {
  return translate(key, locale);
}

export function getSuiteUrl(slug: string, locale: Locale): string {
  const base = `/suites/${slug}`;
  return getLocalizedPath(base, locale);
}
