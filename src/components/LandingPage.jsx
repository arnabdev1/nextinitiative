import React from 'react'

function LandingPage() {
  return (
    <div className='w-full  bg-zinc-900 pt-1'>
        <div className='textstructure mt-52 px-20'>
            {["FOR THE","PEOPLE OF","BANGLADESH"].map((item,index)=> 
            <div className='masker'>
                <div className='w-fit flex items-center'>
                    {index==1 && (<img className='rounded-md w-[11vw] h-[6vw] bg-red-500' src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Flag_of_Bangladesh.svg/2560px-Flag_of_Bangladesh.svg.png'/>)}
                    <h1 className="uppercase text-[9vw] flex items-center leading-[.75] h-full tracking-tight font-medium font-['Founders Grotesk']">
                        {item}
                    </h1>
                </div>
            </div>)}
        </div>  
        <div className='border-t-[1px] border-zinc-32 mt-32 flex justify-between items-center py-5 px-20'>
            {["Educational Events","Food drives and tree plantations"].map((item,index)=> 
            (<p className='text-md font-light tracking-tight leading-none'>{item}</p>
            ))}
            <div className='start flex items-center gap-5'>
                <div className='px-5 py-2  font-light text-md border-[2px] border-zinc-500 rounded-full capitalize'>Donate to us</div>
                <div className='w-10 h-10 flex items-center justify-center rounded-full border-[2px] border-zinc-500'> <span className='rotate-[45deg]'><FaArrowUpLong /></span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LandingPage
