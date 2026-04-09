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
          className="text-left mb-14 sm:mb-20 border-l-2 border-[#00ff41] pl-6"
        >
          <p className="font-mono text-[#00ff41] text-xs tracking-[4px] uppercase mb-3">$ ls -R /system/capabilities</p>
          <h2 className="font-mono text-3xl sm:text-5xl font-black text-[#e0ffe0] mb-4 tracking-tighter uppercase">Capability Matrix</h2>
          <p className="text-[#4a7a4a] max-w-xl text-sm sm:text-base font-light italic opacity-60">Scanning internal logic gates and frontend render engines...</p>
        </motion.div>

        {/* Categories */}
        <div className="space-y-12 sm:space-y-16">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="bg-[#020a02]/40 border border-[#00ff41]/10 rounded-lg p-6 sm:p-8"
            >
              {/* Category label as simple directory name */}
              <div className="flex items-center gap-4 mb-8">
                <span className="font-mono text-sm text-[#00ff41] font-bold">./{cat.label.toLowerCase()}</span>
                <div className="flex-1 h-px bg-[#00ff41]/10" />
                <span className="font-mono text-[9px] text-[#0a2a0a] uppercase tracking-widest hidden sm:block">Total_Modules: {cat.skills.length}</span>
              </div>

              {/* Skills grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-12">
                {cat.skills.map((skill, skillIdx) => {
                  const key = `${catIdx}-${skillIdx}`;
                  const isHovered = hovered === key;
                  
                  // Simulated experience levels
                  const levels = {
                    "HTML": 95, "CSS": 90, "React JS": 92, "Bootstrap": 85, "Tailwind CSS": 95,
                    "PHP": 88, "Laravel": 90, "Node.js": 80,
                    "JavaScript": 94, "C": 75,
                    "MySQL": 85, "Git": 90, "Bash": 80, "Linux": 85
                  };
                  const level = levels[skill.name] || 80;
                  const barsCount = Math.floor(level / 5);
                  
                  return (
                    <div
                      key={skill.name}
                      onMouseEnter={() => setHovered(key)}
                      onMouseLeave={() => setHovered(null)}
                      className="group cursor-default"
                    >
                      <div className="flex items-center justify-between mb-2">
                         <div className="flex items-center gap-3">
                            <img
                              src={skill.icon}
                              alt={skill.name}
                              className={`w-5 h-5 object-contain transition-all duration-300 ${isHovered ? 'opacity-100 grayscale-0' : 'opacity-40 grayscale'}`}
                            />
                            <span className={`font-mono text-xs font-bold transition-colors ${isHovered ? 'text-[#00ff41]' : 'text-[#4a9a4a]'}`}>
                              {skill.name}
                            </span>
                         </div>
                         <span className="font-mono text-[10px] text-[#0a2a0a]">{level}%</span>
                      </div>
                      
                      {/* Terminal Progress Bar style */}
                      <div className="flex items-center gap-1.5 font-mono text-[10px]">
                        <span className="text-[#0a2a0a]">[</span>
                        <div className="flex-1 flex gap-0.5">
                          {Array.from({ length: 20 }).map((_, i) => (
                             <motion.div 
                               key={i}
                               initial={{ opacity: 0.1 }}
                               whileInView={{ opacity: i < barsCount ? 1 : 0.1 }}
                               className={`h-2.5 flex-1 rounded-sm transition-colors ${
                                 i < barsCount 
                                   ? isHovered ? 'bg-[#00ff41] shadow-[0_0_8px_#00ff41]' : 'bg-[#00ff41]/40'
                                   : 'bg-[#1a2a1a]'
                               }`}
                             />
                          ))}
                        </div>
                        <span className="text-[#0a2a0a]">]</span>
                      </div>
                    </div>
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