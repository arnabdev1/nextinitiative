import React from 'react'
import { motion } from 'framer-motion'

function Navbar() {
  const redirectToWebsite = (website) => {
    window.open(website, '_blank');
  };
  return (
    <div  className='bg-black  container mx-auto px-20 py-8 font-["Neue_Montreal"] flex justify-between items-center' >
        <div className='logo'>
            <img width="400" height="200" fill="none" src="logo3.webp"/>
        </div>
					
        <div  className=' flex gap-10 flex-wrap'>
            <a href="https://www.facebook.com/nextinitiativebd" target="_blank"><button className='text-lg font-light'>About Us</button></a>
            <a href="https://www.facebook.com/nextinitiativebd/events" target="_blank"><button className='text-lg font-light'>Our Work</button></a>
            <a href="https://forms.gle/uKMd3XEuauNv2vJDA" target="_blank"><button className='text-lg font-light'>Join us</button></a>
            <a href="https://www.facebook.com/messages/t/104462571360723/" target="_blank"><button className='text-lg font-light'>Contact</button></a>
        </div>
    </div>
  )
}

export default Navbar
