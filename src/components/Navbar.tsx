import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Ventures",
  "Research",
  "Contact",
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => ({
        name: link,
        el: document.getElementById(link.toLowerCase()),
      }));

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.el) {
          const rect = section.el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(section.name);
            return;
          }
        }
      }
      setActiveSection("Home");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) {
      const yOffset = -80; // prevents section hiding under navbar
      const y =
        el.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999] bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">

        {/* Logo */}
        <span className="text-xl font-heading font-bold">
          <span className="text-primary neon-text">Port</span>folio
        </span>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className={`text-sm transition-colors ${
                activeSection === link
                  ? "text-primary font-semibold neon-text"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {link}
            </button>
          ))}
        </div>

        {/* Desktop Download Button */}
        <a
          href="/Thanuka.pdf"
          download="Thanuka_CV.pdf"
          className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg bg-[#FF0087] text-white text-sm font-medium hover:opacity-90 transition"
        >
          <Download size={14} />
          Download CV
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-foreground relative z-[10000]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-card border-b border-border relative z-[9999]"
          >
            <div className="flex flex-col gap-3 p-5">

              {navLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollTo(link)}
                  className={`text-left py-2 text-base transition-colors ${
                    activeSection === link
                      ? "text-primary font-semibold"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {link}
                </button>
              ))}

              

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;