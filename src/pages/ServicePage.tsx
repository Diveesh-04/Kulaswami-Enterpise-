import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceDetail from "@/components/ServiceDetail";
import { getServiceBySlug } from "@/data/services";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="mx-auto max-w-7xl px-6 py-32 text-center">
          <h1 className="text-3xl font-bold text-gray-900">Service Not Found</h1>
          <p className="mt-4 text-gray-600">
            The service you are looking for does not exist.
          </p>
          <Button asChild className="mt-8">
            <Link to="/#services">Back to Services</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ServiceDetail service={service} />
      <Footer />
    </div>
  );
};

export default ServicePage;
