import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FiArrowRight } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaEnvelope, FaFacebook } from "react-icons/fa";
import aboutPng from '../assets/about1.0.png';
import { Helmet } from "react-helmet";

const techServices = [
  "Web Development",
  "UI/UX Design",
  "API Integration",
  "Cloud Deployment",
  "Mobile Apps",
  "E-Commerce",
  "POS Systems",
  // "SEO Optimization",
  // "Automation",
  // "AI Solutions",
];

function About() {
  const marqueeRef = useRef(null);
  const [marqueeWidth, setMarqueeWidth] = useState(0);
  const controls = useAnimation();

  // Calculate the width of the marquee content for a seamless loop
  useEffect(() => {
    if (marqueeRef.current) {
      setMarqueeWidth(marqueeRef.current.scrollWidth / 2);
    }
  }, []);

  useEffect(() => {
    if (marqueeWidth > 0) {
      controls.start({
        x: [0, -marqueeWidth],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 22,
            ease: "linear",
          },
        },
      });
    }
  }, [controls, marqueeWidth]);

  // Repeat enough to fill the marquee, but only double for seamless effect
  const repeatedServices = [...techServices, ...techServices];

  return (
    <>
      <Helmet>
        <title>About | Manuth Kausilu</title>
        <meta name="description" content="Learn more about Manuth Kausilu, a creative developer passionate about building beautiful, functional, and user-centric digital experiences." />
        <meta name="keywords" content="About Manuth Kausilu, Software Engineer, Full Stack Developer, Web Development, UI/UX, Cloud, Automation" />
        <meta property="og:title" content="About | Manuth Kausilu" />
        <meta property="og:description" content="Learn more about Manuth Kausilu, a creative developer passionate about building beautiful, functional, and user-centric digital experiences." />
        <meta property="og:type" content="profile" />
        <meta property="og:image" content="/logo.webp" />
        <meta property="og:url" content="https://your-portfolio-url.com/about" />
        <html lang="en" />
      </Helmet>
      <section
        id="about"
        className="relative bg-gradient-to-br from-white via-gray-100 to-white py-24 px-4 md:px-10 overflow-hidden text-black pt-[88px]"
      >
        {/* Decorative background shapes */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-tr from-black to-gray-400 opacity-10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-gray-700 to-black opacity-10 rounded-full blur-3xl -z-10" />

        {/* Modern Section Title */}
        <motion.div
          className="max-w-4xl mx-auto mb-16 text-center relative"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-700 to-gray-400 mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            My Story, Passion & Professional Journey
          </motion.h2>
          {/* <motion.div ...underline... /> */}
          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            I am a creative developer with a passion for building beautiful, functional, and user-centric digital experiences. My journey blends technology, design, and innovation to deliver impactful solutions.
          </motion.p>
        </motion.div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20">
          {/* Profile Image with animation and ring */}
          <motion.div
            className="relative w-[380px] h-[380px] flex-shrink-0 flex items-center justify-center"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: "spring" }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <motion.div
              className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-400 via-pink-300 to-yellow-200 shadow-2xl"
              initial={{ scale: 0.8, opacity: 0.5 }}
              animate={{ scale: [1, 1.08, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            />
            <motion.img
              src={aboutPng}
              alt="profile"
              className="w-[340px] h-[340px] object-cover border-8 border-white shadow-2xl relative z-10 rounded-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2, type: "spring" }}
            />
          </motion.div>
          {/* About Content */}
          <motion.div
            className="w-full max-w-2xl text-center md:text-left bg-white/90 backdrop-blur-lg rounded-3xl p-10 shadow-2xl border border-gray-200"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, type: "spring" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <motion.h2
              className="text-2xl font-semibold text-black mb-2 tracking-widest flex items-center gap-2 uppercase"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: false }}
            >
              <span className="inline-block text-3xl text-black">
                <FiArrowRight />
              </span>
              Who I Am
            </motion.h2>
            <motion.hr
              className="w-16 border-t-4 border-black mx-auto md:mx-0 mb-6"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: false }}
              style={{ transformOrigin: "left" }}
            />
            <motion.p
              className="text-gray-700 text-lg mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: false }}
            >
              I'm <span className="font-bold text-black">Manuth Kausilu</span>, a passionate and dedicated software enthusiast with a strong interest in full-stack development. I enjoy turning ideas into functional and user-friendly digital experiences. My expertise covers modern web technologies, UI/UX, cloud, and automation.
            </motion.p>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 bg-black text-white px-8 py-3 rounded-full font-semibold shadow transition text-lg tracking-wide group hover:bg-white hover:text-black hover:border-black border-2 border-transparent"
              whileHover={{ scale: 1.07, backgroundColor: "#fff", color: "#000", border: "2px solid #000" }}
              whileTap={{ scale: 0.97 }}
            >
              Learn More
              <span className="transition-transform duration-300 group-hover:translate-x-2 group-hover:rotate-12">
                <FiArrowRight className="text-2xl group-hover:animate-bounce" />
              </span>
            </motion.a>
            {/* Social Media Icons */}
            <div className="flex justify-center md:justify-start gap-5 mt-8">
              <a href="https://github.com/manuthkausilu" target="_blank" rel="noopener noreferrer" className="group text-gray-500 hover:text-black transition text-2xl rounded-full p-2">
                <FaGithub className="group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-200" />
              </a>
              <a href="https://www.linkedin.com/in/manuth-kausilu-732535316/" target="_blank" rel="noopener noreferrer" className="group text-gray-500 hover:text-blue-700 transition text-2xl rounded-full p-2">
                <FaLinkedin className="group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-200" />
              </a>
              <a href="#contact" className="group text-gray-500 hover:text-green-700 transition text-2xl rounded-full p-2">
                <FaEnvelope className="group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-200" />
              </a>
              <a href="https://www.facebook.com/manuth.kausilu.35" target="_blank" rel="noopener noreferrer" className="group text-gray-500 hover:text-blue-600 transition text-2xl rounded-full p-2">
                <FaFacebook className="group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-200" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Continuous Technology Service Marquee */}
        <div className="relative mt-32 w-full overflow-x-hidden select-none">
          <motion.div
            ref={marqueeRef}
            className="flex whitespace-nowrap gap-16 text-2xl md:text-3xl font-bold tracking-widest text-gray-700 opacity-80"
            animate={controls}
            style={{ willChange: "transform" }}
          >
            {repeatedServices.map((service, i) => (
              <span key={i} className="mx-8">
                {service}
              </span>
            ))}
          </motion.div>
          {/* Gradient fade left/right */}
          <div className="pointer-events-none absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-white via-white/80 to-transparent" />
          <div className="pointer-events-none absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-white via-white/80 to-transparent" />
        </div>
      </section>
    </>
  );
}

export default About;
