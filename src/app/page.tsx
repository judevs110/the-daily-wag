import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import FaqList from "@/components/FaqList";
import JsonLd from "@/components/JsonLd";
import Marquee from "@/components/Marquee";
import PlaceholderArt from "@/components/PlaceholderArt";
import Reveal from "@/components/Reveal";
import { AREAS } from "@/lib/areas";
import { POSTS } from "@/lib/blog";
import { HOME_FAQS } from "@/lib/faqs";
import { localBusinessSchema } from "@/lib/schema";
import { PRICES, SITE } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    title: `${SITE.name} — Dog Walking & Grooming in Windsor`,
    description: SITE.description,
    url: "/",
  },
};

const DAY_IN_THE_LIFE = [
  {
    time: "7:52am",
    title: "The knock they've been waiting for",
    body: "We collect on time, swap to our double-clipped lead, and leave your hallway exactly as we found it — minus one very excited dog.",
  },
  {
    time: "8:05am",
    title: "The sniff audit",
    body: "First ten minutes belong to the nose. Overnight headlines must be read: fox, other dogs, that suspicious hedgehog. We never rush this bit.",
  },
  {
    time: "8:20am",
    title: "The good part",
    body: "Long Walk, Great Park edge or riverside — a proper stride out with three well-matched friends at most, off lead only where it's genuinely allowed and safe.",
  },
  {
    time: "8:47am",
    title: "The splash incident",
    body: "There is a paddling spot on almost every route and your dog knows all of them. We carry towels and zero illusions.",
  },
  {
    time: "9:02am",
    title: "Home, dried, watered",
    body: "Paws wiped, water topped up, one biscuit for exceptional service (theirs, occasionally ours).",
  },
  {
    time: "9:04am",
    title: "Your phone buzzes",
    body: "GPS route map, photos from the walk, and a short note on how it went. You know everything before your second coffee.",
  },
];

const STANDARDS = [
  { figure: "4", label: "dogs maximum per group, matched by temperament" },
  { figure: "60", label: "true minutes of walking — the clock starts at the park, not your door" },
  { figure: "100%", label: "of walks GPS-tracked with photo updates" },
  { figure: "£0", label: "for your first meet & greet, no obligation" },
];

const SERVICE_INDEX = [
  {
    n: "01",
    href: "/dog-walking",
    name: "Dog walking",
    desc: "GPS-tracked group and solo walks across Windsor's best routes, six days a week.",
    price: `from £${PRICES.groupWalk}`,
  },
  {
    n: "02",
    href: "/dog-grooming",
    name: "Mobile grooming",
    desc: "A fully equipped grooming van at your kerb. One dog at a time, no cages, no stress.",
    price: "from £35*",
  },
  {
    n: "03",
    href: "/puppy-visits",
    name: "Puppy visits & sitting",
    desc: "Short home visits for small legs, and day sitting for dogs who prefer their own sofa.",
    price: `from £${PRICES.puppyVisit}`,
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={localBusinessSchema()} />

      {/* ---------- Hero: asymmetric editorial split ---------- */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 pt-14 pb-16 md:grid-cols-[1.15fr_0.85fr] md:items-center md:px-8 md:pt-20 md:pb-24">
          <div>
            <p className="eyebrow text-clay">
              Dog walking &amp; mobile grooming · Windsor, Eton &amp; Berkshire
            </p>
            <h1 className="font-display text-display-xl mt-6 text-ink">
              The best hour of{" "}
              <span className="font-display-wonk italic text-leaf">your dog&apos;s</span>{" "}
              day.
            </h1>
            {/* GEO summary: entity-rich, citable, always crawlable */}
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink/75">
              The Daily Wag is a premium dog walking and mobile grooming service
              based in Windsor. GPS-tracked walks in groups of four dogs or
              fewer, from £{PRICES.groupWalk} an hour, across Windsor, Eton,
              Ascot, Maidenhead and Slough — by insured, DBS-checked walkers who
              treat your dog like their own.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link href="/contact" className="btn-primary text-lg">
                Book a free meet &amp; greet
              </Link>
              <Link href="/dog-walking" className="link-underline font-semibold text-ink">
                See how walks work →
              </Link>
            </div>
            <p className="mt-10 text-sm text-ink/70">
              {SITE.credentials.join(" · ")}
            </p>
          </div>

          <Reveal delay={0.1} className="relative">
            <div className="arch relative aspect-[4/5] w-full max-w-md justify-self-end md:ml-auto">
              <PlaceholderArt
                variant="portrait"
                shot="Hero portrait — happy spaniel mid-walk on the Long Walk, Windsor Castle soft-focus behind, golden morning light"
              />
            </div>
            <p className="font-display-wonk absolute -bottom-3 -left-2 rotate-[-4deg] rounded-full bg-butter px-5 py-2.5 text-lg italic text-ink shadow-sm md:-left-8">
              Muddy paws welcome
            </p>
          </Reveal>
        </div>
      </section>

      <Marquee />

      {/* ---------- A day in the life ---------- */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <p className="eyebrow text-clay">A day in the life of your dog</p>
          <h2 className="font-display text-display-lg mt-4 max-w-3xl text-ink">
            What actually happens after we take the lead
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-x-16 gap-y-10 md:grid-cols-2">
          {DAY_IN_THE_LIFE.map((step, i) => (
            <Reveal
              key={step.time}
              delay={(i % 2) * 0.12}
              className={i % 2 ? "md:translate-y-10" : ""}
            >
              <article className="border-l-2 border-moss pl-6">
                <p className="font-display-wonk text-2xl italic text-clay">{step.time}</p>
                <h3 className="font-display mt-2 text-xl font-medium text-ink">{step.title}</h3>
                <p className="mt-2 max-w-md leading-relaxed text-ink/70">{step.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- Services: editorial index, not icon cards ---------- */}
      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <Reveal>
            <p className="eyebrow text-moss">What we do</p>
            <h2 className="font-display text-display-lg mt-4 text-cream">
              Three things, done properly
            </h2>
          </Reveal>
          <div className="mt-12">
            {SERVICE_INDEX.map((service, i) => (
              <Reveal key={service.href} delay={i * 0.08}>
                <Link
                  href={service.href}
                  className="group grid items-baseline gap-2 border-t border-cream/15 py-8 transition-colors hover:bg-cream/5 md:grid-cols-[3.5rem_1fr_1.2fr_auto] md:gap-8 md:px-4"
                >
                  <span className="font-display-wonk text-lg italic text-moss">{service.n}</span>
                  <span className="font-display text-display-md text-cream transition-transform duration-300 group-hover:translate-x-2">
                    {service.name}
                  </span>
                  <span className="leading-relaxed text-cream/65">{service.desc}</span>
                  <span className="font-display text-xl text-butter">
                    {service.price}
                    <span aria-hidden="true" className="ml-3 inline-block transition-transform duration-300 group-hover:translate-x-1.5">
                      →
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-sm text-cream/70">
            * Grooming and sitting launch prices confirmed at your free consultation.
          </p>
        </div>
      </section>

      {/* ---------- The standard ---------- */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:items-center">
          <Reveal className="relative">
            <div className="blob relative aspect-square w-full max-w-md">
              <PlaceholderArt
                variant="meadow"
                shot="Group walk — four dogs sitting in a row on Windsor Great Park grass, leads in a neat hand, castle skyline distant"
              />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <p className="eyebrow text-clay">The Daily Wag standard</p>
              <h2 className="font-display text-display-lg mt-4 text-ink">
                Small numbers.{" "}
                <span className="font-display-wonk italic text-leaf">On purpose.</span>
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {STANDARDS.map((s, i) => (
                <Reveal key={s.label} delay={i * 0.08}>
                  <p className="border-t-2 border-ink pt-4">
                    <span className="font-display text-5xl font-semibold text-clay">
                      {s.figure}
                    </span>
                    <span className="mt-2 block text-sm leading-relaxed text-ink/70">
                      {s.label}
                    </span>
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Where we walk ---------- */}
      <section className="bg-parchment">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow text-clay">Where we walk</p>
              <h2 className="font-display text-display-lg mt-4 text-ink">
                Five towns, known street by street
              </h2>
            </div>
            <Link href="/areas" className="link-underline font-semibold text-ink">
              All service areas →
            </Link>
          </Reveal>
          <ul className="mt-12">
            {AREAS.map((area, i) => (
              <li key={area.slug} className="border-t border-ink/15">
                <Reveal delay={i * 0.05}>
                  <Link
                    href={`/areas/${area.slug}`}
                    className="group flex flex-wrap items-baseline justify-between gap-x-8 gap-y-1 py-6 md:flex-nowrap"
                  >
                    <span className="font-display text-display-md text-ink transition-transform duration-300 group-hover:translate-x-2">
                      {area.town}
                    </span>
                    <span className="max-w-lg text-sm leading-relaxed text-ink/70 md:text-right">
                      {area.walks[0].name} · {area.walks[1].name}
                      <span aria-hidden="true" className="ml-3 inline-block text-clay transition-transform duration-300 group-hover:translate-x-1.5">
                        →
                      </span>
                    </span>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Testimonial placeholder — honestly labelled ---------- */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <figure className="max-w-3xl">
            <blockquote className="font-display text-display-md leading-snug text-ink">
              &ldquo;This space is reserved for the words of a real client — we
              won&apos;t invent them. Ask us for references and speak to actual
              humans instead.&rdquo;
            </blockquote>
            <figcaption className="mt-6 text-sm text-ink/70">
              <span className="font-semibold text-clay">Placeholder testimonial</span>{" "}
              — to be replaced with genuine client feedback, with permission,
              after launch.
            </figcaption>
          </figure>
        </Reveal>
      </section>

      {/* ---------- FAQ teaser ---------- */}
      <section className="border-t border-ink/10">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-[1fr_1.6fr] md:px-8 md:py-28">
          <Reveal>
            <p className="eyebrow text-clay">Quick answers</p>
            <h2 className="font-display text-display-md mt-4 text-ink">
              The questions every new client asks
            </h2>
            <Link href="/faq" className="link-underline mt-6 inline-block font-semibold text-ink">
              Read all twelve →
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <FaqList faqs={HOME_FAQS} />
          </Reveal>
        </div>
      </section>

      {/* ---------- Field notes ---------- */}
      <section className="bg-parchment">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-display text-display-md text-ink">Field notes</h2>
            <Link href="/blog" className="link-underline font-semibold text-ink">
              All notes →
            </Link>
          </Reveal>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {POSTS.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.08}>
                <Link href={`/blog/${post.slug}`} className="group block border-t-2 border-ink pt-5">
                  <p className="text-xs text-ink/70">
                    {new Date(post.datePublished).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}{" "}
                    · {post.readingMinutes} min read
                  </p>
                  <h3 className="font-display mt-3 text-2xl leading-snug text-ink group-hover:text-clay">
                    {post.title}
                  </h3>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
