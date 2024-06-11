import React from 'react'
import { motion } from 'framer-motion'

function Navbar() {
  const scrollToDiv = (targetid) => {
    // Find the target div using its id
    const targetDiv = document.getElementById(targetid);

    // Scroll to the target div using smooth scrolling behavior
    if (targetDiv) {
      targetDiv.scrollIntoView({ behavior: 'smooth' });
    }
  };


  const redirectToWebsite = (website) => {
    window.open(website, '_blank');
  };
  return (
    <div className='bg-black  container mx-auto px-20 py-8 font-["Neue_Montreal"] flex justify-between items-center'>
      <div className="logo">
        <img width="400" height="200" fill="none" src="logo3.webp" />
      </div>

      <div className=" flex gap-10 flex-wrap">
        <button
          onClick={(e) => scrollToDiv("about")}
          className="text-lg font-light"
        >
          About Us
        </button>

        <button
          onClick={(e) => scrollToDiv("events")}
          className="text-lg font-light"
        >
          Our Work
        </button>

        <a href="https://forms.gle/uKMd3XEuauNv2vJDA" target="_blank">
          <button className="text-lg font-light">Join us</button>
        </a>
        <button
          onClick={(e) => scrollToDiv("contact")}
          className="text-lg font-light"
        >
          Contact
        </button>
      </div>
    </div>
  );
}

export default Navbar
