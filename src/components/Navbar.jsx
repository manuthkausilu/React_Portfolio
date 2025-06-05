import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiMenu, FiX } from "react-icons/fi";

// Smooth scroll handler
const handleSmoothScroll = (e, id, setMenuOpen) => {
  e.preventDefault();
  const el = document.getElementById(id);
  if (el) {
    if (setMenuOpen) setMenuOpen(false);
    const yOffset = -72; // Reduced padding for less space
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};

const Navbar = () => {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = (
    <>
      <a
        href="#about"
        onClick={(e) => handleSmoothScroll(e, "about", setMenuOpen)}
        className="text-white transition-colors hover:text-black hover:bg-white hover:rounded-full px-3 py-1 block lg:inline"
      >
        About
      </a>
      <a
        href="#education"
        onClick={(e) => handleSmoothScroll(e, "education", setMenuOpen)}
        className="text-white transition-colors hover:text-black hover:bg-white hover:rounded-full px-3 py-1 block lg:inline"
      >
        Education
      </a>
      <a
        href="#skill"
        onClick={(e) => handleSmoothScroll(e, "skill", setMenuOpen)}
        className="text-white transition-colors hover:text-black hover:bg-white hover:rounded-full px-3 py-1 block lg:inline"
      >
        Skill
      </a>
      <a
        href="#project"
        onClick={(e) => handleSmoothScroll(e, "project", setMenuOpen)}
        className="text-white transition-colors hover:text-black hover:bg-white hover:rounded-full px-3 py-1 block lg:inline"
      >
        Projects
      </a>
      <a
        href="#contact"
        onClick={(e) => handleSmoothScroll(e, "contact", setMenuOpen)}
        className="text-white transition-colors hover:text-black hover:bg-white hover:rounded-full px-3 py-1 block lg:inline"
      >
        Contact
      </a>
    </>
  );

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10 py-4 md:py-6 min-h-[56px] md:min-h-[64px] lg:min-h-[80px] z-[100]"
      style={{ background: "transparent", position: "fixed" }}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 60, damping: 26, duration: 1.7 }}
    >
      {/* Logo */}
      <motion.a
        href="#home"
        className="text-2xl sm:text-3xl md:text-4xl font-bold min-w-[70px] italic bg-gradient-to-r from-black via-black to-gray-300 bg-clip-text text-transparent drop-shadow-lg tracking-wide select-none"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, type: "spring" }}
        style={{ textDecoration: "none" }}
      >
        MANU
      </motion.a>

      {/* Desktop Navigation Links */}
      <motion.div
        className="hidden lg:flex space-x-8 xl:space-x-14 font-medium rounded-full px-2 md:px-6 lg:px-8 py-1 md:py-2 min-h-[36px] md:min-h-[40px] lg:min-h-[48px] items-center bg-black"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, delay: 0.6, type: "spring" }}
      >
        {navLinks}
      </motion.div>

      {/* Mobile Hamburger */}
      <motion.button
        className="lg:hidden text-black text-2xl focus:outline-none ml-2"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.1, delay: 1.1 }}
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </motion.button>

      {/* Get Start Button - hidden on mobile/tablet */}
      <motion.div className="space-x-4 hidden lg:flex">
        <motion.button
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => setClicked((prev) => !prev)}
          whileHover={{
            scale: 1.08,
            backgroundColor: "#fff",
            color: "#000",
          }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-black text-white px-5 py-2 rounded-full font-medium shadow hover:bg-white hover:text-black transition-colors flex items-center gap-2 min-w-[110px] md:min-w-[120px] min-h-[36px] md:min-h-[40px] text-base md:text-lg"
        >
          Get Start
          <motion.span
            animate={
              clicked
                ? { x: 20, rotate: 90 }
                : hovered
                ? { x: 10, rotate: 0 }
                : { x: 0, rotate: 0 }
            }
            transition={{ type: "spring", stiffness: 300 }}
            className="flex items-center"
            style={{ display: "inline-flex" }}
          >
            <FiArrowRight className="text-xl ml-1" />
          </motion.span>
        </motion.button>
      </motion.div>

      {/* Mobile/Tablet Navigation Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-black rounded-b-2xl shadow-lg flex flex-col items-center py-4 z-20 lg:hidden gap-2"
          >
            {navLinks}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
