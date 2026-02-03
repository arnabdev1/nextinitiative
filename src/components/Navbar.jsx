import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

function Navbar() {
  const scrollToDiv = (targetid) => {
    const targetDiv = document.getElementById(targetid);
    if (targetDiv) {
      targetDiv.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className='fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/70 border-b border-white/5'
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          className="flex items-center"
          whileHover={{ scale: 1.02 }}
        >
          <img width="180" height="90" src="logo3.webp" alt="Logo" className="drop-shadow-2xl" />
        </motion.div>
        
        <div className="hidden md:flex items-center gap-8">
          {/* <button
            onClick={() => scrollToDiv("about")}
            className="text-sm font-medium text-white/80 hover:text-[#CDEA68] transition-colors duration-300"
          >
            About
          </button>
          <button
            onClick={() => scrollToDiv("events")}
            className="text-sm font-medium text-white/80 hover:text-[#CDEA68] transition-colors duration-300"
          >
            Events
          </button>
          <button
            onClick={() => scrollToDiv("team")}
            className="text-sm font-medium text-white/80 hover:text-[#CDEA68] transition-colors duration-300"
          >
            Team
          </button>
          <button
            onClick={() => scrollToDiv("contact")}
            className="text-sm font-medium text-white/80 hover:text-[#CDEA68] transition-colors duration-300"
          >
            Contact
          </button>
           */}
          <div className="flex items-center gap-4 ml-4 border-l border-white/10 pl-4">
            <a href="https://www.instagram.com/nextinitiative1/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-lg text-white/60 hover:text-pink-500 transition-colors duration-300" />
            </a>
            <a href="https://www.facebook.com/nextinitiativebd" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-lg text-white/60 hover:text-blue-500 transition-colors duration-300" />
            </a>
            <a href="https://www.linkedin.com/company/nextinitiative" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-lg text-white/60 hover:text-blue-400 transition-colors duration-300" />
            </a>
          </div>

          <a href="https://forms.gle/uKMd3XEuauNv2vJDA" target="_blank" rel="noopener noreferrer">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-[#CDEA68] text-black text-sm font-semibold rounded-full hover:bg-white transition-colors duration-300"
            >
              Join Us
            </motion.button>
          </a>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
