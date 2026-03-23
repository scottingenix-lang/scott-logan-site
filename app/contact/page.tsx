"use client";

const accent = "#ff6600";
const accentLight = "#eff6ff";
const slate900 = "#360f5a";
const slate700 = "#334155";
const slate600 = "#475569";
const slate500 = "#64748b";
const slate200 = "#e2e8f0";
const slate50 = "#f8fafc";
const white = "#ffffff";

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          background: `linear-gradient(135deg, #360f5a 0%, #1e3a8a 100%)`,
          padding: "80px 24px 72px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "640px", margin: "0 auto" }}>
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
          <h1
            style={{
              fontSize: "clamp(28px, 5vw, 48px)",
              fontWeight: 800,
              color: white,
              letterSpacing: "-0.03em",
              lineHeight: "1.2",
              marginBottom: "20px",
            }}
          >
            Let&apos;s Talk About Building Pipeline at Scale
          </h1>
          <p
            style={{
              fontSize: "18px",
              color: "#94a3b8",
              lineHeight: "1.65",
            }}
          >
            I&apos;m open to VP Marketing, Head of Demand Gen, Growth Marketing Leader, and CMO conversations at B2B SaaS companies ready to build a real pipeline engine.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section style={{ backgroundColor: slate50, padding: "80px 24px" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "20px",
              marginBottom: "56px",
            }}
          >
            {/* Email */}
            <a
              href="mailto:Scott.ingenix@gmail.com"
              style={{ textDecoration: "none" }}
            >
              <div
                style={{
                  backgroundColor: white,
                  borderRadius: "14px",
                  padding: "32px",
                  border: `1px solid ${slate200}`,
                  textAlign: "center",
                  transition: "box-shadow 0.2s ease, border-color 0.2s ease",
                  cursor: "pointer",
                  height: "100%",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.boxShadow = "0 8px 32px rgba(29,78,216,0.1)";
                  el.style.borderColor = accent;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.boxShadow = "none";
                  el.style.borderColor = slate200;
                }}
              >
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    backgroundColor: accentLight,
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                  }}
                >
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke={accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div style={{ fontSize: "13px", fontWeight: 700, color: slate500, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "8px" }}>Email</div>
                <div style={{ fontSize: "15px", fontWeight: 600, color: slate900 }}>Scott.ingenix@gmail.com</div>
                <div style={{ fontSize: "13px", color: slate500, marginTop: "6px" }}>Best for initial outreach</div>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/scottjlogan"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <div
                style={{
                  backgroundColor: white,
                  borderRadius: "14px",
                  padding: "32px",
                  border: `1px solid ${slate200}`,
                  textAlign: "center",
                  transition: "box-shadow 0.2s ease, border-color 0.2s ease",
                  cursor: "pointer",
                  height: "100%",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.boxShadow = "0 8px 32px rgba(29,78,216,0.1)";
                  el.style.borderColor = "#0077b5";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.boxShadow = "none";
                  el.style.borderColor = slate200;
                }}
              >
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    backgroundColor: "#e7f0f8",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#0077b5">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div style={{ fontSize: "13px", fontWeight: 700, color: slate500, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "8px" }}>LinkedIn</div>
                <div style={{ fontSize: "15px", fontWeight: 600, color: slate900 }}>linkedin.com/in/scottjlogan</div>
                <div style={{ fontSize: "13px", color: slate500, marginTop: "6px" }}>Connect and message</div>
              </div>
            </a>

            {/* Resume */}
            <a
              href="/scott-logan-resume.pdf"
              download
              style={{ textDecoration: "none" }}
            >
              <div
                style={{
                  backgroundColor: white,
                  borderRadius: "14px",
                  padding: "32px",
                  border: `1px solid ${slate200}`,
                  textAlign: "center",
                  transition: "box-shadow 0.2s ease, border-color 0.2s ease",
                  cursor: "pointer",
                  height: "100%",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.boxShadow = "0 8px 32px rgba(29,78,216,0.1)";
                  el.style.borderColor = accent;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.boxShadow = "none";
                  el.style.borderColor = slate200;
                }}
              >
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    backgroundColor: accentLight,
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                  }}
                >
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" stroke={accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div style={{ fontSize: "13px", fontWeight: 700, color: slate500, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "8px" }}>Resume</div>
                <div style={{ fontSize: "15px", fontWeight: 600, color: slate900 }}>Download PDF</div>
                <div style={{ fontSize: "13px", color: slate500, marginTop: "6px" }}>Full career history</div>
              </div>
            </a>

            {/* Podcast */}
            <a
              href="https://open.spotify.com/show/1OsJDdLyEmgmhoaMnglBal"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <div
                style={{
                  backgroundColor: white,
                  borderRadius: "14px",
                  padding: "32px",
                  border: `1px solid ${slate200}`,
                  textAlign: "center",
                  transition: "box-shadow 0.2s ease, border-color 0.2s ease",
                  cursor: "pointer",
                  height: "100%",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.boxShadow = "0 8px 32px rgba(29,78,216,0.1)";
                  el.style.borderColor = "#1db954";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.boxShadow = "none";
                  el.style.borderColor = slate200;
                }}
              >
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    backgroundColor: "#e6f7ec",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#1db954">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                  </svg>
                </div>
                <div style={{ fontSize: "13px", fontWeight: 700, color: slate500, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "8px" }}>Podcast</div>
                <div style={{ fontSize: "15px", fontWeight: 600, color: slate900 }}>Listen on Spotify</div>
                <div style={{ fontSize: "13px", color: slate500, marginTop: "6px" }}>Revenue Leader conversations</div>
              </div>
            </a>
          </div>

          {/* What I'm looking for */}
          <div
            className="float contact-detail-grid"
            style={{
              backgroundColor: white,
              borderRadius: "16px",
              padding: "40px 40px",
              border: `1px solid ${slate200}`,
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "40px",
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: "22px",
                  fontWeight: 800,
                  color: slate900,
                  letterSpacing: "-0.02em",
                  marginBottom: "16px",
                }}
              >
                What I&apos;m Looking For
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {[
                  "VP Marketing, Head of Demand Gen, Growth Marketing Leader, or CMO roles",
                  "B2B SaaS companies with $5M–$100M ARR range",
                  "Pipeline ownership — not just brand or top-of-funnel",
                  "Sales-aligned GTM teams willing to build integrated systems",
                  "Environments where AI-native marketing is a priority",
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                    <span style={{ color: accent, flexShrink: 0, marginTop: "2px" }}>→</span>
                    <span style={{ fontSize: "14px", color: slate700, lineHeight: "1.55" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2
                style={{
                  fontSize: "22px",
                  fontWeight: 800,
                  color: slate900,
                  letterSpacing: "-0.02em",
                  marginBottom: "16px",
                }}
              >
                What You Can Expect
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {[
                  "A strategic operator, not just a campaign manager",
                  "Revenue-first thinking across every marketing decision",
                  "Practical AI integration that accelerates execution",
                  "Tight sales alignment built from day one",
                  "Systems designed to grow with your team—not dependent on you",
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                    <span style={{ color: accent, flexShrink: 0, marginTop: "2px" }}>✓</span>
                    <span style={{ fontSize: "14px", color: slate700, lineHeight: "1.55" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Direct CTA */}
          <div
            className="float-dark"
            style={{
              backgroundColor: slate900,
              borderRadius: "14px",
              padding: "40px",
              textAlign: "center",
              marginTop: "24px",
            }}
          >
            <h3 style={{ fontSize: "22px", fontWeight: 800, color: white, letterSpacing: "-0.02em", marginBottom: "12px" }}>
              Ready to start the conversation?
            </h3>
            <p style={{ fontSize: "15px", color: "#94a3b8", marginBottom: "24px" }}>
              Email is best. I respond quickly.
            </p>
            <a
              href="mailto:Scott.ingenix@gmail.com"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: accent,
                color: white,
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "15px",
                padding: "14px 28px",
                borderRadius: "9px",
              }}
            >
              Scott.ingenix@gmail.com
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 700px) {
          .contact-detail-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
