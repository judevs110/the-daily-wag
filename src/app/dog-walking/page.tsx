import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import PageIntro from "@/components/PageIntro";
import PlaceholderArt from "@/components/PlaceholderArt";
import Reveal from "@/components/Reveal";
import TierCard from "@/components/TierCard";
import { AREAS } from "@/lib/areas";
import { getService } from "@/lib/services";
import { breadcrumbSchema, localBusinessSchema, serviceSchema } from "@/lib/schema";
import { PRICES } from "@/lib/site";

const service = getService("dog-walking")!;

export const metadata: Metadata = {
  title: "Dog Walking in Windsor & Eton — from £15/hour",
  description: service.metaDescription,
  alternates: { canonical: "/dog-walking" },
  openGraph: {
    title: "Dog Walking in Windsor & Eton — The Daily Wag",
    description: service.metaDescription,
    url: "/dog-walking",
  },
};

const HOW_IT_WORKS = [
  {
    step: "First",
    title: "A free meet & greet at yours",
    body: "Half an hour at your home. Your dog checks us out, we learn their routine, quirks and vet details, and you ask anything you like. No booking pressure — most people decide on the spot, but you don't have to.",
  },
  {
    step: "Then",
    title: "A gentle first walk",
    body: "New dogs start with a shorter settling-in walk, solo or in a carefully chosen pair. We check how they travel, how they greet other dogs, and what makes their tail go. Group placement comes only when they're ready.",
  },
  {
    step: "Every walk after",
    title: "The same faces, the same standard",
    body: "A regular slot, a familiar walker, a route rotation your dog learns by heart. GPS trail and photos after every single walk, and a note if anything was off — appetite, limp, mood. You'll never wonder how it went.",
  },
];

export default function DogWalkingPage() {
  return (
    <>
      <JsonLd
        data={[
          localBusinessSchema(),
          serviceSchema({
            name: "Dog walking",
            description: service.metaDescription,
            path: "/dog-walking",
            offers: [
              { name: "Group dog walk (1 hour)", price: PRICES.groupWalk },
              { name: "Solo dog walk (1 hour)", price: PRICES.soloWalk },
            ],
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Dog walking", path: "/dog-walking" },
          ]),
        ]}
      />

      <PageIntro
        eyebrow="Dog walking"
        title={
          <>
            An hour that&apos;s actually{" "}
            <span className="font-display-wonk italic text-leaf">an hour</span>
          </>
        }
        summary={service.summary}
      />

      {/* How it works — editorial three-step */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
        <Reveal>
          <h2 className="font-display text-display-md text-ink">
            How walking with us works
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-12 md:grid-cols-3">
          {HOW_IT_WORKS.map((item, i) => (
            <Reveal key={item.step} delay={i * 0.1}>
              <article className={i === 1 ? "md:translate-y-8" : i === 2 ? "md:translate-y-16" : ""}>
                <p className="font-display-wonk text-xl italic text-clay">{item.step}</p>
                <h3 className="font-display mt-3 text-2xl font-medium text-ink">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-ink/70">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Walk types */}
      <section className="bg-parchment">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr_0.9fr]">
            {service.tiers.map((tier, i) => (
              <Reveal key={tier.name} delay={i * 0.1}>
                <TierCard tier={tier} />
              </Reveal>
            ))}
            <Reveal delay={0.2} className="hidden lg:block">
              <div className="arch relative aspect-[3/4] h-full max-h-[480px] w-full">
                <PlaceholderArt
                  variant="path"
                  shot="Walker from behind with two dogs on the Long Walk avenue, leads relaxed, autumn trees"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Where the walks happen */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
        <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:items-start">
          <Reveal>
            <p className="eyebrow text-clay">The routes</p>
            <h2 className="font-display text-display-md mt-4 text-ink">
              Walked on the good stuff, not around the block
            </h2>
            <p className="mt-5 leading-relaxed text-ink/70">
              Every area we cover has its own route book — the Long Walk and
              Great Park edges in Windsor, The Brocas at Eton, Swinley Forest
              from Ascot, Ockwells Park in Maidenhead, Upton Court Park in
              Slough. Your dog walks the best of where you live.
            </p>
          </Reveal>
          <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
            {AREAS.map((area, i) => (
              <Reveal key={area.slug} delay={i * 0.05}>
                <Link
                  href={`/areas/${area.slug}`}
                  className="group block border-t border-ink/15 py-4"
                >
                  <span className="font-display text-xl text-ink group-hover:text-clay">
                    {area.town} →
                  </span>
                  <span className="mt-1 block text-sm text-ink/70">
                    {area.walks.map((w) => w.name).slice(0, 2).join(" · ")}
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Fancy giving your dog a better lunchtime?"
        body="Tell us about your dog and your week — we'll suggest the right walk, honestly, even if it's the cheaper one."
      />
    </>
  );
}
