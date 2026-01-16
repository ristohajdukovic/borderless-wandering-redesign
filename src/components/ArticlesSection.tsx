import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { articles } from "@/data/articles";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/badge";

const ArticlesSection = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [sortOrder, setSortOrder] = useState<"Newest" | "Popular">("Newest");
  const tabs = ["All", "City Guides", "Visas", "Cost", "Healthcare", "Remote Work"];

  const displayedArticles = useMemo(() => {
    const filtered = activeTab === "All"
      ? articles
      : articles.filter((article) => {
          if (article.tags?.includes(activeTab)) return true;
          if (activeTab === "City Guides") {
            return ["City Comparison", "City Review", "Expat Life"].includes(article.category);
          }
          return false;
        });

    const sorted = [...filtered];
    if (sortOrder === "Newest") {
      sorted.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }

    return sorted.slice(0, 3);
  }, [activeTab, sortOrder]);

  const estimateReadTime = (content: string[]) => {
    const words = content.join(" ").split(/\s+/).filter(Boolean).length;
    const minutes = Math.max(3, Math.round(words / 200));
    return `${minutes} min read`;
  };

  return (
    <section id="articles" className="py-12 md:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mb-3 md:mb-4">
            Latest Articles
          </h2>
          <p className="text-muted-foreground mb-8 md:mb-12 max-w-2xl text-sm md:text-base">
            In-depth guides and insights from years of living abroad.
          </p>
        </AnimatedSection>

        <div className="flex flex-col gap-4 mb-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Filter articles">
            {tabs.map((tab) => {
              const isActive = tab === activeTab;
              return (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`rounded-[6px] border px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-colors ${
                    isActive
                      ? "bg-primary text-primary-foreground border-primary shadow-sm"
                      : "border-border text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/5"
                  } focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              );
            })}
          </div>
          <div className="flex items-center gap-2" role="group" aria-label="Sort articles">
            {(["Newest", "Popular"] as const).map((sort) => {
              const isActive = sortOrder === sort;
              return (
                <button
                  key={sort}
                  type="button"
                  className={`rounded-[6px] border px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-colors ${
                    isActive
                      ? "bg-accent text-accent-foreground border-accent shadow-sm"
                      : "border-border text-muted-foreground hover:text-accent hover:border-accent hover:bg-accent/10"
                  } focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background`}
                  onClick={() => setSortOrder(sort)}
                >
                  {sort}
                </button>
              );
            })}
          </div>
        </div>

        {displayedArticles.length === 0 ? (
          <div className="bg-card border border-border/50 rounded-[12px] p-8 text-center text-muted-foreground">
            No articles in this category yet. Try another filter.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {displayedArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
              >
                <Link
                  to={`/article/${article.slug}`}
                  className="group block h-full bg-card border border-border/50 rounded-[12px] overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all duration-300 shadow-sm focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <div
                      className="absolute inset-0 bg-[linear-gradient(hsl(var(--primary))/0.06_1px,transparent_1px),linear-gradient(90deg,hsl(var(--primary))/0.06_1px,transparent_1px)] bg-[size:32px_32px] opacity-40"
                      aria-hidden="true"
                    />
                    <motion.img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 ease group-hover:scale-[1.04]"
                      loading={index === 0 ? "eager" : "lazy"}
                      decoding="async"
                      width={1280}
                      height={720}
                    />
                  </div>

                  <div className="p-5 md:p-6 flex h-full flex-col">
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <Badge
                        variant="secondary"
                        className="text-[10px] tracking-[0.2em] uppercase bg-accent/10 text-accent border border-accent/20"
                      >
                        {article.category}
                      </Badge>
                      {article.cityTag ? (
                        <Badge
                          variant="outline"
                          className="text-[10px] uppercase tracking-wide text-accent border-accent/30"
                        >
                          {article.cityTag}
                        </Badge>
                      ) : null}
                    </div>

                    <h3 className="font-heading font-semibold text-foreground text-lg md:text-xl mb-3 line-clamp-2 group-hover:text-primary transition-colors leading-snug">
                      {article.title}
                    </h3>

                    <p className="text-base md:text-lg text-muted-foreground line-clamp-2 min-h-[3.5rem] leading-relaxed">
                      {article.excerpt}
                    </p>

                    <div className="mt-auto pt-5 flex items-center gap-2 text-xs uppercase tracking-wide text-muted-foreground">
                      <span>{article.readTime || estimateReadTime(article.content)}</span>
                      <span className="text-muted-foreground/60">|</span>
                      <span>{article.date}</span>
                      <span className="ml-auto text-primary/70" aria-hidden="true">
                        -&gt;
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        )}

        <AnimatedSection delay={0.3}>
          <div className="text-center mt-10 md:mt-12">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/articles"
                className="inline-block border-2 border-primary text-primary font-semibold px-6 py-3 rounded-[6px] hover:bg-primary hover:text-primary-foreground transition-all duration-200 uppercase tracking-wide text-sm focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                View All Articles
              </Link>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ArticlesSection;
