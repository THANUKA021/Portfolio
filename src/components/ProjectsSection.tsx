import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, TrendingUp , GraduationCap, Package, Activity, MessageSquare, Shield, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    number: "01",
    category: "Web Application",
    icon: Brain,
    image: "/projects/lost-and-found.png", // put your image at public/projects/lost-and-found.png
    title: "Lost And Found Web Application",
    description:
      "Full-stack web application to facilitate the reporting and recovery of lost items with structured database management.",
    tags: ["HTML", "CSS", "JavaScript", "MySQL"],
    link: "https://github.com/THANUKA021/lost-found-hub",
    demo: null, // add your live demo URL here, e.g. "https://lost-found-hub.vercel.app"
    accent: "#e8e414",
  },
  {
    number: "02",
    category: "Web Application",
    icon: Package,
    image: "/projects/canteen-ordering-system.png",
    title: "Canteen Ordering System",
    description:
      "Multi-canteen food ordering platform with email-verified registration, PIN-based order collection, and role-based access control.",
    tags: ["PHP", "MySQL", "JavaScript", "Bootstrap", "AJAX"],
    link: "https://github.com/THANUKA021/canteen-ordering-system/tree/main/canteen-ordering-system",
    demo: null,
    accent: "#e8e414",
  },
  {
    number: "03",
    category: "Network Tool",
    icon: Activity,
    image: "/projects/netwatch.png",
    title: "NetWatch — Network Traffic Monitor",
    description:
      "Real-time network traffic monitoring dashboard with anomaly detection, dynamic visualizations, and automated reporting.",
    tags: ["Python", "Flask", "SQLite", "Plotly", "Scapy"],
    link: "https://github.com/THANUKA021/netwatch-dashboard",
    demo: null,
    accent: "#1569f1",
  },
  {
    number: "04",
    category: "LAN Tool",
    icon: MessageSquare,
    image: "/projects/lanchat.png",
    title: "LAN Chat & File Sharing",
    description:
      "Real-time LAN-based chat and file sharing platform with WebSocket communication, chat rooms, and analytics dashboard.",
    tags: ["Python", "Flask", "Socket.IO", "SQLite", "Bootstrap"],
    link: "hhttps://github.com/THANUKA021/lanchat",
    demo: null,
    accent: "#1569f1",
  },
  {
    number: "05",
    category: "Full-Stack Web App",
    icon: GraduationCap,
    image: "/projects/elearning.png",
    title: "E-Learning Platform — Assignment & Grading Module",
    description:
      "Full-stack LMS module for assignment submission and teacher grading, built end-to-end across frontend and backend as part of a 5-person Agile team.",
    tags: ["React", "Node.js", "Express", "PostgreSQL", "Prisma"],
    link: "https://github.com/dev-dojo-uok/e-learning-platform",
    demo: null,
    accent: "#e8e414",
  },
  {
    number: "06",
    category: "Automation Tool",
    icon: TrendingUp,
    image: "/projects/cse-tracker.png",
    title: "CSE Stock Market Trend Analyzer",
    description:
      "Automated Colombo Stock Exchange tracker with daily price pulls, moving-average trend signals, and a self-updating Excel dashboard.",
    tags: ["Python", "Requests", "openpyxl", "Excel"],
    link: "https://github.com/THANUKA021/CSE-Project",
    demo: null,
    accent: "#1569f1",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2 text-center text-foreground">
            Selected <span className="text-primary">Work</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12">
            Systems designed to solve real problems with elegant architecture.
          </p>
        </motion.div>

        {/* Card grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md dark:hover:shadow-none dark:hover:border-primary/30 transition-all duration-300"
            >
              {/* Colour header band */}
              <div
                className="relative h-36 flex items-center justify-center overflow-hidden"
                style={{ backgroundColor: project.accent + "18" }}
              >
                <span
                  className="absolute top-3 left-3 z-10 text-[11px] font-semibold px-2.5 py-1 rounded-full text-white"
                  style={{ backgroundColor: project.accent }}
                >
                  {project.category}
                </span>

                <span className="absolute top-3 right-3 z-10 text-sm font-bold text-white/80 drop-shadow">
                  {project.number}
                </span>

                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : (
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: project.accent + "22" }}
                  >
                    <project.icon size={28} style={{ color: project.accent }} />
                  </div>
                )}
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 p-6">
                <h3 className="font-heading font-bold text-foreground text-base mb-2 leading-snug">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-secondary text-secondary-foreground border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {(project.link || project.demo) && (
                  <div className="flex gap-2 mt-auto">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-sm font-semibold border border-border text-foreground hover:bg-secondary transition-colors"
                      >
                        <Github size={14} />
                        GitHub
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                      >
                        <ExternalLink size={14} />
                        View
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;