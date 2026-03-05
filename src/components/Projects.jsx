import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "../data/portfolio";

const Projects = () => {
  return (
    <section id="projects" className="py-20 sm:py-24 bg-[#020802] relative border-t border-[#0a1a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <p className="font-mono text-[#00ff41] text-xs tracking-[4px] uppercase mb-3">// projects/</p>
          <h2 className="font-mono text-3xl sm:text-4xl font-black text-[#e0ffe0] mb-4">Featured Projects</h2>
          <p className="text-[#4a7a4a] max-w-xl mx-auto text-sm sm:text-base">Things I actually shipped.</p>
        </motion.div>

        <div className="space-y-20 sm:space-y-28">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65 }}
              className={`flex flex-col ${index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 sm:gap-12 items-center`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2 group rounded-xl overflow-hidden border border-[#0a2a0a] shadow-[0_0_40px_#00000060]">
                {/* Terminal bar */}
                <div className="flex items-center gap-2 bg-[#010601] border-b border-[#0a2a0a] px-4 py-2.5">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
                  <span className="font-mono text-xs text-[#2a5a2a] ml-2 truncate">
                    ~/projects/{project.title.toLowerCase().replace(/\s/g, "-")}
                  </span>
                </div>
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-[#00ff41]/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-52 sm:h-72 md:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2 space-y-5">
                <p className="font-mono text-[#00ff41] text-xs tracking-[3px]">
                  // project.{String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="font-mono text-2xl sm:text-3xl font-black text-[#e0ffe0]">
                  {project.title}
                </h3>
                <p className="text-[#4a7a4a] text-sm sm:text-base leading-relaxed bg-[#010601] border border-[#0a2a0a] p-4 sm:p-5 rounded-xl">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag}
                      className="px-3 py-1 border border-[#0a3a0a] text-[#00ff41] font-mono text-xs rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6 pt-2">
                  <a href={project.github} target="_blank" rel="noreferrer"
                    className="flex items-center gap-2 text-[#4a7a4a] hover:text-white font-mono text-sm transition-colors hover:scale-105 transform">
                    <Github size={17} /> Source Code
                  </a>
                  <a href={project.link} target="_blank" rel="noreferrer"
                    className="flex items-center gap-2 text-[#4a7a4a] hover:text-[#00ff41] font-mono text-sm transition-colors hover:scale-105 transform">
                    <ExternalLink size={17} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;