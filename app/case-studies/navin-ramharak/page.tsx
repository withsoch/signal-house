import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { StatCounter } from "@/components/StatCounter";
import { PortraitImg } from "@/components/PortraitImg";

export const metadata: Metadata = {
  title: "Navin Ramharak, Build With Nav | Signal House Case Study",
  description:
    "How Signal House repositioned Navin Ramharak as an operator who builds with AI: 172% more impressions, 162 engagements and 149 new followers in the first 30 days of content.",
};

const HERO_STATS = [
  { num: 172, suffix: "%", label: "More impressions in 30 days vs. the 30 days before" },
  { num: 162, suffix: "", label: "Engagements in 30 days, up from 24" },
  { num: 149, suffix: "", label: "New followers in 30 days, up from 48" },
];

const META = [
  { label: "Industry", value: "AI Training & Education" },
  { label: "Region", value: "Edmonton, Canada" },
  { label: "Duration", value: "Since August 2026 (ongoing)" },
  {
    label: "Service",
    value:
      "LinkedIn Profile Optimisation · Content Writing & Posting · Company Page Copy · Engagement & Outreach",
  },
];

const PROBLEMS = [
  "His positioning was getting lost. None of his recent posts told his operator story, so to a new visitor he looked like one more voice in a crowded AI content feed.",
  "Content wasn't generating conversation. His ten most recent posts in August 2026 drew 15 reactions between them, and a comment-for-link mechanic produced no comments at all.",
  "Too many directions at once. Several competing links and calls to action, no company page for Build With Nav and Creator Mode switched off meant interested visitors had no clear next step.",
];

const FRAMEWORK = [
  {
    no: "01",
    title: "Audit & Positioning · August 2026",
    body: "We audited the profile and content and settled the positioning: not an AI content creator, but a company builder who happens to be hands-on with AI. We defined three audiences: owners of managed IT service providers, mid-market CEOs and COOs, and community and podcast hosts who open referral and speaking opportunities.",
  },
  {
    no: "02",
    title: "Profile & Company Page · August – September 2026",
    body: "We rewrote his headline, About and Experience sections, designed a new banner and wrote copy for a Build With Nav company page, all approved by Navin and built around a single call to action: buildwithnav.com.",
  },
  {
    no: "03",
    title: "Content Engine · From 16 September 2026",
    body: "Two posts a week in an operator-casual, receipts-only voice, on themes such as Human in the Loop, Execution Speed as the Only Edge and Brown Ballers Built From Zero. Ten posts went out between 16 September and 15 October.",
  },
  {
    no: "04",
    title: "Network Building · From 17 September 2026",
    body: "We sent 480 targeted connection requests to MSP owners and mid-market leaders, posted 35 comments on posts by creators his audiences follow, and replied to comments on his own posts to keep conversations going.",
  },
];

const RESULTS = [
  {
    num: 172,
    suffix: "%",
    headline: "More impressions in 30 days.",
    body: "4,854 impressions from 17 September to 16 October 2026, up from 1,785 in the previous 30 days (17 August to 15 September).",
  },
  {
    num: 162,
    suffix: "",
    headline: "Engagements in 30 days.",
    body: "Up from 24 in the previous 30 days, lifting engagement rate from 1.34% to 3.34%.",
  },
  {
    num: 149,
    suffix: "",
    headline: "New followers in 30 days.",
    body: "Compared with 48 in the previous 30 days. Total followers reached 2,542 on 16 October 2026.",
  },
];

const TABLE_ROWS = [
  { metric: "Posting", before: "10 posts in Aug, 15 reactions in total", after: "10 posts, 16 Sep – 15 Oct" },
  { metric: "Impressions (30 days)", before: "1,785", after: "4,854" },
  { metric: "Engagements (30 days)", before: "24", after: "162" },
  { metric: "Engagement rate (30 days)", before: "1.34%", after: "3.34%" },
  { metric: "New followers (30 days)", before: "48", after: "149" },
  { metric: "Weekly impressions", before: "442 (week ending 11 Sep)", after: "1,504 peak (week ending 9 Oct)" },
];

const TAKEAWAYS = [
  "Lead with the operator. Putting a company-building track record ahead of AI claims gave his content a distinct angle in a crowded feed.",
  "Personal stories travel. His most-viewed post in this period was a personal one, reaching 1,386 impressions across two weeks.",
  "It is still early. Training bookings and leads are not captured in this data, so we will report those outcomes once there is enough history to measure them.",
];

export default function NavinRamharakPage() {
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
              AI Training
            </span>

            <h1
              className="animate-fade-up mt-5 text-display text-[clamp(2rem,1.2rem+2.6vw,3.1rem)]"
              style={{ animationDelay: "140ms" }}
            >
              Repositioning a serial operator as the founder who builds with
              AI, not just talks about it
            </h1>

            <p
              className="animate-fade-up lead mt-6 text-muted"
              style={{ animationDelay: "210ms" }}
            >
              Navin Ramharak, founder of Build With Nav, runs live, hands-on AI
              training for teams and events. His LinkedIn made him look like
              another AI content creator. We repositioned him around his track
              record as an operator and built a steady content and outreach
              system aimed at the business leaders he wants to train.
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
                src="/Navin Ramharak.jpg"
                alt="Navin Ramharak"
                accent="#2c3e6b"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
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
                  Navin built companies before he built with AI. His background
                  includes the Social House agency and the Brown Ballers
                  community, and he now runs Build With Nav, which delivers live
                  AI training where teams leave with something built. He holds
                  14 Anthropic certifications.
                </p>
                <p>
                  The work was real, but his LinkedIn didn&rsquo;t show it. He
                  came to Signal House in August 2026 to put the operator first
                  and the AI expertise second, and to start conversations with
                  the people who buy training.
                </p>
              </div>

              <div className="mt-10 aspect-[16/8] w-full overflow-hidden rounded">
                <PortraitImg
                  src="/Navin Ramharak overview.jpg"
                  alt="Navin Ramharak leading a live AI training session"
                  accent="#2c3e6b"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 35%", borderRadius: "4px" }}
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

      {/* ── Results ── */}
      <section className="border-t border-line py-16 sm:py-20 lg:py-24">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-[11rem_1fr] lg:gap-16">

            <div className="lg:sticky lg:top-28 lg:self-start">
              <span className="text-[0.68rem] font-bold uppercase tracking-widest text-muted">
                Results
              </span>
            </div>

            <div>
              <Reveal>
                <h2 className="text-h2">The first 30 days.</h2>
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
                          Metric
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
                  Source: LinkedIn native analytics, compiled weekly by Signal
                  House. Weeks run Saturday to Friday. Engagement rate is
                  engagements divided by impressions. The earlier 30-day window
                  includes a few posts published before Signal House content
                  began. Figures are as of 16 October 2026. The engagement is ongoing.
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
