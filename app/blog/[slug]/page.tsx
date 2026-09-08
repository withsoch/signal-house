// app/blog/[slug]/page.tsx

import type { Metadata } from "next";
import type { ReactNode } from "react";
import { isValidElement } from "react";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  getAllPosts,
  getPostBySlug,
  formatPostDate,
  getHeadings,
  slugifyHeading,
} from "@/lib/blog";
import { PageHero } from "@/components/PageHero";
import { ArticleToc } from "@/components/ArticleToc";
import { Section } from "@/components/ui/Section";
import { CtaBand } from "@/components/CtaBand";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      images: post.image ? [post.image] : undefined,
    },
  };
}

/** Flatten a heading's rendered children back to plain text, so its anchor id
 *  matches the one getHeadings derived from the same markdown. */
function nodeText(node: ReactNode): string {
  if (node === null || node === undefined || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(nodeText).join("");
  if (isValidElement(node)) {
    return nodeText((node.props as { children?: ReactNode }).children);
  }
  return "";
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const headings = getHeadings(post.body);
  const hasToc = headings.length > 1;
  const meta = [post.category, formatPostDate(post.date)].filter(Boolean).join("  ·  ");

  return (
    <main className="flex-1">
      <PageHero title={post.title} intro={meta} />

      {post.image && (
        <Section pad="tight" className="bg-white">
          <div className="relative mx-auto aspect-[16/9] w-full max-w-4xl overflow-hidden rounded-xl border border-line bg-mist">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.image}
              alt={post.title}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </Section>
      )}

      <Section className="bg-white">
        <div
          className={
            hasToc
              ? "grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] lg:gap-14"
              : ""
          }
        >
          {hasToc && <ArticleToc headings={headings} />}

          <article className={`prose-blog max-w-3xl ${hasToc ? "" : "mx-auto"}`}>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                // Anchor targets for the TOC. All three levels get ids because
                // getHeadings falls back to h3/h4 on posts that have no h2.
                // scroll-mt clears the sticky header. Markdown headings carry
                // no attributes, so nothing else from props needs forwarding
                // (and `node` must not reach the DOM).
                h2: ({ children }) => (
                  <h2 id={slugifyHeading(nodeText(children))} className="scroll-mt-28">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 id={slugifyHeading(nodeText(children))} className="scroll-mt-28">
                    {children}
                  </h3>
                ),
                h4: ({ children }) => (
                  <h4 id={slugifyHeading(nodeText(children))} className="scroll-mt-28">
                    {children}
                  </h4>
                ),
              }}
            >
              {post.body}
            </ReactMarkdown>
          </article>
        </div>
      </Section>

      <CtaBand />
    </main>
  );
}
