import { BookOpen, Layers, Play } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ArrowButton from "@/components/ui/ArrowButton";

const StartHereSection = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Start here
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              One clean path to begin, plus two optional deep dives. This is your roadmap - not a relocation help desk.
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          <div className="group relative overflow-hidden rounded-[12px] border border-primary/20 bg-primary p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div
              className="absolute inset-0 bg-[linear-gradient(hsl(var(--primary-foreground))/0.08_1px,transparent_1px),linear-gradient(90deg,hsl(var(--primary-foreground))/0.08_1px,transparent_1px)] bg-[size:32px_32px] opacity-50"
              aria-hidden="true"
            />
            <div className="relative flex h-full flex-col justify-between">
              <div>
                <span className="inline-flex items-center gap-2 rounded-[6px] bg-accent/25 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent-foreground">
                  <Play className="h-4 w-4" />
                  Primary path
                </span>
                <h3 className="mt-6 text-4xl md:text-5xl font-heading font-bold text-primary-foreground">
                  Thailand City Ratings
                </h3>
                <p className="mt-4 text-base md:text-lg text-primary-light max-w-xl">
                  The most direct entry point: city-by-city coverage with comparisons and lived context.
                </p>
              </div>
              <ArrowButton
                label="Open playlist"
                to="/videos"
                variant="secondary"
                size="md"
                className="mt-8 w-fit"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="group rounded-[12px] border border-border/60 bg-primary/5 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/40">
              <span className="inline-flex items-center gap-2 rounded-[6px] bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                <BookOpen className="h-4 w-4" />
                Read
              </span>
              <h3 className="mt-6 text-2xl md:text-3xl font-heading font-semibold text-primary">
                City rankings post
              </h3>
              <p className="mt-3 text-base text-primary/80">
                A single page that ranks cities and gets updated over time.
              </p>
              <ArrowButton
                label="Read rankings"
                to="/articles"
                variant="secondary"
                size="sm"
                className="mt-6 w-fit"
              />
            </div>

            <div className="group rounded-[12px] border border-border/60 bg-primary/5 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/40">
              <span className="inline-flex items-center gap-2 rounded-[6px] bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                <Layers className="h-4 w-4" />
                Series
              </span>
              <h3 className="mt-6 text-2xl md:text-3xl font-heading font-semibold text-primary">
                30 Thai Cities in 30 Days
              </h3>
              <p className="mt-3 text-base text-primary/80">
                Documentary pace: one city per day across Thailand.
              </p>
              <ArrowButton
                label="View series"
                to="/videos"
                variant="secondary"
                size="sm"
                className="mt-6 w-fit"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartHereSection;
