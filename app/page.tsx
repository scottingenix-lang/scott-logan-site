import Link from "next/link";

/* ── Shared style tokens ─────────────────────────────────── */
const MAX_W = "1280px";
const PX = "24px";

const accent = "#ff6600";
const accentLight = "#eff6ff";
const slate900 = "#360f5a";
const slate700 = "#334155";
const slate600 = "#475569";
const slate500 = "#64748b";
const slate200 = "#e2e8f0";
const slate50 = "#f8fafc";
const slate100 = "#f1f5f9";
const white = "#ffffff";

/* ── Reusable primitives ─────────────────────────────────── */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        fontSize: "12px",
        fontWeight: 700,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: accent,
        marginBottom: "16px",
      }}
    >
      <span
        style={{
          display: "inline-block",
          width: "20px",
          height: "2px",
          backgroundColor: accent,
          borderRadius: "1px",
        }}
      />
      {children}
    </div>
  );
}

function PrimaryButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        backgroundColor: accent,
        color: white,
        textDecoration: "none",
        fontWeight: 600,
        fontSize: "15px",
        padding: "13px 26px",
        borderRadius: "9px",
        transition: "background-color 0.15s ease, transform 0.1s ease",
        letterSpacing: "-0.01em",
      }}
    >
      {children}
      <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
        <path
          d="M5 12h14M13 6l6 6-6 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
}

function SecondaryButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        backgroundColor: white,
        color: slate900,
        textDecoration: "none",
        fontWeight: 600,
        fontSize: "15px",
        padding: "12px 26px",
        borderRadius: "9px",
        border: `1.5px solid ${slate200}`,
        transition: "border-color 0.15s ease, background 0.15s ease",
        letterSpacing: "-0.01em",
      }}
    >
      {children}
    </Link>
  );
}

/* ── Homepage component ──────────────────────────────────── */

export default function HomePage() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════ */}
      <section
        style={{
          backgroundColor: white,
          padding: "80px 24px 96px",
          borderBottom: `1px solid ${slate200}`,
        }}
      >
        <div
          style={{
            maxWidth: MAX_W,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 420px",
            gap: "64px",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* Left: Headline + CTA */}
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: accentLight,
                color: slate900,
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                padding: "6px 14px",
                borderRadius: "100px",
                marginBottom: "28px",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  backgroundColor: accent,
                  display: "inline-block",
                }}
              />
              Open to VP Marketing · Head of Growth · Head of Demand Gen · CMO Roles
            </div>

            <h1
              style={{
                fontSize: "clamp(36px, 5vw, 58px)",
                fontWeight: 800,
                color: slate900,
                letterSpacing: "-0.03em",
                lineHeight: "1.1",
                marginBottom: "24px",
              }}
            >
              I Build{" "}
              <span style={{ color: accent }}>AI-Native Pipeline Engines</span>{" "}
              for B2B SaaS Companies
            </h1>

            <p
              style={{
                fontSize: "19px",
                color: slate600,
                lineHeight: "1.65",
                marginBottom: "40px",
                maxWidth: "560px",
                fontWeight: 400,
              }}
            >
              Player-Coach combining ABM, demand gen, and
              AI-driven growth systems to create predictable, scalable
              pipeline.
            </p>

            <div
              style={{
                display: "flex",
                gap: "14px",
                flexWrap: "wrap",
              }}
            >
              <PrimaryButton href="/case-studies">View Case Studies</PrimaryButton>
              <SecondaryButton href="/playbooks">See My Growth Playbooks</SecondaryButton>
            </div>
          </div>

          {/* Right: Three pillars — stacked ovals */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {[
              {
                label: "AI-Driven Discovery",
                sub: "AEO / LLM visibility — built for how buyers find vendors today",
                icon: "🤖",
              },
              {
                label: "ABM + Demand Orchestration",
                sub: "ICP-targeted systems that replace siloed campaigns",
                icon: "🎯",
              },
              {
                label: "Full-Funnel Pipeline Accountability",
                sub: "Attribution, forecasting, and revenue clarity end to end",
                icon: "📊",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="float"
                style={{
                  backgroundColor: white,
                  borderRadius: "16px",
                  padding: "24px 28px",
                  border: `1px solid ${slate200}`,
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "12px",
                    backgroundColor: accentLight,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    fontSize: "24px",
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "17px",
                      fontWeight: 700,
                      color: slate900,
                      letterSpacing: "-0.02em",
                      marginBottom: "5px",
                    }}
                  >
                    {item.label}
                  </div>
                  <div style={{ fontSize: "13px", color: slate600, lineHeight: "1.5" }}>
                    {item.sub}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .hero-grid { grid-template-columns: 1fr !important; }
            .proof-card { margin-top: 8px; }
          }
        `}</style>
      </section>

      {/* ═══════════════════════════════════════════════════════
          CREDENTIALS + RESULTS BAR (two-row combined)
      ═══════════════════════════════════════════════════════ */}
      <section style={{
        position: "relative",
        zIndex: 1,
        boxShadow: "0 -1px 2px rgba(26,15,54,0.04), 0 -4px 12px rgba(26,15,54,0.07), 0 -16px 32px rgba(26,15,54,0.06)",
      }}>
        {/* Row 1: Background & experience */}
        <div style={{ background: "radial-gradient(ellipse at 5% 50%, rgba(216,180,254,0.55) 0%, transparent 65%), radial-gradient(ellipse at 28% 90%, rgba(196,181,253,0.45) 0%, transparent 55%), radial-gradient(ellipse at 70% 30%, rgba(196,181,253,0.4) 0%, transparent 45%), radial-gradient(ellipse at 90% 80%, rgba(167,139,250,0.3) 0%, transparent 40%), #f8fafc", borderBottom: `1px solid rgba(139,92,246,0.25)`, height: "110px", overflow: "hidden" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "stretch",
              height: "100%",
            }}
          >
            {/* Headshot */}
            <div style={{ flex: "0 0 219px", width: "219px", backgroundColor: white, borderRight: `1px solid ${slate200}`, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", alignSelf: "stretch" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/Scott-Logan-Cartoon.png" alt="Scott Logan" style={{ height: "90px", width: "90px", objectFit: "cover", objectPosition: "top center", borderRadius: "50%", display: "block" }} />
            </div>
            {/* B2B SaaS */}
            <div style={{ flex: "1 1 120px", padding: "4px 20px", borderRight: `1px solid ${slate200}`, display: "flex", flexDirection: "column", gap: "3px" }}>
              <span style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: slate500 }}>B2B SaaS</span>
              <span style={{ fontSize: "15px", fontWeight: 700, color: slate900, letterSpacing: "-0.01em" }}>18 years</span>
            </div>
            {/* Teams Led */}
            <div style={{ flex: "1 1 120px", padding: "4px 20px", borderRight: `1px solid ${slate200}`, display: "flex", flexDirection: "column", gap: "3px" }}>
              <span style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: slate500 }}>Teams Led</span>
              <span style={{ fontSize: "15px", fontWeight: 700, color: slate900, letterSpacing: "-0.01em" }}>2–25 people</span>
            </div>
            {/* Core Expertise */}
            <div style={{ flex: "1 1 120px", padding: "4px 20px", borderRight: `1px solid ${slate200}`, display: "flex", flexDirection: "column", gap: "3px" }}>
              <span style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: slate500 }}>Core Expertise</span>
              <span style={{ fontSize: "15px", fontWeight: 700, color: slate900, letterSpacing: "-0.01em" }}>ABM · AI · Demand Gen · Growth · Rev Ops · SEO/AEO/SEM</span>
            </div>
            {/* Industries */}
            <div style={{ flex: "1 1 120px", padding: "4px 20px", display: "flex", flexDirection: "column", gap: "3px" }}>
              <span style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: slate500 }}>Industries</span>
              <span style={{ fontSize: "15px", fontWeight: 700, color: slate900, letterSpacing: "-0.01em" }}>AI · CX · CCaaS · Sales Tech · Healthcare · Telecom</span>
            </div>
          </div>
        </div>

        {/* Row 2: Proven results */}
        <div style={{ borderBottom: `1px solid #4d1a7a`, display: "flex", position: "relative", zIndex: 2, boxShadow: "0 4px 12px rgba(26,15,54,0.10), 0 12px 28px rgba(26,15,54,0.09), 0 24px 48px rgba(26,15,54,0.07)" }}>
          {/* Quote side — white background */}
          <div
            style={{
              flex: "0 0 219px",
              width: "219px",
              backgroundColor: white,
              padding: "20px 32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRight: "1px solid #4d1a7a",
            }}
          >
            <div style={{ position: "relative", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/quote bubble.png"
                alt=""
                aria-hidden="true"
                style={{
                  position: "absolute",
                  width: "230px",
                  height: "auto",
                  mixBlendMode: "multiply",
                  pointerEvents: "none",
                  zIndex: 0,
                  opacity: 0.9,
                }}
              />
              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  fontSize: "12px",
                  fontWeight: 700,
                  fontStyle: "italic",
                  color: slate900,
                  width: "155px",
                  lineHeight: "1.5",
                  textAlign: "center",
                  padding: "8px 14px 20px",
                }}
              >
                &ldquo;Marketing helps sales sell more, faster.&rdquo;
              </div>
            </div>
          </div>

          {/* Metrics side — dark purple background */}
          <div
            style={{
              flex: 1,
              backgroundColor: slate900,
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            {[
              { metric: "165%", label: "YoY new logo revenue", sub: "Most New Logos Won" },
              { metric: "3X", label: "Demo requests in 6 months", sub: "AI/AEO strategy" },
              { metric: "10.5X", label: "Pipeline ROI on spend", sub: "Pipeline-to-spend efficiency" },
              { metric: "50%", label: "Reduction in sales cycle", sub: "15 → 7 months" },
            ].map((item, i, arr) => (
              <div
                key={i}
                style={{
                  flex: "1 1 130px",
                  padding: "20px 24px",
                  borderRight: i < arr.length - 1 ? "1px solid #4d1a7a" : "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "2px",
                }}
              >
                <span style={{ fontSize: "24px", fontWeight: 800, color: accent, letterSpacing: "-0.04em", lineHeight: "1" }}>
                  {item.metric}
                </span>
                <span style={{ fontSize: "13px", fontWeight: 600, color: "rgba(255,255,255,0.85)", lineHeight: "1.3" }}>
                  {item.label}
                </span>
                <span style={{ fontSize: "13px", color: white }}>
                  {item.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          POSITIONING STATEMENT
      ═══════════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: white, padding: "56px 24px 120px" }}>
        <div
          style={{
            maxWidth: "840px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <SectionLabel>Positioning</SectionLabel>
          <h2
            style={{
              fontSize: "clamp(26px, 4vw, 40px)",
              fontWeight: 800,
              color: slate900,
              letterSpacing: "-0.03em",
              lineHeight: "1.2",
              marginBottom: "20px",
            }}
          >
            Elements of My Pipeline Systems That Scale
          </h2>
          <p
            style={{
              fontSize: "20px",
              color: slate600,
              lineHeight: "1.65",
              maxWidth: "620px",
              margin: "0 auto",
            }}
          >
            Turning fragmented B2B SaaS marketing into repeatable pipeline systems—where marketing owns revenue, not just leads.
          </p>
        </div>

        {/* Three evidence rows — alternating bleed panels */}
        <div style={{ marginTop: "80px", overflow: "hidden" }}>

          {/* Row 1 — RIGHT panel (dark purple) */}
          <div style={{ position: "relative", minHeight: "480px", display: "flex", alignItems: "center", marginBottom: "56px" }}>
            {/* Text — left */}
            <div style={{ flex: "0 0 36%", maxWidth: "460px", padding: "56px 52px 56px 0", zIndex: 1, position: "relative" }}>
              <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: accent, marginBottom: "14px" }}>AI Search Strategy</div>
              <h3 style={{ fontSize: "clamp(20px, 2.2vw, 26px)", fontWeight: 800, color: slate900, letterSpacing: "-0.03em", lineHeight: "1.25", marginBottom: "16px" }}>
                Are You Adapting to<br />AI-Search Engines?
              </h3>
              <p style={{ fontSize: "15px", color: slate600, lineHeight: "1.75" }}>
                By optimizing for AI and LLM discovery engines—not just Google—I drove a 3X increase in demo requests in 6 months across three implementation phases.
              </p>
            </div>
            {/* Panel — bleeds right */}
            <div style={{
              position: "absolute",
              left: "36%",
              top: 0,
              bottom: 0,
              right: "-120px",
              background: `radial-gradient(ellipse at 75% 25%, rgba(139,92,246,0.65) 0%, transparent 55%), radial-gradient(ellipse at 15% 80%, rgba(192,86,250,0.45) 0%, transparent 50%), linear-gradient(135deg, #12042a 0%, #360f5a 45%, #5b1fa0 100%)`,
              borderRadius: "20px 0 0 20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "40px 120px 40px 48px",
            }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/3X-Demo-Requests.png" alt="AEO AI Search Strategy 3X Demo Requests" style={{ width: "90%", borderRadius: "10px", boxShadow: "0 12px 40px rgba(0,0,0,0.45), 0 3px 8px rgba(0,0,0,0.25)", display: "block" }} />
            </div>
          </div>

          {/* Row 2 — LEFT panel (orange) */}
          <div style={{ position: "relative", minHeight: "480px", display: "flex", alignItems: "center", marginBottom: "56px" }}>
            {/* Panel — bleeds left */}
            <div style={{
              position: "absolute",
              right: "36%",
              top: 0,
              bottom: 0,
              left: "-120px",
              background: `radial-gradient(ellipse at 20% 25%, rgba(251,191,36,0.55) 0%, transparent 50%), radial-gradient(ellipse at 80% 75%, rgba(220,38,38,0.4) 0%, transparent 50%), linear-gradient(135deg, #7c1a00 0%, #c2410c 35%, #ff6600 70%, #fb923c 100%)`,
              borderRadius: "0 20px 20px 0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "40px 48px 40px 120px",
            }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/ABM-Engagement-Strategy.png" alt="ABM Engagement Strategy" style={{ width: "90%", borderRadius: "10px", boxShadow: "0 12px 40px rgba(0,0,0,0.35), 0 3px 8px rgba(0,0,0,0.2)", display: "block" }} />
            </div>
            {/* Text — right */}
            <div style={{ marginLeft: "auto", flex: "0 0 36%", maxWidth: "460px", padding: "56px 0 56px 52px", zIndex: 1, position: "relative" }}>
              <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: accent, marginBottom: "14px" }}>ABM System</div>
              <h3 style={{ fontSize: "clamp(20px, 2.2vw, 26px)", fontWeight: 800, color: slate900, letterSpacing: "-0.03em", lineHeight: "1.25", marginBottom: "16px" }}>
                Are Your ABM Playbooks Converting?
              </h3>
              <p style={{ fontSize: "15px", color: slate600, lineHeight: "1.75" }}>
                A connected system linking ICP targeting, webinars, website traffic, and AI content—automatically triggering sales outreach when engagement thresholds are met.
              </p>
            </div>
          </div>

          {/* Row 3 — RIGHT panel (dark gray) */}
          <div style={{ position: "relative", minHeight: "480px", display: "flex", alignItems: "center" }}>
            {/* Text — left */}
            <div style={{ flex: "0 0 36%", maxWidth: "460px", padding: "56px 52px 56px 0", zIndex: 1, position: "relative" }}>
              <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: accent, marginBottom: "14px" }}>Pipeline Attribution</div>
              <h3 style={{ fontSize: "clamp(20px, 2.2vw, 26px)", fontWeight: 800, color: slate900, letterSpacing: "-0.03em", lineHeight: "1.25", marginBottom: "16px" }}>
                Do You Know Which Channels Drive the Most Revenue?
              </h3>
              <p style={{ fontSize: "15px", color: slate600, lineHeight: "1.75" }}>
                Full-funnel attribution showing how trade shows, webinars, website, and channel partners each contribute to pipeline—making every marketing dollar accountable.
              </p>
            </div>
            {/* Panel — bleeds right */}
            <div style={{
              position: "absolute",
              left: "36%",
              top: 0,
              bottom: 0,
              right: "-120px",
              background: "radial-gradient(ellipse at 75% 20%, rgba(99,102,241,0.55) 0%, transparent 52%), radial-gradient(ellipse at 15% 85%, rgba(30,64,175,0.45) 0%, transparent 50%), linear-gradient(135deg, #060d1a 0%, #0f172a 35%, #1e293b 65%, #1e3a5f 100%)",
              borderRadius: "20px 0 0 20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "40px 120px 40px 48px",
            }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/Multiple-Marketing-Channels.png" alt="Deals Influenced by Multiple Marketing Channels" style={{ width: "90%", borderRadius: "10px", boxShadow: "0 12px 40px rgba(0,0,0,0.45), 0 3px 8px rgba(0,0,0,0.25)", display: "block" }} />
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          OPERATING PRINCIPLES
      ═══════════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: white, padding: "16px 24px 80px", borderBottom: `1px solid ${slate200}` }}>
        <div style={{ maxWidth: MAX_W, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <SectionLabel>How I Operate</SectionLabel>
            <h2
              style={{
                fontSize: "clamp(22px, 3vw, 32px)",
                fontWeight: 800,
                color: slate900,
                letterSpacing: "-0.03em",
              }}
            >
              Operating Principles
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "16px",
            }}
          >
            {[
              { principle: "Build for pipeline, not vanity metrics", icon: "📊" },
              { principle: "Align tightly with sales on ICP, messaging, and timing", icon: "🤝" },
              { principle: "Create systems, not isolated campaigns", icon: "⚙️" },
              { principle: "Use AI where it improves speed and signal quality", icon: "🤖" },
              { principle: "Prioritize clarity over marketing noise", icon: "🎯" },
            ].map((item) => (
              <div
                key={item.principle}
                className="float"
                style={{
                  backgroundColor: white,
                  borderRadius: "10px",
                  padding: "24px 20px",
                  border: `1px solid ${slate200}`,
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "24px", marginBottom: "12px" }}>{item.icon}</div>
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color: slate700,
                    lineHeight: "1.5",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {item.principle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          CORE CAPABILITIES
      ═══════════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: slate50, padding: "96px 24px", borderTop: `1px solid ${slate200}`, borderBottom: `1px solid ${slate200}` }}>
        <div style={{ maxWidth: MAX_W, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <SectionLabel>Core Capabilities</SectionLabel>
            <h2
              style={{
                fontSize: "clamp(26px, 4vw, 38px)",
                fontWeight: 800,
                color: slate900,
                letterSpacing: "-0.03em",
              }}
            >
              How I Build Pipeline at Scale
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
            }}
          >
            {/* AI Card — Featured (first) */}
            <div
              className="float-dark"
              style={{
                backgroundColor: slate900,
                borderRadius: "12px",
                padding: "32px",
                border: `2px solid ${accent}`,
                position: "relative",
                gridRow: "span 1",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "-13px",
                  left: "32px",
                  backgroundColor: accent,
                  color: white,
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  padding: "4px 12px",
                  borderRadius: "100px",
                }}
              >
                AI Differentiator
              </div>

              <div
                style={{
                  width: "44px",
                  height: "44px",
                  backgroundColor: "rgba(255,102,0,0.2)",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                }}
              >
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                  <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke={accent} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  color: white,
                  letterSpacing: "-0.02em",
                  marginBottom: "12px",
                }}
              >
                Built AI-Tools to Break Sales Cycle Bottlenecks
              </h3>

              <p style={{ fontSize: "14px", color: "#94a3b8", lineHeight: "1.65", marginBottom: "20px" }}>
                I design and deploy AI-powered sales applications that remove friction at the exact points where deals stall—helping buyers connect solutions to their real-world use cases.
              </p>

              <ul style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "20px" }}>
                {[
                  "Identified Stage 1 → 2 and Stage 4 → 5 conversion gaps through pipeline analysis",
                  "Built AI content engine generating industry-specific use case narratives on demand",
                  "Created 5 AI-powered tailored demo environments aligned to key verticals",
                  "Improved deal velocity, average contract value, and deal win rate",
                ].map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "13px", color: "#94a3b8" }}>
                    <span style={{ color: accent, marginTop: "1px", flexShrink: 0 }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div
                style={{
                  borderTop: "1px solid rgba(255,102,0,0.25)",
                  paddingTop: "16px",
                  fontSize: "13px",
                  fontWeight: 600,
                  color: accent,
                  lineHeight: "1.5",
                }}
              >
                AI isn&apos;t just improving marketing—it&apos;s transforming how deals move through the funnel.
              </div>
            </div>

            {/* ABM Card */}
            <div
              className="float"
              style={{
                backgroundColor: white,
                borderRadius: "12px",
                padding: "32px",
                border: `1px solid ${slate200}`,
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  backgroundColor: accentLight,
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                }}
              >
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                  <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" stroke={accent} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  color: slate900,
                  letterSpacing: "-0.02em",
                  marginBottom: "12px",
                }}
              >
                ABM + Demand Engine Integration
              </h3>
              <p style={{ fontSize: "14px", color: slate600, lineHeight: "1.65" }}>
                ICP segmentation by industry, company size, and buying signal. Continuous multi-touch engagement replacing siloed campaigns. Sales notified when accounts hit engagement thresholds.
              </p>
              <ul style={{ marginTop: "16px", display: "flex", flexDirection: "column", gap: "8px" }}>
                {["4X more ICP target contacts in 12 months", "33% of target accounts engaged", "260% increase in Stage 1→2 conversion"].map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "13px", color: slate600 }}>
                    <span style={{ color: accent, marginTop: "1px", flexShrink: 0 }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Pipeline Attribution Card */}
            <div
              className="float"
              style={{
                backgroundColor: white,
                borderRadius: "12px",
                padding: "32px",
                border: `1px solid ${slate200}`,
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  backgroundColor: accentLight,
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                }}
              >
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                  <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" stroke={accent} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  color: slate900,
                  letterSpacing: "-0.02em",
                  marginBottom: "12px",
                }}
              >
                Pipeline Attribution & ROI Clarity
              </h3>
              <p style={{ fontSize: "14px", color: slate600, lineHeight: "1.65" }}>
                Standardized attribution across Salesforce + HubSpot tracking source and influenced pipeline. Revenue forecasting tied to real sales cycle data, not arbitrary quota math.
              </p>
              <ul style={{ marginTop: "16px", display: "flex", flexDirection: "column", gap: "8px" }}>
                {["10.5X pipeline-to-spend efficiency", "Multi-source attribution across all channels", "50% reduction in average sales cycle"].map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "13px", color: slate600 }}>
                    <span style={{ color: accent, marginTop: "1px", flexShrink: 0 }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Field + Digital + Partner Card */}
            <div
              className="float"
              style={{
                backgroundColor: white,
                borderRadius: "12px",
                padding: "32px",
                border: `1px solid ${slate200}`,
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  backgroundColor: accentLight,
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                }}
              >
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                  <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" stroke={accent} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  color: slate900,
                  letterSpacing: "-0.02em",
                  marginBottom: "12px",
                }}
              >
                Field + Digital + Partner Integration
              </h3>
              <p style={{ fontSize: "14px", color: slate600, lineHeight: "1.65" }}>
                Unified strategy across trade shows, webinars, digital, and partner networks. First three partner deals won by integrating partner motion with demand system.
              </p>
              <ul style={{ marginTop: "16px", display: "flex", flexDirection: "column", gap: "8px" }}>
                {["Trade shows: 40.9% of deal creation", "Webinars engaging 200–300 ICP contacts per event", "Channel partners driving 15.5% of deals"].map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "13px", color: slate600 }}>
                    <span style={{ color: accent, marginTop: "1px", flexShrink: 0 }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════
          WHAT BUILDING PIPELINE ACTUALLY REQUIRES
      ═══════════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: slate900, padding: "96px 24px" }}>
        <div style={{ maxWidth: MAX_W, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "64px",
              alignItems: "start",
            }}
            className="learned-grid"
          >
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: accent,
                  marginBottom: "16px",
                }}
              >
                <span style={{ display: "inline-block", width: "20px", height: "2px", backgroundColor: accent, borderRadius: "1px" }} />
                Synthesized Intelligence
              </div>
              <h2
                style={{
                  fontSize: "clamp(26px, 4vw, 38px)",
                  fontWeight: 800,
                  color: white,
                  letterSpacing: "-0.03em",
                  lineHeight: "1.2",
                  marginBottom: "20px",
                }}
              >
                What Building Pipeline Actually Requires Today
              </h2>
              <p
                style={{
                  fontSize: "16px",
                  color: "#94a3b8",
                  lineHeight: "1.7",
                }}
              >
                After years of building pipeline systems and hosting conversations with the best revenue minds in B2B, these are the truths that separate teams that grow from teams that stall.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {[
                {
                  insight: "Pipeline ownership beats lead volume",
                  detail: "MQLs are losing relevance. Measure what creates revenue, not what's easy to count.",
                },
                {
                  insight: "Speed is a competitive advantage",
                  detail: "Execution velocity wins. Teams that move faster consistently outperform those that plan longer.",
                },
                {
                  insight: "Demand is created before conversion",
                  detail: "Content drives influence before the buyer raises their hand. The journey starts before they tell you.",
                },
                {
                  insight: "Sales alignment is non-negotiable",
                  detail: "Shared pipeline wins. Misaligned teams create leakage—alignment creates multiplied output.",
                },
                {
                  insight: "AI is changing discovery",
                  detail: "Buyers rely on LLMs, not just search. Optimize for how AI actually surfaces and recommends vendors.",
                },
                {
                  insight: "Systems outperform campaigns",
                  detail: "Repeatability beats spikes. One-off efforts create activity—integrated systems create compounding growth.",
                },
              ].map((item, i, arr) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: "16px",
                    padding: "20px 0",
                    borderBottom: i < arr.length - 1 ? "1px solid #4d1a7a" : "none",
                  }}
                >
                  <div
                    style={{
                      width: "28px",
                      height: "28px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(255,102,0,0.15)",
                      border: "1px solid rgba(255,102,0,0.35)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: "2px",
                    }}
                  >
                    <svg width="12" height="12" fill="none" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7" stroke={accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "15px", fontWeight: 700, color: white, marginBottom: "4px", letterSpacing: "-0.01em" }}>
                      {item.insight}
                    </div>
                    <div style={{ fontSize: "13px", color: "#94a3b8", lineHeight: "1.55" }}>
                      {item.detail}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .learned-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          }
        `}</style>
      </section>

      {/* ═══════════════════════════════════════════════════════
          FINAL CTA
      ═══════════════════════════════════════════════════════ */}
      <section
        style={{
          background: `linear-gradient(135deg, #360f5a 0%, #1e3a8a 100%)`,
          padding: "96px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "rgba(255,255,255,0.08)",
              color: "#93c5fd",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "6px 14px",
              borderRadius: "100px",
              marginBottom: "28px",
            }}
          >
            Open to Opportunities
          </div>

          <h2
            style={{
              fontSize: "clamp(26px, 4vw, 42px)",
              fontWeight: 800,
              color: white,
              letterSpacing: "-0.03em",
              lineHeight: "1.2",
              marginBottom: "20px",
            }}
          >
            Looking for a Growth Leader Who Builds Systems—Not Just Campaigns?
          </h2>

          <p
            style={{
              fontSize: "18px",
              color: "#94a3b8",
              lineHeight: "1.65",
              marginBottom: "40px",
            }}
          >
            I work with B2B SaaS companies that need predictable pipeline, not
            just more activity.
          </p>

          <div
            style={{
              display: "flex",
              gap: "14px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: white,
                color: slate900,
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "15px",
                padding: "14px 28px",
                borderRadius: "9px",
              }}
            >
              Get in Touch
            </Link>
            <a
              href="/scott-logan-resume.pdf"
              download
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "rgba(255,255,255,0.1)",
                color: white,
                textDecoration: "none",
                fontWeight: 600,
                fontSize: "15px",
                padding: "14px 28px",
                borderRadius: "9px",
                border: "1.5px solid rgba(255,255,255,0.2)",
              }}
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
