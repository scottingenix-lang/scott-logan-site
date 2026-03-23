"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Playbooks", href: "/playbooks" },
  { label: "My Marketing Podcast", href: "/insights" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backgroundColor: scrolled ? "rgba(255,255,255,0.97)" : "#ffffff",
        borderBottom: scrolled ? "1px solid #e2e8f0" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        transition: "all 0.2s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 24px",
          height: "68px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo / Name */}
        <Link
          href="/"
          className="hidden md:block"
          style={{
            fontWeight: 700,
            fontSize: "20px",
            color: "#360f5a",
            letterSpacing: "-0.02em",
            textDecoration: "none",
          }}
        >
          Scott Logan
        </Link>

        {/* Desktop Nav */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
          className="hidden md:flex"
        >
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontSize: "14px",
                  fontWeight: active ? 600 : 450,
                  color: active ? "#ff6600" : "#475569",
                  textDecoration: "none",
                  padding: "6px 12px",
                  borderRadius: "6px",
                  transition: "color 0.15s ease, background 0.15s ease",
                }}
                onMouseEnter={(e) => {
                  if (!active) {
                    (e.target as HTMLElement).style.color = "#360f5a";
                    (e.target as HTMLElement).style.background = "#f8fafc";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!active) {
                    (e.target as HTMLElement).style.color = "#475569";
                    (e.target as HTMLElement).style.background = "transparent";
                  }
                }}
              >
                {link.label}
              </Link>
            );
          })}

          <a
            href="/scott-logan-resume.pdf"
            download
            style={{
              marginLeft: "8px",
              fontSize: "14px",
              fontWeight: 600,
              color: "#ffffff",
              backgroundColor: "#ff6600",
              textDecoration: "none",
              padding: "8px 18px",
              borderRadius: "8px",
              transition: "background-color 0.15s ease",
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.backgroundColor = "#e55a00")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.backgroundColor = "#ff6600")
            }
          >
            Resume
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="flex md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "8px",
            color: "#360f5a",
          }}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
              <path
                d="M18 6L6 18M6 6l12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
              <path
                d="M3 12h18M3 6h18M3 18h18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          style={{
            borderTop: "1px solid #e2e8f0",
            backgroundColor: "#ffffff",
            padding: "16px 24px 24px",
          }}
          className="md:hidden"
        >
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  display: "block",
                  fontSize: "16px",
                  fontWeight: active ? 600 : 400,
                  color: active ? "#ff6600" : "#334155",
                  textDecoration: "none",
                  padding: "12px 0",
                  borderBottom: "1px solid #f1f5f9",
                }}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href="/scott-logan-resume.pdf"
            download
            style={{
              display: "inline-block",
              marginTop: "16px",
              fontSize: "15px",
              fontWeight: 600,
              color: "#ffffff",
              backgroundColor: "#ff6600",
              textDecoration: "none",
              padding: "10px 22px",
              borderRadius: "8px",
            }}
          >
            Download Resume
          </a>
        </div>
      )}
    </header>
  );
}
