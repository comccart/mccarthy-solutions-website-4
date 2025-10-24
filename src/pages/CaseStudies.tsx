import { Button } from "@/components/ui/button";
import { GraduationCap, Lightbulb, Target } from "lucide-react";

const CaseStudies = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" className="text-2xl font-heading font-bold text-foreground">
            McCarthy Solutions
          </a>
          <nav className="hidden md:flex gap-6">
            <a href="/" className="text-foreground hover:text-primary transition-colors">Home</a>
            <a href="/case-studies" className="text-primary font-semibold">Case Studies</a>
            <a href="/blog" className="text-foreground hover:text-primary transition-colors">Blog</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6 text-center">
            Case Studies
          </h1>
          
          {/* Pill Navigation */}
          <nav className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => scrollToSection('training')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary/10 text-foreground hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 font-medium"
            >
              <GraduationCap className="w-5 h-5" />
              Training
            </button>
            <button
              onClick={() => scrollToSection('implementation')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent/10 text-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300 font-medium"
            >
              <Target className="w-5 h-5" />
              Implementation
            </button>
            <button
              onClick={() => scrollToSection('strategy')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-medium"
            >
              <Lightbulb className="w-5 h-5" />
              Strategy
            </button>
          </nav>

          {/* Intro Paragraph */}
          <div className="max-w-3xl mx-auto text-center mb-8">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Explore three deep-dive case studies showcasing how we turn capability into training, implementation and strategy for AI-driven organisations.
            </p>
          </div>
        </div>
      </section>

      {/* Training Section */}
      <section id="training" className="py-8 scroll-mt-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-card border border-border rounded-lg p-8 md:p-12 shadow-soft">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-secondary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">Training</h2>
            </div>

            <div className="space-y-8 text-foreground/90">
              <div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">Client Context</h3>
                <p className="leading-relaxed">
                  Over ten monthly sessions, AI for Leaders brought together a diverse mix of senior leaders – from private companies, nonprofits, consultants, and solopreneurs – who wanted to understand AI without getting lost in the hype. Most were beginners: curious, sceptical and occasionally overwhelmed. They came to me because of my long background in coaching and training senior leaders and my ability to translate complex ideas into practical action.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">Challenge</h3>
                <p className="leading-relaxed">
                  For many, the challenge was psychological as much as technical. They felt like the world was racing ahead – that everyone else "got" AI except them. The pressure to keep up was undermining their confidence. They didn't want jargon or evangelism; they wanted clarity, calm and a sense of control.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">Method</h3>
                <p className="leading-relaxed">
                  I designed a two-hour hands-on sprint that took participants from first principles to everyday capability. The sessions were values-led — grounded in reflection and purpose — while remaining deeply practical. We explored the top tools (ChatGPT, Claude, Gemini, Perplexity) through real leadership scenarios, using AI as both a thinking partner and a strategic assistant. Every exercise tied back to how leaders make decisions, communicate and model behaviour for their teams.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">Solution</h3>
                <p className="leading-relaxed">
                  The 2-hour workshop created a structured, non-intimidating path into AI. Leaders left with prompt frameworks, toolkits, and an approach they could apply immediately in their work — whether drafting strategies, writing communications, or rethinking how their teams might use AI responsibly. The balance of technical skill and leadership philosophy became the hallmark of the series.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">Impact / Insight</h3>
                <p className="leading-relaxed mb-4">
                  Participants described the experience as "eye-opening," "thought-provoking" and "a huge boost to confidence."
                </p>
                <ul className="space-y-2 mb-4 pl-4">
                  <li className="leading-relaxed">"I got a huge return on the two-hour investment." — J. Corridan</li>
                  <li className="leading-relaxed">"Smart, useful and genuinely thought-provoking." — M. Skelton</li>
                  <li className="leading-relaxed">"It helped me step back and see the bigger picture." — Tobias W.</li>
                  <li className="leading-relaxed">"I left inspired and ready to write about and use AI in my life." — L. Shulman</li>
                </ul>
                <p className="leading-relaxed">
                  The workshop's biggest impact was psychological: leaders no longer felt left behind. They gained confidence to discuss and experiment with AI in their organisations — from frontline staff to the C-suite. My own realisation was how universal this need still is. Across sectors and seniority levels, people crave a grounded introduction to AI that connects tools to values and leadership. That insight now shapes every training programme I design.
                </p>
              </div>
              
              <div className="mt-8 flex justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all" asChild>
                  <a href="https://calendar.app.google/KxxmEvbPQfzcdLFP7" target="_blank" rel="noopener noreferrer">Book free intro call →</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Section */}
      <section id="implementation" className="py-16 scroll-mt-24 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-card border border-border rounded-lg p-8 md:p-12 shadow-soft">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                <Target className="w-6 h-6 text-accent" />
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">Implementation</h2>
            </div>

            <div className="space-y-8 text-foreground/90">
              <div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">Client Context</h3>
                <p className="leading-relaxed">
                  Global Diversity Practice (GDP) is an award-winning consultancy that helps organisations worldwide build cultures of inclusion and belonging. Their clients include multinational corporations and public sector bodies seeking to make diversity and equity part of their leadership DNA. When they approached me, they were clear on AI's potential but uncertain where to start. They wanted tools that could help them deliver higher-quality work at scale while staying true to their values of inclusion, ethics and trust.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">Challenge</h3>
                <p className="leading-relaxed">
                  Like many consultancies, GDP's challenge was two-fold: capacity and positioning. Their team was stretched across client delivery, leaving little time to innovate or expand their pipeline. They sensed that AI could unlock efficiency and credibility — but needed a partner who could translate ambition into practical, values-aligned tools.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">Method</h3>
                <p className="leading-relaxed">
                  We began by mapping where AI could both save time and add strategic value. Through collaborative workshops and rapid prototyping, we identified two high-impact opportunities: a diagnostic survey to attract new leads, and a product that directly supported inclusive hiring. I designed and built both using a stack of Gamma, Zapier, OpenAI, Perplexity and Slack integrations, ensuring data flow, security and clarity of user experience. Every step was reviewed through GDP's ethical lens — inclusion first, automation second.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">Solution</h3>
                <p className="leading-relaxed mb-4">
                  The first tool was an <strong>AI Readiness Survey</strong> that generated personalised reports for prospects, helping GDP qualify leads and showcase expertise before a single meeting.
                </p>
                <p className="leading-relaxed mb-4">
                  The second was an <strong>AI De-biasing Assistant</strong> for job descriptions — a standalone product that analyses text and offers suggestions to make language more inclusive and appealing to a wider range of applicants.
                </p>
                <p className="leading-relaxed">
                  As the collaboration grew, I also helped automate internal workflows — meeting prep, client research and content creation — freeing up hours each week for high-value consulting.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">Impact / Insight</h3>
                <p className="leading-relaxed mb-4">
                  Both tools are now live and in regular use, earning revenue while saving significant time. GDP can now reach more clients, position themselves as forward-thinking, and deepen their credibility as an inclusive consultancy operating at the frontier of responsible AI.
                </p>
                <p className="leading-relaxed">
                  The broader insight: AI doesn't replace expertise — it amplifies it when built around the organisation's core values.
                </p>
              </div>
              
              <div className="mt-8 flex justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all" asChild>
                  <a href="https://calendar.app.google/KxxmEvbPQfzcdLFP7" target="_blank" rel="noopener noreferrer">Book free intro call →</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Section */}
      <section id="strategy" className="py-16 scroll-mt-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-card border border-border rounded-lg p-8 md:p-12 shadow-soft">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">Strategy</h2>
            </div>

            <div className="space-y-8 text-foreground/90">
              <div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">Client Context</h3>
                <p className="leading-relaxed">
                  The client was the CIO of a large and fast-growing global medical-device company, whose remit spanned digital transformation, security and integrating newly acquired business units. He faced the challenge of ensuring consistency, strategic direction and operational coherence as the company scaled through acquisitions and global expansion.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">Challenge</h3>
                <p className="leading-relaxed">
                  Across the diverse businesses in the group – from R&D, manufacturing, regulatory, sales to procurement – the question was clear: <em>where does AI sit?</em> The company had a strong existing strategy, but integrating AI into that strategy posed real uncertainty. Which functions should pilot first? How would AI connect to sales operations, regulatory workflows, procurement optimisation? How to introduce AI stepwise without overwhelming the organisation?
                </p>
              </div>

              <div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">Method</h3>
                <p className="leading-relaxed">
                  I led a structured strategy process: discovery interviews across functions, workshops with senior leadership, then mapping those insights into a clear roadmap with milestones. We developed a pilot-project list, aligned AI tooling & training assets with business units, and set governance around security and transformation. The process emphasised practicality and integration rather than jumping straight into hype.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">Solution</h3>
                <p className="leading-relaxed mb-4">The deliverables included:</p>
                <ul className="space-y-2 mb-4 pl-4 list-disc list-inside">
                  <li className="leading-relaxed">A catalogue of pilot projects, each tied to a business function (sales ops, regulatory intelligence, procurement forecasting).</li>
                  <li className="leading-relaxed">Aligned AI tooling and training assets custom-built for their teams, ensuring adoption readiness.</li>
                  <li className="leading-relaxed">A roadmap laid out in phases: "Introduce → Expand → Embed", rather than "Transform overnight".</li>
                </ul>
                <p className="leading-relaxed">
                  This strategy reframed AI as incremental, value-adding and integrated within their existing enterprise strategy — not a separate island.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">Impact / Insight</h3>
                <p className="leading-relaxed mb-4">
                  The main outcome was a mindset shift at senior level: AI was no longer a distant, disruptive force but a step-by-step capability to be introduced across the business. The client now understood that they didn't have to re-invent everything, but could use AI to augment, streamline and enhance what they already did.
                </p>
                <p className="leading-relaxed">
                  The broader insight: for large, acquisitive organisations, AI succeeds when it aligns with existing strategy, respects governance and is introduced incrementally.
                </p>
              </div>
              
              <div className="mt-8 flex justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all" asChild>
                  <a href="https://calendar.app.google/KxxmEvbPQfzcdLFP7" target="_blank" rel="noopener noreferrer">Book free intro call →</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Let's talk about how AI can work for you
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Ready to explore your next step? Contact us now.
          </p>
          <Button size="lg" asChild>
            <a href="/#contact">Get in touch</a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 McCarthy Solutions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default CaseStudies;
