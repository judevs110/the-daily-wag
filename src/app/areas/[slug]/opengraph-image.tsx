import { ogCard, OG_SIZE } from "@/lib/og-image";
import { AREAS, getArea } from "@/lib/areas";

export const alt = "Dog walking with The Daily Wag";
export const size = OG_SIZE;
export const contentType = "image/png";

export function generateStaticParams() {
  return AREAS.map((area) => ({ slug: area.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const area = getArea(slug);
  return ogCard(
    `Dog walking in ${area?.town ?? "Berkshire"}`,
    `${area?.walks[0].name ?? "Windsor"} · from £15/hour`
  );
}
