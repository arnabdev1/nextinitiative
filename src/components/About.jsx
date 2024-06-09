import React from 'react'

function About() {
  return (
    <div className='w-full p-10  bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black '>
        <h1 className='font-["Neue_Montreal"] text-[4vw] leading-[4.5vw] tracking-tighter '>
            Non-profit Organisaiton | Run by students 
        </h1>
        <h1>    
            Donate to us and help us feed another hungry soul
        </h1> 
        <div className='p-10 flex flex-wrap w-full gap-5 pt-10 border-t-[1px] mt-20 border-[#b5627e] bg-zinc-900 rounded-[20px]'>
            <div className='w-1/2'>
              <h1 className='text-7xl text-white '>Our Team:</h1>
              <button className='flex gap-10 items-center px-10 py-6 mt-10 bg-[#CDEA68] font-bold rounded-full text-white'>
                  Read More
                  <div className='w-3 h-3 rounded-full bg-zinc-900'>

                  </div>
              </button>
            </div>
            <div className='flex'>
              <img className='w-1/2' src="arnab.jpg"/>
              <img className='w-1/2' src="sheo.jpg"/>
            </div>
            <div className='flex'>
              <img className='w-1/2' src="shirsho.jpg"/>
              <img className='w-1/2' src="labib.jpg"/>
            </div>
            <div className='flex'>
              <img className='w-1/2' src="joy.jpg"/>
              <img className='w-1/2' src="abrar.jpg"/>
            </div>
        </div>
        
    </div>
  )
}

export default About
