import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, BarChart3, Users, TrendingUp } from "lucide-react";

const dashboards = [
  {
    title: "HR Analytics Dashboard",
    description: "Headcount, attrition trends, and diversity metrics overview.",
    icon: BarChart3,
    link: "#",
  },
  {
    title: "Recruitment Pipeline",
    description: "Hiring funnel metrics and time-to-fill tracking.",
    icon: Users,
    link: "#",
  },
  {
    title: "Workforce Planning",
    description: "Capacity planning and workforce cost analysis.",
    icon: TrendingUp,
    link: "#",
  },
];

const DashboardLinksSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="dashboards" ref={ref} className="section-padding relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="text-xs font-mono text-primary uppercase tracking-[0.2em]">// dashboards</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3">
            Live <span className="text-gradient">Dashboards</span>
          </h2>
          <p className="text-muted-foreground mt-3 text-sm font-mono">// sample analytics work · placeholder links</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {dashboards.map((d, i) => {
            const Icon = d.icon;
            return (
              <motion.a
                key={i}
                href={d.link}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group p-6 rounded-2xl glass hover:glow-primary transition-all flex flex-col"
              >
                <div className="w-11 h-11 rounded-xl glass-strong flex items-center justify-center mb-4 text-primary">
                  <Icon size={18} />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-1">{d.title}</h3>
                <p className="text-sm text-muted-foreground flex-1">{d.description}</p>
                <span className="mt-4 text-sm text-muted-foreground group-hover:text-primary transition-colors flex items-center gap-1.5 font-mono">
                  view dashboard <ExternalLink size={13} />
                </span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DashboardLinksSection;
