import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Dashboards", href: "#dashboards" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl"
    >
      <div
        className={`flex items-center justify-between h-14 px-5 rounded-2xl transition-all duration-300 ${
          scrolled ? "glass-strong" : "glass"
        }`}
      >
        <a href="#" onClick={(e) => handleScroll(e, 'body')} className="font-heading font-bold text-lg text-foreground flex items-center gap-1">
          <span className="text-gradient">KT</span>
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
        </a>

        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((l) => (
            <a 
              key={l.href} 
              href={l.href}
              onClick={(e) => handleScroll(e, l.href)}
              className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setDark(!dark)}
            className="w-9 h-9 rounded-lg glass-subtle flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            className="md:hidden w-9 h-9 rounded-lg glass-subtle flex items-center justify-center text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="md:hidden mt-2 glass-strong rounded-2xl overflow-hidden"
          >
            <div className="px-5 py-4 flex flex-col gap-3">
              {navLinks.map((l) => (
                <a 
                  key={l.href} 
                  href={l.href} 
                  onClick={(e) => handleScroll(e, l.href)} 
                  className="text-muted-foreground hover:text-primary transition-colors text-sm cursor-pointer"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
