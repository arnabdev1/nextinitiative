import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Events from './components/Events'
import Partners from './components/Partners'
import LocomotiveScroll from 'locomotive-scroll';


function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full min-h-screen bg-black text-white'>
      <Navbar/>
      <LandingPage/>
      <About/>
      <Eyes/>
      <Events/>
      <Marquee/>
      <Partners/>
    </div>
  )
}

export default App
