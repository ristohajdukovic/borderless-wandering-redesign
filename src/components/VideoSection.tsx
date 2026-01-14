import { Play } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";

const videos = [
  {
    id: "dsGicej-jrY",
    title: "Thailand vs Medellín: Which is Better for Expats?",
    description: "A side-by-side comparison of two popular expat destinations.",
  },
  {
    id: "aeTLR85Df68",
    title: "Living in Thailand for $1,500/month",
    description: "A realistic breakdown of monthly costs in Chiang Mai.",
  },
  {
    id: "h7mJQBVlESk",
    title: "Best Cities for Remote Workers in 2024",
    description: "Top picks based on cost, safety, and infrastructure.",
  },
];

const VideoSection = () => {
  return (
    <section id="videos" className="py-12 md:py-20 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <AnimatedSection>
          <div className="text-center mb-10 md:mb-14">
            <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-3">
              YouTube Channel
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Real Stories from the Borderless Office
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto text-sm md:text-base">
              Honest, unfiltered videos about expat life, city comparisons, and practical relocation advice.
            </p>
          </div>
        </AnimatedSection>

        {/* Video Grid - Large 16:9 thumbnails */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {videos.map((video, index) => (
            <motion.a
              key={video.id}
              href={`https://youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
                ease: "easeOut",
              }}
            >
              <motion.div
                className="bg-card rounded-2xl overflow-hidden border border-border/50 shadow-sm hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 transition-all duration-300"
                whileHover={{
                  y: -8,
                }}
              >
                {/* Large 16:9 Thumbnail */}
                <div className="relative aspect-video overflow-hidden">
                  <motion.img
                    src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                  
                  {/* Play button overlay */}
                  <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/30 transition-colors flex items-center justify-center">
                    <motion.div 
                      className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Play className="w-6 h-6 md:w-7 md:h-7 text-primary-foreground ml-0.5" fill="currentColor" />
                    </motion.div>
                  </div>
                </div>

                {/* Video Info - Better contrast */}
                <div className="p-5 md:p-6">
                  <h3 className="font-heading font-semibold text-foreground text-base md:text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors leading-snug">
                    {video.title}
                  </h3>
                  <p className="text-sm text-foreground/60 line-clamp-2">
                    {video.description}
                  </p>
                </div>
              </motion.div>
            </motion.a>
          ))}
        </div>

        {/* CTA Button */}
        <AnimatedSection delay={0.3}>
          <div className="text-center mt-10 md:mt-12">
            <motion.a
              href="https://youtube.com/c/PhilipJames360"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-primary text-primary font-semibold px-6 py-3 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-200 uppercase tracking-wide text-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Subscribe on YouTube
            </motion.a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default VideoSection;
