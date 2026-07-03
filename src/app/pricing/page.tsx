import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import PageIntro from "@/components/PageIntro";
import Reveal from "@/components/Reveal";
import { SERVICES } from "@/lib/services";
import { breadcrumbSchema, localBusinessSchema } from "@/lib/schema";
import { PRICES, PRICE_CAVEAT } from "@/lib/site";

const SUMMARY = `The Daily Wag's prices are the same across Windsor, Eton, Ascot, Maidenhead and Slough: group dog walks £${PRICES.groupWalk} per hour, solo walks £${PRICES.soloWalk} per hour, puppy visits £${PRICES.puppyVisit} per 20 minutes. Mobile grooming is priced by breed and coat from £35 at launch. No travel surcharges, no booking fees, and the first meet & greet is free.`;

export const metadata: Metadata = {
  title: "Pricing — Dog Walking from £15, No Hidden Extras",
  description:
    "The Daily Wag price list: group walks £15/hour, solo walks £22/hour, puppy visits £10. Same prices in every town we cover, no fuel surcharges, free meet & greet.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "The Daily Wag — full price list",
    description: SUMMARY,
    url: "/pricing",
  },
};

const PROMISES = [
  {
    title: "One price, five towns",
    body: "Windsor pays what Slough pays. Distance is our problem to route around, not yours to subsidise.",
  },
  {
    title: "The hour is the hour",
    body: "Walk time is measured from the moment the sniffing starts, not from your front door. Travel is on us.",
  },
  {
    title: "No surprise line items",
    body: "No fuel surcharge, no key-holding fee, no weekend markup within our hours, no booking fee. If a price ever changes, you get a month's notice.",
  },
  {
    title: "Fair cancellations",
    body: "Cancel by 7pm the evening before and you pay nothing. Later than that, half the fee covers the walker's dead slot — that's the whole policy.",
  },
];

export default function PricingPage() {
  return (
    <>
      <JsonLd
        data={[
          localBusinessSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Pricing", path: "/pricing" },
          ]),
        ]}
      />

      <PageIntro
        eyebrow="Pricing"
        title={
          <>
            Honest numbers,{" "}
            <span className="font-display-wonk italic text-leaf">stated plainly</span>
          </>
        }
        summary={SUMMARY}
      />

      {/* Full price table, crawlable text */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        {SERVICES.map((service, si) => (
          <Reveal key={service.slug}>
            <div className={si > 0 ? "mt-16" : ""}>
              <div className="flex flex-wrap items-baseline justify-between gap-4">
                <h2 className="font-display text-display-sm text-ink">{service.nav}</h2>
                <Link href={`/${service.slug}`} className="link-underline text-sm font-semibold text-clay">
                  About this service →
                </Link>
              </div>
              <table className="mt-6 w-full border-collapse text-left">
                <thead>
                  <tr className="border-b-2 border-ink text-sm text-ink/70">
                    <th scope="col" className="py-3 pr-4 font-semibold">Option</th>
                    <th scope="col" className="hidden py-3 pr-4 font-semibold sm:table-cell">
                      What&apos;s included
                    </th>
                    <th scope="col" className="py-3 text-right font-semibold">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {service.tiers.map((tier) => (
                    <tr key={tier.name} className="border-b border-ink/10 align-top">
                      <th scope="row" className="py-5 pr-4 font-display text-lg font-medium text-ink">
                        {tier.name}
                        {!tier.confirmed && <span aria-hidden="true" className="text-clay">*</span>}
                      </th>
                      <td className="hidden max-w-md py-5 pr-4 text-sm leading-relaxed text-ink/70 sm:table-cell">
                        {tier.includes.slice(0, 2).join(". ")}.
                      </td>
                      <td className="py-5 text-right">
                        <span className="font-display text-2xl font-semibold text-clay">
                          £{tier.price}
                        </span>
                        <span className="block text-xs text-ink/70">{tier.unit}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        ))}
        <Reveal>
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-ink/70">
            * {PRICE_CAVEAT} Walking and puppy visit prices are confirmed and
            current. Discounts available for block bookings of ten or more
            walks and for second dogs from the same household — ask at your
            meet &amp; greet.
          </p>
        </Reveal>
      </section>

      {/* Pricing promises */}
      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
          <Reveal>
            <p className="eyebrow text-moss">The fine print, unfine</p>
            <h2 className="font-display text-display-md mt-4 text-cream">
              Four promises about money
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
            {PROMISES.map((promise, i) => (
              <Reveal key={promise.title} delay={(i % 2) * 0.1}>
                <article className="border-t border-cream/20 pt-5">
                  <h3 className="font-display text-2xl text-butter">{promise.title}</h3>
                  <p className="mt-3 max-w-lg leading-relaxed text-cream/75">{promise.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Want an exact quote?"
        body="For walking, the price list is the quote. For grooming, tell us the breed and coat condition and we'll give you a firm number before you commit to anything."
      />
    </>
  );
}
