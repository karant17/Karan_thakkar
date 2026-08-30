import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Briefcase } from "lucide-react";

const experiences = [
  {
    period: "Aug 2022 — Present",
    startDate: "Aug 2022",
    role: "HR Technology Specialist & HR Business Partner",
    company: "Raymond Lifestyle Ltd. · Mumbai",
    highlights: [
      "Led full operational management of the enterprise HRIS — strategic reimplementation, module configuration, and continuous platform enhancements.",
      "Configured and maintained core HR modules: Recruitment, Onboarding, PMS, Attendance, Learning, and Exit — aligned with evolving business needs.",
      "Owned HRIS access governance, role-based permissions, and data accuracy across the platform.",
      "Partnered with IT to architect HR system integrations, automating new hire identity provisioning and real-time data sync.",
      "Built comprehensive HR dashboards and engagement survey tools for leadership visibility into workforce health.",
      "Designed a custom multi-sheet consolidation tool with Google Apps Script for a single live operational view.",
      "Co-led HR policy revamp — auditing and rewriting frameworks to meet legal and organisational standards.",
      "Embedded HR partner for project teams: workforce planning, hiring pipelines, contractor onboarding, and performance reviews.",
    ],
  },
  {
    period: "Dec 2021 — Aug 2022",
    startDate: "Dec 2021",
    role: "Assistant Manager — Learning and Development",
    company: "Raymond Ltd. · Mumbai",
    highlights: [
      "Designed and deployed digital learning journeys and onboarding programmes that improved new-hire time-to-productivity.",
      "Led LMS operations — keeping content accessible, current, and aligned with brand values.",
      "Created the EMBARK onboarding programme for store owners, bridging brand identity with day-one operational readiness.",
      "Developed leadership-value infographics and retail e-learning modules.",
    ],
  },
  {
    period: "Mar 2021 — Nov 2021",
    startDate: "Mar 2021",
    role: "Senior eLearning Executive",
    company: "Centre for Investment Education and Learning · Mumbai",
    highlights: [
      "Built and tested SCORM-compliant digital learning content for multi-platform LMS deployment.",
      "Managed external vendors for video and course production, ensuring quality and timely delivery.",
      "Provided LMS administration: configuration, troubleshooting, and content publishing.",
      "Managed backend WordPress operations and supported client-facing digital proposals.",
    ],
  },
  {
    period: "Sep 2020 — Mar 2021",
    startDate: "Sep 2020",
    role: "Senior Interactive Designer",
    company: "LIDO Learning · Mumbai",
    highlights: [
      "Transformed academic content into interactive digital learning experiences optimised for student engagement.",
      "Conducted end-to-end QA testing across devices for UI consistency.",
      "Mentored internal teams on instructional design and interactive content delivery.",
    ],
  },
  {
    period: "Sep 2019 — Aug 2020",
    startDate: "Sep 2019",
    role: "Interactive Designer",
    company: "LIDO Learning · Mumbai",
    highlights: [
      "Designed interactive modules for K-12 academic and corporate sales training programmes.",
      "Supported platform updates and tested new features for accuracy and usability.",
    ],
  },
  {
    period: "May 2016 — Sep 2020",
    startDate: "May 2016",
    role: "Web Developer & Tester",
    company: "Freelance",
    highlights: [
      "Designed and deployed responsive websites covering UX, SEO, and secure hosting.",
      "Performed rigorous QA across web and mobile, resolving defects pre go-live.",
      "Executed digital marketing campaigns improving client visibility and engagement.",
    ],
  },
  {
    period: "May 2016 — Jun 2019",
    startDate: "May 2016",
    role: "Development & Technical Editor",
    company: "Packt Publishing · Mumbai",
    highlights: [
      "Validated technical accuracy of developer publications by reviewing and executing code samples.",
      "Coached authors on technical writing standards for clarity and correctness.",
      "Managed end-to-end timelines for multiple simultaneous publishing projects.",
    ],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeIndex, setActiveIndex] = useState(0);

  const chronologicalExperiences = [...experiences].reverse();
  const getChronologicalIndex = (originalIndex: number) => experiences.length - 1 - originalIndex;
  const getOriginalIndex = (chronologicalIndex: number) => experiences.length - 1 - chronologicalIndex;

  const currentExp = experiences[activeIndex];
  const [companyName, location] = currentExp.company.split(" · ");

  const nextExperience = () => {
    setActiveIndex((prev) => (prev === 0 ? experiences.length - 1 : prev - 1));
  };

  const prevExperience = () => {
    setActiveIndex((prev) => (prev === experiences.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="experience" ref={ref} className="section-padding relative">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading text-3xl md:text-5xl font-bold flex items-center gap-3">
              <Briefcase className="text-primary mt-1" size={32} />
              Experiences
            </h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-4 text-foreground/80 font-mono text-sm"
          >
            <button 
              onClick={prevExperience} 
              className="flex items-center gap-1 hover:text-primary transition-colors cursor-pointer px-3 py-1.5 rounded-md glass-subtle"
            >
              <ChevronLeft size={16} /> Previous
            </button>
            <span className="text-muted-foreground/50">|</span>
            <button 
              onClick={nextExperience} 
              className="flex items-center gap-1 hover:text-primary transition-colors cursor-pointer px-3 py-1.5 rounded-md glass-subtle"
            >
              Next <ChevronRight size={16} />
            </button>
          </motion.div>
        </div>

        {/* Content Area */}
        <div className="glass rounded-3xl p-6 md:p-10 min-h-[400px] flex flex-col relative overflow-hidden shadow-2xl">
          {/* Subtle background element */}
          <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
              transition={{ duration: 0.3 }}
              className="flex-1 flex flex-col relative z-10"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-border/50 pb-6 mb-6">
                <div>
                  <h3 className="text-3xl md:text-4xl font-heading font-bold text-gradient">{companyName}</h3>
                  <div className="text-xl mt-1 text-foreground/90 font-medium">{currentExp.role}</div>
                </div>
                <div className="text-left md:text-right">
                  <div className="text-primary font-mono bg-primary/10 inline-block px-3 py-1 rounded-full text-sm mb-2">{currentExp.period}</div>
                  {location && <div className="text-muted-foreground text-sm">{location}</div>}
                </div>
              </div>

              <div className="flex-1">
                <ul className="space-y-4">
                  {currentExp.highlights.map((h, j) => (
                    <li key={j} className="text-base md:text-lg text-foreground/80 flex items-start gap-3 leading-relaxed">
                      <span className="shrink-0 w-2 h-2 rounded-full bg-primary mt-2.5 glow-primary" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Horizontal Timeline Scrubber */}
          <div className="mt-16 pt-8 relative z-10">
            <div className="relative h-1 bg-muted-foreground/20 rounded-full w-full">
              {/* Active track */}
              <div 
                className="absolute top-0 left-0 h-full bg-primary rounded-full transition-all duration-500 ease-out"
                style={{ width: `${(getChronologicalIndex(activeIndex) / (experiences.length - 1)) * 100}%` }}
              />
              
              {/* Nodes */}
              {chronologicalExperiences.map((exp, i) => {
                const isActive = getChronologicalIndex(activeIndex) === i;
                const isPassed = getChronologicalIndex(activeIndex) >= i;
                const origIndex = getOriginalIndex(i);
                
                return (
                  <div 
                    key={i}
                    onClick={() => setActiveIndex(origIndex)}
                    className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer group"
                    style={{ left: `${(i / (experiences.length - 1)) * 100}%` }}
                  >
                    <div className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${isActive ? 'bg-background border-primary scale-125 glow-primary' : isPassed ? 'bg-primary border-primary' : 'bg-background border-muted-foreground/40 group-hover:border-primary/60'}`} />
                    <span className={`absolute top-6 whitespace-nowrap text-[10px] md:text-xs font-mono transition-colors ${isActive ? 'text-primary font-bold' : 'text-muted-foreground group-hover:text-foreground/70'}`}>
                      {exp.startDate}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
