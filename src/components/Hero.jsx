import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiFolder, FiMail } from "react-icons/fi";
import bg3 from "../assets/videos/bg3.mp4";

export default function Hero() {
  const [hovered, setHovered] = useState(null);
  const [currentTime, setCurrentTime] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Convert to Sri Lanka time (GMT+5:30)
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const offset = 5.5; // GMT+5:30
      const sriLanka = new Date(utc + 3600000 * offset);
      setCurrentTime(
        sriLanka.toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    // Loading animation: hide when window is loaded
    const handleLoad = () => {
      const elapsed = Date.now() - start;
      const remaining = minLoadingTime - elapsed;
      setTimeout(() => setLoading(false), remaining > 0 ? remaining : 0);
    };
    // Show loading animation for at least 2 seconds
    const minLoadingTime = 2000;
    const start = Date.now();
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }
    return () => {
      clearInterval(interval);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800">
        <div className="relative flex items-center justify-center mb-6">
          <span className="absolute inline-flex h-20 w-20 rounded-full bg-gradient-to-tr from-black via-gray-700 to-white opacity-30 animate-pulse"></span>
          <svg className="animate-spin h-14 w-14" viewBox="0 0 50 50">
            <circle
              className="opacity-20"
              cx="25"
              cy="25"
              r="20"
              fill="none"
              stroke="#fff"
              strokeWidth="6"
            />
            <circle
              className="origin-center"
              cx="25"
              cy="25"
              r="20"
              fill="none"
              stroke="url(#projectGradient)"
              strokeWidth="6"
              strokeDasharray="100"
              strokeDashoffset="60"
            />
            <defs>
              <linearGradient id="projectGradient" x1="0" y1="0" x2="50" y2="50" gradientUnits="userSpaceOnUse">
                <stop stopColor="#fff" />
                <stop offset="0.5" stopColor="#222" />
                <stop offset="1" stopColor="#000" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white text-xl font-semibold tracking-wide"
        >
          Loading your experience...
        </motion.div>
      </div>
    );
  }

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-2 sm:px-4 pt-0 w-full"
      id="home"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={bg3} type="video/mp4" />
      </video>
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>
      {/* Hero Content */}
      <div className="relative z-20 flex flex-col justify-center items-center min-h-screen w-full">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-white/80 backdrop-blur-sm mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hi, I'm Manuth
        </motion.h1>

        <motion.h2
          className="text-2xl md:text-3xl font-semibold text-white/70 backdrop-blur-sm mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Software Engineer & Full Stack Developer
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-white/60 backdrop-blur-sm mb-8 max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          I build modern, scalable web applications and deliver elegant solutions to
          complex problems.
          <br /> Let's create something amazing together!
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <motion.button
            onMouseEnter={() => setHovered("work")}
            onMouseLeave={() => setHovered(null)}
            onClick={() => {
              const el = document.getElementById("project");
              if (el) {
                const yOffset = -72;
                const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: "smooth" });
              }
            }}
            className={`px-6 py-3 rounded-full text-lg font-medium shadow flex items-center gap-2 min-w-[140px] min-h-[48px] transition-colors
              ${
                hovered === "work"
                  ? "bg-white text-black border border-black"
                  : hovered === "contact"
                  ? "bg-black text-white"
                  : "bg-black text-white"
              }
            `}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiFolder className="text-xl" />
            View My Work
          </motion.button>
          <motion.button
            onMouseEnter={() => setHovered("contact")}
            onMouseLeave={() => setHovered(null)}
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) {
                const yOffset = -72;
                const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: "smooth" });
              }
            }}
            className={`px-6 py-3 rounded-full text-lg font-medium shadow flex items-center gap-2 min-w-[140px] min-h-[48px] transition-colors
              ${
                hovered === "contact"
                  ? "bg-white text-black border border-black"
                  : hovered === "work"
                  ? "bg-black text-white"
                  : "bg-white text-black border border-black"
              }
            `}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiMail className="text-xl" />
            Contact Me
          </motion.button>
        </motion.div>

        {/* Short Info Section slightly above the bottom */}
        <motion.div
          className="w-full max-w-7xl absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col md:flex-row justify-between items-stretch gap-2 sm:gap-4 md:gap-12 lg:gap-32 px-1 sm:px-3"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, type: "spring" }}
        >
          {/* Left Side */}
          <div
            className="flex flex-col items-start justify-center bg-white/10 rounded-xl px-3 sm:px-5 md:px-7 lg:px-10 py-3 sm:py-4 min-w-[120px] sm:min-w-[150px] md:min-w-[180px] lg:min-w-[200px] xl:min-w-[220px] shadow md:items-start md:justify-center md:text-left"
            data-aos="fade-up-right"
            data-aos-delay="300"
          >
            <h1 className="text-xs sm:text-sm md:text-base xl:text-lg font-semibold text-white mb-1">
              Based in Sri Lanka
            </h1>
            <p className="time text-white/80 text-xs sm:text-sm md:text-base">
              {currentTime} GMT+5:30
            </p>
          </div>
          {/* Right Side */}
          <div
            className="flex flex-col items-end justify-center bg-white/10 rounded-xl px-3 sm:px-5 md:px-7 lg:px-10 py-3 sm:py-4 min-w-[120px] sm:min-w-[150px] md:min-w-[180px] lg:min-w-[200px] xl:min-w-[220px] shadow md:items-end md:justify-center md:text-right"
            data-aos="fade-up-left"
            data-aos-delay="300"
          >
            <p className="text-white/80 text-xs sm:text-sm md:text-base mb-1">Freelance Availability</p>
            <h1 className="flex items-center gap-2 font-bold text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg text-white">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              LIMITED HOURS
            </h1>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
