import React from 'react'
import { motion } from 'framer-motion'

function Anniv() {
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
            Celebrating 3 Years
          </h2>
          <div className="w-20 h-1 bg-[#CDEA68] mx-auto mb-6" />
          <p className='text-lg md:text-xl text-white/70 font-["Neue_Montreal"] max-w-2xl mx-auto'>
            Three years of making a difference, one initiative at a time.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-1 gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="aspect-video rounded-2xl overflow-hidden bg-white/5 border border-white/10 group-hover:border-white/20 transition-colors duration-300">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/191_R0QLCcM?si=YvyP72oz6Fe1Vj_K"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group"
          >
            <div className="aspect-video rounded-2xl overflow-hidden bg-white/5 border border-white/10 group-hover:border-white/20 transition-colors duration-300">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/MieCHagfIJw?si=9xAmle24ENpLzSxN"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Anniv;