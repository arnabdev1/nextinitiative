import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Events from './components/Events'
import Partners from './components/Partners'

function App() {
  return (
    <div className='w-full min-h-screen bg-black text-white'>
      <Navbar/>
      <LandingPage/>
      <Marquee/>
      <About/>
      <Eyes/>
      <Events/>
      <Partners/>
    </div>
  )
}

export default App
