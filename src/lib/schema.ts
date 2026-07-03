import { SITE, PRICES } from "./site";
import type { Area } from "./areas";
import type { Faq } from "./faqs";
import type { BlogPost } from "./blog";

/**
 * JSON-LD builders. Only confirmed facts are emitted — placeholder prices
 * (grooming/sitting) are deliberately excluded from structured data.
 */

const localBusinessId = `${SITE.url}/#business`;

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": localBusinessId,
    name: SITE.name,
    alternateName: SITE.legalName,
    description: SITE.description,
    url: SITE.url,
    telephone: SITE.phoneHref,
    email: SITE.email,
    foundingDate: String(SITE.foundingYear),
    priceRange: "££",
    currenciesAccepted: "GBP",
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.address.locality,
      addressRegion: SITE.address.region,
      addressCountry: SITE.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.lat,
      longitude: SITE.geo.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [...SITE.openingHours.days],
        opens: SITE.openingHours.opens,
        closes: SITE.openingHours.closes,
      },
    ],
    areaServed: SITE.serviceAreas.map((town) => ({
      "@type": "City",
      name: town,
    })),
    knowsAbout: [
      "Dog walking",
      "Dog grooming",
      "Puppy care",
      "Pet sitting",
    ],
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  path: string;
  /** Confirmed prices only. */
  offers?: { name: string; price: number }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: `${SITE.url}${opts.path}`,
    serviceType: opts.name,
    provider: { "@id": localBusinessId },
    areaServed: SITE.serviceAreas.map((town) => ({
      "@type": "City",
      name: town,
    })),
    ...(opts.offers && opts.offers.length > 0
      ? {
          offers: opts.offers.map((o) => ({
            "@type": "Offer",
            name: o.name,
            price: o.price.toFixed(2),
            priceCurrency: "GBP",
          })),
        }
      : {}),
  };
}

export function areaServiceSchema(area: Area) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Dog walking in ${area.town}`,
    description: area.metaDescription,
    url: `${SITE.url}/areas/${area.slug}`,
    serviceType: "Dog walking",
    provider: { "@id": localBusinessId },
    areaServed: {
      "@type": "City",
      name: area.town,
      containedInPlace: { "@type": "AdministrativeArea", name: area.county },
    },
    offers: [
      {
        "@type": "Offer",
        name: "Group dog walk (1 hour)",
        price: PRICES.groupWalk.toFixed(2),
        priceCurrency: "GBP",
      },
      {
        "@type": "Offer",
        name: "Solo dog walk (1 hour)",
        price: PRICES.soloWalk.toFixed(2),
        priceCurrency: "GBP",
      },
    ],
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE.url}${item.path}`,
    })),
  };
}

export function articleSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.datePublished,
    dateModified: post.datePublished,
    url: `${SITE.url}/blog/${post.slug}`,
    mainEntityOfPage: `${SITE.url}/blog/${post.slug}`,
    author: { "@type": "Organization", name: SITE.name, url: SITE.url },
    publisher: { "@id": localBusinessId },
    image: `${SITE.url}/blog/${post.slug}/opengraph-image`,
  };
}
