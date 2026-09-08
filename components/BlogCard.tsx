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
    <span className="inline-block w-fit shrink-0 whitespace-nowrap rounded-full bg-peach px-3 py-1 text-xs font-semibold leading-none text-brand-deep">
      {category}
    </span>
  );
}

function CardImage({ post, sizes }: { post: BlogPost; sizes: string }) {
  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden bg-mist">
      {post.image && (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={post.image}
          alt={post.title}
          sizes={sizes}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
      )}
    </div>
  );
}

export function BlogCardLarge({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col gap-5 overflow-hidden rounded-xl border border-line bg-white transition-colors hover:border-ink/25"
    >
      <CardImage post={post} sizes="(min-width: 1024px) 50vw, 100vw" />
      <div className="flex flex-col gap-3 px-6 pb-6">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
          <CategoryPill category={post.category} />
          <span className="text-sm text-muted">{formatPostDate(post.date)}</span>
        </div>
        <h2 className="text-h3">{post.title}</h2>
        {post.excerpt && <p className="line-clamp-3 text-slate">{post.excerpt}</p>}
      </div>
    </Link>
  );
}

export function BlogCardSmall({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col gap-4 overflow-hidden rounded-xl border border-line bg-white transition-colors hover:border-ink/25"
    >
      <CardImage post={post} sizes="(min-width: 1024px) 33vw, 100vw" />
      <div className="flex flex-col gap-3 px-5 pb-5">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
          <CategoryPill category={post.category} />
          <span className="text-sm text-muted">{formatPostDate(post.date)}</span>
        </div>
        <h3 className="text-h3">{post.title}</h3>
      </div>
    </Link>
  );
}
