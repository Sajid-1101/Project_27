import { useState } from 'react'
import './App.css'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Education from './components/Education/Education'
import Skills from './components/Skills/Skills'
import Experience from './components/Experience/Experience'
import Footer from './components/Footer/Footer'
import Work from './components/Work/Work'
import Navbar from './components/Navbar/Navbar'
function App() {

  return (
    <div className='bg-[#050414]'>
      <div className='relative pt-10'>
        <Navbar/>
        <About/>
        <Education/>
        <Skills/>
        <Work/>
        {/* <Experience/> */}
        <Contact/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
