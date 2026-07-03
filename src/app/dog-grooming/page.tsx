import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import PageIntro from "@/components/PageIntro";
import PlaceholderArt from "@/components/PlaceholderArt";
import Reveal from "@/components/Reveal";
import TierCard from "@/components/TierCard";
import { getService } from "@/lib/services";
import { breadcrumbSchema, localBusinessSchema, serviceSchema } from "@/lib/schema";

const service = getService("dog-grooming")!;

export const metadata: Metadata = {
  title: "Mobile Dog Grooming in Windsor & Berkshire",
  description: service.metaDescription,
  alternates: { canonical: "/dog-grooming" },
  openGraph: {
    title: "Mobile Dog Grooming — The Daily Wag",
    description: service.metaDescription,
    url: "/dog-grooming",
  },
};

const DIFFERENCES = [
  {
    title: "One dog in the van, ever",
    body: "No queue of strangers barking two feet away, no cage-drying next to a stressed husky. Your dog is the only client from the moment the door opens to the moment they're back on your doorstep, fluffy.",
  },
  {
    title: "No car journey, no waiting room",
    body: "The van parks at your kerb. For anxious dogs, seniors and car-sick travellers, removing the journey removes most of the stress before we've even run the water.",
  },
  {
    title: "The same groomer each time",
    body: "Dogs remember hands. Seeing the same groomer builds trust visit on visit, which is why our grooms tend to get easier — and quicker — over time, not harder.",
  },
  {
    title: "Walkers and groomer compare notes",
    body: "If we already walk your dog, your groomer knows their quirks before the first bath — which ear is sensitive, whether clippers or scissors will go down better, what treat buys forgiveness.",
  },
];

export default function DogGroomingPage() {
  return (
    <>
      <JsonLd
        data={[
          localBusinessSchema(),
          // No offers emitted: grooming launch prices are placeholders and
          // are deliberately kept out of structured data until confirmed.
          serviceSchema({
            name: "Mobile dog grooming",
            description: service.metaDescription,
            path: "/dog-grooming",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Dog grooming", path: "/dog-grooming" },
          ]),
        ]}
      />

      <PageIntro
        eyebrow="Mobile dog grooming"
        title={
          <>
            The salon comes to{" "}
            <span className="font-display-wonk italic text-leaf">your kerb</span>
          </>
        }
        summary={service.summary}
      />

      {/* Why mobile */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
        <div className="grid gap-12 md:grid-cols-[0.9fr_1.3fr] md:items-start">
          <Reveal className="md:sticky md:top-28">
            <div className="blob relative aspect-square w-full max-w-sm">
              <PlaceholderArt
                variant="groom"
                shot="Grooming van interior — dog mid-blow-dry looking delighted, groomer's hands visible, bright natural light"
              />
            </div>
            <h2 className="font-display text-display-md mt-10 text-ink">
              Why dogs prefer the van
            </h2>
          </Reveal>
          <div className="grid gap-10 sm:grid-cols-2">
            {DIFFERENCES.map((d, i) => (
              <Reveal key={d.title} delay={i * 0.08}>
                <article className="border-t-2 border-ink pt-4">
                  <h3 className="font-display text-xl font-medium text-ink">{d.title}</h3>
                  <p className="mt-3 leading-relaxed text-ink/70">{d.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Grooming menu */}
      <section className="bg-parchment">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
          <Reveal>
            <p className="eyebrow text-clay">The menu</p>
            <h2 className="font-display text-display-md mt-4 text-ink">
              Three grooms, priced by coat not by clock
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-12 md:grid-cols-3">
            {service.tiers.map((tier, i) => (
              <Reveal key={tier.name} delay={i * 0.1}>
                <TierCard tier={tier} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Before / after gallery scaffold */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
        <Reveal>
          <p className="eyebrow text-clay">Before &amp; after</p>
          <h2 className="font-display text-display-md mt-4 max-w-2xl text-ink">
            The gallery earns its place once the van does
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-ink/70">
            We&apos;ll only ever show real client dogs here, with their owners&apos;
            blessing. Until then, these frames hold the space — and set the
            standard the photos will have to live up to.
          </p>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {(
            [
              ["forest", "BEFORE — cockapoo at peak hedge-collection, full matting story visible"],
              ["groom", "AFTER — same cockapoo, teddy cut, absurdly proud expression"],
              ["meadow", "BEFORE — golden retriever post-Battlemead swim, heroic mud coverage"],
              ["river", "AFTER — same retriever, gleaming, sitting on the owner's doorstep"],
            ] as const
          ).map(([variant, shot], i) => (
            <Reveal key={shot} delay={i * 0.06}>
              <div className={`relative aspect-[3/4] overflow-hidden rounded-2xl ${i % 2 ? "md:translate-y-6" : ""}`}>
                <PlaceholderArt variant={variant} shot={shot} />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand
        title="Book the van before the mud season does."
        body="Tell us your dog's breed and coat, and we'll confirm an exact price and a slot on your street — grooming runs on set days per town."
        cta="Get a grooming quote"
      />
    </>
  );
}
