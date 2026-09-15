// components/BlogHero.tsx
//
// Split hero for an individual blog post: text left, contained image right.
// Uses a plain <img> rather than next/image for the same reason as BlogCard -
// the image URL comes from the SEO pipeline and can point at any CDN host not
// listed in next.config remotePatterns.

import type { BlogPost } from "@/lib/blog";
import { formatPostDate, getReadingTime } from "@/lib/blog";
import { Reveal } from "@/components/ui/Reveal";

export function BlogHero({ post }: { post: BlogPost }) {
  const readingTime = getReadingTime(post.body);

  return (
    <section className="border-b border-line bg-mist">
      <div className="container-x grid grid-cols-1 items-center gap-10 py-10 sm:py-12 lg:grid-cols-2 lg:gap-14 lg:py-14">
        <Reveal>
          <div className="flex max-w-2xl flex-col gap-4">
            {post.category && <span className="eyebrow w-fit">{post.category}</span>}
            <h1 className="text-h2">{post.title}</h1>
            <div className="flex items-center gap-2 text-sm text-slate">
              <span>{formatPostDate(post.date)}</span>
              <span aria-hidden="true">&middot;</span>
              <span>{readingTime} min read</span>
            </div>
          </div>
        </Reveal>

        {post.image && (
          <Reveal delay={0.1}>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-line shadow-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.image}
                alt={post.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
