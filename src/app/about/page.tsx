import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import PageIntro from "@/components/PageIntro";
import PlaceholderArt from "@/components/PlaceholderArt";
import Reveal from "@/components/Reveal";
import { breadcrumbSchema, localBusinessSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

const SUMMARY = `The Daily Wag is an independent, Windsor-based dog walking and mobile grooming business founded in ${SITE.foundingYear}. Every walker is insured, DBS-checked and pet first aid certified, walks are capped at four dogs, and the service covers Windsor, Eton, Ascot, Maidenhead and Slough.`;

export const metadata: Metadata = {
  title: "About Us — The People Behind the Leads",
  description:
    "Meet The Daily Wag: an independent Windsor dog walking and grooming team. Insured, DBS-checked, pet first aid certified — and genuinely fussy about doing it well.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About The Daily Wag",
    description: SUMMARY,
    url: "/about",
  },
};

const PRINCIPLES = [
  {
    title: "Small on purpose",
    body: "Four dogs per group is our ceiling, not our average. We grow by adding walkers we'd trust with our own dogs, never by stretching the ones we have. If we're full, we say so and keep a fair waiting list.",
  },
  {
    title: "Boringly professional",
    body: "Insurance, enhanced DBS checks, pet first aid certificates, written care notes, GPS logs. The paperwork isn't the love — but it's what lets you relax enough to let us show the love.",
  },
  {
    title: "Honest to a fault",
    body: "If your dog would be happier with a solo walk, a different schedule, or frankly a cat, we'll tell you. We'd rather lose a booking than place a dog badly — it's better for the dog and, long run, better for us.",
  },
  {
    title: "Local, actually",
    body: "We live here. We know which Windsor gates flood, when Ascot race traffic makes the A329 hopeless, and where Maidenhead's swans hold their grudges. That knowledge is half the service.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          localBusinessSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ]}
      />

      <PageIntro
        eyebrow="About The Daily Wag"
        title={
          <>
            Run by people whose phones are{" "}
            <span className="font-display-wonk italic text-leaf">full of dogs</span>
          </>
        }
        summary={SUMMARY}
      />

      {/* Story */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:items-start">
          <Reveal>
            <div className="arch relative aspect-[4/5] w-full max-w-sm">
              <PlaceholderArt
                variant="portrait"
                shot="Founder portrait — candid, crouched at dog level on the Long Walk, laughing, two dogs mid-greeting"
              />
            </div>
            <p className="mt-4 text-xs text-ink/70">
              TODO(owner): add founder name, photo and a short personal bio here.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-display-md text-ink">
              Started in Windsor, because of a very bored spaniel
            </h2>
            <div className="mt-6 max-w-2xl space-y-5 text-lg leading-relaxed text-ink/75">
              <p>
                The Daily Wag began in {SITE.foundingYear} with one walker, one
                borrowed key safe, and a strong opinion: an hour&apos;s walk should
                mean an hour of walking. Not forty minutes minus pickups, not
                eight dogs braided into a single lead — a real hour, on the good
                routes, in company your dog actually enjoys.
              </p>
              <p>
                That opinion turned out to be popular. We&apos;ve grown from one
                round in Windsor to daily routes across Eton, Ascot, Maidenhead
                and Slough, and added a mobile grooming van so the dogs we walk
                (and plenty we don&apos;t) can be washed, clipped and pampered
                on their own doorstep.
              </p>
              <p>
                The ceiling hasn&apos;t moved, though: four dogs per group,
                the same walker for your dog wherever humanly possible, and a
                photo after every visit. If that sounds unremarkable, ask around
                — it isn&apos;t.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-parchment">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
          <Reveal>
            <p className="eyebrow text-clay">What we believe</p>
            <h2 className="font-display text-display-md mt-4 text-ink">
              Four principles, non-negotiable
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
            {PRINCIPLES.map((principle, i) => (
              <Reveal key={principle.title} delay={(i % 2) * 0.1}>
                <article className="border-t-2 border-ink pt-5">
                  <h3 className="font-display text-2xl font-medium text-ink">
                    {principle.title}
                  </h3>
                  <p className="mt-3 max-w-lg leading-relaxed text-ink/70">{principle.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials, stated plainly for crawlers and humans alike */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
        <Reveal>
          <h2 className="font-display text-display-md max-w-2xl text-ink">
            The paperwork, in plain sight
          </h2>
          <ul className="mt-8 grid max-w-3xl gap-4 sm:grid-cols-2">
            {[
              "Professional pet care insurance covering every walk and groom",
              "Enhanced DBS checks for every walker",
              "Pet first aid certification, renewed on schedule",
              "GPS tracking and photo reports on 100% of walks",
              "Coded key handling — never labelled, returned on request",
              "Written care notes for every dog on our books",
            ].map((line) => (
              <li key={line} className="flex gap-3 leading-relaxed text-ink/75">
                <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-clay" />
                {line}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-ink/70">
            Certificates available to view at your meet &amp; greet — just ask.
          </p>
        </Reveal>
      </section>

      <CtaBand
        title="Come and judge us in person."
        body="The meet & greet is free, takes half an hour, and your dog gets the casting vote. We wouldn't have it any other way."
      />
    </>
  );
}
