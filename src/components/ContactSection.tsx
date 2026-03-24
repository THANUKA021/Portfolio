import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2">
            Let's <span className="text-primary neon-text">Connect</span>
          </h2>
          <p className="text-muted-foreground mb-10">
            Open to collaborations, freelance opportunities, and building impactful systems together.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {[
              { icon: Mail, label: "Email", value: "thanukasachith1@gmail.com", href: "mailto:thanukasachith1@gmail.com" },
              { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/thanuka-sachith", href: "https://www.linkedin.com/in/thanuka-sachith-33230b305/" },
              { icon: Github, label: "GitHub", value: "github.com/THANUKA021", href: "https://github.com/THANUKA021" },
              { icon: FaWhatsapp, label: "WhatsApp", value: "+94 76 705 3945", href: "https://wa.me/94767053945" },
            ].map(({ icon: Icon, label, value, href }, i) => (
              <motion.a
                key={i}
                href={href}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/40 transition-all group text-left"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:neon-border transition-all">
                  <Icon className="text-primary" size={18} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{label}</p>
                  <p className="text-sm text-foreground">{value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all neon-border"
          >
            <Send size={16} /> Send a Message
          </motion.button>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="container mx-auto mt-20 pt-8 border-t border-border text-center">
        <p className="text-sm text-muted-foreground">
          © 2026 [Thanuka Sachith]. Designed & built with systems-first thinking.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
