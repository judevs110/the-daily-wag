import { ogCard, OG_SIZE } from "@/lib/og-image";

export const alt = "Mobile dog grooming in Windsor & Berkshire — The Daily Wag";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return ogCard("Mobile grooming, at your kerb");
}
