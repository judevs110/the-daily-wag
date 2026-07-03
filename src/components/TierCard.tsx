import Link from "next/link";
import type { ServiceTier } from "@/lib/services";
import { PRICE_CAVEAT } from "@/lib/site";

export default function TierCard({ tier }: { tier: ServiceTier }) {
  return (
    <article className="flex h-full flex-col border-t-2 border-ink pt-6">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-display text-display-sm text-ink">{tier.name}</h3>
        <p className="text-right">
          <span className="font-display text-3xl font-semibold text-clay">
            £{tier.price}
          </span>
          {!tier.confirmed && <span aria-hidden="true" className="text-clay">*</span>}
          <span className="block text-xs text-ink/70">{tier.unit}</span>
        </p>
      </div>
      <ul className="mt-6 flex-1 space-y-3">
        {tier.includes.map((line) => (
          <li key={line} className="flex gap-3 text-[0.95rem] leading-relaxed text-ink/75">
            <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-moss" />
            {line}
          </li>
        ))}
      </ul>
      {!tier.confirmed && (
        <p className="mt-5 text-xs text-ink/70">* {PRICE_CAVEAT}</p>
      )}
      <Link href="/contact" className="link-underline mt-6 self-start font-semibold text-clay">
        Book {tier.name.toLowerCase()} →
      </Link>
    </article>
  );
}
