import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Users, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const subjects = [
    "General Inquiry",
    "Business Collaboration",
    "Speaking Engagement",
    "Media Request",
    "Partnership Opportunity",
    "Other",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log("Contact form submitted:", formData);
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success("Message sent successfully! I'll get back to you within 48 hours.");
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const contactReasons = [
    {
      icon: Users,
      title: "Business Collaboration",
      description: "Interested in partnering on content, consulting, or strategic initiatives for the expat community.",
    },
    {
      icon: MessageSquare,
      title: "Speaking Engagements",
      description: "Available for podcasts, conferences, and webinars on expatriation, remote work, and global relocation.",
    },
    {
      icon: Mail,
      title: "Media Inquiries",
      description: "For press, interviews, and media coverage requests about the expat lifestyle and international living.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main id="main-content">
        {/* Hero Section */}
        <section className="relative py-[60px] md:py-28 bg-gradient-to-br from-background via-secondary/30 to-background overflow-hidden">
          <motion.div 
            className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-primary/5 rounded-[16px] blur-3xl"
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.2, 0.35, 0.2],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <AnimatedSection>
                <p className="text-primary font-sans text-sm font-semibold uppercase tracking-[0.2em] mb-4">
                  Get In Touch
                </p>
              </AnimatedSection>
              
              <AnimatedSection delay={0.1}>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                  Let's Connect
                </h1>
              </AnimatedSection>
              
              <AnimatedSection delay={0.2}>
                <p className="font-sans text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Have a question, business proposal, or just want to share your own expat experience? 
                  I read every message personally.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Contact Reasons */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6">
              {contactReasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  className="p-6 bg-card border border-border/50 rounded-[12px] shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -4, boxShadow: "0 20px 40px -15px hsl(var(--primary) / 0.15)" }}
                >
                  <div className="p-3 bg-primary-light rounded-[12px] w-fit mb-4">
                    <reason.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground text-lg mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {reason.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <AnimatedSection>
                <div className="text-center mb-12">
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Send a Message
                  </h2>
                  <p className="text-muted-foreground">
                    I typically respond within 48 hours. For urgent matters, please indicate in your subject line.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <motion.form 
                  onSubmit={handleSubmit}
                  className="space-y-6 bg-card border border-border/50 rounded-[12px] p-8 shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="w-full px-4 py-3 bg-background border border-border rounded-[6px] text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="w-full px-4 py-3 bg-background border border-border rounded-[6px] text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-[6px] text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none"
                    >
                      <option value="" disabled>Select a subject...</option>
                      {subjects.map((subject) => (
                        <option key={subject} value={subject}>{subject}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-background border border-border rounded-[6px] text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                      placeholder="Tell me about your inquiry..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    whileHover={{ scale: isSubmitting || isSubmitted ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting || isSubmitted ? 1 : 0.98 }}
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-[6px] transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-primary/25"
                  >
                    {isSubmitted ? (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        Message Sent!
                      </>
                    ) : isSubmitting ? (
                      <>
                        <motion.div
                          className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-[6px]"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>

                  <p className="text-center text-xs text-muted-foreground">
                    Your information is secure and will never be shared with third parties.
                  </p>
                </motion.form>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
