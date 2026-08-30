import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, Globe } from "lucide-react";

const education = [
  { degree: "B.Sc. in Computer Science", institution: "University of Mumbai" },
  { degree: "Bachelor of Computer Applications (BCA)", institution: "YCMOU" },
];

const certifications = [
  "Six Sigma Green Belt",
  "Android Development Certification",
  "VR Application Development Workshop",
  "CMS Certified Networking Specialist",
  "Computer Networking (Integrated)",
  "Certificate in Computer Applications",
];

const EducationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" ref={ref} className="section-padding relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="text-xs font-mono text-primary uppercase tracking-[0.2em]">// education</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3">
            Education & <span className="text-gradient">Certifications</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="space-y-4"
          >
            <h3 className="font-heading font-semibold text-foreground flex items-center gap-2 mb-4">
              <GraduationCap size={18} className="text-primary" /> Degrees
            </h3>
            {education.map((e, i) => (
              <div key={i} className="p-5 rounded-2xl glass">
                <div className="font-medium text-foreground">{e.degree}</div>
                <div className="text-sm text-muted-foreground mt-1">{e.institution}</div>
              </div>
            ))}

            <h3 className="font-heading font-semibold text-foreground flex items-center gap-2 mt-8 mb-4">
              <Globe size={18} className="text-primary" /> Languages
            </h3>
            <div className="flex flex-wrap gap-2">
              {["English (Professional)", "Hindi", "Marathi"].map((lang) => (
                <span key={lang} className="text-xs font-mono px-3 py-1.5 rounded-full glass-subtle text-foreground">
                  {lang}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h3 className="font-heading font-semibold text-foreground flex items-center gap-2 mb-4">
              <Award size={18} className="text-primary" /> Certifications
            </h3>
            <div className="space-y-2.5">
              {certifications.map((c, i) => (
                <div key={i} className="p-4 rounded-xl glass flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span className="text-sm text-foreground">{c}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
