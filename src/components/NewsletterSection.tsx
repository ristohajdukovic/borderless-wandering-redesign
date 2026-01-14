import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <section className="py-12 md:py-20 lg:py-24 bg-secondary/40 border-y border-border/30 overflow-hidden relative">
      {/* Animated background glow */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Stay Informed. Stay Ahead.
            </h2>
          </AnimatedSection>
          
          <AnimatedSection delay={0.1}>
            <p className="text-foreground/70 mb-8 text-sm md:text-base">
              Get the latest on expat life, best cities, and practical tips delivered to your inbox.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 bg-card border border-border/50 rounded-lg text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-all duration-200 shadow-sm"
                required
              />
              <motion.button 
                type="submit" 
                className="bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-lg hover:bg-primary/90 transition-all duration-200 uppercase tracking-wide whitespace-nowrap shadow-lg shadow-primary/25"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
              </motion.button>
            </form>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <p className="text-xs text-foreground/60 mt-4">
              We respect your privacy. One-click unsubscribe. No spam.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
