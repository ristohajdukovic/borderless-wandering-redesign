import { Globe, Home, Plane, Users, Building2, BookOpen } from "lucide-react";

const services = [
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

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-center section-title">Navigate Expat Life</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Gain on-the-ground insight and overcome uncertainty with informed decisions.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <a
              key={service.title}
              href={service.link}
              className="service-card group flex items-start gap-4"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex-shrink-0">
                <service.icon className="w-10 h-10 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-1">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
                <span className="text-primary text-sm font-medium mt-2 inline-block">
                  Learn More →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
