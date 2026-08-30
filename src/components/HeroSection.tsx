import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Mail, Phone, MapPin, Download, Linkedin, Sparkles } from "lucide-react";

const HeroSection = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding pt-28 overflow-hidden">
      {/* Tech grid background */}
      <div className="absolute inset-0 grid-pattern pointer-events-none" />

      {/* Floating glow orbs */}
      <div className="absolute top-1/4 -left-20 w-[420px] h-[420px] rounded-full bg-primary/20 blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-[420px] h-[420px] rounded-full bg-accent/20 blur-[120px] pointer-events-none animate-pulse" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-8 text-xs font-mono text-muted-foreground"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          Open to opportunities · Mumbai, India
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] mb-6 tracking-tight"
        >
          Karan <span className="text-gradient">Thakkar</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl font-heading font-medium mb-4 text-foreground/90"
        >
          HR Technology Specialist & HR Business Partner
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-muted-foreground text-base md:text-lg max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Senior HR Technology Professional with deep expertise in driving digital HR transformation. 
          I streamline complex HR processes and reduce manual effort across enterprise platforms like Workday, SAP SuccessFactors, and Oracle HCM Cloud, 
          leveraging automation scripting and building sophisticated workforce analytics dashboards to empower data-driven decisions.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <a
            href="#experience"
            onClick={(e) => handleScroll(e, '#experience')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-primary-foreground font-medium transition-all hover:glow-primary hover:scale-[1.02] active:scale-95 group"
            style={{ background: "var(--gradient-primary)" }}
          >
            Explore Timeline
            <ArrowRight size={16} className="inline ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="./Karan_Thakkar_Resume.pdf"
            download="Karan_Thakkar_Resume.pdf"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl glass-strong hover:glow-primary transition-all text-foreground font-medium text-sm group"
          >
            <Download size={16} className="text-primary group-hover:-translate-y-0.5 transition-transform" />
            Download Resume
          </a>
        </motion.div>

        {/* Contact chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-2 text-xs mb-16"
        >
          {[
            { icon: Mail, text: "thakkarkaran17@gmail.com", href: "mailto:thakkarkaran17@gmail.com" },
            { icon: Phone, text: "+91 7738439765", href: "tel:+917738439765" },
            { icon: Linkedin, text: "linkedin.com/in/karant17", href: "https://linkedin.com/in/karant17" },
            { icon: MapPin, text: "Mumbai, MH", href: null as string | null },
          ].map((item, i) => {
            const Icon = item.icon;
            const cls = "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-subtle text-muted-foreground hover:text-primary transition-colors font-mono";
            return item.href ? (
              <a key={i} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className={cls}>
                <Icon size={12} /> {item.text}
              </a>
            ) : (
              <span key={i} className={cls}>
                <Icon size={12} /> {item.text}
              </span>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-8 flex flex-col items-center gap-1"
        >
          <p className="text-xs font-mono text-primary uppercase tracking-widest mb-2 opacity-70">Scroll to Explore</p>
          <a href="#experience" onClick={(e) => handleScroll(e, '#experience')} className="flex flex-col items-center justify-center text-primary transition-colors group cursor-pointer">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <ArrowDown size={24} className="opacity-50 group-hover:opacity-100 transition-opacity" />
            </motion.div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut", delay: 0.2 }}
              className="-mt-3"
            >
              <ArrowDown size={24} className="opacity-80 group-hover:opacity-100 transition-opacity glow-primary rounded-full" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
