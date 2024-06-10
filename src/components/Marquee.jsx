import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const images = [
  'food13.JPG',
  'clothes1.jpg',
  'food10.JPG',
  'food31.JPG',
  'food30.JPG',
  'clothes2.jpg'
];
function Marquee() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".4" className='overflow-hidden w-full py-10 rounded-3xl bg-[#004D43]'>
        <div className='text h-[400px] flex  whitespace-nowrap justify-center items-center'>

          <div style={{ position: 'relative', width: '100%', height: '100%' }} className='justify-center items-center flex'>
            <motion.img
              key={images[currentImage]}
              src={images[currentImage]}
              alt={`Image ${currentImage}`}
              style={{ height: '400px', objectFit: 'cover' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          </div>
            
            {/* <motion.img initial={{ x:0 }} animate={{ x:"-100%" }} transition={{ ease:"linear",repeat:Infinity, duration:5}} 
            className='w-[10vw]' src="food13.JPG" />
            <motion.img initial={{ x:0 }} animate={{ x:"-100%" }} transition={{ ease:"linear",repeat:Infinity, duration:5}} 
            className='w-[10vw] ' src="food31.JPG" />
            <motion.img initial={{ x:0 }} animate={{ x:"-100%" }} transition={{ ease:"linear",repeat:Infinity, duration:5}} 
            className='w-[750px] ' src="food12.JPG" /> */}
            {/* <motion.img initial={{ x:0 }} animate={{ x:"-100%" }} transition={{ ease:"linear",repeat:Infinity, duration:5}} 
            className='w-[750px] ' src="clothes1.JPG" />
            <motion.img initial={{ x:0 }} animate={{ x:"-100%" }} transition={{ ease:"linear",repeat:Infinity, duration:5}} 
            className='w-[750px] ' src="food30.JPG" />
            <motion.img initial={{ x:0 }} animate={{ x:"-100%" }} transition={{ ease:"linear",repeat:Infinity, duration:5}} 
            className='w-[750px] ' src="food20.jpeg" /> */}
            
            {/* <motion.h1 initial={{ x:0 }} animate={{ x:"-100%" }} transition={{ ease:"linear",repeat:Infinity, duration:5}} 
            className='text-[24vw] leading-none font-["Founders Grotesk"] font-semibold uppercase p-5'>NEXT INITIATIVE FOUNDATION</motion.h1> */}
        </div>
    </div>
  )
}

export default Marquee
