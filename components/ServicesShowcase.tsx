"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/Icons";
import { ServiceVisual } from "@/components/ServiceVisual";
import { SERVICES } from "@/lib/content";

// Short rail labels (the full titles are too long for the index).
const LABELS: Record<string, string> = {
  "profile-optimisation": "Profile",
  "content-writing": "Content",
  "company-page": "Company page",
  "lead-generation": "Lead gen",
  "personal-branding": "Branding",
  "coaching-workshops": "Coaching",
  "growth-audit": "Audit",
};

export function ServicesShowcase() {
  const [active, setActive] = useState(SERVICES[0].slug);
  const refs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      // A thin band near the upper-middle of the viewport: whichever service
      // crosses it becomes "active".
      { rootMargin: "-45% 0px -50% 0px" },
    );
    Object.values(refs.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      {/* mobile quick-jump chip strip */}
      <div className="sticky top-16 z-20 border-b border-line bg-white/85 backdrop-blur lg:hidden">
        <div className="container-x overflow-x-auto py-3">
          <div className="flex w-max gap-2">
            {SERVICES.map((s) => (
              <a
                key={s.slug}
                href={`#${s.slug}`}
                className={`whitespace-nowrap rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors ${
                  active === s.slug
                    ? "border-brand bg-peach/50 text-brand-dark"
                    : "border-line text-ink-soft"
                }`}
              >
                {LABELS[s.slug]}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container-x mt-6 grid gap-x-12 lg:mt-0 lg:grid-cols-[14rem_1fr] xl:gap-x-16">
        {/* sticky index rail (lg+) */}
        <aside className="hidden lg:block">
          <div className="sticky top-28 self-start">
            <nav className="mt-6 space-y-0.5">
              {SERVICES.map((s) => {
                const isActive = active === s.slug;
                return (
                  <a
                    key={s.slug}
                    href={`#${s.slug}`}
                    aria-current={isActive ? "true" : undefined}
                    className={`group flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors ${
                      isActive ? "bg-mist" : "hover:bg-mist/60"
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full bg-brand transition-opacity ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                    />
                    <span
                      className={`text-sm font-medium transition-colors ${
                        isActive ? "text-ink" : "text-muted group-hover:text-ink-soft"
                      }`}
                    >
                      {LABELS[s.slug]}
                    </span>
                  </a>
                );
              })}
            </nav>

          </div>
        </aside>

        {/* editorial service rows */}
        <div className="divide-y divide-line">
          {SERVICES.map((s, i) => {
            const flipped = i % 2 === 1;
            return (
              <Reveal key={s.slug} className="py-14 first:pt-0 lg:py-20">
                <article
                  id={s.slug}
                  ref={(el) => {
                    refs.current[s.slug] = el;
                  }}
                  className="scroll-mt-28"
                >
                  <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
                    {/* copy */}
                    <div className={flipped ? "lg:order-2" : ""}>
                      <h2 className="text-h3 text-ink">{s.title}</h2>
                      <p className="mt-2 font-semibold text-brand-dark">{s.hook}</p>
                      <p className="mt-3 text-[0.975rem] leading-relaxed text-slate">
                        {s.description}
                      </p>

                      <ul className="mt-5 space-y-2.5">
                        {s.points.map((p) => (
                          <li
                            key={p}
                            className="flex items-start gap-3 text-[0.95rem] text-ink-soft"
                          >
                            <Icon
                              name="check"
                              className="mt-0.5 h-4 w-4 shrink-0 text-brand"
                              strokeWidth={2.4}
                            />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* visual */}
                    <div className={flipped ? "lg:order-1" : ""}>
                      <ServiceVisual slug={s.slug} />
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
