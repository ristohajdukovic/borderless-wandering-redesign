import { Instagram, Twitter, Linkedin, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-heading font-bold mb-4">
              THE <span className="text-primary">BORDERLESS</span> OFFICE
            </h3>
            <p className="text-white/70 mb-6 max-w-md">
              Expat Life: A Guide to the Best Cities to Live Abroad. Real experiences, 
              practical advice, and honest insights for those seeking a life beyond borders.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com" className="text-white/70 hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" className="text-white/70 hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" className="text-white/70 hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://facebook.com" className="text-white/70 hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://youtube.com" className="text-white/70 hover:text-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#articles" className="text-white/70 hover:text-primary transition-colors">Articles</a></li>
              <li><a href="#videos" className="text-white/70 hover:text-primary transition-colors">Videos</a></li>
              <li><a href="#services" className="text-white/70 hover:text-primary transition-colors">Services</a></li>
              <li><a href="#about" className="text-white/70 hover:text-primary transition-colors">About</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact</h4>
            <p className="text-white/70 mb-2">
              <a href="mailto:philip@theborderlessoffice.com" className="hover:text-primary transition-colors">
                philip@theborderlessoffice.com
              </a>
            </p>
            <p className="text-white/70 text-sm mt-4">
              Currently based in: Thailand 🇹🇭
            </p>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/50 text-sm">
          <p>© {new Date().getFullYear()} The Borderless Office. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
