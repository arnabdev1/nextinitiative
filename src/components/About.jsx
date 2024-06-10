import React from 'react'

function About() {
  return (
    <div className='bg-[#004D43]'>
      <div className='team w-full   bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black '>
          <h1 className='px-10 pt-10 text-bold font-["Neue_Montreal"] text-[5vw] leading-[4.5vw] tracking-tighter '>
              Non-profit Organisaiton | Run by students 
          </h1>
          <h1 className='px-10 font-["Neue_Montreal"] text-[3vw] leading-[4.5vw] tracking-tighter '>    
              Donate to us and help us feed another hungry soul
          </h1> 
          <div className='px-10 pt-20  flex flex-wrap w-full gap-5  border-t-[1px] mt-10 border-[#b5627e] bg-black rounded-t-[20px]'>
              <div className='w-full'>
                <h1 className='text-5xl font-["Neue_Montreal"] font-bold tracking-tight text-white'>
                  Our Team:
                </h1>
                <a href="https://forms.gle/uKMd3XEuauNv2vJDA" target="_blank">
                  <button className='flex text-s gap-3 items-center px-3 py-2 mt-5 bg-[#CDEA68] rounded-full font-["Neue_Montreal"]'>
                    Join now
                    <div className='w-2 h-2 rounded-full bg-zinc-900'></div>
                  </button>
                </a>
              </div>
              <div className='flex flex-col md:flex-row justify-center items-center'>
                <img className='w-[650px] ' src="arnab.jpg"/>
                <img className='w-[650px]' src="sheo.jpg"/>
              </div>
              <div className='flex flex-col md:flex-row justify-center items-center'>
                <img className='w-[650px] ' src="shirsho.jpg"/>
                <img className='w-[650px]' src="labib.jpg"/>
              </div>
              <div className='flex flex-col md:flex-row justify-center items-center'>
                <img className='w-[650px] ' src="joy.jpg"/>
                <img className='w-[650px]' src="abrar.jpg"/>
              </div>
          </div>
          
      </div>
    </div>
  )
}

export default About
