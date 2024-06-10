import React from 'react'

function LandingPage() {
  return (
    <div className='w-full '>
        <div className='textstructure px-10  pb-5 pt-10 bg-black'>
            {["FOR THE","PEOPLE OF","BANGLADESH"].map((item,index)=> 
            <div className='masker'>
                <div className='w-fit flex items-center'>
                    {index==1 && (<img className='rounded-[5px] w-[12vw] h-[8vw] bg-red-500' src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Flag_of_Bangladesh.svg/2560px-Flag_of_Bangladesh.svg.png'/>)}
                    <h1 className="uppercase text-[13vw] flex items-center leading-[.75] h-full tracking-tight font-medium font-['Founders Grotesk']">
                        {item}
                    </h1>
                </div>
            </div>)}
        </div>  
        <div className=' bg-zinc-10 border-t-[1px]  rounded-3xl flex justify-center items-center py-5 px-20 text-black'>
            {/* {["Educational Events","Food drives and tree plantations"].map((item,index)=> 
            (<p className='text-md font-light tracking-tight leading-none'>{item}</p>
            ))} */}
            <div className='w-full  flex justify-center items-center align-middle gap-5'>
                <a href="https://www.instagram.com/nextinitiative1/" target="_blank"><img src='ig.png' className='w-[100px] font-light text-md  rounded-full capitalize"'/></a>
                <a href="https://www.facebook.com/nextinitiativebd" target="_blank"><img src='fb.png' className='w-[100px] font-light text-md  rounded-full capitalize'/></a>
                <a href="https://www.linkedin.com/company/nextinitiative" target="_blank"><img src='in.png' className='w-[100px] font-light text-md  rounded-full capitalize'/></a>
            </div>
        </div>
    </div>
  )
}

export default LandingPage
