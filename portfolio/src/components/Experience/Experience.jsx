import React from 'react'

const Experience = () => {
  return (
    <div id='Experience' className='scroll-smooth scroll-mt-20 flex flex-col items-center mb-16 px-4 sm:px-8 lg:px-20'>
      <h1 className='text-white text-3xl font-bold'>Experience</h1>
      <div className='w-36 h-1 bg-purple-700'></div>
      <p className='text-gray-300/50 text-center font-semibold mb-4 p-4'>
        A brief highlight of my practical work and learning experience.
      </p>
      <div className='w-full max-w-[40rem] p-4 border border-white rounded-2xl shadow-2xl shadow-purple-300/20 hover:shadow-purple-500/30 transition-all duration-300'>
        <div className='flex flex-col sm:flex-row gap-4 mb-4'>
          <div className='w-36 h-20 rounded-2xl bg-white border border-purple-400/50 flex items-center justify-center p-3 shadow-lg shadow-purple-500/20'>
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/0/02/Sopra_Steria_logo.svg'
              alt='Sopra Steria logo'
              className='w-full h-full object-contain'
            />
          </div>
          <div className='text-white'>
            <h1 className='font-bold text-2xl'>AI/ML Intern</h1>
            <h3 className='text-gray-300 font-bold text-md'>Sopra Steria</h3>
            <p className='text-gray-300/50 text-sm'>Internship</p>
          </div>
        </div>
        <h3 className='text-gray-300 font-medium mb-2'>
          Role: AI/ML Intern
        </h3>
        <p className='text-gray-300 text-md leading-relaxed'>
          Engineered an Agentic AI chatbot by orchestrating specialized Knowledge, Policy, and Conversational agents to improve response quality and contextual understanding. Enhanced reliability through hallucination reduction mechanisms, agent coordination, and policy-based validation while optimizing end-to-end conversational workflows.

        </p>
      </div>
    </div>
  )
}

export default Experience
