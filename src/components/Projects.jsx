import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Terminal, Layers, Monitor, Server } from "lucide-react";
import { projects } from "../data/portfolio";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const categories = [
    { id: "all", label: "all_projects", icon: <Terminal size={14} /> },
    { id: "frontend", label: "frontend", icon: <Monitor size={14} /> },
    { id: "fullstack", label: "fullstack", icon: <Layers size={14} /> },
];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 sm:py-24 bg-[#020802] relative border-t border-[#0a1a0a] overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00ff41]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00ff41]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="font-mono text-[#00ff41] text-xs tracking-[4px] uppercase mb-3">// system.projects_list</p>
          <h2 className="font-mono text-3xl sm:text-4xl font-black text-[#e0ffe0] mb-4">Software Forge</h2>
          <p className="text-[#4a7a4a] max-w-xl mx-auto text-sm sm:text-base">Repository of digital artifacts and shipped solutions.</p>
        </motion.div>

        {/* Terminal Filter Bar */}
        <div className="mb-12 flex flex-col items-center">
          <div className="inline-flex flex-wrap justify-center items-center gap-3 bg-[#010601] border border-[#0a2a0a] p-2 rounded-lg font-mono text-xs sm:text-sm shadow-[0_0_20px_rgba(0,255,65,0.05)]">
            <span className="text-[#2a5a2a] pl-2 flex items-center gap-2">
              <span className="text-[#00ff41]">anwar@portfolio</span>:
              <span className="text-blue-400">~</span>$ ls --filter
            </span>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setFilter(cat.id)}
                  className={`px-3 py-1.5 rounded flex items-center gap-2 transition-all duration-300 ${
                    filter === cat.id 
                      ? "bg-[#00ff41]/20 text-[#00ff41] border border-[#00ff41]/40 shadow-[0_0_10px_rgba(0,255,65,0.2)]" 
                      : "text-[#4a7a4a] hover:text-[#00ff41] border border-transparent"
                  }`}
                >
                  {cat.icon}
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <motion.div 
          layout
          className="space-y-20 sm:space-y-28"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className={`flex flex-col ${index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 sm:gap-12 items-center`}
                >
                  {/* Image Container with Terminal Frame */}
                  <div className="w-full lg:w-1/2 group relative">
                    <div className="rounded-xl overflow-hidden border border-[#0a2a0a] shadow-[0_0_40px_#00000060] bg-[#020802]">
                      {/* Terminal bar */}
                      <div className="flex justify-between items-center bg-[#010601] border-b border-[#0a2a0a] px-4 py-2.5">
                        <div className="flex items-center gap-2">
                          <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                          <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                          <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
                        </div>
                        <span className="font-mono text-[10px] text-[#2a5a2a] truncate uppercase tracking-widest leading-none">
                          // view: {project.category}
                        </span>
                      </div>
                      <div className="relative aspect-video overflow-hidden group">
                        {/* Global Scanline Animation */}
                        <div className="scanline pointer-events-none z-30" />
                        
                        {/* CRT Flicker Overlay */}
                        <div className="absolute inset-0 bg-[#00ff41]/5 group-hover:bg-transparent transition-colors duration-500 z-10 terminal-flicker" />
                        
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                        />
                        
                        {/* Status Badge Inside Image */}
                        <div className="absolute bottom-4 left-4 z-30">
                          <span className="font-mono text-[10px] bg-[#020802]/80 border border-[#00ff41]/30 text-[#00ff41] px-2 py-1 rounded backdrop-blur-sm">
                            READY_FOR_DEPLOY
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* Decorative corner accents */}
                    <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-[#00ff41]/50 rounded-tl-sm pointer-events-none" />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-[#00ff41]/50 rounded-br-sm pointer-events-none" />
                  </div>

                  {/* Content */}
                  <div className="w-full lg:w-1/2 space-y-6">
                    <div className="flex items-center gap-3">
                      <p className="font-mono text-[#00ff41] text-xs tracking-[3px]">
                        // STACK.{project.category.toUpperCase()}
                      </p>
                      <div className="h-px flex-grow bg-[#0a2a0a]" />
                    </div>
                    
                    <h3 className="font-mono text-2xl sm:text-3xl font-black text-[#e0ffe0] group-hover:text-[#00ff41] transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-[#4a7a4a] text-sm sm:text-base leading-relaxed bg-[#010601] border border-[#0a2a0a] p-5 rounded-xl relative overflow-hidden group">
                      <span className="relative z-10">{project.description}</span>
                      <div className="absolute top-0 right-0 p-2 opacity-5">
                        <Terminal size={40} className="text-[#00ff41]" />
                      </div>
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag}
                          className="px-3 py-1 border border-[#0a3a0a] text-[#00ff41] font-mono text-[10px] sm:text-xs rounded-sm hover:bg-[#00ff41]/5 transition-colors">
                          _{tag.toLowerCase()}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-8 pt-4">
                      <a href={project.github} target="_blank" rel="noreferrer"
                        className="group flex items-center gap-2 text-[#4a7a4a] hover:text-white font-mono text-sm transition-all">
                        <Github size={18} className="group-hover:rotate-12 transition-transform" /> 
                        <span className="border-b border-transparent group-hover:border-[#4a7a4a]">source_code</span>
                      </a>
                      <a href={project.link} target="_blank" rel="noreferrer"
                        className="group flex items-center gap-2 text-[#4a7a4a] hover:text-[#00ff41] font-mono text-sm transition-all focus:outline-none">
                        <ExternalLink size={18} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" /> 
                        <span className="border-b border-transparent group-hover:border-[#00ff41]">live_preview</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-20 text-center border border-dashed border-[#0a2a0a] rounded-2xl"
              >
                <div className="inline-block p-4 rounded-full bg-[#ff5f56]/10 mb-4">
                  <Terminal className="text-[#ff5f56]" size={32} />
                </div>
                <h3 className="font-mono text-xl text-[#e0ffe0] mb-2">404: PROJECTS_NOT_FOUND</h3>
                <p className="text-[#4a7a4a] font-mono text-sm">Directory '{filter}' is currently empty or under maintenance.</p>
                <button 
                  onClick={() => setFilter("all")}
                  className="mt-6 font-mono text-xs text-[#00ff41] hover:underline"
                >
                  cd .. // return to base directory
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;