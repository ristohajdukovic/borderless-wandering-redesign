import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import AnimatedCard from "@/components/ui/AnimatedCard";
import { services, Service } from "@/data/services";

const essentials = ["city-guides", "cost-of-living", "visa-residency", "healthcare"];

const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
  const Icon = service.icon;

  return (
    <AnimatedCard key={service.title} index={index}>
      <motion.a
        href={service.link}
        className="group block bg-white rounded-[12px] p-8 shadow-md border border-border/50 transition-all duration-300 hover:shadow-lg hover:border-primary/30 hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex flex-col items-start gap-5">
          <div className="relative">
            <div className="absolute inset-0 bg-primary-light rounded-[12px] scale-110 opacity-60" />
            <motion.div
              className="relative p-4 bg-primary-light rounded-[12px]"
              whileHover={{ rotate: 5 }}
              transition={{ duration: 0.2 }}
            >
              <Icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
            </motion.div>
          </div>

          <div className="space-y-2">
            <h3 className="font-heading font-semibold text-xl text-foreground group-hover:text-primary transition-colors duration-300">
              {service.title}
            </h3>
            <p className="text-muted-foreground font-body text-base leading-relaxed">
              {service.description}
            </p>
            <span className="text-primary text-sm font-medium tracking-[0.3px] mt-3 inline-flex items-center gap-2 rounded-[6px] px-7 py-3.5 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-[ease]">
              Learn More
              <span className="inline-block transition-transform duration-300 ease-[ease] group-hover:translate-x-[3px]">
                -&gt;
              </span>
            </span>
          </div>
        </div>
      </motion.a>
    </AnimatedCard>
  );
};

const ServicesSection = () => {
  const essentialServices = services.filter((service) => essentials.includes(service.id));

  return (
    <section id="services" className="py-[60px] md:py-28 bg-surface">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-center text-2xl md:text-3xl font-heading font-semibold text-foreground mb-10">
            Essential guides
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {essentialServices.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
