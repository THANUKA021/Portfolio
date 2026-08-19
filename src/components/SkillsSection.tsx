import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Globe, Database, Wrench } from "lucide-react";

const skillCategories = [
 {
  icon: Code,
  title: "Programming & Development",
  skills: [
    "C",
    "Python",
    "JavaScript",
    "PHP",
    "HTML/CSS",
    "React",
    "Node.js",
    "Express.js"
  ],
  accent: "#7C3AED",
},
{
  icon: Globe,
  title: "Software Engineering",
  skills: [
    "Full-Stack Development",
    "RESTful APIs",
    "Prisma ORM",
    "Object-Oriented Programming",
    "Agile/Scrum",
    "UML"
  ],
  accent: "#0EA5E9",
},
{
  icon: Database,
  title: "Databases",
  skills: [
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "SQLite",
    "Database Design",
  ],
  accent: "#10B981",
},
{
  icon: Wrench,
  title: "Tools & Platforms",
  skills: [
    "Git/GitHub",
    "Postman",
    "VS Code",
    "Figma",
    "Vercel"
  ],
  accent: "#F59E0B",
},
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2 text-center text-foreground">
            Technical <span className="text-primary">Skills</span>
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
              className="p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md dark:hover:shadow-none dark:hover:border-primary/30 transition-all group"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: cat.accent + "18" }}
              >
                <cat.icon size={20} style={{ color: cat.accent }} />
              </div>
              <h3 className="font-heading font-semibold mb-4 text-foreground">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-xs rounded-full font-medium bg-secondary text-secondary-foreground border border-border"
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
