import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Linkedin, Github, Send, Loader2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

if (EMAILJS_PUBLIC_KEY) {
  emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
}

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [form, setForm] = useState({
    name:    "",
    email:   "",
    title:   "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    // #region agent log
    fetch('http://127.0.0.1:7315/ingest/b1aed2cf-5882-4d96-9782-d7a367c3cd1f',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'c031ea'},body:JSON.stringify({sessionId:'c031ea',location:'ContactSection.tsx:handleSubmit:entry',message:'handleSubmit called',data:{hasName:!!form.name,hasEmail:!!form.email,hasMessage:!!form.message,hasTitle:!!form.title},timestamp:Date.now(),hypothesisId:'D'})}).catch(()=>{});
    // #endregion

    if (!form.name || !form.email || !form.message) {
      // #region agent log
      fetch('http://127.0.0.1:7315/ingest/b1aed2cf-5882-4d96-9782-d7a367c3cd1f',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'c031ea'},body:JSON.stringify({sessionId:'c031ea',location:'ContactSection.tsx:handleSubmit:validation',message:'validation failed',data:{hasName:!!form.name,hasEmail:!!form.email,hasMessage:!!form.message},timestamp:Date.now(),hypothesisId:'D'})}).catch(()=>{});
      // #endregion
      setErrorMsg("Please fill in your name, email, and message.");
      setStatus("error");
      return;
    }

    // #region agent log
    fetch('http://127.0.0.1:7315/ingest/b1aed2cf-5882-4d96-9782-d7a367c3cd1f',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'c031ea'},body:JSON.stringify({sessionId:'c031ea',location:'ContactSection.tsx:handleSubmit:env',message:'EmailJS env check',data:{hasServiceId:!!EMAILJS_SERVICE_ID,hasTemplateId:!!EMAILJS_TEMPLATE_ID,hasPublicKey:!!EMAILJS_PUBLIC_KEY,serviceIdLen:EMAILJS_SERVICE_ID?.length??0,templateIdLen:EMAILJS_TEMPLATE_ID?.length??0,publicKeyLen:EMAILJS_PUBLIC_KEY?.length??0},timestamp:Date.now(),hypothesisId:'A'})}).catch(()=>{});
    // #endregion

    setStatus("sending");
    setErrorMsg("");

    try {
      const templateParams = {
        name:    form.name,
        email:   form.email,
        title:   form.title || "(No subject)",
        message: form.message,
        time:    new Date().toLocaleString("en-US", {
                   weekday: "short",
                   year:    "numeric",
                   month:   "short",
                   day:     "numeric",
                   hour:    "2-digit",
                   minute:  "2-digit",
                 }),
      };
      // #region agent log
      fetch('http://127.0.0.1:7315/ingest/b1aed2cf-5882-4d96-9782-d7a367c3cd1f',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'c031ea'},body:JSON.stringify({sessionId:'c031ea',location:'ContactSection.tsx:handleSubmit:beforeSend',message:'calling emailjs.send',data:{paramKeys:Object.keys(templateParams)},timestamp:Date.now(),hypothesisId:'C',runId:'post-fix'})}).catch(()=>{});
      // #endregion

      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      // #region agent log
      fetch('http://127.0.0.1:7315/ingest/b1aed2cf-5882-4d96-9782-d7a367c3cd1f',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'c031ea'},body:JSON.stringify({sessionId:'c031ea',location:'ContactSection.tsx:handleSubmit:success',message:'emailjs.send succeeded',data:{status:result?.status,text:result?.text},timestamp:Date.now(),hypothesisId:'B',runId:'post-fix'})}).catch(()=>{});
      // #endregion

      setStatus("success");
      setForm({ name: "", email: "", title: "", message: "" });
    } catch (err: unknown) {
      const e = err as { status?: number; text?: string; message?: string };
      // #region agent log
      fetch('http://127.0.0.1:7315/ingest/b1aed2cf-5882-4d96-9782-d7a367c3cd1f',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'c031ea'},body:JSON.stringify({sessionId:'c031ea',location:'ContactSection.tsx:handleSubmit:error',message:'emailjs.send failed',data:{status:e?.status,text:e?.text,errorMessage:e?.message,errType:typeof err},timestamp:Date.now(),hypothesisId:'B',runId:'post-fix'})}).catch(()=>{});
      // #endregion
      setErrorMsg("Something went wrong. Please try again or email me directly.");
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2 text-foreground">
            Let's <span className="text-primary neon-text">Connect</span>
          </h2>
          <p className="text-muted-foreground mb-10">
            Interested in QA Engineering, System Analysis, and collaborative
            technology projects that create real-world impact.
          </p>

          {/* ── Contact Cards ── */}
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { icon: Mail,       label: "Email",    value: "thanukasachith1@gmail.com",       href: "mailto:thanukasachith1@gmail.com" },
              { icon: Linkedin,   label: "LinkedIn", value: "linkedin.com/in/thanuka-sachith", href: "https://www.linkedin.com/in/thanuka-sachith-33230b305/" },
              { icon: Github,     label: "GitHub",   value: "github.com/THANUKA021",           href: "https://github.com/THANUKA021" },
              { icon: FaWhatsapp, label: "WhatsApp", value: "+94 76 705 3945",                 href: "https://wa.me/94767053945" },
            ].map(({ icon: Icon, label, value, href }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-all group text-left"
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

          {/* ── Divider ── */}
          <div className="flex items-center gap-3 mb-8">
            <div className="flex-1 h-px bg-border" />
            <span className="text-xs text-muted-foreground">or send a message directly</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* ── Contact Form ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="bg-card border border-border rounded-xl p-6 text-left mb-6"
          >
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div className="flex flex-col gap-1">
                <label className="text-xs text-muted-foreground">Your name *</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="bg-background border border-border rounded-lg px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs text-muted-foreground">Your email *</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="bg-background border border-border rounded-lg px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1 mb-4">
              <label className="text-xs text-muted-foreground">Subject</label>
              <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Project collaboration, job opportunity…"
                className="bg-background border border-border rounded-lg px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1 mb-5">
              <label className="text-xs text-muted-foreground">Message *</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Hi Thanuka, I'd love to discuss…"
                rows={4}
                className="bg-background border border-border rounded-lg px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors resize-none"
              />
            </div>

            <div className="flex justify-center">
              <button
                onClick={handleSubmit}
                disabled={status === "sending"}
                className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all neon-border disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending" ? (
                  <><Loader2 size={16} className="animate-spin" /> Sending…</>
                ) : (
                  <><Send size={16} /> Send a Message</>
                )}
              </button>
            </div>

            {status === "success" && (
              <p className="mt-3 text-sm text-green-500 dark:text-green-400">
                ✓ Message sent! I'll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="mt-3 text-sm text-red-500 dark:text-red-400">{errorMsg}</p>
            )}
          </motion.div>
        </motion.div>
      </div>

      {/* ── Footer ── */}
      <div className="container mx-auto mt-20 pt-8 border-t border-border text-center">
        <p className="text-sm text-muted-foreground">
          © 2026 Thanuka Sachith. Designed & built with systems-first thinking.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
