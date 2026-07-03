import { ogCard, OG_SIZE } from "@/lib/og-image";

export const alt = "Contact The Daily Wag";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return ogCard("Say hello. Bring the dog.");
}
