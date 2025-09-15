import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const projects = [
  {
    title: "Sekai Academy – Learning Management System",
    description:
      "Developed a full stack web platform for online course management and student engagement. Implemented PayHere test mode integration for secure course purchasing. Enabled role-based access for students and admins.",
    tech: ["Java", "Spring Boot", "MySQL", "HTML", "CSS", "JavaScript", "jQuery"],
    github: "https://github.com/manuthkausilu/springboot-LMS.git",
    demo: "#",
  },
  {
    title: "Point of Sale (POS) System - Freelance Project",
    description:
      " Developed a desktop-based POS System using Spring Boot (backend) and React (frontend), packaged withElectron for cross-platform deployment. The system handles product management, billing, sales tracking,and customer management, ensuring smooth and efficient business operations. Implemented RESTfulAPIs, secure authentication, and a responsive UI, providing a seamless user experience for desktopenvironments.",
    tech: ["Java", "Spring Boot", "MySQL", "React", "Electron", "JavaScript"],
    github: "#",
    demo: "#",
  },
  {
    title: "E-Commerce Web Application (JavaEE & JSP)",
    description:
      "Developed a full-featured e-commerce web application using JavaEE, JSP, HTML, CSS, and Bootstrap. Implemented user authentication, product browsing with category filtering and search, shopping cart management, and order processing. Integrated an admin panel for managing products, categories, and orders.",
    tech: ["JavaEE", "JSP", "HTML", "CSS", "Bootstrap", "JavaScript"],
    github: "https://github.com/manuthkausilu/E-Commerce-Web-Application-.git",
    demo: "#",
  },
  {
    title: "Smart Parking Management System – Backend",
    description:
      "A microservice-based backend system built with Spring Boot for managing smart vehicle parking operations. Includes services for user management, vehicle tracking, parking slot allocation, and payment handling. Implements JWT authentication, Spring Security, and RESTful APIs for scalable, secure communication.",
    tech: ["Spring Boot", "Java", "MySQL", "Spring Security", "JWT", "REST API" ,"Microservices"],
    github: "https://github.com/manuthkausilu/Smart-Parking-Management-System-BACKEND-.git",
    demo: "#",
  },
  {
    title: "Book Club Library Management Web Application",
    description:
      "A full-stack library management system built with React and Node.js for managing book lending operations. Includes modules for reader management, book cataloging, lending and return tracking, and overdue handling. Integrates Nodemailer for overdue notifications and secure JWT authentication.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Nodemailer"],
    github: "https://github.com/manuthkausilu/Book-Club-Library-Management-Web-Application.git",
    demo: "#",
  },
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio built with React, Tailwind CSS, and Framer Motion.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/manuthkausilu/React_Portfolio.git",
    demo: "https://manuthkausilu.me/",
  },
];

const Project = () => (
  <section
    id="project"
    className="relative bg-gradient-to-br from-white via-gray-100 to-white py-24 px-4 md:px-10 overflow-hidden text-black"
  >
    <motion.div
      className="text-center mb-12"
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
    </motion.div>
    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, idx) => (
        <motion.div
          key={project.title + '-' + idx}
          className="flex flex-col bg-white/90 rounded-2xl shadow-xl border border-gray-200 p-8 hover:shadow-2xl transition-shadow duration-300 group"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(0, 123, 255, 0.15)" }}
          transition={{ duration: 0.5, delay: idx * 0.1, type: "spring" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <h3 className="text-xl font-bold text-black mb-2">{project.title}</h3>
          <p className="text-gray-700 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((t) => (
              <span key={t} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">
                {t}
              </span>
            ))}
          </div>
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
        </motion.div>
      ))}
    </div>
  </section>
);

export default Project;
