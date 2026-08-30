import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FolderOpen, Workflow, Database, FileSpreadsheet, Globe, SpellCheck, Cpu } from "lucide-react";

const projects = [
  {
    icon: Workflow,
    title: "HR Workflow Automation",
    description: "Google Apps Script tools to automate multi-sheet HR tracking — reducing manual effort and eliminating data entry errors.",
    tags: ["Apps Script", "Automation"],
  },
  {
    icon: Database,
    title: "Centralised HR Resource Hub",
    description: "Google Team Site as a single, searchable source of truth for all HR policies, SOPs, and team tools.",
    tags: ["Knowledge Mgmt", "Google Sites"],
  },
  {
    icon: Globe,
    title: "Bach Flower Remedies Web App",
    description: "Full-stack ASP.Net & MySQL application for automated product reference and client management.",
    tags: ["ASP.Net", "MySQL"],
  },
  {
    icon: SpellCheck,
    title: "Custom Spell-Check Engine",
    description: "Application that scans documents and flags user-defined terminology — built for editorial and compliance use cases.",
    tags: ["NLP", "Editorial"],
  },
  {
    icon: Cpu,
    title: "IoT Prototyping",
    description: "Hands-on hardware-software experimentation using Raspberry Pi and Arduino for web server hosting and automation.",
    tags: ["Raspberry Pi", "Arduino"],
  },
  {
    icon: FileSpreadsheet,
    title: "PMS Budgeting Workflow",
    description: "Automated attendance capture and PMS budgeting workflows in collaboration with vendor and Plant HR team.",
    tags: ["HRIS", "Process Design"],
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" ref={ref} className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="text-xs font-mono text-primary uppercase tracking-[0.2em]">// projects</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3">
            Technical <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {projects.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1, type: "spring", stiffness: 100 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group p-6 rounded-2xl glass transition-all relative overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-primary/20"
              >
                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-primary/10 blur-2xl group-hover:bg-primary/20 transition-all" />
                <div className="relative">
                  <div className="w-11 h-11 rounded-xl glass-strong flex items-center justify-center mb-4 text-primary">
                    <Icon size={18} />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded-md glass-subtle text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center p-8 rounded-2xl glass-subtle border-dashed"
        >
          <FolderOpen size={28} className="text-primary mx-auto mb-3" />
          <p className="text-muted-foreground font-mono text-sm">// adding more projects soon</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
