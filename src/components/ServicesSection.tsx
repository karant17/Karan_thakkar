import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Cog, BarChart3, GraduationCap, Workflow, Monitor } from "lucide-react";

const services = [
  {
    icon: Workflow,
    title: "HR Automation",
    desc: "Eliminate manual processes with smart workflows — onboarding, offboarding, approvals, and more.",
  },
  {
    icon: Monitor,
    title: "HRIS Optimization",
    desc: "Select, implement, and optimize HRIS platforms that fit your organization's needs and budget.",
  },
  {
    icon: BarChart3,
    title: "Dashboards & Analytics",
    desc: "Turn people data into actionable insights with custom dashboards and real-time reporting.",
  },
  {
    icon: GraduationCap,
    title: "Learning Tech Implementation",
    desc: "Deploy and configure LMS/LXP platforms that drive employee development and compliance.",
  },
  {
    icon: Cog,
    title: "Process Digitization",
    desc: "Transform paper-based HR processes into streamlined digital workflows end-to-end.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" ref={ref} className="section-padding surface-elevated">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-sm text-primary font-medium uppercase tracking-wider">Services</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2">
            How I can help
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <s.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
