import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const interests = [
 { icon: "💻", label: "Software Development" },
{ icon: "🌐", label: "Full-Stack Development" },
{ icon: "⚙️", label: "Software Engineering" },
{ icon: "⚛️", label: "React Development" },
{ icon: "🔗", label: "REST API Development" },
{ icon: "🗄️", label: "Database Development" },
];
const education = [
  {
    status: "Present",
    statusColor: "#20b6a4",
    title: "Bachelor of Information and Communication Technology (BICT)",
    institution: "University of Kelaniya",
    detail: "Software Development Specialization",
  },
 
  {
    status: "2022",
    statusColor: "#7da1e8",
    title: "G.C.E. Advanced Level",
    institution: "Ruwanwella Rajasinghe Central College",
    detail: "",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2 text-center text-foreground">
            Who <span className="text-primary">I Am</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12">
            A passionate developer building real-world digital solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
          {/* Left — My Journey */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3 bg-card border border-border rounded-2xl p-8 shadow-sm"
          >
            <h3 className="text-xl font-heading font-bold text-foreground mb-6">
              My Journey
            </h3>

            <div className="space-y-4 text-muted-foreground leading-relaxed text-[15px]">
<p>
  I am Thanuka Sachith, a Bachelor of Information and Communication Technology (BICT)
  undergraduate at the University of Kelaniya, specializing in Software Systems, with a
  strong interest in software development and full-stack development.
</p>

<p>
  I am continuously developing my technical skills in modern web technologies, backend
  development, database systems, RESTful APIs, and software engineering practices. I enjoy
  building practical software solutions through academic and personal projects while
  continuously learning new technologies and improving my development skills.
</p>

<p>
  Currently, I am seeking an internship opportunity where I can apply my technical knowledge,
  gain real-world industry experience, collaborate with professional teams, and grow as a
  software engineering professional while contributing to meaningful projects.
</p>     </div>

            {/* Interest tags */}
            <div className="flex flex-wrap gap-2 mt-8">
              {interests.map((item) => (
                <span
                  key={item.label}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-background border border-border text-foreground shadow-sm"
                >
                  <span>{item.icon}</span>
                  {item.label}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right — Education Journey */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 bg-card border border-border rounded-2xl p-8 shadow-sm"
          >
            <h3 className="text-xl font-heading font-bold text-foreground mb-8">
              Education Journey
            </h3>

            <div className="relative">
              <div className="absolute left-[6px] top-3 bottom-3 w-px bg-border" />

              <div className="space-y-8">
                {education.map((edu, i) => (
                  <div key={i} className="flex gap-5 relative">
                    <div
                      className="w-3.5 h-3.5 rounded-full mt-1 flex-shrink-0 ring-2 ring-card"
                      style={{ backgroundColor: edu.statusColor }}
                    />
                    <div>
                      <span
                        className="text-xs font-semibold tracking-wide"
                        style={{ color: edu.statusColor }}
                      >
                        {edu.status}
                      </span>
                      <p className="font-heading font-bold text-foreground mt-0.5">
                        {edu.title}
                      </p>
                      <p className="text-sm text-muted-foreground mt-0.5">{edu.institution}</p>
                      {edu.detail && (
                        <p className="text-xs text-muted-foreground/70 mt-0.5">{edu.detail}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
