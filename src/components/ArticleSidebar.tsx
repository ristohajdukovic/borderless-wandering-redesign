import { Article } from "@/data/articles";
import { Link } from "react-router-dom";

interface ArticleSidebarProps {
  relatedArticles: Article[];
}

const ArticleSidebar = ({ relatedArticles }: ArticleSidebarProps) => {
  return (
    <aside className="lg:w-80 flex-shrink-0">
      <div className="sticky top-24 space-y-8">
        {/* Newsletter Signup */}
        <div className="bg-hero-card text-hero-card-foreground rounded-lg p-6">
          <h3 className="font-heading font-bold text-lg mb-3">Stay Updated</h3>
          <p className="text-sm text-white/70 mb-4">
            Get the latest expat insights delivered to your inbox.
          </p>
          <form className="space-y-3">
            <input
              type="email"
              placeholder="Your email"
              className="input-dark text-sm"
            />
            <button type="submit" className="btn-primary w-full text-sm">
              Subscribe
            </button>
          </form>
        </div>

        {/* Related Articles */}
        <div>
          <h3 className="font-heading font-bold text-lg mb-4 text-foreground">
            Related Articles
          </h3>
          <div className="space-y-4">
            {relatedArticles.map((article) => (
              <Link
                key={article.id}
                to={`/article/${article.slug}`}
                className="flex gap-3 group"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-20 h-14 object-cover rounded flex-shrink-0"
                />
                <div>
                  <h4 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    {article.readTime}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div>
          <h3 className="font-heading font-bold text-lg mb-4 text-foreground">
            Categories
          </h3>
          <div className="flex flex-wrap gap-2">
            {["City Comparison", "City Review", "Expat Life", "Cost of Living", "Visa & Residency"].map((cat) => (
              <span
                key={cat}
                className="text-xs px-3 py-1 bg-muted text-muted-foreground rounded-full hover:bg-primary hover:text-primary-foreground cursor-pointer transition-colors"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default ArticleSidebar;
