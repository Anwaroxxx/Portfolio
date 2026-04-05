import { useState } from "react";
import { motion } from "framer-motion";
import { skillCategories } from "../data/portfolio";

const Skills = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="skills" className="py-20 sm:py-24 bg-[#010501] relative overflow-hidden">
      {/* Decorative background grid elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,65,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,65,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 sm:mb-20"
        >
          <p className="font-mono text-[#00ff41] text-xs tracking-[4px] uppercase mb-3">// system.capabilities</p>
          <h2 className="font-mono text-3xl sm:text-5xl font-black text-[#e0ffe0] mb-4 tracking-tighter">Technical Arsenal</h2>
          <p className="text-[#4a7a4a] max-w-xl mx-auto text-sm sm:text-base font-light">Advanced toolsets for architectural design and high-performance shipping.</p>
        </motion.div>

        {/* Categories */}
        <div className="space-y-16 sm:space-y-24">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: catIdx * 0.1 }}
            >
              {/* Category label */}
              <div className="flex items-center gap-6 mb-10">
                <div className="px-4 py-1.5 border border-[#00ff41]/30 bg-[#00ff41]/5 rounded-sm">
                  <span className="font-mono text-xs text-[#00ff41] tracking-[4px] uppercase font-bold">
                    {cat.label}
                  </span>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-[#00ff41]/30 to-transparent" />
              </div>

              {/* Skills grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
                {cat.skills.map((skill, skillIdx) => {
                  const key = `${catIdx}-${skillIdx}`;
                  const isHovered = hovered === key;
                  
                  return (
                    <motion.div
                      key={skill.name}
                      onMouseEnter={() => setHovered(key)}
                      onMouseLeave={() => setHovered(null)}
                      whileHover={{ y: -5, scale: 1.02 }}
                      className={`relative group p-6 rounded-xl border transition-all duration-300 flex flex-col items-center gap-4 ${
                        isHovered
                          ? "border-[#00ff41] bg-[#00ff41]/5 shadow-[0_0_30px_rgba(0,255,65,0.15)]"
                          : "border-[#0a2a0a] bg-[#010801]/60 backdrop-blur-sm"
                      }`}
                    >
                      {/* Interactive corner highlights on hover */}
                      <div className={`absolute top-0 left-0 w-2 h-2 border-t border-l border-[#00ff41] transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
                      <div className={`absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#00ff41] transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />

                      <div className="relative">
                         <img
                          src={skill.icon}
                          alt={skill.name}
                          className={`w-12 h-12 object-contain transition-all duration-500 ${
                            isHovered 
                              ? "scale-110 rotate-3 filter-none drop-shadow-[0_0_12px_rgba(0,255,65,0.4)]" 
                              : "opacity-60 grayscale brightness-75"
                          }`}
                        />
                      </div>
                      
                      <div className="text-center space-y-1">
                        <span className={`block font-mono text-[10px] sm:text-xs font-bold tracking-wider transition-colors duration-300 ${
                          isHovered ? 'text-white' : 'text-[#4a7a4a]'
                        }`}>
                          {skill.name}
                        </span>
                        <div className={`h-0.5 mx-auto bg-[#00ff41] transition-all duration-300 ${isHovered ? 'w-full opacity-50' : 'w-0 opacity-0'}`} />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;