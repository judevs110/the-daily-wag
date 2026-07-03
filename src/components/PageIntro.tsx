import type { ReactNode } from "react";

/**
 * Editorial page opener: eyebrow + oversized display heading, left-aligned
 * on an asymmetric grid, with the citable summary paragraph (GEO) offset
 * to the right column.
 */
export default function PageIntro({
  eyebrow,
  title,
  summary,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  /** The concise, quotable page summary — always crawlable text. */
  summary: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-ink/10">
      <div className="mx-auto max-w-6xl px-5 pt-16 pb-14 md:px-8 md:pt-24 md:pb-20">
        <p className="eyebrow text-clay">{eyebrow}</p>
        <div className="mt-5 grid gap-10 md:grid-cols-[1.5fr_1fr] md:items-end">
          <h1 className="font-display text-display-lg text-ink">{title}</h1>
          <p className="max-w-md leading-relaxed text-ink/70 md:justify-self-end">
            {summary}
          </p>
        </div>
        {children}
      </div>
    </section>
  );
}
