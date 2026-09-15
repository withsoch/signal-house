// components/BlogCard.tsx
//
// Blog index cards. Deliberately uses a plain <img> rather than next/image:
// the featured image URL comes from the SEO pipeline and can point at any CDN
// host (Cloudinary, the Webflow CDN fallback, or a repo-local /blog/ path), and
// next/image hard-fails on a host that is not in next.config remotePatterns.

import Link from "next/link";
import type { BlogPost } from "@/lib/blog";
import { formatPostDate } from "@/lib/blog";

function CategoryPill({ category }: { category: string }) {
  if (!category) return null;
  return (
    <span className="inline-block w-fit max-w-full shrink-0 truncate rounded-full bg-peach px-3.5 py-1.5 text-base font-medium leading-none text-brand">
      {category}
    </span>
  );
}

export function BlogCardFeatured({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-line bg-white transition-all duration-200 hover:border-ink/20 hover:shadow-card lg:flex-row"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-mist lg:aspect-auto lg:w-[52%] lg:min-h-[30rem]">
        {post.image && (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={post.image}
            alt={post.title}
            loading="eager"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        )}
      </div>
      <div className="flex min-w-0 flex-1 flex-col justify-center gap-4 p-8 sm:p-10 lg:p-12">
        <CategoryPill category={post.category} />
        <h2 className="text-h3 transition-colors group-hover:text-brand">
          {post.title}
        </h2>
        {post.excerpt && (
          <p className="line-clamp-3 text-slate">{post.excerpt}</p>
        )}
        <span className="text-base text-muted">{formatPostDate(post.date)}</span>
      </div>
    </Link>
  );
}

export function BlogCardSmall({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full items-stretch gap-4 overflow-hidden rounded-xl border border-line bg-white p-3 transition-all duration-200 hover:border-ink/20 hover:shadow-card"
    >
      <div className="relative aspect-square w-24 shrink-0 overflow-hidden rounded-lg bg-mist sm:w-28">
        {post.image && (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={post.image}
            alt={post.title}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        )}
      </div>
      <div className="flex min-w-0 flex-1 flex-col justify-center gap-2 py-1 pr-2">
        <CategoryPill category={post.category} />
        <h3 className="line-clamp-2 text-base font-medium leading-snug text-ink transition-colors group-hover:text-brand">
          {post.title}
        </h3>
        <span className="text-sm text-muted">{formatPostDate(post.date)}</span>
      </div>
    </Link>
  );
}
