import React from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Skill from './components/Skill'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="w-full min-h-screen flex flex-col font-openSans">
      <AnimatePresence mode="wait">
        {/* Navbar and Hero in the same stacking context */}
        <div className="relative w-full min-h-screen flex flex-col">
          <Navbar />
          <Hero />
        </div>
        {/* Other sections */}
        <div id="about" className="relative z-10 pt-[88px]">
          <About />
        </div>
        <div id="education" className="relative z-10 pt-[88px]">
          <Education />
        </div>
        <div id="skill" className="relative z-10 pt-[88px]">
          <Skill />
        </div>
        <div id="contact" className="relative z-10 pt-[88px]">
          <Contact />
        </div>
        <Footer />
      </AnimatePresence>
    </div>
  )
}

export default App
