import React from 'react'

function Events() {
  return (
    <div id="events" className="events w-full pt-10">
      <div className="align-center items-center justify-center flex w-full">
        <h1 className='text-5xl font-["Neue_Montreal"] font-bold tracking-tight'>
          Our Events
        </h1>
      </div>

      <div className=" py-10 flex flex-wrap w-full mt-100 gap-5  bg-[#7a180f] rounded-[20px]">
        <div className="flex lg:px-10 px-2 gap-5 lg:flex-row md:flex-col sm:flex-col flex-col justify-center items-center">
          <img
            className="lg:w-[45vw] md:w-[90vw] sm:w-[90vw] "
            src="event1.jpeg"
          />
          <img
            className="lg:w-[45vw] md:w-[90vw] sm:w-[90vw] "
            src="event2.jpeg"
          />
        </div>
        <div className="flex lg:flex-row lg:px-10 px-2 gap-5 md:flex-col sm:flex-col flex-col justify-center items-center">
          <img
            className="lg:w-[45vw] md:w-[90vw] sm:w-[90vw] "
            src="event3.jpeg"
          />
          <img
            className="lg:w-[45vw] md:w-[90vw] sm:w-[90vw] "
            src="event4.jpeg"
          />
        </div>
      </div>
    </div>
  );
}

export default Events