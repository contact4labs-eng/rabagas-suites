export interface Testimonial {
  name: string;
  location: string;
  date: string;
  text: {
    en: string;
    el: string;
  };
  rating: number;
  source?: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Dylan',
    location: 'New York',
    date: 'June 2024',
    text: {
      en: 'The location is incredible \u2014 just seconds from the best shops and restaurants in Apollonia. The suite itself was beautifully designed and felt like a true home.',
      el: '\u0397 \u03C4\u03BF\u03C0\u03BF\u03B8\u03B5\u03C3\u03AF\u03B1 \u03B5\u03AF\u03BD\u03B1\u03B9 \u03B1\u03C0\u03AF\u03C3\u03C4\u03B5\u03C5\u03C4\u03B7 \u2014 \u03B4\u03B5\u03C5\u03C4\u03B5\u03C1\u03CC\u03BB\u03B5\u03C0\u03C4\u03B1 \u03B1\u03C0\u03CC \u03C4\u03B1 \u03BA\u03B1\u03BB\u03CD\u03C4\u03B5\u03C1\u03B1 \u03BC\u03B1\u03B3\u03B1\u03B6\u03B9\u03AC \u03BA\u03B1\u03B9 \u03B5\u03C3\u03C4\u03B9\u03B1\u03C4\u03CC\u03C1\u03B9\u03B1.',
    },
    rating: 10,
    source: 'Booking.com',
  },
  {
    name: 'Daniel',
    location: '',
    date: 'October 2024',
    text: {
      en: 'A perfect private compound. George and Didi are incredible hosts who go above and beyond to make your stay unforgettable.',
      el: '\u0388\u03BD\u03B1 \u03C4\u03AD\u03BB\u03B5\u03B9\u03BF \u03B9\u03B4\u03B9\u03C9\u03C4\u03B9\u03BA\u03CC \u03C3\u03C5\u03B3\u03BA\u03C1\u03CC\u03C4\u03B7\u03BC\u03B1. \u039F \u0393\u03B9\u03CE\u03C1\u03B3\u03BF\u03C2 \u03BA\u03B1\u03B9 \u03B7 \u039D\u03C4\u03AF\u03BD\u03C4\u03B9 \u03B5\u03AF\u03BD\u03B1\u03B9 \u03B5\u03BE\u03B1\u03B9\u03C1\u03B5\u03C4\u03B9\u03BA\u03BF\u03AF \u03BF\u03B9\u03BA\u03BF\u03B4\u03B5\u03C3\u03C0\u03CC\u03C4\u03B5\u03C2.',
    },
    rating: 10,
  },
  {
    name: 'Jasleen',
    location: '',
    date: 'August 2024',
    text: {
      en: 'One of the best stays in Greece. The team is super communicative and the suites are even more beautiful in person.',
      el: '\u039C\u03AF\u03B1 \u03B1\u03C0\u03CC \u03C4\u03B9\u03C2 \u03BA\u03B1\u03BB\u03CD\u03C4\u03B5\u03C1\u03B5\u03C2 \u03B4\u03B9\u03B1\u03BC\u03BF\u03BD\u03AD\u03C2 \u03C3\u03C4\u03B7\u03BD \u0395\u03BB\u03BB\u03AC\u03B4\u03B1.',
    },
    rating: 10,
  },
  {
    name: 'Simon',
    location: 'United Kingdom',
    date: 'June 2024',
    text: {
      en: 'A lovely, spacious, airy property full of character. The attention to detail is remarkable \u2014 you can feel the care that has gone into every corner.',
      el: '\u0388\u03BD\u03B1 \u03C5\u03C0\u03AD\u03C1\u03BF\u03C7\u03BF, \u03B5\u03C5\u03C1\u03CD\u03C7\u03C9\u03C1\u03BF, \u03B1\u03B5\u03C1\u03AC\u03C4\u03BF \u03BA\u03B1\u03C4\u03AC\u03BB\u03C5\u03BC\u03B1 \u03B3\u03B5\u03BC\u03AC\u03C4\u03BF \u03C7\u03B1\u03C1\u03B1\u03BA\u03C4\u03AE\u03C1\u03B1.',
    },
    rating: 10,
  },
  {
    name: 'Joram',
    location: '',
    date: 'August 2024',
    text: {
      en: 'Location beyond perfect, tastefully decorated with genuine Cycladic charm. The outdoor spaces are a dream.',
      el: '\u03A4\u03BF\u03C0\u03BF\u03B8\u03B5\u03C3\u03AF\u03B1 \u03C0\u03AD\u03C1\u03B1 \u03B1\u03C0\u03CC \u03C4\u03AD\u03BB\u03B5\u03B9\u03B1, \u03BC\u03B5 \u03B3\u03BF\u03CD\u03C3\u03C4\u03BF \u03BA\u03C5\u03BA\u03BB\u03B1\u03B4\u03AF\u03C4\u03B9\u03BA\u03B7\u03C2 \u03B3\u03BF\u03B7\u03C4\u03B5\u03AF\u03B1\u03C2.',
    },
    rating: 10,
  },
  {
    name: 'Corrado',
    location: '',
    date: '',
    text: {
      en: 'Stop searching and stay here. Absolutely one of the best properties we have ever stayed at. The compound is magical.',
      el: '\u03A3\u03C4\u03B1\u03BC\u03B1\u03C4\u03AE\u03C3\u03C4\u03B5 \u03BD\u03B1 \u03C8\u03AC\u03C7\u03BD\u03B5\u03C4\u03B5 \u03BA\u03B1\u03B9 \u03BC\u03B5\u03AF\u03BD\u03B5\u03C4\u03B5 \u03B5\u03B4\u03CE. \u0388\u03BD\u03B1 \u03B1\u03C0\u03CC \u03C4\u03B1 \u03BA\u03B1\u03BB\u03CD\u03C4\u03B5\u03C1\u03B1 \u03BA\u03B1\u03C4\u03B1\u03BB\u03CD\u03BC\u03B1\u03C4\u03B1.',
    },
    rating: 10,
  },
];
