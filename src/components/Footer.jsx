import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaFacebook } from "react-icons/fa";

// Smooth scroll handler for footer nav
const handleSmoothScroll = (e, id) => {
  e.preventDefault();
  const el = document.getElementById(id);
  if (el) {
    const yOffset = -72;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Education", id: "education" },
  { label: "Skills", id: "skill" },
  { label: "Projects", id: "project" },
  { label: "Contact", id: "contact" },
];

const socialLinks = [
  {
    href: "https://github.com/manuthkausilu",
    icon: <FaGithub />,
    label: "GitHub",
    color: "hover:text-white hover:bg-gray-800",
  },
  {
    href: "https://www.linkedin.com/in/manuth-kausilu-732535316/",
    icon: <FaLinkedin />,
    label: "LinkedIn",
    color: "hover:text-white hover:bg-blue-700",
  },
  {
    href: "#contact",
    icon: <FaEnvelope />,
    label: "Email",
    color: "hover:text-white hover:bg-green-700",
  },
  {
    href: "https://www.facebook.com/manuth.kausilu.35",
    icon: <FaFacebook />,
    label: "Facebook",
    color: "hover:text-white hover:bg-blue-600",
  },
];

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-16 px-4 md:px-10 mt-20 relative z-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left: Logo & Copyright */}
        <div className="flex flex-col items-center md:items-start">
          <span className="text-2xl font-bold bg-gradient-to-r from-white via-gray-400 to-gray-700 bg-clip-text text-transparent tracking-wide select-none">
            MANUTH
          </span>
          <span className="text-sm text-gray-400 mt-2">
            &copy; {new Date().getFullYear()} Manuth Kausilu. All rights reserved.
          </span>
        </div>
        {/* Center: Navigation */}
        <div className="flex flex-wrap gap-6 text-gray-300 font-medium text-base justify-center">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={e => handleSmoothScroll(e, item.id)}
              className="group relative hover:text-white transition duration-200"
            >
              <span className="relative z-10">{item.label}</span>
              <span
                className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-gray-400 to-white rounded-full transition-all duration-300 group-hover:w-full"
                aria-hidden="true"
              ></span>
            </a>
          ))}
        </div>
        {/* Right: Social Icons */}
        <div className="flex gap-5 mt-6 md:mt-0">
          {socialLinks.map((link, idx) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group text-gray-400 hover:text-white transition text-2xl rounded-full p-2 relative overflow-hidden"
              aria-label={link.label}
            >
              <span className="absolute inset-0 scale-0 group-hover:scale-100 bg-white/10 rounded-full transition-transform duration-300"></span>
              <span className="relative z-10 group-hover:animate-bounce">{link.icon}</span>
            </a>
          ))}
        </div>
      </div>
      {/* Bottom line */}
      <div className="mt-8 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
        Designed & Built by Manuth Kausilu
      </div>
    </footer>
  );
};

export default Footer;
