import { Instagram, Twitter, Linkedin, Facebook, Youtube } from "lucide-react";

const SocialBar = () => {
  return (
    <div className="bg-social-bar py-2">
      <div className="container mx-auto px-4 flex justify-end items-center gap-4">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <Instagram className="w-4 h-4" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <Twitter className="w-4 h-4" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <Linkedin className="w-4 h-4" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <Facebook className="w-4 h-4" />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <Youtube className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default SocialBar;
