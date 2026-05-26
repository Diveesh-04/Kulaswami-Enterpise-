import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle2, 
  Users, 
  Award, 
  Target, 
  Shield, 
  TrendingUp,
  ArrowRight,
  Calendar,
  Building2,
  Star,
  Briefcase,
  HeartHandshake,
  Sparkles
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  const [hoveredStat, setHoveredStat] = useState(null);

  const stats = [
    { icon: Users, value: "500+", label: "Happy Clients", description: "Trusted by businesses nationwide", color: "from-blue-500 to-cyan-500" },
    { icon: Award, value: "15+", label: "Years Experience", description: "Since 2009", color: "from-purple-500 to-pink-500" },
    { icon: Target, value: "98%", label: "Success Rate", description: "Client satisfaction", color: "from-emerald-500 to-green-500" },
    { icon: CheckCircle2, value: "100%", label: "Compliance", description: "Regulatory adherence", color: "from-orange-500 to-red-500" },
  ];

  const values = [
    {
      icon: Shield,
      title: "Expert Team",
      desc: "Certified professionals with deep expertise in tax, audit, and regulatory compliance.",
    },
    {
      icon: HeartHandshake,
      title: "Client-First Approach",
      desc: "Personalized solutions tailored to your unique business requirements and goals.",
    },
    {
      icon: TrendingUp,
      title: "Proven Track Record",
      desc: "Years of successful engagements across industries with exceptional client retention.",
    },
  ];

  const milestones = [
    { year: "2009", title: "Company Founded", description: "Started our journey in financial consultancy" },
    { year: "2015", title: "Expanded Team", description: "Grew to 50+ certified professionals" },
    { year: "2020", title: "Digital Transformation", description: "Launched advanced client portal" },
    { year: "2024", title: "Global Reach", description: "Serving clients across 10+ countries" },
  ];

  return (
    <section id="about" className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50 py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/3 rounded-full filter blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <Badge className="mb-4 gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary border-0">
            <Sparkles className="h-3 w-3" />
            ABOUT OUR COMPANY
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 lg:text-5xl">
            Your Trusted Partner in 
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Financial Success
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            We are a leading financial consultancy firm dedicated to helping businesses 
            achieve excellence through expert guidance and comprehensive compliance solutions.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Story */}
          <div className="space-y-8">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full filter blur-2xl" />
              <h3 className="relative text-3xl font-bold text-gray-900 mb-4">
                Building Financial Confidence
                <span className="block text-primary text-2xl">Since 2009</span>
              </h3>
            </div>
            
            <div className="space-y-4">
              <p className="text-base leading-relaxed text-gray-600">
                For over 15 years, we have been providing comprehensive financial and regulatory 
                services to businesses of all sizes. Our team of experienced professionals combines 
                technical expertise with practical insights to deliver solutions that drive results.
              </p>
              <p className="text-base leading-relaxed text-gray-600">
                From startups to established enterprises, we understand the unique challenges 
                businesses face in today's complex regulatory environment. That's why we offer 
                end-to-end services that ensure compliance while optimizing your financial performance.
              </p>
            </div>
            
            {/* Values with Icons - Enhanced */}
            <div className="space-y-4 pt-4">
              {values.map(({ icon: Icon, title, desc }, index) => (
                <div 
                  key={title} 
                  className="group flex gap-4 rounded-2xl bg-white p-4 transition-all duration-300 hover:shadow-lg hover:-translate-x-1"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0">
                    <div className="rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 p-3 group-hover:from-primary group-hover:to-primary/80 transition-all duration-300">
                      <Icon className="h-5 w-5 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Button asChild className="group gap-2 bg-primary hover:bg-primary/90">
              <Link to="/about">
                Learn More About Us
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          {/* Right Column - Stats and Milestones */}
          <div className="space-y-8">
            {/* Stats Grid - Enhanced */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ icon: Icon, value, label, description, color }, index) => (
                <div
                  key={label}
                  className="group relative overflow-hidden rounded-2xl bg-white p-6 text-center shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
                  onMouseEnter={() => setHoveredStat(index)}
                  onMouseLeave={() => setHoveredStat(null)}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 transition-opacity duration-300 group-hover:opacity-10`} />
                  <div className="relative">
                    <div className="mb-3 flex justify-center">
                      <div className={`flex h-14 w-14 items-center justify-center rounded-xl transition-all duration-300 ${
                        hoveredStat === index 
                          ? `bg-gradient-to-br ${color} shadow-lg` 
                          : "bg-gray-100"
                      }`}>
                        <Icon className={`h-7 w-7 transition-all duration-300 ${
                          hoveredStat === index ? "text-white" : "text-primary"
                        }`} />
                      </div>
                    </div>
                    <div className={`text-3xl font-bold transition-colors duration-300 ${
                      hoveredStat === index ? `bg-gradient-to-br ${color} bg-clip-text text-transparent` : "text-gray-900"
                    }`}>
                      {value}
                    </div>
                    <div className="mt-1 text-sm font-semibold text-gray-900">{label}</div>
                    <div className="mt-1 text-xs text-gray-500">{description}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Milestones Timeline */}
            <div className="rounded-2xl bg-white p-6 shadow-md">
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="h-5 w-5 text-primary" />
                <h4 className="font-semibold text-gray-900">Our Journey</h4>
              </div>
              <div className="grid gap-4">
                {milestones.map(({ year, title, description }, index) => (
                  <div key={year} className="relative flex gap-4">
                    {index !== milestones.length - 1 && (
                      <div className="absolute left-5 top-10 bottom-0 w-0.5 bg-gradient-to-b from-primary to-primary/20" />
                    )}
                    <div className="flex-shrink-0">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <span className="text-xs font-bold text-primary">{year.slice(-2)}</span>
                      </div>
                    </div>
                    <div className="flex-1 pb-4">
                      <h5 className="font-semibold text-gray-900">{title}</h5>
                      <p className="text-sm text-gray-500">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Badge */}
            <div className="flex items-center justify-center gap-4 rounded-xl bg-gradient-to-r from-primary/5 to-primary/10 p-4">
              <Building2 className="h-8 w-8 text-primary/60" />
              <div className="text-center">
                <div className="text-sm font-semibold text-gray-900">ISO Certified</div>
                <div className="text-xs text-gray-500">Quality Management System</div>
              </div>
              <div className="w-px h-8 bg-primary/20" />
              <div className="text-center">
                <div className="text-sm font-semibold text-gray-900">NAAC Accredited</div>
                <div className="text-xs text-gray-500">Professional Standards</div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default AboutSection;