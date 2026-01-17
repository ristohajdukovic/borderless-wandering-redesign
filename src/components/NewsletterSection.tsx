import { useState } from "react";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ArrowButton from "@/components/ui/ArrowButton";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <section className="py-12 md:py-20 lg:py-24 bg-primary border-y border-primary/20 overflow-hidden relative">
      {/* Animated background glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-[16px] blur-3xl"
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
              Join 100,000+ people immersed into real expat experiences
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p className="text-primary-foreground/85 mb-8 text-sm md:text-base">
              When there's something worth sending. Never more than once per month. No spam. If you prefer LinkedIn,
              follow the LinkedIn newsletter instead.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                id="newsletter-email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-describedby="newsletter-helper"
                className="flex-[2] px-5 py-3.5 bg-primary-foreground text-primary border border-primary-foreground/60 rounded-[6px] placeholder:text-primary/60 focus:ring-2 focus:ring-primary-foreground focus:border-primary-foreground focus:outline-none transition-all duration-200 shadow-sm focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                required
              />
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <ArrowButton label="Subscribe" type="submit" variant="secondary" size="md" />
                </motion.div>
                <motion.a
                  href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=6957952531863920640"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow on LinkedIn"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-[6px] border border-primary-foreground/60 text-primary-foreground hover:bg-primary-foreground/10 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                  <Linkedin className="h-5 w-5" />
                </motion.a>
              </div>
            </form>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <p id="newsletter-helper" className="text-xs text-primary-foreground/75 mt-4">
              We respect your privacy. One-click unsubscribe. No spam.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
