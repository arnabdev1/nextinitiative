import React from 'react'
import { motion } from 'framer-motion'

function Events() {
  return (
    <section id="events" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className='text-4xl md:text-6xl font-["Neue_Montreal"] font-bold tracking-tight text-white mb-6'>
            Our Impact
          </h2>
          <div className="w-20 h-1 bg-[#CDEA68] mx-auto mb-6" />
          <p className='text-lg md:text-xl text-white/70 font-["Neue_Montreal"] max-w-2xl mx-auto'>
            From food drives to educational initiatives, see how we're making a difference.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -8 }}
            className="relative group overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors duration-300"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="event1.jpeg"
                alt="Event 1"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -8 }}
            className="relative group overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors duration-300"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="event2.jpeg"
                alt="Event 2"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -8 }}
            className="relative group overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors duration-300"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="event3.jpeg"
                alt="Event 3"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -8 }}
            className="relative group overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors duration-300"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="event4.jpeg"
                alt="Event 4"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Events;