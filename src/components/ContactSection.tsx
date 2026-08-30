import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, Phone, Linkedin } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${formData.name}`);
    const body = encodeURIComponent(`${formData.message}\n\n— ${formData.name} (${formData.email})`);
    window.location.href = `mailto:thakkarkaran17@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" ref={ref} className="section-padding relative">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-mono text-primary uppercase tracking-[0.2em]">// contact</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground mt-3 text-sm">Open to opportunities, collaborations, and interesting conversations.</p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-3 mb-8">
          {[
            { icon: Mail, label: "Email", value: "thakkarkaran17@gmail.com", href: "mailto:thakkarkaran17@gmail.com" },
            { icon: Phone, label: "Phone", value: "+91 7738439765", href: "tel:+917738439765" },
            { icon: Linkedin, label: "LinkedIn", value: "/in/karant17", href: "https://linkedin.com/in/karant17" },
          ].map((c, i) => {
            const Icon = c.icon;
            return (
              <a key={i} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
                className="p-4 rounded-2xl glass hover:glow-primary transition-all flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg glass-strong flex items-center justify-center text-primary">
                  <Icon size={15} />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-mono uppercase text-muted-foreground tracking-wider">{c.label}</div>
                  <div className="text-xs text-foreground truncate">{c.value}</div>
                </div>
              </a>
            );
          })}
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass rounded-2xl p-6 md:p-8 space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2 block">Name</label>
              <input
                type="text"
                required
                maxLength={100}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl glass-subtle text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2 block">Email</label>
              <input
                type="email"
                required
                maxLength={255}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl glass-subtle text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="you@email.com"
              />
            </div>
          </div>
          <div>
            <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2 block">Message</label>
            <textarea
              required
              maxLength={1000}
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl glass-subtle text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
              placeholder="What would you like to discuss?"
            />
          </div>
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-primary-foreground font-medium hover:glow-primary transition-all"
            style={{ background: "var(--gradient-primary)" }}
          >
            <Send size={16} />
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
