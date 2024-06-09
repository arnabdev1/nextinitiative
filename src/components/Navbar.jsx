import React from 'react'

function Navbar() {
  return (
    <div className=' container mx-auto px-20 py-8 font-["Neue_Montreal"] flex justify-between items-center' >
        <div className='logo'>
            <img width="120" height="30" fill="none" src="logo3.webp"/>
									
        </div>
        <div className=' flex gap-10 flex-wrap'>
            {["Services","Our Work","About Us","Insights","Contact"].map((item,index)=> 
            (<a key={index} className={`text-lg font-light `}> {item} </a>
            ))}
        </div>
    </div>
  )
}

export default Navbar
