import Link from "next/link";
import Reveal from "./Reveal";

/**
 * Recurring end-of-page invitation. Deliberately not a centred banner —
 * editorial split layout with the promise on the left, action on the right.
 */
export default function CtaBand({
  title = "Ready when your dog is.",
  body = "Every new client starts with a free, no-obligation meet & greet at your home. We come to you, your dog sizes us up, and you decide in your own time.",
  cta = "Arrange a free meet & greet",
}: {
  title?: string;
  body?: string;
  cta?: string;
}) {
  return (
    <section className="bg-parchment">
      <div className="mx-auto grid max-w-6xl items-end gap-10 px-5 py-20 md:grid-cols-[1.4fr_1fr] md:px-8 md:py-28">
        <Reveal>
          <h2 className="font-display text-display-lg text-ink">{title}</h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70">{body}</p>
        </Reveal>
        <Reveal delay={0.15} className="md:justify-self-end">
          <Link href="/contact" className="btn-primary text-lg">
            {cta}
            <span aria-hidden="true">→</span>
          </Link>
          <p className="mt-4 text-sm text-ink/70">
            Or call <a href="tel:+441753123456" className="font-semibold underline">01753 123456</a>
            {" "}— Mon–Sat, 7am–6pm
          </p>
        </Reveal>
      </div>
    </section>
  );
}
