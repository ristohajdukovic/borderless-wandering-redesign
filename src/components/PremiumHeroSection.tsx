import { useState } from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import premiumEbook from "@/assets/premium-ebook-mockup.png";

const PremiumHeroSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log("Form submitted:", { email });
    setTimeout(() => setIsSubmitting(false), 1000);
  };

  const valueBullets = [
    "End the Vigilance Tax: Identify High-Trust Communities Where You Can Lower Your Guard and Actually Relax.",
    "Guarantee Your Standard of Care: Master the 4 Critical Benchmarks for Accessing Reliable Medical Systems Anywhere in the World.",
    "Quantify Your Confidence: Use the 10-Factor City Scorecard to Rank Your Top Destinations Based on Data, Not Emotion.",
  ];

  return (
    <section className="relative w-full bg-gradient-to-br from-background via-card to-background overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 pointer-events-none" />
      
      <motion.div 
        className="absolute top-1/2 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          <motion.div 
            className="w-full lg:w-[60%] space-y-8 text-left order-1 lg:order-1 relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-primary font-sans text-xs md:text-sm font-semibold uppercase tracking-[0.2em] leading-relaxed"
            >
              The 50+ Blueprint: Secure Your Global Future with a Practical Roadmap Built for Long-Term Stability.
            </motion.p>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight"
            >
              Build Your Fortress: Stop Chasing Temporary "Vibes" and Establish a Strategic Base for Lasting Peace of Mind.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-sans text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl"
            >
              De-Risk Your Departure: A High-Stakes Vetting System to Verify Safety and Healthcare Infrastructure Before You Commit Your Capital.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="block lg:hidden w-full max-w-sm mx-auto py-8"
            >
              <img src={premiumEbook} alt="Premium Framework Ebook" className="w-full h-auto drop-shadow-2xl" />
            </motion.div>

            <motion.ul 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-4 pt-2"
            >
              {valueBullets.map((bullet, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 mt-0.5 rounded-full bg-primary/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary" strokeWidth={3} />
                  </span>
                  <span className="font-sans text-muted-foreground text-base md:text-lg">{bullet}</span>
                </li>
              ))}
            </motion.ul>

            <motion.form 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              onSubmit={handleSubmit} 
              className="pt-6 space-y-4"
            >
              <div className="flex flex-col sm:flex-row gap-3 max-w-lg">
                <input
                  type="email"
                  placeholder="Enter your best email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-4 py-4 bg-input border border-border rounded-md text-foreground placeholder:text-muted-foreground font-sans text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                />
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-sans font-bold text-sm md:text-base rounded-md transition-all duration-200 whitespace-nowrap disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
                >
                  {isSubmitting ? "Sending..." : "Send Me the Framework & Scorecard"}
                </motion.button>
              </div>
              <p className="font-sans text-xs text-muted-foreground">
                We respect your privacy. One-click unsubscribe. No hype.
              </p>
            </motion.form>
          </motion.div>

          <motion.div 
            className="hidden lg:flex w-full lg:w-[40%] items-center justify-center order-2"
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <motion.div 
                className="absolute inset-0 bg-primary/10 blur-3xl rounded-full scale-150"
                animate={{ scale: [1.4, 1.6, 1.4], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.img
                src={premiumEbook}
                alt="Premium Framework Ebook"
                className="relative w-full max-w-md h-auto drop-shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PremiumHeroSection;
