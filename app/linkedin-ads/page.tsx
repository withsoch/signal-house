import type { Metadata } from "next";
import { Logo } from "@/components/Logo";
import { BookButton } from "@/components/BookButton";
import { Icon, type IconName } from "@/components/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { PortraitImg } from "@/components/PortraitImg";
import { CASE_STUDIES } from "@/lib/content";

// Standalone LinkedIn Ads page, meant to be sent directly to ads prospects.
// Mirrors the structure and pitch of adjuice.io section for section. It has
// its own pill nav and footer (the site-wide ones are hidden on this route,
// see components/SiteChrome.tsx); only the logo links back to the main site.
//
// DRAFT, confirm with Umair before sending: the prices, and the FAQ answers
// (they describe how the service runs: launch time, meetings, term).

export const metadata: Metadata = {
  title: "LinkedIn Ads Management for B2B",
  description:
    "Full-service LinkedIn Ads management for B2B companies. Reach more category buyers, build mindshare and grow pipeline.",
};

const UMAIR_PHOTO =
  "https://cdn.prod.website-files.com/68e7ded517d0693d2c345250/694e752108dbf4bfac6a9469_Umair%20co-founder.webp";

const NAV = [
  { label: "Problem", href: "#problem" },
  { label: "Process", href: "#process" },
  { label: "Proof", href: "#proof" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const BYZANTINE = CASE_STUDIES.find((c) => c.author === "Gaia Ferrero")!;

const PROBLEMS: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "chat",
    title: "Unclear messaging",
    body: "Prospects don't connect you to your category, or to the moments that trigger a purchase.",
  },
  {
    icon: "compass",
    title: "Optimisation overload",
    body: "More time goes into tweaking, nurturing and testing than into finding new category buyers.",
  },
  {
    icon: "target",
    title: "Inaccurate targeting",
    body: "Your ads aren't reaching enough of the right buyers to build real mindshare.",
  },
];

const STEPS = [
  {
    no: "01",
    title: "Attract",
    body: "Your messaging is your targeting. We write for your ICP first, with founder- and employee-led content, so you reach the most relevant audiences.",
  },
  {
    no: "02",
    title: "Amplify",
    body: "Organic reach has a ceiling. We put LinkedIn Ads behind your best content to reach more buyers, build mindshare and turn inbound into a predictable engine.",
  },
  {
    no: "03",
    title: "Scale",
    body: "We find the playbook that repeats, then roll it into new segments and markets. Every 90-day cycle gets more efficient.",
  },
];

const PACKAGES: { name: string; forWho: string; price: string; includes: string; featured?: boolean }[] = [
  {
    name: "LinkedIn Ads",
    forWho: "B2Bs spending $10K+/mo on LinkedIn Ads who don't need thought-leader content.",
    price: "$4K/mo",
    includes: "Campaign management • Ad creative & copy • Weekly reporting",
  },
  {
    name: "Full-Service LinkedIn",
    forWho: "For teams that also need organic thought-leader content.",
    price: "$6K/mo",
    includes: "2x founder posts/wk • Organic content strategy • LinkedIn Ads management",
    featured: true,
  },
  {
    name: "Coaching",
    forWho: "For solo marketers and small teams spending under $5K/mo on LinkedIn Ads.",
    price: "$1K/mo",
    includes: "2x 1-hour calls/mo • Anytime Slack access • Strategy audit",
  },
];

const FAQ = [
  {
    q: "How quickly can we launch?",
    a: "We take on a small number of ads clients at a time. If there's a space free, we can go from signed contract to live ads in under a week. If not, we'll hold your spot until one opens up.",
  },
  {
    q: "Do you write everything for us?",
    a: "We write the copy for every ad the strategy calls for. On Full-Service LinkedIn we also write two thought-leader posts a week for your founder. We don't take ad-hoc copywriting requests outside the strategy.",
  },
  {
    q: "What do you need from us?",
    a: "Admin access to your CRM, LinkedIn Campaign Manager and company page. We use them to build the ad messaging and content strategy and to find the most profitable segments to target. Brand guidelines, assets and a tone-of-voice guide help too.",
  },
  {
    q: "Is ad creative included?",
    a: "Yes, so it never becomes a bottleneck. We design the core image creative the strategy needs (video isn't included). On Full-Service LinkedIn that also covers carousels and documents. We don't take ad-hoc design requests.",
  },
  {
    q: "How often do we meet?",
    a: "Day to day we work async in Slack, with a recurring call once a month; meeting more often tends to cause needless account tweaks before momentum builds. Bi-weekly calls are available if you want them. You also get a performance report with insights and next steps every Monday.",
  },
  {
    q: "What's the minimum term?",
    a: "There isn't one. We invoice a month in advance and you can cancel any time. The results should be the reason you stay, not a contract.",
  },
  {
    q: "How long does it take to see results?",
    a: "It depends on your sales cycle. Companies with shorter cycles and an established LinkedIn presence usually see a lift within 6 to 8 weeks. New advertisers targeting cold audiences should expect around 12 weeks, as it takes time to saturate a new audience.",
  },
];

function SectionHead({ eyebrow, title, lead, dark = false }: { eyebrow: string; title: React.ReactNode; lead?: string; dark?: boolean }) {
  return (
    <Reveal className="mx-auto max-w-3xl text-center">
      <p className={`text-[0.75rem] font-bold uppercase tracking-[0.14em] ${dark ? "text-brand-light" : "text-brand-dark"}`}>{eyebrow}</p>
      <h2 className={`text-h2 mt-4 ${dark ? "!text-white" : ""}`}>{title}</h2>
      {lead && <p className={`lead mx-auto mt-5 max-w-2xl ${dark ? "!text-white/70" : ""}`}>{lead}</p>}
    </Reveal>
  );
}

const display = { fontFamily: "var(--font-display)", fontWeight: 600 } as const;

export default function LinkedInAdsPage() {
  return (
    <div className="bg-cream pb-10">
      {/* ── floating pill nav ── */}
      <div className="sticky top-4 z-50 px-4 pt-4">
        <nav className="mx-auto flex max-w-[62rem] items-center justify-between gap-4 rounded-full bg-white/90 py-2 pl-5 pr-2 shadow-card ring-1 ring-line backdrop-blur-md">
          <Logo className="[&_img]:h-7" />
          <div className="hidden items-center gap-7 md:flex">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="text-[0.92rem] font-medium text-ink-soft transition-colors hover:text-brand">
                {n.label}
              </a>
            ))}
          </div>
          <BookButton arrow className="shrink-0 !rounded-full !px-4 !py-2 !text-[0.9rem]">
            <span className="sm:hidden">Book a call</span>
            <span className="hidden sm:inline">Book a strategy call</span>
          </BookButton>
        </nav>
      </div>

      {/* ── hero ── */}
      <section className="container-x pt-16 text-center sm:pt-20">
        <Reveal>
          <span className="inline-flex rounded-full bg-peach px-3.5 py-1.5 text-[0.8rem] font-semibold text-brand-deep">
            Full-Service LinkedIn Ads Management for B2B
          </span>
          <h1 className="text-display mx-auto mt-6 max-w-4xl">
            Get more <span className="text-brand">pipeline</span> out of LinkedIn
          </h1>
          <p className="lead mx-auto mt-6 max-w-2xl">
            LinkedIn Ads management for B2B companies running an inbound demand generation motion. Reach more category
            buyers, build mindshare, and grow pipeline.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <BookButton size="lg" arrow className="!rounded-full">
              Book a strategy call
            </BookButton>
            <a
              href="#process"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-ink ring-1 ring-ink/20 transition-colors hover:ring-ink/45"
            >
              See the process
              <Icon name="arrow" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="mx-auto mt-14 max-w-[62rem]">
          <div className="grid gap-3 rounded-[2rem] bg-white p-3 text-left shadow-lift ring-1 ring-line sm:grid-cols-3">
            <div className="rounded-3xl bg-mist p-6 ring-1 ring-line">
              <span className="block h-12 w-12 overflow-hidden rounded-full ring-2 ring-brand/40">
                <PortraitImg src={UMAIR_PHOTO} alt="Umair Shahzad" className="h-full w-full object-cover" />
              </span>
              <h3 className="mt-5 text-[1.15rem] font-semibold">Senior-level execution</h3>
              <p className="mt-2 text-[0.92rem] leading-relaxed text-slate">
                A LinkedIn Top Voice, ranked in the top 200 globally in Venture Capital, working on your account.
              </p>
            </div>
            <div className="rounded-3xl bg-forest p-6 text-white">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-forest">
                <Icon name="trend" className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-[1.15rem] font-semibold !text-white">Zero bottlenecks</h3>
              <p className="mt-2 text-[0.92rem] leading-relaxed text-white/75">
                Ads, thought-leader posts, targeting, attribution. Everything that usually slows pipeline down is handled.
              </p>
            </div>
            <div className="rounded-3xl bg-brand p-6 text-white">
              <p className="text-[3.2rem] leading-none tracking-tight" style={display}>95%</p>
              <p className="mt-4 text-[0.92rem] leading-relaxed text-white/90">
                of B2B buyers aren&rsquo;t in-market today. Ads keep you front of mind until they are.
              </p>
              <p className="mt-3 text-[0.7rem] text-white/70">Source: LinkedIn B2B Institute</p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── problem ── */}
      <section id="problem" className="container-x scroll-mt-28 pt-28 sm:pt-32">
        <SectionHead
          eyebrow="The problem"
          title="Nurturing harder doesn't work. You need to reach more buyers."
          lead="Only around 5% of your category buyers are in-market at any time. Fixing the funnel won't convince the other 95%. Reaching more category buyers is the most efficient way to grow pipeline."
        />
        <div className="mx-auto mt-12 grid max-w-[68rem] gap-4 md:grid-cols-3">
          {PROBLEMS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08} className="rounded-3xl bg-white p-7 ring-1 ring-line">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-peach text-brand-deep">
                <Icon name={p.icon} className="h-5 w-5" />
              </span>
              <p className="mt-5 text-xs font-bold tabular-nums text-muted">0{i + 1}</p>
              <h3 className="mt-1 text-[1.2rem] font-semibold">{p.title}</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-slate">{p.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── process ── */}
      <section id="process" className="scroll-mt-28 px-4 pt-28 sm:pt-32">
        <div className="relative mx-auto max-w-[72rem] overflow-hidden rounded-[2.5rem] bg-forest px-6 py-16 sm:px-12 sm:py-20">
          <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand/25 blur-[100px]" />
          <SectionHead
            dark
            eyebrow="The process"
            title="The new era of demand generation is human first"
            lead="Run LinkedIn Ads in isolation and you'll waste budget. Fuel them with consistent founder- and employee-led content, and every impression works harder."
          />
          <div className="relative mt-12 grid gap-4 md:grid-cols-3">
            {STEPS.map((s, i) => (
              <Reveal key={s.no} delay={i * 0.08} className="rounded-3xl bg-white/[0.06] p-7 ring-1 ring-white/10">
                <p className={`text-[2.2rem] leading-none ${["text-white", "text-brand-light", "text-brand"][i]}`} style={display}>
                  {s.no}
                </p>
                <h3 className="mt-4 text-[1.25rem] font-semibold !text-white">{s.title}</h3>
                <p className="mt-2 text-[0.94rem] leading-relaxed text-white/70">{s.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── proof ── */}
      <section id="proof" className="container-x scroll-mt-28 pt-28 sm:pt-32">
        <SectionHead
          eyebrow="Proof"
          title="Pipeline influence you can prove to execs"
          lead="We've spent years building LinkedIn presence and pipeline for founders in finance, consulting and B2B services. Here's what to expect."
        />
        <div className="mx-auto mt-12 grid max-w-[68rem] gap-4 md:grid-cols-3">
          <Reveal className="flex flex-col rounded-3xl bg-white p-7 ring-1 ring-ink/80">
            <p className="text-[3.4rem] leading-none tracking-tight text-ink" style={display}>{BYZANTINE.metrics[0].value}</p>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-slate">
              Outreach reply rate for {BYZANTINE.company}, a digital-assets firm, over {BYZANTINE.duration}.
            </p>
          </Reveal>
          <Reveal delay={0.08} className="flex flex-col rounded-3xl bg-brand p-7 text-white">
            <p className="whitespace-nowrap text-[2.9rem] leading-none tracking-tight lg:text-[3.1rem]" style={display}>60–90 days</p>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-white/90">
              Typical time for reach and inbound conversations to build after launch.
            </p>
          </Reveal>
          <Reveal delay={0.16} className="flex flex-col justify-between rounded-3xl bg-forest p-7 text-white">
            <blockquote className="text-[1.05rem] font-medium leading-snug" style={{ fontFamily: "var(--font-display)" }}>
              &ldquo;{BYZANTINE.quote}&rdquo;
            </blockquote>
            <p className="mt-6 text-sm text-white/60">
              {BYZANTINE.author}
              <br />
              <span className="text-white/45">{BYZANTINE.authorRole}</span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── pricing ── */}
      <section id="pricing" className="container-x scroll-mt-28 pt-28 sm:pt-32">
        <SectionHead
          eyebrow="Pricing"
          title="Choose the level of support your LinkedIn engine needs."
          lead="Managed packages are for companies already running LinkedIn Ads. Coaching suits companies with a small ad budget, or who haven't run ads before."
        />
        <div className="mx-auto mt-12 grid max-w-[68rem] items-stretch gap-4 md:grid-cols-3">
          {PACKAGES.map((p, i) => (
            <Reveal
              key={p.name}
              delay={i * 0.08}
              className={`flex flex-col rounded-3xl p-7 ${p.featured ? "bg-forest text-white shadow-lift" : "bg-white ring-1 ring-line"}`}
            >
              <h3 className={`text-[1.2rem] font-semibold ${p.featured ? "!text-white" : ""}`}>{p.name}</h3>
              <p className={`mt-2 text-[0.92rem] leading-relaxed ${p.featured ? "text-white/70" : "text-slate"}`}>{p.forWho}</p>
              <div className={`my-6 border-t ${p.featured ? "border-white/15" : "border-ink/80"}`} />
              <p className={`text-[2.8rem] leading-none tracking-tight ${p.featured ? "text-white" : "text-ink"}`} style={display}>{p.price}</p>
              <p className={`mt-5 flex-1 text-[0.92rem] leading-relaxed ${p.featured ? "text-white/80" : "text-slate"}`}>{p.includes}</p>
              <BookButton arrow variant={p.featured ? "primary" : "secondary"} className="mt-7 self-start !rounded-full">
                Book strategy call
              </BookButton>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── about ── */}
      <section className="container-x pt-28 sm:pt-32">
        <Reveal className="mx-auto grid max-w-[68rem] items-center gap-10 rounded-[2.5rem] bg-white p-8 shadow-lift ring-1 ring-line sm:p-12 md:grid-cols-[1fr_auto]">
          <div>
            <p className="text-[0.75rem] font-bold uppercase tracking-[0.14em] text-brand-dark">About</p>
            <h2 className="text-h2 mt-4">LinkedIn that works. Run by someone who&rsquo;s done it.</h2>
            <p className="mt-5 max-w-xl text-[1.02rem] leading-relaxed text-slate">
              Signal House founder Umair Shahzad is an award-winning LinkedIn creator and LinkedIn Top Voice, ranked in
              the top 200 globally in Venture Capital. Before Signal House he ran LinkedIn strategy for founders in
              institutional finance and construction.
            </p>
            <p className="mt-6 text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-muted">Recognised as</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {["LinkedIn Top Voice", "Top 200 globally in Venture Capital", "Award-winning LinkedIn creator"].map((c) => (
                <span key={c} className="rounded-full bg-mist px-3 py-1.5 text-xs font-semibold text-ink ring-1 ring-line">
                  {c}
                </span>
              ))}
            </div>
          </div>
          <div className="mx-auto h-56 w-56 shrink-0 rounded-full bg-gradient-to-br from-peach via-brand-light to-brand p-1.5 sm:h-64 sm:w-64">
            <PortraitImg src={UMAIR_PHOTO} alt="Umair Shahzad" className="h-full w-full rounded-full object-cover" />
          </div>
        </Reveal>
      </section>

      {/* ── faq ── */}
      <section id="faq" className="container-x scroll-mt-28 pt-28 sm:pt-32">
        <SectionHead eyebrow="FAQ" title="Common questions before you commit." />
        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {FAQ.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.04} className="rounded-2xl bg-white p-6 ring-1 ring-line">
              <h3 className="text-[1.1rem] font-semibold">{f.q}</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-slate">{f.a}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── closing CTA (adjuice has a newsletter here; Signal House doesn't run one) ── */}
      <section className="px-4 pt-28 sm:pt-32">
        <Reveal className="mx-auto grid max-w-[72rem] items-center gap-8 rounded-[2.5rem] bg-forest px-8 py-12 sm:px-12 md:grid-cols-[1.3fr_1fr]">
          <div>
            <p className="text-[0.75rem] font-bold uppercase tracking-[0.14em] text-brand-light">Strategy call</p>
            <h2 className="text-h2 mt-4 !text-white">See what LinkedIn Ads could do for your pipeline</h2>
            <p className="mt-4 max-w-lg text-[1.02rem] leading-relaxed text-white/70">
              A 30-minute call. We&rsquo;ll look at your current spend, your targeting and your content, and tell you
              where the pipeline is.
            </p>
          </div>
          <div className="rounded-3xl bg-white/[0.06] p-6 ring-1 ring-white/10">
            <BookButton size="lg" arrow className="w-full !rounded-full">
              Book a strategy call
            </BookButton>
            <p className="mt-3 text-center text-xs text-white/50">Free, no obligation.</p>
          </div>
        </Reveal>
      </section>

      {/* ── footer ── */}
      <footer className="container-x mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-8">
        <Logo className="[&_img]:h-7" />
        <p className="text-sm text-muted">© {new Date().getFullYear()} Signal House</p>
      </footer>
    </div>
  );
}
