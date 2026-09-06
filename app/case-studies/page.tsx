import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { BookButton } from "@/components/BookButton";
import { AuditButton } from "@/components/AuditButton";
import { CTAS } from "@/lib/content";
import AnimateIn from "@/components/AnimateIn";
import { PortraitImg } from "@/components/PortraitImg";

export const metadata: Metadata = {
  title: "Case Studies: Client Results | Signal House",
  description:
    "Real results from Signal House client engagements across LinkedIn strategy, personal branding, and go-to-market positioning.",
};

const CARDS = [
  {
    initials: "Gaia Ferrero - Byzantine Finance",
    image: "https://cdn.prod.website-files.com/68e7ded517d0693d2c345250/6a2fb631aa9fc98e79ae2810_1714512298914.jpg",
    tags: ["LinkedIn Management"],
    title:
      "Turning a founder’s LinkedIn into a consistent pipeline of qualified conversations",
    stats: [
      { value: "100%", label: "Posting consistency maintained" },
      { value: "4×", label: "Growth in profile views within 60 days" },
      { value: "12+", label: "Qualified inbound conversations in 90 days" },
    ],
    href: "/case-studies/gaia-antonescu",
  },
  {
    initials: "Biola Babawale - Cycle Together",
    image: "https://cdn.prod.website-files.com/68e7ded517d0693d2c345250/6a2fb8c5358ef1ae4b6b238c_1674503443215.jpg",
    tags: ["Personal Branding & Community Growth"],
    title:
      "Giving a movement founder the LinkedIn presence her mission deserved",
    stats: [
      { value: "3×", label: "Follower growth in 60 days" },
      { value: "5+", label: "Partnership conversations opened" },
      { value: "100%", label: "Consistent weekly content maintained" },
    ],
    href: "/case-studies/biola-babawale",
  },
  {
    initials: "Shahzad Akhtar - Strateasy Consulting",
    image: "/Shahzad Akhtar.jpg",
    tags: ["Management Consulting"],
    title:
      "Turning 28 years of practitioner expertise into a LinkedIn presence that generates consulting pipeline",
    stats: [
      { value: "29%", label: "Outreach Reply Rate" },
      { value: "6×", label: "Profile Views in 60 Days" },
      { value: "11", label: "Qualified Conversations" },
    ],
    href: "/case-studies/shahzad-akhtar",
  },
  {
    initials: "Kaitlin Malaspina - Brenna & Co.",
    image: "/Kaitlin Malaspina.jpg",
    tags: ["Business Architecture"],
    title:
      "Making a distinctive offer legible: how a Private Operating House built the channel to match the work",
    stats: [
      { value: "3×", label: "Profile Views in 60 Days" },
      { value: "22%", label: "Outreach Reply Rate" },
      { value: "8", label: "Qualified Conversations" },
    ],
    href: "/case-studies/kaitlin-malaspina",
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="bg-white">

      {/* ── Page header ── */}
      <section className="border-b border-line bg-cream" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "60px 80px", minHeight: "500px" }}>
        <div style={{ flex: "0 0 45%", display: "flex", flexDirection: "column", justifyContent: "center", alignSelf: "center", textAlign: "left" }}>
          <Reveal>
            <h1 className="text-display">
              Results that speak for themselves.
            </h1>
            <p className="lead mt-5 max-w-2xl text-muted">
              A selection of client engagements across LinkedIn strategy,
              go-to-market positioning, and personal brand builds. Every number
              here is verified with the client.
            </p>
          </Reveal>
        </div>
        <div className="hidden md:block" style={{ flex: "0 0 48%", maxWidth: "520px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr", gap: "8px", width: "100%", height: "100%", minHeight: "380px" }}>
            {[
              { src: "https://cdn.prod.website-files.com/68e7ded517d0693d2c345250/6a2fb631aa9fc98e79ae2810_1714512298914.jpg", alt: "Gaia Ferrero" },
              { src: "https://cdn.prod.website-files.com/68e7ded517d0693d2c345250/6a2fb8c5358ef1ae4b6b238c_1674503443215.jpg", alt: "Biola Babawale" },
              { src: "/Shahzad Akhtar.jpg", alt: "Shahzad Akhtar" },
              { src: "/Kaitlin Malaspina.jpg", alt: "Kaitlin Malaspina" },
            ].map((f, i) => (
              <AnimateIn key={f.alt} delay={i * 100} direction="up">
                <div style={{ overflow: "hidden", borderRadius: "12px", minHeight: 0 }}>
                  <PortraitImg
                    src={f.src}
                    alt={f.alt}
                    style={{ width: "100%", height: "100%", minHeight: "200px", objectFit: "cover", objectPosition: "center top", display: "block" }}
                  />
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cards grid ── */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[68.75rem] px-6">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {CARDS.map((card, i) => (
              <AnimateIn key={card.href} delay={i * 150}>
              <article
                className="group w-full min-w-0 overflow-hidden rounded-xl border border-line bg-white transition-shadow duration-300 hover:shadow-[0_22px_48px_-22px_rgba(20,30,25,0.28)]"
              >
                <div className="flex flex-row">

                  {/* portrait */}
                  <div className="shrink-0 self-stretch overflow-hidden" style={{ width: "40%", minWidth: 0 }}>
                    <PortraitImg
                      src={card.image}
                      alt={card.initials}
                      style={{ width: "100%", height: "100%", objectFit: "cover", minHeight: "320px", display: "block" }}
                    />
                  </div>

                  {/* content */}
                  <div className="flex min-w-0 flex-1 flex-col justify-between overflow-hidden" style={{ padding: "20px" }}>

                    <div>
                      {/* category tags */}
                      <div className="flex flex-wrap gap-2">
                        {card.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-brand px-2.5 py-1 text-[11px] font-semibold text-white"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* title */}
                      <h2
                        className="mt-4 text-[1rem] font-semibold leading-snug text-ink"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {card.title}
                      </h2>
                    </div>

                    {/* stat boxes */}
                    <div className="mt-6 grid w-full grid-cols-3 gap-2">
                      {card.stats.map((s) => (
                        <div
                          key={s.label}
                          className="min-w-0 overflow-hidden rounded-lg border border-line p-3"
                        >
                          <p
                            className="leading-none text-ink"
                            style={{
                              fontFamily: "var(--font-display)",
                              fontSize: "1.25rem",
                              fontWeight: 700,
                              letterSpacing: "-0.022em",
                              whiteSpace: "nowrap",
                            }}
                          >
                            {s.value}
                          </p>
                          <p className="mt-1 text-[11px] leading-[1.4] text-muted">
                            {s.label}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* link */}
                    <div className="mt-6">
                      <Link
                        href={card.href}
                        className="text-[14px] font-semibold text-brand transition-colors hover:text-brand-dark"
                      >
                        Read success story →
                      </Link>
                    </div>

                  </div>
                </div>
              </article>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="border-t border-line bg-mist py-20 sm:py-24 lg:py-28">
        <div className="container-x">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-h2">
                Your results should be on this page.
              </h2>
              <p className="lead mt-5 text-muted">
                Book a discovery call. We will be straight with you about what
                is achievable and how long it will take.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <BookButton variant="primary" size="lg">
                  {CTAS.primary.label}
                </BookButton>
                <AuditButton variant="secondary" size="lg" className="cursor-pointer hover:bg-[#1a1a1a] hover:text-white hover:!ring-[#1a1a1a]">
                  {CTAS.secondary.label}
                </AuditButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
