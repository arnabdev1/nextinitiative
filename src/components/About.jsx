import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className='text-4xl md:text-6xl font-bold font-["Neue_Montreal"] text-white mb-6'>
            Who We Are
          </h2>
          <div className="w-20 h-1 bg-[#CDEA68] mx-auto mb-8" />
          <p className='text-lg md:text-xl text-white/70 font-["Neue_Montreal"] max-w-3xl mx-auto leading-relaxed'>
            Next Initiative Foundation is a student-driven non-profit organization 
            committed to making a tangible difference in our community through food drives, 
            educational programs, and sustainable development initiatives.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-8 mb-20"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/[0.07] transition-colors duration-300">
            <div className="w-12 h-12 bg-[#CDEA68]/20 rounded-lg flex items-center justify-center mb-6">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className='text-2xl font-bold font-["Neue_Montreal"] text-white mb-4'>Our Mission</h3>
            <p className='text-white/70 font-["Neue_Montreal"] leading-relaxed'>
              To empower communities through sustainable initiatives that address immediate needs 
              while building long-term solutions for education, nutrition, and development.
            </p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/[0.07] transition-colors duration-300">
            <div className="w-12 h-12 bg-[#CDEA68]/20 rounded-lg flex items-center justify-center mb-6">
              <span className="text-2xl">💝</span>
            </div>
            <h3 className='text-2xl font-bold font-["Neue_Montreal"] text-white mb-4'>Support Us</h3>
            <p className='text-white/70 font-["Neue_Montreal"] leading-relaxed mb-4'>
              Your donation helps us feed another hungry soul and provide educational resources 
              to those who need it most. Every contribution makes a difference.
            </p>
            <a href="https://forms.gle/uKMd3XEuauNv2vJDA" target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='px-6 py-3 bg-[#CDEA68] text-black text-sm font-semibold rounded-full hover:bg-white transition-colors duration-300 font-["Neue_Montreal"]'
              >
                Donate Now
              </motion.button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
