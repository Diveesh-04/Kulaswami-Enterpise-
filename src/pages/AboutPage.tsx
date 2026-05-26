import Navbar from "@/components/Navbar";
import AboutDetail from "@/components/AboutDetail";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <AboutDetail />
      <Footer />
    </div>
  );
};

export default AboutPage;
