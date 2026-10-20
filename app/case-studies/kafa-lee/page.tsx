import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { StatCounter } from "@/components/StatCounter";
import { PortraitImg } from "@/components/PortraitImg";

export const metadata: Metadata = {
  title: "Dr Kafa Lee, Arami Women's Health | Signal House Case Study",
  description:
    "How Signal House restarted Dr Kafa Lee's LinkedIn and pointed it at the clinicians who refer to her: 3× daily impressions and 192 new followers in the first five weeks.",
};

const HERO_STATS = [
  { num: 3, suffix: "×", label: "Daily impressions vs. the five weeks before" },
  { num: 192, suffix: "", label: "New followers, 14 Sep – 16 Oct 2026" },
  { num: 415, suffix: "", label: "Targeted connection requests to referrers and allied health" },
];

const META = [
  { label: "Industry", value: "Healthcare · Women's Health" },
  { label: "Region", value: "Melbourne, Australia" },
  { label: "Duration", value: "Since September 2026 (ongoing)" },
  {
    label: "Service",
    value:
      "LinkedIn Profile Optimisation · Content Writing & Posting · Company Page Content · Engagement & Outreach",
  },
];

const PROBLEMS = [
  "Her posting had stalled. Her last post went out on 27 August 2026, and by mid-September there had been nothing new for 17 days. On LinkedIn, every quiet stretch costs reach.",
  "Posts weren't starting conversations. Of her ten most recent posts, seven drew no comments, and only two carried a clear call to action.",
  "The profile undersold the expertise. The headline and Experience section didn't make her clinical focus or her clinic obvious to a referring clinician, and there was no booking link.",
];

const FRAMEWORK = [
  {
    no: "01",
    title: "Audit, Audiences & Voice · September 2026",
    body: "We audited the profile and recent content and defined three audiences: referring GPs and GP partners in Melbourne and regional Victoria, allied health collaborators such as psychologists, pelvic floor physios and dietitians, and women's health media and event hosts. Her tone-of-voice guide set the rules: clinically sharp, conversationally loose, story first.",
  },
  {
    no: "02",
    title: "Profile Rewrite · September 2026",
    body: "We rewrote her headline, About and Experience sections around her clinical focus and the referral relationships she wanted to build, and designed a new banner to match.",
  },
  {
    no: "03",
    title: "Content Engine · From 18 September 2026",
    body: "Four pillars: Clinical Pattern Recognition, Longevity & Functional Medicine, Medicare & Systems Advocacy, and Founder Journey. Sixteen posts went out on her profile between 18 September and 19 October, alongside educational posts for the Arami company page.",
  },
  {
    no: "04",
    title: "Peer Network Building · From 22 September 2026",
    body: "We sent 415 targeted connection requests to referring GPs and allied health clinicians from a researched list of 673, and posted 32 comments on posts by creators her audiences follow, so each new post reached more of the right people.",
  },
];

const RESULTS = [
  {
    num: 3,
    suffix: "×",
    headline: "Daily impressions.",
    body: "158.6 a day from 14 September to 16 October 2026, up from 49.4 a day over the 38 days before (7 August to 13 September).",
  },
  {
    num: 192,
    suffix: "",
    headline: "New followers in 33 days.",
    body: "Compared with 60 in the 38 days before content began. Total followers stood at 584 on 16 October 2026.",
  },
  {
    num: 415,
    suffix: "",
    headline: "Targeted connection requests sent.",
    body: "To referring GPs and allied health clinicians between 22 September and 19 October 2026.",
  },
];

const TABLE_ROWS = [
  { metric: "Posting", before: "Last post 27 Aug; 17-day gap", after: "16 posts, 18 Sep – 19 Oct" },
  { metric: "Daily impressions", before: "49.4 (7 Aug – 13 Sep)", after: "158.6 (14 Sep – 16 Oct)" },
  { metric: "Weekly impressions", before: "151–154 (weeks ending 4 & 11 Sep)", after: "1,828–2,192 (weeks ending 9 & 16 Oct)" },
  { metric: "Total engagements", before: "74 (7 Aug – 13 Sep)", after: "165 (14 Sep – 16 Oct)" },
  { metric: "Engagement rate", before: "3.94% (7 Aug – 13 Sep)", after: "3.15% (14 Sep – 16 Oct)" },
  { metric: "New followers", before: "60 (38 days)", after: "192 (33 days)" },
  { metric: "Most-viewed post", before: "524 impressions", after: "2,537 impressions" },
];

const TAKEAWAYS = [
  "Consistency was the first win. Moving from a stalled feed to a steady weekly rhythm more than tripled daily impressions within five weeks.",
  "Reach grew faster than engagement. Total engagements more than doubled, but engagement rate dipped as posts reached people who didn't know her yet. Turning that new reach into conversations is what we are watching next.",
  "It is still early. Referrals and bookings are not captured in this data, so we will report those outcomes once there is enough history to measure them.",
];

export default function KafaLeePage() {
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
              Women&rsquo;s Health
            </span>

            <h1
              className="animate-fade-up mt-5 text-display text-[clamp(2rem,1.2rem+2.6vw,3.1rem)]"
              style={{ animationDelay: "140ms" }}
            >
              Building peer credibility for a women&rsquo;s health GP on
              LinkedIn
            </h1>

            <p
              className="animate-fade-up lead mt-6 text-muted"
              style={{ animationDelay: "210ms" }}
            >
              Dr Kafa Lee, founder of Arami Women&rsquo;s Health in Melbourne, is
              a GP with a special interest in perimenopause, menopause, PMDD and
              ADHD in women. Her LinkedIn had gone quiet. We rebuilt her
              positioning for the clinicians who refer to her and restarted a
              consistent posting rhythm across her profile and the Arami
              company page.
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
                src="/Kafa Lee.jpg"
                alt="Dr Kafa Lee"
                accent="#6b2c4a"
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
                  Dr Kafa Lee is a women&rsquo;s health GP and Board Certified
                  Lifestyle Medicine Physician. She founded Arami Women&rsquo;s
                  Health, an in-person clinic in East Melbourne with telehealth
                  across Australia, built around longer consultations: a full
                  hour for a first appointment.
                </p>
                <p>
                  For her, LinkedIn isn&rsquo;t mainly a patient channel. Its job
                  is peer credibility: being known by the GPs, psychologists,
                  physiotherapists and other clinicians who refer women to her.
                  She came to Signal House in September 2026 to build that
                  presence and keep it consistent.
                </p>
              </div>

              <div className="mt-10 aspect-[16/8] w-full overflow-hidden rounded">
                <PortraitImg
                  src="/Kafa Lee overview.jpg"
                  alt="Dr Kafa Lee at The Age Melbourne Assembly"
                  accent="#6b2c4a"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 55%", borderRadius: "4px" }}
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
                <h2 className="text-h2">What she came to us with.</h2>
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
                <h2 className="text-h2">The first five weeks.</h2>
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
                  engagements divided by impressions. Engagement rate is shown as
                  measured, including where it fell. Figures are as of 16
                  October 2026. The engagement is ongoing.
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
