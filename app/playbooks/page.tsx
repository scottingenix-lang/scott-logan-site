const accent = "#ff6600";
const accentLight = "#eff6ff";
const slate900 = "#360f5a";
const slate700 = "#334155";
const slate600 = "#475569";
const slate500 = "#64748b";
const slate200 = "#e2e8f0";
const slate50 = "#f8fafc";
const white = "#ffffff";

const playbooks = [
  {
    number: "01",
    title: "Building a Modern ABM Engine",
    subtitle: "From siloed campaigns to integrated pipeline systems",
    overview:
      "Most ABM programs fail because they treat account-based marketing as a tactic rather than a system. True ABM is a continuous operating model that aligns ICP targeting, content strategy, sales coordination, and attribution into one coherent engine.",
    sections: [
      {
        heading: "The Core Shift",
        body: "Move from spray-and-pray campaigns to continuous, contextual engagement with a defined ICP list. This means segmenting accounts by industry, company size, buying persona, and engagement history—and building content and outreach specifically for each segment.",
      },
      {
        heading: "ICP Database Architecture",
        body: "Start with win/loss analysis to identify the industries, company sizes, and personas where you win most often. Build segmented contact lists around those profiles. In 12 months, I grew the ICP target contact base 4X by applying this framework systematically.",
      },
      {
        heading: "The Engagement System",
        body: "Multi-touch, multi-channel engagement: webinars with relevant expert speakers, targeted email sequences with customer stories and education content, retargeting ads, SEO-driven inbound, and trade show presence—all coordinated around the same ICP list. Sales gets notified when accounts hit engagement thresholds.",
      },
      {
        heading: "Attribution That Informs Action",
        body: "Replace free-form campaign notes with standardized Lead Source and Lead Source Detail fields. Track both sourced and influenced pipeline. Build dashboards that give sales and leadership real-time visibility into what's generating pipeline and at what cost.",
      },
      {
        heading: "Proof Point",
        body: "This system produced 10.5X pipeline ROI, drove 165% YoY new logo revenue growth, and reduced sales cycle from 15 months to 7 months by surfacing better-fit, better-informed buyers.",
      },
    ],
    tags: ["ABM", "ICP Targeting", "HubSpot", "Pipeline Attribution", "Sales Alignment"],
  },
  {
    number: "02",
    title: "AEO: Winning in AI Search",
    subtitle: "Training GenAI/LLM algorithms to surface and recommend your company",
    overview:
      "Search has fundamentally changed. A growing percentage of B2B research now happens through AI-powered tools—ChatGPT, Perplexity, Claude, Google AI Overviews. Traditional SEO optimization does not translate directly to AI search rankings. You need a separate, complementary AEO strategy.",
    sections: [
      {
        heading: "Why AEO Is Different from SEO",
        body: "Search engines rank pages. LLMs cite sources. To appear in AI-generated answers, your content needs to be structured to answer questions directly, contain specific factual claims, and exist in formats that AI training and retrieval systems can parse and cite with confidence.",
      },
      {
        heading: "The Content Architecture",
        body: "Build 'Best Of' blog series targeting the exact queries buyers use in AI-assisted research. Create vendor comparison tables with clear feature categorization—this is the exact format AI systems extract into generated answers. Ensure content contains definitive, citable statements rather than vague marketing language.",
      },
      {
        heading: "Technical Implementation",
        body: "Implement structured metadata that instructs GenAI platforms how to interpret your content relative to industry terms and buyer intent. Schema markup, clear entity definitions, and explicit product positioning help AI systems understand what category you belong to and who your solution serves.",
      },
      {
        heading: "Content Velocity via AI",
        body: "Use AI-assisted production to scale content output while maintaining editorial quality. AI can accelerate research, first drafts, comparison frameworks, and SEO optimization—freeing human editorial capacity for positioning, tone, and accuracy review.",
      },
      {
        heading: "Proof Point",
        body: "This strategy achieved #1 citation rank in GenAI/LLM search with 17.1% citation share—3X more than the next best competitor. Organic traffic value grew from $36K to $341K/month in 11 months. Demo requests 3X'd in 6 months.",
      },
    ],
    tags: ["AEO", "GEO", "AI Search", "LLM Optimization", "Content Strategy", "SEO"],
    featured: true,
  },
  {
    number: "03",
    title: "Turning Events into Pipeline Machines",
    subtitle: "Converting trade shows and webinars from cost centers to deal drivers",
    overview:
      "Events are often the highest-cost, lowest-measured marketing investment. Most teams run events, collect badge scans, send one follow-up email, and move on. The companies that win with events treat them as pipeline generation systems—with pre-event targeting, real-time sales coordination, and post-event multi-touch sequences.",
    sections: [
      {
        heading: "Pre-Event: Target Before You Arrive",
        body: "Build event-specific ICP target lists before the event. Identify which registered attendees match your ICP. Run pre-event email sequences and LinkedIn targeting to warm accounts before you're in the room. Brief sales on who to prioritize.",
      },
      {
        heading: "At-Event: Enable Real Conversations",
        body: "Equip sales with industry-specific talking points, customer stories, and relevant product demo scenarios. Move beyond booth presence to hosted roundtables, sponsored sessions, and direct meeting scheduling with pre-identified target accounts.",
      },
      {
        heading: "Post-Event: The System That Converts",
        body: "Most pipeline from events is lost in the follow-up gap. Build a post-event sequence that: (1) segments attendees by engagement level, (2) delivers relevant content matched to their conversation, and (3) keeps the sales cycle moving with defined next steps and timing triggers.",
      },
      {
        heading: "Webinar as a Pipeline Engine",
        body: "High-frequency webinar series with expert speakers on bottom-of-funnel topics attracts active buyers, not just curious researchers. Deep-dive content (product demos, compliance walkthroughs, implementation guides) signals intent more strongly than awareness content.",
      },
      {
        heading: "Proof Point",
        body: "Trade shows became the #1 pipeline source at 40.9% of deals. Webinars regularly generated 200–300 ICP registrant contacts per event with strong engagement signals used to trigger sales outreach.",
      },
    ],
    tags: ["Trade Shows", "Webinars", "Events", "Pipeline", "Sales Enablement"],
  },
  {
    number: "04",
    title: "From SEO to AI Discovery",
    subtitle: "Adapting your search strategy for how buyers actually research today",
    overview:
      "The B2B buyer research journey is shifting. Buyers are using AI tools to get fast, synthesized answers to complex questions—and increasingly making purchase shortlists based on what AI recommends, not just what ranks in Google. Marketing teams that only optimize for traditional search are already behind.",
    sections: [
      {
        heading: "The New Discovery Stack",
        body: "Modern B2B discovery happens across multiple layers: traditional organic search (Google/Bing), AI-generated answers (ChatGPT, Perplexity, Claude), peer review platforms (G2, Gartner Peer Insights), industry analysts, and LinkedIn. An effective content strategy must show up credibly across all of these—not just one.",
      },
      {
        heading: "Auditing Your AI Presence",
        body: "Start by asking the AI tools your buyers use the questions they're asking. 'What are the best [category] platforms?' 'Compare [you] vs [competitor].' If you're not mentioned—or mentioned inaccurately—you have a content gap to fill. Track citation share as a core marketing KPI.",
      },
      {
        heading: "Content That Works for Both",
        body: "The best content strategy serves traditional and AI search simultaneously: clear, direct answers to buyer questions (good for both), structured comparison frameworks (great for AI citation), strong domain authority through backlinks and third-party mentions (amplifies both), and regular content freshness signals.",
      },
      {
        heading: "Analyst and Third-Party Validation",
        body: "AI systems trust authoritative third-party sources. Gartner, Forrester, G2, and industry publications that mention and validate your claims become training signals for AI recommendations. Analyst recognition is now a discoverability play, not just credibility positioning.",
      },
      {
        heading: "Proof Point",
        body: "By shifting to an integrated SEO + AEO strategy, the company achieved 4.55% market share of voice in AI search (growing), while all tracked competitors declined. This produced 3X more SEO traffic than the next 10 competitors combined across 600+ targeted keywords.",
      },
    ],
    tags: ["SEO", "AEO", "GEO", "AI Discovery", "Content Strategy", "Share of Voice"],
  },
];

export default function PlaybooksPage() {
  return (
    <>
      {/* Hero */}
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
            Frameworks & Thinking
          </div>
          <h1
            style={{
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: 800,
              color: slate900,
              letterSpacing: "-0.03em",
              marginBottom: "20px",
              maxWidth: "680px",
            }}
          >
            Playbooks for Building Modern Pipeline Systems
          </h1>
          <p
            style={{
              fontSize: "18px",
              color: slate600,
              lineHeight: "1.65",
              maxWidth: "580px",
            }}
          >
            These are strategic frameworks built from 18+ years of B2B SaaS marketing experience—not generic blog posts. Each one reflects a real system I&apos;ve designed, deployed, and measured.
          </p>
        </div>
      </section>

      {/* Playbooks Grid */}
      <section style={{ backgroundColor: white, padding: "80px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "48px" }}>
          {playbooks.map((pb) => (
            <div
              key={pb.number}
              className={pb.featured ? "float-dark" : "float"}
              style={{
                backgroundColor: pb.featured ? slate900 : slate50,
                borderRadius: "16px",
                border: pb.featured ? `2px solid ${accent}` : `1px solid ${slate200}`,
                position: "relative",
              }}
            >
              {pb.featured && (
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
                  Core Differentiator
                </div>
              )}

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "280px 1fr",
                  gap: "0",
                }}
                className="pb-grid"
              >
                {/* Left summary */}
                <div
                  style={{
                    padding: "40px 32px",
                    borderRight: pb.featured ? "1px solid #4d1a7a" : `1px solid ${slate200}`,
                  }}
                >
                  <div
                    style={{
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: pb.featured ? "#64748b" : slate500,
                      marginBottom: "12px",
                    }}
                  >
                    Playbook {pb.number}
                  </div>
                  <h2
                    style={{
                      fontSize: "20px",
                      fontWeight: 800,
                      color: pb.featured ? white : slate900,
                      letterSpacing: "-0.02em",
                      lineHeight: "1.3",
                      marginBottom: "10px",
                    }}
                  >
                    {pb.title}
                  </h2>
                  <p
                    style={{
                      fontSize: "13px",
                      color: pb.featured ? "#94a3b8" : slate500,
                      marginBottom: "20px",
                      lineHeight: "1.5",
                    }}
                  >
                    {pb.subtitle}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {pb.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: "11px",
                          fontWeight: 600,
                          backgroundColor: pb.featured ? "rgba(29,78,216,0.25)" : accentLight,
                          color: pb.featured ? "#93c5fd" : accent,
                          padding: "3px 10px",
                          borderRadius: "100px",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right content */}
                <div style={{ padding: "40px 40px" }}>
                  <p
                    style={{
                      fontSize: "15px",
                      color: pb.featured ? "#94a3b8" : slate600,
                      lineHeight: "1.7",
                      marginBottom: "28px",
                      fontStyle: "italic",
                      borderLeft: `3px solid ${pb.featured ? accent : slate200}`,
                      paddingLeft: "16px",
                    }}
                  >
                    {pb.overview}
                  </p>

                  <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    {pb.sections.map((s, i) => (
                      <div key={i}>
                        <div
                          style={{
                            fontSize: "12px",
                            fontWeight: 700,
                            letterSpacing: "0.06em",
                            textTransform: "uppercase",
                            color: pb.featured ? "#60a5fa" : accent,
                            marginBottom: "6px",
                          }}
                        >
                          {s.heading}
                        </div>
                        <p
                          style={{
                            fontSize: "14px",
                            color: pb.featured ? "#cbd5e1" : slate700,
                            lineHeight: "1.7",
                          }}
                        >
                          {s.body}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .pb-grid { grid-template-columns: 1fr !important; }
          .pb-grid > div:first-child { border-right: none !important; border-bottom: 1px solid #4d1a7a; }
        }
      `}</style>
    </>
  );
}
