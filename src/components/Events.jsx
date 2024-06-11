import React from 'react'

function Events() {
  return (
    <div id="events" className='events w-full pt-10'>
        <div className='align-center items-center justify-center flex w-full px-10'>
            <h1 className='text-5xl font-["Neue_Montreal"] font-bold tracking-tight'>Our Events</h1>    
        </div> 
        <div className='px-5 py-10  flex flex-wrap w-full gap-5   mt-10  bg-[#7a180f] rounded-[20px]'>
            <div className='flex flex-col md:flex-row justify-center items-center'>
              <img className='w-[700px] ' src="event1.jpeg"/>
              <img className='w-[700px]' src="event2.jpeg"/>
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center'>
              <img className='w-[700px] ' src="event3.jpeg"/>
              <img className='w-[700px]' src="event4.jpeg"/>
            </div>
        </div>  
    </div>
  )
}

export default Events