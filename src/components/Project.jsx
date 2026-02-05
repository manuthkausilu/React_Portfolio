import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import sekai from "../assets/sekai.webp";
import pos1 from "../assets/pos1.webp";
import pos2 from "../assets/pos2.webp";
import pos3 from "../assets/pos3.webp";
import pos4 from "../assets/pos4.webp";
import pos5 from "../assets/pos5.webp";
import pos6 from "../assets/pos6.webp";
import aboutImg from "../assets/about1.0.png";
import reactLogo from "../assets/react.svg";
import brightmark from "../assets/brightmarkweb.webp";
import portfolio from "../assets/portfolio.webp";
import pos from "../assets/pos.webp";

const projects = [
  {
    title: "Point of Sale (POS) System for N .I テンポ japan shop",
    description:
      " Developed a desktop-based POS System using Spring Boot (backend) and React (frontend), packaged withElectron for cross-platform deployment. The system handles product management, billing, sales tracking,and customer management, ensuring smooth and efficient business operations. Implemented RESTfulAPIs, secure authentication, and a responsive UI, providing a seamless user experience for desktopenvironments.",
    tech: ["Java", "Spring Boot", "MySQL", "React", "Electron", "JavaScript"],
    github: "#",
    images: [pos, pos1, pos2, pos3, pos4, pos5, pos6],
    demo: "#",
    category: "Freelance",
  },
  {
    title: "BrightMark - Dynamic Web Application",
    description: "Next.js + Supabase based web application with an admin panel for dynamic content management.Enables real time content updates using Supabase database and APIs.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion","Supabase"],
    images: [brightmark],
    demo: "https://www.brightmarkgraphic.com/",
    category: "Freelance",
  },
  {
    title: "Sekai Academy – Learning Management System",
    description:
      "Developed a full stack web platform for online course management and student engagement. Implemented PayHere test mode integration for secure course purchasing. Enabled role-based access for students and admins.",
    tech: ["Java", "Spring Boot", "MySQL", "HTML", "CSS", "JavaScript", "jQuery"],
    github: "https://github.com/manuthkausilu/springboot-LMS.git",
    images: [sekai],
    demo: "#",
    category: "Practice",
  },
  {
    title: "Smart Parking Management System – Backend",
    description:
      "A microservice-based backend system built with Spring Boot for managing smart vehicle parking operations. Includes services for user management, vehicle tracking, parking slot allocation, and payment handling. Implements JWT authentication, Spring Security, and RESTful APIs for scalable, secure communication.",
    tech: ["Spring Boot", "Java", "MySQL", "Spring Security", "JWT", "REST API" ,"Microservices"],
    github: "https://github.com/manuthkausilu/Smart-Parking-Management-System-BACKEND-.git",
    images: [reactLogo],
    demo: "#",
    category: "Practice",
  },
  {
    title: "Book Club Library Management Web Application",
    description:
      "A full-stack library management system built with React and Node.js for managing book lending operations. Includes modules for reader management, book cataloging, lending and return tracking, and overdue handling. Integrates Nodemailer for overdue notifications and secure JWT authentication.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Nodemailer"],
    github: "https://github.com/manuthkausilu/Book-Club-Library-Management-Web-Application.git",
    images: [reactLogo],
    demo: "#",
    category: "Practice",
  },
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio built with React, Tailwind CSS, and Framer Motion.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/manuthkausilu/React_Portfolio.git",
    images: [portfolio],
    demo: "https://manuthkausilu.me/",
    category: "Practice",
  },
];

const ProjectCard = ({ project, idx }) => {
  const imgs = project.images && project.images.length ? project.images : [
    `https://via.placeholder.com/800x480?text=${encodeURIComponent(project.title)}`,
  ];
  const [active, setActive] = useState(0);

  const prev = (e) => {
    e.preventDefault();
    setActive((p) => (p - 1 + imgs.length) % imgs.length);
  };

  const next = (e) => {
    e.preventDefault();
    setActive((p) => (p + 1) % imgs.length);
  };

  return (
    <motion.div
      key={project.title + '-' + idx}
      className="flex flex-col bg-white/90 rounded-2xl shadow-xl border border-gray-200 p-4 hover:shadow-2xl transition-shadow duration-300 group"
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ scale: 1.02, boxShadow: "0 8px 32px 0 rgba(0, 123, 255, 0.15)" }}
      transition={{ duration: 0.5, delay: idx * 0.1, type: "spring" }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <h3 className="text-lg md:text-xl font-bold text-black mb-3">{project.title}</h3>
      
      <div className="relative w-full aspect-video rounded-md overflow-hidden mb-4 bg-gray-100 flex-shrink-0">
        <img src={imgs[active]} alt={project.title} className="w-full h-full object-contain" />
        {imgs.length > 1 && (
          <>
            <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full text-gray-700 hover:bg-white">
              ‹
            </button>
            <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full text-gray-700 hover:bg-white">
              ›
            </button>
          </>
        )}
      </div>

      <div className="flex flex-col flex-grow">
      <p className="text-gray-700 mb-3 text-xs md:text-sm">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-3">
        {project.tech.map((t) => (
          <span key={t} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs font-semibold">
            {t}
          </span>
        ))}
      </div>

      {imgs.length > 1 && (
        <div className="flex gap-1.5 mb-3">
          {imgs.map((thumb, i) => (
            <button key={thumb + i} onClick={() => setActive(i)} className={`w-12 h-8 rounded overflow-hidden border ${i === active ? 'border-blue-500' : 'border-gray-200'}`}>
              <img src={thumb} alt={`${project.title} ${i+1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}

      <div className="flex gap-4 mt-auto">
        {project.github && project.github !== "#" && (
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black transition text-xl">
            <FiGithub />
          </a>
        )}
        {project.demo && project.demo !== "#" && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-700 transition text-xl">
            <FiExternalLink />
          </a>
        )}
      </div>
      </div>
    </motion.div>
  );
};

const Project = () => {
  const [selected, setSelected] = useState("All");
  const categories = ["All", "Freelance", "Practice"];

  const filtered = selected === "All" ? projects : projects.filter((p) => p.category === selected);

  return (
    <section
      id="project"
      className="relative bg-gradient-to-br from-white via-gray-100 to-white py-24 px-4 md:px-10 overflow-hidden text-black"
    >
      <motion.div
        className="text-center mb-6"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: false }}
      >
        <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-black via-gray-700 to-gray-400 bg-clip-text text-transparent tracking-widest uppercase mb-4">
          My Projects
        </h2>
        <motion.p
          className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          A showcase of some of my favorite and most impactful work.
        </motion.p>
        <div className="flex items-center justify-center gap-3 mt-4">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setSelected(c)}
              className={`px-4 py-2 rounded-full text-sm font-semibold ${selected === c ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              {c}
            </button>
          ))}
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        {filtered.map((project, idx) => (
          <ProjectCard project={project} idx={idx} key={project.title + '-' + idx} />
        ))}
      </div>
    </section>
  );
};

export default Project;
