import { ogCard, OG_SIZE } from "@/lib/og-image";

export const alt = "The Daily Wag pricing";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return ogCard("Walks from £15. No hidden extras.");
}
