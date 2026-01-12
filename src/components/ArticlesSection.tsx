import article1 from "@/assets/article-1.jpg";
import article2 from "@/assets/article-2.jpg";
import article3 from "@/assets/article-3.jpg";
import article4 from "@/assets/article-4.jpg";

const articles = [
  {
    image: article1,
    title: "If You Choose Bogotá, You've Never Been to Thailand",
    date: "Jan 4, 2026",
    excerpt: "A reality check for expats considering Colombia over Southeast Asia. The numbers don't lie...",
    link: "#",
  },
  {
    image: article2,
    title: "Medellín Doesn't Hold Up to the Reality",
    date: "Jan 4, 2026",
    excerpt: "After spending significant time in Colombia's most hyped city, here's what they don't tell you...",
    link: "#",
  },
  {
    image: article3,
    title: "Returning to the U.S. After 6 Years in Asia",
    date: "Dec 30, 2025",
    excerpt: "Cost of living in America is too high — spending more does not correlate to quality...",
    link: "#",
  },
  {
    image: article4,
    title: "10 Ways the U.S.A. Is Exceptional After Traveling the World",
    date: "Nov 30, 2025",
    excerpt: "Despite the costs, America still offers unique advantages no other country can match...",
    link: "#",
  },
];

const ArticlesSection = () => {
  return (
    <section id="articles" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Latest Articles</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((article, index) => (
            <a
              key={article.title}
              href={article.link}
              className="article-card group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <p className="text-xs text-muted-foreground mb-2">{article.date}</p>
                <h3 className="font-heading font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {article.excerpt}
                </p>
                <span className="text-primary text-sm font-medium mt-3 inline-block">
                  Read More →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
