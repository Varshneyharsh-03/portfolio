import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="font-mono text-lg">
            <span className="text-primary">&lt;</span>
            <span className="text-foreground">Harsh</span>
            <span className="text-primary">/&gt;</span>
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Built with</span>
            <Heart size={14} className="text-primary fill-primary" />
            <span>by Harsh Varshney © {new Date().getFullYear()}</span>
          </div>

          {/* Tech */}
          <div className="text-xs text-muted-foreground font-mono">
            React • Tailwind CSS • TypeScript
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
