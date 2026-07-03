import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import { POSTS, getPost } from "@/lib/blog";
import { articleSchema, breadcrumbSchema, localBusinessSchema } from "@/lib/schema";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.metaDescription,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.metaDescription,
      url: `/blog/${post.slug}`,
      publishedTime: post.datePublished,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <JsonLd
        data={[
          localBusinessSchema(),
          articleSchema(post),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Field notes", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
        ]}
      />

      <article className="mx-auto max-w-6xl px-5 md:px-8">
        {/* Visible breadcrumb */}
        <nav aria-label="Breadcrumb" className="pt-6">
          <ol className="flex flex-wrap gap-2 text-sm text-ink/70">
            <li>
              <Link href="/" className="link-underline">Home</Link>
              <span aria-hidden="true" className="ml-2">/</span>
            </li>
            <li>
              <Link href="/blog" className="link-underline">Field notes</Link>
            </li>
          </ol>
        </nav>

        <header className="border-b border-ink/10 pt-12 pb-12 md:pt-16 md:pb-16">
          <p className="eyebrow text-clay">
            Field notes ·{" "}
            <time dateTime={post.datePublished}>
              {new Date(post.datePublished).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>{" "}
            · {post.readingMinutes} min read
          </p>
          <h1 className="font-display text-display-lg mt-5 max-w-4xl text-ink">
            {post.title}
          </h1>
          {/* Citable summary (GEO) */}
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink/75">
            {post.summary}
          </p>
        </header>

        <div className="grid gap-10 py-14 md:grid-cols-[1fr_2fr] md:py-20">
          <Reveal>
            <aside className="md:sticky md:top-28">
              <p className="eyebrow text-clay">In this guide</p>
              <ul className="mt-4 space-y-2 text-sm">
                {post.sections
                  .filter((section) => section.heading)
                  .map((section) => (
                    <li key={section.heading} className="leading-snug text-ink/70">
                      {section.heading}
                    </li>
                  ))}
              </ul>
            </aside>
          </Reveal>

          <div className="max-w-2xl">
            {post.sections.map((section, i) => (
              <Reveal key={section.heading ?? `s-${i}`}>
                <section className={i > 0 ? "mt-10" : ""}>
                  {section.heading && (
                    <h2 className="font-display text-2xl font-medium text-ink md:text-3xl">
                      {section.heading}
                    </h2>
                  )}
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 32)}
                      className="mt-4 leading-relaxed text-ink/75"
                    >
                      {paragraph}
                    </p>
                  ))}
                </section>
              </Reveal>
            ))}

            <Reveal>
              <footer className="mt-14 border-t border-ink/15 pt-8">
                <p className="text-sm leading-relaxed text-ink/70">
                  Written by The Daily Wag — dog walking and mobile grooming
                  across Windsor, Eton, Ascot, Maidenhead and Slough.{" "}
                  <Link href="/dog-walking" className="link-underline font-semibold text-clay">
                    How our walks work →
                  </Link>
                </p>
              </footer>
            </Reveal>
          </div>
        </div>
      </article>

      <CtaBand />
    </>
  );
}
