import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import PageIntro from "@/components/PageIntro";
import PlaceholderArt from "@/components/PlaceholderArt";
import Reveal from "@/components/Reveal";
import { AREAS } from "@/lib/areas";
import { breadcrumbSchema, localBusinessSchema } from "@/lib/schema";

const SUMMARY =
  "The Daily Wag covers five Berkshire towns — Windsor, Eton, Ascot, Maidenhead and Slough — plus the villages between them. Group dog walks cost £15 and solo walks £22 in every area, with no travel surcharges. We're based in Windsor, so Windsor and Eton have the widest slot availability.";

export const metadata: Metadata = {
  title: "Service Areas — Dog Walking Across Windsor & East Berkshire",
  description:
    "Dog walking and mobile grooming in Windsor, Eton, Ascot, Maidenhead and Slough. Same prices in every town, routes chosen street by street by local walkers.",
  alternates: { canonical: "/areas" },
  openGraph: {
    title: "Where The Daily Wag walks",
    description: SUMMARY,
    url: "/areas",
  },
};

const ART: Record<string, "meadow" | "path" | "river" | "forest" | "portrait" | "groom"> = {
  windsor: "path",
  eton: "river",
  ascot: "forest",
  maidenhead: "meadow",
  slough: "groom",
};

export default function AreasPage() {
  return (
    <>
      <JsonLd
        data={[
          localBusinessSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Service areas", path: "/areas" },
          ]),
        ]}
      />

      <PageIntro
        eyebrow="Service areas"
        title={
          <>
            Five towns,{" "}
            <span className="font-display-wonk italic text-leaf">one standard</span>
          </>
        }
        summary={SUMMARY}
      />

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="space-y-20">
          {AREAS.map((area, i) => (
            <Reveal key={area.slug}>
              <article
                className={`grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center ${
                  i % 2 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <Link
                  href={`/areas/${area.slug}`}
                  aria-label={`Dog walking in ${area.town}`}
                  className="group block"
                >
                  <div className={`relative aspect-[4/3] ${i % 2 ? "blob" : "arch"}`}>
                    <PlaceholderArt
                      variant={ART[area.slug]}
                      shot={`${area.town} — a Daily Wag dog enjoying ${area.walks[0].name}`}
                      showNote={false}
                    />
                  </div>
                </Link>
                <div>
                  <p className="font-display-wonk text-lg italic text-clay">
                    {String(i + 1).padStart(2, "0")} · {area.county}
                  </p>
                  <h2 className="font-display text-display-md mt-2 text-ink">
                    <Link href={`/areas/${area.slug}`} className="hover:text-clay">
                      {area.town}
                    </Link>
                  </h2>
                  <p className="mt-4 max-w-xl leading-relaxed text-ink/70">{area.intro[0]}</p>
                  <p className="mt-4 text-sm text-ink/70">
                    Favourite routes: {area.walks.map((w) => w.name).join(" · ")}
                  </p>
                  <Link
                    href={`/areas/${area.slug}`}
                    className="link-underline mt-5 inline-block font-semibold text-clay"
                  >
                    Dog walking in {area.town} →
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20 border-t border-ink/15 pt-10">
          <p className="max-w-2xl leading-relaxed text-ink/70">
            <strong className="text-ink">Just outside these towns?</strong> We
            regularly cover Eton Wick, Old Windsor, Datchet, Sunninghill,
            Cheapside, Cookham, Bray and Langley. If you&apos;re nearby,{" "}
            <Link href="/contact" className="link-underline font-semibold text-clay">
              ask us
            </Link>{" "}
            — if we can reach you without shortchanging the dogs already booked,
            we will.
          </p>
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
