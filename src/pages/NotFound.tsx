import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main id="main-content" className="container mx-auto px-4 py-[60px]">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-primary text-sm font-semibold uppercase tracking-[0.2em] mb-4">404</p>
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            This page is not available.
          </h1>
          <p className="text-muted-foreground mb-8">
            The link may be broken or the page may have moved. Let us get you back on track.
          </p>
          <a href="/" className="btn-primary inline-flex items-center justify-center">
            Return to Home
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
