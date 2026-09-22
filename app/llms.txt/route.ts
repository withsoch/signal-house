import { getAllPosts } from "@/lib/blog";
import { SITE_URL } from "@/lib/seo";
import { SERVICES, SITE } from "@/lib/content";

// Rebuilt at build time, which is every deploy — so every new post.
export const dynamic = "force-static";

/**
 * llms.txt: a plain-text map of the site for language models (llmstxt.org).
 * What the site is, the pages that explain it, and every post with its summary.
 */
export function GET() {
  const posts = getAllPosts()
    .map((p) => `- [${p.title}](${SITE_URL}/blog/${p.slug})${p.excerpt ? `: ${p.excerpt}` : ""}`)
    .join("\n");

  const services = SERVICES.map((s) => `- [${s.title}](${SITE_URL}/services#${s.slug}): ${s.hook}`).join("\n");

  const body = `# Signal House

> Signal House is a LinkedIn positioning agency for founders and senior executives: narrative strategy, a content system, and the outreach engine that makes you the most credible voice in your space.

## Pages

- [About](${SITE_URL}/about)
- [Services](${SITE_URL}/services)
- [Case studies](${SITE_URL}/case-studies)
- [Blog](${SITE_URL}/blog)
- [Audit](${SITE_URL}/audit)
- [Book](${SITE_URL}/book)

## Services

${services}

## Posts

${posts}

## Contact

- Email: ${SITE.email}
- LinkedIn: ${SITE.linkedin}
`;

  return new Response(body, { headers: { "content-type": "text/plain; charset=utf-8" } });
}
