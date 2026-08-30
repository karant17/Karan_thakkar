import { Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border/50 py-10 px-6 mt-10">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="font-heading font-bold flex items-center gap-1">
        <span className="text-gradient">KT</span>
        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
      </div>
      <p className="text-xs font-mono text-muted-foreground">
        © {new Date().getFullYear()} Karan Thakkar · Built with care
      </p>
      <div className="flex items-center gap-3">
        <a href="https://linkedin.com/in/karant17" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-lg glass-subtle flex items-center justify-center text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
          <Linkedin size={15} />
        </a>
        <a href="mailto:thakkarkaran17@gmail.com" className="w-9 h-9 rounded-lg glass-subtle flex items-center justify-center text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
          <Mail size={15} />
        </a>
        <a href="tel:+917738439765" className="w-9 h-9 rounded-lg glass-subtle flex items-center justify-center text-muted-foreground hover:text-primary transition-colors" aria-label="Phone">
          <Phone size={15} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
