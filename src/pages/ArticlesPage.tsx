import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsletterSection from "@/components/NewsletterSection";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { articles } from "@/data/articles";

const ArticlesPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState<"Newest" | "Popular">("Newest");
  const [query, setQuery] = useState("");

  const categories = useMemo(() => {
    const unique = Array.from(new Set(articles.map((article) => article.category)));
    return ["All", ...unique];
  }, []);

  const filteredArticles = useMemo(() => {
    const results = articles.filter((article) => {
      const matchesCategory = activeCategory === "All" || article.category === activeCategory;
      const matchesQuery =
        article.title.toLowerCase().includes(query.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
    const sorted = [...results];
    if (sortOrder === "Newest") {
      sorted.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }
    return sorted;
  }, [activeCategory, query, sortOrder]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main id="main-content">
        <section className="relative py-[60px] md:py-28 bg-gradient-to-br from-background via-secondary/40 to-background overflow-hidden">
          <div className="absolute top-10 right-10 w-64 h-64 bg-primary/5 rounded-[16px] blur-3xl" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <AnimatedSection>
                <p className="text-primary font-semibold text-sm uppercase tracking-[0.2em] mb-4">Insights</p>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Articles for men making real relocation decisions.
                </h1>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <p className="text-muted-foreground text-lg max-w-2xl">
                  Clear, practical guidance based on lived experience - not sponsored hype or surface-level lists.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <section className="py-10 md:py-14">
          <div className="container mx-auto px-4">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-[6px] text-sm font-semibold border transition-colors ${
                      activeCategory === category
                        ? "bg-primary text-primary-foreground border-primary shadow-sm"
                        : "border-border text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/5"
                    } focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-3 lg:ml-auto">
                <div className="flex items-center gap-2" role="group" aria-label="Sort articles">
                  {(["Newest", "Popular"] as const).map((sort) => {
                    const isActive = sortOrder === sort;
                    return (
                      <button
                        key={sort}
                        type="button"
                        className={`px-4 py-2 rounded-[6px] text-xs font-semibold uppercase tracking-wide border transition-colors ${
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
                <div className="relative w-full lg:max-w-sm">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="search"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Search articles"
                    aria-label="Search articles"
                    className="w-full pl-9 pr-3 py-2.5 bg-card border border-border rounded-[6px] text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="container mx-auto px-4">
            {filteredArticles.length === 0 ? (
              <div className="bg-card border border-border/50 rounded-[12px] p-8 text-center text-muted-foreground">
                No articles match your search. Try a different keyword or category.
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredArticles.map((article, index) => (
                  <motion.article
                    key={article.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <Link
                      to={`/article/${article.slug}`}
                      className="group block h-full bg-card border border-border/50 rounded-[12px] overflow-hidden hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 shadow-sm focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    >
                      <div className="aspect-video overflow-hidden">
                        <motion.img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover transition-transform duration-500 ease group-hover:scale-[1.04]"
                        />
                      </div>
                      <div className="p-6 flex h-full flex-col">
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <span className="text-[10px] font-semibold text-primary uppercase tracking-wide">
                            {article.category}
                          </span>
                        </div>
                        <h3 className="font-heading font-semibold text-foreground text-lg mb-3 line-clamp-2 group-hover:text-primary transition-colors leading-snug">
                          {article.title}
                        </h3>
                        <p className="text-base md:text-lg text-muted-foreground line-clamp-2 min-h-[3.5rem] leading-relaxed">
                          {article.excerpt}
                        </p>
                        <div className="mt-auto pt-5 flex items-center gap-2 text-xs uppercase tracking-wide text-muted-foreground">
                          <span>{article.readTime}</span>
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
          </div>
        </section>
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default ArticlesPage;
