import { motion } from "framer-motion";

const VietnamHero = () => {
  return (
    <section className="relative border-b border-border">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          {/* Minimal Badge */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-block text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4 md:mb-6"
          >
            Travel Log — 2024
          </motion.span>

          {/* Title - Raw Typography */}
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] tracking-tight mb-4 md:mb-6">
            30 Cities.
            <br />
            30 Days.
            <br />
            <span className="text-muted-foreground">Vietnam.</span>
          </h1>

          {/* Description - Editorial */}
          <p className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed mb-8 md:mb-10">
            One month crossing Vietnam by motorbike, bus, and train. 
            No itinerary. No influencer spots. Just cities, coffee, and whatever happens.
          </p>

          {/* Stats - Minimal */}
          <div className="flex items-center gap-6 md:gap-10 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="font-heading text-2xl md:text-3xl font-bold text-foreground">30</span>
              <span>days</span>
            </div>
            <div className="w-px h-6 bg-border" />
            <div className="flex items-center gap-2">
              <span className="font-heading text-2xl md:text-3xl font-bold text-foreground">30</span>
              <span>cities</span>
            </div>
            <div className="w-px h-6 bg-border" />
            <div className="flex items-center gap-2">
              <span className="font-heading text-2xl md:text-3xl font-bold text-foreground">3</span>
              <span>regions</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VietnamHero;