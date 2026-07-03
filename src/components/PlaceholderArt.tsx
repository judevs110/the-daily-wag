/**
 * Tasteful illustrated placeholders for real photography.
 *
 * Each variant is a hand-drawn duotone scene in the brand palette so the
 * site looks intentional before the shoot happens. The `shot` prop is the
 * brief for the real photo that should replace it — it renders as a small
 * caption chip and doubles as the alt text. The full shot list lives in
 * README.md ("Photography to shoot").
 *
 * When real photos arrive: swap <PlaceholderArt> for <Image> from
 * next/image with the same wrapper element (aspect ratio is set by the
 * parent, so there will be no layout shift).
 */

type Variant = "meadow" | "path" | "river" | "forest" | "portrait" | "groom";

const PALETTE = {
  cream: "#f5f0e3",
  parchment: "#ece4d0",
  ink: "#1d2b15",
  pine: "#31511e",
  leaf: "#4f772d",
  moss: "#90a955",
  butter: "#ecf39e",
  clay: "#bc5b28",
};

function Scene({ variant }: { variant: Variant }) {
  const p = PALETTE;
  switch (variant) {
    case "meadow":
      return (
        <>
          <rect width="800" height="600" fill={p.moss} />
          <circle cx="620" cy="130" r="85" fill={p.butter} />
          <ellipse cx="180" cy="620" rx="560" ry="270" fill={p.leaf} />
          <ellipse cx="720" cy="700" rx="520" ry="290" fill={p.pine} />
          <path
            d="M60 320 Q 200 250 340 320 T 620 320"
            stroke={p.cream}
            strokeWidth="7"
            fill="none"
            strokeLinecap="round"
            opacity="0.75"
          />
          <PawTrail x={120} y={430} tint={p.butter} />
        </>
      );
    case "path":
      return (
        <>
          <rect width="800" height="600" fill={p.leaf} />
          <ellipse cx="400" cy="-80" rx="620" ry="240" fill={p.pine} />
          <path
            d="M330 600 C 240 430 520 380 430 240 C 390 175 430 110 500 60"
            stroke={p.cream}
            strokeWidth="58"
            fill="none"
            strokeLinecap="round"
            opacity="0.9"
          />
          <circle cx="640" cy="120" r="58" fill={p.butter} />
          <PawTrail x={355} y={470} tint={p.pine} />
        </>
      );
    case "river":
      return (
        <>
          <rect width="800" height="600" fill={p.parchment} />
          <rect y="330" width="800" height="270" fill={p.moss} />
          <path
            d="M0 380 Q 100 360 200 380 T 400 380 T 600 380 T 800 380"
            stroke={p.cream}
            strokeWidth="9"
            fill="none"
            opacity="0.8"
          />
          <path
            d="M0 470 Q 100 450 200 470 T 400 470 T 600 470 T 800 470"
            stroke={p.pine}
            strokeWidth="9"
            fill="none"
            opacity="0.5"
          />
          <ellipse cx="180" cy="330" rx="230" ry="90" fill={p.leaf} />
          <ellipse cx="640" cy="335" rx="260" ry="105" fill={p.pine} />
          <circle cx="420" cy="130" r="70" fill={p.clay} opacity="0.9" />
        </>
      );
    case "forest":
      return (
        <>
          <rect width="800" height="600" fill={p.pine} />
          {[80, 240, 420, 590, 720].map((x, i) => (
            <path
              key={x}
              d={`M${x} ${560 - (i % 2) * 60} L${x + 70} ${210 + (i % 3) * 40} L${x + 140} ${560 - (i % 2) * 60} Z`}
              fill={i % 2 ? p.leaf : p.moss}
              opacity={0.85}
            />
          ))}
          <circle cx="120" cy="110" r="52" fill={p.butter} />
          <PawTrail x={330} y={470} tint={p.butter} />
        </>
      );
    case "portrait":
      return (
        <>
          <rect width="800" height="600" fill={p.parchment} />
          <path d="M400 90 A 220 220 0 0 1 620 310 V 600 H 180 V 310 A 220 220 0 0 1 400 90 Z" fill={p.leaf} />
          <circle cx="400" cy="300" r="95" fill={p.cream} opacity="0.9" />
          <Paw x={400} y={300} size={2.6} tint={p.pine} />
          <circle cx="170" cy="140" r="34" fill={p.clay} />
        </>
      );
    case "groom":
      return (
        <>
          <rect width="800" height="600" fill={p.pine} />
          <ellipse cx="400" cy="680" rx="520" ry="240" fill={p.leaf} />
          {[
            [150, 180, 46],
            [260, 90, 26],
            [560, 140, 58],
            [660, 260, 30],
            [370, 120, 18],
            [480, 240, 22],
          ].map(([cx, cy, r]) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={r} fill={p.cream} opacity="0.55" />
          ))}
          <circle cx="400" cy="400" r="120" fill={p.butter} />
          <Paw x={400} y={400} size={3.1} tint={p.pine} />
        </>
      );
  }
}

function Paw({ x, y, size, tint }: { x: number; y: number; size: number; tint: string }) {
  const s = size;
  return (
    <g fill={tint}>
      <circle cx={x - 13 * s} cy={y - 12 * s} r={5.5 * s} />
      <circle cx={x + 13 * s} cy={y - 12 * s} r={5.5 * s} />
      <circle cx={x - 20 * s} cy={y + 1 * s} r={4.6 * s} />
      <circle cx={x + 20 * s} cy={y + 1 * s} r={4.6 * s} />
      <ellipse cx={x} cy={y + 9 * s} rx={11 * s} ry={9.5 * s} />
    </g>
  );
}

function PawTrail({ x, y, tint }: { x: number; y: number; tint: string }) {
  return (
    <g opacity="0.7">
      <Paw x={x} y={y} size={0.9} tint={tint} />
      <Paw x={x + 75} y={y + 45} size={0.9} tint={tint} />
      <Paw x={x + 150} y={y + 20} size={0.9} tint={tint} />
    </g>
  );
}

export default function PlaceholderArt({
  variant,
  shot,
  className = "",
  showNote = true,
}: {
  variant: Variant;
  /** Brief for the real photo to shoot — also used as accessible label. */
  shot: string;
  className?: string;
  showNote?: boolean;
}) {
  return (
    <div className={`relative h-full w-full ${className}`}>
      <svg
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
        role="img"
        aria-label={`Illustration standing in for a photo: ${shot}`}
      >
        <Scene variant={variant} />
      </svg>
      {showNote && (
        <p className="absolute bottom-3 left-3 max-w-[85%] rounded-full bg-ink/70 px-3 py-1 text-[0.6rem] font-medium tracking-wide text-cream/90 backdrop-blur-sm">
          Photo to shoot: {shot}
        </p>
      )}
    </div>
  );
}
