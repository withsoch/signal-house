import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { StatCounter } from "@/components/StatCounter";
import { PortraitImg } from "@/components/PortraitImg";

export const metadata: Metadata = {
  title: "Jon Appino, Contract Diagnostics | Signal House Case Study",
  description:
    "How Signal House repositioned Jon Appino, founder of Contract Diagnostics, on LinkedIn: a new profile, a four-pillar content plan, and a steady programme of posting, commenting and targeted outreach.",
};

const HERO_STATS = [
  { num: 9, suffix: "", label: "Posts published, 28 Apr – 2 Jun 2026" },
  { num: 460, suffix: "", label: "Targeted connection requests to physicians" },
  { num: 49, suffix: "", label: "Comments on posts in his market" },
];

const META = [
  { label: "Industry", value: "Physician Contract Consulting" },
  { label: "Region", value: "United States" },
  { label: "Duration", value: "March – June 2026" },
  {
    label: "Service",
    value:
      "LinkedIn Profile Optimisation · Content Writing & Posting · Engagement & Outreach",
  },
];

const PROBLEMS = [
  "Posts weren't landing. Between February and March 2026, 19 posts averaged 1 like and no comments.",
  "The content had no steady rhythm. All 19 posts were videos, published in bursts on a handful of days rather than on a regular schedule.",
  "The profile didn't do the introducing. The headline was generic, the Featured section was empty, and the custom profile URL hadn't been set.",
];

const FRAMEWORK = [
  {
    no: "01",
    title: "Audit & Audiences · March 2026",
    body: "We audited the profile and content, then defined three audiences: the referral professionals who send physicians his way (physician-focused financial advisors, recruiters and program directors), residents and fellows facing their first contracts, and established physicians reviewing their compensation.",
  },
  {
    no: "02",
    title: "Profile Rewrite · March – April 2026",
    body: "We rewrote his headline, About and Experience sections around his specialism in physician contracts and compensation. Jon reviewed and approved each section.",
  },
  {
    no: "03",
    title: "Content Engine · From 28 April 2026",
    body: "Four pillars: Contract Reality, Compensation Truth, Referral Partner Signal and Founder's View, written in a casually authoritative, story-first and plain-spoken voice. Twelve themes and 52 approved post ideas, with nine posts published between 28 April and 2 June.",
  },
  {
    no: "04",
    title: "Network Building · From 25 April 2026",
    body: "We sent 460 targeted connection requests to physicians in his core audiences between 27 April and 3 June, and posted 49 comments on posts by physician-focused creators and companies between 25 April and 21 May.",
  },
];

const RESULTS = [
  {
    num: 9,
    suffix: "",
    headline: "Posts published.",
    body: "Between 28 April and 2 June 2026, drawn from a bank of 52 approved ideas across four content pillars.",
  },
  {
    num: 460,
    suffix: "",
    headline: "Targeted connection requests sent.",
    body: "To physicians in his core audiences, between 27 April and 3 June 2026.",
  },
  {
    num: 49,
    suffix: "",
    headline: "Comments in his market.",
    body: "On posts by physician-focused creators and companies, between 25 April and 21 May 2026.",
  },
];

const TABLE_ROWS = [
  { metric: "Headline", before: "Generic (“Empowering Physicians…”)", after: "Rewritten and approved by Jon" },
  { metric: "Posting", before: "19 video posts in bursts (Feb – Mar)", after: "9 posts, 28 Apr – 2 Jun" },
  { metric: "Content plan", before: "100% video", after: "4 pillars · 12 themes · 52 approved ideas" },
];

const TAKEAWAYS = [
  "Audiences came first. Naming three specific groups, with referral professionals at the top, shaped the profile, the content pillars and the outreach.",
  "Approval kept it in his voice. Every profile section was reviewed and signed off by Jon before it was used.",
  "This case study covers the strategy and the work delivered. It doesn't include performance results.",
];

export default function JonAppinoPage() {
  return (
    <div className="bg-white">

      {/* ── Hero ── */}
      <section className="bg-white py-16 sm:py-20 lg:py-28">
        <div className="container-x grid items-start gap-12 lg:grid-cols-2 lg:gap-16">

          {/* left column */}
          <div>
            <span
              className="animate-fade-up inline-flex items-center rounded bg-peach px-3 py-1 text-xs font-bold text-brand-dark"
              style={{ animationDelay: "0ms" }}
            >
              Physician Contracts
            </span>

            <h1
              className="animate-fade-up mt-5 text-display text-[clamp(2rem,1.2rem+2.6vw,3.1rem)]"
              style={{ animationDelay: "140ms" }}
            >
              Giving a physician contract specialist a LinkedIn presence
              built around the people who refer him
            </h1>

            <p
              className="animate-fade-up lead mt-6 text-muted"
              style={{ animationDelay: "210ms" }}
            >
              Jon Appino, founder of Contract Diagnostics, helps physicians
              understand and negotiate their employment contracts and
              compensation. His LinkedIn wasn&rsquo;t reflecting that
              expertise. We repositioned his profile, built a content plan
              around four pillars, and ran a steady programme of posting,
              commenting and outreach.
            </p>

            {/* stat rows */}
            <div
              className="animate-fade-up mt-10 divide-y divide-line"
              style={{ animationDelay: "280ms" }}
            >
              {HERO_STATS.map((s) => (
                <div key={s.suffix + s.num} className="flex items-baseline gap-5 py-5">
                  <StatCounter
                    num={s.num}
                    suffix={s.suffix}
                    className="shrink-0 leading-none text-ink"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(2.2rem,1.6rem+1.6vw,2.8rem)",
                      fontWeight: 600,
                      letterSpacing: "-0.022em",
                    }}
                  />
                  <span className="text-sm text-slate">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* right column - portrait */}
          <div
            className="animate-fade-up"
            style={{ animationDelay: "100ms" }}
          >
            <div className="aspect-[3/4] w-full overflow-hidden rounded border border-line">
              <PortraitImg
                src="/Jon Appino.jpg"
                alt="Jon Appino"
                accent="#2c5c6b"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 20%" }}
              />
            </div>
          </div>

        </div>
      </section>

      {/* ── Thin rule ── */}
      <hr className="border-line" />

      {/* ── Meta bar ── */}
      <div className="container-x">
        <dl className="flex flex-col divide-y divide-line border-b border-line sm:flex-row sm:divide-x sm:divide-y-0">
          {META.map((f) => (
            <div key={f.label} className="flex-1 py-5 sm:px-8 first:sm:pl-0 last:sm:pr-0">
              <dt className="text-[0.68rem] font-bold uppercase tracking-widest text-muted">
                {f.label}
              </dt>
              <dd className="mt-1.5 text-sm font-medium leading-relaxed text-ink">
                {f.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {/* ── Overview ── */}
      <section className="border-t border-line py-16 sm:py-20 lg:py-24">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-[11rem_1fr] lg:gap-16">

            <div className="lg:sticky lg:top-28 lg:self-start">
              <span className="text-[0.68rem] font-bold uppercase tracking-widest text-muted">
                Overview
              </span>
            </div>

            <Reveal>
              <h2 className="text-h2">The context behind the work.</h2>
              <div className="mt-8 space-y-5 text-[1rem] leading-relaxed text-slate">
                <p>
                  Jon founded Contract Diagnostics in 2011, a physician
                  contract consultancy providing specialised services
                  nationwide across the United States. Before that he founded
                  NewCloud Medical and spent 22 years in pharma and biotech.
                </p>
                <p>
                  He came to Signal House in March 2026 to make his LinkedIn
                  work harder: to reach the physicians who need contract
                  guidance, and the professionals who refer them.
                </p>
              </div>

              <div className="mt-10 aspect-[16/8] w-full overflow-hidden rounded">
                <PortraitImg
                  src="/Jon Appino overview.png"
                  alt="Contract Diagnostics webinar with Jon Appino: Physician Negotiation Strategies for 2026"
                  accent="#2c5c6b"
                  style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "4px" }}
                />
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* ── The Problem ── */}
      <section className="border-t border-line py-16 sm:py-20 lg:py-24">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-[11rem_1fr] lg:gap-16">

            <div className="lg:sticky lg:top-28 lg:self-start">
              <span className="text-[0.68rem] font-bold uppercase tracking-widest text-muted">
                The Problem
              </span>
            </div>

            <div>
              <Reveal>
                <h2 className="text-h2">What he came to us with.</h2>
              </Reveal>

              <Reveal delay={0.05}>
                <div className="mt-10 max-w-3xl divide-y divide-line">
                  {PROBLEMS.map((text, i) => (
                    <div key={i} className="flex gap-4 py-6 first:pt-0 last:pb-0">
                      <span className="mt-[0.45rem] h-2 w-2 shrink-0 rounded-full bg-brand" />
                      <p className="text-[0.975rem] leading-relaxed text-slate">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* ── Our Framework ── */}
      <section className="border-t border-line py-16 sm:py-20 lg:py-24">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-[11rem_1fr] lg:gap-16">

            <div className="lg:sticky lg:top-28 lg:self-start">
              <span className="text-[0.68rem] font-bold uppercase tracking-widest text-muted">
                Our Framework
              </span>
            </div>

            <div>
              <Reveal>
                <h2 className="text-h2">How we approached it.</h2>
              </Reveal>

              <Reveal delay={0.05}>
                <div className="mt-10 grid divide-y divide-line overflow-hidden rounded border border-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                  {FRAMEWORK.slice(0, 3).map((step) => (
                    <div key={step.no} className="bg-cream p-7">
                      <span className="text-[0.68rem] font-bold uppercase tracking-widest text-brand">
                        Step {step.no}
                      </span>
                      <h3
                        className="mt-3 text-base font-semibold leading-snug text-ink"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {step.title}
                      </h3>
                      <p className="mt-2.5 text-[0.9rem] leading-relaxed text-slate">
                        {step.body}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="mt-3 grid overflow-hidden rounded border border-line sm:grid-cols-[10rem_1fr]">
                  <div className="flex items-center justify-center border-b border-line bg-cream px-8 py-6 sm:border-b-0 sm:border-r">
                    <span className="text-[0.68rem] font-bold uppercase tracking-widest text-brand">
                      Step {FRAMEWORK[3].no}
                    </span>
                  </div>
                  <div className="bg-cream p-7">
                    <h3
                      className="text-base font-semibold leading-snug text-ink"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {FRAMEWORK[3].title}
                    </h3>
                    <p className="mt-2.5 text-[0.9rem] leading-relaxed text-slate">
                      {FRAMEWORK[3].body}
                    </p>
                  </div>
                </div>
              </Reveal>

            </div>
          </div>
        </div>
      </section>

      {/* ── What we delivered ── */}
      <section className="border-t border-line py-16 sm:py-20 lg:py-24">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-[11rem_1fr] lg:gap-16">

            <div className="lg:sticky lg:top-28 lg:self-start">
              <span className="text-[0.68rem] font-bold uppercase tracking-widest text-muted">
                Delivered
              </span>
            </div>

            <div>
              <Reveal>
                <h2 className="text-h2">What we delivered.</h2>
              </Reveal>

              <Reveal delay={0.05}>
                <div className="mt-10 grid gap-px bg-line sm:grid-cols-3">
                  {RESULTS.map((r) => (
                    <div
                      key={r.suffix + r.num}
                      className="border-t-2 border-brand bg-white p-7 lg:p-9"
                    >
                      <StatCounter
                        num={r.num}
                        suffix={r.suffix}
                        className="block leading-none text-ink"
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "clamp(2.6rem,2rem+1.5vw,3.4rem)",
                          fontWeight: 600,
                          letterSpacing: "-0.022em",
                        }}
                      />
                      <p className="mt-4 text-base font-semibold text-ink">
                        {r.headline}
                      </p>
                      <p className="mt-1.5 text-sm leading-relaxed text-slate">
                        {r.body}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="mt-8 overflow-x-auto rounded border border-line">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-cream">
                        <th className="px-5 py-3 text-left text-[0.68rem] font-bold uppercase tracking-widest text-muted">
                          Area
                        </th>
                        <th className="px-5 py-3 text-left text-[0.68rem] font-bold uppercase tracking-widest text-muted">
                          Before
                        </th>
                        <th className="px-5 py-3 text-left text-[0.68rem] font-bold uppercase tracking-widest text-muted">
                          After
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-line">
                      {TABLE_ROWS.map((row, i) => (
                        <tr key={i} className="bg-white">
                          <td className="px-5 py-3.5 font-medium text-ink">
                            {row.metric}
                          </td>
                          <td className="px-5 py-3.5 text-slate">{row.before}</td>
                          <td className="px-5 py-3.5 font-semibold text-brand">
                            {row.after}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 text-xs leading-relaxed text-muted">
                  Source: Signal House strategy document and content tracker
                  for this engagement. Activity figures cover 25 April to 3
                  June 2026.
                </p>
              </Reveal>

            </div>

          </div>
        </div>
      </section>

      {/* ── Takeaways ── */}
      <section className="border-t border-line py-16 sm:py-20 lg:py-24">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-[11rem_1fr] lg:gap-16">

            <div className="lg:sticky lg:top-28 lg:self-start">
              <span className="text-[0.68rem] font-bold uppercase tracking-widest text-muted">
                Takeaways
              </span>
            </div>

            <div>
              <Reveal>
                <h2 className="text-h2">What we learned.</h2>
              </Reveal>

              <Reveal delay={0.05}>
                <div className="mt-10 max-w-3xl divide-y divide-line">
                  {TAKEAWAYS.map((text, i) => (
                    <div key={i} className="flex gap-4 py-6 first:pt-0 last:pb-0">
                      <span className="mt-[0.45rem] h-2 w-2 shrink-0 rounded-full bg-brand" />
                      <p className="text-[0.975rem] leading-relaxed text-slate">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
