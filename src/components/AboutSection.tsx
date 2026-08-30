import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, TrendingUp, Lightbulb } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm text-primary font-medium uppercase tracking-wider">About</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-6">
            Where HR expertise meets technology
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-5 text-muted-foreground leading-relaxed"
          >
            <p>
              I'm Karan Thakkar — an HR professional turned tech builder. Over the past 8+ years, I've worked across recruitment, people operations, and HR technology, developing a unique ability to see both the human and systems side of organizations.
            </p>
            <p>
              Today, I help companies modernize their HR infrastructure — from implementing HRIS platforms and automating repetitive workflows, to building dashboards that turn people data into strategic decisions.
            </p>
            <p>
              Whether you're a startup building your first HR stack or an enterprise optimizing existing systems, I bring the rare combination of domain knowledge and technical execution that gets results fast.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid gap-4"
          >
            {[
              { icon: Target, title: "Outcome-Driven", desc: "Every project is measured by business impact — time saved, costs reduced, decisions improved." },
              { icon: TrendingUp, title: "Scalable Solutions", desc: "I build systems designed to grow with your organization, not against it." },
              { icon: Lightbulb, title: "Bridge the Gap", desc: "I translate between HR teams and engineering, ensuring technology actually solves real problems." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-xl bg-card border border-border">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <item.icon size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
