import { useState } from "react";
import { Check } from "lucide-react";
import premiumEbook from "@/assets/premium-ebook-mockup.png";

const PremiumHeroSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Handle form submission
    console.log("Form submitted:", { email });
    setTimeout(() => setIsSubmitting(false), 1000);
  };

  const valueBullets = [
    'Avoid the "Vigilance Tax" of low-trust environments.',
    "The 4 Non-Negotiables for medical reliability abroad.",
    "Includes the printable 10-Factor City Scorecard.",
  ];

  return (
    <section className="relative w-full bg-gradient-to-br from-premium-bg via-premium-bg-gradient to-premium-bg overflow-hidden">
      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/10 pointer-events-none" />
      
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* LEFT COLUMN - Content (60%) */}
          <div className="w-full lg:w-[60%] space-y-8 text-left order-1 lg:order-1">
            {/* Eyebrow Text */}
            <p className="text-premium-gold font-sans text-xs md:text-sm font-semibold uppercase tracking-[0.2em]">
              A Practical Framework for Men 50+
            </p>

            {/* H1 Headline */}
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-premium-text leading-tight">
              Stop Chasing "Vibes."
              <br />
              <span className="text-premium-text">Start Building a Base.</span>
            </h1>

            {/* H2 Subhead */}
            <p className="font-sans text-lg md:text-xl text-premium-text-muted leading-relaxed max-w-xl">
              The "No-BS" guide to vetting global cities for safety, health infrastructure, 
              and long-term stability—before you sell the house.
            </p>

            {/* Mobile: Book Image appears here */}
            <div className="block lg:hidden w-full max-w-sm mx-auto py-8">
              <img
                src={premiumEbook}
                alt="Premium Framework Ebook"
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>

            {/* Value Bullets */}
            <ul className="space-y-4 pt-2">
              {valueBullets.map((bullet, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 mt-0.5 rounded-full bg-premium-gold/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-premium-gold" strokeWidth={3} />
                  </span>
                  <span className="font-sans text-premium-text-muted text-base md:text-lg">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>

            {/* Opt-in Form */}
            <form onSubmit={handleSubmit} className="pt-6 space-y-4">
              <div className="flex flex-col sm:flex-row gap-3 max-w-lg">
                <input
                  type="email"
                  placeholder="Enter your best email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-4 py-4 bg-premium-input-bg border border-premium-input-border rounded-md text-premium-text placeholder:text-premium-text-subtle font-sans text-base focus:outline-none focus:ring-2 focus:ring-premium-gold focus:border-transparent transition-all duration-200"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-4 bg-premium-gold hover:bg-premium-gold-hover text-premium-bg font-sans font-bold text-sm md:text-base rounded-md transition-all duration-200 whitespace-nowrap disabled:opacity-70 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                >
                  {isSubmitting ? "Sending..." : "Send Me the Framework & Scorecard"}
                </button>
              </div>

              {/* Trust Microcopy */}
              <p className="font-sans text-xs text-premium-text-subtle">
                We respect your privacy. One-click unsubscribe. No hype.
              </p>
            </form>
          </div>

          {/* RIGHT COLUMN - Visual (40%) - Desktop only */}
          <div className="hidden lg:flex w-full lg:w-[40%] items-center justify-center order-2">
            <div className="relative">
              {/* Soft glow effect behind book */}
              <div className="absolute inset-0 bg-premium-gold/5 blur-3xl rounded-full scale-150 opacity-50" />
              <img
                src={premiumEbook}
                alt="Premium Framework Ebook"
                className="relative w-full max-w-md h-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumHeroSection;
