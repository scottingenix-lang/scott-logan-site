"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#360f5a",
        color: "#cbd5e1",
        padding: "56px 24px 40px",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "40px",
            marginBottom: "48px",
          }}
        >
          {/* Identity */}
          <div>
            <div
              style={{
                fontWeight: 700,
                fontSize: "18px",
                color: "#f8fafc",
                letterSpacing: "-0.02em",
                marginBottom: "10px",
              }}
            >
              Scott Logan
            </div>
            <p style={{ fontSize: "14px", lineHeight: "1.6", color: "#94a3b8", maxWidth: "240px" }}>
              B2B SaaS Marketing Leader building predictable pipeline engines through ABM, AI, and integrated demand systems.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div
              style={{
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#64748b",
                marginBottom: "16px",
              }}
            >
              Pages
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { label: "Case Studies", href: "/case-studies" },
                { label: "Playbooks", href: "/playbooks" },
                { label: "Insights", href: "/insights" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    fontSize: "14px",
                    color: "#94a3b8",
                    textDecoration: "none",
                    transition: "color 0.15s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLElement).style.color = "#f8fafc")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.color = "#94a3b8")
                  }
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div
              style={{
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#64748b",
                marginBottom: "16px",
              }}
            >
              Connect
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <a
                href="mailto:Scott.ingenix@gmail.com"
                style={{ fontSize: "14px", color: "#94a3b8", textDecoration: "none" }}
              >
                Scott.ingenix@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/scottjlogan"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: "14px", color: "#94a3b8", textDecoration: "none" }}
              >
                LinkedIn Profile
              </a>
              <a
                href="https://open.spotify.com/show/1OsJDdLyEmgmhoaMnglBal"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: "14px", color: "#94a3b8", textDecoration: "none" }}
              >
                Marketing Podcast
              </a>
              <a
                href="/scott-logan-resume.pdf"
                download
                style={{ fontSize: "14px", color: "#94a3b8", textDecoration: "none" }}
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid #4d1a7a",
            paddingTop: "24px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <p style={{ fontSize: "13px", color: "#475569" }}>
            © 2026 Scott Logan. All rights reserved.
          </p>
          <p style={{ fontSize: "12px", color: "#475569", fontStyle: "italic" }}>
            Built using AI-assisted development and structured as a conversion-focused marketing asset.
          </p>
        </div>
      </div>
    </footer>
  );
}
