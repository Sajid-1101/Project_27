import React from 'react'
import { SkillsInfo } from '../../constants'
const Skills = () => {
  return (
    <div id='Skills' className='scroll-smooth scroll-mt-16 text-center text-white mb-16'>
      <h2 className='font-bold text-3xl'>Skills</h2>
      <div className='h-1 w-24 bg-purple-700 mx-auto'></div>
      <p className='mb-4 p-2 text-gray-300/50 font-semibold'>A collection of my technical skills and expertise honed through various projects and experiences</p>
      <div className=' flex justify-center  flex-wrap gap-8 '>
        {SkillsInfo.map((si,i)=>(
        <div key={i} className='border-2 border-purple-500 shadow-lg shadow-purple-500/50 rounded-2xl min-h-70 max-h-120 min-w-60 max-w-160 hover:bg-purple-50/10  transition-colors duration-200' >
          <h1 className='font-bold mt-4 text-2xl text-shadow-lg text-shadow-amber-50/15'>{si.title}</h1>
          <div className='flex flex-wrap'>
            {si.skills.map((s,idx)=>(
              <div key={idx} className='m-4 border rounded-2xl p-2 border-gray-300/10'>
              <span className='font-semibold text-white text-shadow-lg text-shadow-amber-50/10 text-sm'>{s.name}</span>
              <img src={s.logo} alt="" className='h-10'/>
              </div>
            ))}
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default Skills