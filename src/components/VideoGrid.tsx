import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { videos } from "@/data/videos";
import ArrowButton from "@/components/ui/ArrowButton";

const VideoGrid = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const selectedVideo = videos.find((video) => video.id === selectedId) || null;

  const featured = videos[0];
  const secondary = videos.slice(1, 3);

  const openVideo = (id: string) => {
    setSelectedId(id);
    setIsOpen(true);
  };

  return (
    <section id="videos" className="py-12 md:py-20 lg:py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-20 left-1/2 h-32 w-[140%] -translate-x-1/2 rotate-1 bg-primary/10 blur-2xl" />
        <div className="absolute bottom-10 right-10 h-52 w-52 rounded-[16px] bg-accent/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.06)_0,transparent_55%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              The episodes that travel well.
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
              City comparisons, cost breakdowns, and practical relocation guidance for long-term stability.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          {featured ? (
            <motion.button
              type="button"
              onClick={() => openVideo(featured.id)}
              className="group text-left focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-[12px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="relative overflow-hidden rounded-[12px] border border-border/60 bg-card shadow-xl shadow-primary/10 transition-transform duration-300 group-hover:-translate-y-1">
                <div className="relative aspect-[16/9] overflow-hidden [clip-path:polygon(0_0,100%_0,100%_92%,0_100%)]">
                  <div
                    className="absolute inset-0 bg-[linear-gradient(hsl(var(--primary))/0.06_1px,transparent_1px),linear-gradient(90deg,hsl(var(--primary))/0.06_1px,transparent_1px)] bg-[size:32px_32px] opacity-40"
                    aria-hidden="true"
                  />
                  <motion.img
                    src={`https://img.youtube.com/vi/${featured.id}/maxresdefault.jpg`}
                    alt={featured.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                    width={1280}
                    height={720}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <span className="absolute top-4 left-4 rounded-[6px] bg-secondary/85 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-secondary-foreground">
                    Featured
                  </span>
                  {featured.duration ? (
                    <span className="absolute top-4 right-4 rounded-[6px] bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                      {featured.duration}
                    </span>
                  ) : null}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-[6px] bg-primary/90 text-primary-foreground shadow-lg shadow-primary/40 transition-transform duration-200 group-hover:scale-110">
                      <Play className="h-6 w-6" fill="currentColor" />
                    </div>
                  </div>
                </div>

                <div className="p-5 md:p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary mb-2">Director's cut</p>
                  <h3 className="font-heading font-semibold text-foreground text-lg md:text-xl leading-snug">
                    {featured.title}
                  </h3>
                </div>
              </div>
            </motion.button>
          ) : null}

          <div className="grid gap-6">
            {secondary.map((video, index) => (
              <motion.button
                key={video.id}
                type="button"
                onClick={() => openVideo(video.id)}
                className={`group text-left focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-[12px] transition-transform duration-300 lg:${
                  index === 0 ? "rotate-1" : "-rotate-1"
                } lg:hover:rotate-0`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              >
                <div className="relative overflow-hidden rounded-[12px] border border-border/60 bg-card shadow-lg shadow-primary/5">
                  <div className="relative aspect-video overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    <motion.img
                      src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                      width={1280}
                      height={720}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    />
                    <span className="absolute top-3 left-3 rounded-[6px] bg-secondary/80 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-secondary-foreground">
                      {video.category}
                    </span>
                    {video.duration ? (
                      <span className="absolute top-3 right-3 rounded-[6px] bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                        {video.duration}
                      </span>
                    ) : null}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-[6px] bg-primary/90 text-primary-foreground shadow-lg shadow-primary/30 transition-transform duration-200 group-hover:scale-110">
                        <Play className="h-5 w-5" fill="currentColor" />
                      </div>
                    </div>
                  </div>
                  <div className="p-4 md:p-5">
                    <h3 className="font-heading font-semibold text-foreground text-base md:text-lg leading-snug">
                      {video.title}
                    </h3>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        <AnimatedSection delay={0.3}>
          <div className="text-center mt-10 md:mt-12">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <ArrowButton
                label="Watch more stories"
                href="https://youtube.com/c/PhilipJames360"
                target="_blank"
                variant="primary"
                size="md"
              />
            </motion.div>
          </div>
        </AnimatedSection>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden">
          <DialogTitle className="sr-only">{selectedVideo?.title || "Video player"}</DialogTitle>
          {isOpen && selectedVideo ? (
            <div className="aspect-video w-full bg-black">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1`}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default VideoGrid;
