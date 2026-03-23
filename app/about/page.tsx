import Image from "next/image";
import Link from "next/link";

const accent = "#ff6600";
const accentLight = "#eff6ff";
const slate900 = "#360f5a";
const slate700 = "#334155";
const slate600 = "#475569";
const slate500 = "#64748b";
const slate200 = "#e2e8f0";
const slate100 = "#f1f5f9";
const slate50 = "#f8fafc";
const white = "#ffffff";

const career = [
  {
    company: "AmplifAI",
    role: "Chief Marketing Officer",
    period: "Dec 2024 – Present",
    highlights: [
      "165% YoY new logo revenue growth — company record",
      "3X increase in inbound demo requests in 6 months via AEO/GEO strategy",
      "10.5X pipeline-to-spend efficiency",
      "Won company's first three channel partner deals",
      "Reduced sales cycle from 15 months to 7 months average",
    ],
  },
  {
    company: "Independent Consulting",
    role: "Marketing & Demand Generation",
    period: "Dec 2023 – Dec 2024",
    highlights: [
      "70% QoQ pipeline growth through targeted ABM programs",
      "64% pipeline growth via demand generation strategy refinement",
      "Built Salesforce attribution, automation, and lead routing infrastructure",
    ],
  },
  {
    company: "Kronologic",
    role: "Chief Marketing Officer",
    period: "Jan 2021 – Dec 2023",
    highlights: [
      "Scaled ARR from $750K to $3.5M in 18 months",
      "Positioned narrative to secure $10M Series A funding",
      "Secured Gartner Cool Vendor recognition within 6 months",
      "Built Johns Hopkins research partnership for third-party validation",
    ],
  },
  {
    company: "Revenue.io",
    role: "Head of Demand Generation",
    period: "May 2019 – Jan 2021",
    highlights: [
      "Grew pipeline 10X and increased deal volume 300%",
      "Increased marketing-sourced revenue 5X ($8M → $14M)",
      "Improved SDR-to-opportunity conversion 18%",
    ],
  },
  {
    company: "Insidesales.com",
    role: "Director, Demand Generation",
    period: "Jan 2018 – May 2019",
    highlights: [
      "Drove 31% MoM growth in deal creation",
      "Generated 11 Fortune 1000 deals through ABM in Q1 of program",
      "Created 51 enterprise opportunities from executive events",
    ],
  },
  {
    company: "Enghouse Interactive",
    role: "VP, Marketing",
    period: "May 2014 – Oct 2016",
    highlights: [
      "Led global marketing across US, UK, Australia, and New Zealand",
      "Revenue grew from $179M to $304M during tenure",
      "2015 & 2016 Frost & Sullivan Contact Center Awards (NA & EMEA)",
      "Moved Gartner MQ positioning from Niche to Challenger",
    ],
  },
];

const awards = [
  "2024–25 Channel Marketing Association Visionary Excellence Award",
  "2023 Top Demand Generation Practitioner — Signals Revenue Summit",
  "2022 & 2020 Gartner Cool Vendor Report — Go-to-Market Technology",
  "2022 Forrester Total Economic Impact Report",
  "2022 G2 Leader, High Performer, Best Support, Users Love Us",
  "2020 Sendoso Sendie Award — Best Overall Strategy",
  "2020 Forrester Wave Strong Performer — Sales Engagement",
  "2018 AA-ISP Best Sales Acceleration Provider",
  "LinkedIn Customer Advisory Board — Sales Navigator (3 years)",
  "Eloqua Markie Winner: One View of the Truth",
  "2013 NICE/inContact President's Club (only marketing winner)",
];

const expertise = [
  "Demand Generation & ABM",
  "AI-Powered Search (AEO/GEO)",
  "Pipeline Attribution & Forecasting",
  "Product Marketing & Positioning",
  "Channel & Partner Marketing",
  "Sales Enablement",
  "Revenue Operations",
  "Go-to-Market Strategy",
  "Category Creation",
  "Executive Leadership",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          backgroundColor: white,
          borderBottom: `1px solid ${slate200}`,
          padding: "72px 24px 80px",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 340px",
            gap: "80px",
            alignItems: "start",
          }}
          className="about-hero-grid"
        >
          {/* Bio */}
          <div>
            <div
              style={{
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: accent,
                marginBottom: "16px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span style={{ display: "inline-block", width: "20px", height: "2px", backgroundColor: accent, borderRadius: "1px" }} />
              About
            </div>
            <h1
              style={{
                fontSize: "clamp(32px, 5vw, 52px)",
                fontWeight: 800,
                color: slate900,
                letterSpacing: "-0.03em",
                marginBottom: "24px",
              }}
            >
              Scott Logan
            </h1>
            <p
              style={{
                fontSize: "20px",
                fontWeight: 600,
                color: accent,
                marginBottom: "28px",
                letterSpacing: "-0.01em",
              }}
            >
              AI-Powered Growth & Marketing Leader
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "16px", color: slate700, lineHeight: "1.75" }}>
                I&apos;ve spent 18+ years driving revenue growth for B2B SaaS and AI platforms—building the systems that connect marketing execution directly to pipeline and revenue outcomes. My career spans CMO, VP Marketing, and Head of Demand Gen roles across companies ranging from early-stage startups to $300M+ enterprise software firms.
              </p>
              <p style={{ fontSize: "16px", color: slate700, lineHeight: "1.75" }}>
                What sets me apart isn&apos;t the number of campaigns I&apos;ve run—it&apos;s that I consistently build integrated, measurable pipeline engines that keep working after the initial build. I&apos;ve led teams of 2 to 25, managed budgets up to $12M, and built marketing functions across US, UK, Australia, and New Zealand.
              </p>
              <p style={{ fontSize: "16px", color: slate700, lineHeight: "1.75" }}>
                I&apos;m currently at the leading edge of AI-native marketing—having built and deployed AEO/GEO strategies that achieved #1 GenAI citation share, AI-powered content engines for ABM personalization, and AI prospecting systems that eliminate early-stage sales bottlenecks.
              </p>
              <p style={{ fontSize: "16px", color: slate700, lineHeight: "1.75" }}>
                I&apos;m based in Salt Lake City, UT, and open to B2B SaaS marketing leadership opportunities including VP Marketing, Head of Demand Gen, Growth Marketing Leader, and CMO roles.
              </p>
            </div>

            <div
              style={{
                display: "flex",
                gap: "14px",
                marginTop: "32px",
                flexWrap: "wrap",
              }}
            >
              <Link
                href="/contact"
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
                }}
              >
                Get in Touch
              </Link>
              <a
                href="https://www.linkedin.com/in/scottjlogan"
                target="_blank"
                rel="noopener noreferrer"
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
                }}
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Photo + stats card */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {/* Headshot */}
            <div
              style={{
                width: "100%",
                aspectRatio: "3/4",
                backgroundColor: slate100,
                borderRadius: "14px",
                overflow: "hidden",
                border: `1px solid ${slate200}`,
                position: "relative",
              }}
            >
              <Image
                src="/family-picture.jpg"
                alt="Scott Logan and family"
                fill
                style={{ objectFit: "cover", objectPosition: "top center" }}
                priority
              />
            </div>

            {/* Quick stats */}
            <div
              className="float-dark"
              style={{
                backgroundColor: slate900,
                borderRadius: "12px",
                padding: "24px",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "16px",
              }}
            >
              {[
                { label: "Experience", value: "18+ yrs" },
                { label: "Teams Led", value: "2–25" },
                { label: "Budgets", value: "Up to $12M" },
                { label: "Industries", value: "AI, CX, SaaS" },
              ].map((s) => (
                <div key={s.label}>
                  <div style={{ fontSize: "20px", fontWeight: 800, color: white, letterSpacing: "-0.03em" }}>{s.value}</div>
                  <div style={{ fontSize: "12px", color: "#64748b", marginTop: "2px" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section style={{ backgroundColor: slate50, padding: "72px 24px", borderBottom: `1px solid ${slate200}` }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ marginBottom: "40px" }}>
            <div
              style={{
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: accent,
                marginBottom: "12px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span style={{ display: "inline-block", width: "20px", height: "2px", backgroundColor: accent, borderRadius: "1px" }} />
              Areas of Expertise
            </div>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 800, color: slate900, letterSpacing: "-0.03em" }}>
              What I Bring to the Table
            </h2>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "40px" }}>
            {expertise.map((item) => (
              <span
                key={item}
                style={{
                  backgroundColor: white,
                  border: `1.5px solid ${slate200}`,
                  color: slate700,
                  fontSize: "14px",
                  fontWeight: 600,
                  padding: "9px 18px",
                  borderRadius: "8px",
                }}
              >
                {item}
              </span>
            ))}
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "20px",
            }}
          >
            {[
              {
                label: "Tech Stack",
                items: ["Salesforce", "HubSpot", "Marketo", "6sense", "ZoomInfo", "Outreach.io / Salesloft", "Claude Code", "AI content platforms"],
              },
              {
                label: "B2B Software Industries",
                items: ["AI / ML Platforms", "Customer Experience (CX)", "CCaaS", "Sales/Marketing Automation", "Healthcare Tech", "Telecom"],
              },
              {
                label: "Coverage & Recognition",
                items: ["Gartner (Cool Vendor, Magic Quadrant)", "Forrester (TEI, Wave)", "G2 Leader", "Johns Hopkins University Study", "Frost & Sullivan Awards"],
              },
            ].map((col) => (
              <div key={col.label} className="float" style={{ backgroundColor: white, borderRadius: "10px", padding: "24px", border: `1px solid ${slate200}` }}>
                <div style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: slate500, marginBottom: "14px" }}>
                  {col.label}
                </div>
                <ul style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  {col.items.map((item) => (
                    <li key={item} style={{ display: "flex", gap: "8px", alignItems: "flex-start", fontSize: "14px", color: slate700 }}>
                      <span style={{ color: accent, flexShrink: 0 }}>·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career History */}
      <section style={{ backgroundColor: white, padding: "72px 24px", borderBottom: `1px solid ${slate200}` }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ marginBottom: "48px" }}>
            <div
              style={{
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: accent,
                marginBottom: "12px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span style={{ display: "inline-block", width: "20px", height: "2px", backgroundColor: accent, borderRadius: "1px" }} />
              Career History
            </div>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 800, color: slate900, letterSpacing: "-0.03em" }}>
              18+ Years of Revenue Growth
            </h2>
          </div>

          <div style={{ position: "relative" }}>
            {/* Timeline line */}
            <div
              style={{
                position: "absolute",
                left: "20px",
                top: "0",
                bottom: "0",
                width: "2px",
                backgroundColor: slate200,
              }}
              className="timeline-line"
            />

            <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
              {career.map((job, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: "32px",
                    alignItems: "flex-start",
                    position: "relative",
                  }}
                  className="timeline-item"
                >
                  {/* Dot */}
                  <div
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "50%",
                      backgroundColor: i === 0 ? accent : white,
                      border: `2px solid ${i === 0 ? accent : slate200}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      zIndex: 1,
                    }}
                    className="timeline-dot"
                  >
                    <div
                      style={{
                        width: "10px",
                        height: "10px",
                        borderRadius: "50%",
                        backgroundColor: i === 0 ? white : slate200,
                      }}
                    />
                  </div>

                  <div style={{ flex: 1, paddingBottom: i < career.length - 1 ? "8px" : "0" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px", marginBottom: "8px" }}>
                      <div>
                        <h3 style={{ fontSize: "18px", fontWeight: 700, color: slate900, letterSpacing: "-0.02em" }}>{job.company}</h3>
                        <p style={{ fontSize: "14px", color: accent, fontWeight: 600, marginTop: "2px" }}>{job.role}</p>
                      </div>
                      <span style={{ fontSize: "13px", color: slate500, whiteSpace: "nowrap" }}>{job.period}</span>
                    </div>
                    <ul style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                      {job.highlights.map((h, j) => (
                        <li key={j} style={{ display: "flex", gap: "8px", alignItems: "flex-start", fontSize: "14px", color: slate600, lineHeight: "1.5" }}>
                          <span style={{ color: accent, flexShrink: 0, marginTop: "1px" }}>→</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section style={{ backgroundColor: slate50, padding: "72px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ marginBottom: "40px" }}>
            <div
              style={{
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: accent,
                marginBottom: "12px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span style={{ display: "inline-block", width: "20px", height: "2px", backgroundColor: accent, borderRadius: "1px" }} />
              Recognition
            </div>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 800, color: slate900, letterSpacing: "-0.03em" }}>
              Awards & Analyst Coverage
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "12px" }}>
            {awards.map((award, i) => (
              <div
                key={i}
                className="float"
                style={{
                  backgroundColor: white,
                  borderRadius: "8px",
                  padding: "16px 20px",
                  border: `1px solid ${slate200}`,
                  display: "flex",
                  gap: "12px",
                  alignItems: "flex-start",
                }}
              >
                <span style={{ color: accent, fontSize: "16px", flexShrink: 0, marginTop: "1px" }}>★</span>
                <span style={{ fontSize: "13px", color: slate700, lineHeight: "1.5" }}>{award}</span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "40px", padding: "24px 28px", backgroundColor: slate900, borderRadius: "12px" }}>
            <p style={{ fontSize: "13px", color: "#ffffff", fontStyle: "italic" }}>
              Built using AI-assisted development and structured as a conversion-focused marketing asset. This site demonstrates the same AI-native systems I build for B2B SaaS companies.
            </p>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .about-hero-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .timeline-line { left: 16px !important; }
          .timeline-dot { width: 34px !important; height: 34px !important; }
          .timeline-item { gap: 20px !important; }
        }
      `}</style>
    </>
  );
}
