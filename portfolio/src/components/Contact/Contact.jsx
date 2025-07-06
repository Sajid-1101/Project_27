import React, { useState } from 'react'
import emailjs from 'emailjs-com';
import Loader from '../Loader';
const Contact = () => {
  const [loading,setLoading]=useState(false);
const sendEmail = (e) => {
  e.preventDefault();
  setLoading(true);

  emailjs
    .sendForm(
      'service_q0g68zd',
      'template_37n0g5a',
      e.target,
      'z4fnNc5-_2Z6zKNQm'
    )
    .then(
      (result) => {
        console.log(result.text);
        alert('Email sent successfully!');
        setLoading(false); // ✅ moved here
      },
      (error) => {
        console.log(error.text);
        alert('Something went wrong!');
        setLoading(false); // ✅ also here
      }
    );
};

  return (
    <div id='Contact' className='scroll-smooth scroll-mt-15 flex flex-col items-center text-white mb-16 z-3'>
      <h1 className='font-bold text-3xl'>Contact</h1>
      <div className='w-28 h-1 bg-purple-700'></div>
      <p className='text-gray-300/50 font-semibold p-4 mb-4'>
        I'd love to hear from you - reach out for any opportunities or questions!
      </p>
      <div className='border shadow-2xl shadow-purple-500/50 rounded-2xl p-8 flex flex-col items-center md:w-[30rem] sm:mx-32 relative'>
      {loading && <Loader/>}
      <h3 className='font-semibold text-2xl mb-4 px-8'>Connect with me 🚀</h3>
      <form onSubmit={sendEmail}>
        <input required type="text" name='name' placeholder='Your Email' className='p-4 w-full focus:outline-none bg-gradient-to-t from-black to-purple-900/20 rounded-2xl shadow-2xl shadow-purple-500/10 mb-4'/>
        <input required type="text" name='email' placeholder='Your Name' className='p-4 w-full focus:outline-none bg-gradient-to-t from-black to-purple-900/20 rounded-2xl shadow-2xl shadow-purple-500/10 mb-4'/>
        <input required type="text" placeholder='Subject' name='title' className='p-4 w-full focus:outline-none bg-gradient-to-t from-black to-purple-900/20 rounded-2xl shadow-2xl shadow-purple-500/10 mb-4'/>
        <textarea required type="text" name='message' placeholder='Description' cols={30} rows={5} className='p-4 w-full focus:outline-none bg-gradient-to-t from-black to-purple-900/20 rounded-2xl shadow-2xl shadow-purple-500/10 mb-4'/>
        <button className='p-4 w-full focus:outline-none bg-gradient-to-r from-pink-600 to-purple-500 rounded-2xl shadow-2xl shadow-purple-500/10 mb-4 font-semibold text-lg hover:from-pink-500 hover:to-purple-400'>Send <span className='text-2xl'>→</span></button>
      </form>
      </div>
    </div>
  )
}

export default Contact