import Navbar from "@/components/Navbar";
import PremiumHeroSection from "@/components/PremiumHeroSection";
import MetricStrip from "@/components/MetricStrip";
import StartHereSection from "@/components/StartHereSection";
import ArticlesSection from "@/components/ArticlesSection";
import AuthorQuoteSection from "@/components/AuthorQuoteSection";
import VideoGrid from "@/components/VideoGrid";
import AboutSection from "@/components/AboutSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main id="main-content">
        <PremiumHeroSection />
        <MetricStrip />
        <StartHereSection />
        <ArticlesSection />
        <AuthorQuoteSection />
        <VideoGrid />
        <AboutSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
