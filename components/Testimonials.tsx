"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Reveal } from "@/components/ui/Reveal";
import { CASE_STUDIES, type CaseStudy } from "@/lib/content";
import { PortraitImg } from "@/components/PortraitImg";

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const count = CASE_STUDIES.length;
  const next = () => setCurrent((c) => Math.min(c + 1, count - 1));
  const prev = () => setCurrent((c) => Math.max(c - 1, 0));

  return (
    <section className="py-20 sm:py-24 lg:py-28" style={{ backgroundColor: "#f9f9f9" }}>
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <h2 className="text-h2">Founders who stopped being invisible.</h2>
        </Reveal>

        {/* ── Carousel ── */}
        <div className="mt-12 overflow-hidden rounded-2xl bg-white shadow-[0_2px_16px_rgba(0,0,0,0.08)] ring-1 ring-black/5">
          {/* sliding track */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {CASE_STUDIES.map((cs) => (
              <Slide
                key={cs.company}
                study={cs}
                onNext={next}
                onPrev={prev}
                isFirst={current === 0}
                isLast={current === count - 1}
              />
            ))}
          </div>
        </div>

        {/* ── Dot indicators ── */}
        <div className="mt-5 flex items-center gap-2">
          {CASE_STUDIES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to case study ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current ? "w-6 bg-brand" : "w-1.5 bg-line hover:bg-slate"
              }`}
            />
          ))}
          <span className="ml-3 text-xs text-muted">
            {current + 1} / {count}
          </span>
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/case-studies"
            className="text-sm text-muted underline-offset-4 hover:underline"
          >
            View all case studies →
          </Link>
        </div>

      </div>
    </section>
  );
}

function Slide({
  study,
  onNext,
  onPrev,
  isFirst,
  isLast,
}: {
  study: CaseStudy;
  onNext: () => void;
  onPrev: () => void;
  isFirst: boolean;
  isLast: boolean;
}) {
  const router = useRouter();
  return (
    <div
      className="relative grid w-full flex-shrink-0 lg:grid-cols-[2fr_3fr]"
      style={{ minWidth: "100%", cursor: study.href ? "pointer" : "default" }}
      onClick={() => study.href && router.push(study.href)}
    >
      {/* ── Left: brand panel ── */}
      <div
        className="relative flex min-h-[14rem] flex-col items-start justify-end overflow-hidden p-8 lg:min-h-[28rem]"
        style={{ background: study.accent }}
      >
        {study.image ? (
          <PortraitImg
            src={study.image}
            alt={study.company}
            accent={study.accent}
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
          />
        ) : (
          <span
            className="absolute right-6 top-6 select-none text-[7rem] font-bold leading-none text-white/10"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {study.initials}
          </span>
        )}

        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "40%", background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)", borderRadius: "0 0 0 16px" }} />

        <div className="relative space-y-1" style={{ zIndex: 1 }}>
          <p
            className="font-bold text-white"
            style={{ fontFamily: "var(--font-display)", fontSize: "18px", fontWeight: 700, textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}
          >
            {study.company}
          </p>
          <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.85)", textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}>{study.industry}</p>
        </div>
      </div>

      {/* ── Right: content + arrow ── */}
      <div className="relative flex flex-col justify-center gap-6 p-8 pr-16 lg:p-10 lg:pr-20">

        {/* case study label + meta */}
        <div>
          <span className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-muted">
            Case Study
          </span>
          <p className="mt-2 text-[0.85rem] text-slate">
            {study.region}&nbsp;·&nbsp;{study.duration}&nbsp;·&nbsp;{study.scope}
          </p>
        </div>

        {/* metrics grid */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-5 border-t border-dashed border-line pt-6">
          {study.metrics.map((m) => (
            <div key={m.label}>
              <p
                className="text-[1.6rem] font-bold leading-none text-ink"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {m.value}
              </p>
              <p className="mt-1 text-[0.75rem] leading-snug text-slate">{m.label}</p>
            </div>
          ))}
        </div>

        {/* quote + attribution */}
        <div className="border-t border-dashed border-line pt-6">
          <blockquote className="text-[1.05rem] leading-relaxed text-ink-soft">
            &ldquo;{study.quote}&rdquo;
          </blockquote>
          <p className="mt-3 text-sm font-semibold text-ink">
            {study.author},{" "}
            <span className="font-normal text-slate">{study.authorRole}</span>
          </p>
          {study.href && (
            <Link
              href={study.href}
              onClick={(e) => e.stopPropagation()}
              className="mt-4 inline-block text-[14px] font-semibold hover:underline"
              style={{ color: "#e8633e", textDecoration: "none" }}
            >
              View case study →
            </Link>
          )}
        </div>

        {/* ── Next arrow - vertically centred on right edge ── */}
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          disabled={isLast}
          aria-label="Next case study"
          className={`absolute right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate shadow-[0_1px_6px_rgba(0,0,0,0.12)] ring-1 ring-black/8 transition lg:right-6 ${
            isLast
              ? "opacity-40 cursor-default"
              : "hover:bg-mist hover:text-ink active:scale-95"
          }`}
        >
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 20 20"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 4l6 6-6 6" />
          </svg>
        </button>
      </div>

      {/* ── Prev arrow - vertically centred on left edge ── */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        disabled={isFirst}
        aria-label="Previous case study"
        className={`absolute left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate shadow-[0_1px_6px_rgba(0,0,0,0.12)] ring-1 ring-black/8 transition lg:left-6 ${
          isFirst
            ? "opacity-40 cursor-default"
            : "hover:bg-mist hover:text-ink active:scale-95"
        }`}
      >
        <svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 20 20"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 4l-6 6 6 6" />
        </svg>
      </button>
    </div>
  );
}
