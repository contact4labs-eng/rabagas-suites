export interface Suite {
  id: string;
  slug: string;
  name: {
    en: string;
    el: string;
  };
  tagline: {
    en: string;
    el: string;
  };
  description: {
    en: string;
    el: string;
  };
  shortDescription: {
    en: string;
    el: string;
  };
  capacity: {
    guests: number;
    extraGuests?: number;
  };
  bedrooms: number;
  bathrooms: number;
  size?: string;
  moodLine: {
    en: string;
    el: string;
  };
  hasJacuzzi: boolean;
  hasKitchen: boolean;
  hasBalcony: boolean;
  hasPrivateYard: boolean;
  bestFor: {
    en: string[];
    el: string[];
  };
  highlights: {
    en: string[];
    el: string[];
  };
  heroImage: string;
  images: string[];
  order: number;
}

export const suites: Suite[] = [
  {
    id: 'sunshine',
    slug: 'sunshine-suite',
    name: {
      en: 'Sunshine Suite',
      el: '\u03A3\u03BF\u03C5\u03AF\u03C4\u03B1 Sunshine',
    },
    tagline: {
      en: 'Our most spacious residence',
      el: '\u0397 \u03C0\u03B9\u03BF \u03B5\u03C5\u03C1\u03CD\u03C7\u03C9\u03C1\u03B7 \u03BA\u03B1\u03C4\u03BF\u03B9\u03BA\u03AF\u03B1 \u03BC\u03B1\u03C2',
    },
    description: {
      en: 'Spanning two distinct traditional buildings, the Sunshine Suite is the crown jewel of the Rabagas settlement. With multiple bedrooms, each with its own ensuite bathroom, a spacious bathtub in the main building, and a majestic outdoor area complete with dining, lounging, and a private heated jacuzzi, this is where generous space meets Cycladic refinement.',
      el: '\u0395\u03BA\u03C4\u03B5\u03B9\u03BD\u03CC\u03BC\u03B5\u03BD\u03B7 \u03C3\u03B5 \u03B4\u03CD\u03BF \u03B4\u03B9\u03B1\u03BA\u03C1\u03B9\u03C4\u03AC \u03C0\u03B1\u03C1\u03B1\u03B4\u03BF\u03C3\u03B9\u03B1\u03BA\u03AC \u03BA\u03C4\u03AF\u03C1\u03B9\u03B1, \u03B7 \u03C3\u03BF\u03C5\u03AF\u03C4\u03B1 Sunshine \u03B5\u03AF\u03BD\u03B1\u03B9 \u03C4\u03BF \u03BA\u03CC\u03C3\u03BC\u03B7\u03BC\u03B1 \u03C4\u03BF\u03C5 \u03BF\u03B9\u03BA\u03B9\u03C3\u03BC\u03BF\u03CD Rabagas. \u039C\u03B5 \u03C0\u03BF\u03BB\u03BB\u03B1\u03C0\u03BB\u03AC \u03C5\u03C0\u03BD\u03BF\u03B4\u03C9\u03BC\u03AC\u03C4\u03B9\u03B1, \u03B9\u03B4\u03B9\u03C9\u03C4\u03B9\u03BA\u03CC \u03BC\u03C0\u03AC\u03BD\u03B9\u03BF \u03C3\u03B5 \u03BA\u03AC\u03B8\u03B5 \u03AD\u03BD\u03B1, \u03BA\u03B1\u03B9 \u03B5\u03BE\u03C9\u03C4\u03B5\u03C1\u03B9\u03BA\u03CC \u03C7\u03CE\u03C1\u03BF \u03BC\u03B5 \u03B8\u03B5\u03C1\u03BC\u03B1\u03B9\u03BD\u03CC\u03BC\u03B5\u03BD\u03BF \u03C4\u03B6\u03B1\u03BA\u03BF\u03CD\u03B6\u03B9, \u03B5\u03B4\u03CE \u03B7 \u03B5\u03C5\u03C1\u03C5\u03C7\u03C9\u03C1\u03AF\u03B1 \u03C3\u03C5\u03BD\u03B1\u03BD\u03C4\u03AC \u03C4\u03B7\u03BD \u03BA\u03C5\u03BA\u03BB\u03B1\u03B4\u03AF\u03C4\u03B9\u03BA\u03B7 \u03BA\u03BF\u03BC\u03C8\u03CC\u03C4\u03B7\u03C4\u03B1.',
    },
    shortDescription: {
      en: 'Two-building residence with multiple bedrooms, bathtub, majestic outdoor area, and private heated jacuzzi.',
      el: '\u039A\u03B1\u03C4\u03BF\u03B9\u03BA\u03AF\u03B1 \u03B4\u03CD\u03BF \u03BA\u03C4\u03B9\u03C1\u03AF\u03C9\u03BD \u03BC\u03B5 \u03C0\u03BF\u03BB\u03BB\u03B1\u03C0\u03BB\u03AC \u03C5\u03C0\u03BD\u03BF\u03B4\u03C9\u03BC\u03AC\u03C4\u03B9\u03B1, \u03BC\u03C0\u03B1\u03BD\u03B9\u03AD\u03C1\u03B1 \u03BA\u03B1\u03B9 \u03B9\u03B4\u03B9\u03C9\u03C4\u03B9\u03BA\u03CC \u03C4\u03B6\u03B1\u03BA\u03BF\u03CD\u03B6\u03B9.',
    },
    capacity: { guests: 4, extraGuests: 1 },
    bedrooms: 2,
    bathrooms: 2,
    moodLine: {
      en: 'Space to breathe. Room to gather. A hammock for doing nothing at all.',
      el: '\u03A7\u03CE\u03C1\u03BF\u03C2 \u03BD\u03B1 \u03B1\u03BD\u03B1\u03C0\u03BD\u03B5\u03CD\u03C3\u03B5\u03B9\u03C2. \u039C\u03AD\u03C1\u03BF\u03C2 \u03BD\u03B1 \u03BC\u03B1\u03B6\u03B5\u03C5\u03C4\u03B5\u03AF\u03C2. \u039C\u03B9\u03B1 \u03B1\u03B9\u03CE\u03C1\u03B1 \u03B3\u03B9\u03B1 \u03C4\u03BF \u03C4\u03AF\u03C0\u03BF\u03C4\u03B1.',
    },
    hasJacuzzi: true,
    hasKitchen: true,
    hasBalcony: true,
    hasPrivateYard: true,
    bestFor: {
      en: ['Families', 'Groups', 'Extended stays'],
      el: ['\u039F\u03B9\u03BA\u03BF\u03B3\u03AD\u03BD\u03B5\u03B9\u03B5\u03C2', '\u03A0\u03B1\u03C1\u03AD\u03B5\u03C2', '\u03A0\u03B1\u03C1\u03B1\u03C4\u03B5\u03C4\u03B1\u03BC\u03AD\u03BD\u03B5\u03C2 \u03B4\u03B9\u03B1\u03BC\u03BF\u03BD\u03AD\u03C2'],
    },
    highlights: {
      en: ['Private heated jacuzzi', 'Two separate buildings', 'Spacious bathtub', 'Outdoor dining area', 'Hammock'],
      el: ['\u0399\u03B4\u03B9\u03C9\u03C4\u03B9\u03BA\u03CC \u03B8\u03B5\u03C1\u03BC\u03B1\u03B9\u03BD\u03CC\u03BC\u03B5\u03BD\u03BF \u03C4\u03B6\u03B1\u03BA\u03BF\u03CD\u03B6\u03B9', '\u0394\u03CD\u03BF \u03B1\u03BD\u03B5\u03BE\u03AC\u03C1\u03C4\u03B7\u03C4\u03B1 \u03BA\u03C4\u03AF\u03C1\u03B9\u03B1', '\u0395\u03C5\u03C1\u03CD\u03C7\u03C9\u03C1\u03B7 \u03BC\u03C0\u03B1\u03BD\u03B9\u03AD\u03C1\u03B1', '\u0395\u03BE\u03C9\u03C4\u03B5\u03C1\u03B9\u03BA\u03CC \u03C4\u03C1\u03B1\u03C0\u03B5\u03B6\u03AC\u03BA\u03B9', '\u0391\u03B9\u03CE\u03C1\u03B1'],
    },
    heroImage: '/images/suites/sunshine-hero.jpg',
    images: [
      '/images/suites/sunshine-1.jpg',
      '/images/suites/sunshine-2.jpg',
      '/images/suites/sunshine-3.jpg',
      '/images/suites/sunshine-4.jpg',
    ],
    order: 1,
  },
  {
    id: 'moonshine',
    slug: 'moonshine-suite',
    name: {
      en: 'Moonshine Suite',
      el: '\u03A3\u03BF\u03C5\u03AF\u03C4\u03B1 Moonshine',
    },
    tagline: {
      en: 'Intimate luxury for two',
      el: '\u03A0\u03BF\u03BB\u03C5\u03C4\u03B5\u03BB\u03AE\u03C2 \u03B1\u03C0\u03BF\u03BC\u03CC\u03BD\u03C9\u03C3\u03B7 \u03B3\u03B9\u03B1 \u03B4\u03CD\u03BF',
    },
    description: {
      en: 'The newest addition to the Rabagas settlement, the Moonshine Suite is a love letter to couples seeking refined seclusion. With a spacious bathroom featuring dual showers and twin sinks, a unique outdoor space, and a private heated jacuzzi, every detail has been crafted for intimate comfort in the heart of Apollonia.',
      el: '\u0397 \u03BD\u03B5\u03CC\u03C4\u03B5\u03C1\u03B7 \u03C0\u03C1\u03BF\u03C3\u03B8\u03AE\u03BA\u03B7 \u03C3\u03C4\u03BF\u03BD \u03BF\u03B9\u03BA\u03B9\u03C3\u03BC\u03CC Rabagas, \u03B7 \u03C3\u03BF\u03C5\u03AF\u03C4\u03B1 Moonshine \u03B5\u03AF\u03BD\u03B1\u03B9 \u03BC\u03B9\u03B1 \u03B5\u03C1\u03C9\u03C4\u03B9\u03BA\u03AE \u03B5\u03C0\u03B9\u03C3\u03C4\u03BF\u03BB\u03AE \u03C3\u03B5 \u03B6\u03B5\u03C5\u03B3\u03AC\u03C1\u03B9\u03B1 \u03C0\u03BF\u03C5 \u03B1\u03BD\u03B1\u03B6\u03B7\u03C4\u03BF\u03CD\u03BD \u03B5\u03BA\u03BB\u03B5\u03C0\u03C4\u03B9\u03C3\u03BC\u03AD\u03BD\u03B7 \u03B1\u03C0\u03BF\u03BC\u03CC\u03BD\u03C9\u03C3\u03B7. \u039C\u03B5 \u03B4\u03B9\u03C0\u03BB\u03CC \u03BD\u03C4\u03BF\u03C5\u03C2, \u03BC\u03BF\u03BD\u03B1\u03B4\u03B9\u03BA\u03CC \u03B5\u03BE\u03C9\u03C4\u03B5\u03C1\u03B9\u03BA\u03CC \u03C7\u03CE\u03C1\u03BF \u03BA\u03B1\u03B9 \u03B9\u03B4\u03B9\u03C9\u03C4\u03B9\u03BA\u03CC \u03C4\u03B6\u03B1\u03BA\u03BF\u03CD\u03B6\u03B9.',
    },
    shortDescription: {
      en: 'Couples retreat with dual showers, twin sinks, private outdoor area, and heated jacuzzi.',
      el: '\u039A\u03B1\u03C4\u03B1\u03C6\u03CD\u03B3\u03B9\u03BF \u03B6\u03B5\u03C5\u03B3\u03B1\u03C1\u03B9\u03CE\u03BD \u03BC\u03B5 \u03B4\u03B9\u03C0\u03BB\u03CC \u03BD\u03C4\u03BF\u03C5\u03C2, \u03B5\u03BE\u03C9\u03C4\u03B5\u03C1\u03B9\u03BA\u03CC \u03C7\u03CE\u03C1\u03BF \u03BA\u03B1\u03B9 \u03C4\u03B6\u03B1\u03BA\u03BF\u03CD\u03B6\u03B9.',
    },
    capacity: { guests: 2, extraGuests: 1 },
    bedrooms: 1,
    bathrooms: 1,
    moodLine: {
      en: 'Designed for two. A place to disappear together.',
      el: '\u03A3\u03C7\u03B5\u03B4\u03B9\u03B1\u03C3\u03BC\u03AD\u03BD\u03B7 \u03B3\u03B9\u03B1 \u03B4\u03CD\u03BF. \u0388\u03BD\u03B1 \u03BC\u03AD\u03C1\u03BF\u03C2 \u03BD\u03B1 \u03C7\u03B1\u03B8\u03B5\u03AF\u03C4\u03B5 \u03BC\u03B1\u03B6\u03AF.',
    },
    hasJacuzzi: true,
    hasKitchen: false,
    hasBalcony: false,
    hasPrivateYard: true,
    bestFor: {
      en: ['Couples', 'Honeymoons', 'Romantic getaways'],
      el: ['\u0396\u03B5\u03C5\u03B3\u03AC\u03C1\u03B9\u03B1', '\u039C\u03AE\u03BD\u03B1\u03C2 \u03C4\u03BF\u03C5 \u03BC\u03AD\u03BB\u03B9\u03C4\u03BF\u03C2', '\u03A1\u03BF\u03BC\u03B1\u03BD\u03C4\u03B9\u03BA\u03AD\u03C2 \u03B1\u03C0\u03BF\u03B4\u03C1\u03AC\u03C3\u03B5\u03B9\u03C2'],
    },
    highlights: {
      en: ['Private heated jacuzzi', 'Dual rain showers', 'Twin sinks', 'Newest suite', 'Unique outdoor space'],
      el: ['\u0399\u03B4\u03B9\u03C9\u03C4\u03B9\u03BA\u03CC \u03C4\u03B6\u03B1\u03BA\u03BF\u03CD\u03B6\u03B9', '\u0394\u03B9\u03C0\u03BB\u03CC \u03BD\u03C4\u03BF\u03C5\u03C2 \u03B2\u03C1\u03BF\u03C7\u03AE\u03C2', '\u0394\u03B9\u03C0\u03BB\u03BF\u03AF \u03BD\u03B9\u03C0\u03C4\u03AE\u03C1\u03B5\u03C2', '\u039D\u03B5\u03CC\u03C4\u03B5\u03C1\u03B7 \u03C3\u03BF\u03C5\u03AF\u03C4\u03B1', '\u039C\u03BF\u03BD\u03B1\u03B4\u03B9\u03BA\u03CC\u03C2 \u03B5\u03BE\u03C9\u03C4\u03B5\u03C1\u03B9\u03BA\u03CC\u03C2 \u03C7\u03CE\u03C1\u03BF\u03C2'],
    },
    heroImage: '/images/suites/moonshine-hero.jpg',
    images: [
      '/images/suites/moonshine-1.jpg',
      '/images/suites/moonshine-2.jpg',
      '/images/suites/moonshine-3.jpg',
      '/images/suites/moonshine-4.jpg',
    ],
    order: 2,
  },
  {
    id: 'euphoria',
    slug: 'euphoria-suite',
    name: {
      en: 'Euphoria Suite',
      el: '\u03A3\u03BF\u03C5\u03AF\u03C4\u03B1 Euphoria',
    },
    tagline: {
      en: 'Heritage views over the Aegean',
      el: '\u0398\u03AD\u03B1 \u03C3\u03C4\u03BF \u0391\u03B9\u03B3\u03B1\u03AF\u03BF \u03BC\u03B5 \u03B9\u03C3\u03C4\u03BF\u03C1\u03AF\u03B1',
    },
    description: {
      en: 'Occupying the first floor of a restored Cycladic residence dating before 1910, the Euphoria Suite is where monumental heritage meets contemporary art. Its exquisite balcony offers commanding views of Antiparos island and the charming village of Artemonas \u2014 a calm, relaxing haven crafted with meticulous design and natural materials.',
      el: '\u03A3\u03C4\u03BF\u03BD \u03C0\u03C1\u03CE\u03C4\u03BF \u03CC\u03C1\u03BF\u03C6\u03BF \u03BC\u03B9\u03B1\u03C2 \u03B1\u03BD\u03B1\u03C3\u03C4\u03B7\u03BB\u03C9\u03BC\u03AD\u03BD\u03B7\u03C2 \u03BA\u03C5\u03BA\u03BB\u03B1\u03B4\u03AF\u03C4\u03B9\u03BA\u03B7\u03C2 \u03BA\u03B1\u03C4\u03BF\u03B9\u03BA\u03AF\u03B1\u03C2 \u03C0\u03C1\u03BF 1910, \u03B7 \u03C3\u03BF\u03C5\u03AF\u03C4\u03B1 Euphoria \u03C3\u03C5\u03BD\u03B4\u03C5\u03AC\u03B6\u03B5\u03B9 \u03C4\u03B7\u03BD \u03B9\u03C3\u03C4\u03BF\u03C1\u03B9\u03BA\u03AE \u03BA\u03BB\u03B7\u03C1\u03BF\u03BD\u03BF\u03BC\u03B9\u03AC \u03BC\u03B5 \u03C4\u03B7 \u03C3\u03CD\u03B3\u03C7\u03C1\u03BF\u03BD\u03B7 \u03C4\u03AD\u03C7\u03BD\u03B7. \u03A4\u03BF \u03BC\u03C0\u03B1\u03BB\u03BA\u03CC\u03BD\u03B9 \u03C0\u03C1\u03BF\u03C3\u03C6\u03AD\u03C1\u03B5\u03B9 \u03B8\u03AD\u03B1 \u03C3\u03C4\u03B7\u03BD \u0391\u03BD\u03C4\u03AF\u03C0\u03B1\u03C1\u03BF \u03BA\u03B1\u03B9 \u03C4\u03B7\u03BD \u0391\u03C1\u03C4\u03B5\u03BC\u03CE\u03BD\u03B1.',
    },
    shortDescription: {
      en: 'First-floor heritage residence with panoramic Aegean views and contemporary art throughout.',
      el: '\u0399\u03C3\u03C4\u03BF\u03C1\u03B9\u03BA\u03AE \u03BA\u03B1\u03C4\u03BF\u03B9\u03BA\u03AF\u03B1 \u03C0\u03C1\u03CE\u03C4\u03BF\u03C5 \u03BF\u03C1\u03CC\u03C6\u03BF\u03C5 \u03BC\u03B5 \u03C0\u03B1\u03BD\u03BF\u03C1\u03B1\u03BC\u03B9\u03BA\u03AE \u03B8\u03AD\u03B1 \u03C3\u03C4\u03BF \u0391\u03B9\u03B3\u03B1\u03AF\u03BF.',
    },
    capacity: { guests: 2, extraGuests: 2 },
    bedrooms: 1,
    bathrooms: 1,
    moodLine: {
      en: 'Wake to the Aegean. Watch Antiparos glow at sunset from your balcony.',
      el: '\u039E\u03C5\u03C0\u03BD\u03AE\u03C3\u03C4\u03B5 \u03BC\u03B5 \u03C4\u03BF \u0391\u03B9\u03B3\u03B1\u03AF\u03BF. \u0394\u03B5\u03AF\u03C4\u03B5 \u03C4\u03B7\u03BD \u0391\u03BD\u03C4\u03AF\u03C0\u03B1\u03C1\u03BF \u03BD\u03B1 \u03BB\u03AC\u03BC\u03C0\u03B5\u03B9 \u03C3\u03C4\u03BF \u03B7\u03BB\u03B9\u03BF\u03B2\u03B1\u03C3\u03AF\u03BB\u03B5\u03BC\u03B1.',
    },
    hasJacuzzi: false,
    hasKitchen: true,
    hasBalcony: true,
    hasPrivateYard: false,
    bestFor: {
      en: ['Couples', 'View lovers', 'Art enthusiasts'],
      el: ['\u0396\u03B5\u03C5\u03B3\u03AC\u03C1\u03B9\u03B1', '\u039B\u03AC\u03C4\u03C1\u03B5\u03B9\u03C2 \u03B8\u03AD\u03B1\u03C2', '\u039B\u03AC\u03C4\u03C1\u03B5\u03B9\u03C2 \u03C4\u03AD\u03C7\u03BD\u03B7\u03C2'],
    },
    highlights: {
      en: ['Panoramic Aegean views', 'Pre-1910 architecture', 'Contemporary art', 'Views of Antiparos', 'Artemonas village views'],
      el: ['\u03A0\u03B1\u03BD\u03BF\u03C1\u03B1\u03BC\u03B9\u03BA\u03AE \u03B8\u03AD\u03B1 \u0391\u03B9\u03B3\u03B1\u03AF\u03BF\u03C5', '\u0391\u03C1\u03C7\u03B9\u03C4\u03B5\u03BA\u03C4\u03BF\u03BD\u03B9\u03BA\u03AE \u03C0\u03C1\u03BF 1910', '\u03A3\u03CD\u03B3\u03C7\u03C1\u03BF\u03BD\u03B7 \u03C4\u03AD\u03C7\u03BD\u03B7', '\u0398\u03AD\u03B1 \u0391\u03BD\u03C4\u03AF\u03C0\u03B1\u03C1\u03BF\u03C5', '\u0398\u03AD\u03B1 \u0391\u03C1\u03C4\u03B5\u03BC\u03CE\u03BD\u03B1\u03C2'],
    },
    heroImage: '/images/suites/euphoria-hero.jpg',
    images: [
      '/images/suites/euphoria-1.jpg',
      '/images/suites/euphoria-2.jpg',
      '/images/suites/euphoria-3.jpg',
      '/images/suites/euphoria-4.jpg',
    ],
    order: 3,
  },
  {
    id: 'epicure',
    slug: 'epicure-suite',
    name: {
      en: 'Epicure Suite',
      el: '\u03A3\u03BF\u03C5\u03AF\u03C4\u03B1 Epicure',
    },
    tagline: {
      en: 'Mindful living, refined simplicity',
      el: '\u03A3\u03C5\u03BD\u03B5\u03B9\u03B4\u03B7\u03C4\u03AE \u03B4\u03B9\u03B1\u03B2\u03AF\u03C9\u03C3\u03B7, \u03B5\u03BA\u03BB\u03B5\u03C0\u03C4\u03B9\u03C3\u03BC\u03AD\u03BD\u03B7 \u03B1\u03C0\u03BB\u03CC\u03C4\u03B7\u03C4\u03B1',
    },
    description: {
      en: 'Inspired by mindful living and refined simplicity, the Epicure Suite occupies the ground floor of a restored pre-1910 Cycladic residence. With direct access to a serene private outdoor sitting area and a heated jacuzzi, this suite blends contemporary artistic touches with carefully selected natural materials for a truly grounding retreat.',
      el: '\u0395\u03BC\u03C0\u03BD\u03B5\u03C5\u03C3\u03BC\u03AD\u03BD\u03B7 \u03B1\u03C0\u03CC \u03C4\u03B7 \u03C3\u03C5\u03BD\u03B5\u03B9\u03B4\u03B7\u03C4\u03AE \u03B4\u03B9\u03B1\u03B2\u03AF\u03C9\u03C3\u03B7, \u03B7 \u03C3\u03BF\u03C5\u03AF\u03C4\u03B1 Epicure \u03BA\u03B1\u03C4\u03B1\u03BB\u03B1\u03BC\u03B2\u03AC\u03BD\u03B5\u03B9 \u03C4\u03BF \u03B9\u03C3\u03CC\u03B3\u03B5\u03B9\u03BF \u03BC\u03B9\u03B1\u03C2 \u03B1\u03BD\u03B1\u03C3\u03C4\u03B7\u03BB\u03C9\u03BC\u03AD\u03BD\u03B7\u03C2 \u03BA\u03C5\u03BA\u03BB\u03B1\u03B4\u03AF\u03C4\u03B9\u03BA\u03B7\u03C2 \u03BA\u03B1\u03C4\u03BF\u03B9\u03BA\u03AF\u03B1\u03C2. \u039C\u03B5 \u03AC\u03BC\u03B5\u03C3\u03B7 \u03C0\u03C1\u03CC\u03C3\u03B2\u03B1\u03C3\u03B7 \u03C3\u03B5 \u03B9\u03B4\u03B9\u03C9\u03C4\u03B9\u03BA\u03CC \u03B5\u03BE\u03C9\u03C4\u03B5\u03C1\u03B9\u03BA\u03CC \u03C7\u03CE\u03C1\u03BF \u03BA\u03B1\u03B9 \u03C4\u03B6\u03B1\u03BA\u03BF\u03CD\u03B6\u03B9.',
    },
    shortDescription: {
      en: 'Ground-floor retreat with private garden access, heated jacuzzi, and natural materials throughout.',
      el: '\u039A\u03B1\u03C4\u03B1\u03C6\u03CD\u03B3\u03B9\u03BF \u03B9\u03C3\u03BF\u03B3\u03B5\u03AF\u03BF\u03C5 \u03BC\u03B5 \u03BA\u03AE\u03C0\u03BF, \u03C4\u03B6\u03B1\u03BA\u03BF\u03CD\u03B6\u03B9 \u03BA\u03B1\u03B9 \u03C6\u03C5\u03C3\u03B9\u03BA\u03AC \u03C5\u03BB\u03B9\u03BA\u03AC.',
    },
    capacity: { guests: 2, extraGuests: 2 },
    bedrooms: 1,
    bathrooms: 1,
    moodLine: {
      en: 'Ground-level calm. Step from bed to garden to jacuzzi to stillness.',
      el: '\u0397\u03C3\u03C5\u03C7\u03AF\u03B1 \u03B9\u03C3\u03BF\u03B3\u03B5\u03AF\u03BF\u03C5. \u0391\u03C0\u03CC \u03C4\u03BF \u03BA\u03C1\u03B5\u03B2\u03AC\u03C4\u03B9 \u03C3\u03C4\u03BF\u03BD \u03BA\u03AE\u03C0\u03BF, \u03C3\u03C4\u03BF \u03C4\u03B6\u03B1\u03BA\u03BF\u03CD\u03B6\u03B9, \u03C3\u03C4\u03B7 \u03B3\u03B1\u03BB\u03AE\u03BD\u03B7.',
    },
    hasJacuzzi: true,
    hasKitchen: true,
    hasBalcony: false,
    hasPrivateYard: true,
    bestFor: {
      en: ['Couples', 'Wellness seekers', 'Nature lovers'],
      el: ['\u0396\u03B5\u03C5\u03B3\u03AC\u03C1\u03B9\u03B1', '\u039B\u03AC\u03C4\u03C1\u03B5\u03B9\u03C2 \u03B5\u03C5\u03B5\u03BE\u03AF\u03B1\u03C2', '\u039B\u03AC\u03C4\u03C1\u03B5\u03B9\u03C2 \u03C6\u03CD\u03C3\u03B7\u03C2'],
    },
    highlights: {
      en: ['Private heated jacuzzi', 'Ground-floor garden access', 'Pre-1910 architecture', 'Natural materials', 'Contemporary art'],
      el: ['\u0399\u03B4\u03B9\u03C9\u03C4\u03B9\u03BA\u03CC \u03C4\u03B6\u03B1\u03BA\u03BF\u03CD\u03B6\u03B9', '\u03A0\u03C1\u03CC\u03C3\u03B2\u03B1\u03C3\u03B7 \u03C3\u03B5 \u03BA\u03AE\u03C0\u03BF', '\u0391\u03C1\u03C7\u03B9\u03C4\u03B5\u03BA\u03C4\u03BF\u03BD\u03B9\u03BA\u03AE \u03C0\u03C1\u03BF 1910', '\u03A6\u03C5\u03C3\u03B9\u03BA\u03AC \u03C5\u03BB\u03B9\u03BA\u03AC', '\u03A3\u03CD\u03B3\u03C7\u03C1\u03BF\u03BD\u03B7 \u03C4\u03AD\u03C7\u03BD\u03B7'],
    },
    heroImage: '/images/suites/epicure-hero.jpg',
    images: [
      '/images/suites/epicure-1.jpg',
      '/images/suites/epicure-2.jpg',
      '/images/suites/epicure-3.jpg',
      '/images/suites/epicure-4.jpg',
    ],
    order: 4,
  },
  {
    id: 'boutique',
    slug: 'boutique-suite',
    name: {
      en: 'Boutique Suite',
      el: '\u03A3\u03BF\u03C5\u03AF\u03C4\u03B1 Boutique',
    },
    tagline: {
      en: 'Intimate charm in the heart of Apollonia',
      el: '\u039F\u03B9\u03BA\u03B5\u03AF\u03B1 \u03B3\u03BF\u03B7\u03C4\u03B5\u03AF\u03B1 \u03C3\u03C4\u03B7\u03BD \u03BA\u03B1\u03C1\u03B4\u03B9\u03AC \u03C4\u03B7\u03C2 \u0391\u03C0\u03BF\u03BB\u03BB\u03C9\u03BD\u03AF\u03B1\u03C2',
    },
    description: {
      en: 'The most intimate of the Rabagas suites, the Boutique Suite charms with its private yard, full kitchen, and the warmth of a carefully restored pre-1910 Cycladic dwelling. Tucked in the center of Apollonia yet beautifully secluded from the bustle, it offers a cozy, personal retreat with authentic character.',
      el: '\u0397 \u03C0\u03B9\u03BF \u03BF\u03B9\u03BA\u03B5\u03AF\u03B1 \u03C3\u03BF\u03C5\u03AF\u03C4\u03B1, \u03B7 Boutique \u03B3\u03BF\u03B7\u03C4\u03B5\u03CD\u03B5\u03B9 \u03BC\u03B5 \u03C4\u03BF\u03BD \u03B9\u03B4\u03B9\u03C9\u03C4\u03B9\u03BA\u03CC \u03BA\u03AE\u03C0\u03BF, \u03C4\u03B7\u03BD \u03C0\u03BB\u03AE\u03C1\u03B7 \u03BA\u03BF\u03C5\u03B6\u03AF\u03BD\u03B1 \u03BA\u03B1\u03B9 \u03C4\u03B7 \u03B6\u03B5\u03C3\u03C4\u03B1\u03C3\u03B9\u03AC \u03BC\u03B9\u03B1\u03C2 \u03B1\u03BD\u03B1\u03C3\u03C4\u03B7\u03BB\u03C9\u03BC\u03AD\u03BD\u03B7\u03C2 \u03BA\u03C5\u03BA\u03BB\u03B1\u03B4\u03AF\u03C4\u03B9\u03BA\u03B7\u03C2 \u03BA\u03B1\u03C4\u03BF\u03B9\u03BA\u03AF\u03B1\u03C2 \u03C0\u03C1\u03BF 1910.',
    },
    shortDescription: {
      en: 'Charming, intimate Cycladic dwelling with private yard and full kitchen.',
      el: '\u0393\u03BF\u03B7\u03C4\u03B5\u03C5\u03C4\u03B9\u03BA\u03AE \u03BA\u03C5\u03BA\u03BB\u03B1\u03B4\u03AF\u03C4\u03B9\u03BA\u03B7 \u03BA\u03B1\u03C4\u03BF\u03B9\u03BA\u03AF\u03B1 \u03BC\u03B5 \u03B9\u03B4\u03B9\u03C9\u03C4\u03B9\u03BA\u03CC \u03BA\u03AE\u03C0\u03BF.',
    },
    capacity: { guests: 2 },
    bedrooms: 1,
    bathrooms: 1,
    moodLine: {
      en: 'The smallest suite, the biggest charm. Your own Cycladic secret.',
      el: '\u0397 \u03C0\u03B9\u03BF \u03BC\u03B9\u03BA\u03C1\u03AE \u03C3\u03BF\u03C5\u03AF\u03C4\u03B1, \u03B7 \u03BC\u03B5\u03B3\u03B1\u03BB\u03CD\u03C4\u03B5\u03C1\u03B7 \u03B3\u03BF\u03B7\u03C4\u03B5\u03AF\u03B1. \u03A4\u03BF \u03B4\u03B9\u03BA\u03CC \u03C3\u03B1\u03C2 \u03BA\u03C5\u03BA\u03BB\u03B1\u03B4\u03AF\u03C4\u03B9\u03BA\u03BF \u03BC\u03C5\u03C3\u03C4\u03B9\u03BA\u03CC.',
    },
    hasJacuzzi: false,
    hasKitchen: true,
    hasBalcony: false,
    hasPrivateYard: true,
    bestFor: {
      en: ['Couples', 'Solo travellers', 'Budget-conscious luxury'],
      el: ['\u0396\u03B5\u03C5\u03B3\u03AC\u03C1\u03B9\u03B1', '\u039C\u03B5\u03BC\u03BF\u03BD\u03C9\u03BC\u03AD\u03BD\u03BF\u03B9 \u03C4\u03B1\u03BE\u03B9\u03B4\u03B9\u03CE\u03C4\u03B5\u03C2', '\u03A0\u03C1\u03BF\u03C3\u03B9\u03C4\u03AE \u03C0\u03BF\u03BB\u03C5\u03C4\u03AD\u03BB\u03B5\u03B9\u03B1'],
    },
    highlights: {
      en: ['Private yard', 'Full kitchen', 'Pre-1910 architecture', 'Central yet secluded', 'Most intimate suite'],
      el: ['\u0399\u03B4\u03B9\u03C9\u03C4\u03B9\u03BA\u03CC\u03C2 \u03BA\u03AE\u03C0\u03BF\u03C2', '\u03A0\u03BB\u03AE\u03C1\u03B7\u03C2 \u03BA\u03BF\u03C5\u03B6\u03AF\u03BD\u03B1', '\u0391\u03C1\u03C7\u03B9\u03C4\u03B5\u03BA\u03C4\u03BF\u03BD\u03B9\u03BA\u03AE \u03C0\u03C1\u03BF 1910', '\u039A\u03B5\u03BD\u03C4\u03C1\u03B9\u03BA\u03AE \u03B1\u03BB\u03BB\u03AC \u03B1\u03C0\u03BF\u03BC\u03BF\u03BD\u03C9\u03BC\u03AD\u03BD\u03B7', '\u0397 \u03C0\u03B9\u03BF \u03BF\u03B9\u03BA\u03B5\u03AF\u03B1 \u03C3\u03BF\u03C5\u03AF\u03C4\u03B1'],
    },
    heroImage: '/images/suites/boutique-hero.jpg',
    images: [
      '/images/suites/boutique-1.jpg',
      '/images/suites/boutique-2.jpg',
      '/images/suites/boutique-3.jpg',
      '/images/suites/boutique-4.jpg',
    ],
    order: 5,
  },
  {
    id: 'apollonia',
    slug: 'apollonia-suite',
    name: {
      en: 'Apollonia Suite',
      el: '\u03A3\u03BF\u03C5\u03AF\u03C4\u03B1 Apollonia',
    },
    tagline: {
      en: 'The grand residence',
      el: '\u0397 \u03BC\u03B5\u03B3\u03AC\u03BB\u03B7 \u03BA\u03B1\u03C4\u03BF\u03B9\u03BA\u03AF\u03B1',
    },
    description: {
      en: 'The Apollonia Suite is the flagship residence of the Rabagas settlement, spanning two distinct traditional buildings with multiple bedrooms. Each bedroom has its own ensuite bathroom, while the main building features a spacious bathtub. The majestic outdoor area includes dining, lounging, a hammock, and a private heated jacuzzi for four. A true Cycladic estate in the heart of Apollonia.',
      el: '\u0397 \u03C3\u03BF\u03C5\u03AF\u03C4\u03B1 Apollonia \u03B5\u03AF\u03BD\u03B1\u03B9 \u03B7 \u03BA\u03BF\u03C1\u03C5\u03C6\u03B1\u03AF\u03B1 \u03BA\u03B1\u03C4\u03BF\u03B9\u03BA\u03AF\u03B1 \u03C4\u03BF\u03C5 \u03BF\u03B9\u03BA\u03B9\u03C3\u03BC\u03BF\u03CD Rabagas, \u03B5\u03BA\u03C4\u03B5\u03B9\u03BD\u03CC\u03BC\u03B5\u03BD\u03B7 \u03C3\u03B5 \u03B4\u03CD\u03BF \u03B4\u03B9\u03B1\u03BA\u03C1\u03B9\u03C4\u03AC \u03C0\u03B1\u03C1\u03B1\u03B4\u03BF\u03C3\u03B9\u03B1\u03BA\u03AC \u03BA\u03C4\u03AF\u03C1\u03B9\u03B1 \u03BC\u03B5 \u03C0\u03BF\u03BB\u03BB\u03B1\u03C0\u03BB\u03AC \u03C5\u03C0\u03BD\u03BF\u03B4\u03C9\u03BC\u03AC\u03C4\u03B9\u03B1, \u03B5\u03BE\u03C9\u03C4\u03B5\u03C1\u03B9\u03BA\u03CC \u03C7\u03CE\u03C1\u03BF \u03BA\u03B1\u03B9 \u03B9\u03B4\u03B9\u03C9\u03C4\u03B9\u03BA\u03CC \u03C4\u03B6\u03B1\u03BA\u03BF\u03CD\u03B6\u03B9.',
    },
    shortDescription: {
      en: 'Flagship two-building residence with multiple bedrooms, bathtub, grand outdoor area, and private heated jacuzzi.',
      el: '\u039A\u03BF\u03C1\u03C5\u03C6\u03B1\u03AF\u03B1 \u03BA\u03B1\u03C4\u03BF\u03B9\u03BA\u03AF\u03B1 \u03B4\u03CD\u03BF \u03BA\u03C4\u03B9\u03C1\u03AF\u03C9\u03BD \u03BC\u03B5 \u03C0\u03BF\u03BB\u03BB\u03B1\u03C0\u03BB\u03AC \u03C5\u03C0\u03BD\u03BF\u03B4\u03C9\u03BC\u03AC\u03C4\u03B9\u03B1, \u03B5\u03BE\u03C9\u03C4\u03B5\u03C1\u03B9\u03BA\u03CC \u03C7\u03CE\u03C1\u03BF \u03BA\u03B1\u03B9 \u03C4\u03B6\u03B1\u03BA\u03BF\u03CD\u03B6\u03B9.',
    },
    capacity: { guests: 4, extraGuests: 1 },
    bedrooms: 2,
    bathrooms: 2,
    moodLine: {
      en: 'The grand residence. Two buildings, one private world.',
      el: '\u0397 \u03BC\u03B5\u03B3\u03AC\u03BB\u03B7 \u03BA\u03B1\u03C4\u03BF\u03B9\u03BA\u03AF\u03B1. \u0394\u03CD\u03BF \u03BA\u03C4\u03AF\u03C1\u03B9\u03B1, \u03AD\u03BD\u03B1\u03C2 \u03B9\u03B4\u03B9\u03C9\u03C4\u03B9\u03BA\u03CC\u03C2 \u03BA\u03CC\u03C3\u03BC\u03BF\u03C2.',
    },
    hasJacuzzi: true,
    hasKitchen: true,
    hasBalcony: true,
    hasPrivateYard: true,
    bestFor: {
      en: ['Families', 'Groups', 'Celebrations'],
      el: ['\u039F\u03B9\u03BA\u03BF\u03B3\u03AD\u03BD\u03B5\u03B9\u03B5\u03C2', '\u03A0\u03B1\u03C1\u03AD\u03B5\u03C2', '\u0395\u03BF\u03C1\u03C4\u03B1\u03C3\u03BC\u03BF\u03AF'],
    },
    highlights: {
      en: ['Private heated jacuzzi', 'Two separate buildings', 'Spacious bathtub', 'Grand outdoor dining', 'Hammock & lounging'],
      el: ['\u0399\u03B4\u03B9\u03C9\u03C4\u03B9\u03BA\u03CC \u03C4\u03B6\u03B1\u03BA\u03BF\u03CD\u03B6\u03B9', '\u0394\u03CD\u03BF \u03B1\u03BD\u03B5\u03BE\u03AC\u03C1\u03C4\u03B7\u03C4\u03B1 \u03BA\u03C4\u03AF\u03C1\u03B9\u03B1', '\u0395\u03C5\u03C1\u03CD\u03C7\u03C9\u03C1\u03B7 \u03BC\u03C0\u03B1\u03BD\u03B9\u03AD\u03C1\u03B1', '\u0395\u03BE\u03C9\u03C4\u03B5\u03C1\u03B9\u03BA\u03CC \u03C4\u03C1\u03B1\u03C0\u03B5\u03B6\u03AC\u03BA\u03B9', '\u0391\u03B9\u03CE\u03C1\u03B1 & \u03C7\u03B1\u03BB\u03AC\u03C1\u03C9\u03C3\u03B7'],
    },
    heroImage: '/images/suites/apollonia-hero.jpg',
    images: [],
    order: 6,
    /** PROVISIONAL NOTE: Content on the current rabagas-suites.com appears to overlap
     * significantly with Sunshine Suite. This listing is preserved as-is pending
     * client clarification on whether these are two distinct properties or aliases. */
  },
];

export function getSuiteBySlug(slug: string): Suite | undefined {
  return suites.find((s) => s.slug === slug);
}

export function getAllSuites(): Suite[] {
  return [...suites].sort((a, b) => a.order - b.order);
}
