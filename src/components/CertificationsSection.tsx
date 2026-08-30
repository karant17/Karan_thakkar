import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, GraduationCap } from "lucide-react";

const certifications = [
  "SHRM Certified Professional (SHRM-CP)",
  "SAP SuccessFactors Certified",
  "Google Data Analytics Professional Certificate",
  "Power BI Data Analyst Associate",
];

const education = [
  {
    degree: "MBA — Human Resource Management",
    institution: "Top Business School",
    year: "2016",
  },
  {
    degree: "Bachelor of Commerce",
    institution: "University",
    year: "2014",
  },
];

const CertificationsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Award size={20} className="text-primary" />
              <h2 className="font-heading text-2xl font-bold">Certifications</h2>
            </div>
            <div className="space-y-3">
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border"
                >
                  <span className="shrink-0 w-2 h-2 rounded-full bg-primary" />
                  <span className="text-sm text-foreground">{cert}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap size={20} className="text-primary" />
              <h2 className="font-heading text-2xl font-bold">Education</h2>
            </div>
            <div className="space-y-3">
              {education.map((edu, i) => (
                <div key={i} className="p-4 rounded-xl bg-card border border-border">
                  <div className="font-medium text-foreground">{edu.degree}</div>
                  <div className="text-sm text-muted-foreground mt-1">{edu.institution} · {edu.year}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
