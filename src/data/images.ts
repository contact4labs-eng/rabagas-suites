/**
 * Image imports for Astro's image optimization pipeline.
 * All images are in src/assets/images/ and will be processed at build time.
 * Astro generates optimized WebP/AVIF with responsive srcset automatically.
 */

// Property images — static imports
import heroImg from '../assets/images/property/hero.webp';
import courtyardImg from '../assets/images/property/courtyard.webp';
import detail1Img from '../assets/images/property/detail-1.webp';
import detail2Img from '../assets/images/property/detail-2.webp';

// Suite images — static imports
import sunshineImg from '../assets/images/suites/sunshine.webp';
import moonshineImg from '../assets/images/suites/moonshine.webp';
import euphoriaImg from '../assets/images/suites/euphoria.webp';
import epicureImg from '../assets/images/suites/epicure.webp';
import boutiqueImg from '../assets/images/suites/boutique.webp';
import apolloniaImg from '../assets/images/suites/apollonia.webp';

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
