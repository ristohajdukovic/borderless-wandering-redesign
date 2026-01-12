import SocialBar from "@/components/SocialBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ArticlesSection from "@/components/ArticlesSection";
import VideoSection from "@/components/VideoSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SocialBar />
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <ArticlesSection />
        <VideoSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
