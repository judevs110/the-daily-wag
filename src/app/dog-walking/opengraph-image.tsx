import { ogCard, OG_SIZE } from "@/lib/og-image";

export const alt = "Dog walking in Windsor & Eton — The Daily Wag";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return ogCard("Dog walking, from £15 an hour");
}
