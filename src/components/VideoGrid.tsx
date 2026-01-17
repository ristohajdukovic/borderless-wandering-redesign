import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { videos } from "@/data/videos";
import ArrowButton from "@/components/ui/ArrowButton";

const VideoGrid = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const featured = videos.find((video) => video.id === "dPpvx9uEQ-c") || videos[0];
  const selectedVideo = videos.find((video) => video.id === selectedId) || null;

  const openVideo = (id: string) => {
    setSelectedId(id);
    setIsOpen(true);
  };

  return (
    <section
      id="videos"
      className="!mt-0 py-12 md:py-20 lg:py-24 bg-background relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-20 left-1/2 h-32 w-[140%] -translate-x-1/2 rotate-1 bg-primary/10 blur-2xl" />
        <div className="absolute bottom-10 right-10 h-52 w-52 rounded-[16px] bg-accent/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.06)_0,transparent_55%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection>
          <div className="relative pb-10 md:pb-12">
            <div className="flex flex-col gap-3">
              <p className="text-secondary text-xs uppercase tracking-[0.3em] font-semibold">
                Latest episode
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground">
                Featured story
              </h2>
            </div>
            <div className="hidden md:block md:absolute md:right-0 md:top-0">
              <ArrowButton label="View all episodes" to="/videos" variant="secondary" size="sm" />
            </div>
          </div>
        </AnimatedSection>

        <div className="grid gap-8 sm:gap-10 lg:gap-12 lg:grid-cols-[1.1fr_0.9fr] items-start">
          <motion.button
            type="button"
            onClick={() => openVideo(featured.id)}
            className="group text-left focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-[12px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="relative overflow-hidden rounded-[12px] border border-borderMuted/60 bg-card shadow-lg shadow-primary/10 transition-transform duration-300 group-hover:-translate-y-1">
              <div className="relative aspect-[16/9] overflow-hidden">
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
            </div>
          </motion.button>

          <div className="flex h-full flex-col justify-between gap-8 text-center lg:text-left">
            <div className="flex flex-col gap-6">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                <span className="rounded-[6px] bg-secondary/15 px-3 py-1 text-[10px] font-semibold tracking-[0.25em] text-secondary">
                  {featured.category}
                </span>
                <span>{featured.date}</span>
                <span className="text-borderMuted">|</span>
                <span>{featured.duration}</span>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground pb-4">
                  {featured.title}
                </h3>
                <p className="text-muted-foreground text-sm md:text-base">
                  {featured.description}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              <ArrowButton
                label="Watch episode"
                onClick={() => openVideo(featured.id)}
                variant="primary"
                size="sm"
              />
              <Link
                to="/article/bogota-vs-thailand-expat-reality"
                className="inline-flex items-center gap-2 rounded-[6px] text-sm md:text-base font-semibold text-accent hover:text-accent/80 transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Read transcript
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 flex justify-center md:hidden">
          <ArrowButton label="View all episodes" to="/videos" variant="secondary" size="sm" />
        </div>
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
