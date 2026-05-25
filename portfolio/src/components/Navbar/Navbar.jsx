import React, { useState } from 'react'
import {FiMenu,FiX} from 'react-icons/fi'
import {FaGithub,FaLinkedin} from 'react-icons/fa'
const Navbar = () => {

  const [activeSession,setActiveSession] = useState("")
  const [isOpen,setIsOpen] = useState(false)
  const githubUrl = "https://github.com/Sajid-1101"
  const linkedinUrl = "https://www.linkedin.com/in/sajid-saleem-5742433b2/"

  const menuItems = [
    {id:"About" , label:"About"},
    {id:"Experience" , label:"Experience"},
    {id:"Skills" , label:"Skills"},
    {id:"Education" , label:"Education"},
    {id:"Work" , label:"Work"},
    {id:"Contact" , label:"Contact"},
  ]
  const handleItems = (sessionId)=>{
    setActiveSession(sessionId);
    setIsOpen(false);
  }

  const openExternal = (url) => {
    window.location.assign(url);
  }

  return (
    <nav className="bg-amber-900/10 sticky top-0 px-4 sm:px-8 lg:px-20 backdrop-blur-lg z-200" >
      <div className='text-white py-5 flex justify-between items-center gap-4'>
        <a
          href="#About"
          onClick={()=>handleItems("About")}
          className='group text-lg sm:text-xl font-extrabold cursor-pointer shrink-0 tracking-wide transition-all duration-300 hover:-translate-y-0.5'
        >
          <span className='text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-all duration-300 group-hover:text-cyan-300 group-hover:drop-shadow-[0_0_14px_rgba(34,211,238,1)]'>&lt;</span>
          <span className='bg-gradient-to-r from-white via-fuchsia-300 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(168,85,247,0.75)] transition-all duration-300 group-hover:from-cyan-200 group-hover:via-white group-hover:to-fuchsia-400 group-hover:drop-shadow-[0_0_18px_rgba(236,72,153,0.95)]'>
            Sajid
          </span>
          <span className='text-fuchsia-400 drop-shadow-[0_0_8px_rgba(217,70,239,0.85)] transition-all duration-300 group-hover:text-fuchsia-300 group-hover:drop-shadow-[0_0_14px_rgba(217,70,239,1)]'>/</span>
          <span className='bg-gradient-to-r from-purple-400 via-pink-300 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(59,130,246,0.7)] transition-all duration-300 group-hover:from-fuchsia-300 group-hover:via-cyan-200 group-hover:to-white group-hover:drop-shadow-[0_0_18px_rgba(34,211,238,0.95)]'>
            Saleem
          </span>
          <span className='text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-all duration-300 group-hover:text-cyan-300 group-hover:drop-shadow-[0_0_14px_rgba(34,211,238,1)]'>&gt;</span>
        </a>
        <ul className='hidden lg:flex justify-center lg:space-x-10 xl:space-x-16 text-white font-bold text-md'>
          {menuItems.map((item)=>(
            <li key={item.id} className={`cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:text-purple-700 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.9)] ${activeSession === item.id ? "text-purple-700 drop-shadow-[0_0_8px_rgba(168,85,247,0.9)]" : ""}`}>
              <button onClick={()=>handleItems(item.id)}>
                <a href={`#${item.id}`}>{item.label}</a>
              </button>
            </li>
          ))}
        </ul>
        <div className='hidden sm:flex space-x-4'>
          <button type='button'
          onClick={()=>openExternal(githubUrl)}
          aria-label='Open GitHub profile'
          className='transition-all duration-300 hover:-translate-y-0.5 hover:text-purple-700 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.9)]'
          > <FaGithub size={24}/>
          </button>
          <button type='button'
          onClick={()=>openExternal(linkedinUrl)}
          aria-label='Open LinkedIn profile'
          className='transition-all duration-300 hover:-translate-y-0.5 hover:text-purple-700 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.9)]'
          > <FaLinkedin size={24}/>
          </button>
        </div>
        <button
          type='button'
          aria-label='Toggle navigation menu'
          onClick={()=>setIsOpen(!isOpen)}
          className='lg:hidden border border-white/20 rounded-lg p-2 hover:text-purple-700 hover:border-purple-700 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300'
        >
          {isOpen ? <FiX size={24}/> : <FiMenu size={24}/>}
        </button>
      </div>
      {isOpen && (
        <div className='lg:hidden pb-4'>
          <ul className='flex flex-col gap-2 text-white font-bold text-md bg-black/40 border border-white/10 rounded-2xl p-3'>
            {menuItems.map((item)=>(
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={()=>handleItems(item.id)}
                  className={`block rounded-xl px-4 py-3 transition-all duration-300 hover:translate-x-1 hover:bg-purple-700/20 hover:text-purple-700 hover:shadow-lg hover:shadow-purple-500/20 ${activeSession === item.id ? "text-purple-700 bg-purple-700/10 shadow-lg shadow-purple-500/20" : ""}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className='flex gap-4 px-4 py-3 sm:hidden'>
              <button type='button' onClick={()=>openExternal(githubUrl)} aria-label='Open GitHub profile' className='transition-all duration-300 hover:-translate-y-0.5 hover:text-purple-700 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.9)]'>
                <FaGithub size={24}/>
              </button>
              <button type='button' onClick={()=>openExternal(linkedinUrl)} aria-label='Open LinkedIn profile' className='transition-all duration-300 hover:-translate-y-0.5 hover:text-purple-700 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.9)]'>
                <FaLinkedin size={24}/>
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
