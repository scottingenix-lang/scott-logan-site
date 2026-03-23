import Link from "next/link";

const accent = "#ff6600";
const accentLight = "#eff6ff";
const slate900 = "#360f5a";
const slate700 = "#334155";
const slate600 = "#475569";
const slate500 = "#64748b";
const slate200 = "#e2e8f0";
const slate50 = "#f8fafc";
const white = "#ffffff";

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        fontSize: "11px",
        fontWeight: 600,
        backgroundColor: accentLight,
        color: accent,
        padding: "3px 10px",
        borderRadius: "100px",
      }}
    >
      {children}
    </span>
  );
}

export default function CaseStudiesPage() {
  return (
    <>
      {/* Page Hero */}
      <section
        style={{
          backgroundColor: slate50,
          borderBottom: `1px solid ${slate200}`,
          padding: "72px 24px 64px",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
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
            Portfolio
          </div>
          <h1
            style={{
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: 800,
              color: slate900,
              letterSpacing: "-0.03em",
              marginBottom: "20px",
            }}
          >
            Case Studies in Revenue Growth
          </h1>
          <p
            style={{
              fontSize: "18px",
              color: slate600,
              lineHeight: "1.65",
              maxWidth: "600px",
            }}
          >
            These are real-life examples of repeatable go-to-market systems that scaled pipeline and revenue in 2025.
          </p>
        </div>
      </section>

      {/* Case Study 1: 10.5X Pipeline */}
      <section style={{ backgroundColor: white, padding: "80px 24px", borderBottom: `1px solid ${slate200}` }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "320px 1fr",
              gap: "64px",
              alignItems: "start",
            }}
            className="cs-grid"
          >
            {/* Sticky summary */}
            <div
              className="float-dark"
              style={{
                position: "sticky",
                top: "88px",
                backgroundColor: slate900,
                borderRadius: "14px",
                padding: "32px",
              }}
            >
              <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#ff6600", marginBottom: "8px" }}>
                Case Study 01
              </div>
              <h2 style={{ fontSize: "22px", fontWeight: 800, color: white, letterSpacing: "-0.02em", lineHeight: "1.3", marginBottom: "20px" }}>
                Built AI-Tools to Break Sales Cycle Bottlenecks
              </h2>
              <div style={{ marginBottom: "20px" }}>
                <div style={{ fontSize: "48px", fontWeight: 800, color: white, letterSpacing: "-0.04em", lineHeight: "1" }}>50%</div>
                <div style={{ fontSize: "13px", color: "#94a3b8", marginTop: "4px" }}>Reduction in sales cycle length</div>
              </div>
              <p style={{ fontSize: "13px", color: "#94a3b8", lineHeight: "1.6", marginBottom: "20px" }}>
                Identified and eliminated two critical funnel breakdowns by building AI-powered tools that improved early-stage value articulation and late-stage deal confidence.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {["Claude Code", "Fathom", "HubSpot", "Vercel", "AI Pipeline System"].map((tag) => (
                  <span key={tag} style={{ fontSize: "11px", fontWeight: 600, backgroundColor: "rgba(29,78,216,0.2)", color: "#93c5fd", padding: "3px 10px", borderRadius: "100px" }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Detail content */}
            <div>
              <Section title="The Challenge">
                <p>A deep pipeline analysis revealed consistent breakdowns across all lead sources between Stage 1 → 2 and Stage 4 → 5.</p>
                <p>These were not channel issues—they were systemic conversion gaps.</p>
                <ul>
                  <li><strong>Stage 1 → 2:</strong> Generic pitch conversations were used instead of industry-specific use cases</li>
                  <li><strong>Stage 4 → 5:</strong> Buying groups couldn&apos;t visualize how the product applied to their environment</li>
                </ul>
              </Section>

              <Section title="The Strategy">
                <p>I focused on building two AI-powered internal sales applications to remove friction at these exact stages:</p>
                <ul>
                  <li><strong>Industry Use Case Content Engine (Stage 1 → 2)</strong> → enable reps to deliver relevant, industry-specific value in early conversations</li>
                  <li><strong>Tailored Demo System (Stage 4 → 5)</strong> → replace generic demos with industry-specific environments that increase buyer confidence</li>
                </ul>
              </Section>

              <Section title="The Execution">
                <p style={{ fontWeight: 700, color: slate900, marginBottom: "8px" }}>AI Content Engine</p>
                <ul>
                  <li>Built a UI where reps select industry, sub-industry, and use case</li>
                  <li>Dynamically generates tailored content using existing marketing assets, case studies, and call insights from Fathom</li>
                  <li>Ensured every early-stage conversation is grounded in relevant business context</li>
                </ul>
                <p style={{ fontWeight: 700, color: slate900, marginBottom: "8px", marginTop: "16px" }}>Tailored Demo System</p>
                <ul>
                  <li>Built 5 industry-specific demo environments using AI tools</li>
                  <li>Generated realistic workflows aligned to buyer use cases</li>
                  <li>Eliminated engineering dependency for custom demos</li>
                  <li>Enabled reps to deliver context-rich, decision-stage experiences</li>
                </ul>
                <p style={{ fontWeight: 700, color: slate900, marginBottom: "8px", marginTop: "16px" }}>Supporting Infrastructure</p>
                <ul>
                  <li>HubSpot for pipeline tracking and stage conversion visibility</li>
                  <li>Fathom for extracting customer language and objections</li>
                  <li>Claude Code + Vercel to build and deploy internal tools</li>
                  <li>Connected into a repeatable AI pipeline system</li>
                </ul>
              </Section>

              <Section title="The Results" highlight>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
                    gap: "16px",
                    marginBottom: "24px",
                  }}
                >
                  {[
                    { metric: "50%", label: "Reduction in sales cycle length" },
                    { metric: "30%", label: "Increase in average contract value" },
                    { metric: "165%", label: "YoY new logo revenue growth" },
                    { metric: "3X+", label: "Increase in deal progression across the funnel" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="float"
                      style={{
                        backgroundColor: accentLight,
                        borderRadius: "10px",
                        padding: "20px",
                        textAlign: "center",
                      }}
                    >
                      <div style={{ fontSize: "28px", fontWeight: 800, color: accent, letterSpacing: "-0.04em", lineHeight: "1" }}>{item.metric}</div>
                      <div style={{ fontSize: "12px", color: slate600, marginTop: "6px" }}>{item.label}</div>
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Key Insight">
                <p><em>Pipeline breaks where buyers can&apos;t connect your solution to their reality.<br />AI made it possible to solve that at scale.</em></p>
              </Section>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study 2: 3X Demo Requests */}
      <section style={{ backgroundColor: slate50, padding: "80px 24px", borderBottom: `1px solid ${slate200}` }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "320px 1fr",
              gap: "64px",
              alignItems: "start",
            }}
            className="cs-grid"
          >
            <div
              className="float-dark"
              style={{
                position: "sticky",
                top: "88px",
                background: `linear-gradient(135deg, #1e3a8a 0%, #ff6600 100%)`,
                borderRadius: "14px",
                padding: "32px",
              }}
            >
              <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#ff6600", marginBottom: "8px" }}>
                Case Study 02
              </div>
              <h2 style={{ fontSize: "22px", fontWeight: 800, color: white, letterSpacing: "-0.02em", lineHeight: "1.3", marginBottom: "20px" }}>
                How I 3X&apos;d Demo Requests with AI-First Search Strategy
              </h2>
              <div style={{ marginBottom: "20px" }}>
                <div style={{ fontSize: "48px", fontWeight: 800, color: white, letterSpacing: "-0.04em", lineHeight: "1" }}>3X</div>
                <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)", marginTop: "4px" }}>Demo requests in 6 months</div>
              </div>
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.7)", lineHeight: "1.6", marginBottom: "20px" }}>
                Built an AEO/GEO strategy that made the company #1 in GenAI/LLM citation share with 17.1% share vs. next competitor at 5.6%.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {["AEO", "GEO", "AI Search", "Content Strategy", "SEO", "LLM Optimization"].map((tag) => (
                  <span key={tag} style={{ fontSize: "11px", fontWeight: 600, backgroundColor: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.9)", padding: "3px 10px", borderRadius: "100px" }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <Section title="The Challenge">
                <p>Most B2B SaaS companies are still optimizing for traditional Google search. But by 2025, a significant and growing percentage of buyer research happens through AI-powered tools—ChatGPT, Perplexity, Claude, Google AI Overviews—where rankings work completely differently.</p>
                <p>The company had no AEO strategy. Demo requests from the website were flat. Organic traffic value was $36,000/month in January 2025, and competitors were showing up in AI-generated answers while we weren&apos;t mentioned at all.</p>
              </Section>

              <Section title="The Strategy">
                <p>I built what I call an AI-Native Search System—a layered content and technical strategy designed to make the company&apos;s content the authoritative source that GenAI platforms surface when buyers ask relevant questions.</p>
                <p>The core insight: LLMs don&apos;t rank pages, they cite sources. To be cited, you need authoritative, structured, comparison-rich content that answers the questions buyers are actually asking AI tools. You also need the technical signals (metadata, schema markup, backlink structure) that instruct AI platforms how to interpret your content in context.</p>
              </Section>

              <Section title="The Execution">
                <ul>
                  <li><strong>&quot;Best Of&quot; Blog Series:</strong> Created comprehensive comparison and &quot;best of&quot; content targeting the exact queries buyers use in AI-powered research (e.g., &quot;best call center coaching software&quot;, &quot;AI-powered quality management platforms&quot;).</li>
                  <li><strong>Vendor Comparison Tables:</strong> Built structured comparison tables with clear feature categorization—the exact format that AI systems pull into generated answers.</li>
                  <li><strong>Structured Metadata:</strong> Implemented specific metadata code that instructs GenAI platforms how to interpret the company&apos;s industry positioning, referencing content in the context of buyer searched terms.</li>
                  <li><strong>Content Velocity:</strong> Scaled content output using AI-assisted production workflows while maintaining editorial quality and accuracy.</li>
                  <li><strong>Backlink Strategy:</strong> Targeted 600+ industry keywords with off-page citation building to strengthen domain authority signals for both traditional and AI search.</li>
                </ul>
              </Section>

              <Section title="The Results" highlight>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
                    gap: "16px",
                    marginBottom: "24px",
                  }}
                >
                  {[
                    { metric: "3X", label: "Demo requests in 6 months" },
                    { metric: "17.1%", label: "#1 GenAI citation share" },
                    { metric: "9.5X", label: "Organic traffic value growth" },
                    { metric: "3X", label: "More SEO traffic than next 10 competitors combined" },
                    { metric: "4.55%", label: "Market share of voice (growing)" },
                    { metric: "$341K", label: "Monthly organic traffic value (Nov 2025)" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="float"
                      style={{
                        backgroundColor: white,
                        borderRadius: "10px",
                        padding: "20px",
                        textAlign: "center",
                        border: `1px solid ${slate200}`,
                      }}
                    >
                      <div style={{ fontSize: "28px", fontWeight: 800, color: accent, letterSpacing: "-0.04em", lineHeight: "1" }}>{item.metric}</div>
                      <div style={{ fontSize: "12px", color: slate600, marginTop: "6px" }}>{item.label}</div>
                    </div>
                  ))}
                </div>
                <p>Organic traffic value went from $36,000/month in January 2025 to $341,048/month by November 2025. The company achieved #1 citation rank in GenAI/LLM search results with 17.1% citation share—3X more than the next best competitor. All five tracked competitors showed declining share of voice while ours grew to 4.55%.</p>
              </Section>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study 3: 165% Revenue Growth */}
      <section style={{ backgroundColor: white, padding: "80px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "320px 1fr",
              gap: "64px",
              alignItems: "start",
            }}
            className="cs-grid"
          >
            <div
              className="float-dark"
              style={{
                position: "sticky",
                top: "88px",
                backgroundColor: slate900,
                borderRadius: "14px",
                padding: "32px",
              }}
            >
              <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#ff6600", marginBottom: "8px" }}>
                Case Study 03
              </div>
              <h2 style={{ fontSize: "22px", fontWeight: 800, color: white, letterSpacing: "-0.02em", lineHeight: "1.3", marginBottom: "20px" }}>
                Driving 165% YoY New Logo Revenue Growth
              </h2>
              <div style={{ marginBottom: "20px" }}>
                <div style={{ fontSize: "48px", fontWeight: 800, color: white, letterSpacing: "-0.04em", lineHeight: "1" }}>165%</div>
                <div style={{ fontSize: "13px", color: "#94a3b8", marginTop: "4px" }}>YoY new logo revenue growth · Company record</div>
              </div>
              <p style={{ fontSize: "13px", color: "#94a3b8", lineHeight: "1.6", marginBottom: "20px" }}>
                Replaced scattered marketing efforts with a proactive engagement system targeting the right accounts with the right content at the right time.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {["Demand Gen", "Revenue Growth", "ICP Targeting", "Trade Shows", "Webinars", "Partner Marketing"].map((tag) => (
                  <span key={tag} style={{ fontSize: "11px", fontWeight: 600, backgroundColor: "rgba(29,78,216,0.2)", color: "#93c5fd", padding: "3px 10px", borderRadius: "100px" }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <Section title="The Challenge">
                <p>New logo acquisition had stalled. Marketing was running campaigns across trade shows, webinars, and digital—but without a unified ICP strategy, without continuity between touchpoints, and without a clear connection between marketing activity and revenue outcomes.</p>
                <p>Sales and marketing were largely operating independently. There was no framework for determining which accounts to prioritize, no consistent content strategy tied to the buyer journey, and no channel partner strategy to multiply reach.</p>
              </Section>

              <Section title="The Strategy">
                <p>I built a proactive engagement marketing system designed around one question: what does a buying company look like before they raise their hand, and how do we build a system that gets in front of them first?</p>
                <p>The answer was a layered approach combining ICP-targeted outbound, continuous content engagement, trade show and event strategy, AI-powered content personalization, and a channel partner motion that expanded reach into segments we couldn&apos;t reach with direct marketing alone.</p>
              </Section>

              <Section title="The Execution">
                <ul>
                  <li><strong>ICP Segmentation:</strong> Built target account lists across Healthcare, Retail, Finance, Technology, Travel, BPO, SLED, and Telecom—segmented by company size (SMB/Mid-Market/Enterprise) and buying persona. Scaled ICP contact database 4X.</li>
                  <li><strong>Trade Show Strategy:</strong> Focused event presence at CCW Events, Frost &amp; Sullivan, and targeted regional events. Built post-event nurture sequences that extended the conversation beyond the booth. Trade shows became the #1 pipeline source at 40.9% of deals.</li>
                  <li><strong>Webinar Engine:</strong> Ran a high-frequency webinar series with industry experts covering both high-level trends and deep-dive bottom-of-funnel content. Individual events regularly attracted 200–300 ICP contacts per session.</li>
                  <li><strong>Channel Partner Integration:</strong> Built channel partner sales and marketing motions that created referral pipeline. Led to winning the company&apos;s first three partner deals—a new revenue category.</li>
                  <li><strong>Content + Digital:</strong> SEO, targeted email campaigns with customer stories and &quot;best of&quot; content, retargeting ads, and AI-powered content personalization aligned to vertical use cases.</li>
                </ul>
              </Section>

              <Section title="The Results" highlight>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
                    gap: "16px",
                    marginBottom: "24px",
                  }}
                >
                  {[
                    { metric: "165%", label: "YoY new logo revenue growth" },
                    { metric: "3", label: "First-ever partner deals won" },
                    { metric: "84→37", label: "Days between deal stages" },
                    { metric: "40%", label: "Reduction in overall sales cycle" },
                    { metric: "30%", label: "Increase in ACV" },
                    { metric: "2X", label: "Stage 2→3 conversion rate" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="float"
                      style={{
                        backgroundColor: accentLight,
                        borderRadius: "10px",
                        padding: "20px",
                        textAlign: "center",
                      }}
                    >
                      <div style={{ fontSize: "28px", fontWeight: 800, color: accent, letterSpacing: "-0.04em", lineHeight: "1" }}>{item.metric}</div>
                      <div style={{ fontSize: "12px", color: slate600, marginTop: "6px" }}>{item.label}</div>
                    </div>
                  ))}
                </div>
                <p>165% YoY new logo revenue growth—a company record. ACV increased 30% as better ICP targeting brought in larger, better-fit accounts. Average days between deal stages dropped from 84 to 37 (a 55% reduction), reflecting tighter sales and marketing alignment and better content at every stage of the buying process.</p>
              </Section>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: slate50, padding: "64px 24px", borderTop: `1px solid ${slate200}`, textAlign: "center" }}>
        <div style={{ maxWidth: "560px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "28px", fontWeight: 800, color: slate900, letterSpacing: "-0.03em", marginBottom: "16px" }}>
            Want to see how this applies to your company?
          </h2>
          <p style={{ fontSize: "16px", color: slate600, marginBottom: "28px" }}>
            I&apos;m open to conversations about VP Marketing, Head of Demand Gen, and CMO opportunities.
          </p>
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
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .cs-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}

function Section({
  title,
  children,
  highlight = false,
}: {
  title: string;
  children: React.ReactNode;
  highlight?: boolean;
}) {
  return (
    <div
      style={{
        marginBottom: "40px",
        paddingBottom: "40px",
        borderBottom: `1px solid #e2e8f0`,
      }}
    >
      <h3
        style={{
          fontSize: "13px",
          fontWeight: 700,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: highlight ? "#ff6600" : "#64748b",
          marginBottom: "16px",
        }}
      >
        {title}
      </h3>
      <div
        style={{
          fontSize: "15px",
          color: "#334155",
          lineHeight: "1.75",
          display: "flex",
          flexDirection: "column",
          gap: "14px",
        }}
      >
        {children}
      </div>
    </div>
  );
}
