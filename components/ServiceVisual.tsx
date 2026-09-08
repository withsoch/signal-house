// Bespoke, presentational mini-mockups - one per service slug.
// Same card idiom as the homepage Hero: white rounded-2xl cards, ring-1 ring-line,
// soft lift shadow, skeleton bars, avatar circles and brand/linkedin/leaf accents.
import { Icon } from "@/components/Icons";

/* ---------- shared primitives ---------- */

function Bar({ w = "100%", tone = "line" }: { w?: string; tone?: "line" | "brand" | "ink" }) {
  const bg = tone === "brand" ? "bg-brand/30" : tone === "ink" ? "bg-ink/15" : "bg-line";
  return <span className={`block h-2 rounded-full ${bg}`} style={{ width: w }} />;
}

function Avatar({ c, t, className = "" }: { c: string; t: string; className?: string }) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-full text-[0.6rem] font-bold text-white ${className}`}
      style={{ background: c }}
    >
      {t}
    </span>
  );
}

const card =
  "relative z-10 rounded-2xl bg-white shadow-[var(--shadow-lift)] ring-1 ring-line";
const chip =
  "absolute z-20 rounded-xl bg-white p-2.5 shadow-[var(--shadow-lift)] ring-1 ring-line";

function Stage({ children }: { children: React.ReactNode }) {
  return <div className="relative mx-auto w-full max-w-sm px-2 py-4 lg:px-3">{children}</div>;
}

/* ---------- per-service visuals ---------- */

function ProfileVisual() {
  return (
    <Stage>
      <div className="relative">
        {/* Main card */}
        <div
          className="animate-float-a overflow-hidden"
          style={{ background: "#fff", borderRadius: 16, boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }}
        >
          {/* Blue banner */}
          <div style={{ background: "#0a66c2", height: 80, position: "relative" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="James Whitfield"
              style={{ width: 72, height: 72, borderRadius: "50%", border: "3px solid white", position: "absolute", bottom: -36, left: 20, objectFit: "cover" }}
            />
            <div style={{ position: "absolute", top: 12, right: 12, background: "white", borderRadius: 20, padding: "6px 16px", fontSize: 13, fontWeight: 600, color: "#1a7a4a" }}>
              ✓ Optimised
            </div>
          </div>

          {/* Card body */}
          <div style={{ padding: "48px 20px 20px" }}>
            {/* Name + verified badge */}
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ fontSize: 15, fontWeight: 700, color: "#1a1a1a" }}>James Whitfield</span>
              <span style={{ width: 18, height: 18, borderRadius: "50%", background: "#0a66c2", color: "white", fontSize: 10, display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>✓</span>
            </div>

            {/* Headline + location */}
            <div style={{ marginTop: 8, marginBottom: 12, lineHeight: 1.4 }}>
              <p style={{ fontSize: 12, fontWeight: 500, color: "#1a1a1a" }}>Helping B2B founders close deals through LinkedIn, without cold outreach.</p>
              <p style={{ fontSize: 11, color: "#6b6560", marginTop: 4 }}>CEO · Whitfield Advisory · London, UK</p>
            </div>

            {/* Featured & Offer boxes */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 16 }}>
              <div style={{ background: "#f5f0e8", borderRadius: 8, padding: "12px 14px" }}>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 1, color: "#6b6560" }}>FEATURED</div>
                <div style={{ background: "#e8633e", height: 4, width: "50%", borderRadius: 2, marginTop: 8 }} />
                <p style={{ fontSize: 10, color: "#6b6560", marginTop: 4 }}>Case Study: 3 clients, 6 figures in 90 days</p>
              </div>
              <div style={{ background: "#f5f0e8", borderRadius: 8, padding: "12px 14px" }}>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 1, color: "#6b6560" }}>OFFER</div>
                <div style={{ background: "#e8633e", height: 4, width: "50%", borderRadius: 2, marginTop: 8 }} />
                <p style={{ fontSize: 10, color: "#6b6560", marginTop: 4 }}>Free LinkedIn Profile Audit →</p>
              </div>
            </div>
          </div>
        </div>

        {/* Floating search visibility card */}
        <div
          className="animate-float-c"
          style={{ position: "absolute", bottom: -16, left: -16, background: "white", borderRadius: 12, boxShadow: "0 4px 20px rgba(0,0,0,0.12)", padding: "12px 16px" }}
        >
          <span style={{ fontSize: 11, color: "#6b6560", display: "block" }}>Search visibility</span>
          <span style={{ fontSize: 18, fontWeight: 700, color: "#1a7a4a" }}>↑ Top 1%</span>
        </div>
      </div>
    </Stage>
  );
}

function ContentVisual() {
  return (
    <Stage>
      <div className={`${card} p-5 animate-float-a`}>
        <div className="flex items-center gap-2.5">
          <span className="inline-flex h-9 w-9 shrink-0 overflow-hidden rounded-full">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" style={{width:"100%",height:"100%",objectFit:"cover",borderRadius:"50%"}} alt="James Whitfield" />
          </span>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-ink">James Whitfield</p>
            <p className="text-xs text-muted">Founder & CEO · Whitfield Advisory</p>
          </div>
        </div>
        <div style={{ marginTop: 12, marginBottom: 14, lineHeight: 1.5 }}>
          <p style={{ fontSize: 13, fontWeight: 700, color: "#1a1a1a" }}>Most founders post once and disappear.</p>
          <p style={{ fontSize: 12, color: "#6b6560", marginTop: 6 }}>Consistency beats brilliance on LinkedIn.</p>
          <p style={{ fontSize: 12, color: "#6b6560", marginTop: 4 }}>Your audience remembers who shows up.</p>
        </div>
        <div className="mt-4 flex items-center justify-between border-t border-line pt-3">
          <div className="flex -space-x-1">
            {["#0a66c2", "#ff5c35", "#1f8a66"].map((c) => (
              <span key={c} className="h-5 w-5 rounded-full ring-2 ring-white" style={{ background: c }} />
            ))}
          </div>
          <p className="text-[0.65rem] font-medium text-muted">1,204 · 86 comments</p>
          <div style={{ display: "flex", alignItems: "center", marginLeft: "auto" }}>
            {[
              "https://randomuser.me/api/portraits/women/44.jpg",
              "https://randomuser.me/api/portraits/men/67.jpg",
              "https://randomuser.me/api/portraits/women/22.jpg",
            ].map((src, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={src} src={src} alt="" style={{ width: 24, height: 24, borderRadius: "50%", border: "2px solid white", marginLeft: i === 0 ? 0 : -8, objectFit: "cover" }} />
            ))}
          </div>
        </div>
      </div>
      <div className={`${chip} -right-1 -top-2 flex w-auto items-center gap-2 animate-float-b`}>
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand text-white">
          <Icon name="clock" className="h-4 w-4" />
        </span>
        <div className="leading-tight">
          <p className="text-[0.6rem] text-muted">Scheduled</p>
          <p className="text-xs font-semibold text-ink">Mon · 9:00</p>
        </div>
      </div>
    </Stage>
  );
}

function CompanyPageVisual() {
  const rows = [
    { t: "Whitfield Advisory posted", w: "78%" },
    { t: "3 employees reshared", w: "58%" },
  ];
  return (
    <Stage>
      <div className={`${card} overflow-hidden animate-float-a`}>
        {/* cover band + logo tile */}
        <div style={{ background: "#0a66c2", height: 68, position: "relative" }}>
          <span
            className="absolute flex items-center justify-center rounded-xl bg-white text-xs font-bold text-brand ring-1 ring-line"
            style={{ width: 52, height: 52, bottom: -26, left: 18 }}
          >
            WA
          </span>
        </div>

        <div style={{ padding: "34px 18px 18px" }}>
          <div className="flex items-start justify-between gap-3">
            <div className="leading-tight">
              <p style={{ fontSize: 14, fontWeight: 700, color: "#1a1a1a" }}>Whitfield Advisory</p>
              <p style={{ fontSize: 11, color: "#6b6560", marginTop: 4 }}>
                Management Consulting · 4,182 followers
              </p>
            </div>
            <span
              className="shrink-0 rounded-full px-3 py-1 text-[0.65rem] font-semibold text-white"
              style={{ background: "#0a66c2" }}
            >
              + Follow
            </span>
          </div>

          <div className="mt-4 space-y-3 border-t border-line pt-3.5">
            {rows.map((r) => (
              <div key={r.t} className="flex items-center gap-2.5">
                <span
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-[0.55rem] font-bold text-white"
                  style={{ background: "#0a66c2" }}
                >
                  WA
                </span>
                <div className="flex-1">
                  <p style={{ fontSize: 11, fontWeight: 600, color: "#1a1a1a" }}>{r.t}</p>
                  <span className="mt-1.5 block">
                    <Bar w={r.w} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={`${chip} -bottom-2 -right-1 w-32 animate-float-c`}>
        <p className="text-[0.6rem] font-semibold text-muted">Page views</p>
        <p className="mt-0.5 text-lg font-semibold text-leaf" style={{ fontFamily: "var(--font-display)" }}>
          ↑ 3.4<span className="text-[0.8rem]">×</span>
        </p>
      </div>
    </Stage>
  );
}

function LeadsVisual() {
  return (
    <Stage>
      <div className={`${card} p-5 animate-float-a`}>
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold text-ink">Pipeline</p>
          <span className="inline-flex items-center gap-1 text-[0.65rem] font-semibold text-leaf">
            <Icon name="target" className="h-3.5 w-3.5" /> 24 prospects
          </span>
        </div>
        <div className="mt-3.5 space-y-2.5">
          <div className="flex items-center gap-2.5 rounded-lg border border-line bg-mist/60 p-2">
            <Avatar c="#0a66c2" t="AR" className="h-7 w-7" />
            <div className="flex-1">
              <p style={{ fontSize: 13, fontWeight: 600, color: "#1a1a1a" }}>Alex Reynolds</p>
              <p style={{ fontSize: 11, color: "#6b6560", marginTop: 3 }}>MD · Reynolds Capital</p>
            </div>
            <span className="rounded-md px-2 py-0.5 text-[0.6rem] font-semibold bg-leaf/12 text-leaf">Booked call</span>
          </div>
          <div className="flex items-center gap-2.5 rounded-lg border border-line bg-mist/60 p-2">
            <Avatar c="#1f7a8c" t="JO" className="h-7 w-7" />
            <div className="flex-1">
              <p style={{ fontSize: 13, fontWeight: 600, color: "#1a1a1a" }}>Jamie Okafor</p>
              <p style={{ fontSize: 11, color: "#6b6560", marginTop: 3 }}>Founder · Okafor Ventures</p>
            </div>
            <span className="rounded-md px-2 py-0.5 text-[0.6rem] font-semibold bg-mist text-ink-soft ring-1 ring-line">Replied</span>
          </div>
          <div className="flex items-center gap-2.5 rounded-lg border border-line bg-mist/60 p-2">
            <Avatar c="#7a817d" t="MK" className="h-7 w-7" />
            <div className="flex-1">
              <p style={{ fontSize: 13, fontWeight: 600, color: "#1a1a1a" }}>Marcus Klein</p>
              <p style={{ fontSize: 11, color: "#6b6560", marginTop: 3 }}>CEO · Klein &amp; Partners</p>
            </div>
          </div>
        </div>
      </div>
      <div className={`${chip} -bottom-1 right-2 w-32 animate-float-b`}>
        <p className="text-[0.6rem] font-semibold text-muted">Calls booked</p>
        <p className="mt-0.5 text-lg font-semibold text-ink" style={{ fontFamily: "var(--font-display)" }}>
          9 <span className="text-[0.65rem] font-medium text-muted">/ mo</span>
        </p>
      </div>
    </Stage>
  );
}

function BrandingVisual() {
  const pillars = ["Authority", "Point of view", "Narrative"];
  return (
    <Stage>
      <div className={`${card} p-5 animate-float-a`}>
        <p className="text-xs font-semibold text-ink">Positioning</p>
        <div className="mt-3 space-y-2">
          {pillars.map((p, i) => (
            <div
              key={p}
              className="flex items-center gap-2.5 rounded-full border border-line bg-mist/60 px-3 py-2"
            >
              <span className="h-2 w-2 rotate-45 rounded-[2px] bg-brand" style={{ opacity: 1 - i * 0.22 }} />
              <span className="text-[0.7rem] font-semibold text-ink-soft">{p}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-xl border border-line bg-cream p-3.5">
          <span className="text-2xl leading-none text-brand" style={{ fontFamily: "var(--font-display)" }}>
            &ldquo;
          </span>
          <div className="mt-1">
            <p style={{ fontSize: 13, fontWeight: 500, color: "#1a1a1a", lineHeight: 1.5 }}>People don&apos;t follow profiles.</p>
            <p style={{ fontSize: 13, fontWeight: 500, color: "#1a1a1a", lineHeight: 1.5, marginTop: 4 }}>They follow a point of view.</p>
            <p style={{ fontSize: 11, color: "#6b6560", marginTop: 10, fontStyle: "italic" }}>James Whitfield, after 90 days</p>
          </div>
        </div>
      </div>
      <div className="absolute z-20 -right-1 top-4 flex w-auto items-center rounded-full bg-brand px-3 py-1.5 shadow-[var(--shadow-lift)] animate-float-c">
        <p className="text-xs font-semibold text-white">✦ Signature voice</p>
      </div>
    </Stage>
  );
}

function CoachingVisual() {
  return (
    <Stage>
      <div className={`${card} p-5 animate-float-a`}>
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold text-ink">Live workshop</p>
          <span className="inline-flex items-center gap-1 rounded-md bg-peach px-2 py-0.5 text-[0.6rem] font-semibold text-brand">
            <Icon name="clock" className="h-3 w-3" /> Thu · 60m
          </span>
        </div>
        <div className="mt-3.5 rounded-xl border border-line bg-mist/60 p-3">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-forest text-white">
              <Icon name="chat" className="h-4 w-4" />
            </span>
            <div className="flex-1" style={{ lineHeight: 1.4 }}>
              <p style={{ fontSize: 13, fontWeight: 600, color: "#1a1a1a" }}>LinkedIn for Founders</p>
              <p style={{ fontSize: 11, color: "#6b6560", marginTop: 4 }}>How to post with authority and turn views into calls</p>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 10, paddingTop: 10, borderTop: "1px solid #f0ece4" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#e8633e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              <span style={{ fontSize: 11, color: "#6b6560", marginLeft: 4 }}>Next session: Thu 19 Jun</span>
            </div>
            <span style={{ fontSize: 11, color: "#e8633e", fontWeight: 600 }}>12 spots left</span>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex -space-x-2">
            {[
              "https://randomuser.me/api/portraits/men/32.jpg",
              "https://randomuser.me/api/portraits/women/44.jpg",
              "https://randomuser.me/api/portraits/men/67.jpg",
            ].map((src) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={src} src={src} alt="" className="h-7 w-7 rounded-full ring-2 ring-white" style={{ objectFit: "cover" }} />
            ))}
            <Avatar c="#33403b" t="+6" className="h-7 w-7 ring-2 ring-white" />
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-lg bg-brand px-3 py-1.5 text-[0.65rem] font-semibold text-white">
            Join <Icon name="arrow" className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
      <div className={`${chip} -left-1 bottom-2 flex w-auto items-center gap-1.5 animate-float-b`}>
        <span className="text-sm font-semibold text-brand">⊘</span>
        <p className="text-xs font-semibold text-ink">1:1 coaching</p>
      </div>
    </Stage>
  );
}

function AuditVisual() {
  const checks = ["Headline optimised", "Keywords embedded", "Featured section built"];
  return (
    <Stage>
      <div className={`${card} p-5 animate-float-a`}>
        <p className="text-sm font-semibold text-ink">LinkedIn Audit</p>
        <div className="mt-3 flex items-center gap-2">
          <span className="text-[0.7rem] font-bold text-brand">◆</span>
          <span className="text-[0.75rem] font-semibold text-ink">Profile Score:</span>
          <span className="text-[0.75rem] font-semibold text-brand">94/100</span>
        </div>
        <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-line">
          <div className="h-full rounded-full bg-brand" style={{ width: "94%" }} />
        </div>
        <div className="mt-4 space-y-2.5">
          {checks.map((t) => (
            <div key={t} className="flex items-center gap-2.5">
              <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-leaf/12 text-leaf">
                <Icon name="check" className="h-2.5 w-2.5" strokeWidth={3} />
              </span>
              <span className="text-[0.7rem] text-ink-soft">{t}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={`${chip} -right-1 -top-2 flex w-auto items-center gap-2 animate-float-c`}>
        <span className="h-2 w-2 rounded-full bg-leaf" />
        <p className="text-xs font-semibold text-ink">Ready to send</p>
      </div>
    </Stage>
  );
}

const VISUALS: Record<string, () => React.JSX.Element> = {
  "profile-optimisation": ProfileVisual,
  "content-writing": ContentVisual,
  "company-page": CompanyPageVisual,
  "lead-generation": LeadsVisual,
  "personal-branding": BrandingVisual,
  "coaching-workshops": CoachingVisual,
  "growth-audit": AuditVisual,
};

export function ServiceVisual({ slug }: { slug: string }) {
  const Visual = VISUALS[slug];
  if (!Visual) {
    return (
      <Stage>
        <div className={`${card} flex items-center justify-center p-10`}>
          <Icon name="spark" className="h-10 w-10 text-brand" />
        </div>
      </Stage>
    );
  }
  return <Visual />;
}
