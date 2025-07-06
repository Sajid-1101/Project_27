import React, { useState } from 'react'

const Footer = () => {
  const [activeSection,setActiveSection] = useState('');
  const handleSection = (e)=>{
    setActiveSection(e);
  }
    return (
    <div className='flex flex-col items-center'>
      <h1 className=' text-purple-500 text-2xl font-semibold mb-4'>Sajid Saleem</h1>
      <div className='flex justify-center items-center gap-4 h-[5rem] bg-gradient-to-t from-black to-purple-700/50 w-full flex-wrap'>
        {['About','Education','Skills','Work','Contact'].map((e,i)=>(
          <a href={`#${e}`}>
            <h4 key={i} onClick={()=>handleSection(e)} className={` cursor-pointer font-semibold ${activeSection == e?'text-purple-700':'text-white'}`} >{e}</h4>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Footer