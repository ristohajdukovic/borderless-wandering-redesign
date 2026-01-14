import { Globe, Home, Plane, Users, Building2, BookOpen, LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import AnimatedCard from "@/components/ui/AnimatedCard";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
}

const services: Service[] = [
  {
    icon: Globe,
    title: "Expat City Guides",
    description: "Discover the Best Cities",
    link: "#",
  },
  {
    icon: Home,
    title: "Cost of Living",
    description: "Budget Your New Life",
    link: "#",
  },
  {
    icon: Plane,
    title: "Visa & Residency",
    description: "Navigate Immigration",
    link: "#",
  },
  {
    icon: Users,
    title: "Remote Work",
    description: "Work From Anywhere",
    link: "#",
  },
  {
    icon: Building2,
    title: "Healthcare Abroad",
    description: "Stay Healthy Overseas",
    link: "#",
  },
  {
    icon: BookOpen,
    title: "Resources & Tools",
    description: "Essential Expat Toolbox",
    link: "#",
  },
];

const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
  const Icon = service.icon;
  
  return (
    <AnimatedCard key={service.title} index={index}>
      <motion.a
        href={service.link}
        className="group block bg-card rounded-2xl p-8 shadow-sm border border-border/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 hover:-translate-y-1"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex flex-col items-start gap-5">
          {/* Duotone Icon Container */}
          <div className="relative">
            <div className="absolute inset-0 bg-primary-light rounded-xl scale-110 opacity-60" />
            <motion.div 
              className="relative p-4 bg-primary-light rounded-xl"
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
            <motion.span 
              className="text-primary text-sm font-semibold mt-3 inline-flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              Learn More 
              <motion.span 
                className="inline-block"
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
              >
                →
              </motion.span>
            </motion.span>
          </div>
        </div>
      </motion.a>
    </AnimatedCard>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-center section-title">Navigate Expat Life</h2>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <p className="text-center text-muted-foreground mb-14 max-w-2xl mx-auto font-body text-lg leading-relaxed">
            Gain on-the-ground insight and overcome uncertainty with informed decisions.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
