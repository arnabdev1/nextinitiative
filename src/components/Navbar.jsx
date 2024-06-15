import React from "react";
import { motion } from "framer-motion";

function Navbar() {
  const scrollToDiv = (targetid) => {
    // Find the target div using its id
    const targetDiv = document.getElementById(targetid);

    // Scroll to the target div using smooth scrolling behavior
    if (targetDiv) {
      targetDiv.scrollIntoView({ behavior: "smooth" });
    }
  };

  const redirectToWebsite = (website) => {
    window.open(website, "_blank");
  };
  return (
    <div
      id="top"
      className='bg-black flex flex-row px-5 container mx-auto  py-8 font-["Neue_Montreal"] justify-evenly items-center'
    >
      <div className="logo">
        <img width="200" height="100" fill="none" src="logo3.webp" />
      </div>
      <div>
        <div className=" flex lg:flex-row md:flex-col sm:flex-col flex-col gap-5 flex-wrap items-center">
          <button
            onClick={(e) => scrollToDiv("about")}
            className="transition-all duration-300 p-5 rounded-full text-lg font-light text-white bg-transparent hover:text-xl hover:bg-[#CDEA68] hover:text-black active:bg-[#CDEA68] focus:outline-none focus:text-white active:text-black focus:ring focus:ring-[#ffffff]"
          >
            About Us
          </button>

          <button
            onClick={(e) => scrollToDiv("events")}
            className="transition-all duration-300 p-5 rounded-full text-lg font-light text-white bg-transparent hover:text-xl hover:bg-[#CDEA68] hover:text-black active:bg-[#CDEA68] focus:outline-none focus:text-white active:text-black focus:ring focus:ring-[#ffffff]"
          >
            Our Work
          </button>

          <a href="https://forms.gle/uKMd3XEuauNv2vJDA" target="_blank">
            <button className="transition-all duration-300 p-5 rounded-full text-lg font-light text-white bg-transparent hover:text-xl hover:bg-[#CDEA68] hover:text-black active:bg-[#CDEA68] focus:outline-none focus:text-white active:text-black focus:ring focus:ring-[#ffffff]">
              Join us
            </button>
          </a>
          <button
            onClick={(e) => scrollToDiv("contact")}
            className="transition-all duration-300 p-5 rounded-full text-lg font-light text-white bg-transparent hover:bg-[#CDEA68] hover:text-black active:bg-[#CDEA68] focus:outline-none focus:text-white active:text-black focus:ring focus:ring-[#ffffff]"
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
