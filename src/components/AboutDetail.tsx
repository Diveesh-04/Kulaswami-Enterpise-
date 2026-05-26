import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Award,
  Building2,
  Calendar,
  CheckCircle2,
  HeartHandshake,
  MapPin,
  Shield,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const AboutDetail = () => {
  const values = [
    {
      icon: Shield,
      title: "Integrity & Compliance",
      desc: "We uphold the highest ethical standards and ensure every engagement meets regulatory requirements.",
    },
    {
      icon: HeartHandshake,
      title: "Client-First Partnership",
      desc: "Your goals drive our work. We build long-term relationships through transparency and responsive support.",
    },
    {
      icon: Target,
      title: "Precision & Accountability",
      desc: "Accurate filings, timely deliverables, and clear communication at every stage of your financial journey.",
    },
    {
      icon: TrendingUp,
      title: "Growth-Oriented Advisory",
      desc: "Beyond compliance, we help you identify opportunities to strengthen cash flow and scale sustainably.",
    },
  ];

  const milestones = [
    { year: "2009", title: "Company Founded", description: "Kulswami Enterprise began as a boutique financial consultancy serving local businesses." },
    { year: "2012", title: "Expanded Service Portfolio", description: "Added GST, TDS, and statutory audit services to support growing client needs." },
    { year: "2015", title: "Team Growth", description: "Grew to 50+ certified professionals across tax, audit, and company law." },
    { year: "2018", title: "Multi-State Operations", description: "Extended services across Maharashtra, Gujarat, Delhi, and Rajasthan." },
    { year: "2020", title: "Digital Client Portal", description: "Launched secure document sharing and real-time compliance tracking for clients." },
    { year: "2024", title: "National & Global Reach", description: "Serving 500+ clients with advisory support across 10+ countries." },
  ];

  const services = [
    "Accounts Writing & Bookkeeping",
    "GST Registration & Returns",
    "TDS Compliance & Filing",
    "Statutory & Tax Audit",
    "ROC & Company Law Compliance",
    "Income Tax Planning & Filing",
    "MSME & Professional Tax Registration",
    "Financial Advisory & Due Diligence",
  ];

  const leadership = [
    { name: "CA Rajesh Sharma", role: "Founding Partner", focus: "Taxation & Strategic Advisory" },
    { name: "CA Priya Mehta", role: "Partner", focus: "GST & Indirect Tax" },
    { name: "CA Amit Kumar", role: "Head of Audit", focus: "Statutory & Internal Audit" },
    { name: "CA Sneha Patel", role: "Company Law Lead", focus: "ROC & Corporate Compliance" },
  ];

  const industries = [
    "Manufacturing & Trading",
    "IT & Professional Services",
    "Healthcare & Pharmaceuticals",
    "Real Estate & Construction",
    "Retail & E-commerce",
    "Startups & MSMEs",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero */}
      <section className="relative overflow-hidden py-24">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2000')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900/95 to-primary/90" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-6 gap-2 rounded-full border-white/30 bg-white/20 px-4 py-2 text-white backdrop-blur-sm">
              <Building2 className="h-4 w-4" />
              About Kulswami Enterprise
            </Badge>
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-white lg:text-7xl">
              Your Trusted Partner in
              <span className="block bg-gradient-to-r from-blue-300 via-primary to-cyan-300 bg-clip-text text-transparent">
                Financial Excellence
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-gray-200">
              Since 2009, we have helped businesses navigate tax, audit, and regulatory
              compliance with clarity, confidence, and measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Story & Mission */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <Badge className="mb-4 gap-2 rounded-full border-0 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <Sparkles className="h-3 w-3" />
                Our Story
              </Badge>
              <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">
                Building Financial Confidence Since 2009
              </h2>
              <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Kulswami Enterprise was founded with a simple mission: make professional
                  financial services accessible, reliable, and tailored to every business we serve.
                  What began as a small consultancy has grown into a full-service firm trusted by
                  startups, MSMEs, and established enterprises nationwide.
                </p>
                <p>
                  Our team of Chartered Accountants and finance professionals combines deep
                  technical knowledge with practical business insight. Whether you need day-to-day
                  bookkeeping, complex tax planning, or end-to-end regulatory compliance, we deliver
                  solutions that protect your business and support sustainable growth.
                </p>
                <p>
                  We believe compliance should never be a burden—it should be a foundation for
                  smarter decisions. That is why we invest in technology, continuous training, and
                  proactive client communication at every step.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="rounded-2xl bg-white p-8 shadow-md border border-gray-100">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Our Mission</h3>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  To empower businesses with expert financial guidance, seamless compliance, and
                  strategic advisory that drives long-term success.
                </p>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 p-8 border border-primary/10">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Our Vision</h3>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  To be the most trusted financial consultancy in India—known for integrity,
                  innovation, and exceptional client outcomes across every industry we serve.
                </p>
              </div>
              <div className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm border border-gray-100">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <p className="text-sm text-gray-600">
                  Serving clients across Pune, Mumbai, Delhi, Gujarat, Rajasthan, Kerala, and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-gray-100 bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              { icon: Users, value: "500+", label: "Happy Clients" },
              { icon: Calendar, value: "15+", label: "Years Experience" },
              { icon: CheckCircle2, value: "98%", label: "Client Satisfaction" },
              { icon: Shield, value: "100%", label: "Compliance Rate" },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label} className="text-center">
                <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <div className="text-3xl font-bold text-gray-900">{value}</div>
                <div className="mt-1 text-sm font-medium text-gray-600">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">Our Core Values</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              The principles that guide every engagement, filing, and advisory conversation.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl bg-white p-6 shadow-md transition-shadow hover:shadow-lg border border-gray-100"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-primary/5">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-900">{title}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">Our Journey</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Key milestones that shaped Kulswami Enterprise into the firm it is today.
            </p>
          </div>
          <div className="mx-auto max-w-3xl">
            {milestones.map(({ year, title, description }, index) => (
              <div key={year} className="relative flex gap-6 pb-10 last:pb-0">
                {index !== milestones.length - 1 && (
                  <div className="absolute left-5 top-12 bottom-0 w-0.5 bg-gradient-to-b from-primary to-primary/20" />
                )}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                  {year.slice(-2)}
                </div>
                <div className="flex-1 rounded-xl bg-white p-5 shadow-sm border border-gray-100">
                  <div className="flex flex-wrap items-baseline gap-2">
                    <span className="text-sm font-bold text-primary">{year}</span>
                    <h3 className="font-semibold text-gray-900">{title}</h3>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services & Industries */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">What We Offer</h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Comprehensive financial and regulatory services under one roof—so you can focus
                on running your business while we handle the rest.
              </p>
              <ul className="mt-8 space-y-3">
                {services.map((service) => (
                  <li key={service} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Industries We Serve</h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Our experience spans diverse sectors, each with unique compliance and reporting
                requirements we understand deeply.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-3">
                {industries.map((industry) => (
                  <div
                    key={industry}
                    className="rounded-xl bg-primary/5 px-4 py-3 text-sm font-medium text-gray-800 border border-primary/10"
                  >
                    {industry}
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-6 rounded-xl bg-white p-6 shadow-md border border-gray-100">
                <div className="text-center">
                  <div className="text-sm font-semibold text-gray-900">ISO Certified</div>
                  <div className="text-xs text-gray-500">Quality Management</div>
                </div>
                <div className="h-10 w-px bg-gray-200" />
                <div className="text-center">
                  <div className="text-sm font-semibold text-gray-900">NAAC Accredited</div>
                  <div className="text-xs text-gray-500">Professional Standards</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">Leadership Team</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Experienced Chartered Accountants leading specialized practice areas.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {leadership.map(({ name, role, focus }) => (
              <div
                key={name}
                className="rounded-2xl bg-white p-6 text-center shadow-md border border-gray-100"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/70 text-xl font-bold text-white">
                  {name
                    .split(" ")
                    .slice(1)
                    .map((n) => n[0])
                    .join("")}
                </div>
                <h3 className="font-semibold text-gray-900">{name}</h3>
                <p className="mt-1 text-sm font-medium text-primary">{role}</p>
                <p className="mt-2 text-xs text-gray-500">{focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-3xl bg-gradient-to-br from-primary to-primary/80 px-8 py-16 text-center text-white shadow-xl">
            <h2 className="text-3xl font-bold lg:text-4xl">Ready to Work With Us?</h2>
            <p className="mx-auto mt-4 max-w-xl text-white/90">
              Get in touch for a free consultation. Our team will assess your needs and recommend
              the right services for your business.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="gap-2 bg-white text-primary hover:bg-white/90"
              >
                <Link to="/#contact">
                  Contact Us
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="gap-2 border-white/40 bg-transparent text-white hover:bg-white/10"
              >
                <Link to="/">Back to Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutDetail;
