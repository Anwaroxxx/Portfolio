import { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Github, Linkedin, Mail, MessageCircle, Terminal, Cpu, Bug } from "lucide-react";
import { aboutMe, profileImg } from "../data/portfolio";
import useTypewriter from "../hooks/useTypewriter";

const Hero = () => {
  // Glitch Typewriter for roles
  const roles = [aboutMe.role, "Linux Enthusiast", "UI/UX Hacker", "Problem Solver"];
  const currentRole = useTypewriter(roles, 80, 2500);

  // 3D Tilt Effect logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative pt-24 overflow-hidden px-4 sm:px-6 bg-[#010501]">
      {/* Background ambient glow blobs */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#00ff41]/5 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-[#00ff41]/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* ── Left Side: Identity ── */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 sm:space-y-8 text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full border border-[#00ff41]/20 bg-[#00ff41]/5 backdrop-blur-sm shadow-[0_0_15px_rgba(0,255,65,0.1)] mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff41] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00ff41]"></span>
            </span>
            <span className="font-mono text-[10px] text-[#00ff41] tracking-[2px] uppercase">System Online: v4.2.0-LTS</span>
          </div>

          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="font-mono text-5xl sm:text-7xl md:text-8xl font-black leading-[0.9] text-white group"
            >
              <span className="block text-[#e0ffe0] opacity-90 text-4xl sm:text-5xl mb-2 font-light italic">Hello, I'm</span>
              <span className="text-[#00ff41] drop-shadow-[0_0_30px_rgba(0,255,65,0.4)] relative inline-block">
                {aboutMe.name}
                <motion.span 
                  className="absolute -inset-1 bg-[#00ff41]/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{ opacity: [0, 0.2, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </span>
            </motion.h1>
            
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <div className="h-px w-8 bg-[#00ff41]/50 hidden sm:block" />
              <motion.h2
                className="font-mono text-xl sm:text-3xl text-[#4a9a4a] min-h-[1.5em] flex items-center"
              >
                <span className="text-[#00ff41] mr-2">&gt;</span>
                {currentRole}
                <span className="w-2 h-6 sm:w-3 sm:h-8 bg-[#00ff41] ml-1 animate-pulse" />
              </motion.h2>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-[#4a7a4a] text-sm sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 font-light"
          >
            {aboutMe.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-5 justify-center lg:justify-start pt-4"
          >
            <a href="#projects"
              className="group relative px-8 py-4 bg-[#00ff41] text-black font-mono font-black text-sm rounded overflow-hidden transition-all hover:scale-105 active:scale-95 hover:shadow-[0_0_40px_rgba(0,255,65,0.5)]">
              <span className="relative z-10 flex items-center gap-2">
                <Terminal size={18} /> env run ./EXPLORE
              </span>
              <div className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
            <a href="#contact"
              className="px-8 py-4 border-2 border-[#1a4a1a] text-[#4a9a4a] font-mono text-sm rounded hover:border-[#00ff41] hover:text-[#00ff41] hover:bg-[#00ff41]/10 transition-all shadow-[0_0_20px_rgba(0,255,65,0.05)] flex items-center gap-2 group">
              <span className="text-[#00ff41] opacity-40 group-hover:opacity-100 transition-opacity">$</span> cd /contact
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center gap-8 pt-8 border-t border-[#0a2a0a]/50 justify-center lg:justify-start"
          >
            {[
              { href: aboutMe.github,   icon: <Github size={22} />,        label: "Github" },
              { href: aboutMe.linkedin, icon: <Linkedin size={22} />,      label: "LinkedIn" },
              { href: `mailto:${aboutMe.email}`, icon: <Mail size={22} />, label: "Email" },
              { href: aboutMe.discord,  icon: <MessageCircle size={22} />, label: "Discord" },
            ].map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noreferrer"
                className="group relative text-[#2a562a] hover:text-[#00ff41] transition-all duration-300 transform hover:scale-125 focus:outline-none">
                {s.icon}
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[8px] font-mono opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-tighter">
                  {s.label}
                </span>
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Right Side: Digital HUD Profile ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative flex justify-center items-center order-first lg:order-last"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
        >
          {/* Orbital digital badge 1 */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-10 -left-10 w-24 h-24 border border-dashed border-[#00ff41]/20 rounded-full"
          />
          
          <motion.div
            style={{ translateZ: "50px" }}
            className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden border border-[#00ff41]/40 shadow-[0_0_60px_#00ff4115] bg-[#020802] group"
          >
            {/* HUD Scanline */}
            <div className="absolute inset-0 z-30 pointer-events-none overflow-hidden">
               <div className="scanline w-full h-[2px] bg-[#00ff41]/40 absolute top-0 animate-[scan_4s_linear_infinite]" />
            </div>

            <div className="absolute inset-0 bg-[#00ff41]/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
            
            <img src={profileImg} alt="Anwar Avatar"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-110" />
            
            {/* Vignette Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(1,5,1,0.8)_100%)] z-20 pointer-events-none" />
            
            {/* HUD Corner Accents */}
            <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#00ff41] z-30" />
            <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[#00ff41] z-30" />
            <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-[#00ff41] z-30" />
            <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[#00ff41] z-30" />

            {/* Bottom Status HUD */}
            <div className="absolute bottom-3 left-0 right-0 flex justify-around px-4 z-30 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="flex flex-col items-center">
                <Cpu size={12} className="text-[#00ff41] mb-1" />
                <span className="text-[8px] font-mono text-[#4a9a4a]">CPU_UTIL: 42%</span>
              </div>
              <div className="flex flex-col items-center">
                <Bug size={12} className="text-[#ff5f56] mb-1" />
                <span className="text-[8px] font-mono text-[#ff5f56]">BUGS_FOUND: 0</span>
              </div>
            </div>
          </motion.div>

          {/* Floating Badges with Parallax */}
          <motion.div
            style={{ translateZ: "80px" }}
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 right-0 bg-[#010801]/90 border border-[#00ff41]/30 p-2 sm:p-4 rounded-lg shadow-[0_0_20px_#00ff4110] font-mono text-[10px] hidden sm:block backdrop-blur-md"
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-[#ff5f56]" />
              <span className="text-[#4a7a4a]">COMPILING...</span>
            </div>
            <div className="text-[#00ff41] tracking-widest animate-pulse">passion.c → success</div>
          </motion.div>

          <motion.div
            style={{ translateZ: "60px" }}
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-6 left-0 bg-[#010801]/90 border border-[#4a9a4a]/30 p-2 sm:p-4 rounded-lg font-mono text-[10px] hidden sm:block  backdrop-blur-md"
          >
            <div className="flex items-center gap-2 mb-1 text-[#2a6a2a]">
               $ tail -f mindset.log
            </div>
            <div className="text-[#00ff41] overflow-hidden whitespace-nowrap border-r-2 border-[#00ff41] pr-1">
              100% focused on quality...
            </div>
          </motion.div>

          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex gap-12 text-[9px] font-mono text-[#0a2a0a] uppercase tracking-[3px] opacity-40 hidden md:flex">
             <div className="flex flex-col items-center">
               <span className="text-[#00ff41]">LATENCY</span>
               <span>1.2ms</span>
             </div>
             <div className="flex flex-col items-center">
               <span className="text-[#00ff41]">LOC</span>
               <span>~84K</span>
             </div>
             <div className="flex flex-col items-center">
               <span className="text-[#00ff41]">COFFEE</span>
               <span>CRITICAL_LOW</span>
             </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;