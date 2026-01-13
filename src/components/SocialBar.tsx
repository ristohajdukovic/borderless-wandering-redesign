import { Instagram, Twitter, Linkedin, Facebook, Youtube } from "lucide-react";

const SocialBar = () => {
  return (
    <div className="bg-card-dark py-2">
      <div className="container mx-auto px-4 flex justify-end items-center gap-4">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <Instagram className="w-4 h-4" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <Twitter className="w-4 h-4" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <Linkedin className="w-4 h-4" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <Facebook className="w-4 h-4" />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <Youtube className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default SocialBar;
