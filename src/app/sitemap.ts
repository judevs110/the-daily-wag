import type { MetadataRoute } from "next";
import { AREAS } from "@/lib/areas";
import { POSTS } from "@/lib/blog";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { path: "", priority: 1.0 },
    { path: "/dog-walking", priority: 0.9 },
    { path: "/dog-grooming", priority: 0.9 },
    { path: "/puppy-visits", priority: 0.9 },
    { path: "/areas", priority: 0.8 },
    { path: "/pricing", priority: 0.8 },
    { path: "/about", priority: 0.6 },
    { path: "/faq", priority: 0.7 },
    { path: "/contact", priority: 0.8 },
    { path: "/blog", priority: 0.6 },
  ].map(({ path, priority }) => ({
    url: `${SITE.url}${path}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority,
  }));

  const areaRoutes: MetadataRoute.Sitemap = AREAS.map((area) => ({
    url: `${SITE.url}/areas/${area.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const postRoutes: MetadataRoute.Sitemap = POSTS.map((post) => ({
    url: `${SITE.url}/blog/${post.slug}`,
    lastModified: new Date(post.datePublished),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...areaRoutes, ...postRoutes];
}
