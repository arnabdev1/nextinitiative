import React from 'react';
import { motion } from 'framer-motion';

function Marquee() {
  return (
    <section id="team" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className='text-4xl md:text-6xl font-["Neue_Montreal"] font-bold tracking-tight text-white mb-6'>
            Meet Our Team
          </h2>
          <div className="w-20 h-1 bg-[#CDEA68] mx-auto mb-6" />
          <p className='text-lg md:text-xl text-white/70 font-["Neue_Montreal"] max-w-2xl mx-auto mb-8'>
            Dedicated students working together to make a difference in our community.
          </p>
          <a href="https://forms.gle/uKMd3XEuauNv2vJDA" target="_blank" rel="noopener noreferrer">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='px-8 py-4 bg-[#CDEA68] text-black text-lg font-semibold rounded-full hover:bg-white transition-colors duration-300 font-["Neue_Montreal"]'
            >
              Join Our Team
            </motion.button>
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { img: 'arnab.png', delay: 0 },
            { img: 'sheo.jpg', delay: 0.1 },
            { img: 'shirsho.jpg', delay: 0.2 },
            { img: 'labib.jpg', delay: 0.3 },
            { img: 'joy.jpg', delay: 0.4 },
            { img: 'abrar.jpg', delay: 0.5 }
          ].map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: member.delay }}
              whileHover={{ y: -8 }}
              className="relative group overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-[#CDEA68]/50 transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  src={member.img}
                  alt={`Team member ${index + 1}`}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Marquee;
