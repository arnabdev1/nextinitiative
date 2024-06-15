import React from 'react'

function Partners() {
  return (
    <div className="partners bg-zinc-900 rounded-t-3xl flex flex-col items-center">
      <div className="align-center items-center justify-center flex w-full px-10 py-10">
        <h1 className='text-5xl font-["Neue_Montreal"] font-bold tracking-tight'>
          Our Partners
        </h1>
      </div>
      <hr color="#ffffff" className="w-[80vw] opacity-30"></hr>

      <div className="w-full lg:h-[300px] md:h-[500px] sm:h-[500px] h-[330px] px-10 gap-10 flex lg:flex-row  md:flex-col sm:flex-col flex-col align-middle items-center">
        {/* <div className="flex lg:flex-row md:flex-col sm:flex-col flex-col justify-center items-center">
          <img
            className="lg:w-[700px] md:w-full sm:w-full "
            src="event3.jpeg"
          />
          <img
            className="lg:w-[700px] md:w-full sm:w-full "
            src="event4.jpeg"
          />
        </div> */}

        <div className="cardcontainer">
          <img
            className="card lg:w-[50vw] md:w-[100vw] sm:w-full rounded-xl   bg-zinc-100"
            src="jbl.png"
          />
        </div>
        <div className="cardcontainer lg:w-[50vw] md:w-[90vw] sm:w-[90vw] w-[90vw] flex gap-10 justify-center items-center">
          <img
            className="card rounded-xl lg:w-[20vw] md:w-[30vw] sm:w-[30vw] w-[30vw]"
            src="autotrek.png"
          />
          <img
            className="card rounded-xl lg:w-[20vw] md:w-[30vw] sm:w-[30vw] w-[30vw]"
            src="CGSD.png"
          />
        </div>
      </div>
    </div>
  );
}

export default Partners