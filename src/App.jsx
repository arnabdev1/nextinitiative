import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Events from './components/Events'
import Partners from './components/Partners'
import Anniv from './components/Anniv'
import Footer from './components/Footer'


function App() {
  return (
    <div className='w-full min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white overflow-x-hidden'>
      <Navbar/>
      <LandingPage/>
      <About/>
      <Anniv/>
      <Eyes/>
      <Events/>
      <Marquee/>
      <Partners/>
      <Footer/>
    </div>
  )
}

export default App
