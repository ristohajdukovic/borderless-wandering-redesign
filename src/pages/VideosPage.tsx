import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Play, Filter } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsletterSection from "@/components/NewsletterSection";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { videos } from "@/data/videos";

const VideosPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(() => {
    const unique = Array.from(new Set(videos.map((video) => video.category)));
    return ["All", ...unique];
  }, []);

  const filteredVideos = useMemo(() => {
    return videos.filter((video) => activeCategory === "All" || video.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main id="main-content">
        <section className="relative py-[60px] md:py-28 bg-gradient-to-br from-background via-secondary/40 to-background overflow-hidden">
          <div className="absolute top-10 right-10 w-64 h-64 bg-primary/5 rounded-[16px] blur-3xl" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <AnimatedSection>
                <p className="text-primary font-semibold text-sm uppercase tracking-[0.2em] mb-4">Videos</p>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Watch the unfiltered reality of living abroad.
                </h1>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <p className="text-muted-foreground text-lg max-w-2xl">
                  City comparisons, cost breakdowns, and decision frameworks built for long-term stability.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <section className="py-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Filter className="w-4 h-4" />
                Filter
              </div>
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-[6px] text-sm font-semibold border transition-colors ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-border text-muted-foreground hover:text-primary hover:border-primary"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredVideos.map((video, index) => (
                <motion.a
                  key={video.id}
                  href={`https://youtube.com/watch?v=${video.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <div className="bg-card rounded-[12px] overflow-hidden border border-border/50 shadow-sm hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 transition-all duration-300">
                    <div className="relative aspect-video overflow-hidden">
                      <motion.img
                        src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                        alt={video.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      />
                      <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/30 transition-colors flex items-center justify-center">
                        <motion.div
                          className="w-14 h-14 md:w-16 md:h-16 rounded-[6px] bg-primary flex items-center justify-center shadow-lg shadow-primary/30"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Play className="w-6 h-6 md:w-7 md:h-7 text-primary-foreground ml-0.5" fill="currentColor" />
                        </motion.div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-xs uppercase tracking-wide text-muted-foreground mb-2">
                        <span>{video.category}</span>
                        <span className="text-muted-foreground/60">|</span>
                        <span>{video.duration}</span>
                      </div>
                      <h3 className="font-heading font-semibold text-foreground text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                        {video.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">{video.description}</p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default VideosPage;
