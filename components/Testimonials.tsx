"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/ui/Reveal";
import { StatCounter } from "@/components/StatCounter";
import { Icon } from "@/components/Icons";
import { PortraitImg } from "@/components/PortraitImg";
import { CASE_STUDIES, type CaseStudy } from "@/lib/content";

/**
 * "29%" -> count up to 29 with a "%" suffix on desktop, where all four cards
 * are on screen together. Below lg the cards side-scroll, and a counter
 * waiting off-screen would read "0×" in the peek, so the number is static.
 * Values that aren't a plain integer ("2,340+", "1.5 hrs") render as-is.
 */
function Metric({ value, className }: { value: string; className: string }) {
  const style = { fontFamily: "var(--font-display)", fontWeight: 500 };
  const m = /^(\d+)(\D*)$/.exec(value);
  if (!m) return <span className={`block ${className}`} style={style}>{value}</span>;
  return (
    <>
      <span className={`block lg:hidden ${className}`} style={style}>
        {m[1]}
        <span className="text-brand">{m[2]}</span>
      </span>
      <StatCounter num={Number(m[1])} suffix={m[2]} className={`hidden lg:block ${className}`} style={style} />
    </>
  );
}

const MotionLink = motion.create(Link);

// Scroll position that snaps `card` into place, keeping the side gutter.
const cardScrollLeft = (track: HTMLElement, card: HTMLElement) =>
  card.offsetLeft - parseFloat(getComputedStyle(track).paddingLeft);

// Desktop shows a window of four cards; the arrows and thumbnails move it.
const VISIBLE = 4;
const N = CASE_STUDIES.length;
const DESKTOP = "(min-width: 1024px)";

function useIsDesktop() {
  return useSyncExternalStore(
    (onChange) => {
      const mq = window.matchMedia(DESKTOP);
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    },
    () => window.matchMedia(DESKTOP).matches,
    () => false,
  );
}

// How long the pointer has to rest on a card before it takes over, so
// sweeping across the row (say, from the arrows down to the thumbnails)
// doesn't flick through every card on the way.
const HOVER_INTENT_MS = 180;

// On desktop one card is "active": it's the wide one with the quote showing.
// Resting the pointer on a card, or focusing it, makes it the active one.
// When the window moves, the card leaving unmounts, the ones that stay
// glide over (layout animation) and the new card slides in from the side
// it's coming from (`enterFrom`: 1 = right, -1 = left, null = no entrance).
// No AnimatePresence exit here: with a looping window its exits stalled and
// left invisible cards in the row.
function ResultCard({
  cs,
  active,
  onActivate,
  enterFrom,
  className = "",
}: {
  cs: CaseStudy;
  active: boolean;
  onActivate: () => void;
  enterFrom: number | null;
  className?: string;
}) {
  const metric = cs.metrics[0];
  const hoverTimer = useRef<ReturnType<typeof setTimeout>>(undefined);
  useEffect(() => () => clearTimeout(hoverTimer.current), []);
  return (
    <MotionLink
      href={cs.href ?? "/case-studies"}
      layout="position"
      initial={enterFrom === null ? false : { opacity: 0, x: 48 * enterFrom }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 32 }}
      onMouseEnter={() => {
        hoverTimer.current = setTimeout(onActivate, HOVER_INTENT_MS);
      }}
      onMouseLeave={() => clearTimeout(hoverTimer.current)}
      onFocus={onActivate}
      className={`${className} group relative isolate flex aspect-[3/4] w-[80%] shrink-0 snap-start flex-col overflow-hidden rounded-3xl text-white ring-1 ring-white/10 transition-[flex-grow,box-shadow] duration-500 ease-out hover:shadow-[0_30px_60px_-30px_var(--color-brand)] sm:w-[46%] lg:aspect-auto lg:w-auto ${active ? "lg:flex-[1.9] lg:shadow-[0_30px_60px_-30px_var(--color-brand)]" : "lg:flex-1"}`}
    >
      <div className="absolute inset-0 -z-10 overflow-hidden" style={{ background: cs.accent }}>
        <PortraitImg
          src={cs.image}
          alt={`${cs.author}, ${cs.authorRole}`}
          accent={cs.accent}
          className={`h-full w-full object-cover object-[50%_20%] transition-transform duration-700 ease-out group-hover:scale-105 ${active ? "lg:scale-105" : ""}`}
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0b1f1a] via-[#0b1f1a]/55 to-transparent" />

      <div className="flex items-start justify-between gap-2 p-4 sm:p-5">
        <span className="line-clamp-2 rounded-full bg-white/15 px-2.5 py-1 text-[0.66rem] font-semibold uppercase tracking-[0.08em] text-white ring-1 ring-white/20 backdrop-blur-md">
          {cs.scope}
        </span>
        <span className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-ink transition-colors duration-300 group-hover:bg-brand group-hover:text-white ${active ? "lg:bg-brand lg:text-white" : ""}`}>
          <Icon name="arrow" className={`h-4 w-4 -rotate-45 transition-transform duration-300 group-hover:rotate-0 ${active ? "lg:rotate-0" : ""}`} />
        </span>
      </div>

      <div className="mt-auto p-5 sm:p-6">
        <Metric
          value={metric.value}
          className="text-[3.4rem] leading-none tracking-tight text-white tabular-nums sm:text-[4rem]"
        />
        <p className="mt-2 max-w-[16rem] text-[0.9rem] leading-snug text-white/85">{metric.label}</p>

        {/* the quote: visible on touch sizes, revealed on the active (wide) card on desktop */}
        <div className={`grid transition-all duration-500 ${active ? "lg:grid-rows-[1fr] lg:opacity-100" : "lg:grid-rows-[0fr] lg:opacity-0"}`}>
          <blockquote className="overflow-hidden">
            <p className="line-clamp-4 pt-4 text-[0.88rem] leading-relaxed text-white/90 lg:min-w-[20rem]">
              {cs.quote ? <>&ldquo;{cs.quote}&rdquo;</> : cs.headline}
            </p>
          </blockquote>
        </div>

        <div className="mt-4 border-t border-white/20 pt-3.5">
          <p className="text-[0.9rem] font-semibold text-white">{cs.author}</p>
          <p className="truncate text-[0.75rem] text-white/70">{cs.authorRole}</p>
        </div>
      </div>
    </MotionLink>
  );
}

function Arrow({ dir, onClick }: { dir: "prev" | "next"; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={dir === "prev" ? "Previous case study" : "Next case study"}
      className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 transition-[background-color,color,transform] duration-200 hover:bg-white hover:text-ink active:scale-95"
    >
      <Icon name="arrow" className={`h-4 w-4 ${dir === "prev" ? "rotate-180" : ""}`} />
    </button>
  );
}

/**
 * Real client engagements, face first: each card leads with the client's
 * photo and their headline number, and links to the full case study.
 */
export function Testimonials() {
  const isDesktop = useIsDesktop();
  const reduceMotion = useReducedMotion();
  // The highlighted case study: the wide card on desktop, the card the
  // side-scroller is snapped to below lg. `start` is the first of the four
  // cards in view on desktop; the window only moves when `active` would
  // leave it.
  const [active, setActive] = useState(0);
  const [start, setStart] = useState(0);
  // Direction of the last window move; null until the first one, so cards
  // rendered on load don't slide in.
  const [dir, setDir] = useState<number | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);
  const firstRender = useRef(true);

  const inWindow = (n: number) => (n - start + N) % N < VISIBLE;
  const shown = isDesktop
    ? Array.from({ length: VISIBLE }, (_, k) => (start + k) % N)
    : CASE_STUDIES.map((_, n) => n);

  // Below lg the cards side-scroll: follow the scroller so the thumbnails
  // highlight whichever card is in front. Moving `start` along too means a
  // resize to desktop opens on the same card.
  useEffect(() => {
    const track = trackRef.current;
    if (isDesktop || !track) return;
    const onScroll = () => {
      const cards = Array.from(track.children) as HTMLElement[];
      const at = (c: HTMLElement) => Math.abs(cardScrollLeft(track, c) - track.scrollLeft);
      let best = 0;
      cards.forEach((c, n) => {
        if (at(c) < at(cards[best])) best = n;
      });
      // At the far end the last card can't reach the left edge.
      if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 4) best = N - 1;
      setActive(best);
      setStart(best);
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, [isDesktop]);

  // Below lg the thumbnail strip scrolls: keep the active one leading,
  // without moving the page. On desktop all seven fit in one row.
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    const strip = stripRef.current;
    const el = strip?.children[active] as HTMLElement | undefined;
    if (strip && el) strip.scrollTo({ left: el.offsetLeft - 4, behavior: reduceMotion ? "auto" : "smooth" });
  }, [active, reduceMotion]);

  function scrollToCard(n: number) {
    const track = trackRef.current;
    const card = track?.children[n] as HTMLElement | undefined;
    if (track && card) track.scrollTo({ left: cardScrollLeft(track, card), behavior: reduceMotion ? "auto" : "smooth" });
  }

  // Make `n` the active card. On desktop, if it's outside the four in view,
  // slide the window the short way round so it lands at the near edge.
  function show(n: number) {
    if (!isDesktop) return scrollToCard(n);
    setActive(n);
    if (inWindow(n)) return;
    const ahead = (n - start + N) % N - VISIBLE + 1;
    const behind = (start - n + N) % N;
    if (ahead <= behind) {
      setDir(1);
      setStart((start + ahead) % N);
    } else {
      setDir(-1);
      setStart(n);
    }
  }

  const step = (d: number) => show((active + d + N) % N);

  return (
    <section id="results" className="relative scroll-mt-20 overflow-hidden bg-forest py-20 sm:py-24 lg:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="animate-aurora-a absolute -right-[10%] -top-[25%] h-[32rem] w-[32rem] rounded-full bg-brand/30 blur-[110px]" />
        <div className="animate-aurora-c absolute -bottom-[30%] -left-[10%] h-[28rem] w-[28rem] rounded-full bg-linkedin/25 blur-[110px]" />
        <div className="bg-dots absolute inset-0 [--dot:rgba(255,255,255,0.06)]" />
      </div>

      <div className="container-x relative">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <Reveal className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-1.5 text-[0.8rem] font-semibold text-white ring-1 ring-white/15">
              <span className="h-2 w-2 rotate-45 rounded-[2px] bg-brand" />
              Client results
            </span>
            <h2 className="text-h2 mt-5 !text-white">Founders who stopped being invisible.</h2>
            <p className="lead mt-5 !text-white/75">
              Real engagements, real numbers. Pick a founder to hear it in
              their words, or open the full case study.
            </p>
          </Reveal>
          <div className="flex shrink-0 items-center gap-5">
            <Link
              href="/case-studies"
              className="group inline-flex items-center gap-2 rounded-lg px-1 py-2 text-sm font-semibold text-white transition-colors hover:text-brand"
            >
              All case studies
              <Icon name="arrow" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
            <div className="flex items-center gap-2">
              <Arrow dir="prev" onClick={() => step(-1)} />
              <Arrow dir="next" onClick={() => step(1)} />
            </div>
          </div>
        </div>

        <Reveal delay={0.1}>
          <div ref={trackRef} className="relative -mx-6 mt-12 flex snap-x snap-mandatory scroll-px-6 gap-4 overflow-x-auto px-6 pb-2 [scrollbar-width:none] lg:mx-0 lg:h-[34rem] lg:overflow-visible lg:px-0 lg:pb-0 [&::-webkit-scrollbar]:hidden">
            {shown.map((n) => (
              <ResultCard
                key={CASE_STUDIES[n].company}
                cs={CASE_STUDIES[n]}
                active={isDesktop && n === active}
                onActivate={() => isDesktop && setActive(n)}
                enterFrom={dir}
                // Before hydration we don't know the breakpoint: all cards
                // render, so hide the extras on desktop to avoid a squeeze.
                className={!isDesktop && n >= VISIBLE ? "lg:hidden" : ""}
              />
            ))}
          </div>
        </Reveal>

        {/* face thumbnails (as on aiwithriz.com): jump to any case study */}
        <div
          ref={stripRef}
          className="relative -m-1 mt-5 flex gap-3 overflow-x-auto p-1 [scrollbar-width:none] lg:grid lg:grid-cols-7 lg:overflow-visible [&::-webkit-scrollbar]:hidden"
        >
          {CASE_STUDIES.map((cs, n) => {
            const on = n === active;
            return (
              <button
                key={cs.company}
                type="button"
                onClick={() => show(n)}
                aria-label={`Show ${cs.author}, ${cs.company}`}
                aria-current={on}
                className={`flex w-[13.5rem] shrink-0 cursor-pointer items-center gap-3 rounded-2xl p-2.5 pr-4 text-left lg:w-auto lg:flex-col lg:gap-2 lg:px-2 lg:pb-3 lg:pt-3.5 lg:text-center ring-1 transition-[background-color,box-shadow,transform] duration-200 hover:-translate-y-px ${
                  on
                    ? "bg-white/15 ring-brand shadow-[0_6px_18px_-6px_rgba(255,92,53,0.45)]"
                    : "bg-white/5 ring-white/10 hover:bg-white/10"
                }`}
              >
                <span className="h-11 w-11 shrink-0 overflow-hidden rounded-full" style={{ background: cs.accent }}>
                  <PortraitImg
                    src={cs.image}
                    alt={cs.author}
                    accent={cs.accent}
                    className="h-full w-full object-cover object-[50%_20%] !text-sm"
                  />
                </span>
                <span className="w-full min-w-0">
                  <span className={`block truncate text-sm font-semibold transition-colors ${on ? "text-white" : "text-white/70"}`}>
                    {cs.author}
                  </span>
                  <span className="block truncate text-xs text-white/50">{cs.company}</span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
