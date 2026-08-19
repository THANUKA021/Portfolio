import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import profileImage from "@/assets/profile.png";
import CvPreviewDialog from "@/components/CvPreviewDialog";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center pt-24 md:pt-28 pb-16 overflow-hidden bg-background"
    >
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Soft glow top-right */}
      <div
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-10 dark:opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT — Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center md:justify-start order-1"
          >
            <div className="relative w-[16rem] h-[16rem] sm:w-[20rem] sm:h-[20rem] md:w-[26rem] md:h-[26rem] lg:w-[30rem] lg:h-[30rem] flex items-center justify-center">

              {/* Soft glow */}
              <div
                className="absolute w-[82%] h-[82%] rounded-full blur-[80px] opacity-30 dark:opacity-60"
                style={{ background: "hsl(var(--primary))" }}
              />

              {/* Blob shape */}
              <div
                className="absolute w-[68%] h-[68%]"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(var(--primary) / 0.85) 0%, hsl(var(--primary) / 0.55) 100%)",
                  borderRadius: "60% 40% 55% 45% / 45% 60% 40% 55%",
                  boxShadow: "0 0 40px hsl(var(--primary) / 0.3)",
                }}
              />

              {/* Orbit ring */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 500 500"
                style={{ transform: "rotate(-25deg)" }}
              >
                <ellipse
                  cx="250"
                  cy="250"
                  rx="235"
                  ry="205"
                  fill="none"
                  stroke="hsl(var(--primary) / 0.25)"
                  strokeWidth="1.2"
                  className="dark:stroke-[hsl(var(--primary)/0.5)]"
                />
              </svg>

              {/* Profile Image */}
              <div
                className="relative z-10 w-[74%] h-[74%] rounded-full overflow-hidden"
                style={{ boxShadow: "0 0 30px hsl(var(--primary) / 0.25)" }}
              >
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover scale-110"
                />
              </div>
            </div>
          </motion.div>

          {/* RIGHT — Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 text-center md:text-left"
          >
            <p className="text-primary font-medium mb-2 text-sm tracking-widest uppercase">
              Hello, I'm
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-heading font-bold mb-3 text-foreground">
              Thanuka Sachith
            </h1>

            <p className="text-lg md:text-xl mb-5">
              <span className="text-muted-foreground">And I'm  </span>
              <span className="text-primary font-semibold">
                Software Systems Undergraduate & Full-Stack Developer
              </span>
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg mx-auto md:mx-0">
              Software Systems undergraduate with hands-on experience in full-stack web development. Interested in building practical software solutions, solving real-world problems, and growing my skills through industry experience.
            </p>

            {/* Social Links */}
            <div className="flex justify-center md:justify-start gap-3 mb-8">
              {[
                { icon: Github, href: "https://github.com/THANUKA021" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/thanuka-sachith-33230b305/" },
                { icon: Mail, href: "mailto:thanukasachith1@gmail.com" },
                { icon: FaWhatsapp, href: "https://wa.me/94767053945" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-md border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button
                onClick={() =>
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                }
                className="w-full sm:w-auto px-8 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all"
              >
                View Projects
              </button>

              <button
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }
                className="w-full sm:w-auto px-8 py-3 rounded-md border border-primary/40 text-primary hover:bg-primary/5 transition-all"
              >
                Contact Me
              </button>

              {/* Mobile Only Download CV */}
              <CvPreviewDialog
                className="md:hidden w-full px-8 py-3 rounded-md bg-[#FF0087] text-white font-medium flex items-center justify-center gap-2 hover:opacity-90 transition"
                iconSize={18}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
