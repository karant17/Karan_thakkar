import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquareQuote } from "lucide-react";

const testimonials = [
  {
    quote: "Karan’s expertise in HR systems completely transformed our onboarding process. By bridging Active Directory with our HRIS, he saved us countless hours of manual work and eliminated errors.",
    author: "Colleague",
    title: "IT Director"
  },
  {
    quote: "The automated HR dashboards Karan built using Google Data Studio provided our leadership with unprecedented visibility into workforce analytics and attrition trends.",
    author: "Project Stakeholder",
    title: "VP of Human Resources"
  }
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="testimonials" ref={ref} className="section-padding relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <span className="text-xs font-mono text-primary uppercase tracking-[0.2em]">// testimonials</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3">
            LinkedIn <span className="text-gradient">Recommendations</span>
          </h2>
          <p className="text-muted-foreground mt-3 text-sm">What colleagues and clients have to say</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl glass hover:glow-primary transition-all relative"
            >
              <MessageSquareQuote size={40} className="text-primary/20 absolute top-6 right-6" />
              <p className="text-foreground/90 italic mb-6 relative z-10 leading-relaxed">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full glass-strong flex items-center justify-center text-primary font-bold">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <div className="font-heading font-semibold text-sm text-foreground">{t.author}</div>
                  <div className="text-xs font-mono text-muted-foreground">{t.title}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
