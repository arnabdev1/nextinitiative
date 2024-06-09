import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
        <div className='text flex border-t-2 border-b-2 border-zinc-300 whitespace-nowrap'>
            <motion.h1 initial={{ x:0 }} animate={{ x:"-100%" }} transition={{ ease:"linear",repeat:Infinity, duration:5}} 
            className='text-[24vw] leading-none font-["Founders Grotesk"] font-semibold uppercase p-5'> WE ARE OCHI</motion.h1>
            <motion.h1 initial={{ x:0 }} animate={{ x:"-100%" }} transition={{ ease:"linear",repeat:Infinity, duration:5}} 
            className='text-[24vw] leading-none font-["Founders Grotesk"] font-semibold uppercase p-5'>WE ARE OCHI</motion.h1>
        </div>
    </div>
  )
}

export default Marquee