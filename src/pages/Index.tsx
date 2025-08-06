import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ConferenceModal from "@/components/ConferenceModal";
import AboutSection from "@/components/AboutSection";
import ProceedingsSection from "@/components/ProceedingsSection";
import HotelsSection from "@/components/HotelsSection";
import PlacesSection from "@/components/PlacesSection";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 space-y-0">
            <AboutSection />
            <ProceedingsSection />
            <HotelsSection />
            <PlacesSection />
          </div>
          
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </div>
      
      <Footer />
      <ConferenceModal />
    </div>
  );
};

export default Index;
