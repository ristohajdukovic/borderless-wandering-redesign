import { Fragment } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/ShareButtons";
import ArticleSidebar from "@/components/ArticleSidebar";
import { getArticleBySlug, getRelatedArticles } from "@/data/articles";

const ArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = getArticleBySlug(slug || "");
  const relatedArticles = article ? getRelatedArticles(article.id) : [];

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main id="main-content" className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-heading font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">The article you are looking for does not exist.</p>
          <Link to="/articles" className="btn-primary inline-block">
            Back to Articles
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const renderInline = (text: string) => {
    const parts = text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean);
    return parts.map((part, index) =>
      part.startsWith("**") ? (
        <strong key={`${part}-${index}`}>{part.slice(2, -2)}</strong>
      ) : (
        <Fragment key={`${part}-${index}`}>{part}</Fragment>
      )
    );
  };

  const renderBlocks = (content: string[]) => {
    const blocks: JSX.Element[] = [];
    let listItems: string[] = [];
    let listType: "ul" | "ol" | null = null;

    const flushList = () => {
      if (!listType || listItems.length === 0) return;
      blocks.push(
        listType === "ul" ? (
          <ul key={`list-${blocks.length}`} className="list-disc ml-5 space-y-2 mb-6">
            {listItems.map((item, index) => (
              <li key={`${item}-${index}`} className="text-foreground/90 leading-relaxed">
                {renderInline(item.replace("- ", ""))}
              </li>
            ))}
          </ul>
        ) : (
          <ol key={`list-${blocks.length}`} className="list-decimal ml-5 space-y-2 mb-6">
            {listItems.map((item, index) => (
              <li key={`${item}-${index}`} className="text-foreground/90 leading-relaxed">
                {renderInline(item.replace(/^\d+\.\s/, ""))}
              </li>
            ))}
          </ol>
        )
      );
      listItems = [];
      listType = null;
    };

    content.forEach((line, index) => {
      if (line.startsWith("## ")) {
        flushList();
        blocks.push(
          <h2 key={`heading-${index}`} className="text-2xl font-heading font-bold text-foreground mt-10 mb-4">
            {line.replace("## ", "")}
          </h2>
        );
        return;
      }
      if (line.startsWith("> ")) {
        flushList();
        blocks.push(
          <blockquote
            key={`quote-${index}`}
            className="border-l-4 border-primary pl-6 py-2 my-6 italic text-lg text-muted-foreground bg-muted/30 pr-6 rounded-r-[12px]"
          >
            {line.replace("> ", "")}
          </blockquote>
        );
        return;
      }
      if (line.startsWith("- ")) {
        if (listType && listType !== "ul") flushList();
        listType = "ul";
        listItems.push(line);
        return;
      }
      if (/^\d+\.\s/.test(line)) {
        if (listType && listType !== "ol") flushList();
        listType = "ol";
        listItems.push(line);
        return;
      }

      flushList();
      blocks.push(
        <p key={`paragraph-${index}`} className="text-foreground/90 leading-relaxed mb-4">
          {renderInline(line)}
        </p>
      );
    });

    flushList();
    return blocks;
  };

  const currentUrl = typeof window !== "undefined" ? window.location.href : "";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main id="main-content">
        <div className="relative h-[50vh] min-h-[400px] overflow-hidden rounded-[12px]">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-500 ease hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="container mx-auto">
              <Link
                to="/articles"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Articles
              </Link>
              <span className="block text-primary font-medium text-sm mb-3 uppercase tracking-wide">
                {article.category}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white max-w-4xl">
                {article.title}
              </h1>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-12">
            <article className="flex-1 max-w-3xl">
              <div className="flex flex-wrap items-center gap-6 pb-6 border-b border-border mb-8">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <User className="w-4 h-4" />
                  <span className="text-sm">Philip James</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{article.date}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{article.readTime}</span>
                </div>
              </div>

              <div className="mb-8">
                <ShareButtons title={article.title} url={currentUrl} />
              </div>

              {article.youtubeId && (
                <div className="aspect-video mb-8 rounded-[12px] overflow-hidden shadow-lg">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${article.youtubeId}`}
                    title={article.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              )}

              <div className="space-y-2">{renderBlocks(article.content)}</div>

              <div className="mt-12 pt-8 border-t border-border">
                <p className="text-muted-foreground mb-4">
                  Enjoyed this article? Share it with others who might find it useful.
                </p>
                <ShareButtons title={article.title} url={currentUrl} />
              </div>

              <div className="mt-12 bg-muted/50 rounded-[12px] p-6 flex gap-6 items-start">
                <div className="w-16 h-16 rounded-[6px] bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <User className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg mb-2">Philip James</h3>
                  <p className="text-muted-foreground text-sm">
                    Expat life researcher and content creator helping men over 50 find their ideal city abroad.
                    Currently based in Thailand after 6+ years living across Asia.
                  </p>
                  <div className="flex gap-4 mt-3">
                    <a href="https://youtube.com" className="text-primary text-sm hover:underline">
                      YouTube
                    </a>
                    <a href="https://linkedin.com" className="text-primary text-sm hover:underline">
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </article>

            <ArticleSidebar relatedArticles={relatedArticles} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ArticlePage;
