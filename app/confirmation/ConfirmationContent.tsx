"use client"

import { useState } from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const STEPS = [
  {
    num: 1,
    title: "I review your profile personally within 24 hours.",
    body: "Headline, about section, featured section, last ten posts. Every section.",
  },
  {
    num: 2,
    title: "You get the full breakdown over email.",
    body: "What is working, what is costing you, what to fix first. Specific to your profile.",
  },
  {
    num: 3,
    title: "Book a Strategy call with me.",
    body: "Strategy call link is in the email. Take it or leave it. Completely your call.",
  },
]

const FAQS = [
  {
    q: "What does the audit actually cover?",
    a: "We review your headline, about section, featured section, banner, and last ten posts. You get a written breakdown of what is working, what is costing you visibility, and what to fix first.",
  },
  {
    q: "How does working together work?",
    a: "We start with a strategy call to go through the audit findings. From there, most clients move into a full engagement covering profile, content, and outreach. You approve everything before it goes live.",
  },
  {
    q: "What should I have ready?",
    a: "Nothing. Just check your inbox within 24 hours. If you want to move fast, book a strategy call now so we can go through the findings together.",
  },
]

const STEP_DELAYS = [200, 350, 500]

const slideDown = (visible: boolean, delay = 0): React.CSSProperties => ({
  opacity: visible ? 1 : 0,
  transform: visible ? 'translateY(0)' : 'translateY(-20px)',
  transition: `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms`,
  willChange: 'opacity, transform',
})

const fadeUp = (visible: boolean, delay = 0): React.CSSProperties => ({
  opacity: visible ? 1 : 0,
  transform: visible ? 'translateY(0)' : 'translateY(40px)',
  transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
  willChange: 'opacity, transform',
})

const slideLeft = (visible: boolean, delay = 0): React.CSSProperties => ({
  opacity: visible ? 1 : 0,
  transform: visible ? 'translateX(0)' : 'translateX(-20px)',
  transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
  willChange: 'opacity, transform',
})

const fadeIn = (visible: boolean, delay = 0): React.CSSProperties => ({
  opacity: visible ? 1 : 0,
  transition: `opacity 0.6s ease ${delay}ms`,
  willChange: 'opacity',
})

export function ConfirmationContent() {
  const [heroRef, heroVisible] = useScrollAnimation(0)
  const [bodyRef, bodyVisible] = useScrollAnimation()
  const [faqRef, faqVisible] = useScrollAnimation()

  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [hoveredFaq, setHoveredFaq] = useState<number | null>(null)

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .conf-hero { padding: 24px !important; }
          .conf-hero-inner { flex-direction: column !important; align-items: flex-start !important; gap: 16px !important; }
          .conf-body { margin: 24px !important; }
          .conf-body-grid { grid-template-columns: 1fr !important; }
          .conf-body-left { border-right: none !important; border-bottom: 1px solid #f0ece4 !important; }
          .conf-faq { margin: 24px !important; }
        }
      `}</style>

      {/* ── SECTION 1: HERO BAR ──────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="conf-hero"
        style={{
          background: "#1a1a1a",
          padding: "28px 56px",
          borderBottom: "1px solid #2a2a2a",
          ...slideDown(heroVisible),
        }}
      >
        <div
          className="conf-hero-inner"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Left: circle + text */}
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                width: 48,
                height: 48,
                background: "#2a6a3a",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
                <path d="M1.5 8L7 13.5L18.5 2" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <div>
              <p
                style={{
                  fontSize: 11,
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  color: "#e8633e",
                  fontWeight: 700,
                  margin: "0 0 4px",
                }}
              >
                LINKEDIN AUDIT · SUBMITTED
              </p>
              <h1
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 36,
                  fontWeight: 800,
                  color: "white",
                  lineHeight: 1.1,
                  margin: 0,
                }}
              >
                Your profile is with us.
              </h1>
              <p style={{ fontSize: 14, color: "#a09a94", margin: "4px 0 0" }}>
                Two quick things below before we send the audit.
              </p>
            </div>
          </div>

          {/* Right: confirmed pill */}
          <div
            style={{
              background: "#1e3a28",
              color: "#4ade80",
              borderRadius: 20,
              padding: "8px 16px",
              fontSize: 13,
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            ● Your audit is confirmed
          </div>
        </div>
      </section>

      {/* ── SECTION 2: TWO COLUMN BODY ───────────────────────────────── */}
      <div
        ref={bodyRef}
        className="conf-body"
        style={{
          border: "1px solid #ebe8e2",
          borderRadius: 16,
          margin: "32px 56px",
          overflow: "hidden",
          background: "white",
          boxShadow: "0 4px 32px rgba(0,0,0,0.08)",
          ...fadeUp(bodyVisible, 100),
        }}
      >
        <div
          className="conf-body-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}
        >
          {/* LEFT COLUMN */}
          <div
            className="conf-body-left"
            style={{ padding: 40, borderRight: "1px solid #f0ece4" }}
          >
            <p
              style={{
                fontSize: 11,
                textTransform: "uppercase",
                letterSpacing: "2px",
                color: "#e8633e",
                fontWeight: 700,
                margin: "0 0 8px",
              }}
            >
              STEP 1 · WHAT HAPPENS NEXT
            </p>

            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 22,
                fontWeight: 700,
                color: "#1a1a1a",
                lineHeight: 1.2,
                margin: "0 0 24px",
              }}
            >
              Three things, in order.
            </h2>

            {STEPS.map((step, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: 16,
                  alignItems: "flex-start",
                  marginBottom: 0,
                  paddingBottom: 24,
                  marginTop: i === 0 ? 0 : 24,
                  borderBottom: i < STEPS.length - 1 ? "1px solid #f5f2ed" : "none",
                  ...slideLeft(bodyVisible, STEP_DELAYS[i]),
                }}
              >
                <div
                  style={{
                    width: 28,
                    height: 28,
                    background: "#fdf0ec",
                    color: "#e8633e",
                    borderRadius: "50%",
                    fontWeight: 700,
                    fontSize: 14,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {step.num}
                </div>
                <div>
                  <p style={{ fontSize: 15, fontWeight: 600, color: "#1a1a1a", margin: "0 0 4px", lineHeight: 1.4 }}>
                    {step.title}
                  </p>
                  <p style={{ fontSize: 13, color: "#6b6560", lineHeight: 1.6, margin: 0 }}>
                    {step.body}
                  </p>
                </div>
              </div>
            ))}

            {/* Info box */}
            <div
              style={{
                borderLeft: "3px solid #e8633e",
                borderRadius: 8,
                padding: "16px 20px",
                marginTop: 24,
                background: "#fdf8f5",
                ...fadeIn(bodyVisible, 600),
              }}
            >
              <p style={{ fontSize: 13, fontWeight: 600, color: "#1a1a1a", margin: "0 0 4px" }}>
                Umair reviews every profile personally.
              </p>
              <p style={{ fontSize: 12, color: "#6b6560", lineHeight: 1.6, margin: 0 }}>
                Not a template. Not a tool. If you don&apos;t hear back within 24 hours, email{" "}
                <a
                  href="mailto:umair@withsignalhouse.com"
                  style={{ color: "#e8633e", textDecoration: "none", fontWeight: 600 }}
                >
                  umair@withsignalhouse.com
                </a>
              </p>
            </div>

            {/* Divider */}
            <div style={{ borderTop: "1px solid #f0ece4", margin: "24px 0" }} />

            <p
              style={{
                fontSize: 11,
                textTransform: "uppercase",
                letterSpacing: "2px",
                color: "#6b6560",
                fontWeight: 600,
                margin: "0 0 8px",
              }}
            >
              WHILE YOU WAIT
            </p>
            <a
              href="#video-section"
              style={{ fontSize: 13, color: "#e8633e", fontWeight: 600, textDecoration: "none" }}
            >
              Watch Umair&apos;s LinkedIn breakdown →
            </a>
          </div>

          {/* RIGHT COLUMN */}
          <div style={{ padding: 40 }}>
            <p
              style={{
                fontSize: 11,
                textTransform: "uppercase",
                letterSpacing: "2px",
                color: "#e8633e",
                fontWeight: 700,
                margin: "0 0 8px",
              }}
            >
              STEP 2 · WATCH FIRST, 3 MIN
            </p>

            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 22,
                fontWeight: 700,
                color: "#1a1a1a",
                lineHeight: 1.2,
                margin: "0 0 8px",
              }}
            >
              A quick word from Umair.
            </h2>

            <p style={{ fontSize: 14, color: "#6b6560", lineHeight: 1.6, margin: "0 0 24px" }}>
              What the audit covers, what it doesn&apos;t, and the one thing worth thinking through before we send it.
            </p>

            <div
              id="video-section"
              style={{
                borderRadius: 12,
                overflow: "hidden",
                aspectRatio: "16/9",
                position: "relative",
                width: "100%",
                ...fadeUp(bodyVisible, 300),
              }}
            >
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/Y_L9g_aFQsM"
                title="A quick word from Umair"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: "none",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── SECTION 3: FAQ ACCORDION ─────────────────────────────────── */}
      <div
        ref={faqRef}
        className="conf-faq"
        style={{
          background: "white",
          margin: "24px 56px",
          border: "1px solid #f0ece4",
          borderRadius: 16,
          overflow: "hidden",
          boxShadow: "0 2px 16px rgba(0,0,0,0.05)",
        }}
      >
        {FAQS.map((item, i) => (
          <div
            key={i}
            style={{
              borderBottom: i < FAQS.length - 1 ? "1px solid #f0ece4" : "none",
              ...fadeUp(faqVisible, i * 100),
            }}
          >
            <button
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
              onMouseEnter={() => setHoveredFaq(i)}
              onMouseLeave={() => setHoveredFaq(null)}
              style={{
                width: "100%",
                padding: "20px 24px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                cursor: "pointer",
                background: hoveredFaq === i ? "#fafaf8" : "none",
                border: "none",
                textAlign: "left",
                transition: "background 0.15s ease",
              }}
            >
              <span style={{ fontSize: 15, fontWeight: 600, color: "#1a1a1a" }}>
                {item.q}
              </span>
              <span
                style={{
                  color: "#e8633e",
                  fontSize: 20,
                  fontWeight: 400,
                  flexShrink: 0,
                  marginLeft: 16,
                  lineHeight: 1,
                }}
              >
                {openFaq === i ? "−" : "+"}
              </span>
            </button>

            {openFaq === i && (
              <div style={{ padding: "0 24px 20px" }}>
                <p style={{ fontSize: 13, color: "#6b6560", lineHeight: 1.6, margin: 0 }}>
                  {item.a}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

    </>
  )
}
