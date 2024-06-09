import React, { useEffect, useState } from 'react'

function Eyes() {
    
  const [rotate,setRotate] = useState(0);
  useEffect(()=>{
    window.addEventListener("mousemove", (e)=>{
        let mx = e.clientX;
        let my = e.clientY;
        let x = mx - window.innerWidth/2;
        let y = my - window.innerHeight/2;

        let angle = Math.atan2(y,x) * 180 / Math.PI;
        setRotate(angle-180);

    })
  })
  return (
    <div className=' w-full'>
        <div className='relative w-full h-full]'>
            <img  src="https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg" alt="React Image" />
            <div className='flex gap-10 items-center justify-center '>
       
                
                
                <div className=' absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex space-x-5'>
                    <div className='flex justify-center items-center w-[15vw] h-[15vw] rounded-full bg-zinc-100'>
                        <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
                            <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'>
                                <div className='w-10 h-10 rounded-full bg-zinc-100'></div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center w-[15vw] h-[15vw] rounded-full bg-zinc-100'>
                        <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
                            <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'>
                                <div className='w-10 h-10 rounded-full bg-zinc-100'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Eyes