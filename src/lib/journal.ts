/**
 * Journal helpers. Reads the per-locale collection, sorts by publication
 * date desc, filters out drafts. Also assembles the cross-locale slug
 * map used by `getJournalAlternates` for hreflang on detail pages.
 */
import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from './i18n';
import { getJournalPostUrl } from './i18n';

type JournalCollection = 'journal-el' | 'journal-en' | 'journal-fr';

const COLLECTIONS: Record<Locale, JournalCollection> = {
  el: 'journal-el',
  en: 'journal-en',
  fr: 'journal-fr',
};

export type JournalPost = CollectionEntry<JournalCollection>;

export async function getJournalPosts(locale: Locale): Promise<JournalPost[]> {
  const all = await getCollection(COLLECTIONS[locale]);
  return all
    .filter((p) => !p.data.draft)
    .sort((a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime());
}

/**
 * Build the cross-locale hreflang trio for a given canonical post key.
 * If a locale does not have a translation, that locale is omitted from
 * the returned list — BaseLayout passes the result to its
 * `customAlternates` prop which faithfully reflects what exists.
 */
export async function getJournalAlternates(
  canonical: string,
): Promise<Array<{ locale: Locale; url: string }>> {
  const SITE = 'https://rabagas-suites.com';
  const locales: Locale[] = ['el', 'en', 'fr'];
  const out: Array<{ locale: Locale; url: string }> = [];
  for (const loc of locales) {
    const all = await getCollection(COLLECTIONS[loc]);
    const match = all.find((p) => !p.data.draft && p.data.canonical === canonical);
    if (match) {
      out.push({ locale: loc, url: SITE + getJournalPostUrl(match.data.slug, loc) });
    }
  }
  return out;
}

/** Resolve `related` (array of canonical keys) to actual posts in the
 *  same locale; silently drops misses so an outdated `related:` block
 *  doesn't crash the build. */
export async function getRelatedPosts(
  current: JournalPost,
  locale: Locale,
  limit = 3,
): Promise<JournalPost[]> {
  const relatedKeys = current.data.related ?? [];
  if (relatedKeys.length === 0) return [];
  const all = await getJournalPosts(locale);
  const byCanonical = new Map(all.map((p) => [p.data.canonical, p]));
  const out: JournalPost[] = [];
  for (const key of relatedKeys) {
    const hit = byCanonical.get(key);
    if (hit && hit.id !== current.id) out.push(hit);
    if (out.length >= limit) break;
  }
  return out;
}
