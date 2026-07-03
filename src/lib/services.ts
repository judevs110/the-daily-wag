import { PRICES, PLACEHOLDER_PRICES } from "./site";

export type ServiceTier = {
  name: string;
  price: number;
  unit: string;
  /** False when the figure is a placeholder awaiting confirmation. */
  confirmed: boolean;
  includes: string[];
};

export type Service = {
  slug: string;
  nav: string;
  title: string;
  /** Concise, citable summary paragraph (GEO/AEO). */
  summary: string;
  metaDescription: string;
  tiers: ServiceTier[];
};

export const SERVICES: Service[] = [
  {
    slug: "dog-walking",
    nav: "Dog Walking",
    title: "Dog walking in Windsor & Eton",
    summary:
      "The Daily Wag offers GPS-tracked dog walking across Windsor, Eton, Ascot, Maidenhead and Slough, Monday to Saturday from 7am to 6pm. Group walks cost £15 for a full hour with a maximum of four dogs; solo walks cost £22. Every walk ends with a photo update, and every walker is insured, DBS-checked and pet first aid certified.",
    metaDescription:
      "GPS-tracked dog walking in Windsor and Eton from £15 an hour. Small groups of four dogs max, solo walks for nervous dogs, photo updates after every walk.",
    tiers: [
      {
        name: "Group walk",
        price: PRICES.groupWalk,
        unit: "per hour walk",
        confirmed: true,
        includes: [
          "Full 60 minutes of walking, not door-to-door time",
          "Maximum 4 dogs, matched by temperament and pace",
          "GPS-tracked route shared to your phone",
          "Photo update and walk notes after every outing",
          "Fresh water and paw wipe-down back at home",
        ],
      },
      {
        name: "Solo walk",
        price: PRICES.soloWalk,
        unit: "per hour walk",
        confirmed: true,
        includes: [
          "One-to-one hour with the same walker each time",
          "Route built around your dog — pace, surfaces, triggers",
          "Ideal for reactive, senior or recovering dogs",
          "Training reinforcement on cue words you already use",
          "Written report alongside the photo update",
        ],
      },
    ],
  },
  {
    slug: "dog-grooming",
    nav: "Dog Grooming",
    title: "Mobile dog grooming that comes to you",
    summary:
      "The Daily Wag's mobile grooming service brings a fully equipped van to your door anywhere in Windsor, Eton, Ascot, Maidenhead or Slough. One dog at a time, no cages, no waiting room stress. Launch pricing starts from £35 for a wash and dry and £55 for a full groom, confirmed at your free consultation.",
    metaDescription:
      "Mobile dog grooming in Windsor and Berkshire — a fully equipped van at your door. One dog at a time, no cages. Full grooms, wash & dry, puppy introductions.",
    tiers: [
      {
        name: "Full groom",
        price: PLACEHOLDER_PRICES.fullGroom,
        unit: "from, by breed & coat",
        confirmed: false,
        includes: [
          "Bath, blow-dry, full styling cut to breed or preference",
          "Nail trim, ear clean and sanitary tidy included",
          "One-dog-at-a-time appointment at your kerb",
          "Coat and skin condition notes after every groom",
        ],
      },
      {
        name: "Wash & dry",
        price: PLACEHOLDER_PRICES.washAndDry,
        unit: "from, by size",
        confirmed: false,
        includes: [
          "Deep-clean bath with coat-appropriate shampoo",
          "Full blow-dry and brush-out",
          "Nail trim included",
          "Perfect between full grooms or after a muddy season",
        ],
      },
      {
        name: "Puppy introduction",
        price: PLACEHOLDER_PRICES.puppyGroom,
        unit: "from, up to 6 months",
        confirmed: false,
        includes: [
          "Gentle first grooming experience, no rushing",
          "Face, feet and tail tidy plus bath and dry",
          "Handling practice so adult grooms stay stress-free",
          "Advice on brushes and home coat care for the breed",
        ],
      },
    ],
  },
  {
    slug: "puppy-visits",
    nav: "Puppy Visits & Sitting",
    title: "Puppy visits & pet sitting",
    summary:
      "The Daily Wag's puppy visits cost £10 for a 20-minute home visit covering toilet breaks, feeding and play — ideal for puppies not yet ready for full walks. Day sitting in your own home is available from £40 per day at launch pricing. Both services cover Windsor, Eton, Ascot, Maidenhead and Slough.",
    metaDescription:
      "Puppy visits in Windsor from £10 — toilet breaks, feeding and play while you're at work. In-home day sitting for dogs who'd rather stay on their own sofa.",
    tiers: [
      {
        name: "Puppy visit",
        price: PRICES.puppyVisit,
        unit: "per 20-min visit",
        confirmed: true,
        includes: [
          "Toilet break with praise-based routine building",
          "Feeding and fresh water to your schedule",
          "Play and gentle socialisation appropriate to age",
          "Photo update after every visit",
          "Multiple daily visits can be combined",
        ],
      },
      {
        name: "Day sitting",
        price: PLACEHOLDER_PRICES.daySitting,
        unit: "from, per day in your home",
        confirmed: false,
        includes: [
          "Your dog stays in their own home, routine intact",
          "Walks, meals and company through the working day",
          "House plants watered and post brought in — really",
          "Evening handover note so you know how the day went",
        ],
      },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
