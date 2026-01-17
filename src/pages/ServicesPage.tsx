import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsletterSection from "@/components/NewsletterSection";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { services } from "@/data/services";

const steps = [
  {
    title: "Clarity Call",
    description: "Define your priorities, non-negotiables, and risk tolerance.",
  },
  {
    title: "City Shortlist",
    description: "Narrow options using scorecards built for long-term living.",
  },
  {
    title: "Decision Plan",
    description: "Get a practical plan with timelines, costs, and next steps.",
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main id="main-content">
        <section className="relative py-[60px] md:py-28 bg-gradient-to-br from-surface via-surface/80 to-surface overflow-hidden">
          <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-primary/5 rounded-[16px] blur-3xl" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <AnimatedSection>
                <p className="text-primary font-semibold text-sm uppercase tracking-[0.2em] mb-4">Services</p>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Strategic guidance for a stable life abroad.
                </h1>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <p className="text-muted-foreground text-lg max-w-2xl">
                  Each service is built for men over 50 who want less friction, better healthcare access, and reliable
                  daily living - not just a change of scenery.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-6">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  className="bg-card border border-border/50 rounded-[12px] p-6 shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <p className="text-primary text-sm font-semibold uppercase tracking-wide mb-2">
                    Step {index + 1}
                  </p>
                  <h3 className="font-heading font-semibold text-foreground text-xl mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.id}
                    id={service.link.split("#")[1]}
                    className="bg-card border border-border/50 rounded-[12px] p-8 shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-primary-light rounded-[12px]">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-heading font-semibold text-foreground text-2xl">{service.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">{service.summary}</p>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <p className="text-sm font-semibold text-foreground mb-2">Highlights</p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          {service.highlights.map((item) => (
                            <li key={item} className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground mb-2">Outcomes</p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          {service.outcomes.map((item) => (
                            <li key={item} className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="mt-6">
                      <a
                        href="/contact"
                        className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors"
                      >
                        Start a consultation <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
