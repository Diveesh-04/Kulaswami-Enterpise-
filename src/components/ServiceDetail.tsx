import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { services, type Service } from "@/data/services";
import { getServiceIcon } from "@/lib/service-icons";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceDetailProps {
  service: Service;
}

const ServiceDetail = ({ service }: ServiceDetailProps) => {
  const Icon = getServiceIcon(service.icon);
  const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 4);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero */}
      <section className="relative overflow-hidden py-24">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url('${service.image}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900/95 to-primary/90" />
        <div className="relative mx-auto max-w-7xl px-6">
          <Link
            to="/#services"
            className="mb-8 inline-flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Services
          </Link>
          <div className="max-w-3xl">
            <Badge className="mb-6 gap-2 rounded-full border-white/30 bg-white/20 px-4 py-2 text-white backdrop-blur-sm">
              <Icon className="h-4 w-4" />
              Our Services
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white lg:text-6xl">
              {service.title}
            </h1>
            <p className="text-lg text-gray-200 leading-relaxed">{service.desc}</p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Badge className="mb-4 gap-2 rounded-full border-0 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <Sparkles className="h-3 w-3" />
                Overview
              </Badge>
              <h2 className="text-3xl font-bold text-gray-900">
                What is {service.title}?
              </h2>
              <p className="mt-6 text-gray-600 leading-relaxed text-lg">
                {service.overview}
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-md border border-gray-100 h-fit">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary">
                <Icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900">Need this service?</h3>
              <p className="mt-2 text-sm text-gray-600">
                Speak with our experts for a tailored quote and timeline.
              </p>
              <Button asChild className="mt-6 w-full gap-2">
                <Link to="/#contact">
                  Get a Consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings & Benefits */}
      <section className="border-t border-gray-100 bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">What We Offer</h2>
              <ul className="mt-8 space-y-4">
                {service.offerings.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Key Benefits</h2>
              <ul className="mt-8 space-y-4">
                {service.benefits.map((item) => (
                  <li
                    key={item}
                    className="rounded-xl bg-white p-4 shadow-sm border border-gray-100 text-gray-700"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center gap-3 mb-8">
            <Users className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold text-gray-900">Who It&apos;s For</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {service.whoItsFor.map((item) => (
              <div
                key={item}
                className="rounded-xl bg-primary/5 px-5 py-4 text-gray-800 border border-primary/10 font-medium"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="border-t border-gray-100 bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-8 text-2xl font-bold text-gray-900">Other Services</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {otherServices.map((s) => {
              const OtherIcon = getServiceIcon(s.icon);
              return (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  className="group rounded-2xl bg-white p-5 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg border border-gray-100"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary transition-colors">
                    <OtherIcon className="h-5 w-5 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500 line-clamp-2">{s.desc}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-3xl bg-gradient-to-br from-primary to-primary/80 px-8 py-14 text-center text-white shadow-xl">
            <h2 className="text-2xl font-bold lg:text-3xl">
              Ready to get started with {service.title}?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/90">
              Contact Kulswami Enterprise today for expert support tailored to your business.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
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
                <Link to="/#services">View All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
