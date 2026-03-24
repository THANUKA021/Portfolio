import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import profileImage from "@/assets/profile.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center pt-24 md:pt-28 pb-16 overflow-hidden"
    >
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center md:justify-start order-1"
          >
            <div className="relative w-[18rem] h-[18rem] sm:w-[22rem] sm:h-[22rem] md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] flex items-center justify-center">

              {/* Outer Glow */}
              <div
                className="absolute w-[85%] h-[85%] rounded-full blur-[100px] opacity-60"
                style={{ background: "hsl(var(--primary))" }}
              />

              {/* Blob */}
              <div
                className="absolute w-[70%] h-[70%]"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary) / 0.7) 100%)",
                  borderRadius:
                    "60% 40% 55% 45% / 45% 60% 40% 55%",
                  boxShadow:
                    "0 0 60px hsl(var(--primary) / 0.6)",
                }}
              />

              {/* Orbit Ring */}
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
                  stroke="hsl(var(--primary) / 0.4)"
                  strokeWidth="1.2"
                />
              </svg>

              {/* Profile Image */}
              <div
                className="relative z-10 w-[75%] h-[75%] rounded-full overflow-hidden"
                style={{
                  boxShadow: "0 0 40px hsl(var(--primary) / 0.4)",
                }}
              >
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover scale-110"
                />
              </div>
            </div>
          </motion.div>

          {/* RIGHT - Content */}
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
                A Software Systems Undergraduate
              </span>
              <span className="text-muted-foreground">  </span>
              <span className="font-semibold bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
                 , Web and Mobile App Developer & Entrepreneur
              </span>
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg mx-auto md:mx-0">
              Building real-world digital solutions through mobile applications and scalable systems. Founder of a growing clothing brand and currently developing an AI-powered platform to reduce food waste and support sustainable communities.
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
                  className="w-10 h-10 rounded-md border border-primary/50 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">

              <button
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="w-full sm:w-auto px-8 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all border border-primary"
              >
                View Projects
              </button>

              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="w-full sm:w-auto px-8 py-3 rounded-md border border-primary/50 text-primary hover:bg-primary/10 transition-all"
              >
                Contact Me
              </button>

              {/* Mobile Only Download CV */}
              <a
                href="/Thanuka.pdf"
                download="Thanuka_CV.pdf"
                className="md:hidden w-full px-8 py-3 rounded-md bg-[#FF0087] text-white font-medium flex items-center justify-center gap-2 hover:opacity-90 transition"
              >
                <Download size={18} />
                Download CV
              </a>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;