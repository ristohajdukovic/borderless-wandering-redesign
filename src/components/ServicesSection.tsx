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
    <section id="services" className="py-16 md:py-24 bg-background">
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
              className="group bg-card border border-border rounded-lg p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-1 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                  <span className="text-primary text-sm font-medium mt-2 inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn More 
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
