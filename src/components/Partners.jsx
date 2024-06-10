import React from 'react'

function Partners() {
  return (
    <div className='partners'>
        <div className='align-center items-center justify-center flex w-full px-10 py-10'>
            <h1 className='text-5xl font-["Neue_Montreal"] font-bold tracking-tight'>Our Partners</h1>    
        </div> 

        <div className='w-full h-[300px] px-10 bg-zinc-900 gap-10 flex  flex-col md:flex-row align-middle items-center'>
                <div className='cardcontainer'>
                    <img className='card w-[900px] rounded-xl   bg-zinc-100' src="jbl.png"/>  
                </div>
                <div className='cardcontainer w-1/2 flex gap-10 justify-center items-center'>
                    <img className='card rounded-xl w-[200px]' src="autotrek.png"/>
                    <img className='card rounded-xl w-[200px]' src="CGSD.png"/>
                </div>
        </div>

        <div className='align-center items-center justify-center flex w-full px-10 py-10'>
            <h1 className='text-l font-["Neue_Montreal"] font-bold tracking-tight'>Designed and Developed by Arnab Dev </h1>    
        </div> 
    </div>
  )
}

export default Partners