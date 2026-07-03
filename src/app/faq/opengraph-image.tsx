import { ogCard, OG_SIZE } from "@/lib/og-image";

export const alt = "The Daily Wag FAQ";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return ogCard("Asked often, answered straight");
}
