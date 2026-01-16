import { useState } from "react";
import heroImage from "@/assets/hero-ebook.png";

const HeroSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", { name, email });
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* eBook Image */}
          <div className="lg:w-1/3 animate-fade-in">
            <img
              src={heroImage}
              alt="Expat Life Guide eBook"
              className="w-full max-w-sm mx-auto transform -rotate-6 hover:rotate-0 transition-transform duration-500"
            />
          </div>

          {/* Signup Card */}
          <div className="lg:w-2/3 w-full">
            <div className="hero-card max-w-2xl animate-slide-in-right">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
                <span className="text-primary-light">EXPAT LIFE:</span> YOUR GUIDE TO LIVING ABROAD
              </h1>
              
              <form onSubmit={handleSubmit} className="space-y-4 mb-6">
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input-dark"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-dark"
                  required
                />
                <button type="submit" className="btn-primary w-full text-center">
                  SIGN ME UP! + GET FREE GUIDE
                </button>
              </form>

              <p className="text-hero-card-foreground/80 text-sm leading-relaxed">
                Gain on-the-ground insights to maximize your expat experience. This guide isn't just a list of tips; 
                learn how to make informed decisions, avoid common traps, and truly find your ideal city abroad.
              </p>
              <p className="text-hero-card-foreground/60 text-sm mt-4">
                Sign-up and Grab Your Free Guide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
