const DEFAULT_ITEMS = [
  "Windsor",
  "Eton",
  "Ascot",
  "Maidenhead",
  "Slough",
  "Eton Wick",
  "Old Windsor",
  "Sunninghill",
  "Cookham",
  "Bray",
  "Langley",
];

/**
 * CSS-only town marquee. Content duplicated once for the seamless loop;
 * the duplicate is aria-hidden so screen readers hear each town once.
 */
export default function Marquee({ items = DEFAULT_ITEMS }: { items?: string[] }) {
  const row = (hidden: boolean) => (
    <ul
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center"
    >
      {items.map((item) => (
        <li key={item} className="flex items-center">
          <span className="font-display text-display-sm whitespace-nowrap px-6 italic text-cream/90">
            {item}
          </span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="shrink-0 text-moss"
          >
            <circle cx="8" cy="6" r="3" fill="currentColor" />
            <circle cx="16" cy="6" r="3" fill="currentColor" />
            <circle cx="4.5" cy="12" r="2.6" fill="currentColor" />
            <circle cx="19.5" cy="12" r="2.6" fill="currentColor" />
            <ellipse cx="12" cy="16.5" rx="5" ry="4.5" fill="currentColor" />
          </svg>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="overflow-hidden bg-pine py-5" role="marquee" aria-label="Areas we cover">
      <div className="marquee-track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
