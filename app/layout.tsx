import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Scott Logan | B2B SaaS Marketing Leader & CMO",
  description:
    "18+ years driving revenue growth through ABM, AI-powered demand generation, and full-funnel pipeline systems. 165% YoY new logo growth. 10.5X pipeline ROI.",
  keywords:
    "B2B SaaS marketing, CMO, demand generation, ABM, pipeline generation, AEO, AI marketing, VP Marketing",
  metadataBase: new URL("https://scott-logan-site.vercel.app"),
  openGraph: {
    title: "Scott Logan | B2B SaaS Marketing Leader",
    description:
      "CMO-level operator driving scalable revenue growth through ABM, AI-powered demand generation, and full-funnel pipeline systems.",
    type: "website",
    images: [
      {
        url: "/headshot.png",
        width: 1200,
        height: 630,
        alt: "Scott Logan — B2B SaaS Marketing Leader",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body
        className="min-h-full flex flex-col"
        style={{ fontFamily: "var(--font-inter), Inter, -apple-system, sans-serif" }}
      >
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
