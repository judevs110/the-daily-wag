import Link from "next/link";
import { SITE } from "@/lib/site";
import { AREAS } from "@/lib/areas";

const EXPLORE = [
  { href: "/about", label: "About us" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
  { href: "/blog", label: "Field notes" },
  { href: "/contact", label: "Contact" },
];

const SERVICES = [
  { href: "/dog-walking", label: "Dog walking" },
  { href: "/dog-grooming", label: "Mobile grooming" },
  { href: "/puppy-visits", label: "Puppy visits & sitting" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      {/* Sign-off band */}
      <div className="mx-auto max-w-6xl px-5 pt-20 pb-10 md:px-8">
        <p className="eyebrow text-moss">One last thing</p>
        <p className="font-display text-display-md mt-4 max-w-2xl text-cream">
          The first walk is a free meet &amp; greet.{" "}
          <span className="font-display-wonk italic text-butter">
            Your dog decides
          </span>{" "}
          if we get the job.
        </p>
        <Link
          href="/contact"
          className="btn-secondary btn-secondary--light mt-8"
        >
          Arrange a meet &amp; greet
        </Link>

        <div className="mt-16 grid gap-10 border-t border-cream/15 pt-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="eyebrow text-moss">Get in touch</h2>
            <address className="mt-4 space-y-2 text-sm not-italic leading-relaxed text-cream/80">
              <p>
                <a href={`tel:${SITE.phoneHref}`} className="link-underline text-cream">
                  {SITE.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${SITE.email}`} className="link-underline break-all text-cream">
                  {SITE.email}
                </a>
              </p>
              <p>{SITE.openingHours.human}</p>
              <p>
                {SITE.address.locality}, {SITE.address.region}
              </p>
            </address>
          </div>

          <nav aria-label="Services">
            <h2 className="eyebrow text-moss">Services</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {SERVICES.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="link-underline text-cream/80 hover:text-cream">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Areas we cover">
            <h2 className="eyebrow text-moss">Where we walk</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {AREAS.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/areas/${area.slug}`}
                    className="link-underline text-cream/80 hover:text-cream"
                  >
                    Dog walking in {area.town}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Explore">
            <h2 className="eyebrow text-moss">Explore</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {EXPLORE.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="link-underline text-cream/80 hover:text-cream">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="mt-12 max-w-3xl text-xs leading-relaxed text-cream/70">
          {SITE.name} — {SITE.tagline}. {SITE.credentials.join(" · ")}.
        </p>
      </div>

      {/* Giant ghost wordmark — SVG text so it stays decorative for a11y */}
      <div className="overflow-hidden px-5 md:px-8" aria-hidden="true">
        <svg
          viewBox="0 0 1200 150"
          className="mx-auto block w-full max-w-6xl translate-y-[8%] select-none"
        >
          <text
            x="600"
            y="128"
            textAnchor="middle"
            className="font-display"
            fontSize="150"
            fontWeight="600"
            fill="var(--color-cream)"
            fillOpacity="0.1"
          >
            The Daily Wag
          </text>
        </svg>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-2 px-5 py-5 text-xs text-cream/70 sm:flex-row md:px-8">
          <p>
            © {new Date().getFullYear()} {SITE.legalName}. All rights reserved.
          </p>
          <p>Made with muddy boots in {SITE.address.locality}.</p>
        </div>
      </div>
    </footer>
  );
}
