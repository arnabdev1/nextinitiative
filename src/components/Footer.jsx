import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer id="contact" className="py-20 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className='text-xl font-bold mb-4 font-["Neue_Montreal"] text-[#CDEA68]'>About Us</h3>
            <p className='text-white/60 font-["Neue_Montreal"] leading-relaxed mb-4'>
              It&apos;s not how much we give, but how much love we put into giving.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/nextinitiative1/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-2xl text-white/60 hover:text-pink-500 transition-colors duration-300" />
              </a>
              <a href="https://www.facebook.com/nextinitiativebd" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-2xl text-white/60 hover:text-blue-500 transition-colors duration-300" />
              </a>
              <a href="https://www.linkedin.com/company/nextinitiative" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-2xl text-white/60 hover:text-blue-400 transition-colors duration-300" />
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className='text-xl font-bold mb-4 font-["Neue_Montreal"] text-[#CDEA68]'>Donate Now</h3>
            <div className="space-y-3 text-white/60">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#CDEA68]"></div>
                <span>Bkash: +8801922089266</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#CDEA68]"></div>
                <span>Nagad: +8801922089266</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className='text-xl font-bold mb-4 font-["Neue_Montreal"] text-[#CDEA68]'>Contact Us</h3>
            <div className="space-y-3 text-white/60">
              <div className="flex items-center gap-3">
                <IoCall className="text-[#CDEA68] text-lg" />
                <span>+880 1303-923975</span>
              </div>
              <div className="flex items-center gap-3">
                <IoMdMail className="text-[#CDEA68] text-lg" />
                <span>nextinitiative1@gmail.com</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="w-full h-px bg-white/10 mb-8" />
        
        <div className="text-center">
          <p className='text-sm font-["Neue_Montreal"] text-white/40'>
            © 2026 Next Initiative Foundation. All rights reserved.
          </p>
          <p className='text-sm font-["Neue_Montreal"] text-white/40 mt-2'>
            Designed and Developed by <span className="text-[#CDEA68]">Arnab Dev</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
