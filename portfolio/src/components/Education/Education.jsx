import React from 'react'

const jmiLogo = 'https://upload.wikimedia.org/wikipedia/en/d/df/Jamia_Millia_Islamia_Logo.svg'
const cbseLogo = 'https://upload.wikimedia.org/wikipedia/en/9/95/CBSE_new_logo.svg'

const educationItems = [
  {
    title: 'B.Tech Computer Engineering',
    school: 'Jamia Millia Islamia, New Delhi',
    date: '2023-2027',
    grade: '8.3 CGPA',
    logo: jmiLogo,
    alt: 'Jamia Millia Islamia logo',
    description: 'Focused on core computer science, software development, data structures, databases, web development, and engineering fundamentals.',
  },
  {
    title: 'Class XII - Syed Abid Hussain Sen. Sec. School',
    school: 'Jamia Millia Islamia, New Delhi',
    date: '2021-2022',
    grade: '8.8%',
    logo: jmiLogo,
    alt: 'Jamia Millia Islamia logo',
    description: 'Completed PCM with Economics, strengthening analytical thinking, problem solving, and engineering foundations.',
  },
  {
    title: 'Class X - Govt. Boys Sen. Sec. School',
    school: 'CBSE Board',
    date: '2019-2020',
    grade: '8.0%',
    logo: cbseLogo,
    alt: 'CBSE logo',
    description: 'Built a strong academic base in mathematics, science, English, and social studies under the CBSE curriculum.',
  },
]

const Education = () => {
  return (
    <div id='Education' className='scroll-mt-17 flex flex-col items-center mb-16 px-4 sm:px-8 lg:px-20'>
      <h1 className='text-white text-3xl font-bold'>Education</h1>
      <div className='w-36 h-1 bg-purple-700'></div>
      <p className='text-gray-300/50 text-center font-semibold mb-4 p-3'>
        A concise view of my academic background and technical foundation.
      </p>

      <div className='w-full max-w-[42rem] space-y-3'>
        {educationItems.map((item) => (
          <div key={item.title} className='p-4 border border-white rounded-2xl shadow-xl shadow-purple-300/15 transition-all duration-300 hover:border-purple-500 hover:shadow-purple-500/25'>
            <div className='flex flex-col gap-4 sm:flex-row sm:items-center'>
              <div className='mx-auto flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-white p-2 sm:mx-0'>
                <img src={item.logo} alt={item.alt} className='h-16 w-16 object-contain'/>
              </div>
              <div className='text-center text-white sm:text-left'>
                <h2 className='font-bold text-xl'>{item.title}</h2>
                <h3 className='text-gray-300 font-bold text-sm'>{item.school}</h3>
                <p className='text-gray-300/50 text-sm'>{item.date}</p>
                <p className='mt-1 text-gray-300 font-medium'>Grade: {item.grade}</p>
              </div>
            </div>
            <p className='mt-3 text-sm leading-6 text-gray-300 sm:text-base'>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Education
