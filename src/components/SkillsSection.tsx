import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Globe, Database, Wrench } from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Programming",
    skills: ["C", "Java", "Python", "JavaScript", "PHP"],
  },
  {
    icon: Globe,
    title: "Web & Mobile",
    skills: ["HTML5", "CSS3", "React", "Flutter"],
  },
  {
    icon: Database,
    title: "Database",
    skills: ["MySQL", "MongoDB"],
  },
  {
    icon: Wrench,
    title: "Tools & Platforms",
    skills: ["Git/GitHub", "Linux", "Android Studio", "VS Code"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2 text-center">
            Technical <span className="text-primary neon-text">Skills</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12">
            The tech stack powering my systems and ventures.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/40 transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <cat.icon className="text-primary" size={20} />
              </div>
              <h3 className="font-heading font-semibold mb-4 text-foreground">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs rounded-full bg-secondary text-primary border border-primary/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
