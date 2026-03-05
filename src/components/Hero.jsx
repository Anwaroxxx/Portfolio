import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { aboutMe, profileImg } from "../data/portfolio";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative pt-24 overflow-hidden px-4 sm:px-6">

      {/* Radial glow blobs */}
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-[#00ff41]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#00ff41]/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">

        {/* ── Left ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 sm:space-y-8 text-center lg:text-left"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="font-mono text-[#00ff41] text-xs sm:text-sm tracking-[4px] uppercase"
          >
            root@portfolio:~$
          </motion.p>

          <div className="space-y-2">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="font-mono text-5xl sm:text-6xl md:text-7xl font-black leading-none"
            >
              <span className="text-[#e0ffe0]">I'm </span>
              <span className="text-[#00ff41]" style={{ textShadow: "0 0 40px #00ff4150" }}>
                {aboutMe.name}
              </span>
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="font-mono text-lg sm:text-2xl text-[#2a6a2a] font-normal"
            >
              &gt; {aboutMe.role}_
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-[#4a7a4a] text-sm sm:text-base leading-relaxed max-w-md mx-auto lg:mx-0"
          >
            {aboutMe.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <a href="#projects"
              className="px-6 sm:px-8 py-3 bg-[#00ff41] text-black font-mono font-black text-sm rounded hover:shadow-[0_0_24px_#00ff4170] hover:scale-105 transition-all">
              ./view-work →
            </a>
            <a href="#contact"
              className="px-6 sm:px-8 py-3 border border-[#1a4a1a] text-[#4a9a4a] font-mono text-sm rounded hover:border-[#00ff41] hover:text-[#00ff41] hover:scale-105 transition-all">
              ./contact-me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex items-center gap-6 pt-4 border-t border-[#0a2a0a] justify-center lg:justify-start"
          >
            {[
              { href: aboutMe.github,   icon: <Github size={20} />,        hover: "hover:text-white"      },
              { href: aboutMe.linkedin, icon: <Linkedin size={20} />,      hover: "hover:text-[#0077B5]"  },
              { href: `mailto:${aboutMe.email}`, icon: <Mail size={20} />, hover: "hover:text-[#00ff41]"  },
              { href: aboutMe.discord,  icon: <MessageCircle size={20} />, hover: "hover:text-[#5865F2]"  },
            ].map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noreferrer"
                className={`text-[#2a5a2a] ${s.hover} transition-colors duration-200 hover:scale-110 transform`}>
                {s.icon}
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Right — Profile ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="relative flex justify-center items-center order-first lg:order-last"
        >
          <div className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-[#00ff41]/5 blur-3xl" />

          <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-[#00ff41]/50 shadow-[0_0_60px_#00ff4120] group">
            <div className="absolute inset-0 bg-[#00ff41]/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
            <img src={profileImg} alt="Anwar"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110" />
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#010501] to-transparent z-20" />
          </div>

          {/* Floating badge top */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-4 sm:top-8 -right-2 sm:-right-6 bg-[#010801] border border-[#0a3a0a] px-3 sm:px-4 py-2 sm:py-3 rounded-xl shadow-xl font-mono text-xs sm:text-sm hidden sm:block"
          >
            <span className="text-[#00ff41]">$</span>{" "}
            <span className="text-[#4a7a4a]">gcc -O2 passion.c</span>{" "}
            <span className="text-[#27c93f]">✓</span>
          </motion.div>

          {/* Floating badge bottom */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-12 sm:bottom-16 -left-2 sm:-left-6 bg-[#010801] border border-[#0a3a0a] px-3 sm:px-4 py-2 sm:py-3 rounded-xl shadow-xl font-mono text-xs sm:text-sm hidden sm:block"
          >
            <span className="text-[#2a6a2a]">status:</span>{" "}
            <span className="text-[#00ff41]">open_to_work</span>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;