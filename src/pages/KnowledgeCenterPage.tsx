import Navbar from "@/components/Navbar";
import KnowledgeCenter from "@/components/Knowledgecenter";
import Footer from "@/components/Footer";

const KnowledgeCenterPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <KnowledgeCenter />
      <Footer />
    </div>
  );
};

export default KnowledgeCenterPage;
