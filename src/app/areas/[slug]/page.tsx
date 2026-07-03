import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import PageIntro from "@/components/PageIntro";
import Reveal from "@/components/Reveal";
import { AREAS, getArea } from "@/lib/areas";
import { areaServiceSchema, breadcrumbSchema, localBusinessSchema } from "@/lib/schema";
import { PRICES, SITE } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return AREAS.map((area) => ({ slug: area.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) return {};
  return {
    title: `Dog Walking in ${area.town} — from £${PRICES.groupWalk}/hour`,
    description: area.metaDescription,
    alternates: { canonical: `/areas/${area.slug}` },
    openGraph: {
      title: `Dog walking in ${area.town} — The Daily Wag`,
      description: area.metaDescription,
      url: `/areas/${area.slug}`,
    },
  };
}

export default async function AreaPage({ params }: Props) {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) notFound();

  return (
    <>
      <JsonLd
        data={[
          localBusinessSchema(),
          areaServiceSchema(area),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Service areas", path: "/areas" },
            { name: area.town, path: `/areas/${area.slug}` },
          ]),
        ]}
      />

      {/* Visible breadcrumb */}
      <nav aria-label="Breadcrumb" className="mx-auto max-w-6xl px-5 pt-6 md:px-8">
        <ol className="flex flex-wrap gap-2 text-sm text-ink/70">
          <li>
            <Link href="/" className="link-underline">Home</Link>
            <span aria-hidden="true" className="ml-2">/</span>
          </li>
          <li>
            <Link href="/areas" className="link-underline">Service areas</Link>
            <span aria-hidden="true" className="ml-2">/</span>
          </li>
          <li aria-current="page" className="font-semibold text-ink">{area.town}</li>
        </ol>
      </nav>

      <PageIntro
        eyebrow={`Dog walking in ${area.county}`}
        title={
          <>
            {area.town},{" "}
            <span className="font-display-wonk italic text-leaf">
              walked like a local
            </span>
          </>
        }
        summary={area.summary}
      />

      {/* Local intro */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr]">
          <Reveal>
            {area.intro.map((paragraph) => (
              <p key={paragraph.slice(0, 32)} className="mb-5 max-w-2xl text-lg leading-relaxed text-ink/75">
                {paragraph}
              </p>
            ))}
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-2xl bg-parchment p-7">
              <h2 className="eyebrow text-clay">{area.town} at a glance</h2>
              <dl className="mt-4 space-y-3 text-sm leading-relaxed">
                <div>
                  <dt className="font-semibold text-ink">Group walk</dt>
                  <dd className="text-ink/70">£{PRICES.groupWalk} per hour, max 4 dogs</dd>
                </div>
                <div>
                  <dt className="font-semibold text-ink">Solo walk</dt>
                  <dd className="text-ink/70">£{PRICES.soloWalk} per hour</dd>
                </div>
                <div>
                  <dt className="font-semibold text-ink">Puppy visit</dt>
                  <dd className="text-ink/70">£{PRICES.puppyVisit} per 20-minute visit</dd>
                </div>
                <div>
                  <dt className="font-semibold text-ink">Hours</dt>
                  <dd className="text-ink/70">{SITE.openingHours.human}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-ink">Mobile grooming</dt>
                  <dd className="text-ink/70">Set days per town — ask for the {area.town} rota</dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Route book */}
      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
          <Reveal>
            <p className="eyebrow text-moss">The {area.town} route book</p>
            <h2 className="font-display text-display-md mt-4 text-cream">
              Where your dog will actually walk
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
            {area.walks.map((walk, i) => (
              <Reveal key={walk.name} delay={(i % 2) * 0.1}>
                <article className="border-t border-cream/20 pt-5">
                  <h3 className="font-display text-2xl text-butter">{walk.name}</h3>
                  <p className="mt-3 leading-relaxed text-cream/75">{walk.note}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Local knowledge */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
        <div className="grid gap-12 md:grid-cols-2">
          {area.localNotes.map((note, i) => (
            <Reveal key={note.heading} delay={i * 0.1}>
              <article className={i === 1 ? "md:translate-y-8" : ""}>
                <p className="font-display-wonk text-lg italic text-clay">Local knowledge</p>
                <h2 className="font-display mt-2 text-2xl font-medium text-ink">{note.heading}</h2>
                <p className="mt-3 max-w-lg leading-relaxed text-ink/70">{note.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Cross-links to sibling towns */}
        <Reveal className="mt-16 border-t border-ink/15 pt-8">
          <p className="text-sm text-ink/70">
            Also nearby:{" "}
            {AREAS.filter((a) => a.slug !== area.slug).map((a, i, arr) => (
              <span key={a.slug}>
                <Link href={`/areas/${a.slug}`} className="link-underline font-semibold text-clay">
                  dog walking in {a.town}
                </Link>
                {i < arr.length - 1 ? " · " : ""}
              </span>
            ))}
          </p>
        </Reveal>
      </section>

      <CtaBand
        title={`Got a dog in ${area.town}?`}
        body={`Tell us where you are and what your dog needs — we'll confirm your nearest routes and collection windows in ${area.town} the same day.`}
      />
    </>
  );
}
