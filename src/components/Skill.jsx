import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaJava } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiTypescript, SiMysql, SiSpringboot, SiFigma, SiExpress, SiDocker } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-700" /> },
  { name: "Java", icon: <FaJava className="text-red-600" /> },
  { name: "Spring Boot", icon: <SiSpringboot className="text-green-700" /> },
  { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-800" /> },
  { name: "Docker", icon: <SiDocker className="text-blue-400" /> },
];

const Skill = () => {
  return (
    <section
      id="skill"
      className="relative bg-gradient-to-br from-white via-gray-100 to-white py-24 px-4 md:px-10 overflow-hidden text-black"
    >
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-black via-gray-700 to-gray-400 bg-clip-text text-transparent tracking-widest uppercase mb-4">
          My Technical Skills & Technology Stack
        </h2>
        <motion.p
          className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          A quick overview of the main technologies, frameworks, and tools I use to build modern web applications.
        </motion.p>
      </motion.div>
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {skills.map((skill, idx) => (
          <motion.div
            key={skill.name}
            className="flex flex-col items-center justify-center bg-white/90 rounded-2xl shadow-xl border border-gray-200 p-6 hover:scale-110 hover:shadow-2xl transition-transform duration-300 group"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ scale: 1.13, boxShadow: "0 8px 32px 0 rgba(0, 123, 255, 0.15)" }}
            transition={{ duration: 0.5, delay: idx * 0.07, type: "spring" }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <motion.div
              className="text-5xl mb-3 transition-transform duration-300 group-hover:rotate-[12deg] group-hover:scale-125"
              whileHover={{ rotate: 12, scale: 1.25 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {skill.icon}
            </motion.div>
            <div className="text-lg font-semibold text-gray-800">{skill.name}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skill;
