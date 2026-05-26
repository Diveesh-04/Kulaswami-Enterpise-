import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  CheckCircle2, 
  Shield, 
  TrendingUp,
  Users,
  Star,
  Play,
  FileCheck,
  BarChart3,
  IndianRupee,
  FileText,
} from "lucide-react";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const stats = [
    { label: "Happy Clients", value: "500+", icon: Users },
    { label: "Projects Completed", value: "1000+", icon: FileCheck },
    { label: "Years Experience", value: "15+", icon: Star },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=2000')",
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/70" />
      
      {/* Animated Background Pattern - Hidden on mobile for performance */}
      <div className="absolute inset-0 opacity-30 hidden md:block">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-8 px-4 sm:px-6 py-12 sm:py-20 lg:flex-row lg:gap-12">
        {/* Left Content */}
        <div className="flex-1 space-y-6 sm:space-y-8 text-center lg:text-left">
          <Badge variant="secondary" className="gap-2 rounded-full bg-white/10 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-white backdrop-blur-sm border-white/20 animate-fade-in mx-auto lg:mx-0 w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            TRUSTED FINANCIAL PARTNER
          </Badge>

          <div className="space-y-3 sm:space-y-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight tracking-tight text-white">
              Achieve Financial{" "}
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                Excellence
              </span>
              <br />
              <span className="text-white/80 sm:text-white/90 text-lg sm:text-xl lg:text-2xl block mt-2">
                & Regulatory Compliance
              </span>
            </h1>

            <p className="max-w-lg text-sm sm:text-base lg:text-lg text-gray-200 leading-relaxed mx-auto lg:mx-auto">
              Expert tax consultation, comprehensive audit services, and strategic advisory
              solutions to help your business thrive in today's regulatory landscape.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <Button size={isMobile ? "default" : "lg"} className="bg-primary hover:bg-primary/90 gap-2 group text-sm sm:text-base px-6 sm:px-8 shadow-lg shadow-primary/20">
              Get Started
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size={isMobile ? "default" : "lg"} variant="outline" className="bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 border-white/30 gap-2 text-sm sm:text-base">
              <Play className="h-4 w-4" />
              Watch Demo
            </Button>
          </div>

          {/* Trust Indicators - Responsive Grid */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            {stats.map(({ label, value, icon: Icon }) => (
              <div key={label} className="flex items-center gap-2 sm:gap-3">
                <div className="rounded-full bg-primary/20 p-1.5 sm:p-2">
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-white">{value}</div>
                  <div className="text-xs sm:text-sm text-gray-300">{label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* IRS Information Cards - Mobile Optimized */}
          <div className="rounded-xl bg-black/40 backdrop-blur-md border border-white/10 p-3 sm:p-5 animate-fade-in-up mx-2 sm:mx-0" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              <p className="text-xs sm:text-sm font-medium text-white">
                Official Resources & Information
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 text-xs sm:text-sm">
              <a href="#" className="group flex items-center gap-2 text-gray-200 hover:text-primary transition-colors">
                <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all hidden sm:block" />
                IRS.gov (English)
              </a>
              <a href="#" className="group flex items-center gap-2 text-gray-200 hover:text-primary transition-colors">
                <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all hidden sm:block" />
                IRS.gov/Forms (Spanish)
              </a>
              <a href="#" className="group flex items-center gap-2 text-gray-200 hover:text-primary transition-colors">
                <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all hidden sm:block" />
                IRS.gov/Forms/Help (Korean)
              </a>
              <a href="#" className="group flex items-center gap-2 text-gray-200 hover:text-primary transition-colors">
                <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all hidden sm:block" />
                IRS.gov/Forms/PDF (Portuguese)
              </a>
            </div>
            <div className="mt-2 sm:mt-3 flex items-center gap-2 text-xs text-gray-300">
              <CheckCircle2 className="h-3 w-3 text-primary" />
              For more information: <span className="font-semibold text-white">contact us</span>
            </div>
          </div>
        </div>

        {/* Right Content - Hidden on very small screens, shown on tablet and up */}
        <div className="hidden md:block flex-1 animate-fade-in-right" style={{ animationDelay: "0.2s" }}>
          <div className="relative mx-auto max-w-md">
            {/* Floating Card 1 - Hidden on mobile */}
            <div className="absolute -top-5 -left-5 z-20 rounded-xl bg-white/10 backdrop-blur-md p-3 border border-white/20 shadow-xl hidden lg:block">
              <div className="flex items-center gap-2">
                <div className="rounded-lg bg-primary/20 p-2">
                  <TrendingUp className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-gray-300">Growth Rate</div>
                  <div className="text-sm font-bold text-white">+45% YoY</div>
                </div>
              </div>
            </div>

            {/* Floating Card 2 - Hidden on mobile */}
            <div className="absolute -bottom-5 -right-5 z-20 rounded-xl bg-white/10 backdrop-blur-md p-3 border border-white/20 shadow-xl hidden lg:block">
              <div className="flex items-center gap-2">
                <div className="rounded-lg bg-primary/20 p-2">
                  <Users className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-gray-300">Client Satisfaction</div>
                  <div className="text-sm font-bold text-white">98% Happy</div>
                </div>
              </div>
            </div>

            {/* Main Card — Financial Dashboard */}
            <div className="relative rounded-2xl border border-white/20 bg-gradient-to-br from-white/15 to-white/5 p-4 sm:p-5 shadow-2xl backdrop-blur-md">
              {/* Card header */}
              <div className="mb-4 flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/25 ring-1 ring-primary/30">
                    <BarChart3 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Financial Overview</h3>
                    <p className="text-xs text-gray-400">FY 2025–26 · Kulswami Enterprise</p>
                  </div>
                </div>
                <Badge className="shrink-0 gap-1 border-0 bg-emerald-500/20 text-emerald-300 text-[10px] sm:text-xs">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live
                </Badge>
              </div>

              {/* KPI row */}
              <div className="mb-4 grid grid-cols-3 gap-2">
                {[
                  { label: "Revenue", value: "₹2.4Cr", change: "+32%", up: true },
                  { label: "Tax Saved", value: "₹18L", change: "+12%", up: true },
                  { label: "Compliance", value: "100%", change: "On track", up: true },
                ].map(({ label, value, change, up }) => (
                  <div
                    key={label}
                    className="rounded-xl border border-white/10 bg-white/5 px-2.5 py-2.5 sm:px-3 sm:py-3"
                  >
                    <p className="text-[10px] text-gray-400 sm:text-xs">{label}</p>
                    <p className="mt-0.5 text-sm font-bold text-white sm:text-base">{value}</p>
                    <p className={`mt-0.5 text-[10px] font-medium sm:text-xs ${up ? "text-emerald-400" : "text-red-400"}`}>
                      {change}
                    </p>
                  </div>
                ))}
              </div>

              {/* Chart area */}
              <div className="rounded-xl border border-white/10 bg-black/20 p-3 sm:p-4">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-xs font-medium text-gray-300">Monthly Performance</span>
                  <span className="text-[10px] text-gray-500">Last 6 months</span>
                </div>
                <div className="flex h-28 sm:h-32 items-end justify-between gap-1.5 sm:gap-2">
                  {[
                    { month: "Oct", height: "45%" },
                    { month: "Nov", height: "58%" },
                    { month: "Dec", height: "52%" },
                    { month: "Jan", height: "70%" },
                    { month: "Feb", height: "85%" },
                    { month: "Mar", height: "100%" },
                  ].map(({ month, height }, i) => (
                    <div key={month} className="flex flex-1 flex-col items-center gap-1.5">
                      <div className="relative flex w-full flex-1 items-end justify-center">
                        <div
                          className={`w-full max-w-[28px] rounded-t-md bg-gradient-to-t transition-all duration-500 ${
                            i === 5
                              ? "from-primary to-primary/60 shadow-lg shadow-primary/30"
                              : "from-white/30 to-white/10"
                          }`}
                          style={{ height }}
                        />
                      </div>
                      <span className="text-[9px] text-gray-500 sm:text-[10px]">{month}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Filing status rows */}
              <div className="mt-4 space-y-2.5">
                {[
                  { icon: FileText, label: "GST Returns", status: "Filed", pct: 100 },
                  { icon: IndianRupee, label: "TDS Compliance", status: "On time", pct: 100 },
                  { icon: Shield, label: "ROC Filings", status: "98%", pct: 98 },
                ].map(({ icon: Icon, label, status, pct }) => (
                  <div key={label} className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="flex items-center gap-1.5 text-gray-300">
                        <Icon className="h-3.5 w-3.5 text-primary/80" />
                        {label}
                      </span>
                      <span className="font-medium text-white">{status}</span>
                    </div>
                    <div className="h-1 overflow-hidden rounded-full bg-white/10">
                      <div
                        className={`h-full rounded-full ${
                          pct === 100
                            ? "bg-gradient-to-r from-emerald-500 to-emerald-400"
                            : "bg-gradient-to-r from-primary to-primary/60"
                        }`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <Button
                variant="ghost"
                className="mt-4 w-full gap-2 border border-white/10 bg-white/5 text-white hover:bg-white/10 text-xs sm:text-sm"
              >
                View Full Dashboard
                <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </div>

            {/* Trust Badge */}
            <div className="absolute -right-3 top-1/2 -translate-y-1/2 z-30 hidden xl:block">
              <div className="rounded-full bg-primary p-2 shadow-lg">
                <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce hidden sm:block">
        <div className="flex flex-col items-center gap-1">
          <span className="text-xs text-gray-400">Scroll to explore</span>
          <div className="w-5 h-8 sm:w-6 sm:h-10 rounded-full border-2 border-white/30 flex justify-center">
            <div className="w-1 h-2 bg-white/50 rounded-full mt-2 animate-scroll" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes slide {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        
        @keyframes scroll {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(10px); opacity: 0; }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-fade-in-right {
          animation: fade-in-right 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
        
        .animate-slide {
          animation: slide 0.8s ease-out;
        }
        
        .animate-scroll {
          animation: scroll 1.5s ease-in-out infinite;
        }
        
        .delay-1000 {
          animation-delay: 1s;
        }

        /* Mobile optimizations */
        @media (max-width: 640px) {
          .animate-fade-in-up {
            animation-duration: 0.4s;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;