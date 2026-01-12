import { useState } from "react";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "HOME", href: "#", active: true },
    { name: "ARTICLES", href: "#articles" },
    { name: "VIDEOS", href: "#videos" },
    { name: "SERVICES", href: "#services", hasDropdown: true },
    { name: "ABOUT", href: "#about" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="flex items-center">
              <span className="text-2xl font-heading font-bold text-foreground tracking-tight">
                THE <span className="text-primary">BORDERLESS</span>
              </span>
            </div>
            <span className="text-lg font-heading font-medium text-foreground">OFFICE</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`nav-link flex items-center gap-1 ${item.active ? "nav-link-active" : ""}`}
              >
                {item.name}
                {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
              </a>
            ))}
          </div>

          {/* CTA and Search */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="text-foreground hover:text-primary transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <Button className="btn-primary">FREE NEWSLETTER</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`nav-link ${item.active ? "nav-link-active" : ""}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button className="btn-primary w-full mt-4">FREE NEWSLETTER</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
