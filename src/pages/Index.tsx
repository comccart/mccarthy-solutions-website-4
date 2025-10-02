import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Download, ExternalLink, Star, CheckCircle2, TrendingUp, Users, Zap, Target, BarChart3, Shield, Award, Clock, ArrowRight, Sparkles, Bot, GraduationCap, Workflow, LineChart } from "lucide-react";
import iwaiLogo from "@/assets/iwai-logo-new.png";

const Index = () => {
  const logos = ["Seth Godin", "Marie Forleo", "Bernadette Jiwa", "Ramon Ray", "The Unstuck Book", "Leading Consultants", "SME Leaders", "AI Pioneers"];
  const services = [{
    icon: GraduationCap,
    title: "Learn AI with confidence",
    description: "Training and literacy programs that help you and your team understand AI without the overwhelm.",
    benefits: ["Practical Learning", "No Jargon", "Real-World Applications"]
  }, {
    icon: Workflow,
    title: "Make AI Part of Your Work, Not a Distraction",
    description: "Advisory and strategy services that integrate AI into your workflows seamlessly.",
    benefits: ["Strategic Planning", "Seamless Integration", "Focused Implementation"]
  }, {
    icon: Sparkles,
    title: "See Results with Practical AI Tools",
    description: "Implementation and automation that deliver measurable outcomes for your business.",
    benefits: ["Time Savings", "Improved Delivery", "Scalable Systems"]
  }];
  const processSteps = [{
    number: "01",
    title: "Understand Your Work",
    description: "We listen. We learn what you do and where AI could help."
  }, {
    number: "02",
    title: "Build Your Strategy",
    description: "Clear plan. Practical steps. No tech jargon."
  }, {
    number: "03",
    title: "Implement with Care",
    description: "Tools that fit your workflow. Training that makes sense."
  }, {
    number: "04",
    title: "Measure What Matters",
    description: "Track real results. Adjust as you grow."
  }];
  const results = [{
    client: "Strategic Consulting Firm",
    metric: "10+ hours",
    description: "Saved weekly on admin tasks",
    industry: "Consulting"
  }, {
    client: "Marketing Consultant",
    metric: "3x",
    description: "Content creation scaled",
    industry: "Marketing"
  }, {
    client: "Leadership Coach",
    metric: "Better",
    description: "Client delivery systems",
    industry: "Coaching"
  }];
  const testimonials = [{
    quote: "This saved me hours each week. I can focus on clients instead of admin.",
    author: "Sarah M.",
    role: "Independent Consultant",
    rating: 5
  }, {
    quote: "AI felt overwhelming until I worked with McCarthy. Now it's just part of how I work.",
    author: "James C.",
    role: "SME Owner",
    rating: 5
  }, {
    quote: "McCarthy helped me change the way I deliver my services. My clients notice the difference.",
    author: "Emma T.",
    role: "Business Coach",
    rating: 5
  }];
  const faqs = [{
    question: "I'm not technical. Can I still use AI?",
    answer: "Yes. AI is a life skill, not a tech stack. I teach it in plain language."
  }, {
    question: "How long until I see results?",
    answer: "Most clients save time within the first week. Bigger projects take 4-8 weeks."
  }, {
    question: "Do you work with solo consultants?",
    answer: "Absolutely. I work with solo consultants, small teams, and SME leaders."
  }, {
    question: "What if I've tried AI and it didn't work?",
    answer: "That's common. Most AI implementations fail because they're too complex. I keep it simple and practical."
  }];
  return <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Zap className="w-6 h-6 text-primary" />
              <div className="text-2xl font-bold text-foreground">McCarthy Solutions</div>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-foreground hover:text-accent transition-colors">Services</a>
              <a href="#process" className="text-foreground hover:text-accent transition-colors">Process</a>
              <a href="#results" className="text-foreground hover:text-accent transition-colors">Results</a>
              <a href="#testimonials" className="text-foreground hover:text-accent transition-colors">Testimonials</a>
              <Link to="/blog" className="text-foreground hover:text-accent transition-colors">Blog</Link>
            </div>

            <Button variant="default" size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg">
              Book free intro call
            </Button>
          </div>
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
            <div className="flex items-center gap-2">
              <img src="https://logo.clearbit.com/clutch.co" alt="Clutch" className="h-8" />
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
              </div>
              <span className="text-sm text-secondary font-medium">5.0</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <img src={iwaiLogo} alt="Innovating with AI" className="h-12" />
              <span className="text-base font-semibold text-muted-foreground">IWAI Certified</span>
            </div>
          </div>

          {/* Hero Text */}
          <h1 className="text-5xl md:text-7xl font-bold text-center mb-8 leading-tight text-foreground">
            AI is not a tech stack.{" "}
            <span className="text-primary animate-fade-in">It's a life skill.</span>
          </h1>

          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-4">
            I help consultants and SME leaders dramatically improve performance, client delivery, and confidence by integrating AI that sticks.
          </p>
          
          <p className="text-2xl font-semibold text-center text-foreground mb-8">
            Change the way you work.
          </p>

          {/* Key Proof Points */}
          <div className="flex flex-wrap items-center justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-xl font-bold text-primary">Author</div>
              <div className="text-sm text-muted-foreground">The Unstuck Book</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-primary">Collaborator</div>
              <div className="text-sm text-muted-foreground">Seth Godin, Marie, Bernadette</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-primary">Results</div>
              <div className="text-sm text-muted-foreground">Hours Saved, Better Delivery</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-20">
            <Button size="lg" variant="default" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
              Book free intro call
            </Button>
            <Button size="lg" variant="outline" className="gap-2 border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground">
              Learn More
              <ExternalLink className="w-4 h-4" />
            </Button>
          </div>

          {/* Trust Badge */}
          <p className="text-center text-muted-foreground mb-8">
            Trusted by Consultants and SME Leaders
          </p>

          {/* Logo Carousel */}
          <div className="relative overflow-hidden py-8">
            <div className="flex gap-12 animate-scroll">
              {[...logos, ...logos].map((logo, i) => <div key={i} className="flex-shrink-0 px-6 py-4 bg-card rounded-lg shadow-sm border border-border min-w-[180px] flex items-center justify-center">
                  {i % 2 === 0 ? (
                    <span className="text-foreground font-medium">{logo}</span>
                  ) : (
                    <img src="/placeholder.svg" alt={`${logo} logo`} className="h-8 w-auto object-contain" />
                  )}
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 px-6 bg-card">
        <div className="container mx-auto max-w-6xl text-center mb-16">
          <Badge variant="default" className="mb-6 bg-primary text-primary-foreground">The Challenge</Badge>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            You Know Your Work. AI Can Help You Do It Better.
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Most consultants and leaders waste time on tasks AI could handle. But AI feels complicated.
          </p>
        </div>

        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Problem Side */}
            <div className="p-8 rounded-2xl bg-muted/50 border border-border space-y-8">
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-foreground mb-1">Your Current State</h3>
                <p className="text-sm text-muted-foreground mb-4">Manual & Fragmented</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-secondary" />
                  <h3 className="text-xl font-bold text-foreground">Too Much Time on Admin</h3>
                </div>
                <p className="text-muted-foreground">Hours wasted on tasks that don't require your expertise.</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Target className="w-5 h-5 text-secondary" />
                  <h3 className="text-xl font-bold text-foreground">AI Feels Overwhelming</h3>
                </div>
                <p className="text-muted-foreground">Too many tools. Too much jargon. No clear path forward.</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <BarChart3 className="w-5 h-5 text-secondary" />
                  <h3 className="text-xl font-bold text-foreground">Hard to Measure Impact</h3>
                </div>
                <p className="text-muted-foreground">You know you need to change, but don't know where to start.</p>
              </div>
            </div>

            {/* Solution Side */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-secondary via-secondary to-secondary/90 text-secondary-foreground space-y-8">
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-secondary-foreground mb-1">With McCarthy Solutions</h3>
                <p className="text-sm text-secondary-foreground/90">Automated & Intelligent</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-secondary-foreground" />
                  <h3 className="text-xl font-bold text-secondary-foreground">Save Hours Every Week</h3>
                </div>
                <p className="text-secondary-foreground/90">Automate admin. Focus on what matters. Get time back.</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Target className="w-5 h-5 text-secondary-foreground" />
                  <h3 className="text-xl font-bold text-secondary-foreground">Stay Creative</h3>
                </div>
                <p className="text-secondary-foreground/90">Use AI to enhance your work, not replace your thinking.</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <LineChart className="w-5 h-5 text-secondary-foreground" />
                  <h3 className="text-xl font-bold text-secondary-foreground">Lead with Integrity</h3>
                </div>
                <p className="text-secondary-foreground/90">Build systems that work for you and your clients.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section id="services" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge variant="default" className="mb-4 bg-primary text-primary-foreground">Our Services</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              How I Help
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Three ways to make AI work for you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => <Card key={i} className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl text-foreground">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {service.benefits.map((benefit, j) => <div key={j} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </div>)}
                  </div>
                  <a href="#contact" className="text-accent hover:text-accent/80 font-medium inline-flex items-center gap-2">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Process/Methodology Section */}
      <section id="process" className="py-20 px-6 bg-card">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge variant="default" className="mb-4 bg-primary text-primary-foreground">Our Process</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              How We Work Together
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Simple steps. Real results.
            </p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-16 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary via-secondary to-primary opacity-30" />
            
            <div className="grid md:grid-cols-4 gap-8">
              {processSteps.map((step, i) => <div key={i} className="relative">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-4 relative z-10 shadow-lg">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>)}
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="default" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
              Start Your Journey
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Results & Case Studies */}
      <section id="results" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge variant="default" className="mb-4 bg-primary text-primary-foreground">Proven Results</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Real Results from Real People
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Here's what happens when consultants and leaders work with AI the right way.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {results.map((result, i) => <Card key={i} className="text-center border-2 hover:border-primary/50 transition-all">
                <CardHeader>
                  <div className="text-5xl font-bold text-primary mb-2">{result.metric}</div>
                  <CardTitle className="text-lg text-foreground">{result.description}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">{result.client}</p>
                  <Badge variant="default" className="text-xs bg-primary text-primary-foreground">{result.industry}</Badge>
                </CardContent>
              </Card>)}
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="default" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
              Book free intro call
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Social Proof & Testimonials */}
      <section id="testimonials" className="py-20 px-6 bg-card">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge variant="default" className="mb-4 bg-primary text-primary-foreground">Client Success</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              What People Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Consultants and leaders who changed the way they work.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => <Card key={i} className="border-2 hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, j) => <Star key={j} className="w-5 h-5 fill-primary text-primary" />)}
                  </div>
                  <CardDescription className="text-base text-foreground italic">
                    "{testimonial.quote}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.author}</p>
                      <p className="text-sm text-secondary">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Trust & Certification */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Built on Trust and Experience
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              People I've collaborated with.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Collaborator 1" },
              { name: "Collaborator 2" },
              { name: "Collaborator 3" },
              { name: "Collaborator 4" }
            ].map((person, i) => (
              <div key={i} className="flex flex-col items-center text-center p-6 rounded-lg border-2 border-primary/20 hover:border-primary/50 transition-all">
                <img 
                  src="/placeholder.svg" 
                  alt={person.name}
                  className="w-24 h-24 rounded-full object-cover mb-4"
                />
                <p className="font-semibold text-foreground">{person.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-card">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <Badge variant="default" className="mb-4 bg-primary text-primary-foreground">FAQ</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Common Questions Answered
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about working with McCarthy Solutions.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, i) => <AccordionItem key={i} value={`item-${i}`} className="border-2 border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>)}
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <Clock className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Limited Spots Available This Quarter</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Ready to change the way you work?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book a free strategy call. We'll talk about your work and where AI can help.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <Button size="lg" variant="default" className="text-lg px-8 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg">
              Book free intro call
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span>30 minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span>No sales pitch</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span>Just clarity</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border bg-card">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-6 h-6 text-primary" />
                <div className="text-xl font-bold text-foreground">McCarthy Solutions</div>
              </div>
              <p className="text-muted-foreground text-sm">
                AI consultant for consultants and SME leaders.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#services" className="hover:text-accent transition-colors">AI Training</a></li>
                <li><a href="#services" className="hover:text-accent transition-colors">Strategy & Advisory</a></li>
                <li><a href="#services" className="hover:text-accent transition-colors">Implementation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
                <li><a href="#results" className="hover:text-accent transition-colors">Case Studies</a></li>
                <li><a href="#testimonials" className="hover:text-accent transition-colors">Testimonials</a></li>
                <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © 2025 McCarthy Solutions. All rights reserved. Built with ⚡ in Dublin.
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-in;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>;
};
export default Index;