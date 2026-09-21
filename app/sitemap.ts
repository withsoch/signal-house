import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

import { SITE_URL } from "@/lib/seo";

/**
 * Every page and post, for search engines and AI crawlers. Built from the same
 * content the pages render from, so a new post is in the sitemap the moment
 * it is committed.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "", "/about", "/services", "/case-studies", "/case-studies/biola-babawale", "/case-studies/gaia-antonescu", "/case-studies/kaitlin-malaspina", "/case-studies/shahzad-akhtar", "/blog", "/audit", "/book",
    
  ].map((route) => ({ url: `${SITE_URL}${route}` }));

  const posts = getAllPosts().map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    ...(p.date ? { lastModified: p.date } : {}),
  }));

  return [...pages, ...posts];
}
