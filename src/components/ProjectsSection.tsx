import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Package, Shield, ExternalLink } from "lucide-react";

const projects = [
  {
    icon: Brain,
    title: "Lost And Found Web Application",
    tags: ["HTML", "CSS", "JavaScript", "MySQL"],
    link:"https://github.com/THANUKA021/lost-found-hub",
    description: "Developed a full-stack web application to facilitate the reporting and recovery of lost items. The system enables users to post, search, and manage lost-and-found listings using a structured database.",
    highlights: [
     "Designed responsive user interfaces using HTML, CSS, and JavaScript",
    "Implemented database management using MySQL to store and retrieve item records",
    "Developed features for posting, searching, and filtering lost and found items",
    "Integrated front-end with database for dynamic data handling and real-time updates",
    ],
  },
  {
    icon: Package,
    title: "Canteen Ordering System",
    tags: ["PHP", "MySQL", "JavaScript", "Apache","Bootstrap", "AJAX"],
    description: "Developed a comprehensive multi-canteen food ordering platform with email-verified student registration, PIN-based order collection system (0001-9999 daily reset), and culturally-adapted rice & curry customization interface. Implemented role-based access control and automated order management workflows.",
    highlights: [
       "Built secure email domain-restricted registration (@stu.kln.ac.lk) with verification system",
    "Implemented automated daily PIN reset and uncollected order migration using cron jobs",
    "Designed flexible rice & curry ordering with multi-protein selection and quantity customization",
    "Created real-time order queue management with staff fulfillment tracking and analytics dashboard",
    ],
  },
  {
    icon: Shield,
    title: "Soon..",
    tags: [],
    description: "",
    highlights: [
      
    ],
  },
];

const ProjectsSection = () => {

  const ref = useRef(null);

  const isInView = useInView(ref, { once: true, margin: "-100px" });



  return (

    <section id="projects" className="section-padding" ref={ref}>

      <div className="container mx-auto">

        <motion.div

          initial={{ opacity: 0, y: 30 }}

          animate={isInView ? { opacity: 1, y: 0 } : {}}

          transition={{ duration: 0.6 }}

        >

          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2 text-center">

            Featured <span className="text-primary neon-text">Projects</span>

          </h2>

          <p className="text-muted-foreground text-center mb-12">

            Systems designed to solve real problems with elegant architecture.

          </p>

        </motion.div>



        <div className="grid md:grid-cols-3 gap-6">

          {projects.map((project, i) => (

            <motion.div

              key={i}

              initial={{ opacity: 0, y: 30 }}

              animate={isInView ? { opacity: 1, y: 0 } : {}}

              transition={{ duration: 0.6, delay: i * 0.15 }}

              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/40 transition-all flex flex-col"

            >

              <div className="flex items-center justify-between mb-4">

                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:neon-border transition-all">

                  <project.icon className="text-primary" size={24} />

                </div>

                <a href={project.link} target="_blank" rel="noopener noreferrer">

  <ExternalLink className="text-muted-foreground group-hover:text-primary transition-colors" size={18} />

</a>

              </div>



              <h3 className="font-heading font-semibold text-lg mb-2 text-foreground">{project.title}</h3>



              <div className="flex flex-wrap gap-2 mb-4">

                {project.tags.map((tag) => (

                  <span key={tag} className="px-2 py-0.5 text-xs rounded bg-secondary text-primary border border-primary/20">

                    {tag}

                  </span>

                ))}

              </div>



              <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{project.description}</p>



              <ul className="space-y-1">

                {project.highlights.map((h, j) => (

                  <li key={j} className="text-xs text-muted-foreground flex items-start gap-2">

                    <span className="text-primary mt-1">▹</span> {h}

                  </li>

                ))}

              </ul>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  );

};



export default ProjectsSection;


