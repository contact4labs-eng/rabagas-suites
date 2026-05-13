/**
 * Content Collections — Journal (Phase 12).
 *
 * Three sibling collections, one per locale: `journal-el`, `journal-en`,
 * `journal-fr`. They share a single Zod schema. Posts are authored as
 * Markdown in `src/content/journal/<locale>/<slug>.md`.
 *
 * Why three collections vs. one collection w/ a `locale` field?
 * Three collections lets `getCollection('journal-en')` page-templates
 * use Astro's built-in locale-scoped slug routing without any filter
 * juggling, and keeps the schema parser pinned per-locale (so the EL
 * post's `excerpt` can be Greek, EN's English, etc.) The trade-off is
 * three almost-identical `defineCollection` calls — kept DRY below by
 * factoring `journalSchema` out.
 *
 * `kind: guide | press`
 * - `guide`: SEO travel article (e.g. "How to get to Sifnos")
 * - `press`: a press feature about the property (Condé Nast, Athinorama)
 *   — renders with a press-card variant on the index and links out to
 *   the original publication via `externalUrl`.
 *
 * No fabricated trust: every `press` post requires `externalUrl` so the
 * source is verifiable from the rendered card. Build will fail if a
 * post sets `kind: 'press'` without `externalUrl`.
 */
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const journalSchema = z
  .object({
    title: z.string().min(3),
    slug: z.string().regex(/^[a-z0-9-]+$/, 'slug must be kebab-case'),
    /** Locale-agnostic key shared by every translation of the same post.
     *  Used for hreflang alternates + the "language switcher → equivalent
     *  journal post" mapping. EN form is conventional. */
    canonical: z.string().regex(/^[a-z0-9-]+$/, 'canonical must be kebab-case'),
    description: z.string().min(20).max(220),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    kind: z.enum(['guide', 'press']).default('guide'),
    /** Required when kind === 'press'. Refined below. */
    externalUrl: z.string().url().optional(),
    /** External publication name, e.g. "Condé Nast Traveller". */
    externalSource: z.string().optional(),
    /** Optional hero — falls back to property hero if absent. */
    heroImage: z.string().optional(),
    /** Optional alt-text override for the hero. */
    heroAlt: z.string().optional(),
    /** Reading time hint in minutes (manual; we don't compute it). */
    readingMinutes: z.number().int().positive().optional(),
    /** Manual cross-links by *canonical* (locale-agnostic) slug. */
    related: z.array(z.string()).optional(),
    /** Hide a draft from list/detail pages while keeping it in the repo. */
    draft: z.boolean().default(false),
  })
  .refine((d) => d.kind !== 'press' || !!d.externalUrl, {
    path: ['externalUrl'],
    message: 'press posts require externalUrl',
  });

export type JournalEntry = z.infer<typeof journalSchema>;

const journalEl = defineCollection({
  loader: glob({ base: './src/content/journal/el', pattern: '**/*.md' }),
  schema: journalSchema,
});
const journalEn = defineCollection({
  loader: glob({ base: './src/content/journal/en', pattern: '**/*.md' }),
  schema: journalSchema,
});
const journalFr = defineCollection({
  loader: glob({ base: './src/content/journal/fr', pattern: '**/*.md' }),
  schema: journalSchema,
});

export const collections = {
  'journal-el': journalEl,
  'journal-en': journalEn,
  'journal-fr': journalFr,
};
