import { motion } from "framer-motion";
import { Users, Globe, Star, Shield } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "70,000+",
    label: "Global Citizens",
  },
  {
    icon: Globe,
    value: "40+",
    label: "Countries Covered",
  },
  {
    icon: Star,
    value: "6+",
    label: "Years Experience",
  },
  {
    icon: Shield,
    value: "100%",
    label: "No-BS Advice",
  },
];

const TrustBar = () => {
  return (
    <section className="py-6 md:py-8 bg-secondary/60 border-y border-border/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-16"
        >
          <p className="text-sm font-medium text-foreground/80 uppercase tracking-wide text-center sm:text-left">
            Trusted by
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="p-2 bg-primary-light rounded-lg">
                  <stat.icon className="w-4 h-4 text-primary" strokeWidth={2} />
                </div>
                <div className="text-center sm:text-left">
                  <p className="font-heading font-bold text-foreground text-lg leading-tight">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground font-medium">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBar;
