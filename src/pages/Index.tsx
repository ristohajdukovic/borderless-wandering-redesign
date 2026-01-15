import SocialBar from "@/components/SocialBar";
import Navbar from "@/components/Navbar";
import PremiumHeroSection from "@/components/PremiumHeroSection";
import TrustBar from "@/components/TrustBar";
import ServicesSection from "@/components/ServicesSection";
import ArticlesSection from "@/components/ArticlesSection";
import VideoSection from "@/components/VideoSection";
import NewsletterSection from "@/components/NewsletterSection";
import AboutMeSection from "@/components/AboutMeSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SocialBar />
      <Navbar />
      <main>
        <PremiumHeroSection />
        <TrustBar />
        <ServicesSection />
        <ArticlesSection />
        <VideoSection />
        <NewsletterSection />
        <AboutMeSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
