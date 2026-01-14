import { motion } from "framer-motion";
import { MapPin, Briefcase, Globe, Award, ArrowRight } from "lucide-react";
import SocialBar from "@/components/SocialBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";

const AboutPage = () => {
  const timeline = [
    {
      year: "2017",
      location: "Southeast Asia",
      title: "The Journey Begins",
      description: "Left the U.S. for Thailand, beginning a six-year exploration of what it means to live without borders.",
    },
    {
      year: "2019",
      location: "Vietnam & Indonesia",
      title: "Expanding Horizons",
      description: "Explored the digital nomad hubs of Saigon and Bali, learning the real costs of the expat lifestyle.",
    },
    {
      year: "2021",
      location: "South America",
      title: "New Continent, New Insights",
      description: "Moved to Medellín and Bogotá, discovering the stark differences between hype and reality in Latin America.",
    },
    {
      year: "2023",
      location: "United States",
      title: "Return & Reflection",
      description: "Returned to the U.S. with six years of hard-won wisdom about what makes a location truly sustainable.",
    },
  ];

  const values = [
    {
      icon: Globe,
      title: "Ground-Level Truth",
      description: "No sponsored content. No affiliate deals that compromise honesty. Just real experience from someone who's lived it.",
    },
    {
      icon: Briefcase,
      title: "Practical Over Romantic",
      description: "Healthcare access, banking infrastructure, and visa stability matter more than Instagram aesthetics.",
    },
    {
      icon: Award,
      title: "Long-Term Thinking",
      description: "Built for men making permanent decisions, not gap-year tourists chasing the next trendy destination.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SocialBar />
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-background via-secondary/30 to-background overflow-hidden">
          <motion.div 
            className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <AnimatedSection>
                <p className="text-primary font-sans text-sm font-semibold uppercase tracking-[0.2em] mb-4">
                  About The Borderless Office
                </p>
              </AnimatedSection>
              
              <AnimatedSection delay={0.1}>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                  Real Experience.
                  <br />
                  <span className="text-primary">No BS.</span>
                </h1>
              </AnimatedSection>
              
              <AnimatedSection delay={0.2}>
                <p className="font-sans text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  After six years living abroad across four continents, I created The Borderless Office 
                  to share the unfiltered truth about expatriate life—for men who need practical guidance, 
                  not travel influencer fantasies.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* The Story Section */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <AnimatedSection direction="left">
                <div className="space-y-6">
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                    Why I Started This
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      In 2017, I left behind a successful career in the U.S. for what I thought would be 
                      paradise in Southeast Asia. What I found instead was a steep learning curve about 
                      the hidden costs of the "geo-arbitrage" lifestyle everyone was selling.
                    </p>
                    <p>
                      The YouTube gurus didn't mention the "vigilance tax"—the mental exhaustion of 
                      navigating low-trust environments. The travel bloggers glossed over the healthcare 
                      nightmares, the banking dead ends, and the visa uncertainty that keeps you up at night.
                    </p>
                    <p>
                      After six years and countless hard lessons, I realized men like me—professionals 50+ 
                      looking for stability, not adventure for its own sake—needed a different kind of resource. 
                      One that treats expatriation as a serious life decision, not a lifestyle brand.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection direction="right" delay={0.2}>
                <div className="bg-card border border-border/50 rounded-2xl p-8 shadow-sm">
                  <h3 className="font-heading font-bold text-xl text-foreground mb-6">
                    The Borderless Philosophy
                  </h3>
                  <div className="space-y-6">
                    {values.map((value, index) => (
                      <motion.div 
                        key={value.title}
                        className="flex gap-4"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 }}
                      >
                        <div className="flex-shrink-0 p-2 bg-primary-light rounded-xl h-fit">
                          <value.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-heading font-semibold text-foreground mb-1">
                            {value.title}
                          </h4>
                          <p className="text-muted-foreground text-sm">
                            {value.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
                The Journey
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                Six years, four continents, and countless lessons about what really matters when building a life abroad.
              </p>
            </AnimatedSection>

            <div className="max-w-3xl mx-auto">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  className="relative pl-8 pb-12 last:pb-0 border-l border-border"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                >
                  <div className="absolute left-0 top-0 w-4 h-4 -translate-x-1/2 rounded-full bg-primary border-4 border-background" />
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-heading font-bold text-primary text-lg">{item.year}</span>
                    <span className="flex items-center gap-1 text-muted-foreground text-sm">
                      <MapPin className="w-3 h-3" />
                      {item.location}
                    </span>
                  </div>
                  <h3 className="font-heading font-semibold text-foreground text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Ready to Make an Informed Decision?
                </h2>
                <p className="text-muted-foreground mb-8">
                  Get the free framework that helps you evaluate any city like a professional—not a tourist.
                </p>
                <motion.a
                  href="/"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-lg transition-colors shadow-lg shadow-primary/25"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get the Free Framework
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
