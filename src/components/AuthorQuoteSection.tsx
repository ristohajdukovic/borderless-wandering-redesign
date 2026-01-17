import { Quote } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const AuthorQuoteSection = () => {
  return (
    <section className="relative overflow-hidden bg-accent py-12 md:py-20 lg:py-24">
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12)_0,transparent_55%)]"
        aria-hidden="true"
      />
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection>
          <div className="max-w-4xl">
            <Quote className="h-8 w-8 text-accent-foreground/70 mb-6" />
            <blockquote className="font-heading text-2xl md:text-3xl text-accent-foreground leading-tight">
              “I started this project because I was tired of media telling people over 50 to slow down.
              What if the best stories—yours and mine—are still being written?”
            </blockquote>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-foreground/15 text-accent-foreground text-sm font-semibold">
                PJ
              </div>
              <div>
                <p className="text-accent-foreground font-semibold">Philip James</p>
                <p className="text-accent-foreground/75 text-sm">
                  Field notes on expat life after 50
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AuthorQuoteSection;
