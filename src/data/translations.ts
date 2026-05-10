export type Locale = 'en' | 'el';

export interface Translations {
  [key: string]: {
    en: string;
    el: string;
  };
}

export const t: Translations = {
  // Navigation
  'nav.home': { en: 'Home', el: '\u0391\u03C1\u03C7\u03B9\u03BA\u03AE' },
  'nav.suites': { en: 'Suites', el: '\u03A3\u03BF\u03C5\u03AF\u03C4\u03B5\u03C2' },
  'nav.story': { en: 'Our Story', el: '\u0397 \u0399\u03C3\u03C4\u03BF\u03C1\u03AF\u03B1 \u03BC\u03B1\u03C2' },
  'nav.contact': { en: 'Contact', el: '\u0395\u03C0\u03B9\u03BA\u03BF\u03B9\u03BD\u03C9\u03BD\u03AF\u03B1' },
  'nav.book': { en: 'Reserve', el: '\u039A\u03C1\u03AC\u03C4\u03B7\u03C3\u03B7' },

  // Hero
  'hero.tagline': { en: 'Luxury can be discreet', el: '\u0397 \u03C0\u03BF\u03BB\u03C5\u03C4\u03AD\u03BB\u03B5\u03B9\u03B1 \u03BC\u03C0\u03BF\u03C1\u03B5\u03AF \u03BD\u03B1 \u03B5\u03AF\u03BD\u03B1\u03B9 \u03B4\u03B9\u03B1\u03BA\u03C1\u03B9\u03C4\u03B9\u03BA\u03AE' },
  'hero.subtitle': {
    en: 'Five heritage suites in the heart of Apollonia, Sifnos',
    el: '\u03A0\u03AD\u03BD\u03C4\u03B5 \u03C3\u03BF\u03C5\u03AF\u03C4\u03B5\u03C2 \u03BA\u03BB\u03B7\u03C1\u03BF\u03BD\u03BF\u03BC\u03B9\u03AC\u03C2 \u03C3\u03C4\u03B7\u03BD \u03BA\u03B1\u03C1\u03B4\u03B9\u03AC \u03C4\u03B7\u03C2 \u0391\u03C0\u03BF\u03BB\u03BB\u03C9\u03BD\u03AF\u03B1\u03C2, \u03A3\u03AF\u03C6\u03BD\u03BF\u03C2',
  },
  'hero.cta.book': { en: 'Book Your Stay', el: '\u039A\u03C1\u03B1\u03C4\u03AE\u03C3\u03C4\u03B5 \u03C4\u03CE\u03C1\u03B1' },
  'hero.cta.explore': { en: 'Explore Suites', el: '\u0394\u03B5\u03AF\u03C4\u03B5 \u03C4\u03B9\u03C2 \u03C3\u03BF\u03C5\u03AF\u03C4\u03B5\u03C2' },

  // Section labels
  'section.suites': { en: 'Our Suites', el: '\u039F\u03B9 \u03A3\u03BF\u03C5\u03AF\u03C4\u03B5\u03C2 \u03BC\u03B1\u03C2' },
  'section.suites.subtitle': {
    en: 'Five unique residences, each with its own character',
    el: '\u03A0\u03AD\u03BD\u03C4\u03B5 \u03BC\u03BF\u03BD\u03B1\u03B4\u03B9\u03BA\u03AD\u03C2 \u03BA\u03B1\u03C4\u03BF\u03B9\u03BA\u03AF\u03B5\u03C2, \u03BA\u03B1\u03B8\u03B5\u03BC\u03AF\u03B1 \u03BC\u03B5 \u03C4\u03BF \u03B4\u03B9\u03BA\u03CC \u03C4\u03B7\u03C2 \u03C7\u03B1\u03C1\u03B1\u03BA\u03C4\u03AE\u03C1\u03B1',
  },
  'section.why': { en: 'Why Rabagas', el: '\u0393\u03B9\u03B1\u03C4\u03AF Rabagas' },
  'section.experience': { en: 'The Experience', el: '\u0397 \u0395\u03BC\u03C0\u03B5\u03B9\u03C1\u03AF\u03B1' },
  'section.testimonials': { en: 'Guest Voices', el: '\u03A6\u03C9\u03BD\u03AD\u03C2 \u0395\u03C0\u03B9\u03C3\u03BA\u03B5\u03C0\u03C4\u03CE\u03BD' },
  'section.booking': { en: 'Book Direct', el: '\u0386\u03BC\u03B5\u03C3\u03B7 \u039A\u03C1\u03AC\u03C4\u03B7\u03C3\u03B7' },

  // Suite labels
  'suite.guests': { en: 'Guests', el: '\u0386\u03C4\u03BF\u03BC\u03B1' },
  'suite.bedrooms': { en: 'Bedrooms', el: '\u03A5\u03C0\u03BD\u03BF\u03B4\u03C9\u03BC\u03AC\u03C4\u03B9\u03B1' },
  'suite.bathrooms': { en: 'Bathrooms', el: '\u039C\u03C0\u03AC\u03BD\u03B9\u03B1' },
  'suite.jacuzzi': { en: 'Private Jacuzzi', el: '\u0399\u03B4\u03B9\u03C9\u03C4\u03B9\u03BA\u03CC \u0384\u03C4\u03B6\u03B1\u03BA\u03BF\u03CD\u03B6\u03B9' },
  'suite.kitchen': { en: 'Kitchen', el: '\u039A\u03BF\u03C5\u03B6\u03AF\u03BD\u03B1' },
  'suite.balcony': { en: 'Balcony', el: '\u039C\u03C0\u03B1\u03BB\u03BA\u03CC\u03BD\u03B9' },
  'suite.yard': { en: 'Private Yard', el: '\u0399\u03B4\u03B9\u03C9\u03C4\u03B9\u03BA\u03CC\u03C2 \u039A\u03AE\u03C0\u03BF\u03C2' },
  'suite.discover': { en: 'Discover Suite', el: '\u0391\u03BD\u03B1\u03BA\u03B1\u03BB\u03CD\u03C8\u03C4\u03B5' },
  'suite.bestFor': { en: 'Best for', el: '\u0399\u03B4\u03B1\u03BD\u03B9\u03BA\u03CC \u03B3\u03B9\u03B1' },
  'suite.highlights': { en: 'Highlights', el: '\u039A\u03BF\u03C1\u03C5\u03C6\u03B1\u03AF\u03B1 \u03C7\u03B1\u03C1\u03B1\u03BA\u03C4\u03B7\u03C1\u03B9\u03C3\u03C4\u03B9\u03BA\u03AC' },
  'suite.amenities': { en: 'Amenities', el: '\u03A0\u03B1\u03C1\u03BF\u03C7\u03AD\u03C2' },
  'suite.related': { en: 'You may also like', el: '\u039C\u03C0\u03BF\u03C1\u03B5\u03AF \u03BD\u03B1 \u03C3\u03B1\u03C2 \u03B1\u03C1\u03AD\u03C3\u03B5\u03B9' },
  'suite.bookThis': { en: 'Book This Suite', el: '\u039A\u03C1\u03B1\u03C4\u03AE\u03C3\u03C4\u03B5 \u03B1\u03C5\u03C4\u03AE \u03C4\u03B7 \u03C3\u03BF\u03C5\u03AF\u03C4\u03B1' },
  'suite.viewAll': { en: 'View All Suites', el: '\u039C\u03B5\u03C4\u03AC\u03B2\u03B1\u03C3\u03B7 \u03C3\u03C4\u03B9\u03C2 \u03C3\u03BF\u03C5\u03AF\u03C4\u03B5\u03C2' },

  // Why Rabagas
  'why.location.title': { en: 'Heart of Apollonia', el: '\u039A\u03B1\u03C1\u03B4\u03B9\u03AC \u03C4\u03B7\u03C2 \u0391\u03C0\u03BF\u03BB\u03BB\u03C9\u03BD\u03AF\u03B1\u03C2' },
  'why.location.desc': {
    en: 'Steps from the central pedestrian alley, surrounded by tavernas, shops, and village life.',
    el: '\u039B\u03AF\u03B3\u03B1 \u03B2\u03AE\u03BC\u03B1\u03C4\u03B1 \u03B1\u03C0\u03CC \u03C4\u03BF\u03BD \u03BA\u03B5\u03BD\u03C4\u03C1\u03B9\u03BA\u03CC \u03C0\u03B5\u03B6\u03CC\u03B4\u03C1\u03BF\u03BC\u03BF.',
  },
  'why.heritage.title': { en: 'Pre-1910 Heritage', el: '\u039A\u03BB\u03B7\u03C1\u03BF\u03BD\u03BF\u03BC\u03B9\u03AC \u03C0\u03C1\u03BF 1910' },
  'why.heritage.desc': {
    en: 'Restored traditional Cycladic buildings with authentic crooked plaster walls and handcrafted details.',
    el: '\u0391\u03BD\u03B1\u03C3\u03C4\u03B7\u03BB\u03C9\u03BC\u03AD\u03BD\u03B1 \u03C0\u03B1\u03C1\u03B1\u03B4\u03BF\u03C3\u03B9\u03B1\u03BA\u03AC \u03BA\u03C5\u03BA\u03BB\u03B1\u03B4\u03AF\u03C4\u03B9\u03BA\u03B1 \u03BA\u03C4\u03AF\u03C1\u03B9\u03B1.',
  },
  'why.views.title': { en: 'Aegean Views', el: '\u0398\u03AD\u03B1 \u0391\u03B9\u03B3\u03B1\u03AF\u03BF\u03C5' },
  'why.views.desc': {
    en: 'Wake to panoramic views of the Aegean Sea, Antiparos island, and the village of Artemonas.',
    el: '\u039E\u03C5\u03C0\u03BD\u03AE\u03C3\u03C4\u03B5 \u03BC\u03B5 \u03C0\u03B1\u03BD\u03BF\u03C1\u03B1\u03BC\u03B9\u03BA\u03AE \u03B8\u03AD\u03B1 \u03C3\u03C4\u03BF \u0391\u03B9\u03B3\u03B1\u03AF\u03BF.',
  },
  'why.comfort.title': { en: 'Curated Comfort', el: '\u0395\u03C0\u03B9\u03BC\u03B5\u03BB\u03B7\u03BC\u03AD\u03BD\u03B7 \u0386\u03BD\u03B5\u03C3\u03B7' },
  'why.comfort.desc': {
    en: 'Custom latex mattresses, feather pillows, premium linens, and luxury toiletries in every suite.',
    el: '\u03A3\u03C4\u03C1\u03CE\u03BC\u03B1\u03C4\u03B1 latex, \u03BC\u03B1\u03BE\u03B9\u03BB\u03AC\u03C1\u03B9\u03B1 \u03C0\u03BF\u03CD\u03C0\u03BF\u03C5\u03BB\u03BF\u03C5 \u03BA\u03B1\u03B9 \u03C0\u03C1\u03BF\u03CA\u03CC\u03BD\u03C4\u03B1 \u03C0\u03BF\u03BB\u03C5\u03C4\u03B5\u03BB\u03B5\u03AF\u03B1\u03C2.',
  },
  'why.hospitality.title': { en: 'Personal Hospitality', el: '\u03A0\u03C1\u03BF\u03C3\u03C9\u03C0\u03B9\u03BA\u03AE \u03A6\u03B9\u03BB\u03BF\u03BE\u03B5\u03BD\u03AF\u03B1' },
  'why.hospitality.desc': {
    en: 'George and Didi welcome you personally, sharing their love of Sifnos and ensuring every detail is perfect.',
    el: '\u039F \u0393\u03B9\u03CE\u03C1\u03B3\u03BF\u03C2 \u03BA\u03B1\u03B9 \u03B7 \u039D\u03C4\u03AF\u03BD\u03C4\u03B9 \u03C3\u03B1\u03C2 \u03C5\u03C0\u03BF\u03B4\u03AD\u03C7\u03BF\u03BD\u03C4\u03B1\u03B9 \u03C0\u03C1\u03BF\u03C3\u03C9\u03C0\u03B9\u03BA\u03AC.',
  },
  'why.privacy.title': { en: 'Discreet Privacy', el: '\u0394\u03B9\u03B1\u03BA\u03C1\u03B9\u03C4\u03B9\u03BA\u03AE \u0399\u03B4\u03B9\u03C9\u03C4\u03B9\u03BA\u03CC\u03C4\u03B7\u03C4\u03B1' },
  'why.privacy.desc': {
    en: 'Independent residences with private outdoor spaces \u2014 the intimacy of a home, the quality of a luxury hotel.',
    el: '\u0391\u03BD\u03B5\u03BE\u03AC\u03C1\u03C4\u03B7\u03C4\u03B5\u03C2 \u03BA\u03B1\u03C4\u03BF\u03B9\u03BA\u03AF\u03B5\u03C2 \u03BC\u03B5 \u03B9\u03B4\u03B9\u03C9\u03C4\u03B9\u03BA\u03BF\u03CD\u03C2 \u03B5\u03BE\u03C9\u03C4\u03B5\u03C1\u03B9\u03BA\u03BF\u03CD\u03C2 \u03C7\u03CE\u03C1\u03BF\u03C5\u03C2.',
  },

  // Booking
  'booking.title': { en: 'Book Direct for the Best Experience', el: '\u039A\u03C1\u03B1\u03C4\u03AE\u03C3\u03C4\u03B5 \u0386\u03BC\u03B5\u03C3\u03B1' },
  'booking.subtitle': {
    en: 'Enjoy exclusive benefits when you book directly with us.',
    el: '\u0391\u03C0\u03BF\u03BB\u03B1\u03CD\u03C3\u03C4\u03B5 \u03B1\u03C0\u03BF\u03BA\u03BB\u03B5\u03B9\u03C3\u03C4\u03B9\u03BA\u03AC \u03C0\u03C1\u03BF\u03BD\u03CC\u03BC\u03B9\u03B1 \u03BA\u03C1\u03B1\u03C4\u03CE\u03BD\u03C4\u03B1\u03C2 \u03B1\u03C0\u03B5\u03C5\u03B8\u03B5\u03AF\u03B1\u03C2.',
  },
  'booking.benefit.price': { en: 'Best price guaranteed', el: '\u039A\u03B1\u03BB\u03CD\u03C4\u03B5\u03C1\u03B7 \u03C4\u03B9\u03BC\u03AE \u03B5\u03B3\u03B3\u03C5\u03B7\u03BC\u03AD\u03BD\u03B7' },
  'booking.benefit.flexible': { en: 'Flexible cancellation', el: '\u0395\u03C5\u03AD\u03BB\u03B9\u03BA\u03C4\u03B7 \u03B1\u03BA\u03CD\u03C1\u03C9\u03C3\u03B7' },
  'booking.benefit.welcome': { en: 'Complimentary welcome basket', el: '\u0394\u03C9\u03C1\u03B5\u03AC\u03BD \u03BA\u03B1\u03BB\u03B1\u03B8\u03AC\u03BA\u03B9 \u03C5\u03C0\u03BF\u03B4\u03BF\u03C7\u03AE\u03C2' },
  'booking.benefit.concierge': { en: 'Personal concierge', el: '\u03A0\u03C1\u03BF\u03C3\u03C9\u03C0\u03B9\u03BA\u03CC concierge' },
  'booking.cta': { en: 'Check Availability', el: '\u0394\u03B5\u03AF\u03C4\u03B5 \u0394\u03B9\u03B1\u03B8\u03B5\u03C3\u03B9\u03BC\u03CC\u03C4\u03B7\u03C4\u03B1' },
  'booking.or': { en: 'or', el: '\u03AE' },
  'booking.email': { en: 'Email us directly', el: '\u03A3\u03C4\u03B5\u03AF\u03BB\u03C4\u03B5 \u03BC\u03B1\u03C2 email' },

  // Testimonials
  'testimonials.source': { en: 'Guest reviews from our visitors', el: '\u039A\u03C1\u03B9\u03C4\u03B9\u03BA\u03AD\u03C2 \u03B1\u03C0\u03CC \u03C4\u03BF\u03C5\u03C2 \u03B5\u03C0\u03B9\u03C3\u03BA\u03AD\u03C0\u03C4\u03B5\u03C2 \u03BC\u03B1\u03C2' },

  // Contact
  'contact.title': { en: 'Get in Touch', el: '\u0395\u03C0\u03B9\u03BA\u03BF\u03B9\u03BD\u03C9\u03BD\u03AE\u03C3\u03C4\u03B5 \u03BC\u03B1\u03B6\u03AF \u03BC\u03B1\u03C2' },
  'contact.subtitle': {
    en: 'We would love to help you plan your stay in Sifnos.',
    el: '\u0398\u03B1 \u03C7\u03B1\u03C1\u03BF\u03CD\u03BC\u03B5 \u03BD\u03B1 \u03C3\u03B1\u03C2 \u03B2\u03BF\u03B7\u03B8\u03AE\u03C3\u03BF\u03C5\u03BC\u03B5.',
  },
  'contact.address': { en: 'Address', el: '\u0394\u03B9\u03B5\u03CD\u03B8\u03C5\u03BD\u03C3\u03B7' },
  'contact.phone': { en: 'Phone', el: '\u03A4\u03B7\u03BB\u03AD\u03C6\u03C9\u03BD\u03BF' },
  'contact.email': { en: 'Email', el: 'Email' },
  'contact.hours': { en: 'Hours', el: '\u038F\u03C1\u03B5\u03C2' },
  'contact.getDirections': { en: 'Get Directions', el: '\u039F\u03B4\u03B7\u03B3\u03AF\u03B5\u03C2' },
  'contact.sendMessage': { en: 'Send a Message', el: '\u03A3\u03C4\u03B5\u03AF\u03BB\u03C4\u03B5 \u03BC\u03AE\u03BD\u03C5\u03BC\u03B1' },
  'contact.name': { en: 'Your Name', el: '\u038C\u03BD\u03BF\u03BC\u03AC \u03C3\u03B1\u03C2' },
  'contact.emailField': { en: 'Your Email', el: 'Email \u03C3\u03B1\u03C2' },
  'contact.message': { en: 'Your Message', el: '\u039C\u03AE\u03BD\u03C5\u03BC\u03AC \u03C3\u03B1\u03C2' },
  'contact.send': { en: 'Send Message', el: '\u0391\u03C0\u03BF\u03C3\u03C4\u03BF\u03BB\u03AE' },

  // Story page
  'story.title': { en: 'Our Story', el: '\u0397 \u0399\u03C3\u03C4\u03BF\u03C1\u03AF\u03B1 \u03BC\u03B1\u03C2' },
  'story.subtitle': {
    en: 'A restored Cycladic settlement with a poet\'s soul',
    el: '\u0388\u03BD\u03B1\u03C2 \u03B1\u03BD\u03B1\u03C3\u03C4\u03B7\u03BB\u03C9\u03BC\u03AD\u03BD\u03BF\u03C2 \u03BA\u03C5\u03BA\u03BB\u03B1\u03B4\u03AF\u03C4\u03B9\u03BA\u03BF\u03C2 \u03BF\u03B9\u03BA\u03B9\u03C3\u03BC\u03CC\u03C2 \u03BC\u03B5 \u03C8\u03C5\u03C7\u03AE \u03C0\u03BF\u03B9\u03B7\u03C4\u03AE',
  },

  // Footer
  'footer.tagline': {
    en: 'Heritage suites in the heart of Apollonia, Sifnos',
    el: '\u03A3\u03BF\u03C5\u03AF\u03C4\u03B5\u03C2 \u03BA\u03BB\u03B7\u03C1\u03BF\u03BD\u03BF\u03BC\u03B9\u03AC\u03C2 \u03C3\u03C4\u03B7\u03BD \u03BA\u03B1\u03C1\u03B4\u03B9\u03AC \u03C4\u03B7\u03C2 \u0391\u03C0\u03BF\u03BB\u03BB\u03C9\u03BD\u03AF\u03B1\u03C2, \u03A3\u03AF\u03C6\u03BD\u03BF\u03C2',
  },
  'footer.explore': { en: 'Explore', el: '\u0395\u03BE\u03B5\u03C1\u03B5\u03C5\u03BD\u03AE\u03C3\u03C4\u03B5' },
  'footer.connect': { en: 'Connect', el: '\u03A3\u03CD\u03BD\u03B4\u03B5\u03C3\u03B7' },
  'footer.rights': { en: 'All rights reserved.', el: '\u039C\u03B5 \u03B5\u03C0\u03B9\u03C6\u03CD\u03BB\u03B1\u03BE\u03B7 \u03C0\u03B1\u03BD\u03C4\u03CC\u03C2 \u03B4\u03B9\u03BA\u03B1\u03B9\u03CE\u03BC\u03B1\u03C4\u03BF\u03C2.' },

  // CTA
  'cta.final.title': { en: 'Your Sifnos Story Begins Here', el: '\u0397 \u03B9\u03C3\u03C4\u03BF\u03C1\u03AF\u03B1 \u03C3\u03B1\u03C2 \u03C3\u03C4\u03B7 \u03A3\u03AF\u03C6\u03BD\u03BF \u03BE\u03B5\u03BA\u03B9\u03BD\u03AC \u03B5\u03B4\u03CE' },
  'cta.final.desc': {
    en: 'Choose your suite, set your dates, and let us take care of the rest.',
    el: '\u0394\u03B9\u03B1\u03BB\u03AD\u03BE\u03C4\u03B5 \u03C3\u03BF\u03C5\u03AF\u03C4\u03B1, \u03BF\u03C1\u03AF\u03C3\u03C4\u03B5 \u03B7\u03BC\u03B5\u03C1\u03BF\u03BC\u03B7\u03BD\u03AF\u03B5\u03C2 \u03BA\u03B9 \u03B5\u03BC\u03B5\u03AF\u03C2 \u03B1\u03BD\u03B1\u03BB\u03B1\u03BC\u03B2\u03AC\u03BD\u03BF\u03C5\u03BC\u03B5.',
  },

  // Amenities
  'amenities.wifi': { en: 'Ultra-fast Wi-Fi', el: '\u03A5\u03C0\u03B5\u03C1\u03C4\u03B1\u03C7\u03CD Wi-Fi' },
  'amenities.ac': { en: 'Air Conditioning', el: '\u039A\u03BB\u03B9\u03BC\u03B1\u03C4\u03B9\u03C3\u03BC\u03CC\u03C2' },
  'amenities.tv': { en: 'Smart TV & Streaming', el: 'Smart TV & Streaming' },
  'amenities.toiletries': { en: 'Luxury Toiletries', el: '\u03A0\u03C1\u03BF\u03CA\u03CC\u03BD\u03C4\u03B1 \u03C0\u03BF\u03BB\u03C5\u03C4\u03B5\u03BB\u03B5\u03AF\u03B1\u03C2' },
  'amenities.coffee': { en: 'Coffee Machine', el: '\u039C\u03B7\u03C7\u03B1\u03BD\u03AE \u03BA\u03B1\u03C6\u03AD' },
  'amenities.bikes': { en: 'Bikes & E-bikes', el: '\u03A0\u03BF\u03B4\u03AE\u03BB\u03B1\u03C4\u03B1 & \u0397\u03BB\u03B5\u03BA\u03C4\u03C1\u03B9\u03BA\u03AC' },
  'amenities.parking': { en: 'Free Parking', el: '\u0394\u03C9\u03C1\u03B5\u03AC\u03BD Parking' },
  'amenities.breakfast': { en: 'Welcome Breakfast', el: '\u03A0\u03C1\u03C9\u03B9\u03BD\u03CC \u03C5\u03C0\u03BF\u03B4\u03BF\u03C7\u03AE\u03C2' },
  'amenities.safe': { en: 'Safety Deposit Box', el: '\u03A7\u03C1\u03B7\u03BC\u03B1\u03C4\u03BF\u03BA\u03B9\u03B2\u03CE\u03C4\u03B9\u03BF' },
  'amenities.linens': { en: 'Premium Linens', el: '\u039B\u03B5\u03C5\u03BA\u03AC \u03B5\u03AF\u03B4\u03B7 \u03C0\u03BF\u03BB\u03C5\u03C4\u03B5\u03BB\u03B5\u03AF\u03B1\u03C2' },

  // Language
  'lang.en': { en: 'English', el: 'English' },
  'lang.el': { en: '\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC', el: '\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC' },

  // Misc
  'misc.scrollDown': { en: 'Scroll to explore', el: '\u039A\u03CD\u03BB\u03B9\u03C3\u03B5 \u03B3\u03B9\u03B1 \u03BD\u03B1 \u03B5\u03BE\u03B5\u03C1\u03B5\u03C5\u03BD\u03AE\u03C3\u03B5\u03B9\u03C2' },
};

export function translate(key: string, locale: Locale): string {
  const entry = t[key];
  if (!entry) return key;
  return entry[locale] || entry.en || key;
}
