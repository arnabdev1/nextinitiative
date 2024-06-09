import React from 'react'

function About() {
  return (
    <div className='w-full p-20  bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
        <h1 className='font-["Neue_Montreal"] text-[4vw] leading-[4.5vw] tracking-tighter'>
            Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.
        </h1> 
        <div className='w-full flex gap-5 pt-10 border-t-[1px] mt-20 border-[#b5627e]'>
            <div className='w-1/2'>
            <h1 className='text-7xl '>Our Approach:</h1>
            <button className='flex gap-10 items-center px-10 py-6 mt-10 bg-black rounded-full text-white'>
                Read More
                <div className='w-3 h-3 rounded-full bg-zinc-100'>

                </div>
            </button>
            </div>
            <div className='w-1/2 h-[70vh] rounded-lg bg-red-600'>

            </div>
        </div>
        
    </div>
  )
}

export default About