import { motion } from "framer-motion";

const PremiumHeroSection = () => {
  return (
    <section className="relative w-full min-h-[90vh] overflow-hidden">
      <div className="container mx-auto px-4 min-h-[90vh] py-6 md:py-8">
        <div className="relative min-h-[90vh] overflow-hidden rounded-[16px]">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src="https://theborderlessoffice.com/wp-content/uploads/2025/11/TBO-banner-1080WebShareName.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Borderless Office hero video"
          />
          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />

          <div className="relative z-10 flex min-h-[90vh] flex-col justify-end p-6 md:p-10">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-serif text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight"
              >
                Life After 50 and Best Places to Live as an Expat
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6"
              >
                <p className="text-white/85 text-lg md:text-xl leading-relaxed">
                  Field notes, comparisons, and city ratings-focused on livability, daily rhythm, and what holds up once
                  the novelty wears off.
                </p>
                <motion.a
                  href="https://youtube.com/c/PhilipJames360"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group inline-flex items-center justify-between rounded-[6px] bg-white px-7 py-3.5 text-sm font-medium tracking-[0.3px] text-foreground transition-all duration-300 ease-[ease] hover:bg-white/90 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  Watch on Youtube
                  <span className="ml-4 inline-flex h-8 w-8 items-center justify-center rounded-[6px] bg-primary text-primary-foreground">
                    <span className="transition-transform duration-300 ease-[ease] group-hover:translate-x-[3px]">
                      -&gt;
                    </span>
                  </span>
                </motion.a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumHeroSection;
