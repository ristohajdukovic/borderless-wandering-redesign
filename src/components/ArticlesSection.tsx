import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { articles } from "@/data/articles";
import AnimatedSection from "@/components/ui/AnimatedSection";

const ArticlesSection = () => {
  // Only show first 3 articles for 3-column layout
  const displayedArticles = articles.slice(0, 3);

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

        {/* Mobile: 1 column, Tablet: 2 columns, Desktop: 3 columns */}
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
                className="group block h-full bg-card border border-border/50 rounded-2xl overflow-hidden hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 shadow-sm"
              >
                {/* Larger thumbnail with 16:9 aspect ratio */}
                <div className="aspect-video overflow-hidden">
                  <motion.img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                </div>
                
                <div className="p-5 md:p-6">
                  {/* Category and read time */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                      {article.category}
                    </span>
                    <span className="text-xs text-foreground/40">•</span>
                    <span className="text-xs text-foreground/60 font-medium">
                      {article.readTime}
                    </span>
                  </div>
                  
                  {/* Title - larger for readability */}
                  <h3 className="font-heading font-semibold text-foreground text-lg md:text-xl mb-3 line-clamp-2 group-hover:text-primary transition-colors leading-snug">
                    {article.title}
                  </h3>
                  
                  {/* Excerpt - more readable with proper contrast */}
                  <p className="text-sm md:text-base text-foreground/70 line-clamp-3 mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  {/* Read more link */}
                  <span className="text-primary text-sm font-semibold inline-flex items-center gap-1.5 group-hover:gap-2 transition-all">
                    Read Article
                    <motion.span 
                      className="inline-block"
                      initial={{ x: 0 }}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      →
                    </motion.span>
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* View all articles link */}
        <AnimatedSection delay={0.3}>
          <div className="text-center mt-10 md:mt-12">
            <motion.a
              href="#articles"
              className="inline-block border-2 border-primary text-primary font-semibold px-6 py-3 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-200 uppercase tracking-wide text-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View All Articles
            </motion.a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ArticlesSection;
