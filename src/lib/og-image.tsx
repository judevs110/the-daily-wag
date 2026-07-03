import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };

/**
 * Shared build-time OG card. Each route's opengraph-image.tsx calls this
 * with its own title, so every page ships a unique static social image.
 */
export function ogCard(title: string, kicker = "Windsor · Eton · Berkshire") {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          backgroundColor: "#1d2b15",
          color: "#f5f0e3",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {/* Paw mark */}
          <svg width="52" height="52" viewBox="0 0 24 24">
            <circle cx="8" cy="6" r="3" fill="#90a955" />
            <circle cx="16" cy="6" r="3" fill="#90a955" />
            <circle cx="4.5" cy="12" r="2.6" fill="#90a955" />
            <circle cx="19.5" cy="12" r="2.6" fill="#90a955" />
            <ellipse cx="12" cy="16.5" rx="5" ry="4.5" fill="#90a955" />
          </svg>
          <div style={{ fontSize: 40, fontWeight: 700, display: "flex" }}>
            The Daily <span style={{ color: "#bc5b28", fontStyle: "italic" }}>&nbsp;Wag</span>
          </div>
        </div>

        <div
          style={{
            fontSize: title.length > 45 ? 62 : 76,
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            maxWidth: 1000,
          }}
        >
          {title}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "2px solid #4f772d",
            paddingTop: 28,
            fontSize: 28,
            color: "#ecf39e",
          }}
        >
          <div>{kicker}</div>
          <div>thedailywag.co.uk</div>
        </div>
      </div>
    ),
    OG_SIZE
  );
}
