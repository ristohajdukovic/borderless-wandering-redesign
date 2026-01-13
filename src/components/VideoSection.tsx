import { Play } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";

const videos = [
  {
    id: "dsGicej-jrY",
    title: "Thailand vs Medellín Comparison",
  },
  {
    id: "aeTLR85Df68",
    title: "Living in Thailand for $1,500/month",
  },
  {
    id: "h7mJQBVlESk",
    title: "Best Cities for Remote Workers",
  },
];

const VideoSection = () => {
  return (
    <section id="videos" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="section-title">Latest Videos</h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <motion.a
              key={video.id}
              href={`https://youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-video rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              whileHover={{
                y: -6,
                boxShadow: "0 20px 40px -12px hsl(var(--primary) / 0.2)",
              }}
            >
              <motion.img
                src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                alt={video.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                <motion.div 
                  className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30"
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.2 }}
                >
                  <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                </motion.div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                <h3 className="text-white font-heading font-semibold text-sm">
                  {video.title}
                </h3>
              </div>
            </motion.a>
          ))}
        </div>

        <AnimatedSection delay={0.3}>
          <div className="text-center mt-8">
            <motion.a
              href="https://youtube.com/c/PhilipJames360"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-primary text-primary font-semibold px-6 py-3 rounded-md hover:bg-primary hover:text-primary-foreground transition-all duration-200 uppercase tracking-wide"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View All Videos
            </motion.a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default VideoSection;
