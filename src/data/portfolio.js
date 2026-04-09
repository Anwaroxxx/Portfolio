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
import yummyImg from "../assets/yummy-ss.png";
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
      "A full-stack developer discovery platform built with Laravel, React, and MySQL. Search, filter, and explore developer profiles with a clean interface and real-time data.",
    image: devradarImg,
    tags: ["Laravel", "React", "MySQL"],
    category: "fullstack",
    link: "https://devradar-main-so1vnx.free.laravel.cloud/",
    github: null,
  },
  {
    title: "Qrib-Lik",
    description:
      "A location-based platform connecting people with nearby services and businesses. Clean UX, real-world utility — find what's close to you, fast.",
    image: qriblikImg,
    tags: ["React", "Tailwind CSS", "API"],
    category: "fullstack",
    link: "https://qrib-lik.vercel.app/",
    github: "https://github.com/Anwaroxxx/QribLik",
  },
    {
    title: "MoviesHub",
    description:
      "A sleek movie discovery app — browse, search, and explore films with a clean interface powered by a live movies API.",
    image: movieshubImg,
    tags: ["React", "Tailwind CSS", "API"],
    category: "frontend",
    link: "https://movies-hub-rust.vercel.app/",
    github: null ,
  },
  {
    title: "Yummy Restaurant",
    description:
      "A premium restaurant experience with a high-end menu showcase and reservation system. Built with focus on aesthetics and smooth interactions.",
    image: yummyImg,
    tags: ["HTML", "SASS", "JavaScript"],
    category: "frontend",
    link: "https://yummy-restaurant-one.vercel.app/",
    github: "https://github.com/Anwaroxxx/Yummy_Restaurant.git",
  },
  {
    title: "Omni-Agent",
    description:
      "A sophisticated AI chatbot interface that provides a clean, ChatGPT-like experience. Seamlessly integrates with AI APIs for intelligent interactions.",
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
