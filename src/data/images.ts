/**
 * Image imports for Astro's image optimization pipeline.
 * All images are in src/assets/images/ and will be processed at build time.
 * Astro generates optimized WebP/AVIF with responsive srcset automatically.
 *
 * Per-suite gallery arrays use Vite's `import.meta.glob` with `{ eager: true, import: 'default' }`
 * — Astro requires literal static imports for `<Image>`, but Vite resolves the glob at build
 * time so each entry is a typed `ImageMetadata`.
 */
import type { ImageMetadata } from 'astro';

// Property singletons — static imports
import heroImg from '../assets/images/property/hero.webp';
import courtyardImg from '../assets/images/property/courtyard.webp';
import detail1Img from '../assets/images/property/detail-1.webp';
import detail2Img from '../assets/images/property/detail-2.webp';

// Suite card heroes — static imports
import sunshineImg from '../assets/images/suites/sunshine.webp';
import moonshineImg from '../assets/images/suites/moonshine.webp';
import euphoriaImg from '../assets/images/suites/euphoria.webp';
import epicureImg from '../assets/images/suites/epicure.webp';
import boutiqueImg from '../assets/images/suites/boutique.webp';
import apolloniaImg from '../assets/images/suites/apollonia.webp';

// Hero video assets (static URL imports — keep filenames stable for caching)
import heroVideoMp4 from '../assets/property/hero.h264.mp4?url';
import heroVideoAv1 from '../assets/property/hero.av1.webm?url';

export const propertyImages = {
  hero: heroImg,
  courtyard: courtyardImg,
  detail1: detail1Img,
  detail2: detail2Img,
} as const;

export const suiteCardImages: Record<string, ImageMetadata> = {
  sunshine: sunshineImg,
  moonshine: moonshineImg,
  euphoria: euphoriaImg,
  epicure: epicureImg,
  boutique: boutiqueImg,
  apollonia: apolloniaImg,
};

// Suite detail hero images (some suites use different hero than card)
export const suiteHeroImages: Record<string, ImageMetadata> = {
  sunshine: heroImg, // Uses the main terrace shot
  moonshine: moonshineImg,
  euphoria: euphoriaImg,
  epicure: epicureImg,
  boutique: boutiqueImg,
  apollonia: apolloniaImg,
};

/* ------------------------------------------------------------------------ */
/* GALLERY ARRAYS — built from glob, sorted by filename for deterministic order */
/* ------------------------------------------------------------------------ */

function sortedGlob(modules: Record<string, ImageMetadata>): ImageMetadata[] {
  return Object.entries(modules)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, mod]) => mod);
}

export const propertyGallery: ImageMetadata[] = sortedGlob(
  import.meta.glob<ImageMetadata>('../assets/images/property/gallery/*.webp', {
    eager: true,
    import: 'default',
  }),
);

const boutiqueGalleryGlob = import.meta.glob<ImageMetadata>(
  '../assets/images/suites/boutique/*.webp',
  { eager: true, import: 'default' },
);
const epicureGalleryGlob = import.meta.glob<ImageMetadata>(
  '../assets/images/suites/epicure/*.webp',
  { eager: true, import: 'default' },
);
const euphoriaGalleryGlob = import.meta.glob<ImageMetadata>(
  '../assets/images/suites/euphoria/*.webp',
  { eager: true, import: 'default' },
);
const moonshineGalleryGlob = import.meta.glob<ImageMetadata>(
  '../assets/images/suites/moonshine/*.webp',
  { eager: true, import: 'default' },
);
const sunshineGalleryGlob = import.meta.glob<ImageMetadata>(
  '../assets/images/suites/sunshine/*.webp',
  { eager: true, import: 'default' },
);
const apolloniaGalleryGlob = import.meta.glob<ImageMetadata>(
  '../assets/images/suites/apollonia/*.webp',
  { eager: true, import: 'default' },
);

type SuiteId = 'boutique' | 'epicure' | 'euphoria' | 'moonshine' | 'sunshine' | 'apollonia';

export const suiteGalleries: Record<SuiteId, { hero: ImageMetadata; gallery: ImageMetadata[] }> = {
  boutique:  { hero: boutiqueImg,  gallery: sortedGlob(boutiqueGalleryGlob) },
  epicure:   { hero: epicureImg,   gallery: sortedGlob(epicureGalleryGlob) },
  euphoria:  { hero: euphoriaImg,  gallery: sortedGlob(euphoriaGalleryGlob) },
  moonshine: { hero: moonshineImg, gallery: sortedGlob(moonshineGalleryGlob) },
  sunshine:  { hero: sunshineImg,  gallery: sortedGlob(sunshineGalleryGlob) },
  apollonia: { hero: apolloniaImg, gallery: sortedGlob(apolloniaGalleryGlob) },
};

/**
 * Hosts portrait. `null` until a real photo of George & Didi is added to
 * src/assets/images/hosts/. The HostsModule component renders a typographic
 * fallback ("G&D" initials in the brand serif) when this is null.
 */
export const hostsPortrait: ImageMetadata | null = null;

/**
 * Hero video — H.264 fallback + AV1 primary. Rendered conditionally on
 * desktop (>= 1024px) AND prefers-reduced-motion: no-preference.
 * The poster (= propertyImages.hero) is shown on mobile / reduced-motion.
 */
export const heroVideo = {
  poster: heroImg,
  mp4: heroVideoMp4,
  av1: heroVideoAv1,
} as const;
