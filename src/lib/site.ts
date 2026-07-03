/**
 * Single source of truth for business facts.
 * Everything rendered on the site and emitted in JSON-LD reads from here,
 * so updating a price or phone number is a one-line change.
 */
export const SITE = {
  name: "The Daily Wag",
  legalName: "The Daily Wag Windsor",
  url: "https://thedailywag.co.uk",
  tagline: "Premium dog walking & grooming in Windsor, Eton and Berkshire",
  description:
    "The Daily Wag is a premium dog walking and mobile grooming service based in Windsor, Berkshire, covering Eton, Ascot, Maidenhead and Slough. Fully insured, DBS-checked and pet first aid certified, with GPS-tracked walks in small groups of four dogs or fewer.",
  phone: "01753 123456",
  phoneHref: "+441753123456",
  email: "hello@thedailywag-windsor.co.uk",
  foundingYear: 2024,
  address: {
    locality: "Windsor",
    region: "Berkshire",
    country: "GB",
  },
  geo: { lat: 51.4817, lng: -0.6045 },
  openingHours: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "07:00",
    closes: "18:00",
    human: "Monday to Saturday, 7am–6pm",
  },
  serviceAreas: ["Windsor", "Eton", "Ascot", "Maidenhead", "Slough"],
  credentials: [
    "Fully insured",
    "DBS checked",
    "Pet first aid certified",
    "GPS-tracked walks",
    "Maximum 4 dogs per group",
  ],
} as const;

/** Prices that are confirmed and safe to state as fact. */
export const PRICES = {
  groupWalk: 15,
  soloWalk: 22,
  puppyVisit: 10,
} as const;

/**
 * PLACEHOLDER PRICING — grooming and sitting launch prices are not yet
 * confirmed by the business. They are shown with a "launch pricing to be
 * confirmed" footnote on every page that uses them, and are excluded from
 * JSON-LD offers so no unconfirmed figure is published as structured data.
 * TODO(owner): confirm these and remove the caveat.
 */
export const PLACEHOLDER_PRICES = {
  fullGroom: 55,
  washAndDry: 35,
  puppyGroom: 28,
  daySitting: 40,
} as const;

export const PRICE_CAVEAT =
  "Launch pricing — to be confirmed at your free consultation.";
