/**
 * CONCIERGE PARTNERS — verified third-party providers we recommend.
 *
 * Source: the partner block on the legacy WordPress footer of
 * rabagas-suites.com (captured during the Phase 12 audit). Each entry
 * here was visible there with the same brand name; the URLs reflect
 * the partner's primary public landing page rather than the affiliate
 * redirect the old site used.
 *
 * Policy: we don't take commissions from these partners. If owner
 * verification of a partner ever lapses, set `verified: false` and the
 * component below will silently drop it from the rendered list — the
 * site never shows an unverified recommendation.
 */
import type { Locale } from '../lib/i18n';

export type ConciergeCategory = 'transfers' | 'boats' | 'ferries';

export interface ConciergePartner {
  name: string;
  category: ConciergeCategory;
  /** External landing page. Use the canonical brand URL where possible. */
  url: string;
  /** One-line localized description shown under the partner name. Keep
   *  to ~10 words. EN is required; EL/FR fall back to EN if missing. */
  blurb: { en: string; el: string; fr: string };
  /** Set to false to hide a partner without deleting the entry. */
  verified: boolean;
}

export const conciergePartners: ConciergePartner[] = [
  // Cars & transfers ---------------------------------------------------
  {
    name: 'Sifnos Elite Rides',
    category: 'transfers',
    url: 'https://sifnoseliterides.com',
    blurb: {
      en: 'Private port transfers and chauffeur service across the island.',
      el: 'Ιδιωτικές μεταφορές από το λιμάνι και υπηρεσία σοφέρ.',
      fr: 'Transferts privés depuis le port et service de chauffeur sur l’île.',
    },
    verified: true,
  },
  {
    name: 'Apollo Rental Kamares',
    category: 'transfers',
    url: 'https://apollorental.gr',
    blurb: {
      en: 'Cars and small SUVs, delivered at the ferry on arrival.',
      el: 'Αυτοκίνητα και μικρά SUV, παράδοση στο πλοίο της άφιξης.',
      fr: 'Voitures et petits SUV, livrés au ferry à l’arrivée.',
    },
    verified: true,
  },
  {
    name: 'Auto Moto Rent — Apollonia',
    category: 'transfers',
    url: 'https://automotorent.gr',
    blurb: {
      en: 'Scooters, ATVs and small cars from a stand in the village.',
      el: 'Σκούτερ, γουρούνες και μικρά αυτοκίνητα από το χωριό.',
      fr: 'Scooters, quads et petites voitures depuis le village.',
    },
    verified: true,
  },

  // Boats & cruises ----------------------------------------------------
  {
    name: 'Vento Cruises',
    category: 'boats',
    url: 'https://ventocruises.gr',
    blurb: {
      en: 'Skippered day cruises along the Sifnos coast and to nearby islets.',
      el: 'Ημερήσιες κρουαζιέρες με καπετάνιο στις ακτές και τα γύρω νησάκια.',
      fr: 'Croisières d’une journée avec skipper le long des côtes et îlots voisins.',
    },
    verified: true,
  },
  {
    name: 'Valema Yachting',
    category: 'boats',
    url: 'https://valemayachting.com',
    blurb: {
      en: 'Private sailing and motor yacht charters from Kamares.',
      el: 'Ιδιωτικές ναυλώσεις ιστιοφόρων και μηχανοκίνητων σκαφών από τις Καμάρες.',
      fr: 'Locations privées de voiliers et yachts à moteur depuis Kamares.',
    },
    verified: true,
  },

  // Ferries & air ------------------------------------------------------
  {
    name: 'Bluestar Ferries',
    category: 'ferries',
    url: 'https://www.bluestarferries.com',
    blurb: {
      en: 'Conventional ferries from Piraeus — the relaxed crossing.',
      el: 'Συμβατικά πλοία από τον Πειραιά — η πιο ξεκούραστη επιλογή.',
      fr: 'Ferries conventionnels depuis Le Pirée — la traversée la plus reposante.',
    },
    verified: true,
  },
  {
    name: 'Seajets',
    category: 'ferries',
    url: 'https://www.seajets.gr',
    blurb: {
      en: 'High-speed ferries from Piraeus — ~2.5 hours, weather-dependent.',
      el: 'Ταχύπλοα από τον Πειραιά — ~2,5 ώρες, εξαρτάται από καιρό.',
      fr: 'Ferries rapides depuis Le Pirée — ~2h30, selon la météo.',
    },
    verified: true,
  },
  {
    name: 'Flyhopper',
    category: 'ferries',
    url: 'https://flyhopper.com',
    blurb: {
      en: 'Private helicopter charters to and from the island.',
      el: 'Ιδιωτικά ελικόπτερα προς και από το νησί.',
      fr: 'Affrètements privés d’hélicoptère vers et depuis l’île.',
    },
    verified: true,
  },
];

export function getConciergePartners(): ConciergePartner[] {
  return conciergePartners.filter((p) => p.verified);
}

export function getConciergeBlurb(p: ConciergePartner, locale: Locale): string {
  return p.blurb[locale] || p.blurb.en;
}
