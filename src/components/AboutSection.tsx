import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Cpu, TrendingUp } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2 text-center">
            About <span className="text-primary neon-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            A Software Systems undergraduate driven by a mission to architect technology that scales — both in code and in commerce.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Cpu,
              title: "Systems Thinker",
              desc: "Passionate about system design, mobile development, and backend technologies. I approach problems with a systems-first mindset — focusing on architecture, scalability, and clean design before implementation."
            },
            {
              icon: TrendingUp,
              title: "Entrepreneurial Mindset",
              desc: "Running a small clothing brand while developing tech solutions. Gaining real-world experience in branding, customer needs, and digital operations alongside technical growth."
            },
            {
              icon: Target,
              title: "Long-Term Vision",
              desc: "Focused on becoming a Software Architect by mastering system design, scalability, and modern technologies. My goal is to build impactful systems that solve real-world problems and support long-term growth."
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/40 transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:neon-border transition-all">
                <card.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2 text-foreground">{card.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
