import React from 'react'

function Anniv() {
  return (
    <div className='events w-full pt-10 bg-[#7a180f] rounded-[20px]'>
        <div className='align-center items-center justify-center flex w-full px-10'>
            <h1 className='text-5xl font-["Neue_Montreal"] font-bold tracking-tight'>3 years of NIF!</h1>    
        </div> 
        <div className='px-20 py-10  flex flex-wrap w-full gap-5  justify-center mt-10  bg-[#000000] rounded-[20px]'>
            <div className='flex flex-col gap-20 justify-around items-center'>
              <div className='w-screen h-[50vw] px-20' >
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/191_R0QLCcM?si=YvyP72oz6Fe1Vj_K"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
              <div className='w-full h-[45vw] px-20' >
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/MieCHagfIJw?si=9xAmle24ENpLzSxN"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
            </div>
        </div>  
    </div>
  )
}

export default Anniv