import AnimatedSection from "@/components/ui/AnimatedSection";
import { Facebook, Instagram, Linkedin, User, Youtube } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="rounded-[16px] border border-border/60 bg-card p-6 md:p-10 shadow-sm">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="rounded-[12px] border border-border/50 bg-primary/5 p-4 md:p-6 shadow-sm">
                <div className="relative flex flex-col items-center justify-center gap-3 overflow-hidden rounded-[12px] aspect-[4/5] bg-primary/10 text-center">
                  <div
                    className="absolute inset-0 bg-[linear-gradient(hsl(var(--primary))/0.08_1px,transparent_1px),linear-gradient(90deg,hsl(var(--primary))/0.08_1px,transparent_1px)] bg-[size:32px_32px] opacity-40"
                    aria-hidden="true"
                  />
                  <div className="relative z-10 flex flex-col items-center gap-4 px-6">
                    <div className="flex h-20 w-20 items-center justify-center rounded-[12px] bg-primary/15 text-primary">
                      <User className="h-10 w-10" />
                    </div>
                    <div className="text-lg font-semibold text-primary">Philip James</div>
                    <p className="text-xs uppercase tracking-[0.2em] text-secondary/80">
                      Portrait coming soon
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[12px] border border-border/50 bg-background p-6 md:p-8 shadow-sm flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">
                    About Philip
                  </h2>
                  <p className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed">
                    A quick background and a few proof points for people discovering the work for the first time.
                  </p>
                  <h3 className="text-xl md:text-2xl font-heading font-semibold text-foreground mb-3">
                    Freedom to be you
                  </h3>
                  <div className="text-muted-foreground text-base md:text-lg leading-relaxed space-y-4">
                    <p>
                      <span className="font-semibold text-foreground">Origin:</span> I started YouTube during the pandemic
                      while stuck abroad and isolated, filming whatever held my attention - history, places, long bike
                      rides, and remote-work experiments. Over time it got obvious: the real thread was not "travel" or
                      "remote work."
                    </p>
                    <p>
                      <span className="font-semibold text-foreground">Focus:</span> It was expat life after 50 - how a place
                      changes your energy, your health, and your day-to-day rhythm. My definition of "best place to live"
                      is simple: it is the place that makes you feel best - and that answer is different for everyone, and
                      it can change as you change.
                    </p>
                    <p>
                      <span className="font-semibold text-foreground">Fieldwork:</span> I am based in Thailand, and I travel
                      city to city filming on-location ratings and comparisons that focus on the details people actually
                      live with: safety, walkability, value, food, and the overall feel of a place.
                    </p>
                    <p>
                      <span className="font-semibold text-foreground">Promise:</span> My non-negotiables are authenticity
                      and quality - real footage, real conversations, and honest takes - even when the algorithm will not
                      reward it. The goal is to help people stay curious, stay alive, and keep living fully after 50.
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3 text-sm font-semibold">
                  <a
                    href="https://youtube.com/c/PhilipJames360"
                    className="inline-flex items-center gap-2 rounded-[6px] border border-primary/20 bg-primary/10 px-4 py-2 text-primary hover:bg-primary/15 transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Youtube className="h-4 w-4" />
                    YouTube
                  </a>
                  <a
                    href="https://instagram.com"
                    className="inline-flex items-center gap-2 rounded-[6px] border border-primary/20 bg-primary/10 px-4 py-2 text-primary hover:bg-primary/15 transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="h-4 w-4" />
                    Instagram
                  </a>
                  <a
                    href="https://facebook.com"
                    className="inline-flex items-center gap-2 rounded-[6px] border border-primary/20 bg-primary/10 px-4 py-2 text-primary hover:bg-primary/15 transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook className="h-4 w-4" />
                    Facebook
                  </a>
                  <a
                    href="https://linkedin.com"
                    className="inline-flex items-center gap-2 rounded-[6px] border border-primary/20 bg-primary/10 px-4 py-2 text-primary hover:bg-primary/15 transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AboutSection;
