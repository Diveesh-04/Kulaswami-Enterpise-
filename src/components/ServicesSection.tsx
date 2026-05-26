import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { services } from "@/data/services";
import { getServiceIcon } from "@/lib/service-icons";

const ServicesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="relative overflow-hidden py-24">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=2000')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
            <span className="text-sm font-medium text-white/80">Our Services</span>
          </div>
          <h2 className="mb-4 text-5xl font-bold text-white md:text-6xl">
            Never Ending
            <span className="block bg-gradient-to-r from-yellow-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              Opportunities
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white/80">
            Comprehensive financial and regulatory solutions tailored to your business needs
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon, title, desc, slug }, index) => {
            const Icon = getServiceIcon(icon);
            return (
              <Link
                key={slug}
                to={`/services/${slug}`}
                className="group relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className={`relative h-full rounded-2xl transition-all duration-300 ${
                    hoveredIndex === index
                      ? "bg-white shadow-2xl -translate-y-1"
                      : "border border-white/20 bg-white/10 backdrop-blur-sm hover:-translate-y-0.5 hover:border-white/30 hover:shadow-xl hover:shadow-black/10"
                  }`}
                >
                  <div className="relative z-10 p-6">
                    <div
                      className={`mb-5 flex h-14 w-14 items-center justify-center rounded-xl transition-all duration-300 ${
                        hoveredIndex === index
                          ? "bg-blue-500 shadow-lg shadow-blue-500/30"
                          : "bg-white/20 group-hover:bg-white/30"
                      }`}
                    >
                      <Icon className="h-7 w-7 text-white transition-all duration-300" />
                    </div>

                    <h3
                      className={`mb-2 text-xl font-semibold transition-all duration-300 ${
                        hoveredIndex === index
                          ? "text-blue-600"
                          : "text-white/90 group-hover:text-white"
                      }`}
                    >
                      {title}
                    </h3>

                    <p
                      className={`text-sm leading-relaxed transition-all duration-300 ${
                        hoveredIndex === index
                          ? "text-gray-600"
                          : "text-white/60 group-hover:text-white/70"
                      }`}
                    >
                      {desc}
                    </p>

                    <span
                      className={`mt-4 inline-flex items-center gap-1 text-sm font-medium transition-all duration-300 ${
                        hoveredIndex === index
                          ? "text-blue-600"
                          : "text-white/50 group-hover:text-white/80"
                      }`}
                    >
                      Learn more
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
