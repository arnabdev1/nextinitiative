import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

function Eyes() {
  const [rotate, setRotate] = useState(0);
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      let mx = e.clientX;
      let my = e.clientY;
      let x = mx - window.innerWidth / 2;
      let y = my - window.innerHeight / 2;
      let angle = Math.atan2(y, x) * 180 / Math.PI;
      setRotate(angle - 180);
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  
  return (
    <section className='py-20 px-6'>
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='relative rounded-2xl overflow-hidden border border-white/10'
        >
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative overflow-hidden">
              <img className='w-full h-full object-cover' src="nif_group.jpg" alt="NIF Group" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
            </div>
            <div className="relative overflow-hidden">
              <img className='w-full h-full object-cover' src="nif_group2.jpg" alt="NIF Group" />
              <div className="absolute inset-0 bg-gradient-to-l from-black/20 to-transparent" />
            </div>
          </div>
          
          {/* <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-8'
          >
            <div className='flex justify-center items-center w-24 h-24 md:w-32 md:h-32 rounded-full bg-white shadow-2xl'>
              <div className='relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-zinc-900'>
                <div 
                  style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} 
                  className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-10'
                >
                  <div className='w-6 h-6 md:w-8 md:h-8 rounded-full bg-white shadow-lg'></div>
                </div>
              </div>
            </div>
            <div className='flex justify-center items-center w-24 h-24 md:w-32 md:h-32 rounded-full bg-white shadow-2xl'>
              <div className='relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-zinc-900'>
                <div 
                  style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} 
                  className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-10'
                >
                  <div className='w-6 h-6 md:w-8 md:h-8 rounded-full bg-white shadow-lg'></div>
                </div>
              </div>
            </div>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  )
}

export default Eyes
