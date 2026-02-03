import { motion } from 'framer-motion'
import React from 'react'

function LandingPage() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 mt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/50 to-black" />
      
      <div className="relative max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className='text-5xl md:text-7xl lg:text-8xl font-bold font-["Neue_Montreal"] tracking-tight mb-8 leading-tight'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-white">Empowering Lives,</span>
            <br />
            <span className="text-[#CDEA68]">Building Futures</span>
          </motion.h1>
          
          <motion.p 
            className='text-lg md:text-xl lg:text-2xl text-white/70 font-["Neue_Montreal"] max-w-3xl mx-auto mb-12'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A student-run non-profit organization dedicated to feeding the hungry, 
            educating communities, and creating positive change in Bangladesh.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a href="https://forms.gle/uKMd3XEuauNv2vJDA" target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-[#CDEA68] text-black text-lg font-semibold rounded-full hover:bg-white transition-colors duration-300 shadow-lg shadow-[#CDEA68]/20"
              >
                Join Our Mission
              </motion.button>
            </a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border-2 border-white/20 text-white text-lg font-semibold rounded-full hover:border-[#CDEA68] hover:text-[#CDEA68] transition-colors duration-300"
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>
        
        {/* Stats or quick info */}
        <motion.div
          className="grid grid-cols-3 gap-8 mt-24 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-bold text-[#CDEA68] mb-2">3+</h3>
            <p className="text-white/60 text-sm md:text-base">Years Active</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-bold text-[#CDEA68] mb-2">100%</h3>
            <p className="text-white/60 text-sm md:text-base">Student Run</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-bold text-[#CDEA68] mb-2">∞</h3>
            <p className="text-white/60 text-sm md:text-base">Impact Made</p>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#CDEA68] rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
}

export default LandingPage
