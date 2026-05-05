import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import MethodologySection from "@/components/MethodologySection";
import SevenSSection from "@/components/SevenSSection";
import BenefitsSection from "@/components/BenefitsSection";
import CtaBanner from "@/components/CtaBanner";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WaveBackground from "@/components/WaveBackground";

const Index = () => (
  <>
    {/* Canvas fijo detrás de todo — solo renderiza lo visible */}
    <WaveBackground />
    <Navbar />
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <MethodologySection />
    <SevenSSection />
    <BenefitsSection />
    <CtaBanner />
    <ContactSection />
    <Footer />
  </>
);

export default Index;
