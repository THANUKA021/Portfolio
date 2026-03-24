import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ShoppingCart, Shirt, Tv, ShoppingBag } from "lucide-react";

const ventures = [
  {
    icon: ShoppingCart,
    title: "HMS Mart",
    role: "Co-Founder · Digital Electronics Store",
    description: "Co-founded a digital electronics store and managed online sales, product handling, and customer communication. Focused on providing a smooth ordering process and reliable service.",
    metrics: [
      "Handled customer orders through WhatsApp Business",
  "Managed inventory and product updates",
  "Coordinated order processing and delivery",
  "Maintained customer communication and support",
    ],
  },
  {
    icon: ShoppingBag,
    title: "3SP Fashion",
    role: "Co-Founder · Online Fashion Store",
    description: "Co-founded an online fashion store and managed daily operations, including product selection, sales, and customer service. Focused on building an online presence and providing a smooth shopping experience.",
    metrics: [
      "Handled online orders and customer inquiries",
  "Managed product listings and inventory",
  "Promoted products through social media",
  "Improved customer satisfaction and repeat sales",
    ],
  },
  {
    icon: Shirt,
    title: "LYCAN Menswear",
    role: "Founder · Mens clothing brand",
    description: "Built a men's clothing brand focused on modern streetwear and casual fashion. Managed sourcing of plain apparel, custom print design, branding, and direct-to-customer sales through social media platforms. Focused on creating trendy, affordable styles while building a strong brand identity.",
    metrics: [
      "Designed and sold custom printed T-shirts",
  "Managed product sourcing and quality control",
  "Grew brand presence through Facebook marketing",
  "Handled customer orders and direct sales process",
  "Developed brand identity and logo design",
    ],
  },
];

const VenturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="ventures" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2 text-center">
            Digital <span className="text-primary neon-text">Ventures</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12">
            Where systems thinking meets business execution.
          </p>
        </motion.div>

        <div className="space-y-6">
          {ventures.map((venture, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="p-6 md:p-8 rounded-xl bg-card border border-border hover:border-primary/40 transition-all group"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:neon-border transition-all">
                  <venture.icon className="text-primary" size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading font-semibold text-xl text-foreground">{venture.title}</h3>
                  <p className="text-primary text-sm mb-3">{venture.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{venture.description}</p>
                  <ul className="grid sm:grid-cols-3 gap-2">
                    {venture.metrics.map((m, j) => (
                      <li key={j} className="text-xs text-muted-foreground flex items-start gap-2 bg-secondary/50 rounded-lg px-3 py-2">
                        <span className="text-primary mt-0.5">▹</span> {m}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VenturesSection;
