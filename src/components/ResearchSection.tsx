import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, Network } from "lucide-react";

const ResearchSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="research" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2 text-center">
            Research & <span className="text-primary neon-text">Academics</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12">
            Rigorous methodology meets technical implementation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              icon: BookOpen,
              title: "soon.........",
              //desc: "Designed and implemented relational database schemas with emphasis on normalization theory, complex SQL query optimization, and transaction management. Focused on ER modeling, functional dependency analysis, and performance benchmarking across various indexing strategies.",
              tags: ["SQL", "ER Modeling", "Normalization", "Query Optimization"],
            },
            {
              icon: Network,
              //title: "Computer Networking Lab",
              desc: "",
              tags: [],
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/40 transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:neon-border transition-all">
                <item.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2 text-foreground">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{item.desc}</p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 text-xs rounded bg-secondary text-primary border border-primary/20">
                    {tag}
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

export default ResearchSection;
