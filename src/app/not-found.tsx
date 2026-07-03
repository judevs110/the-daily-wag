import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-start px-5 py-28 md:px-8 md:py-40">
      <p className="eyebrow text-clay">404 — page not found</p>
      <h1 className="font-display text-display-lg mt-5 max-w-2xl text-ink">
        This trail goes{" "}
        <span className="font-display-wonk italic text-leaf">cold</span>.
      </h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70">
        Even our best noses can&apos;t find that page. It may have moved, or the
        link had a typo in it. The scent leads back to one of these:
      </p>
      <div className="mt-9 flex flex-wrap gap-4">
        <Link href="/" className="btn-primary">Back to the start</Link>
        <Link href="/dog-walking" className="btn-secondary">Dog walking</Link>
        <Link href="/contact" className="btn-secondary">Contact us</Link>
      </div>
    </section>
  );
}
