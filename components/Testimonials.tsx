import Link from "next/link";
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

function ResultCard({ cs }: { cs: CaseStudy }) {
  const metric = cs.metrics[0];
  return (
    <Link
      href={cs.href ?? "/case-studies"}
      className="group relative isolate flex aspect-[3/4] w-[80%] shrink-0 snap-start flex-col overflow-hidden rounded-3xl text-white ring-1 ring-white/10 transition-[flex-grow,box-shadow] duration-500 ease-out hover:shadow-[0_30px_60px_-30px_var(--color-brand)] sm:w-[46%] lg:aspect-auto lg:w-auto lg:flex-1 lg:hover:flex-[1.9] lg:focus-visible:flex-[1.9]"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden" style={{ background: cs.accent }}>
        <PortraitImg
          src={cs.image}
          alt={`${cs.author}, ${cs.authorRole}`}
          accent={cs.accent}
          className="h-full w-full object-cover object-[50%_20%] transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0b1f1a] via-[#0b1f1a]/55 to-transparent" />

      <div className="flex items-start justify-between gap-2 p-4 sm:p-5">
        <span className="line-clamp-2 rounded-full bg-white/15 px-2.5 py-1 text-[0.66rem] font-semibold uppercase tracking-[0.08em] text-white ring-1 ring-white/20 backdrop-blur-md">
          {cs.scope}
        </span>
        <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-ink transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
          <Icon name="arrow" className="h-4 w-4 -rotate-45 transition-transform duration-300 group-hover:rotate-0" />
        </span>
      </div>

      <div className="mt-auto p-5 sm:p-6">
        <Metric
          value={metric.value}
          className="text-[3.4rem] leading-none tracking-tight text-white tabular-nums sm:text-[4rem]"
        />
        <p className="mt-2 max-w-[16rem] text-[0.9rem] leading-snug text-white/85">{metric.label}</p>

        {/* the quote: visible on touch sizes, revealed as the card widens on desktop */}
        <div className="grid transition-all duration-500 lg:grid-rows-[0fr] lg:opacity-0 lg:group-hover:grid-rows-[1fr] lg:group-hover:opacity-100 lg:group-focus-visible:grid-rows-[1fr] lg:group-focus-visible:opacity-100">
          <blockquote className="overflow-hidden">
            <p className="line-clamp-4 pt-4 text-[0.88rem] leading-relaxed text-white/90 lg:min-w-[20rem]">
              &ldquo;{cs.quote}&rdquo;
            </p>
          </blockquote>
        </div>

        <div className="mt-4 border-t border-white/20 pt-3.5">
          <p className="text-[0.9rem] font-semibold text-white">{cs.author}</p>
          <p className="truncate text-[0.75rem] text-white/70">{cs.authorRole}</p>
        </div>
      </div>
    </Link>
  );
}

/**
 * Real client engagements, face first: each card leads with the client's
 * photo and their headline number, and links to the full case study.
 */
export function Testimonials() {
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
              Real engagements, real numbers. Hover a founder to hear it in
              their words, or open the full case study.
            </p>
          </Reveal>
          <Link
            href="/case-studies"
            className="group inline-flex shrink-0 items-center gap-2 rounded-lg px-1 py-2 text-sm font-semibold text-white transition-colors hover:text-brand"
          >
            All case studies
            <Icon name="arrow" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <Reveal delay={0.1}>
          <div className="-mx-6 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 [scrollbar-width:none] lg:mx-0 lg:h-[34rem] lg:overflow-visible lg:px-0 lg:pb-0 [&::-webkit-scrollbar]:hidden">
            {CASE_STUDIES.map((cs) => (
              <ResultCard key={cs.company} cs={cs} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
