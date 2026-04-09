import { motion } from "framer-motion";
import { skillCategories } from "../data/portfolio";

const Skills = () => {
  return (
    <section id="skills" className="py-20 sm:py-24 bg-[#010501] relative overflow-hidden">
      {/* Subtle ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#00ff41]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-24"
        >
          <p className="font-mono text-[#00ff41] text-xs tracking-[4px] uppercase mb-4">// Technical Stack</p>
          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight">Arsenal & Skills</h2>
        </motion.div>

        {/* Categories */}
        <div className="space-y-20">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: catIdx * 0.1 }}
            >
              <div className="flex items-center gap-6 mb-12">
                <h3 className="font-mono text-lg text-[#00ff41] font-bold uppercase tracking-widest">{cat.label}</h3>
                <div className="flex-1 h-px bg-gradient-to-r from-[#00ff41]/20 to-transparent" />
              </div>

              {/* Skills grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {cat.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="relative group p-8 rounded-2xl border border-[#1a1a1a] bg-[#020a02]/60 backdrop-blur-md flex flex-col items-center gap-6 transition-all hover:border-[#00ff41]/30 hover:shadow-[0_0_30px_rgba(0,255,65,0.05)]"
                  >
                    <div className="relative w-16 h-16 flex items-center justify-center">
                       <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-full h-full object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.1)] transition-transform group-hover:scale-110"
                      />
                    </div>
                    
                    <span className="font-mono text-xs font-bold text-gray-400 group-hover:text-white transition-colors">
                      {skill.name}
                    </span>

                    {/* Corner Accent */}
                    <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-[#1a1a1a] group-hover:bg-[#00ff41] transition-colors shadow-[0_0_10px_#00ff4100] group-hover:shadow-[0_0_10px_#00ff41]" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

export default Skills;