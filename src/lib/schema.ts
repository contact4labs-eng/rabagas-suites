/**
 * SCHEMA.ORG STRUCTURED DATA — central JSON-LD builders.
 *
 * Phase 10 architecture (per Plan subagent):
 * - Two layers per page:
 *   1. Hotel block in BaseLayout (every page) — entity-consolidation root.
 *   2. Page-specific block: BreadcrumbList (everywhere except home),
 *      Suite (per-suite-detail), Article (Our Story).
 * - All schema bodies are localized; @id URIs stay locale-stable so
 *   crawlers can de-duplicate the same entity across locale variants.
 * - inLanguage on every emitted block correlates the JSON-LD with the
 *   page's <html lang> and the hreflang cluster.
 *
 * No fabricated trust:
 * - aggregateRating: omitted (no verified count)
 * - starRating: omitted (no official star rating)
 * - checkinTime / checkoutTime: omitted (pending owner confirmation)
 * - petsAllowed: omitted (policy not documented)
 *
 * smokingAllowed: false — defensible by Greek law N.3868/2010 banning
 * indoor smoking in all hospitality venues.
 */
import type { Locale } from './i18n';
import { t, getLocalizedPath, getSuiteUrl } from './i18n';
import { suites, type Suite } from '../data/suites';

const SITE = 'https://rabagas-suites.com';

/** BCP-47 language tags for `inLanguage` and hreflang annotations. */
export const BCP47: Record<Locale, string> = {
  el: 'el-GR',
  en: 'en-US',
  fr: 'fr-FR',
};

/** Stable @id URIs that stay constant across locales. */
export const SCHEMA_IDS = {
  hotel: `${SITE}/#hotel`,
  suite: (slug: string) => `${SITE}/suites/${slug}#suite`,
  article: (path: string) => `${SITE}${path}#article`,
  /** Journal posts share one @id per canonical key across locales. */
  journalPost: (canonical: string) => `${SITE}/journal/${canonical}#post`,
} as const;

/** OG image URL absolute. */
const OG_IMAGE = `${SITE}/og-image.webp`;

/** Last substantive edit of the Our Story essay. Bump by hand only when
 *  the editorial copy materially changes. NOT `new Date()` to avoid
 *  build-timestamp churn signaling noise to crawlers. */
export const STORY_LAST_MODIFIED = '2026-05-10';
export const STORY_PUBLISHED = '2026-05-10';

/** Address shared across all property-level schema. */
function buildAddress(_locale: Locale) {
  return {
    '@type': 'PostalAddress',
    streetAddress: 'Apollonia',
    addressLocality: 'Sifnos',
    addressRegion: 'South Aegean',
    postalCode: '84003',
    addressCountry: 'GR',
  };
}

function buildGeo() {
  return {
    '@type': 'GeoCoordinates',
    latitude: 36.972574,
    longitude: 24.72438,
  };
}

/** Property-level amenities (every suite has these). Localized via t(). */
const PROPERTY_AMENITY_KEYS = [
  'amenities.wifi',
  'amenities.ac',
  'amenities.tv',
  'amenities.toiletries',
  'amenities.coffee',
  'amenities.bikes',
  'amenities.parking',
  'amenities.breakfast',
  'amenities.linens',
  'amenities.safe',
] as const;

function buildAmenityFeatures(locale: Locale) {
  return PROPERTY_AMENITY_KEYS.map((key) => ({
    '@type': 'LocationFeatureSpecification',
    name: t(key, locale),
    value: true,
  }));
}

/** Per-suite amenities — boolean flags from suites.ts mapped to localized
 *  feature names. Includes hasJacuzzi/hasKitchen/hasBalcony/hasPrivateYard. */
function buildSuiteAmenityFeatures(suite: Suite, locale: Locale) {
  const features: Array<Record<string, unknown>> = [];
  if (suite.hasJacuzzi) {
    features.push({ '@type': 'LocationFeatureSpecification', name: t('suite.jacuzzi', locale), value: true });
  }
  if (suite.hasKitchen) {
    features.push({ '@type': 'LocationFeatureSpecification', name: t('suite.kitchen', locale), value: true });
  }
  if (suite.hasBalcony) {
    features.push({ '@type': 'LocationFeatureSpecification', name: t('suite.balcony', locale), value: true });
  }
  if (suite.hasPrivateYard) {
    features.push({ '@type': 'LocationFeatureSpecification', name: t('suite.yard', locale), value: true });
  }
  return features;
}

/**
 * Hotel root schema. Emitted by BaseLayout on every page.
 * Pass `withContainsPlace: true` on the home route only — the home page
 * lists all 6 Suites by @id reference (no inline duplication of full
 * Suite payloads). Other pages omit `containsPlace` to keep payloads light.
 */
export function buildHotelSchema(
  locale: Locale,
  opts: { withContainsPlace?: boolean } = {},
) {
  const homeUrl = `${SITE}${getLocalizedPath('/', locale)}`;
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Hotel',
    '@id': SCHEMA_IDS.hotel,
    name: 'Rabagas Suites',
    description: t('meta.home.description', locale),
    url: homeUrl,
    inLanguage: BCP47[locale],
    telephone: '+302117159002',
    email: 'info@rabagas-suites.gr',
    image: OG_IMAGE,
    address: buildAddress(locale),
    geo: buildGeo(),
    priceRange: '€€€',
    numberOfRooms: 6,
    smokingAllowed: false,
    amenityFeature: buildAmenityFeatures(locale),
    sameAs: [
      'https://www.instagram.com/rabagas.suites',
      'https://www.facebook.com/p/Rabagas-Suites-61558497878420',
    ],
  };

  if (opts.withContainsPlace) {
    schema.containsPlace = suites.map((s) => ({
      '@type': 'Suite',
      '@id': SCHEMA_IDS.suite(s.slug),
      name: s.name[locale],
      url: `${SITE}${getSuiteUrl(s.slug, locale)}`,
    }));
  }

  return schema;
}

/**
 * Per-suite Suite schema. Emitted on the suite-detail page.
 * Uses Schema.org's Suite type (subclass of Room) which is more specific
 * than HotelRoom for boutique residences.
 */
export function buildSuiteSchema(suite: Suite, locale: Locale) {
  const url = `${SITE}${getSuiteUrl(suite.slug, locale)}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'Suite',
    '@id': SCHEMA_IDS.suite(suite.slug),
    name: suite.name[locale],
    description: suite.description[locale],
    url,
    inLanguage: BCP47[locale],
    image: OG_IMAGE, // suite-specific image is the per-suite hero in src/data/images.ts
    numberOfRooms: suite.bedrooms,
    occupancy: {
      '@type': 'QuantitativeValue',
      value: suite.capacity.guests,
      maxValue: suite.capacity.guests + (suite.capacity.extraGuests ?? 0),
    },
    amenityFeature: buildSuiteAmenityFeatures(suite, locale),
    containedInPlace: { '@id': SCHEMA_IDS.hotel },
  };
}

/**
 * BreadcrumbList schema. Emitted on every page except home + 404.
 * Crumbs are built using nav.* translation keys (Home / Suites / Story /
 * Contact) and the existing getLocalizedPath() helper so URLs match the
 * locale-specific routing (FR translates segments — /fr/les-suites etc.).
 */
/** Either a translation-key crumb (looked up via t()) or a literal label
 *  crumb (e.g. a suite's own localized name from suites.ts). */
export type Crumb = (
  | { labelKey: string; label?: never }
  | { labelKey?: never; label: string }
) & { canonicalPath: string };

export function buildBreadcrumbSchema(crumbs: Crumb[], locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    inLanguage: BCP47[locale],
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.labelKey ? t(c.labelKey, locale) : c.label,
      item: `${SITE}${getLocalizedPath(c.canonicalPath, locale)}`,
    })),
  };
}

/**
 * Article schema for Our Story. The page is a 5-section editorial essay
 * about Kleanthis Triantafyllou (the journalist whose nickname "Rabagas"
 * became the brand) and the property. Author = the Hotel itself
 * (Organization-as-author, no fabricated person).
 */
/**
 * Article schema for a Journal post. Used by /journal/[slug] detail page.
 * `kind` is 'guide' for travel guides (own original content) or 'press'
 * for press features (still uses Article so Google understands editorial
 * intent — the external publication's URL is exposed via `isBasedOn`
 * which is the canonical signal for "this content references this URL").
 */
export interface JournalSchemaInput {
  title: string;
  description: string;
  canonical: string;
  postSlug: string;
  publishedAt: Date;
  updatedAt?: Date;
  kind: 'guide' | 'press';
  externalUrl?: string;
  externalSource?: string;
  image?: string;
}

export function buildJournalArticleSchema(
  post: JournalSchemaInput,
  locale: Locale,
) {
  const url = `${SITE}${getLocalizedPath(`/journal/${post.postSlug}`, locale)}/`.replace('//journal', '/journal');
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': SCHEMA_IDS.journalPost(post.canonical),
    headline: post.title,
    description: post.description,
    inLanguage: BCP47[locale],
    image: post.image ? `${SITE}${post.image}` : OG_IMAGE,
    author: { '@id': SCHEMA_IDS.hotel },
    publisher: { '@id': SCHEMA_IDS.hotel },
    datePublished: post.publishedAt.toISOString().slice(0, 10),
    dateModified: (post.updatedAt ?? post.publishedAt).toISOString().slice(0, 10),
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    url,
  };
  if (post.kind === 'press' && post.externalUrl) {
    schema.isBasedOn = post.externalUrl;
    if (post.externalSource) {
      schema.citation = {
        '@type': 'CreativeWork',
        name: post.externalSource,
        url: post.externalUrl,
      };
    }
  }
  return schema;
}

export function buildArticleSchema(locale: Locale) {
  const path = getLocalizedPath('/our-story', locale);
  const url = `${SITE}${path}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': SCHEMA_IDS.article(path),
    headline: t('meta.story.title', locale),
    description: t('meta.story.description', locale),
    inLanguage: BCP47[locale],
    image: OG_IMAGE,
    author: { '@id': SCHEMA_IDS.hotel },
    publisher: { '@id': SCHEMA_IDS.hotel },
    about: { '@id': SCHEMA_IDS.hotel },
    datePublished: STORY_PUBLISHED,
    dateModified: STORY_LAST_MODIFIED,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    url,
  };
}
