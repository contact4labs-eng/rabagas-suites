export type Locale = 'el' | 'en' | 'fr';

export interface Translations {
  [key: string]: {
    en: string;
    el: string;
    fr: string;
  };
}

export const t: Translations = {
  // Navigation
  'nav.home': { en: 'Home', el: '\u0391\u03C1\u03C7\u03B9\u03BA\u03AE' , fr: 'Accueil'},
  'nav.suites': { en: 'Suites', el: '\u03A3\u03BF\u03C5\u03AF\u03C4\u03B5\u03C2' , fr: 'Suites'},
  'nav.story': { en: 'Our Story', el: '\u0397 \u0399\u03C3\u03C4\u03BF\u03C1\u03AF\u03B1 \u03BC\u03B1\u03C2' , fr: 'Notre histoire'},
  'nav.contact': { en: 'Contact', el: '\u0395\u03C0\u03B9\u03BA\u03BF\u03B9\u03BD\u03C9\u03BD\u03AF\u03B1' , fr: 'Contact'},
  'nav.book': { en: 'Reserve', el: '\u039A\u03C1\u03AC\u03C4\u03B7\u03C3\u03B7' , fr: 'Réserver'},

  // Hero
  'hero.tagline': { en: 'Luxury can be discreet', el: '\u0397 \u03C0\u03BF\u03BB\u03C5\u03C4\u03AD\u03BB\u03B5\u03B9\u03B1 \u03BC\u03C0\u03BF\u03C1\u03B5\u03AF \u03BD\u03B1 \u03B5\u03AF\u03BD\u03B1\u03B9 \u03B4\u03B9\u03B1\u03BA\u03C1\u03B9\u03C4\u03B9\u03BA\u03AE' , fr: 'Le luxe peut être discret'},
  'hero.subtitle': {
    en: 'Six suites. Pre-1910 Cycladic. Heart of Apollonia, Sifnos.',
    el: 'Έξι σουίτες. Κυκλαδίτικα κτίρια προ του 1910. Καρδιά της Απολλωνίας, Σίφνος.', fr: 'Six suites. Bâtiments cycladiques d’avant 1910. Cœur d’Apollonia, Sifnos.'
  },
  'hero.cta.book': { en: 'Hold Your Dates', el: 'Κρατήστε τις ημερομηνίες σας' , fr: 'Réservez vos dates'},
  'hero.cta.explore': { en: 'Explore Suites', el: '\u0394\u03B5\u03AF\u03C4\u03B5 \u03C4\u03B9\u03C2 \u03C3\u03BF\u03C5\u03AF\u03C4\u03B5\u03C2' , fr: 'Découvrir les suites'},

  // Section labels
  'section.suites': { en: 'Our Suites', el: '\u039F\u03B9 \u03A3\u03BF\u03C5\u03AF\u03C4\u03B5\u03C2 \u03BC\u03B1\u03C2' , fr: 'Nos suites'},
  'section.suites.subtitle': {
    en: 'Six. Each one a different door, a different shape, a different ceiling.',
    el: 'Έξι. Καθεμία διαφορετική πόρτα, διαφορετικό σχήμα, διαφορετικό ταβάνι.', fr: 'Six. Chacune avec une porte différente, une forme différente, un plafond différent.'
  },
  'section.why': { en: 'Why Rabagas', el: '\u0393\u03B9\u03B1\u03C4\u03AF Rabagas' , fr: 'Pourquoi Rabagas'},
  'section.experience': { en: 'The Experience', el: '\u0397 \u0395\u03BC\u03C0\u03B5\u03B9\u03C1\u03AF\u03B1' , fr: 'L’expérience'},
  'section.testimonials': { en: 'Guest Voices', el: '\u03A6\u03C9\u03BD\u03AD\u03C2 \u0395\u03C0\u03B9\u03C3\u03BA\u03B5\u03C0\u03C4\u03CE\u03BD' , fr: 'La voix de nos hôtes'},
  'section.booking': { en: 'Book Direct', el: '\u0386\u03BC\u03B5\u03C3\u03B7 \u039A\u03C1\u03AC\u03C4\u03B7\u03C3\u03B7' , fr: 'Réservation directe'},

  // Suite labels
  'suite.guests': { en: 'Guests', el: '\u0386\u03C4\u03BF\u03BC\u03B1' , fr: 'Personnes'},
  'suite.bedrooms': { en: 'Bedrooms', el: '\u03A5\u03C0\u03BD\u03BF\u03B4\u03C9\u03BC\u03AC\u03C4\u03B9\u03B1' , fr: 'Chambres'},
  'suite.bathrooms': { en: 'Bathrooms', el: '\u039C\u03C0\u03AC\u03BD\u03B9\u03B1' , fr: 'Salles de bain'},
  'suite.jacuzzi': { en: 'Private Jacuzzi', el: '\u0399\u03B4\u03B9\u03C9\u03C4\u03B9\u03BA\u03CC \u0384\u03C4\u03B6\u03B1\u03BA\u03BF\u03CD\u03B6\u03B9' , fr: 'Jacuzzi privé'},
  'suite.kitchen': { en: 'Kitchen', el: '\u039A\u03BF\u03C5\u03B6\u03AF\u03BD\u03B1' , fr: 'Cuisine'},
  'suite.balcony': { en: 'Balcony', el: '\u039C\u03C0\u03B1\u03BB\u03BA\u03CC\u03BD\u03B9' , fr: 'Balcon'},
  'suite.yard': { en: 'Private Yard', el: '\u0399\u03B4\u03B9\u03C9\u03C4\u03B9\u03BA\u03CC\u03C2 \u039A\u03AE\u03C0\u03BF\u03C2' , fr: 'Cour privée'},
  'suite.discover': { en: 'Discover Suite', el: '\u0391\u03BD\u03B1\u03BA\u03B1\u03BB\u03CD\u03C8\u03C4\u03B5' , fr: 'Découvrir la suite'},
  'suite.bestFor': { en: 'Best for', el: '\u0399\u03B4\u03B1\u03BD\u03B9\u03BA\u03CC \u03B3\u03B9\u03B1' , fr: 'Idéal pour'},
  'suite.highlights': { en: 'Highlights', el: '\u039A\u03BF\u03C1\u03C5\u03C6\u03B1\u03AF\u03B1 \u03C7\u03B1\u03C1\u03B1\u03BA\u03C4\u03B7\u03C1\u03B9\u03C3\u03C4\u03B9\u03BA\u03AC' , fr: 'Points forts'},
  'suite.amenities': { en: 'Amenities', el: '\u03A0\u03B1\u03C1\u03BF\u03C7\u03AD\u03C2' , fr: 'Équipements'},
  'suite.related': { en: 'You may also like', el: '\u039C\u03C0\u03BF\u03C1\u03B5\u03AF \u03BD\u03B1 \u03C3\u03B1\u03C2 \u03B1\u03C1\u03AD\u03C3\u03B5\u03B9' , fr: 'Vous aimerez aussi'},
  'suite.bookThis': { en: 'Book This Suite', el: '\u039A\u03C1\u03B1\u03C4\u03AE\u03C3\u03C4\u03B5 \u03B1\u03C5\u03C4\u03AE \u03C4\u03B7 \u03C3\u03BF\u03C5\u03AF\u03C4\u03B1' , fr: 'Réserver cette suite'},
  'suite.viewAll': { en: 'View All Suites', el: '\u039C\u03B5\u03C4\u03AC\u03B2\u03B1\u03C3\u03B7 \u03C3\u03C4\u03B9\u03C2 \u03C3\u03BF\u03C5\u03AF\u03C4\u03B5\u03C2' , fr: 'Voir toutes les suites'},

  // Why Rabagas
  'why.location.title': { en: 'Heart of Apollonia', el: '\u039A\u03B1\u03C1\u03B4\u03B9\u03AC \u03C4\u03B7\u03C2 \u0391\u03C0\u03BF\u03BB\u03BB\u03C9\u03BD\u03AF\u03B1\u03C2' , fr: 'Au cœur d’Apollonia'},
  'why.location.desc': {
    en: 'On the central pedestrian alley. Twenty tavernas, bakeries and bars within a ten-minute walk.',
    el: 'Στον κεντρικό πεζόδρομο. Είκοσι ταβέρνες, φούρνοι και μπαρ σε περπατημένη απόσταση δέκα λεπτών.', fr: 'Sur l’allée piétonne centrale. Vingt tavernes, boulangeries et bars à dix minutes à pied.'
  },
  'why.heritage.title': { en: 'Pre-1910 Heritage', el: '\u039A\u03BB\u03B7\u03C1\u03BF\u03BD\u03BF\u03BC\u03B9\u03AC \u03C0\u03C1\u03BF 1910' , fr: 'Patrimoine d’avant 1910'},
  'why.heritage.desc': {
    en: 'The buildings are pre-1910. The plaster is the original. We didn’t straighten the walls.',
    el: 'Τα κτίρια είναι προ του 1910. Ο σοβάς είναι ο αρχικός. Δεν ισιώσαμε τους τοίχους.', fr: 'Les bâtiments sont d’avant 1910. Le plâtre est d’origine. Nous n’avons pas redressé les murs.'
  },
  'why.views.title': { en: 'Aegean Views', el: '\u0398\u03AD\u03B1 \u0391\u03B9\u03B3\u03B1\u03AF\u03BF\u03C5' , fr: 'Vues sur la mer Égée'},
  'why.views.desc': {
    en: 'Wake to panoramic views of the Aegean Sea, Antiparos island, and the village of Artemonas.',
    el: '\u039E\u03C5\u03C0\u03BD\u03AE\u03C3\u03C4\u03B5 \u03BC\u03B5 \u03C0\u03B1\u03BD\u03BF\u03C1\u03B1\u03BC\u03B9\u03BA\u03AE \u03B8\u03AD\u03B1 \u03C3\u03C4\u03BF \u0391\u03B9\u03B3\u03B1\u03AF\u03BF.', fr: 'Réveillez-vous face aux vues panoramiques sur la mer Égée, l’île d’Antiparos et le village d’Artemonas.'
  },
  'why.comfort.title': { en: 'Curated Comfort', el: '\u0395\u03C0\u03B9\u03BC\u03B5\u03BB\u03B7\u03BC\u03AD\u03BD\u03B7 \u0386\u03BD\u03B5\u03C3\u03B7' , fr: 'Confort soigné'},
  'why.comfort.desc': {
    en: 'Custom latex mattresses, feather pillows, premium linens, and luxury toiletries in every suite.',
    el: '\u03A3\u03C4\u03C1\u03CE\u03BC\u03B1\u03C4\u03B1 latex, \u03BC\u03B1\u03BE\u03B9\u03BB\u03AC\u03C1\u03B9\u03B1 \u03C0\u03BF\u03CD\u03C0\u03BF\u03C5\u03BB\u03BF\u03C5 \u03BA\u03B1\u03B9 \u03C0\u03C1\u03BF\u03CA\u03CC\u03BD\u03C4\u03B1 \u03C0\u03BF\u03BB\u03C5\u03C4\u03B5\u03BB\u03B5\u03AF\u03B1\u03C2.', fr: 'Matelas en latex sur mesure, oreillers en plumes, linge premium et produits de toilette de luxe dans chaque suite.'
  },
  'why.hospitality.title': { en: 'Personal Hospitality', el: '\u03A0\u03C1\u03BF\u03C3\u03C9\u03C0\u03B9\u03BA\u03AE \u03A6\u03B9\u03BB\u03BF\u03BE\u03B5\u03BD\u03AF\u03B1' , fr: 'Accueil personnel'},
  'why.hospitality.desc': {
    en: 'Hosts on the island. Replies the same day.',
    el: 'Οικοδεσπότες στο νησί. Απαντάμε αυθημερόν.', fr: 'Hôtes sur l’île. Réponse dans la journée.'
  },
  'why.privacy.title': { en: 'Discreet Privacy', el: '\u0394\u03B9\u03B1\u03BA\u03C1\u03B9\u03C4\u03B9\u03BA\u03AE \u0399\u03B4\u03B9\u03C9\u03C4\u03B9\u03BA\u03CC\u03C4\u03B7\u03C4\u03B1' , fr: 'Intimité discrète'},
  'why.privacy.desc': {
    en: 'Independent residences with private outdoor spaces \u2014 the intimacy of a home, the quality of a luxury hotel.',
    el: '\u0391\u03BD\u03B5\u03BE\u03AC\u03C1\u03C4\u03B7\u03C4\u03B5\u03C2 \u03BA\u03B1\u03C4\u03BF\u03B9\u03BA\u03AF\u03B5\u03C2 \u03BC\u03B5 \u03B9\u03B4\u03B9\u03C9\u03C4\u03B9\u03BA\u03BF\u03CD\u03C2 \u03B5\u03BE\u03C9\u03C4\u03B5\u03C1\u03B9\u03BA\u03BF\u03CD\u03C2 \u03C7\u03CE\u03C1\u03BF\u03C5\u03C2.', fr: 'Demeures indépendantes avec espaces extérieurs privés — l’intimité d’une maison, la qualité d’un hôtel de luxe.'
  },

  // Booking
  'booking.title': { en: 'Book Direct for the Best Experience', el: '\u039A\u03C1\u03B1\u03C4\u03AE\u03C3\u03C4\u03B5 \u0386\u03BC\u03B5\u03C3\u03B1' , fr: 'Réservez en direct pour la meilleure expérience'},
  'booking.subtitle': {
    en: 'Enjoy exclusive benefits when you book directly with us.',
    el: '\u0391\u03C0\u03BF\u03BB\u03B1\u03CD\u03C3\u03C4\u03B5 \u03B1\u03C0\u03BF\u03BA\u03BB\u03B5\u03B9\u03C3\u03C4\u03B9\u03BA\u03AC \u03C0\u03C1\u03BF\u03BD\u03CC\u03BC\u03B9\u03B1 \u03BA\u03C1\u03B1\u03C4\u03CE\u03BD\u03C4\u03B1\u03C2 \u03B1\u03C0\u03B5\u03C5\u03B8\u03B5\u03AF\u03B1\u03C2.', fr: 'Profitez d’avantages exclusifs en réservant directement avec nous.'
  },
  'booking.benefit.price': { en: 'Best price guaranteed', el: '\u039A\u03B1\u03BB\u03CD\u03C4\u03B5\u03C1\u03B7 \u03C4\u03B9\u03BC\u03AE \u03B5\u03B3\u03B3\u03C5\u03B7\u03BC\u03AD\u03BD\u03B7' , fr: 'Meilleur tarif garanti'},
  'booking.benefit.flexible': { en: 'Flexible cancellation', el: '\u0395\u03C5\u03AD\u03BB\u03B9\u03BA\u03C4\u03B7 \u03B1\u03BA\u03CD\u03C1\u03C9\u03C3\u03B7' , fr: 'Annulation flexible'},
  'booking.benefit.welcome': { en: 'Complimentary welcome basket', el: '\u0394\u03C9\u03C1\u03B5\u03AC\u03BD \u03BA\u03B1\u03BB\u03B1\u03B8\u03AC\u03BA\u03B9 \u03C5\u03C0\u03BF\u03B4\u03BF\u03C7\u03AE\u03C2' , fr: 'Panier de bienvenue offert'},
  'booking.benefit.concierge': { en: 'Personal concierge', el: '\u03A0\u03C1\u03BF\u03C3\u03C9\u03C0\u03B9\u03BA\u03CC concierge' , fr: 'Conciergerie personnelle'},
  'booking.cta': { en: 'Check Availability', el: '\u0394\u03B5\u03AF\u03C4\u03B5 \u0394\u03B9\u03B1\u03B8\u03B5\u03C3\u03B9\u03BC\u03CC\u03C4\u03B7\u03C4\u03B1' , fr: 'Vérifier les disponibilités'},
  'booking.or': { en: 'or', el: '\u03AE' , fr: 'ou'},
  'booking.email': { en: 'Email us directly', el: '\u03A3\u03C4\u03B5\u03AF\u03BB\u03C4\u03B5 \u03BC\u03B1\u03C2 email' , fr: 'Envoyez-nous un email directement'},

  // Testimonials
  'testimonials.source': { en: 'Guest reviews from our visitors', el: '\u039A\u03C1\u03B9\u03C4\u03B9\u03BA\u03AD\u03C2 \u03B1\u03C0\u03CC \u03C4\u03BF\u03C5\u03C2 \u03B5\u03C0\u03B9\u03C3\u03BA\u03AD\u03C0\u03C4\u03B5\u03C2 \u03BC\u03B1\u03C2' , fr: 'Avis de nos visiteurs'},

  // Contact
  'contact.title': { en: 'Get in Touch', el: '\u0395\u03C0\u03B9\u03BA\u03BF\u03B9\u03BD\u03C9\u03BD\u03AE\u03C3\u03C4\u03B5 \u03BC\u03B1\u03B6\u03AF \u03BC\u03B1\u03C2' , fr: 'Nous contacter'},
  'contact.subtitle': {
    en: 'We would love to help you plan your stay in Sifnos.',
    el: '\u0398\u03B1 \u03C7\u03B1\u03C1\u03BF\u03CD\u03BC\u03B5 \u03BD\u03B1 \u03C3\u03B1\u03C2 \u03B2\u03BF\u03B7\u03B8\u03AE\u03C3\u03BF\u03C5\u03BC\u03B5.', fr: 'Nous serions ravis de vous aider à planifier votre séjour à Sifnos.'
  },
  'contact.address': { en: 'Address', el: '\u0394\u03B9\u03B5\u03CD\u03B8\u03C5\u03BD\u03C3\u03B7' , fr: 'Adresse'},
  'contact.phone': { en: 'Phone', el: '\u03A4\u03B7\u03BB\u03AD\u03C6\u03C9\u03BD\u03BF' , fr: 'Téléphone'},
  'contact.email': { en: 'Email', el: 'Email' , fr: 'Email'},
  'contact.hours': { en: 'Hours', el: '\u038F\u03C1\u03B5\u03C2' , fr: 'Horaires'},
  'contact.getDirections': { en: 'Get Directions', el: '\u039F\u03B4\u03B7\u03B3\u03AF\u03B5\u03C2' , fr: 'Itinéraire'},
  'contact.sendMessage': { en: 'Send a Message', el: '\u03A3\u03C4\u03B5\u03AF\u03BB\u03C4\u03B5 \u03BC\u03AE\u03BD\u03C5\u03BC\u03B1' , fr: 'Envoyer un message'},
  'contact.name': { en: 'Your Name', el: '\u038C\u03BD\u03BF\u03BC\u03AC \u03C3\u03B1\u03C2' , fr: 'Votre nom'},
  'contact.emailField': { en: 'Your Email', el: 'Email \u03C3\u03B1\u03C2' , fr: 'Votre email'},
  'contact.message': { en: 'Your Message', el: '\u039C\u03AE\u03BD\u03C5\u03BC\u03AC \u03C3\u03B1\u03C2' , fr: 'Votre message'},
  'contact.send': { en: 'Send Message', el: '\u0391\u03C0\u03BF\u03C3\u03C4\u03BF\u03BB\u03AE' , fr: 'Envoyer'},

  // Story page
  'story.title': { en: 'Our Story', el: '\u0397 \u0399\u03C3\u03C4\u03BF\u03C1\u03AF\u03B1 \u03BC\u03B1\u03C2' , fr: 'Notre histoire'},
  'story.subtitle': {
    en: 'A restored Cycladic settlement with a poet\'s soul',
    el: '\u0388\u03BD\u03B1\u03C2 \u03B1\u03BD\u03B1\u03C3\u03C4\u03B7\u03BB\u03C9\u03BC\u03AD\u03BD\u03BF\u03C2 \u03BA\u03C5\u03BA\u03BB\u03B1\u03B4\u03AF\u03C4\u03B9\u03BA\u03BF\u03C2 \u03BF\u03B9\u03BA\u03B9\u03C3\u03BC\u03CC\u03C2 \u03BC\u03B5 \u03C8\u03C5\u03C7\u03AE \u03C0\u03BF\u03B9\u03B7\u03C4\u03AE', fr: 'Un village cycladique restauré, à l’âme de poète'
  },

  // Footer
  'footer.tagline': {
    en: 'Heritage suites in the heart of Apollonia, Sifnos',
    el: '\u03A3\u03BF\u03C5\u03AF\u03C4\u03B5\u03C2 \u03BA\u03BB\u03B7\u03C1\u03BF\u03BD\u03BF\u03BC\u03B9\u03AC\u03C2 \u03C3\u03C4\u03B7\u03BD \u03BA\u03B1\u03C1\u03B4\u03B9\u03AC \u03C4\u03B7\u03C2 \u0391\u03C0\u03BF\u03BB\u03BB\u03C9\u03BD\u03AF\u03B1\u03C2, \u03A3\u03AF\u03C6\u03BD\u03BF\u03C2', fr: 'Suites de caractère au cœur d’Apollonia, Sifnos'
  },
  'footer.explore': { en: 'Explore', el: '\u0395\u03BE\u03B5\u03C1\u03B5\u03C5\u03BD\u03AE\u03C3\u03C4\u03B5' , fr: 'Explorer'},
  'footer.connect': { en: 'Connect', el: '\u03A3\u03CD\u03BD\u03B4\u03B5\u03C3\u03B7' , fr: 'Contact'},
  'footer.rights': { en: 'All rights reserved.', el: '\u039C\u03B5 \u03B5\u03C0\u03B9\u03C6\u03CD\u03BB\u03B1\u03BE\u03B7 \u03C0\u03B1\u03BD\u03C4\u03CC\u03C2 \u03B4\u03B9\u03BA\u03B1\u03B9\u03CE\u03BC\u03B1\u03C4\u03BF\u03C2.' , fr: 'Tous droits réservés.'},

  // CTA
  'cta.final.title': { en: 'Six suites. The season is short. Hold your dates.', el: 'Έξι σουίτες. Η σεζόν είναι σύντομη. Κρατήστε τις ημερομηνίες σας.' , fr: 'Six suites. La saison est courte. Réservez vos dates.'},
  'cta.final.desc': {
    en: 'Tell us your arrival ferry. We answer in person.',
    el: 'Πείτε μας ποιο πλοίο φτάνει. Απαντάμε αυτοπροσώπως.', fr: 'Dites-nous votre ferry d’arrivée. Nous répondons en personne.'
  },

  // Amenities
  'amenities.wifi': { en: 'Ultra-fast Wi-Fi', el: '\u03A5\u03C0\u03B5\u03C1\u03C4\u03B1\u03C7\u03CD Wi-Fi' , fr: 'Wi-Fi ultra-rapide'},
  'amenities.ac': { en: 'Air Conditioning', el: '\u039A\u03BB\u03B9\u03BC\u03B1\u03C4\u03B9\u03C3\u03BC\u03CC\u03C2' , fr: 'Climatisation'},
  'amenities.tv': { en: 'Smart TV & Streaming', el: 'Smart TV & Streaming' , fr: 'Smart TV & streaming'},
  'amenities.toiletries': { en: 'Luxury Toiletries', el: '\u03A0\u03C1\u03BF\u03CA\u03CC\u03BD\u03C4\u03B1 \u03C0\u03BF\u03BB\u03C5\u03C4\u03B5\u03BB\u03B5\u03AF\u03B1\u03C2' , fr: 'Produits de toilette de luxe'},
  'amenities.coffee': { en: 'Coffee Machine', el: '\u039C\u03B7\u03C7\u03B1\u03BD\u03AE \u03BA\u03B1\u03C6\u03AD' , fr: 'Machine à café'},
  'amenities.bikes': { en: 'Bikes & E-bikes', el: '\u03A0\u03BF\u03B4\u03AE\u03BB\u03B1\u03C4\u03B1 & \u0397\u03BB\u03B5\u03BA\u03C4\u03C1\u03B9\u03BA\u03AC' , fr: 'Vélos & vélos électriques'},
  'amenities.parking': { en: 'Free Parking', el: '\u0394\u03C9\u03C1\u03B5\u03AC\u03BD Parking' , fr: 'Parking gratuit'},
  'amenities.breakfast': { en: 'Welcome Breakfast', el: '\u03A0\u03C1\u03C9\u03B9\u03BD\u03CC \u03C5\u03C0\u03BF\u03B4\u03BF\u03C7\u03AE\u03C2' , fr: 'Petit-déjeuner de bienvenue'},
  'amenities.safe': { en: 'Safety Deposit Box', el: '\u03A7\u03C1\u03B7\u03BC\u03B1\u03C4\u03BF\u03BA\u03B9\u03B2\u03CE\u03C4\u03B9\u03BF' , fr: 'Coffre-fort'},
  'amenities.linens': { en: 'Premium Linens', el: '\u039B\u03B5\u03C5\u03BA\u03AC \u03B5\u03AF\u03B4\u03B7 \u03C0\u03BF\u03BB\u03C5\u03C4\u03B5\u03BB\u03B5\u03AF\u03B1\u03C2' , fr: 'Linge de lit premium'},

  // Language
  'lang.en': { en: 'English', el: 'English', fr: 'English' },
  'lang.el': { en: '\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC', el: '\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC', fr: '\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC' },
  'lang.fr': { en: 'Fran\u00E7ais', el: 'Fran\u00E7ais', fr: 'Fran\u00E7ais' },

  // Misc
  'misc.scrollDown': { en: 'Scroll to explore', el: '\u039A\u03CD\u03BB\u03B9\u03C3\u03B5 \u03B3\u03B9\u03B1 \u03BD\u03B1 \u03B5\u03BE\u03B5\u03C1\u03B5\u03C5\u03BD\u03AE\u03C3\u03B5\u03B9\u03C2' , fr: 'Faire défiler pour découvrir'},

  // Page titles (centralised, replaces hardcoded values in pages)
  'meta.home.title': { en: 'Rabagas Suites — Heritage Luxury in Apollonia, Sifnos', el: 'Rabagas Suites — Έξι σουίτες κληρονομιάς στην Απολλωνία, Σίφνος', fr: 'Rabagas Suites — Suites de caractère à Apollonia, Sifnos' },
  'meta.suites.title': { en: 'Our Suites — Rabagas Suites Sifnos', el: 'Οι Σουίτες μας — Rabagas Suites Σίφνος', fr: 'Nos suites — Rabagas Suites Sifnos' },
  'meta.story.title': { en: 'Our Story — Rabagas Suites Sifnos', el: 'Η Ιστορία μας — Rabagas Suites Σίφνος', fr: 'Notre histoire — Rabagas Suites Sifnos' },
  'meta.contact.title': { en: 'Arrive — Rabagas Suites Sifnos', el: 'Άφιξη — Rabagas Suites Σίφνος', fr: 'Votre arrivée — Rabagas Suites Sifnos' },
  'meta.home.description': { en: 'Six restored pre-1910 Cycladic suites in the heart of Apollonia, Sifnos. Discreet luxury, Aegean views, and personal hospitality from George & Didi.', el: 'Έξι κυκλαδίτικες σουίτες προ του 1910 στην καρδιά της Απολλωνίας, Σίφνος. Διακριτική πολυτέλεια, θέα στο Αιγαίο, φιλοξενία από Γιώργο & Ντίντι.', fr: 'Six suites cycladiques restaurées d’avant 1910 au cœur d’Apollonia, Sifnos. Luxe discret, vues sur la mer Égée et accueil personnel par George et Didi.' },
  'meta.suites.description': { en: 'Six distinct residences in restored pre-1910 Cycladic buildings — from the intimate Boutique for couples to the Apollonia for groups of up to five.', el: 'Έξι ξεχωριστές κατοικίες σε αναστηλωμένα κυκλαδίτικα κτίρια προ του 1910 — από τη Boutique για ζευγάρια έως την Apollonia για ομάδες έως πέντε ατόμων.', fr: 'Six demeures distinctes dans des bâtiments cycladiques restaurés d’avant 1910 — de la Boutique pour deux à l’Apollonia pour cinq personnes.' },
  'meta.story.description': { en: 'In the childhood neighbourhood of poet Kleanthis Triandafylloy, at the heart of Apollonia. Six restored suites in a Cycladic settlement with a soul.', el: 'Στην παιδική γειτονιά του ποιητή Κλεάνθη Τριανταφύλλου, στην καρδιά της Απολλωνίας. Έξι αναστηλωμένες σουίτες σε ένα κυκλαδίτικο οικισμό με ψυχή.', fr: 'Dans le quartier d’enfance du poète Kleanthis Triandafylloy, au cœur d’Apollonia. Six suites restaurées dans un village cycladique à l’âme vivante.' },
  'meta.contact.description': { en: 'Reach Apollonia, Sifnos: ten minutes from Kamares port, with personal transfer and welcome by George & Didi. Phone +30 211 715 9002.', el: 'Φτάστε στην Απολλωνία της Σίφνου: δέκα λεπτά από το λιμάνι Καμάρες, προσωπική μεταφορά και υποδοχή από Γιώργο & Ντίντι. +30 211 715 9002.', fr: 'Rejoindre Apollonia, Sifnos : dix minutes du port de Kamares, transfert privé et accueil par George et Didi. Téléphone +30 211 715 9002.' },
  'contact.success.title': { en: 'Message sent', el: 'Το μήνυμα στάλθηκε', fr: 'Message envoyé' },
  'contact.success.body': { en: 'We will reply personally within a few hours.', el: 'Θα απαντήσουμε προσωπικά σε λίγες ώρες.', fr: 'Nous vous répondrons personnellement dans quelques heures.' },
  'contact.error.body': { en: 'Something went wrong. Please try again.', el: 'Κάτι πήγε στραβά. Δοκιμάστε ξανά.', fr: 'Une erreur est survenue. Veuillez réessayer.' },

  // Phase 5 — component i18n cleanup additions
  'hero.location': { en: 'Sifnos, Greece', el: 'Σίφνος, Ελλάδα', fr: 'Sifnos, Grèce' },
  'brand.statement': { en: 'Six restored residences. One quiet corner of Apollonia. A place where the Cyclades feel like home.', el: 'Έξι αναστηλωμένες κατοικίες. Μια ήσυχη γωνιά της Απολλωνίας. Ένα μέρος όπου οι Κυκλάδες μοιάζουν με σπίτι.', fr: 'Six demeures restaurées. Un coin tranquille d’Apollonia. Un endroit où les Cyclades deviennent un chez-soi.' },
  'arrival.location': { en: 'Apollonia, Sifnos', el: 'Απολλωνία, Σίφνος', fr: 'Apollonia, Sifnos' },
  'arrival.heading': { en: 'Where the island keeps its secrets', el: 'Εκεί που το νησί κρατά τα μυστικά του', fr: 'Là où l’île garde ses secrets' },
  'arrival.body1': { en: 'Apollonia is the quiet heart of Sifnos — a village of whitewashed lanes, candlelit tavernas, and rooftop views that stretch to Antiparos. Rabagas sits steps from its central alley, where the pace of the island dissolves into slow mornings, warm stone underfoot, and the scent of thyme carried on Aegean air.', el: 'Η Απολλωνία είναι η ήσυχη καρδιά της Σίφνου — ένα χωριό με ασβεστωμένα σοκάκια, ταβέρνες με κεριά και θέα που φτάνει ως την Αντίπαρο. Το Rabagas βρίσκεται λίγα βήματα από το κεντρικό σοκάκι, εκεί που ο ρυθμός του νησιού γίνεται αργές πρωινές ώρες, ζεστή πέτρα κάτω από τα πόδια και άρωμα θυμαριού στον αέρα του Αιγαίου.', fr: 'Apollonia est le cœur paisible de Sifnos — un village de ruelles blanchies à la chaux, de tavernes éclairées à la bougie et de toits avec vue sur Antiparos. Le Rabagas se trouve à quelques pas de l’allée centrale, là où le rythme de l’île se fond en matins lents, pierre chaude sous les pieds et parfum de thym porté par l’air égéen.' },
  'arrival.body2': { en: 'Our six suites are not rooms. They are restored pre-1910 residences — each with its own door, its own terrace, its own world. You do not check in. You arrive.', el: 'Οι έξι σουίτες μας δεν είναι δωμάτια. Είναι αναστηλωμένες κατοικίες προ του 1910 — η καθεμιά με τη δική της πόρτα, τη δική της βεράντα, τον δικό της κόσμο. Δεν κάνετε check-in. Φτάνετε.', fr: 'Nos six suites ne sont pas des chambres. Ce sont des demeures restaurées d’avant 1910 — chacune avec sa propre porte, sa propre terrasse, son propre monde. Vous ne faites pas le check-in. Vous arrivez.' },
  'arrival.featuredIn': { en: 'Featured in', el: 'Αναφορές σε', fr: 'Cité dans' },
  'arrival.imageAlt': { en: 'Whitewashed Cycladic architecture in Apollonia', el: 'Κυκλαδίτικη αρχιτεκτονική στην Απολλωνία', fr: 'Architecture cycladique blanchie à la chaux à Apollonia' },
  'experience.kicker': { en: 'A day at Rabagas', el: 'Μια μέρα στο Rabagas', fr: 'Une journée à Rabagas' },
  'experience.heading': { en: 'The rhythm of an island, the comfort of home', el: 'Ο ρυθμός του νησιού, η άνεση του σπιτιού', fr: 'Le rythme d’une île, le confort d’une maison' },
  'experience.morning.title': { en: 'Morning', el: 'Πρωί', fr: 'Matin' },
  'experience.morning.desc': { en: 'Espresso on your private terrace. Honey from the valley below. The Aegean five rooftops away.', el: 'Εσπρέσο στην ιδιωτική βεράντα. Μέλι από την κοιλάδα. Το Αιγαίο πέντε στέγες πιο πέρα.', fr: 'Espresso sur votre terrasse privée. Miel de la vallée en contrebas. La mer Égée à cinq toits de distance.' },
  'experience.afternoon.title': { en: 'Afternoon', el: 'Απόγευμα', fr: 'Après-midi' },
  'experience.afternoon.desc': { en: 'Barefoot on warm stone. A borrowed bicycle to a hidden beach. Return to your jacuzzi as the light softens.', el: 'Ξυπόλυτοι σε ζεστή πέτρα. Ποδήλατο σε κρυμμένη παραλία. Επιστροφή στο τζακούζι καθώς το φως απαλώνει.', fr: 'Pieds nus sur la pierre chaude. Un vélo prêté pour une plage cachée. Retour au jacuzzi quand la lumière s’adoucit.' },
  'experience.evening.title': { en: 'Evening', el: 'Βράδυ', fr: 'Soir' },
  'experience.evening.desc': { en: 'George recommends the taverna. You walk two minutes through the village. Stars appear over Artemonas.', el: 'Ο Γιώργος προτείνει την ταβέρνα. Περπατάτε δύο λεπτά. Αστέρια πάνω από την Αρτεμώνα.', fr: 'George recommande la taverne. Vous marchez deux minutes à travers le village. Les étoiles apparaissent sur Artemonas.' },
  'why.heading': { en: 'A different kind\nof luxury', el: 'Ένα διαφορετικό είδος\nπολυτέλειας', fr: 'Un autre genre\nde luxe' },
  'why.intro': { en: 'Not a hotel. Not a rental. A restored settlement of independent residences where Cycladic heritage meets contemporary comfort, personal hospitality, and Aegean light.', el: 'Ούτε ξενοδοχείο. Ούτε ενοικίαση. Ένας αναστηλωμένος οικισμός ανεξάρτητων κατοικιών όπου η κυκλαδίτικη κληρονομιά συναντά τη σύγχρονη άνεση, την προσωπική φιλοξενία και το φως του Αιγαίου.', fr: 'Ni hôtel, ni location. Un village restauré de demeures indépendantes où le patrimoine cycladique rencontre le confort contemporain, l’accueil personnel et la lumière de l’Égée.' },
  'amenities.heading': { en: 'Every detail, considered', el: 'Κάθε λεπτομέρεια, μελετημένη', fr: 'Chaque détail, pensé' },
  'suites.preview.intro': { en: 'Restored pre-1910 Cycladic buildings, each with private outdoor spaces, premium finishes, and a character all its own.', el: 'Αναστηλωμένα κυκλαδίτικα κτίρια προ του 1910, καθένα με ιδιωτικό εξωτερικό χώρο, εκλεπτυσμένα φινιρίσματα και τον δικό του χαρακτήρα.', fr: 'Bâtiments cycladiques restaurés d’avant 1910, chacun avec son espace extérieur privé, ses finitions soignées et son propre caractère.' },
  'testimonials.heading': { en: 'What our guests say', el: 'Τι λένε οι επισκέπτες μας', fr: 'Ce que disent nos hôtes' },
  'booking.kicker': { en: 'Direct reservation', el: 'Άμεση κράτηση', fr: 'Réservation directe' },
  'booking.heading': { en: 'Reserve Your Stay', el: 'Κρατήστε τη Διαμονή σας', fr: 'Réservez votre séjour' },
  'booking.intro': { en: 'Tell us your dates and preferences. George & Didi confirm every booking personally, usually within hours.', el: 'Πείτε μας τις ημερομηνίες και τις προτιμήσεις σας. Ο Γιώργος & η Ντίντι επιβεβαιώνουν προσωπικά κάθε κράτηση, συνήθως μέσα σε λίγες ώρες.', fr: 'Dites-nous vos dates et vos préférences. George et Didi confirment chaque réservation personnellement, généralement dans les heures qui suivent.' },
  'booking.group.about': { en: 'About you', el: 'Σχετικά με εσάς', fr: 'À propos de vous' },
  'booking.placeholder.name': { en: 'Your full name', el: 'Ονοματεπώνυμο', fr: 'Nom complet' },
  'booking.group.stay': { en: 'Your stay', el: 'Η διαμονή σας', fr: 'Votre séjour' },
  'booking.suite.label': { en: 'Preferred suite', el: 'Προτιμώμενη σουίτα', fr: 'Suite préférée' },
  'booking.suite.undecided': { en: 'Not decided yet', el: 'Δεν έχω αποφασίσει', fr: 'Pas encore décidé' },
  'booking.arrival': { en: 'Arrival', el: 'Άφιξη', fr: 'Arrivée' },
  'booking.departure': { en: 'Departure', el: 'Αναχώρηση', fr: 'Départ' },
  'booking.group.other': { en: 'Anything else', el: 'Κάτι άλλο', fr: 'Autre chose' },
  'booking.placeholder.message': { en: 'Arriving by ferry? Need a transfer? Special occasion? Tell us anything that helps us prepare for you...', el: 'Έρχεστε με πλοίο; Χρειάζεστε μεταφορά; Πείτε μας ό,τι θα μας βοηθούσε…', fr: 'Arrivée en ferry ? Besoin d’un transfert ? Occasion spéciale ? Dites-nous tout ce qui nous aide à préparer votre venue…' },
  'booking.submit': { en: 'Request Availability', el: 'Ελέγξτε Διαθεσιμότητα', fr: 'Vérifier les disponibilités' },
  'booking.benefit.bestRate': { en: 'Best rate', el: 'Καλύτερη τιμή', fr: 'Meilleur tarif' },
  'booking.benefit.flexibleDates': { en: 'Flexible dates', el: 'Ευέλικτες ημερομηνίες', fr: 'Dates flexibles' },
  'booking.benefit.welcomeBasket': { en: 'Sifnos honey, seasonal fruit, a bottle of local wine.', el: 'Μέλι Σίφνου, φρούτα εποχής, μια φιάλη τοπικού κρασιού.', fr: 'Miel de Sifnos, fruits de saison, une bouteille de vin local.' },
  'booking.success.title': { en: 'Thank you', el: 'Ευχαριστούμε', fr: 'Merci' },
  'booking.success.body': { en: 'George & Didi will review your request and reply personally, usually within a few hours.', el: 'Ο Γιώργος & η Ντίντι θα δουν το αίτημά σας και θα απαντήσουν προσωπικά, συνήθως μέσα σε λίγες ώρες.', fr: 'George et Didi étudieront votre demande et vous répondront personnellement, généralement dans les heures qui suivent.' },
  'booking.error.body': { en: 'Something went wrong. Please try again or contact us directly.', el: 'Κάτι πήγε στραβά. Δοκιμάστε ξανά ή επικοινωνήστε απευθείας.', fr: 'Une erreur est survenue. Veuillez réessayer ou nous contacter directement.' },
  'booking.fallback': { en: 'Prefer a personal touch?', el: 'Προτιμάτε προσωπική επικοινωνία;', fr: 'Préférez un contact personnel ?' },
  'contact.hero.kicker': { en: 'Rabagas Suites', el: 'Rabagas Suites', fr: 'Rabagas Suites' },
  'contact.hero.h1': { en: 'Your journey\nbegins here', el: 'Το ταξίδι σας\nξεκινά εδώ', fr: 'Votre voyage\ncommence ici' },
  'contact.hero.body': { en: 'From Athens to your private terrace in Apollonia. We will help you with every step.', el: 'Από την Αθήνα στη δική σας ιδιωτική βεράντα στην Απολλωνία. Σας βοηθάμε σε κάθε βήμα.', fr: 'D’Athènes à votre terrasse privée à Apollonia. Nous vous accompagnons à chaque étape.' },
  'contact.gettingHere.kicker': { en: 'Getting here', el: 'Πώς θα φτάσετε', fr: 'Pour venir' },
  'contact.gettingHere.h2': { en: 'The island is closer than you think', el: 'Το νησί είναι πιο κοντά απ’ ό,τι φαντάζεστε', fr: 'L’île est plus proche que vous ne pensez' },
  'contact.step1.title': { en: 'Reach Sifnos', el: 'Φτάνετε στη Σίφνο', fr: 'Rejoignez Sifnos' },
  'contact.step1.body': { en: 'Daily ferries from Piraeus (Athens) take 2.5–5 hours depending on the line. Fast ferries run year-round. We can arrange port transfers for your arrival.', el: 'Καθημερινά πλοία από τον Πειραιά (Αθήνα) διαρκούν 2,5–5 ώρες ανάλογα με τη γραμμή. Τα ταχύπλοα λειτουργούν όλο τον χρόνο. Φροντίζουμε για τη μεταφορά σας από το λιμάνι.', fr: 'Des ferries quotidiens depuis Le Pirée (Athènes) durent de 2h30 à 5h selon la ligne. Les ferries rapides circulent toute l’année. Nous organisons votre transfert depuis le port.' },
  'contact.step2.title': { en: 'Arrive in Apollonia', el: 'Φτάνετε στην Απολλωνία', fr: 'Arrivez à Apollonia' },
  'contact.step2.body': { en: 'Ferries dock in Kamares. Apollonia is a 10-minute drive up the hill — the capital village and heart of the island. We arrange your transfer so you arrive relaxed.', el: 'Τα πλοία αράζουν στις Καμάρες. Η Απολλωνία είναι 10 λεπτά ανηφόρα — η πρωτεύουσα του νησιού. Φροντίζουμε τη μεταφορά σας ώστε να φτάσετε χαλαροί.', fr: 'Les ferries accostent à Kamares. Apollonia se trouve à 10 minutes de voiture en montant — le village capitale et le cœur de l’île. Nous organisons votre transfert pour que vous arriviez détendu.' },
  'contact.step3.title': { en: 'Walk to your suite', el: 'Πάμε με τα πόδια στη σουίτα σας', fr: 'À pied jusqu’à votre suite' },
  'contact.step3.body': { en: 'Rabagas is steps from the central pedestrian alley. George or Didi will welcome you personally, show you your private residence, and share their island.', el: 'Το Rabagas βρίσκεται λίγα βήματα από τον κεντρικό πεζόδρομο. Ο Γιώργος ή η Ντίντι σας υποδέχονται προσωπικά, σας δείχνουν την κατοικία σας και μοιράζονται το νησί τους.', fr: 'Le Rabagas se trouve à quelques pas de l’allée piétonne centrale. George ou Didi vous accueillent personnellement, vous montrent votre demeure privée et partagent leur île avec vous.' },
  'contact.direct.kicker': { en: 'Direct contact', el: 'Άμεση επικοινωνία', fr: 'Contact direct' },
  'contact.direct.h2': { en: 'We are here for you', el: 'Είμαστε εδώ για εσάς', fr: 'Nous sommes là pour vous' },
  'contact.phone.label': { en: 'Phone', el: 'Τηλέφωνο', fr: 'Téléphone' },
  'contact.phone.hours': { en: 'Daily, 09:00 – 17:00', el: 'Καθημερινά, 09:00 – 17:00', fr: 'Tous les jours, 09h00 – 17h00' },
  'contact.email.label': { en: 'Email', el: 'Email', fr: 'Email' },
  'contact.email.replyTime': { en: 'We reply within hours', el: 'Απαντάμε εντός ωρών', fr: 'Nous répondons en quelques heures' },
  'contact.address.label': { en: 'Address', el: 'Διεύθυνση', fr: 'Adresse' },
  'contact.address.value': { en: 'Apollonia, Sifnos 84003\nGreece', el: 'Απολλωνία, Σίφνος 84003\nΕλλάδα', fr: 'Apollonia, Sifnos 84003\nGrèce' },
  'contact.address.viewMap': { en: 'View on map', el: 'Δείτε στον χάρτη', fr: 'Voir sur la carte' },
  'contact.concierge.kicker': { en: 'Concierge', el: 'Concierge', fr: 'Conciergerie' },
  'contact.concierge.h3': { en: 'How we can help', el: 'Πώς μπορούμε να βοηθήσουμε', fr: 'Comment nous pouvons vous aider' },
  'contact.concierge.transfers.title': { en: 'Port transfers', el: 'Μεταφορές από λιμάνι', fr: 'Transferts depuis le port' },
  'contact.concierge.transfers.desc': { en: 'From Kamares port to your suite', el: 'Από το λιμάνι Καμάρες στη σουίτα σας', fr: 'Du port de Kamares à votre suite' },
  'contact.concierge.reservations.title': { en: 'Restaurant reservations', el: 'Κρατήσεις σε εστιατόρια', fr: 'Réservations de restaurants' },
  'contact.concierge.reservations.desc': { en: 'Our favourite tavernas, booked for you', el: 'Οι αγαπημένες μας ταβέρνες, κρατημένες για εσάς', fr: 'Nos tavernes préférées, réservées pour vous' },
  'contact.concierge.car.title': { en: 'Car & bike rental', el: 'Ενοικίαση αυτοκινήτου & ποδηλάτου', fr: 'Location de voiture & vélo' },
  'contact.concierge.car.desc': { en: 'Partners arranged, delivered to you', el: 'Συνεργάτες, παράδοση στη σουίτα σας', fr: 'Partenaires recommandés, livraison à votre suite' },
  'contact.concierge.boat.title': { en: 'Boat trips & excursions', el: 'Βαρκάδες & εκδρομές', fr: 'Croisières & excursions' },
  'contact.concierge.boat.desc': { en: 'Private cruises and island-hopping', el: 'Ιδιωτικές κρουαζιέρες και νησοπεριήγηση', fr: 'Croisières privées et tours d’île' },
  'contact.message.h2': { en: 'Send us a message', el: 'Στείλτε μας μήνυμα', fr: 'Envoyez-nous un message' },
  'contact.message.intro': { en: 'Questions about your stay? We reply personally.', el: 'Ερωτήσεις για τη διαμονή σας; Απαντάμε προσωπικά.', fr: 'Des questions sur votre séjour ? Nous répondons personnellement.' },
  'contact.message.placeholder': { en: 'Tell us about your plans for Sifnos...', el: 'Πείτε μας για τα σχέδιά σας στη Σίφνο…', fr: 'Parlez-nous de vos projets à Sifnos…' },
  'story.hero.kicker': { en: 'Apollonia, Sifnos', el: 'Απολλωνία, Σίφνος', fr: 'Apollonia, Sifnos' },
  'story.lead': { en: 'In the winding lanes of Apollonia, just steps from the central pedestrian alley, stands a settlement of whitewashed buildings that have watched over the island for more than a century.', el: 'Στα στενά σοκάκια της Απολλωνίας, λίγα βήματα από τον κεντρικό πεζόδρομο, στέκεται ένας οικισμός ασβεστωμένων κτιρίων που αγναντεύουν το νησί εδώ και πάνω από έναν αιώνα.', fr: 'Dans les ruelles sinueuses d’Apollonia, à quelques pas de l’allée piétonne centrale, se dresse un ensemble de bâtiments blanchis à la chaux qui veillent sur l’île depuis plus d’un siècle.' },
  'story.name.kicker': { en: 'The name', el: 'Το όνομα', fr: 'Le nom' },
  'story.name.h2': { en: 'The Poet\'s Neighbourhood', el: 'Η Γειτονιά του Ποιητή', fr: 'Le quartier du poète' },
  'story.name.body1': { en: 'These buildings take their name from their most famous resident: Kleanthis Triandafyllou, a poet and reporter born in the 1850s, known to the island as <em class="text-ink">Rabagas</em>.', el: 'Αυτά τα κτίρια πήραν το όνομά τους από τον πιο διάσημο κάτοικό τους: τον Κλεάνθη Τριανταφύλλου, ποιητή και δημοσιογράφο γεννημένο στη δεκαετία του 1850, γνωστό στο νησί ως <em class="text-ink">Rabagas</em>.', fr: 'Ces bâtiments tirent leur nom de leur résident le plus célèbre : Kleanthis Triandafyllou, poète et journaliste né dans les années 1850, connu sur l’île sous le nom de <em class="text-ink">Rabagas</em>.' },
  'story.name.body2': { en: 'The nickname came from a progressive magazine he founded in 1878, itself inspired by a French comedy that championed bold ideas and free thinking.', el: 'Το παρατσούκλι ήρθε από ένα προοδευτικό περιοδικό που ίδρυσε το 1878, εμπνευσμένο από μια γαλλική κωμωδία που υμνούσε τις τολμηρές ιδέες και την ελεύθερη σκέψη.', fr: 'Le surnom vient d’un magazine progressiste qu’il fonda en 1878, lui-même inspiré d’une comédie française célébrant les idées audacieuses et la pensée libre.' },
  'story.name.body3': { en: 'Rabagas became more than a name. It became the identity of this corner of Apollonia — a place where ideas lived, where neighbours gathered, where the spirit of Sifnos found its voice.', el: 'Το Rabagas έγινε κάτι παραπάνω από όνομα. Έγινε η ταυτότητα αυτής της γωνιάς της Απολλωνίας — ένα μέρος όπου οι ιδέες ζούσαν, οι γείτονες μαζεύονταν, το πνεύμα της Σίφνου έβρισκε τη φωνή του.', fr: 'Rabagas est devenu plus qu’un nom. C’est devenu l’identité de ce coin d’Apollonia — un lieu où les idées vivaient, où les voisins se réunissaient, où l’esprit de Sifnos trouvait sa voix.' },
  'story.restoration.kicker': { en: 'The restoration', el: 'Η αναστήλωση', fr: 'La restauration' },
  'story.restoration.h2': { en: 'From Heritage to Hospitality', el: 'Από την Κληρονομιά στη Φιλοξενία', fr: 'Du patrimoine à l’hospitalité' },
  'story.restoration.body1': { en: 'When we began restoring these pre-1910 Cycladic buildings, we wanted to honour that spirit. Each suite preserves the original crooked plaster walls, the thick stone bones of the island, and the gentle asymmetry that makes traditional architecture so alive.', el: 'Όταν ξεκινήσαμε την αναστήλωση αυτών των κυκλαδίτικων κτιρίων προ του 1910, θελήσαμε να τιμήσουμε αυτό το πνεύμα. Κάθε σουίτα διατηρεί τους αυθεντικούς σοβατισμένους τοίχους, τα πέτρινα οστά του νησιού και τη λεπτή ασυμμετρία που κάνει την παραδοσιακή αρχιτεκτονική τόσο ζωντανή.', fr: 'Quand nous avons commencé à restaurer ces bâtiments cycladiques d’avant 1910, nous voulions honorer cet esprit. Chaque suite conserve les murs en plâtre tordu d’origine, l’ossature de pierre épaisse de l’île et l’asymétrie subtile qui rend l’architecture traditionnelle si vivante.' },
  'story.restoration.body2': { en: 'But heritage alone does not make a home. We layered in custom-made latex mattresses, feather pillows, handmade furniture, contemporary art, and premium linens. Private outdoor spaces, heated jacuzzis, and modern comforts — because luxury should not require sacrificing authenticity.', el: 'Όμως η κληρονομιά από μόνη της δεν φτιάχνει σπίτι. Προσθέσαμε στρώματα latex ειδικής κατασκευής, μαξιλάρια πούπουλο, χειροποίητα έπιπλα, σύγχρονη τέχνη και προϊόντα πολυτελείας. Ιδιωτικούς εξωτερικούς χώρους, θερμαινόμενα τζακούζι και σύγχρονες ανέσεις — γιατί η πολυτέλεια δεν χρειάζεται να θυσιάσει την αυθεντικότητα.', fr: 'Mais le patrimoine seul ne fait pas un foyer. Nous y avons ajouté des matelas en latex sur mesure, des oreillers en plumes, des meubles faits main, de l’art contemporain et du linge de luxe. Des espaces extérieurs privés, des jacuzzis chauffés et le confort moderne — parce que le luxe ne doit pas exiger de sacrifier l’authenticité.' },
  'story.hosts.kicker': { en: 'Your hosts', el: 'Οι οικοδεσπότες σας', fr: 'Vos hôtes' },
  'story.hosts.h2': { en: 'George & Didi', el: 'Γιώργος & Ντίντι', fr: 'George & Didi' },
  'story.hosts.body1': { en: 'Rabagas is not a hotel. It is a collection of six independent residences, each with its own door, its own character, and its own outdoor world. You arrive not as a guest in a lobby, but as someone returning to their own Sifnian home.', el: 'Το Rabagas δεν είναι ξενοδοχείο. Είναι μια συλλογή έξι ανεξάρτητων κατοικιών, καθεμιά με τη δική της πόρτα, τον δικό της χαρακτήρα και τον δικό της εξωτερικό κόσμο. Δεν φτάνετε ως επισκέπτης σε μια ρεσεψιόν, αλλά ως κάποιος που επιστρέφει στο σιφνέικο σπίτι του.', fr: 'Le Rabagas n’est pas un hôtel. C’est un ensemble de six demeures indépendantes, chacune avec sa propre porte, son propre caractère et son propre monde extérieur. Vous n’arrivez pas comme un client à la réception, mais comme quelqu’un qui rentre chez lui à Sifnos.' },
  'story.hosts.body2': { en: 'We welcome you personally. We share our favourite tavernas, our secret swimming spots, and our love for this island. Because the best hospitality is not about systems and services. It is about people who care.', el: 'Σας υποδεχόμαστε προσωπικά. Μοιραζόμαστε τις αγαπημένες μας ταβέρνες, τα μυστικά μας μέρη για κολύμπι και την αγάπη μας για αυτό το νησί. Γιατί η καλύτερη φιλοξενία δεν είναι θέμα συστημάτων — είναι θέμα ανθρώπων που νοιάζονται.', fr: 'Nous vous accueillons personnellement. Nous partageons nos tavernes préférées, nos coins de baignade secrets et notre amour pour cette île. Parce que la meilleure hospitalité ne tient pas aux systèmes et aux services — elle tient aux personnes qui s’en soucient.' },
  'story.hosts.pullquote': { en: 'Luxury can be discreet.', el: 'Η πολυτέλεια μπορεί να είναι διακριτική.', fr: 'Le luxe peut être discret.' },
  'story.hosts.imageAlt': { en: 'Interior detail of restored Rabagas suite', el: 'Λεπτομέρεια εσωτερικού χώρου σουίτας Rabagas', fr: 'Détail intérieur d’une suite Rabagas restaurée' },
  'story.heroImageAlt': { en: 'Rabagas Suites courtyard at night', el: 'Αυλή Rabagas Suites τη νύχτα', fr: 'Cour des Rabagas Suites de nuit' },
  'story.detailImageAlt': { en: 'Traditional Cycladic architecture detail', el: 'Λεπτομέρεια παραδοσιακής κυκλαδίτικης αρχιτεκτονικής', fr: 'Détail d’architecture cycladique traditionnelle' },
  'suites.h1': { en: 'Find your perfect suite', el: 'Βρείτε την ιδανική σας σουίτα', fr: 'Trouvez votre suite idéale' },
  'suites.intro': { en: 'Each residence has its own character, history, and outdoor space. All share the same commitment to comfort and craftsmanship.', el: 'Κάθε κατοικία έχει τον δικό της χαρακτήρα, ιστορία και εξωτερικό χώρο. Όλες μοιράζονται την ίδια αφοσίωση στην άνεση και την ποιότητα κατασκευής.', fr: 'Chaque demeure a son propre caractère, son histoire et son espace extérieur. Toutes partagent le même engagement pour le confort et le savoir-faire.' },
  'suites.compare.h2': { en: 'Compare at a glance', el: 'Σύγκριση με μια ματιά', fr: 'Comparer d’un coup d’œil' },
  'suites.compare.col.suite': { en: 'Suite', el: 'Σουίτα', fr: 'Suite' },
  'suites.compare.col.guests': { en: 'Guests', el: 'Άτομα', fr: 'Personnes' },
  'suites.compare.col.bedrooms': { en: 'Bedrooms', el: 'Υπνοδωμάτια', fr: 'Chambres' },
  'suites.compare.col.jacuzzi': { en: 'Jacuzzi', el: 'Τζακούζι', fr: 'Jacuzzi' },
  'suites.compare.col.kitchen': { en: 'Kitchen', el: 'Κουζίνα', fr: 'Cuisine' },
  'suites.compare.col.bestFor': { en: 'Best for', el: 'Ιδανικό για', fr: 'Idéal pour' },
  'suites.compare.yes': { en: 'Yes', el: 'Ναι', fr: 'Oui' },

  // Phase 5 — aria-label additions
  'aria.brandStatement': { en: 'Brand statement', el: 'Δήλωση μάρκας', fr: 'Déclaration de marque' },
  'aria.welcome': { en: 'Welcome', el: 'Καλώς ήρθατε', fr: 'Bienvenue' },
  'aria.callToAction': { en: 'Call to action', el: 'Πρόσκληση δράσης', fr: 'Appel à l’action' },
  'aria.homeLogo': { en: 'Rabagas Suites — Home', el: 'Rabagas Suites — Αρχική', fr: 'Rabagas Suites — Accueil' },
  'aria.mainNav': { en: 'Main navigation', el: 'Κύρια πλοήγηση', fr: 'Navigation principale' },
  'aria.openMenu': { en: 'Open menu', el: 'Άνοιγμα μενού', fr: 'Ouvrir le menu' },
  'aria.mobileNav': { en: 'Mobile navigation', el: 'Πλοήγηση κινητού', fr: 'Navigation mobile' },
  'aria.language': { en: 'Language', el: 'Γλώσσα', fr: 'Langue' },
  'aria.menu': { en: 'Menu', el: 'Μενού', fr: 'Menu' },

  // Phase 6 — footer keys
  'footer.brandTagline': { en: 'Suites · Sifnos', el: 'Σουίτες · Σίφνος', fr: 'Suites · Sifnos' },
  'footer.social': { en: 'Social', el: 'Κοινωνικά', fr: 'Réseaux' },
  'footer.location': { en: 'Location', el: 'Τοποθεσία', fr: 'Adresse' },
  'social.instagram': { en: 'Instagram', el: 'Instagram', fr: 'Instagram' },
  'social.facebook': { en: 'Facebook', el: 'Facebook', fr: 'Facebook' },

  // Phase 6 — gallery + lightbox + hosts (v1 placeholder bio — replace with owner-authored copy when provided)
  'gallery.label': { en: 'Gallery', el: 'Γκαλερί', fr: 'Galerie' },
  'gallery.heading': { en: 'Moments from the settlement', el: 'Στιγμές από το οικισμό', fr: 'Instants au village' },
  'gallery.suite.heading': { en: 'Suite gallery', el: 'Φωτογραφίες σουίτας', fr: 'Galerie de la suite' },
  'gallery.viewLarger': { en: 'View larger', el: 'Δείτε σε μεγέθυνση', fr: 'Voir en grand' },
  'gallery.imageAlt': { en: 'Photo {n} of {total}', el: 'Φωτογραφία {n} από {total}', fr: 'Photo {n} sur {total}' },
  'lightbox.label': { en: 'Image gallery', el: 'Γκαλερί φωτογραφιών', fr: 'Galerie d’images' },
  'lightbox.close': { en: 'Close gallery', el: 'Κλείσιμο γκαλερί', fr: 'Fermer la galerie' },
  'lightbox.prev': { en: 'Previous image', el: 'Προηγούμενη εικόνα', fr: 'Image précédente' },
  'lightbox.next': { en: 'Next image', el: 'Επόμενη εικόνα', fr: 'Image suivante' },
  'lightbox.counter': { en: '{n} / {total}', el: '{n} / {total}', fr: '{n} sur {total}' },
  'hosts.title': { en: 'Meet George & Didi', el: 'Γνωρίστε τον Γιώργο και τη Ντίντι', fr: 'Rencontrez George et Didi' },
  'hosts.kicker': { en: 'Your hosts', el: 'Οι οικοδεσπότες σας', fr: 'Vos hôtes' },
  'hosts.bio.p1': { en: 'George and Didi are the hosts at Rabagas. They live a short walk from the suites in Apollonia, and personally welcome each guest on arrival.', el: 'Ο Γιώργος και η Ντίντι είναι οι οικοδεσπότες του Rabagas. Μένουν λίγα λεπτά με τα πόδια από τις σουίτες, στην Απολλωνία, και υποδέχονται κάθε επισκέπτη προσωπικά κατά την άφιξη.', fr: 'George et Didi sont les hôtes de Rabagas. Ils habitent à quelques minutes à pied des suites, à Apollonia, et accueillent personnellement chaque visiteur à son arrivée.' },
  'hosts.bio.p2': { en: 'From restaurant recommendations to last-minute ferry tickets, they\'re the reason guests return.', el: 'Από προτάσεις εστιατορίων μέχρι εισιτήρια πλοίου την τελευταία στιγμή — είναι ο λόγος που οι επισκέπτες μας επιστρέφουν.', fr: 'Des recommandations de restaurants aux billets de ferry de dernière minute, ce sont eux qui font revenir les hôtes.' },
  'hosts.initials': { en: 'G&D', el: 'Γ&Ν', fr: 'G&D' },
  'hosts.signature': { en: 'With love from Apollonia.', el: 'Με αγάπη από την Απολλωνία.', fr: 'Avec amour, depuis Apollonia.' },
  'hosts.imageAlt': { en: 'Portrait of George & Didi', el: 'Πορτρέτο των Γιώργου και Ντίντι', fr: 'Portrait de George et Didi' },

  // Phase 7b — OriginStory + Our Story essay + aria additions
  'origin.kicker': { en: '1850 — TODAY', el: '1850 — ΣΗΜΕΡΑ', fr: '1850 — AUJOURD\'HUI' },
  'origin.beat1': { en: '<em class="rabagas-mark">Rabagas</em> was a Sardou play before it was a man. Paris, 1872 — a comedy about a populist who sold his radicalism for a ministry. The Greek translation was banned. Six years later, a Sifnian journalist took the title for his own satirical weekly. The name stuck to him.', el: '<em class="rabagas-mark">Ραμπαγάς</em> ήταν θεατρικό του Σαρντού πριν γίνει άνθρωπος. Παρίσι, 1872 — μια κωμωδία για έναν λαϊκιστή που πούλησε τον ριζοσπαστισμό του για ένα υπουργείο. Η ελληνική μετάφραση απαγορεύτηκε. Έξι χρόνια αργότερα, ένας Σιφνιός δημοσιογράφος δανείστηκε τον τίτλο για το δικό του σατιρικό φύλλο. Το όνομα του έμεινε.', fr: '<em class="rabagas-mark">Rabagas</em> était une pièce de Sardou avant d’être un homme. Paris, 1872 — une comédie autour d’un populiste qui troqua son radicalisme contre un ministère. La traduction grecque fut interdite. Six ans plus tard, un journaliste sifniote emprunta le titre pour sa propre feuille satirique. Le nom lui resta.' },
  'origin.beat2': { en: 'Rabagas, the magazine, ran in Athens for eleven years. Seven thousand copies a week. Palamas wrote in it. So did Drossinis. It was satirical, anti-monarchic, repeatedly prosecuted. Triantafyllou was jailed for it in 1881, and survived an attempt on his life.', el: 'Ο Ραμπαγάς — το περιοδικό — έβγαινε στην Αθήνα έντεκα χρόνια. Επτά χιλιάδες αντίτυπα την εβδομάδα. Έγραψαν εκεί ο Παλαμάς, ο Δροσίνης. Ήταν σατιρικό, αντιμοναρχικό, διωκόμενο. Ο Τριαντάφυλλος φυλακίστηκε γι’ αυτό το 1881 και επέζησε μιας απόπειρας δολοφονίας.', fr: 'Rabagas, le magazine, parut à Athènes pendant onze ans. Sept mille exemplaires par semaine. Palamás y publia. Drossinis aussi. C’était une feuille satirique, antimonarchique, sans cesse poursuivie. Triantafyllou fut emprisonné pour elle en 1881 et survécut à une tentative d’assassinat.' },
  'origin.beat3': { en: 'A century and a half later, the cluster of restored pre-1910 buildings beside the square that bears his nickname is six suites. The neighbourhood kept the name. So did we.', el: 'Ενάμισι αιώνα μετά, το συγκρότημα αναπαλαιωμένων κτιρίων προ του 1910 δίπλα στην πλατεία που φέρει το παρατσούκλι του είναι έξι σουίτες. Η γειτονιά κράτησε το όνομα. Το κρατήσαμε κι εμείς.', fr: 'Un siècle et demi plus tard, l’ensemble de bâtiments d’avant 1910 restaurés, près de la place qui porte son surnom, compte six suites. Le quartier a gardé le nom. Nous aussi.' },
  'aria.originStory': { en: 'Origin of the name', el: 'Η ιστορία του ονόματος', fr: 'Origine du nom' },
  'story.essay.neighbourhood.kicker': { en: 'The neighbourhood', el: 'Η γειτονιά', fr: 'Le quartier' },
  'story.essay.neighbourhood.body': { en: 'In the 1850s, Apollonia was already what it is today: the central village of Sifnos, a knot of whitewashed lanes and small platías sloping toward the Aegean. The streetscape we now operate in — the same flagstones, the same crooked plaster — has not meaningfully changed. The houses are pre-1910. The village rhythm has the patience of a place that hasn’t had to perform itself.', el: 'Τη δεκαετία του 1850, η Απολλωνία ήταν ήδη αυτό που είναι σήμερα: η κεντρική πρωτεύουσα της Σίφνου, ένας κόμπος ασβεστωμένων δρόμων και μικρών πλατειών που κατηφορίζουν προς το Αιγαίο. Το αστικό τοπίο μέσα στο οποίο λειτουργούμε σήμερα — οι ίδιοι λιθόστρωτοι δρόμοι, ο ίδιος καμπυλωτός σοβάς — δεν έχει αλλάξει ουσιαστικά. Τα σπίτια είναι προ του 1910. Ο ρυθμός του χωριού έχει την υπομονή ενός τόπου που δεν χρειάστηκε ποτέ να ποζάρει.', fr: 'Dans les années 1850, Apollonia était déjà ce qu’elle est aujourd’hui : le village central de Sifnos, un nœud de ruelles blanchies à la chaux et de petites placettes qui descendent vers l’Égée. Le décor dans lequel nous travaillons aujourd’hui — les mêmes dalles, le même plâtre tordu — n’a pas changé en substance. Les maisons sont d’avant 1910. Le rythme du village a la patience d’un endroit qui n’a jamais eu besoin de se mettre en scène.' },
  'story.essay.poet.kicker': { en: 'The poet', el: 'Ο ποιητής', fr: 'Le poète' },
  'story.essay.poet.body': { en: 'Kleanthis Triantafyllou was born here, on Sifnos, in 1850. The son of a Sifnian schoolteacher, he was trained for the same profession and posted to Andros — where, before he turned twenty, he taught himself French and translated Lamartine and Béranger into Greek. He went on to Constantinople, wrote for the city’s Greek-language press (Neologos, Diogenis, Salpinx), and published a slim volume of his own poems anonymously. He was a serious writer who happened to be funny. He came back to Athens at twenty-eight.', el: 'Ο Κλεάνθης Τριαντάφυλλος γεννήθηκε εδώ, στη Σίφνο, το 1850. Γιος Σιφνιού δασκάλου, σπούδασε ο ίδιος για το ίδιο επάγγελμα και διορίστηκε στην Άνδρο — όπου, πριν κλείσει τα είκοσι, έμαθε μόνος του γαλλικά και μετέφρασε Λαμαρτίνο και Μπερανζέ στα ελληνικά. Πέρασε στην Πόλη, έγραψε για τον ελληνόφωνο τύπο της (Νεολόγος, Διογένης, Σάλπιγξ), και τύπωσε ανώνυμα μια λεπτή συλλογή δικών του ποιημάτων. Ήταν σοβαρός συγγραφέας που έτυχε να είναι αστείος. Επέστρεψε στην Αθήνα εικοσιοκτώ ετών.', fr: 'Kleanthis Triantafyllou est né ici, à Sifnos, en 1850. Fils d’un instituteur sifniote, il fut formé pour le même métier et nommé à Andros — où, avant ses vingt ans, il apprit seul le français et traduisit Lamartine et Béranger en grec. Il passa à Constantinople, écrivit pour la presse hellénophone de la ville (Néologos, Diogenis, Salpinx), et publia anonymement un mince recueil de ses propres poèmes. C’était un écrivain sérieux qui se trouvait être drôle. Il rentra à Athènes à vingt-huit ans.' },
  'story.essay.nickname.kicker': { en: 'The nickname', el: 'Το παρατσούκλι', fr: 'Le surnom' },
  'story.essay.nickname.body': { en: 'The same year — 1872 — Victorien Sardou’s Rabagas premiered at the Théâtre du Vaudeville in Paris: a five-act comedy about a populist demagogue who sells his radicalism for a ministry post. It was a hit, and a scandal. The Greek translation was banned outright by the Koumoundouros government. So when, in August 1878, Triantafyllou and Vlasis Gavriilidis founded a weekly paper in Athens — satirical, anti-monarchic, openly defiant — they named it Rabagas. The choice was a press-freedom statement before it was a literary one. The nickname stuck to Triantafyllou himself; he is referred to in Greek histories as Rabagas still.', el: 'Την ίδια εκείνη χρονιά — 1872 — έκανε πρεμιέρα στο Théâtre du Vaudeville του Παρισιού ο Ραμπαγάς του Βικτοριέν Σαρντού: μια κωμωδία σε πέντε πράξεις γύρω από έναν λαϊκιστή πολιτικό που πούλησε τον ριζοσπαστισμό του για ένα υπουργείο. Επιτυχία και σκάνδαλο. Η ελληνική μετάφραση απαγορεύτηκε από την κυβέρνηση Κουμουνδούρου. Όταν, λοιπόν, τον Αύγουστο του 1878, ο Τριαντάφυλλος με τον Βλάση Γαβριηλίδη ίδρυσαν στην Αθήνα μια εβδομαδιαία εφημερίδα — σατιρική, αντιμοναρχική, ανοιχτά απείθαρχη — την ονόμασαν Ραμπαγάς. Η επιλογή ήταν δήλωση ελευθεροτυπίας πριν γίνει λογοτεχνική. Το παρατσούκλι κόλλησε στον ίδιο τον Τριαντάφυλλο.', fr: 'La même année — 1872 — Rabagas de Victorien Sardou fut créé au Théâtre du Vaudeville à Paris : une comédie en cinq actes autour d’un démagogue populiste qui troque son radicalisme pour un poste ministériel. Succès et scandale. La traduction grecque fut interdite par le gouvernement Koumoundouros. Lorsqu’en août 1878, Triantafyllou et Vlasis Gavriilidis fondèrent à Athènes un hebdomadaire — satirique, antimonarchique, ouvertement insoumis — ils l’appelèrent Rabagas. Le choix fut une déclaration de liberté de la presse avant d’être un choix littéraire. Le surnom lui resta.' },
  'story.essay.venue.kicker': { en: 'The venue years', el: 'Τα χρόνια του πολυχώρου', fr: 'Les années polyvalentes' },
  'story.essay.venue.body': { en: 'For a decade and a half, beginning in the mid-2000s and ending in 2021, the buildings now operating as Rabagas Suites housed Kikladonxoros — “the Cycladic place” — a multipurpose venue that hosted exhibitions, music, food, and the kind of evenings that hold a small island’s cultural life together. Locals remember the Rambagas Café and Rambagas Restaurant from those years. The name was not new to the buildings; the buildings remembered.', el: 'Για δεκαπέντε χρόνια, από τα μέσα της δεκαετίας του 2000 ως το 2021, τα κτίρια που σήμερα στεγάζουν τις σουίτες λειτούργησαν ως Κυκλάδων Χορός — ένας πολυχώρος με εκθέσεις, μουσική, γεύσεις, βραδιές που κρατούν μαζί την πολιτιστική ζωή ενός μικρού νησιού. Οι ντόπιοι θυμούνται ακόμα το Rambagas Café και το Rambagas Restaurant. Το όνομα δεν ήταν καινούργιο για τα κτίρια· τα κτίρια το θυμούνταν.', fr: 'Pendant une quinzaine d’années, du milieu des années 2000 à 2021, les bâtiments qui abritent aujourd’hui les suites ont tenu lieu de Kikladonxoros — « la place cycladique » — un espace polyvalent qui accueillait expositions, musique, repas, et le genre de soirées qui tiennent ensemble la vie culturelle d’une petite île. Les habitants se souviennent encore du Rambagas Café et du Rambagas Restaurant. Le nom n’était pas nouveau pour les bâtiments ; les bâtiments s’en souvenaient.' },
  'story.essay.suites.kicker': { en: 'The suites', el: 'Οι σουίτες', fr: 'Les suites' },
  'story.essay.suites.body': { en: 'We restored what was here. Six pre-1910 Cycladic residences, each with its own door and its own outdoor world. We kept the crooked plaster walls, added custom mattresses and feather pillows, and stopped doing anything we couldn’t do well. George and Didi welcome guests on arrival. The square outside still bears Triantafyllou’s nickname. We borrowed the rest.', el: 'Αναπαλαιώσαμε αυτό που υπήρχε ήδη εδώ. Έξι κυκλαδίτικες κατοικίες προ του 1910, η καθεμιά με τη δική της πόρτα και τον δικό της εξωτερικό κόσμο. Κρατήσαμε τους καμπυλωτούς σοβάδες, προσθέσαμε κατά παραγγελία στρώματα και πουπουλένια μαξιλάρια, και σταματήσαμε να κάνουμε ό,τι δεν μπορούσαμε να κάνουμε σωστά. Ο Γιώργος και η Ντίντι υποδέχονται προσωπικά τους επισκέπτες. Η πλατεία απέναντι κρατά ακόμα το παρατσούκλι του Τριαντάφυλλου. Δανειστήκαμε τα υπόλοιπα.', fr: 'Nous avons restauré ce qui était déjà là. Six demeures cycladiques d’avant 1910, chacune avec sa propre porte et son propre monde extérieur. Nous avons gardé les murs en plâtre tordu, ajouté des matelas sur mesure et des oreillers en plumes, et cessé de faire ce que nous ne pouvions pas bien faire. George et Didi accueillent personnellement chaque hôte à l’arrivée. La place d’en face porte encore le surnom de Triantafyllou. Nous avons emprunté le reste.' },
};

export function translate(key: string, locale: Locale): string {
  const entry = t[key];
  if (!entry) return key;
  return entry[locale] || entry.en || key;
}
