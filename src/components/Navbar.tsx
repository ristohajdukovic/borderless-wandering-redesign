import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Linkedin, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import ArrowButton from "@/components/ui/ArrowButton";
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
            className={`relative flex w-full items-center justify-between gap-4 rounded-[16px] border border-primary-foreground/10 bg-primary px-5 py-4 shadow-sm ${
              isScrolled ? "shadow-md" : "shadow-sm"
            }`}
          >
            <div className="flex items-center gap-3">
              <button
                type="button"
                className="hidden lg:inline-flex items-center gap-3 rounded-[6px] bg-primary-foreground/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground shadow-sm hover:bg-primary-foreground/20 transition-colors focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                aria-expanded={isMenuExpanded}
                aria-controls="primary-nav"
                onClick={() => setIsMenuExpanded((prev) => !prev)}
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-[6px] bg-primary-foreground/10 text-primary-foreground">
                  <Menu className="h-4 w-4" />
                </span>
                Menu
              </button>

              <div className="lg:hidden">
                <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                  <SheetTrigger asChild>
                    <button
                      type="button"
                      className="inline-flex h-11 w-11 items-center justify-center rounded-[6px] bg-primary-foreground/10 text-primary-foreground shadow-sm transition-colors hover:bg-primary-foreground/20"
                      aria-label="Open menu"
                    >
                      <Menu className="h-5 w-5" />
                    </button>
                  </SheetTrigger>
                  <SheetContent
                    side="right"
                    className="w-[320px] sm:w-[360px] border-white/10 bg-primary text-primary-foreground shadow-lg"
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
                      <ArrowButton
                        label="Subscribe on LinkedIn"
                        href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=6957952531863920640"
                        target="_blank"
                        variant="secondary"
                        size="md"
                        className="w-full"
                        onClick={() => setIsSheetOpen(false)}
                      />
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>

            <Link to="/" className="absolute left-1/2 -translate-x-1/2">
              <img src={logo} alt="The Borderless Office" className="h-10 w-auto" />
            </Link>

            <div className="flex items-center gap-3">
              <div className="hidden lg:flex items-center gap-3">
                <ArrowButton
                  label="Subscribe on LinkedIn"
                  href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=6957952531863920640"
                  target="_blank"
                  variant="secondary"
                  size="md"
                />
              </div>

              <a
                href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=6957952531863920640"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Subscribe on LinkedIn"
                className="inline-flex h-11 w-11 items-center justify-center rounded-[6px] bg-primary-foreground/10 text-primary-foreground shadow-sm transition-colors hover:bg-primary-foreground/20 focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-primary lg:hidden"
              >
                <Linkedin className="h-5 w-5" />
              </a>
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
            className="mt-3 flex items-center justify-end gap-8 rounded-[16px] border border-primary-foreground/10 bg-primary px-6 py-3 text-primary-foreground shadow-sm"
            aria-label="Primary"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground/90 hover:text-primary-foreground transition-colors focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-primary rounded-[6px]"
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
