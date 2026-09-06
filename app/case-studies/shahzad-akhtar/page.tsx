import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { StatCounter } from "@/components/StatCounter";
import { PortraitImg } from "@/components/PortraitImg";

export const metadata: Metadata = {
  title: "Shahzad Akhtar, Strateasy Consulting | Signal House Case Study",
  description:
    "How Signal House turned Shahzad Akhtar's 28 years of practitioner expertise into a LinkedIn presence that generates consulting pipeline: 6× profile view growth, 29% outreach reply rate, and 11 qualified conversations in 5 months.",
};

const HERO_STATS = [
  { num: 29, suffix: "%", label: "Outreach reply rate" },
  { num: 6, suffix: "×", label: "Growth in profile views within 60 days" },
  { num: 11, suffix: "", label: "Qualified consulting conversations initiated" },
];

const META = [
  { label: "Industry", value: "Management Consulting" },
  { label: "Region", value: "Pakistan" },
  { label: "Duration", value: "5 months (ongoing)" },
  {
    label: "Service",
    value:
      "LinkedIn Profile Optimisation · Content Writing & Posting · Lead Generation & Outreach",
  },
];

const PROBLEMS = [
  "Shahzad's LinkedIn profile wasn't converting his expertise into pipeline. Despite two Group CEO roles, AED 500M in managed turnover, a Balanced Scorecard certification from Palladium and Kaplan and Norton, and active engagements with the Asian Development Bank and GIZ, his profile didn't communicate any of that in a way that made the right people reach out.",
  "Content had never been systematic. Without a consistent publishing cadence, there was no mechanism to build authority and visibility with decision-makers who hadn't already encountered him through existing channels. The algorithm punishes inconsistency, and the silence was costing him reach.",
  "Every new engagement still started from zero. Pipeline depended entirely on being in the right room: reputation and referral carried everything, with no outreach system to reach Group CEOs, family business principals, and senior leadership who didn't already know his name.",
];

const FRAMEWORK = [
  {
    no: "01",
    title: "Audit & Positioning · Weeks 1–3",
    body: "We spent the first three weeks understanding Shahzad's business, his clients, his voice, and what genuinely sets his practice apart. From this we built his LinkedIn positioning: Pakistan's foremost Balanced Scorecard practitioner. Not a generalist consultant. The practitioner who had spent 28 years executing strategy at Group CEO level.",
  },
  {
    no: "02",
    title: "Profile Overhaul · Weeks 3–4",
    body: "We rewrote every section from scratch. The headline was reframed around the strategy-execution gap. The About section became a practitioner's authority statement. It now reads like Shahzad wrote it on his best day.",
  },
  {
    no: "03",
    title: "Content Engine · Months 2–5",
    body: "We built a content calendar anchored in five pillars. Within 30 days, post impressions had more than tripled. Within 60 days, profile views had grown 6×. Three posts per week, every week, for the full engagement. No missed weeks.",
  },
  {
    no: "04",
    title: "Outreach Sequencing · Months 3–5",
    body: "We built a targeted system using Sales Navigator to identify Group CEOs, family business principals, and senior leadership in Shahzad's target segments. Within five months, 11 qualified consulting conversations had been initiated.",
  },
];

const RESULTS = [
  {
    num: 29,
    suffix: "%",
    headline: "Outreach reply rate.",
    body: "Up from 9% before the engagement. Targeted, non-salesy outreach to the right people at the right level.",
  },
  {
    num: 6,
    suffix: "×",
    headline: "Growth in profile views within 60 days.",
    body: "From a weekly average of 18–28 views to 140–190, driven by the profile overhaul and content engine going live simultaneously.",
  },
  {
    num: 11,
    suffix: "",
    headline: "Qualified consulting conversations initiated.",
    body: "With Group CEOs, family business principals, and senior leadership in target segments over five months.",
  },
];

const TABLE_ROWS = [
  { metric: "Posting Frequency", before: "Sporadic", after: "3× per week" },
  { metric: "Posting Consistency", before: "Irregular", after: "100% — no missed weeks" },
  { metric: "Post Impressions", before: "220–380", after: "Tripled within 30 days" },
  { metric: "Profile Views (weekly)", before: "18–28", after: "140–190 (6× growth)" },
  { metric: "LinkedIn Followers", before: "8,400", after: "14,490+" },
  { metric: "Outreach Reply Rate", before: "9%", after: "29%" },
  { metric: "Qualified Conversations", before: "0", after: "11 over 5 months" },
];

export default function ShahzadAkhtarPage() {
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
              Management Consulting
            </span>

            <h1
              className="animate-fade-up mt-5 text-display text-[clamp(2rem,1.2rem+2.6vw,3.1rem)]"
              style={{ animationDelay: "140ms" }}
            >
              Turning 28 years of practitioner expertise into a LinkedIn
              presence that generates consulting pipeline
            </h1>

            <p
              className="animate-fade-up lead mt-6 text-muted"
              style={{ animationDelay: "210ms" }}
            >
              Shahzad Akhtar, Founder of Strateasy Consulting, had spent
              nearly three decades as Pakistan&rsquo;s foremost Balanced
              Scorecard practitioner. But his LinkedIn presence wasn&rsquo;t
              generating pipeline. We rebuilt his positioning, content, and
              outreach to make 28 years of credentials visible to the right
              people before the first meeting.
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
                src="/Shahzad Akhtar.jpg"
                alt="Shahzad Akhtar"
                accent="#1a3a5c"
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
                  Shahzad had spent 28 years doing the work. Two Group CEO roles. AED 500M
                  in managed turnover. A Balanced Scorecard certification from Palladium and
                  Kaplan and Norton. Active engagements with the Asian Development Bank and
                  GIZ. He was the practitioner that other consultants pointed to when the
                  conversation turned to strategy execution in Pakistan.
                </p>
                <p>
                  But his LinkedIn told none of that story in a way that generated pipeline.
                  Every new engagement still started from zero, rebuilt on reputation,
                  referral, and being in the right room. He came to Signal House to fix that:
                  to build a presence that did the introduction before the meeting, and
                  shortened the trust-building cycle with the right people.
                </p>
              </div>

              <div className="mt-10 aspect-[16/8] w-full overflow-hidden rounded">
                <PortraitImg
                  src="https://media.licdn.com/dms/image/v2/D4D22AQE1ZtJmC1JqsQ/feedshare-image-high-res/B4DZsC_vI.G4Ao-/0/1765281822593?e=1782950400&v=beta&t=t2Y34WcRtqCAaIsBIFEF9NaopH7QRl3nlQlD6l1yooE"
                  alt="Shahzad Akhtar, Strateasy Consulting"
                  accent="#1a3a5c"
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
                <h2 className="text-h2">What they came to us with.</h2>
              </Reveal>

              <div className="mt-10 grid items-start gap-8 lg:grid-cols-[1fr_20rem] lg:gap-12">

                <Reveal delay={0.05}>
                  <div className="divide-y divide-line">
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

                <Reveal delay={0.15}>
                  <figure className="rounded border-l-4 border-brand bg-cream p-6 lg:sticky lg:top-28 lg:self-start">
                    <span
                      className="block text-[3.5rem] leading-none text-brand opacity-25"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 600,
                        lineHeight: 1,
                      }}
                      aria-hidden="true"
                    >
                      &ldquo;
                    </span>
                    <p
                      className="-mt-2 text-[1.05rem] italic leading-relaxed text-ink"
                      style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
                    >
                      I had the credentials, the track record, the institutional
                      relationships. What I did not have was a way to make any of
                      it visible to the right people without being in the room
                      first. Every engagement still started from zero.
                    </p>
                    <figcaption className="mt-5 border-t border-dashed border-line pt-5">
                      <span className="block text-sm font-semibold text-ink">
                        Shahzad Akhtar
                      </span>
                      <span className="block text-xs text-muted">
                        Founder &amp; Managing Director, Strateasy Consulting
                      </span>
                    </figcaption>
                  </figure>
                </Reveal>

              </div>
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
                <h2 className="text-h2">How we solved it.</h2>
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
                <h2 className="text-h2">What shipped.</h2>
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
                <div className="mt-8 overflow-hidden rounded border border-line">
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
              </Reveal>

              <Reveal delay={0.15}>
                <figure className="mt-8 rounded border-l-4 border-brand bg-cream p-6">
                  <span
                    className="block text-[3.5rem] leading-none text-brand opacity-25"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 600,
                      lineHeight: 1,
                    }}
                    aria-hidden="true"
                  >
                    &ldquo;
                  </span>
                  <p
                    className="-mt-2 text-[1.05rem] italic leading-relaxed text-ink"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
                  >
                    Before this, my entire pipeline came from people who already knew
                    me. Now the content does the introduction. By the time someone
                    books a call, they have already decided I am the right person.
                    The conversion rate is completely different.
                  </p>
                  <figcaption className="mt-5 border-t border-dashed border-line pt-5">
                    <span className="block text-sm font-semibold text-ink">
                      Shahzad Akhtar
                    </span>
                    <span className="block text-xs text-muted">
                      Founder &amp; Managing Director, Strateasy Consulting
                    </span>
                  </figcaption>
                </figure>
              </Reveal>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
