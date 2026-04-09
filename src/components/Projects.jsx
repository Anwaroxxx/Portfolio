import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Terminal, Layers, Monitor, Code } from "lucide-react";
import { projects } from "../data/portfolio";

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const [inspectingProject, setInspectingProject] = useState(null);

  const categories = [
    { id: "all", label: "all_projects", icon: <Terminal size={14} /> },
    { id: "frontend", label: "frontend", icon: <Monitor size={14} /> },
    { id: "fullstack", label: "fullstack", icon: <Layers size={14} /> },
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

  // Mock code snippets for inspection
  const mockCode = {
    "DevRadar": `// DevRadar Discovery Engine\npublic function search(Request $request) {\n  $devs = Developer::with('skills')\n    ->where('is_active', true)\n    ->filter($request->all())\n    ->paginate(12);\n\n  return response()->json($devs);\n}`,
    "Qrib-Lik": `const useLocation = () => {\n  const [coords, setCoords] = useState(null);\n  useEffect(() => {\n    navigator.geolocation.getCurrentPosition(\n      (pos) => setCoords(pos.coords)\n    );\n  }, []);\n  return coords;\n};`,
    "Yummy Restaurant": `<section class="premium-menu">\n  <div class="glass-header">\n    <h2>Degustation Experience</h2>\n  </div>\n  <div class="grid-layout animate-reveal">\n    {menuItems.map(item => <Item {...item} />)}\n  </div>\n</section>`,
    "Omni-Agent": `async function processQuery(prompt) {\n  const stream = await ai.generateStream({\n    model: "omni-v1",\n    messages: [{ role: "user", content: prompt }]\n  });\n  return stream;\n}`,
    "MoviesHub": `const fetchMovies = async (query) => {\n  const res = await axios.get(\`\${API_BASE}/search/movie\`, {\n    params: { api_key: process.env.VITE_TMDB_KEY, query }\n  });\n  return res.data.results;\n};`
  };

  return (
    <section id="projects" className="py-20 sm:py-24 bg-[#020802] relative border-t border-[#0a1a0a] overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00ff41]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00ff41]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left mb-12 sm:mb-16 border-l-2 border-[#00ff41] pl-6"
        >
          <p className="font-mono text-[#00ff41] text-xs tracking-[4px] uppercase mb-3">$ cat ~/development/projects.log</p>
          <h2 className="font-mono text-3xl sm:text-4xl font-black text-[#e0ffe0] mb-4 uppercase">Project Repositories</h2>
          <p className="text-[#4a7a4a] max-w-xl text-sm sm:text-base italic opacity-60">Listing compiled artifacts and active deployments...</p>
        </motion.div>

        {/* Filter Bar */}
        <div className="mb-16 flex justify-start">
          <div className="flex flex-wrap gap-4 bg-[#010601] border border-[#0a2a0a] p-1 rounded-sm font-mono text-xs shadow-lg">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-4 py-2 flex items-center gap-2 transition-all duration-300 rounded-sm ${
                  filter === cat.id 
                    ? "bg-[#00ff41] text-black font-bold" 
                    : "text-[#4a7a4a] hover:text-[#00ff41]"
                }`}
              >
                {cat.icon}
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-32 sm:space-y-40">
          <AnimatePresence mode="popLayout">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => {
                const isInspecting = inspectingProject === project.title;
                return (
                  <motion.div
                    key={project.title}
                    layout
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className={`flex flex-col ${index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-10 sm:gap-16 items-start`}
                  >
                    {/* Viewport - Image or Code */}
                    <div className="w-full lg:w-[55%] flex flex-col gap-4">
                      <div className="rounded-xl overflow-hidden border border-[#0a2a0a] shadow-[0_0_60px_rgba(0,0,0,0.8)] bg-[#020a02] relative group">
                        {/* Status bar */}
                        <div className="flex justify-between items-center bg-[#010801] border-b border-[#00ff41]/10 px-4 py-3">
                          <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                            <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                            <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                          </div>
                          <span className="font-mono text-[9px] text-[#00ff41]/40 uppercase tracking-[4px]">
                             {isInspecting ? "inspect_mode" : "preview_mode"} :: {project.category}
                          </span>
                        </div>

                        <div className="relative h-[300px] sm:h-[400px] overflow-hidden">
                          <AnimatePresence mode="wait">
                            {isInspecting ? (
                              <motion.div
                                key="code"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="absolute inset-0 p-6 font-mono text-sm sm:text-base text-[#00ff41]/80 overflow-y-auto bg-[#010801]"
                              >
                                <div className="border-l border-[#00ff41]/20 pl-4 py-2">
                                  <span className="text-gray-500 mb-4 block underline">// snippet.src</span>
                                  <pre className="whitespace-pre-wrap leading-relaxed">
                                    {mockCode[project.title] || "// Source not indexed."}
                                  </pre>
                                </div>
                                <div className="mt-8 text-[10px] text-[#0a2a0a] uppercase tracking-widest">
                                  [EOF] End of file stream...
                                </div>
                              </motion.div>
                            ) : (
                              <motion.div
                                key="image"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0"
                              >
                                <img
                                  src={project.image}
                                  alt={project.title}
                                  className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-700 active:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#020a02] via-transparent to-transparent opacity-60 pointer-events-none" />
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>

                      {/* Tooltip Labels */}
                      <div className="flex justify-between px-2 font-mono text-[9px] text-[#0a2a0a] uppercase tracking-widest">
                        <span>v1.0.4-stable</span>
                        <span>enc_type: utf-8</span>
                      </div>
                    </div>

                    {/* Meta / Details */}
                    <div className="w-full lg:w-[45%] space-y-8">
                      <div className="space-y-2">
                        <div className="flex items-center gap-4">
                          <span className="font-mono text-[#00ff41] text-[10px] opacity-40">0x0{index + 1}</span>
                          <div className="h-px flex-grow bg-gradient-to-r from-[#00ff41]/20 to-transparent" />
                        </div>
                        <h3 className="font-mono text-3xl sm:text-4xl font-black text-white group-hover:text-[#00ff41] transition-colors uppercase tracking-tight">
                          {project.title}
                        </h3>
                      </div>
                      
                      <div className="text-[#4a7a4a] text-sm sm:text-lg leading-relaxed font-light border-l-2 border-[#1a3a1a] pl-6 py-2 italic bg-[#00ff41]/[0.02] rounded-r-lg">
                        {project.description}
                      </div>

                      <div className="flex flex-wrap gap-4 pt-2">
                        {project.tags.map((tag) => (
                          <div key={tag} className="flex flex-col">
                            <span className="text-[8px] font-mono text-[#0a2a0a] mb-1">--flag</span>
                            <span className="px-3 py-1 bg-[#010801] border border-[#0a2a0a] text-[#00ff41] font-mono text-[10px] rounded hover:border-[#00ff41]/40 transition-colors">
                              {tag.toLowerCase()}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center gap-6 pt-10 border-t border-[#1a1a1a]">
                        <button
                          onClick={() => setInspectingProject(isInspecting ? null : project.title)}
                          className={`flex items-center gap-2 font-mono text-xs transition-all px-4 py-2 border rounded ${
                            isInspecting 
                              ? "bg-[#00ff41] text-black border-[#00ff41] font-bold" 
                              : "text-[#4a7a4a] border-[#1a3a1a] hover:border-[#00ff41] hover:text-[#00ff41]"
                          }`}
                        >
                          <Code size={16} /> {isInspecting ? "EXIT_INSPECT" : "INSPECT_SRC"}
                        </button>

                        <div className="flex items-center gap-6">
                          {project.github && (
                            <a href={project.github} target="_blank" rel="noreferrer"
                              className="group flex flex-col gap-1 text-[#2a5a2a] hover:text-white transition-all">
                              <span className="text-[8px] font-mono">GIT REPO</span>
                              <Github size={20} className="group-hover:scale-110 transition-transform" /> 
                            </a>
                          )}
                          <a href={project.link} target="_blank" rel="noreferrer"
                            className="group flex flex-col gap-1 text-[#2a5a2a] hover:text-[#00ff41] transition-all">
                             <span className="text-[8px] font-mono">LIVE ENV</span>
                             <ExternalLink size={20} className="group-hover:scale-110 transition-transform" /> 
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })
            ) : (
              <div className="py-20 text-center border border-dashed border-[#0a2a0a] rounded-lg">
                <Terminal className="mx-auto text-[#0a2a0a] mb-4" size={48} />
                <p className="font-mono text-[#0a2a0a] uppercase tracking-[4px]">Empty directory / 404</p>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;