// app/blog/page.tsx
//
// Blog index. getAllPosts is newest-first and the page shows posts in exactly
// that order - a `featured: true` post does NOT jump the queue, because the two
// lead cards must always be the two most recent articles.

import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/ui/Section";
import { BlogCardLarge, BlogCardSmall } from "@/components/BlogCard";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Blog",
  description: "Ideas, playbooks and field notes from the team.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const [featured, secondary] = posts;
  // Every remaining post, not just the next few - the grid wraps as the list grows.
  const gridPosts = posts.slice(2);

  return (
    <main className="flex-1">
      <PageHero
        title="Blog"
        intro="Ideas, playbooks and field notes, newest first."
      />

      <Section className="bg-white">
        {posts.length === 0 ? (
          <p className="lead">No posts yet. Check back shortly.</p>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {featured && (
                <Reveal>
                  <BlogCardLarge post={featured} />
                </Reveal>
              )}
              {secondary && (
                <Reveal delay={0.08}>
                  <BlogCardLarge post={secondary} />
                </Reveal>
              )}
            </div>

            {gridPosts.length > 0 && (
              <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {gridPosts.map((post, i) => (
                  <Reveal key={post.slug} delay={(i % 3) * 0.08}>
                    <BlogCardSmall post={post} />
                  </Reveal>
                ))}
              </div>
            )}
          </>
        )}
      </Section>

      <CtaBand />
    </main>
  );
}
