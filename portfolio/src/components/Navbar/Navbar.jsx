import React, { useEffect, useState } from 'react'
import {FiMenu,FiX} from 'react-icons/fi'
import {FaGithub,FaLinkedin} from 'react-icons/fa'
const Navbar = () => {

  const [activeSession,setActiveSession] = useState("")

  const menuItems = [
    {id:"About" , label:"About"},
    {id:"Skills" , label:"Skills"},
    {id:"Education" , label:"Education"},
    {id:"Work" , label:"Work"},
    {id:"Contact" , label:"Contact"},
  ]
  const handleItems = (sessionId)=>{
    setActiveSession(sessionId);
  }
  return (
    <nav className="bg-amber-900/10 sticky top-0 sm:px-12 md:px-10 lg:px-20 backdrop-blur-lg z-200" >
      <div className='text-white py-5 flex justify-between items-center'>
        <div className='text-lg font-bold cursor-pointer'>
          <span className='text-purple-700'>&lt;</span>
          <span className='text-white'>Sajid</span>
          <span className='text-purple-700'>/</span>
          <span className='text-white'>Saleem</span>
          <span className='text-purple-700'>&gt;</span>
        </div>
        <ul className='flex justify-center md:space-x-16 sm:space-x-4 text-white font-bold text-md'>
          {menuItems.map((item)=>(
            <li key={item.id} className={`cursor-pointer  hover:text-purple-700 ${activeSession === item.id ? "text-purple-700" : ""}`}>
              <button onClick={()=>handleItems(item.id)}>
                <a href={`#${item.id}`}>{item.label}</a>
              </button>
            </li>
          ))}
        </ul>
        <div className='flex space-x-4'>
          <a href="https://github.com/Sajid-1101"
          target='_blank'
          rel='noopener noreferrer'
          className=' hover:text-purple-700'
          > <FaGithub size={24}/>
          </a>
          <a href="#"
          // target='_blank'
          rel='noopener noreferrer'
          className=' hover:text-purple-700'
          > <FaLinkedin size={24}/>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar