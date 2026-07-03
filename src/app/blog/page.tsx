import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import PageIntro from "@/components/PageIntro";
import Reveal from "@/components/Reveal";
import { POSTS } from "@/lib/blog";
import { breadcrumbSchema, localBusinessSchema } from "@/lib/schema";

const SUMMARY =
  "Field notes from The Daily Wag: practical local guides written by the people who walk Windsor, Eton, Ascot, Maidenhead and Slough every working day — where to walk off-lead, what local services cost, and how to get the best out of a Berkshire dog's week.";

export const metadata: Metadata = {
  title: "Field Notes — Local Dog Walking Guides from Windsor",
  description:
    "Practical guides from Windsor's dog walking front line: off-lead walk maps, local price guides, seasonal route advice. Written from muddy first-hand experience.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Field notes — The Daily Wag",
    description: SUMMARY,
    url: "/blog",
  },
};

export default function BlogIndexPage() {
  return (
    <>
      <JsonLd
        data={[
          localBusinessSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Field notes", path: "/blog" },
          ]),
        ]}
      />

      <PageIntro
        eyebrow="Field notes"
        title={
          <>
            Written with{" "}
            <span className="font-display-wonk italic text-leaf">muddy hands</span>
          </>
        }
        summary={SUMMARY}
      />

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="space-y-14">
          {POSTS.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.08}>
              <article className="group grid gap-4 border-t-2 border-ink pt-6 md:grid-cols-[auto_1fr] md:gap-12">
                <p className="text-sm text-ink/70 md:w-40">
                  {new Date(post.datePublished).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                  <span className="mt-1 block">{post.readingMinutes} min read</span>
                </p>
                <div>
                  <h2 className="font-display text-display-sm max-w-2xl text-ink">
                    <Link href={`/blog/${post.slug}`} className="group-hover:text-clay">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-4 max-w-2xl leading-relaxed text-ink/70">
                    {post.metaDescription}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="link-underline mt-4 inline-block font-semibold text-clay"
                  >
                    Read the guide →
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-16">
          <p className="max-w-xl text-sm leading-relaxed text-ink/70">
            More notes are on the way — seasonal route guides, grooming
            calendars by coat type, and honest reviews of every dog-friendly
            café we&apos;re dragged into.
          </p>
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
