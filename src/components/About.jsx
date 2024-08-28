import React from "react";
import { motion } from "framer-motion";
function About() {
  return (
    <div id="about" className="bg-[#000000]">
      <div className="team w-full   bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className='px-10 pt-10 text-bold font-["Neue_Montreal"] text-[5vw] leading-[4.5vw] tracking-tighter '>
            Non-profit Organisaiton | Run by students
          </h1>
          <h1 className='px-10 font-["Neue_Montreal"] text-[3vw] leading-[4.5vw] tracking-tighter '>
            Donate to us and help us feed another hungry soul
          </h1>
        </motion.div>
        <div className=" pt-20  flex flex-wrap w-full gap-5 justify-center items-center  border-t-[1px] mt-10 border-[#b5627e] bg-black rounded-t-[20px]">
          <div className="w-full px-2 md:px-10">
            <h1 className='xl:text-[4vw] text-3xl font-["Neue_Montreal"] font-bold tracking-tight text-white'>
              Our Team:
            </h1>
            <a href="https://forms.gle/uKMd3XEuauNv2vJDA" target="_blank">
              <button
                className='xl:text-[1vw] text-md flex text-s gap-3 items-center px-5 py-2 mt-5 bg-[#CDEA68] rounded-full font-["Neue_Montreal"]
               text-black transition-all duration-300 hover:text-xl  hover:bg-[#000000] hover:text-white hover:ring hover:ring-[#ffffff] active:bg-[#CDEA68] focus:outline-none focus:text-black active:text-black focus:ring focus:ring-[#ffffff]'
              >
                Join now
                <div className="w-2 h-2 rounded-full bg-zinc-100"></div>
              </button>
            </a>
          </div>

          <div className="flex lg:flex-row md:flex-col sm:flex-col flex-col justify-center items-center">
            <img className="lg:w-[48vw] md:w-full sm:w-full " src="arnab.png" />
            <img className="lg:w-[48vw] md:w-full sm:w-full " src="sheo.jpg" />
          </div>
          <div className="flex lg:flex-row md:flex-col sm:flex-col flex-col justify-center items-center">
            <img
              className="lg:w-[48vw] md:w-full sm:w-full "
              src="shirsho.jpg"
            />
            <img className="lg:w-[48vw] md:w-full sm:w-full " src="labib.jpg" />
          </div>
          <div className="flex lg:flex-row md:flex-col sm:flex-col flex-col justify-center items-center">
            <img className="lg:w-[48vw] md:w-full sm:w-full " src="joy.jpg" />
            <img className="lg:w-[48vw] md:w-full sm:w-full " src="abrar.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
