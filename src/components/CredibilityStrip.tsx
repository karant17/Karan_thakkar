import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "8+", label: "Years Experience" },
  { value: "HRIS", label: "Implementation & Optimization" },
  { value: "20+", label: "Automation Workflows Built" },
  { value: "L&D", label: "Tech & Dashboards" },
];

const CredibilityStrip = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="credibility" ref={ref} className="border-y border-border surface-elevated">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="text-center"
          >
            <div className="font-heading text-3xl md:text-4xl font-bold text-primary mb-1">{s.value}</div>
            <div className="text-sm text-muted-foreground">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CredibilityStrip;
