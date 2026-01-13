import { useState } from "react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-card to-background border-y border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Stay Informed. Stay Inspired.
          </h2>
          <p className="text-muted-foreground mb-8">
            Get the latest on expat life, best cities, and practical tips delivered to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 bg-input border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-all duration-200"
              required
            />
            <button 
              type="submit" 
              className="bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-md hover:bg-primary/90 transition-all duration-200 uppercase tracking-wide whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>

          <p className="text-xs text-muted-foreground mt-4">
            We respect your privacy. One-click unsubscribe. No spam.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
