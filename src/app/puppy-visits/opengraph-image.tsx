import { ogCard, OG_SIZE } from "@/lib/og-image";

export const alt = "Puppy visits & pet sitting in Windsor — The Daily Wag";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return ogCard("Puppy visits, from £10");
}
