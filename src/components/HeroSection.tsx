import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3, 
  ArrowRight, 
  CheckCircle2, 
  Shield, 
  TrendingUp,
  Users,
  Star,
  Play,
  FileCheck
} from "lucide-react";
import { useState } from "react";

const HeroSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const stats = [
    { label: "Happy Clients", value: "500+", icon: Users },
    { label: "Projects Completed", value: "1000+", icon: FileCheck },
    { label: "Years Experience", value: "15+", icon: Star },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image - Unchanged */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=2000')",
        }}
      />
      
      {/* Enhanced Gradient Overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/70" />
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-12 px-6 py-20 lg:flex-row">
        {/* Left Content */}
        <div className="flex-1 space-y-8">
          <Badge variant="secondary" className="gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm border-white/20 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            TRUSTED FINANCIAL PARTNER
          </Badge>

          <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <h1 className="text-5xl font-bold leading-tight tracking-tight text-white lg:text-7xl">
              Achieve Financial{" "}
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                Excellence
              </span>
              <br />
              <span className="text-white/90">& Regulatory Compliance</span>
            </h1>

            <p className="max-w-lg text-lg text-gray-200 leading-relaxed">
              Expert tax consultation, comprehensive audit services, and strategic advisory
              solutions to help your business thrive in today's regulatory landscape.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <Button size="lg" className="bg-primary hover:bg-primary/90 gap-2 group text-lg px-8 shadow-lg shadow-primary/20">
              Get Started
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 border-white/30 gap-2">
              <Play className="h-4 w-4" />
              Watch Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-6 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            {stats.map(({ label, value, icon: Icon }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="rounded-full bg-primary/20 p-2">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">{value}</div>
                  <div className="text-sm text-gray-300">{label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* IRS Information Cards - Redesigned */}
          <div className="rounded-xl bg-black/40 backdrop-blur-md border border-white/10 p-5 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-2 mb-3">
              <Shield className="h-5 w-5 text-primary" />
              <p className="text-sm font-medium text-white">
                Official Resources & Information
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm md:grid-cols-4">
              <a href="#" className="group flex items-center gap-2 text-gray-200 hover:text-primary transition-colors">
                <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all" />
                IRS.gov (English)
              </a>
              <a href="#" className="group flex items-center gap-2 text-gray-200 hover:text-primary transition-colors">
                <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all" />
                IRS.gov/Forms (Spanish)
              </a>
              <a href="#" className="group flex items-center gap-2 text-gray-200 hover:text-primary transition-colors">
                <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all" />
                IRS.gov/Forms/Help (Korean)
              </a>
              <a href="#" className="group flex items-center gap-2 text-gray-200 hover:text-primary transition-colors">
                <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all" />
                IRS.gov/Forms/PDF (Portuguese)
              </a>
            </div>
            <div className="mt-3 flex items-center gap-2 text-xs text-gray-300">
              <CheckCircle2 className="h-3 w-3 text-primary" />
              For more information: <span className="font-semibold text-white">contact us</span>
            </div>
          </div>
        </div>

        {/* Right Content - Redesigned */}
        <div className="flex-1 animate-fade-in-right" style={{ animationDelay: "0.2s" }}>
          <div className="relative mx-auto max-w-md">
            {/* Floating Card 1 */}
            <div className="absolute -top-5 -left-5 z-20 rounded-xl bg-white/10 backdrop-blur-md p-3 border border-white/20 shadow-xl">
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

            {/* Floating Card 2 */}
            <div className="absolute -bottom-5 -right-5 z-20 rounded-xl bg-white/10 backdrop-blur-md p-3 border border-white/20 shadow-xl">
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

            {/* Main Card */}
            <div className="relative rounded-2xl border border-white/20 bg-gradient-to-br from-white/15 to-white/5 p-6 shadow-2xl backdrop-blur-md">
              <div className="flex h-64 items-center justify-center rounded-xl bg-gradient-to-br from-white/10 to-white/5 relative overflow-hidden group">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 animate-shimmer" />
                
                {/* Chart Icon */}
                <BarChart3 className="h-28 w-28 text-white/50 transition-transform group-hover:scale-110 duration-300" />
                
                {/* Overlay Text */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white font-medium">Financial Dashboard</span>
                </div>
              </div>
              
              <div className="mt-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-xs text-gray-300">Live Data</span>
                  </div>
                  <Badge className="bg-primary/20 text-primary border-0 text-xs">
                    Updated Daily
                  </Badge>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-300">Revenue Growth</span>
                    <span className="text-white font-semibold">+32%</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-primary to-primary/60 animate-slide" />
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-300">Compliance Rate</span>
                    <span className="text-white font-semibold">100%</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full w-full rounded-full bg-gradient-to-r from-green-500 to-emerald-500 animate-slide" />
                  </div>
                </div>
                
                <Button variant="ghost" className="w-full mt-2 text-white hover:bg-white/10 gap-2 group">
                  View Analytics
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>

            {/* Trust Badge */}
            <div className="absolute -right-3 top-1/2 -translate-y-1/2 z-30 hidden lg:block">
              <div className="rounded-full bg-primary p-2 shadow-lg">
                <Shield className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="flex flex-col items-center gap-1">
          <span className="text-xs text-gray-400">Scroll to explore</span>
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center">
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
      `}</style>
    </section>
  );
};

export default HeroSection;