import { getAllPosts } from "@/lib/blog";
import { SITE_URL } from "@/lib/seo";
import { SERVICES, SITE, STEPS, STATS, CASE_STUDIES, FAQS } from "@/lib/content";

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

  const services = SERVICES.map((s) => `- [${s.title}](${SITE_URL}/services#${s.slug}): ${s.hook} ${s.description}`).join("\n\n");

  const steps = STEPS.map((s) => `${s.no}. **${s.title}** — ${s.description}`).join("\n");

  const stats = STATS.map((s) => `- ${s.value}: ${s.label}`).join("\n");

  const caseStudies = CASE_STUDIES.map((c) => {
    const metrics = c.metrics.map((m) => `${m.value} ${m.label}`).join(", ");
    return `- **${c.company}** (${c.industry}, ${c.duration} engagement): ${metrics}. "${c.quote}" — ${c.author}, ${c.authorRole}`;
  }).join("\n");

  const faqs = FAQS.map((f) => `**${f.q}**\n${f.a}`).join("\n\n");

  const body = `# Signal House

> Signal House is a LinkedIn growth agency for B2B founders and senior executives: narrative strategy, a content system, and the outreach engine that makes you the most credible voice in your space. Done-with-you, never templated — a real team runs your profile, content and outreach with you, in your own voice.

## Who this is for

Founders, CEOs and senior executives at B2B companies (SaaS, consulting, financial services, social enterprise) who know LinkedIn matters for pipeline and credibility, but don't have the time, writing ability, or system to run it well themselves.

## About

Signal House is led by Umair Shahzad, an award-winning LinkedIn creator recognised as a LinkedIn Top Voice and ranked in the top 200 globally in Venture Capital. Before founding Signal House he managed LinkedIn strategy for founders in institutional finance and construction — industries where a single poorly placed post can damage relationships built over years. Signal House takes a deliberately small number of clients at a time: no engagement pods, no algorithm hacks, no templates. Every account is built from the client's own voice up, and success is measured in qualified conversations and pipeline, not follower counts.

## Pages

- [About](${SITE_URL}/about)
- [Services](${SITE_URL}/services)
- [Case studies](${SITE_URL}/case-studies)
- [Blog](${SITE_URL}/blog)
- [Audit](${SITE_URL}/audit)
- [Book](${SITE_URL}/book)

## Services

${services}

## How it works (process)

${steps}

## By the numbers

${stats}

## Proof (client results)

${caseStudies}

Full case studies: ${SITE_URL}/case-studies

## Frequently asked questions

${faqs}

## Posts

${posts}

## Contact

- Email: ${SITE.email}
- LinkedIn: ${SITE.linkedin}
`;

  return new Response(body, { headers: { "content-type": "text/plain; charset=utf-8" } });
}
