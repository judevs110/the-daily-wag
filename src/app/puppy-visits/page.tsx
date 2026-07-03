import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import PageIntro from "@/components/PageIntro";
import PlaceholderArt from "@/components/PlaceholderArt";
import Reveal from "@/components/Reveal";
import TierCard from "@/components/TierCard";
import { getService } from "@/lib/services";
import { breadcrumbSchema, localBusinessSchema, serviceSchema } from "@/lib/schema";
import { PRICES } from "@/lib/site";

const service = getService("puppy-visits")!;

export const metadata: Metadata = {
  title: "Puppy Visits & Pet Sitting in Windsor — from £10",
  description: service.metaDescription,
  alternates: { canonical: "/puppy-visits" },
  openGraph: {
    title: "Puppy Visits & Pet Sitting — The Daily Wag",
    description: service.metaDescription,
    url: "/puppy-visits",
  },
};

const PUPPY_DAY = [
  {
    time: "Mid-morning",
    body: "Toilet break in the garden with the exact praise word you use, breakfast bowl check, ten minutes of play that ends before overstimulation does.",
  },
  {
    time: "Lunchtime",
    body: "The big one: feed, fresh water, another garden trip, and calm socialisation — new textures, sounds and gentle handling, one small thing per visit.",
  },
  {
    time: "Mid-afternoon",
    body: "Final top-up so the gap to your homecoming is short enough for small bladders and big feelings. Photo after every visit, always.",
  },
];

export default function PuppyVisitsPage() {
  return (
    <>
      <JsonLd
        data={[
          localBusinessSchema(),
          serviceSchema({
            name: "Puppy visits and pet sitting",
            description: service.metaDescription,
            path: "/puppy-visits",
            offers: [{ name: "Puppy visit (20 minutes)", price: PRICES.puppyVisit }],
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Puppy visits & sitting", path: "/puppy-visits" },
          ]),
        ]}
      />

      <PageIntro
        eyebrow="Puppy visits & pet sitting"
        title={
          <>
            Small legs,{" "}
            <span className="font-display-wonk italic text-leaf">big feelings</span>,
            short visits
          </>
        }
        summary={service.summary}
      />

      {/* A puppy's working day */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
        <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div>
            <Reveal>
              <h2 className="font-display text-display-md text-ink">
                How we cover your working day
              </h2>
              <p className="mt-5 max-w-xl leading-relaxed text-ink/70">
                Young puppies can&apos;t wait eight hours — for the bladder or
                the loneliness. Most clients book two or three visits spread
                across the day until their pup graduates to short walks, then
                full ones. Here&apos;s a typical spread:
              </p>
            </Reveal>
            <div className="mt-10 space-y-8">
              {PUPPY_DAY.map((visit, i) => (
                <Reveal key={visit.time} delay={i * 0.1}>
                  <article className="border-l-2 border-moss pl-6">
                    <h3 className="font-display-wonk text-2xl italic text-clay">{visit.time}</h3>
                    <p className="mt-2 max-w-lg leading-relaxed text-ink/70">{visit.body}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={0.15}>
            <div className="arch relative aspect-[4/5] w-full max-w-sm md:ml-auto">
              <PlaceholderArt
                variant="portrait"
                shot="Puppy visit — dachshund puppy mid-zoomie in a Windsor garden, ears airborne"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Options */}
      <section className="bg-parchment">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
          <Reveal>
            <p className="eyebrow text-clay">The options</p>
            <h2 className="font-display text-display-md mt-4 text-ink">
              Visits for puppies, sitting for homebodies
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-12 md:grid-cols-2 lg:max-w-4xl">
            {service.tiers.map((tier, i) => (
              <Reveal key={tier.name} delay={i * 0.1}>
                <TierCard tier={tier} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Graduation path */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
        <Reveal>
          <h2 className="font-display text-display-md max-w-2xl text-ink">
            Visits grow into walks —{" "}
            <span className="font-display-wonk italic text-leaf">
              on your puppy&apos;s schedule
            </span>
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-ink/70">
            As vaccinations complete and stamina builds, we step visits up into
            ten-minute lead practice, then short solo walks, then — for the
            sociable ones — a place in one of our small groups. Same company,
            same faces, no re-introductions. Most of our group-walk regulars
            started as £{PRICES.puppyVisit} puppy visits.
          </p>
        </Reveal>
      </section>

      <CtaBand
        title="New puppy? Congratulations. Now sleep."
        body="Tell us your pup's age and your working pattern and we'll suggest a visit schedule that keeps toilet training on track without blowing the budget."
        cta="Plan puppy visits"
      />
    </>
  );
}
