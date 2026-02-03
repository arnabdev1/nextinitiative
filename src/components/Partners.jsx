import React from 'react'
import { motion } from 'framer-motion'

function Partners() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className='text-4xl md:text-6xl font-["Neue_Montreal"] font-bold tracking-tight text-white mb-6'>
            Our Partners
          </h2>
          <div className="w-20 h-1 bg-[#CDEA68] mx-auto mb-6" />
          <p className='text-lg md:text-xl text-white/70 font-["Neue_Montreal"] max-w-2xl mx-auto'>
            Working together with amazing organizations to create lasting impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -8 }}
            className="md:col-span-2 bg-white rounded-2xl p-8 flex items-center justify-center border border-white/10 hover:border-[#CDEA68]/50 transition-all duration-300"
          >
            <img
              className="w-full h-auto max-h-32 object-contain"
              src="jbl.png"
              alt="JBL Partner"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -8 }}
            className="bg-white rounded-2xl p-8 flex items-center justify-center border border-white/10 hover:border-[#CDEA68]/50 transition-all duration-300"
          >
            <img
              className="w-full h-auto max-h-24 object-contain"
              src="autotrek.png"
              alt="Autotrek Partner"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -8 }}
            className="md:col-span-3 bg-white rounded-2xl p-8 flex items-center justify-center border border-white/10 hover:border-[#CDEA68]/50 transition-all duration-300"
          >
            <img
              className="w-full h-auto max-h-24 object-contain"
              src="CGSD.png"
              alt="CGSD Partner"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Partners;