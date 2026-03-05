import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Send, Mail, Linkedin, Github, MessageCircle } from "lucide-react";
import { aboutMe } from "../data/portfolio";

const SERVICE_ID  = "service_099is6d";
const TEMPLATE_ID = "template_qwv615j";
const PUBLIC_KEY  = "HBQfKIu2pU7y6WM8x";

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      setStatus("sent");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const contactLinks = [
    { label: "Email",    value: aboutMe.email,              href: `mailto:${aboutMe.email}`, icon: <Mail size={18} /> },
    { label: "LinkedIn", value: "anwar-azarzou",            href: aboutMe.linkedin,          icon: <Linkedin size={18} /> },
    { label: "Discord",  value: "Find me on Discord",       href: aboutMe.discord,           icon: <MessageCircle size={18} /> },
    { label: "GitHub",   value: "github.com/Anwaroxxx",     href: aboutMe.github,            icon: <Github size={18} /> },
  ];

  return (
    <section id="contact" className="py-20 sm:py-24 bg-[#020802] relative border-t border-[#0a1a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-14 sm:gap-20">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div>
            <p className="font-mono text-[#00ff41] text-xs tracking-[4px] uppercase mb-3">// contact.sh</p>
            <h2 className="font-mono text-3xl sm:text-4xl font-black text-[#e0ffe0] mb-4">Let's Connect</h2>
            <p className="text-[#4a7a4a] text-sm sm:text-base leading-relaxed">
              Got a project, a collab idea, or just want to say hi? My DMs are open.
            </p>
          </div>

          <div className="space-y-3">
            {contactLinks.map((c) => (
              <motion.a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 bg-[#010801] border border-[#0a2a0a] hover:border-[#00ff41] hover:shadow-[0_0_16px_#00ff4110] p-4 rounded-xl transition-all group"
              >
                <div className="w-9 h-9 bg-[#010601] border border-[#0a2a0a] rounded-full flex items-center justify-center text-[#00ff41] flex-shrink-0 group-hover:shadow-[0_0_10px_#00ff4130] transition-all">
                  {c.icon}
                </div>
                <div className="min-w-0">
                  <p className="font-mono text-[10px] text-[#2a6a2a] tracking-widest uppercase">{c.label}</p>
                  <p className="font-mono text-xs sm:text-sm text-[#4a8a4a] group-hover:text-[#00ff41] transition-colors truncate">{c.value}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right — Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="bg-[#010801] border border-[#0a2a0a] p-6 sm:p-8 rounded-2xl space-y-6 shadow-2xl"
          >
            {/* Terminal header */}
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
              <span className="font-mono text-xs text-[#1a4a1a] ml-2">send-message.sh</span>
            </div>

            {/* Name */}
            <div>
              <label className="block font-mono text-xs text-[#2a6a2a] mb-2">$ name:</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="your_name"
                className="w-full bg-transparent border-b border-[#1a4a1a] focus:border-[#00ff41] py-2 text-[#00ff41] font-mono text-sm placeholder-[#1a3a1a] outline-none transition-colors"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block font-mono text-xs text-[#2a6a2a] mb-2">$ email:</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="you@example.com"
                className="w-full bg-transparent border-b border-[#1a4a1a] focus:border-[#00ff41] py-2 text-[#00ff41] font-mono text-sm placeholder-[#1a3a1a] outline-none transition-colors"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block font-mono text-xs text-[#2a6a2a] mb-2">$ message:</label>
              <textarea
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="your message here..."
                className="w-full bg-transparent border-b border-[#1a4a1a] focus:border-[#00ff41] py-2 text-[#00ff41] font-mono text-sm placeholder-[#1a3a1a] outline-none resize-none transition-colors"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className={`w-full py-4 rounded-xl font-mono font-black text-sm flex items-center justify-center gap-2 transition-all ${
                status === "sent"
                  ? "bg-[#00ff41] text-black border-transparent"
                  : status === "error"
                  ? "bg-transparent border border-red-500 text-red-500"
                  : status === "sending"
                  ? "bg-transparent border border-[#00ff41]/40 text-[#00ff41]/40 cursor-wait"
                  : "bg-transparent border border-[#00ff41] text-[#00ff41] hover:bg-[#00ff41] hover:text-black hover:scale-[1.02]"
              }`}
            >
              {status === "sent"    && "✓ Message Sent!"}
              {status === "error"   && "✗ Failed — try again"}
              {status === "sending" && "Sending..."}
              {status === "idle"    && (<>./send-message.sh <Send size={15} /></>)}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;