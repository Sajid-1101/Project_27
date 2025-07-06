import React from 'react'
import { education } from '../../constants'

const Education = () => {
  return (
    <div id='Education' className='scroll-mt-17 pb-4 flex flex-col items-center mb-16'>
      <h1 className='text-white text-3xl font-bold'>Education</h1>
      <div className='w-36 h-1 bg-purple-700'></div>
      <p className='text-gray-300/50 text-center font-semibold mb-4 p-4'>My education has been a journey of learning and development. Here are the details of my academic background</p>
      <div className=' md:w-[40rem] sm:mx-4 p-4 border border-white rounded-2xl shadow-2xl shadow-purple-300/20'>
        <div className='flex gap-4 mb-4'>
          <div className='p-2 bg-white rounded-2xl'>
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/d/df/Jamia_Millia_Islamia_Logo.svg/1200px-Jamia_Millia_Islamia_Logo.svg.png" alt="" className='w-24 '/>
          </div>
          <div className='text-white'>
            <h1 className='font-bold text-2xl'>B.Tech Computer Engineering</h1>
            <h3 className=' text-gray-300 font-bold text-md'>Jamia Millia Islamia, New Delhi</h3>
            <p className='text-gray-300/50 text-sm'>2023-2027</p>
          </div>
        </div>
        <a href="#">
          <h3 className='text-gray-300 font-medium hover:text-purple-500'>Grade : 8.3 CGPA</h3>
        </a>
          <p className='text-gray-300 text-md'>I am currently pursuing my Bachelor's degree (B.Tech) in Computer Engineering from Jamia Millia Islamia, New Delhi. During my time at Jamia, I have developed a solid foundation in programming, software development, and core computer science concepts. My coursework includes subjects such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I have actively participated in various workshops, hackathons, and technical events, which have helped enhance my practical skills and broadened my understanding of real-world applications. My experience at Jamia Millia Islamia continues to play a crucial role in shaping my technical abilities and professional growth.</p>
      </div>
      <div className='w-2 h-8 bg-gradient-to-t from-black to-purple-500 border-1 shadow-md shadow-purple-500/50'></div>
      <div className=' md:w-[40rem] sm:mx-4 p-4 border border-white rounded-2xl shadow-2xl shadow-purple-300/20'>
        <div className='flex gap-4 mb-4'>
          <div className='p-2 bg-white rounded-2xl'>
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/d/df/Jamia_Millia_Islamia_Logo.svg/1200px-Jamia_Millia_Islamia_Logo.svg.png" alt="" className='w-24 '/>
          </div>
          <div className='text-white'>
            <h1 className='font-bold text-2xl'>Class XII<sup>th</sup> - Syed Abid Hussain Sen. Sec. School</h1>
            <h3 className=' text-gray-300 font-bold text-md'>Jamia Millia Islamia, New Delhi</h3>
            <p className='text-gray-300/50 text-sm'>2021-2022</p>
          </div>
        </div>
        <a href="#">
          <h3 className='text-gray-300 font-medium hover:text-purple-500'>Grade : 8.8%</h3>
        </a>
          <p className='text-gray-300 text-md'>I have completed my Class 12<sup>th</sup> from Syed Abid Hussain Senior Secondary School, affiliated with Jamia Millia Islamia, New Delhi. My academic stream included Physics, Chemistry, Mathematics (PCM), along with Economics. This combination of subjects helped me build a strong analytical and logical foundation, which has been instrumental in shaping my interest in technology and engineering. During this time, I developed a keen interest in problem-solving and logical reasoning, which laid the groundwork for my further studies in computer engineering.</p>
      </div>
      <div className='w-2 h-8 bg-gradient-to-t from-black to-purple-500 border-1 shadow-md shadow-purple-500/50'></div>
      <div className=' md:w-[40rem] sm:mx-4 p-4 border border-white rounded-2xl shadow-2xl shadow-purple-300/20'>
        <div className='flex gap-4 mb-4'>
          <div className='p-2 bg-white rounded-2xl'>
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/95/CBSE_new_logo.svg/1200px-CBSE_new_logo.svg.png" alt="" className='w-24 h-24'/>
          </div>
          <div className='text-white'>
            <h1 className='font-bold text-2xl'>Class X<sup>th</sup>-Govt. Boys Sen. Sec. School</h1>
            <h3 className=' text-gray-300 font-bold text-md'>CBSE Board</h3>
            <p className='text-gray-300/50 text-sm'>2019-2020</p>
          </div>
        </div>
        <a href="#">
          <h3 className='text-gray-300 font-medium hover:text-purple-500'>Grade : 8.0%</h3>
        </a>
          <p className='text-gray-300 text-md'>I have completed my Class 10<sup>th</sup> from Government Boys Senior Secondary School, affiliated with the Central Board of Secondary Education (CBSE). During this phase, I was introduced to a wide range of foundational subjects, including Mathematics, Science, English, and Social Studies, which helped develop my academic discipline and curiosity. This period played a vital role in shaping my interest in analytical thinking and problem-solving, especially in science and mathematics, which eventually guided me toward pursuing a career in engineering.</p>
      </div>
    </div>
  )
}

export default Education