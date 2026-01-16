import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import logo from "@/assets/logo.svg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);

  const navItems = useMemo(
    () => [
      { name: "Thailand City Ratings", href: "/videos" },
      { name: "30 in 30", href: "/videos" },
      { name: "Ranked Cities", href: "/articles" },
      { name: "About", href: "/about" },
      { name: "Contact", href: "/contact" },
    ],
    []
  );

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-3 z-50 bg-transparent">
      <a href="#main-content" className="skip-link bg-primary-foreground text-primary">
        Skip to content
      </a>
      <div className="container mx-auto px-4">
        <div className="h-24 flex items-center">
          <div
            className={`flex w-full items-center justify-between gap-4 rounded-[16px] border border-primary/30 px-5 py-4 shadow-sm backdrop-blur-xl ${
              isScrolled
                ? "bg-[linear-gradient(135deg,hsl(var(--primary)/0.6),rgba(0,0,0,0.4))]"
                : "bg-[linear-gradient(135deg,hsl(var(--primary)/0.6),rgba(0,0,0,0.3))]"
            }`}
          >
            <button
              type="button"
              className="hidden lg:inline-flex items-center gap-3 rounded-[6px] bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-primary shadow-sm hover:bg-white transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              aria-expanded={isMenuExpanded}
              aria-controls="primary-nav"
              onClick={() => setIsMenuExpanded((prev) => !prev)}
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-[6px] bg-primary/10 text-primary">
                <Menu className="h-4 w-4" />
              </span>
              Menu
            </button>
            <Link to="/" className="absolute left-1/2 -translate-x-1/2">
              <img src={logo} alt="The Borderless Office" className="h-10 w-auto" />
            </Link>

            <div className="hidden lg:flex items-center gap-3">
              <Button
                asChild
                className="group h-auto whitespace-nowrap rounded-[6px] bg-white px-7 py-3.5 font-medium tracking-[0.3px] text-foreground transition-all duration-300 ease-[ease] hover:bg-white/90 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                <a
                  href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=6957952531863920640"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Subscribe on LinkedIn
                  <span className="ml-3 inline-flex h-9 w-9 items-center justify-center rounded-[6px] bg-primary text-primary-foreground">
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 ease-[ease] group-hover:translate-x-[3px]" />
                  </span>
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-3 lg:hidden">
              <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetTrigger asChild>
                  <button
                    type="button"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-[6px] bg-white/90 text-primary shadow-sm transition-colors hover:bg-white"
                    aria-label="Open menu"
                  >
                    <Menu className="h-5 w-5" />
                  </button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-[320px] sm:w-[360px] border-white/20 bg-primary/80 text-primary-foreground backdrop-blur-xl"
                >
                  <SheetHeader>
                    <SheetTitle className="text-primary-foreground">Navigate</SheetTitle>
                  </SheetHeader>
                  <div className="mt-6 space-y-6">
                    <div className="flex flex-col gap-3">
                      {navItems.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="text-sm font-semibold text-primary-foreground/90 hover:text-primary-foreground transition-colors"
                          onClick={() => setIsSheetOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                    <Button
                      asChild
                      className="w-full bg-white text-primary hover:bg-white/90 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary/40"
                    >
                      <a
                        href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=6957952531863920640"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsSheetOpen(false)}
                      >
                        Subscribe on LinkedIn
                      </a>
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
        <div
          id="primary-nav"
          className={`hidden lg:block overflow-hidden transition-all duration-300 ${
            isMenuExpanded ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav
            className="mt-3 flex items-center justify-end gap-8 rounded-[16px] border border-primary/20 bg-white/85 px-6 py-3 text-primary shadow-sm backdrop-blur-lg"
            aria-label="Primary"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-xs font-semibold uppercase tracking-[0.14em] text-primary hover:text-primary/70 transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded-[6px]"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
