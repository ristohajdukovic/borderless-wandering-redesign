import { motion } from "framer-motion";
import ArrowButton from "@/components/ui/ArrowButton";

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
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <ArrowButton
                    label="Watch on Youtube"
                    href="https://youtube.com/c/PhilipJames360"
                    target="_blank"
                    variant="secondary"
                    size="md"
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumHeroSection;
