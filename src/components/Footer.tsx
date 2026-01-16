import { Facebook, Instagram, Linkedin, Mail, Youtube } from "lucide-react";
import logo from "@/assets/logo.svg";

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary border-t border-primary-foreground/20 py-16 text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <img src={logo} alt="The Borderless Office" className="h-10 w-auto mb-4" />
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Expat life after 50 with Thailand city ratings, ranked city comparisons, and on-the-ground relocation
              field notes for men planning life abroad.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://youtube.com/c/PhilipJames360"
                className="inline-flex h-11 w-11 items-center justify-center rounded-[6px] border border-primary-foreground/40 text-primary-foreground/80 hover:text-primary-foreground hover:border-primary-foreground transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-foreground focus-visible:outline-offset-2"
                aria-label="YouTube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                className="inline-flex h-11 w-11 items-center justify-center rounded-[6px] border border-primary-foreground/40 text-primary-foreground/80 hover:text-primary-foreground hover:border-primary-foreground transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-foreground focus-visible:outline-offset-2"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                className="inline-flex h-11 w-11 items-center justify-center rounded-[6px] border border-primary-foreground/40 text-primary-foreground/80 hover:text-primary-foreground hover:border-primary-foreground transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-foreground focus-visible:outline-offset-2"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                className="inline-flex h-11 w-11 items-center justify-center rounded-[6px] border border-primary-foreground/40 text-primary-foreground/80 hover:text-primary-foreground hover:border-primary-foreground transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-foreground focus-visible:outline-offset-2"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg text-primary-foreground mb-4">Explore Expat Guides</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/videos"
                  className="text-primary-foreground/80 hover:text-primary-foreground hover:underline underline-offset-4 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-foreground focus-visible:outline-offset-2 rounded-[6px]"
                >
                  Thailand City Ratings (Videos)
                </a>
              </li>
              <li>
                <a
                  href="/videos"
                  className="text-primary-foreground/80 hover:text-primary-foreground hover:underline underline-offset-4 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-foreground focus-visible:outline-offset-2 rounded-[6px]"
                >
                  30 in 30 Video Series
                </a>
              </li>
              <li>
                <a
                  href="/articles"
                  className="text-primary-foreground/80 hover:text-primary-foreground hover:underline underline-offset-4 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-foreground focus-visible:outline-offset-2 rounded-[6px]"
                >
                  Ranked Cities (Articles)
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-primary-foreground/80 hover:text-primary-foreground hover:underline underline-offset-4 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-foreground focus-visible:outline-offset-2 rounded-[6px]"
                >
                  About Philip James
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-primary-foreground/80 hover:text-primary-foreground hover:underline underline-offset-4 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-foreground focus-visible:outline-offset-2 rounded-[6px]"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg text-primary-foreground mb-4">Contact</h4>
            <p className="text-primary-foreground/80 mb-2 flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary-foreground" />
              <a
                href="mailto:philip@theborderlessoffice.com"
                className="hover:text-primary-foreground hover:underline underline-offset-4 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-foreground focus-visible:outline-offset-2 rounded-[6px]"
              >
                philip@theborderlessoffice.com
              </a>
            </p>
            <p className="text-primary-foreground/70 text-sm mt-4">Currently based in: Thailand</p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-primary-foreground/70 text-sm">
          <p>Copyright {new Date().getFullYear()} The Borderless Office. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
