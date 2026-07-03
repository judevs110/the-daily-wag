import { ogCard, OG_SIZE } from "@/lib/og-image";

export const alt = "The Daily Wag service areas across East Berkshire";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return ogCard("Windsor · Eton · Ascot · Maidenhead · Slough");
}
