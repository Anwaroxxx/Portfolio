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
    <section id="experience" className="py-20 sm:py-24 bg-[#010501] relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 sm:mb-16"
        >
          <p className="font-mono text-[#00ff41] text-xs tracking-[4px] uppercase mb-3">// experience.log</p>
          <h2 className="font-mono text-3xl sm:text-4xl font-black text-[#e0ffe0] mb-4">My Journey</h2>
          <p className="text-[#4a7a4a] text-sm sm:text-base">The path that shaped the code.</p>
        </motion.div>

        <div className="relative border-l border-[#0a2a0a] ml-3 pl-8 sm:ml-4 sm:pl-10 space-y-8">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative"
            >
              {/* Timeline dot */}
              <div className={`absolute -left-[37px] sm:-left-[45px] top-[10px] w-4 h-4 rounded-full border-2 border-[#00ff41] transition-all ${
                exp.logo === "1337" ? "bg-[#00ff41] shadow-[0_0_14px_#00ff41]" : "bg-[#010e01]"
              }`} />

              <div className="bg-[#010801] border border-[#0a2a0a] hover:border-[#1a5a1a] transition-all duration-200 p-5 sm:p-7 rounded-xl group relative overflow-hidden">
                {/* Left glow on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#00ff41] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                  <div>
                    <h3 className="font-mono text-base sm:text-lg font-black text-[#e0ffe0]">{exp.role}</h3>
                    <div className="mt-1.5">
                      {exp.logo === "1337"
                        ? <Logo1337 />
                        : <span className="font-mono text-[#00ff41] text-sm">{exp.company}</span>
                      }
                    </div>
                  </div>
                  <span className="font-mono text-xs text-[#2a5a2a] bg-[#010601] border border-[#0a2a0a] px-3 py-1 rounded-full self-start whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>

                <p className="text-[#4a7a4a] text-sm leading-relaxed">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;