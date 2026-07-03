import { ogCard, OG_SIZE } from "@/lib/og-image";
import { POSTS, getPost } from "@/lib/blog";

export const alt = "Field notes — The Daily Wag";
export const size = OG_SIZE;
export const contentType = "image/png";

export function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  return ogCard(post?.title ?? "Field notes", "Field notes · thedailywag.co.uk");
}
