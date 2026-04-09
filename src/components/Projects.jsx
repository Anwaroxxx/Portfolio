import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Terminal, Layers, Monitor } from "lucide-react";
import { projects } from "../data/portfolio";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const categories = [
    { id: "all", label: "All_Systems", icon: <Terminal size={14} /> },
    { id: "frontend", label: "Frontend", icon: <Monitor size={14} /> },
    { id: "fullstack", label: "Full_Stack", icon: <Layers size={14} /> },
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 sm:py-32 bg-[#020802] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#00ff41]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="font-mono text-[#00ff41] text-xs tracking-[5px] uppercase mb-4">// Selective Showcases</p>
          <h2 className="text-4xl sm:text-7xl font-black text-white tracking-tighter">PROJECT REPOS</h2>
        </motion.div>

        {/* Filters */}
        <div className="flex justify-center mb-16">
          <div className="flex bg-[#010601] border border-[#1a1a1a] p-1 rounded-xl">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-6 py-2 rounded-lg font-mono text-xs transition-all flex items-center gap-2 ${
                  filter === cat.id 
                    ? "bg-[#00ff41] text-black font-bold shadow-[0_0_20px_rgba(0,255,65,0.3)]" 
                    : "text-gray-500 hover:text-white"
                }`}
              >
                {cat.icon}
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="group relative flex flex-col bg-[#010601] border border-[#1a1a1a] rounded-3xl overflow-hidden hover:border-[#00ff41]/30 transition-all shadow-2xl"
              >
                {/* Image Viewport */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#010601] via-transparent to-transparent opacity-80" />
                  
                  {/* Category Tag */}
                  <div className="absolute top-4 right-4 bg-[#010601]/80 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full">
                    <span className="font-mono text-[10px] text-[#00ff41] uppercase tracking-widest">{project.category}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-[#00ff41] transition-colors">{project.title}</h3>
                    <div className="flex gap-4">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                          <Github size={20} />
                        </a>
                      )}
                      <a href={project.link} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">
                    {project.description}
                  </p>

                  <div className="mt-auto flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-[#0a0a0a] border border-[#1a1a1a] text-gray-500 font-mono text-[9px] rounded-md uppercase tracking-widest">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Border Accent */}
                <div className="h-1 w-0 bg-[#00ff41] transition-all duration-500 group-hover:w-full shadow-[0_0_15px_#00ff41]" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;

export default Projects;