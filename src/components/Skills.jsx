import { useState } from "react";
import { motion } from "framer-motion";
import { skillCategories } from "../data/portfolio";

const Skills = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="skills" className="py-20 sm:py-24 bg-[#010501] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 sm:mb-16"
        >
          <p className="font-mono text-[#00ff41] text-xs tracking-[4px] uppercase mb-3">// skills.sh</p>
          <h2 className="font-mono text-3xl sm:text-4xl font-black text-[#e0ffe0] mb-4">Technical Arsenal</h2>
          <p className="text-[#4a7a4a] max-w-xl mx-auto text-sm sm:text-base">Tools I actually use to ship things.</p>
        </motion.div>

        {/* Categories */}
        <div className="space-y-12">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
            >
              {/* Category label */}
              <div className="flex items-center gap-4 mb-6">
                <span className="font-mono text-xs text-[#00ff41] tracking-[3px] uppercase">
                  {cat.label}
                </span>
                <div className="flex-1 h-px bg-[#0a2a0a]" />
              </div>

              {/* Skills grid — icon on top, name below */}
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4">
                {cat.skills.map((skill, skillIdx) => {
                  const key = `${catIdx}-${skillIdx}`;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: skillIdx * 0.05 }}
                      onMouseEnter={() => setHovered(key)}
                      onMouseLeave={() => setHovered(null)}
                      className={`flex flex-col items-center gap-3 px-3 py-5 rounded-xl border cursor-default transition-all duration-200 ${
                        hovered === key
                          ? "border-[#00ff41] bg-[#010e01] shadow-[0_0_20px_#00ff4120]"
                          : "border-[#0a2a0a] bg-[#010801]"
                      }`}
                    >
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className={`w-10 h-10 object-contain transition-all duration-300 ${
                          hovered === key ? "scale-110 drop-shadow-[0_0_8px_#00ff4166]" : "opacity-80"
                        }`}
                      />
                      <span className={`font-mono text-[11px] sm:text-xs font-semibold text-center leading-tight transition-colors duration-200 ${
                        hovered === key ? "text-[#00ff41]" : "text-[#6a8a6a]"
                      }`}>
                        {skill.name}
                      </span>
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