import { motion } from "framer-motion";
import { experience } from "../data/portfolio";

const Logo1337 = () => (
  <svg width="48" height="13" viewBox="0 0 76 20" fill="none">
    <path d="M2.8333 17.6623H5.92418V2.33766H2.31816V5.45455H0V1.49012e-07H8.75748V17.6623H11.8484V20H2.8333V17.6623Z" fill="#00ff41"/>
    <path d="M21.3785 17.6623H30.6512V10.9091H22.1513V8.57143H30.6512V2.33766H21.3785V0H33.4845V20H21.3785V17.6623Z" fill="#00ff41"/>
    <path d="M42.2419 17.6623H51.5146V10.9091H43.0147V8.57143H51.5146V2.33766H42.2419V0H54.3479V20H42.2419V17.6623Z" fill="#00ff41"/>
    <path d="M72.6355 2.33766H64.9084V7.27273H62.5902V0H75.2113V20H72.6355V2.33766Z" fill="#00ff41"/>
  </svg>
);

const Experience = () => {
  return (
    <section id="experience" className="py-20 sm:py-24 bg-[#010501] relative overflow-hidden">
        {/* Background depth lines */}
        <div className="absolute left-1/2 -top-24 w-px h-64 bg-gradient-to-b from-transparent via-[#00ff41]/10 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left mb-14 sm:mb-20 border-l-2 border-[#00ff41] pl-6"
        >
          <p className="font-mono text-[#00ff41] text-xs tracking-[4px] uppercase mb-3">$ journalctl -u career.service</p>
          <h2 className="font-mono text-3xl sm:text-4xl font-black text-[#e0ffe0] mb-4 uppercase">Career Timeline</h2>
          <p className="text-[#4a7a4a] text-sm sm:text-base italic opacity-60">Chronological execution of professional milestones and learning cycles...</p>
        </motion.div>

        <div className="space-y-4">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group"
            >
              <div className="flex bg-[#020a02]/40 border border-[#1a1a1a] hover:border-[#00ff41]/30 transition-all duration-300 rounded overflow-hidden">
                {/* Simulated timestamp like in dmesg */}
                <div className="hidden sm:flex flex-col items-center justify-center bg-[#010801] px-4 py-6 border-r border-[#1a1a1a] min-w-[140px]">
                    <span className="font-mono text-[10px] text-[#2a5a2a]">[ {exp.period.split("–")[0].trim().padStart(8, '0')} ]</span>
                </div>

                <div className="flex-1 p-5 sm:p-7 relative">
                   <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00ff41] animate-pulse" />
                            <h3 className="font-mono text-base sm:text-lg font-black text-white group-hover:text-[#00ff41] transition-colors uppercase tracking-tight">
                                {exp.role}
                            </h3>
                        </div>
                        <div className="flex items-center gap-3 opacity-60">
                            {exp.logo === "1337"
                                ? <Logo1337 />
                                : <span className="font-mono text-[#00ff41] text-xs">@ {exp.company}</span>
                            }
                        </div>
                      </div>
                      <div className="sm:hidden font-mono text-[10px] text-[#2a5a2a]">
                        [{exp.period}]
                      </div>
                      <span className="hidden sm:block font-mono text-[10px] text-[#0a2a0a] uppercase tracking-widest pt-1">
                        STATE: COMPLETED
                      </span>
                   </div>

                   <p className="text-[#4a7a4a] text-sm font-light leading-relaxed border-t border-[#1a1a1a] pt-4 italic">
                      {exp.description}
                   </p>
                </div>
              </div>
            </motion.div>
          ))}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="pt-6 font-mono text-[10px] text-[#0a2a0a] text-center uppercase tracking-[6px]"
          >
            -- End of Journal --
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;