import React, { useState } from 'react'
import emailjs from 'emailjs-com';
import Loader from '../Loader';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    const templateParams = {
      name: formData.name,
      from_name: formData.name,
      user_name: formData.name,
      email: formData.email,
      from_email: formData.email,
      user_email: formData.email,
      reply_to: formData.email,
      title: formData.title,
      subject: formData.title,
      message: formData.message,
    };

    emailjs
      .send(
        'service_q0g68zd',
        'template_37n0g5a',
        templateParams,
        'z4fnNc5-_2Z6zKNQm'
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus('Message sent successfully.');
          setFormData({
            name: '',
            email: '',
            title: '',
            message: '',
          });
          setLoading(false);
        },
        (error) => {
          console.error('EmailJS error:', error);
          setStatus(`Message could not be sent. ${error?.text || 'Please check EmailJS service, template, and public key settings.'}`);
          setLoading(false);
        }
      );
  };

  return (
    <div id='Contact' className='scroll-smooth scroll-mt-15 flex flex-col items-center text-white mb-16 z-3 px-4 sm:px-8 lg:px-20'>
      <h1 className='font-bold text-3xl'>Contact</h1>
      <div className='w-28 h-1 bg-purple-700'></div>
      <p className='text-gray-300/50 font-semibold p-4 mb-4 text-center'>
        I'd love to hear from you - reach out for any opportunities or questions!
      </p>
      <div className='border shadow-2xl shadow-purple-500/50 rounded-2xl p-8 flex flex-col items-center md:w-[30rem] sm:mx-32 relative'>
        {loading && <Loader/>}
        <h3 className='font-semibold text-2xl mb-4 px-8'>Connect with me</h3>
        <form onSubmit={sendEmail} className='w-full'>
          <input required type="text" name='name' value={formData.name} onChange={handleChange} placeholder='Your Name' className='p-4 w-full focus:outline-none bg-gradient-to-t from-black to-purple-900/20 rounded-2xl shadow-2xl shadow-purple-500/10 mb-4'/>
          <input required type="email" name='email' value={formData.email} onChange={handleChange} placeholder='Your Email' className='p-4 w-full focus:outline-none bg-gradient-to-t from-black to-purple-900/20 rounded-2xl shadow-2xl shadow-purple-500/10 mb-4'/>
          <input required type="text" placeholder='Subject' name='title' value={formData.title} onChange={handleChange} className='p-4 w-full focus:outline-none bg-gradient-to-t from-black to-purple-900/20 rounded-2xl shadow-2xl shadow-purple-500/10 mb-4'/>
          <textarea required name='message' value={formData.message} onChange={handleChange} placeholder='Description' cols={30} rows={5} className='p-4 w-full focus:outline-none bg-gradient-to-t from-black to-purple-900/20 rounded-2xl shadow-2xl shadow-purple-500/10 mb-4'/>
          <button disabled={loading} className='p-4 w-full focus:outline-none bg-gradient-to-r from-pink-600 to-purple-500 rounded-2xl shadow-2xl shadow-purple-500/10 mb-4 font-semibold text-lg hover:from-pink-500 hover:to-purple-400 disabled:opacity-60 disabled:cursor-not-allowed'>
            {loading ? 'Sending...' : 'Send Message'}
          </button>
          {status && <p className='text-center text-sm text-gray-300'>{status}</p>}
        </form>
      </div>
    </div>
  )
}

export default Contact
