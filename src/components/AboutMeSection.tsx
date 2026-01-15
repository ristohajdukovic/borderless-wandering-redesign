import { Instagram, Twitter, Linkedin, Facebook, Youtube, Mail, ArrowRight, MapPin, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/ui/AnimatedSection";

const AboutMeSection = () => {
  const experiences = [
    { period: "2018 – Present", role: "Founder – The Borderless Office" },
    { period: "2015 – 2018", role: "Digital Nomad – Southeast Asia" },
    { period: "2012 – 2015", role: "Corporate Life – London, UK" },
  ];

  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-foreground">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-4 italic">
                Meet the Face Behind the Keyboard
              </h2>
              <p className="text-background/70 max-w-xl text-base md:text-lg">
                I'm Philip — an expat, entrepreneur, and lifelong explorer helping others 
                find their place in the world, one city at a time.
              </p>
            </div>
            <Button 
              variant="outline" 
              className="w-fit border-background/20 text-background hover:bg-background hover:text-foreground transition-all"
            >
              Let's Connect
            </Button>
          </div>
        </AnimatedSection>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          
          {/* Experience Card - Spans 2 rows on larger screens */}
          <AnimatedSection delay={0.1} className="md:row-span-2">
            <div className="relative h-full min-h-[400px] md:min-h-[500px] rounded-2xl overflow-hidden border border-background/10 bg-gradient-to-b from-primary/20 to-primary/5">
              {/* Label */}
              <div className="absolute top-4 left-4 z-10">
                <span className="inline-block px-4 py-1.5 bg-background/90 text-foreground text-sm font-medium rounded-full">
                  My Expat Journey
                </span>
              </div>
              
              {/* Placeholder for Philip's photo - gradient background */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-primary/20 to-foreground/90">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-primary/30 flex items-center justify-center">
                    <span className="text-background/80 text-4xl md:text-6xl font-heading font-bold">P</span>
                  </div>
                </div>
              </div>
              
              {/* Experience Timeline */}
              <div className="absolute bottom-0 left-0 right-0 p-5 space-y-2">
                {experiences.map((exp, index) => (
                  <div 
                    key={index}
                    className="flex justify-between items-center py-2.5 px-4 bg-background/5 backdrop-blur-sm rounded-lg border border-background/10"
                  >
                    <span className="text-background/90 text-sm font-medium">{exp.period}</span>
                    <span className="text-background/60 text-sm text-right">{exp.role}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Social Platforms Card */}
          <AnimatedSection delay={0.2}>
            <div className="h-full min-h-[220px] rounded-2xl border border-background/10 bg-gradient-to-br from-background/5 to-background/10 p-5 flex flex-col">
              <span className="inline-block w-fit px-4 py-1.5 bg-background/10 text-background/90 text-sm font-medium rounded-full mb-4">
                Find Me Online
              </span>
              
              {/* Scrolling Social Icons */}
              <div className="flex-1 flex items-center justify-center">
                <div className="grid grid-cols-5 gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-background/10 hover:bg-primary hover:scale-110 transition-all duration-300 flex items-center justify-center group"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5 md:w-6 md:h-6 text-background/70 group-hover:text-background" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Testimonial Card */}
          <AnimatedSection delay={0.3}>
            <div className="h-full min-h-[220px] rounded-2xl border border-background/10 bg-gradient-to-br from-background/5 to-background/10 p-5 flex flex-col">
              <span className="inline-block w-fit px-4 py-1.5 bg-primary/20 text-primary text-sm font-medium rounded-full mb-4">
                Testimonial
              </span>
              
              <div className="flex-1 flex flex-col justify-center">
                <Quote className="w-6 h-6 text-primary/50 mb-2" />
                <p className="text-background/80 text-sm md:text-base leading-relaxed mb-4">
                  "Philip's insights helped me make the leap to living abroad. His no-BS approach 
                  saved me months of research and countless mistakes."
                </p>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-background">Sarah M.</span>
                  <span className="text-background/50">|</span>
                  <span className="text-background/60 text-sm">Expat in Portugal</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact Card - Spans 2 columns on larger screens */}
          <AnimatedSection delay={0.4} className="lg:col-span-2">
            <div className="h-full min-h-[180px] rounded-2xl border border-background/10 bg-gradient-to-r from-primary/20 via-primary/10 to-background/5 p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-6 overflow-hidden relative">
              {/* Decorative globe background */}
              <div className="absolute right-0 top-0 w-40 h-40 md:w-64 md:h-64 opacity-20">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-primary to-primary/20 blur-2xl" />
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-background font-heading text-xl md:text-2xl font-semibold">Get in Touch</span>
                  <ArrowRight className="w-5 h-5 text-primary" />
                </div>
                <div className="space-y-2">
                  <a 
                    href="mailto:philip@theborderlessoffice.com" 
                    className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors text-sm md:text-base"
                  >
                    <Mail className="w-4 h-4" />
                    philip@theborderlessoffice.com
                  </a>
                  <p className="flex items-center gap-2 text-background/70 text-sm md:text-base">
                    <MapPin className="w-4 h-4" />
                    Currently based in: Thailand 🇹🇭
                  </p>
                </div>
              </div>
              
              <Button 
                className="relative z-10 w-fit bg-primary text-primary-foreground hover:bg-primary/90"
                asChild
              >
                <a href="mailto:philip@theborderlessoffice.com">
                  Send a Message
                </a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
