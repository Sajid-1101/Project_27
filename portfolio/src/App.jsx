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
    <div className='site-glow-bg bg-[#050414]'>
      <div className='relative z-1 pt-24'>
        <Navbar/>
        <About/>
        <Experience/>
        <Education/>
        <Skills/>
        <Work/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
