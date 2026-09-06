import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { StatCounter } from "@/components/StatCounter";
import { PortraitImg } from "@/components/PortraitImg";

export const metadata: Metadata = {
  title: "Kaitlin Malaspina, Brenna & Co. | Signal House Case Study",
  description:
    "How Signal House made Brenna & Co.'s distinctive Private Operating House offer legible to the right founders: 3× profile view growth, 22% outreach reply rate, and 8 qualified conversations in 12 weeks.",
};

const HERO_STATS = [
  { num: 3, suffix: "×", label: "Growth in profile views within 60 days" },
  { num: 22, suffix: "%", label: "Outreach reply rate" },
  { num: 8, suffix: "", label: "Qualified founder conversations initiated" },
];

const META = [
  { label: "Industry", value: "Business Architecture & Operational Stewardship" },
  { label: "Region", value: "United States" },
  { label: "Duration", value: "12 weeks" },
  {
    label: "Service",
    value:
      "LinkedIn Profile Optimisation · Content Writing & Posting · Lead Generation & Outreach",
  },
];

const PROBLEMS = [
  "Kaitlin's positioning was clear internally but not legible on LinkedIn. Brenna & Co. is a Private Operating House: a firm that steps into the full architectural layer of a founder's business and runs it. But the offer was written for founders already convinced, not for founders who needed to first understand what it was and why it mattered. Visitors came and left without the translation layer that converts interest into inquiry.",
  "Content was sporadic and undirected. Without a consistent presence anchored in Kaitlin's positioning, the right founders had no way to find her or build familiarity before they'd already made a decision, or decided to keep carrying it alone. The content that did go out wasn't building the channel.",
  "There was no structured outreach system. Conversations were happening through referrals and warm connections, but there was no process for reaching founders at the specific growth inflection points where the Private Operating House becomes necessary. The opportunity existed. The infrastructure to capture it didn't.",
];

const FRAMEWORK = [
  {
    no: "01",
    title: "Audit & Positioning · Weeks 1–2",
    body: "The challenge with Kaitlin's positioning was not that it was wrong. It was that it was written for founders who were already convinced. We built the translation layer: a positioning bridge between Brenna & Co.'s proprietary language and the vocabulary of the founders who needed it most.",
  },
  {
    no: "02",
    title: "Profile Overhaul · Weeks 2–3",
    body: "We rewrote the profile from the founder's perspective, not the firm's. The proprietary language stayed. What changed was where in the journey the visitor encountered it.",
  },
  {
    no: "03",
    title: "Content Engine · Weeks 3–12",
    body: "Three posts per week, every week, ghostwritten in Kaitlin's voice. Post impressions tripled within the first thirty days. The engagement that followed was different: founders were describing their own situations in the comments.",
  },
  {
    no: "04",
    title: "Outreach Sequencing · Weeks 4–12",
    body: "We built a targeted outreach system to identify founders at the specific growth inflection points where the House becomes necessary. Within twelve weeks, eight qualified founder conversations had been initiated.",
  },
];

const RESULTS = [
  {
    num: 3,
    suffix: "×",
    headline: "Growth in profile views within 60 days.",
    body: "From baseline to 3× within the first sixty days of the engagement, driven by the profile overhaul and content engine.",
  },
  {
    num: 22,
    suffix: "%",
    headline: "Outreach reply rate.",
    body: "Targeted outreach to founders at the specific growth inflection points where the Private Operating House becomes necessary.",
  },
  {
    num: 8,
    suffix: "",
    headline: "Qualified founder conversations initiated.",
    body: "With founders at the inflection points where the House becomes necessary, all within twelve weeks.",
  },
];

const TABLE_ROWS = [
  { metric: "Posting Frequency", before: "Sporadic", after: "3× per week" },
  { metric: "Posting Consistency", before: "Gap-heavy", after: "100% — no missed weeks" },
  { metric: "Post Impressions", before: "Low, undirected", after: "Tripled within 30 days" },
  { metric: "Profile Views", before: "Baseline", after: "3× growth within 60 days" },
  { metric: "Structured Outreach", before: "None", after: "Active weekly" },
  { metric: "Qualified Conversations", before: "0", after: "8 over 12 weeks" },
];

export default function KaitlinMalaspinaPage() {
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
              Business Architecture
            </span>

            <h1
              className="animate-fade-up mt-5 text-display text-[clamp(2rem,1.2rem+2.6vw,3.1rem)]"
              style={{ animationDelay: "140ms" }}
            >
              Making a distinctive offer legible: how a Private Operating House
              built the channel to match the work
            </h1>

            <p
              className="animate-fade-up lead mt-6 text-muted"
              style={{ animationDelay: "210ms" }}
            >
              Kaitlin Malaspina, Principal of Brenna &amp; Co., had built
              a distinctive Private Operating House for founders. The offer
              was clear. LinkedIn wasn&rsquo;t making it legible to the right
              people. We built the positioning, content, and outreach
              infrastructure to match the calibre of the work.
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
                src="/Kaitlin Malaspina.jpg"
                alt="Kaitlin Malaspina"
                accent="#4a2c6e"
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
                  Kaitlin had built something that most consultants only describe. Brenna &amp; Co.
                  is a Private Operating House: a firm that steps into the full architectural layer
                  of a founder&rsquo;s business and runs it. The work was distinctive, the track
                  record was real, and the positioning was clear in her mind.
                </p>
                <p>
                  But LinkedIn was not converting at the level the work deserved. The right founders
                  were on LinkedIn every day. They were just not finding her before they had already
                  found someone else, or decided to keep carrying it alone. She came to Signal House to build
                  the infrastructure that matched what the firm had already built in the real world.
                </p>
              </div>

              <div className="mt-10 aspect-[16/8] w-full overflow-hidden rounded">
                <PortraitImg
                  src="/Kaitlin Malaspina.jpg"
                  alt="Kaitlin Malaspina, Brenna & Co."
                  accent="#4a2c6e"
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
                      The positioning was always clear in my mind. The offer was
                      differentiated. What I had not built was the infrastructure
                      to make both of those things visible to founders before they
                      were already in a conversation with me.
                    </p>
                    <figcaption className="mt-5 border-t border-dashed border-line pt-5">
                      <span className="block text-sm font-semibold text-ink">
                        Kaitlin Malaspina
                      </span>
                      <span className="block text-xs text-muted">
                        Principal &amp; Founder, Brenna &amp; Co.
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
                    It is somewhat ironic that the person who builds operational
                    infrastructure for founders had not built the right infrastructure
                    for her own channel. Signal House fixed that. And they did it without
                    changing what Brenna and Co. is. They just made it visible to
                    the right people at the right moment.
                  </p>
                  <figcaption className="mt-5 border-t border-dashed border-line pt-5">
                    <span className="block text-sm font-semibold text-ink">
                      Kaitlin Malaspina
                    </span>
                    <span className="block text-xs text-muted">
                      Principal &amp; Founder, Brenna &amp; Co.
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
