import htmlIcon from "../assets/html.svg";
import cssIcon from "../assets/css.svg";
import reactIcon from "../assets/react.svg";
import bootstrapIcon from "../assets/boostrap.svg";
import tailwindIcon from "../assets/tailwindcss.svg";
import jsIcon from "../assets/javascript.svg";
import phpIcon from "../assets/php.png";
import laravelIcon from "../assets/laravel.svg";
import mysqlIcon from "../assets/mysql.svg";
import cIcon from "../assets/c.svg";
import bashIcon from "../assets/bash.svg";
import linuxIcon from "../assets/linux.svg";
import nodeIcon from "../assets/nodejs.svg";
import gitIcon from "../assets/git.svg";
import profileImg from "../assets/large_aazarzou.jpg";
import qriblikImg from "../assets/qriblik.png";
import movieshubImg from "../assets/movieshub.png";
import fasheImg from "../assets/fashe-ss.png";
import omniImg from "../assets/omni-ss.png";
import devradarImg from "../assets/devradar-ss.png";

export { profileImg };

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export const skillCategories = [
  {
    label: "Frontend",
    skills: [
      { name: "HTML", icon: htmlIcon },
      { name: "CSS", icon: cssIcon },
      { name: "React JS", icon: reactIcon },
      { name: "Bootstrap", icon: bootstrapIcon },
      { name: "Tailwind CSS", icon: tailwindIcon },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "PHP", icon: phpIcon },
      { name: "Laravel", icon: laravelIcon },
      { name: "Node.js", icon: nodeIcon },
    ],
  },
  {
    label: "Languages",
    skills: [
      { name: "JavaScript", icon: jsIcon },
      { name: "C", icon: cIcon },
    ],
  },
  {
    label: "Database & Tools",
    skills: [
      { name: "MySQL", icon: mysqlIcon },
      { name: "Git", icon: gitIcon },
      { name: "Bash", icon: bashIcon },
      { name: "Linux", icon: linuxIcon },
    ],
  },
];

export const projects = [
  
  {
    title: "DevRadar",
    description:
      "A sophisticated full-stack developer discovery platform. Built with a focus on high-performance search, filtering, and real-time profile management using a robust Laravel & React architecture.",
    image: devradarImg,
    tags: ["Laravel", "React", "MySQL"],
    category: "fullstack",
    link: "https://devradar-main-so1vnx.free.laravel.cloud/",
    github: null,
  },{
    title: "Qrib-Lik",
    description:
      "A clean, location-based platform connecting users with nearby services and businesses. Features a streamlined UX designed for fast, real-world utility.",
    image: qriblikImg,
    tags: ["React", "Tailwind CSS", "API"],
    category: "fullstack",
    link: "https://qrib-lik.vercel.app/",
    github: "https://github.com/Anwaroxxx/QribLik",
  },
  {
    title: "Fashe Atelier",
    description:
      "A premium e-commerce collective specializing in archival fashion and modern silhouettes. Implemented with a sophisticated 'Nordic Noir' aesthetic, focusing on high-end user experience and seamless product discovery.",
    image: fasheImg,
    tags: ["React", "Custom CSS", "E-commerce"],
    category: "frontend",
    link: "https://fashe-gray.vercel.app/",
    github: null,
  },
  {
    title: "MoviesHub",
    description:
      "A cinematic entertainment platform featuring a high-end, professional UI. Integrates real-time movie data with an immersive, no-scroll landing experience and a perfectly refined design system.",
    image: movieshubImg,
    tags: ["React", "Tailwind CSS", "API"],
    category: "frontend",
    link: "https://movies-hub-rust.vercel.app/",
    github: null ,
  },
  
  {
    title: "Omni-Agent",
    description:
      "A sophisticated AI chatbot interface providing a premium, intelligent interaction experience. Seamlessly integrates with advanced AI models through a sleek, modern UI.",
    image: omniImg,
    tags: ["React", "API", "Tailwind CSS"],
    category: "frontend",
    link: "https://omni-agent-umber.vercel.app/",
    github: "https://github.com/Anwaroxxx/Omni-Agent.git",
  },

];

export const experience = [
  {
    role: "Full Stack Developer",
    company: "Self-Directed / Freelance",
    period: "2025 – Present",
    description:
      "Building and shipping full-stack web applications using React and Laravel. Focused on clean architecture, performance optimization, and responsive UIs with Tailwind CSS.",
    logo: null,
  },
  {
    role: "Piscine Candidate",
    company: "1337",
    period: "2025",
    description:
      "Survived the brutal 1337 piscine — a month of daily C challenges, zero sleep, and pure fundamentals. Came out knowing how to think like a programmer.",
    logo: "1337",
  },
  {
    role: "Social Media Manager & Designer",
    company: "Freelance",
    period: "2024",
    description:
      "Managed social media presence for multiple clients — content creation, graphic design, and video editing. Built brand identities from scratch and grew audiences organically.",
    logo: null,
  },
  {
    role: "Technician Diploma — OFPPT",
    company: "Air Conditioning & Commerce",
    period: "2022 – 2024",
    description:
      "Dual-track diploma in climatisation systems and business/commerce fundamentals. Graduated 2024.",
    logo: null,
  },
];

export const aboutMe = {
  name: "Anwar",
  role: "Full Stack Developer",
  description:
    "Self-taught dev with a Linux heart and a frontend soul. I build fast, clean web apps — from pixel-perfect React UIs to solid Laravel backends. Went through the 1337 piscine and came out with fundamentals carved in C.",
  email: "anwar.azarzou.6969@gmail.com",
  discord: "https://discord.com/users/1005448906089443328",
  linkedin: "https://www.linkedin.com/in/anwar-azarzou-20b923271/",
  github: "https://github.com/Anwaroxxx",
};
