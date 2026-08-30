import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Database, Users, BarChart3, GraduationCap } from "lucide-react";

const skillGroups = [
  {
    category: "HRIS & Platforms",
    icon: Database,
    skills: [
      { name: "Workday HCM & SAP SuccessFactors", level: 92 },
      { name: "Oracle HCM Cloud & ADP Workforce Now", level: 88 },
      { name: "HR Integrations & Identity Provisioning", level: 85 },
      { name: "Access Control & Data Governance", level: 86 },
    ],
  },
  {
    category: "HR Operations",
    icon: Users,
    skills: [
      { name: "Employee Lifecycle Workflows", level: 90 },
      { name: "HR Policy Development", level: 85 },
      { name: "Process Automation (Google Apps Script)", level: 88 },
      { name: "Vendor & Stakeholder Management", level: 82 },
    ],
  },
  {
    category: "Analytics & Reporting",
    icon: BarChart3,
    skills: [
      { name: "Power BI & Google Data Studio Dashboards", level: 90 },
      { name: "Operational Reports & Analytics", level: 86 },
      { name: "Workforce & Attendance Validation", level: 82 },
      { name: "Engagement Surveys & Diagnostics", level: 80 },
    ],
  },
  {
    category: "L&D / Content",
    icon: GraduationCap,
    skills: [
      { name: "LMS Administration", level: 88 },
      { name: "SCORM-Compliant Content", level: 84 },
      { name: "E-Learning Course Development", level: 86 },
      { name: "Interactive Authoring Tools", level: 82 },
    ],
  },
];

const SkillBar = ({ name, level, delay, inView }: { name: string; level: number; delay: number; inView: boolean }) => (
  <div className="space-y-2">
    <div className="flex justify-between text-sm">
      <span className="text-foreground">{name}</span>
      <span className="font-mono text-primary text-xs">{level}%</span>
    </div>
    <div className="h-1.5 rounded-full bg-secondary/40 overflow-hidden backdrop-blur-sm">
      <motion.div
        className="h-full rounded-full"
        style={{ background: "var(--gradient-primary)" }}
        initial={{ width: 0 }}
        animate={inView ? { width: `${level}%` } : { width: 0 }}
        transition={{ duration: 1, delay, ease: "easeOut" }}
      />
    </div>
  </div>
);

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" ref={ref} className="section-padding relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="text-xs font-mono text-primary uppercase tracking-[0.2em]">// skills</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3">
            Core <span className="text-gradient">Capabilities</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap gap-2 mb-8">
          {skillGroups.map((group, i) => {
            const Icon = group.icon;
            return (
              <button
                key={group.category}
                onClick={() => setActiveTab(i)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all flex items-center gap-2 ${
                  activeTab === i
                    ? "glass-strong text-primary glow-primary"
                    : "glass-subtle text-muted-foreground hover:text-foreground"
                }`}
              >
                <Icon size={14} />
                {group.category}
              </button>
            );
          })}
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid sm:grid-cols-2 gap-x-10 gap-y-6 p-8 rounded-2xl glass"
        >
          {skillGroups[activeTab].skills.map((skill, j) => (
            <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={j * 0.08} inView={inView} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
