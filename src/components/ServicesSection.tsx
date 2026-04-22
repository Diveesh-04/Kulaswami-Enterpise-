import { useState } from "react";
import {
  BookOpen,
  Building,
  Receipt,
  FileCheck,
  Briefcase,
  FileText,
  Users,
  CreditCard,
  ScrollText,
  Award,
  ArrowRight,
} from "lucide-react";

const services = [
  { icon: BookOpen, title: "Accounts Writing", desc: "Comprehensive bookkeeping and financial record management for businesses of all sizes." },
  { icon: Building, title: "Bank Audit", desc: "Thorough bank audit services ensuring compliance with regulatory standards." },
  { icon: Receipt, title: "GST Services", desc: "Complete GST registration, filing, and compliance management solutions." },
  { icon: FileCheck, title: "TDS Compliance", desc: "End-to-end TDS deduction, filing, and compliance advisory services." },
  { icon: Briefcase, title: "Professional Tax", desc: "Professional tax registration and timely payment management services." },
  { icon: FileText, title: "ROC Filing", desc: "Annual return filing and compliance management with Registrar of Companies." },
  { icon: Users, title: "Provident Fund", desc: "PF registration, monthly filing, and employee benefit management." },
  { icon: CreditCard, title: "PAN/TAN Services", desc: "Quick PAN and TAN application, correction, and management services." },
  { icon: ScrollText, title: "Gumasta License", desc: "Shop and establishment license registration and renewal services." },
  { icon: Award, title: "Udyam Registration", desc: "MSME Udyam registration for small and medium enterprises." },
];

const ServicesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="services" className="relative overflow-hidden py-24">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=2000')",
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 mb-6">
            <span className="text-white/80 text-sm font-medium">Our Services</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Never Ending
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-red-400">
              Opportunities
            </span>
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Comprehensive financial and regulatory solutions tailored to your business needs
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }, index) => (
            <div
              key={title}
              className="group relative cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Card */}
              <div className={`relative h-full rounded-2xl transition-all duration-300 ${
                hoveredIndex === index 
                  ? "bg-white shadow-2xl -translate-y-1" 
                  : "bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/30 hover:shadow-xl hover:shadow-black/10 hover:-translate-y-0.5"
              }`}>
                
                {/* Inner Content */}
                <div className="relative z-10 p-6">
                  {/* Icon */}
                  <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-xl transition-all duration-300 ${
                    hoveredIndex === index 
                      ? "bg-blue-500 shadow-lg shadow-blue-500/30" 
                      : "bg-white/20 group-hover:bg-white/30"
                  }`}>
                    <Icon className={`h-7 w-7 transition-all duration-300 text-white`} />
                  </div>
                  
                  {/* Title */}
                  <h3 className={`mb-2 font-semibold text-xl transition-all duration-300 ${
                    hoveredIndex === index ? "text-blue-600" : "text-white/90 group-hover:text-white"
                  }`}>
                    {title}
                  </h3>
                  
                  {/* Description */}
                  <p className={`text-sm leading-relaxed transition-all duration-300 ${
                    hoveredIndex === index ? "text-gray-600" : "text-white/60 group-hover:text-white/70"
                  }`}>
                    {desc}
                  </p>
                  
                  {/* Learn More Arrow */}
                  <div className={`mt-5 transition-all duration-300 ${
                    hoveredIndex === index ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
                  }`}>
                    <span className="text-sm font-medium text-blue-500 inline-flex items-center gap-2">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;