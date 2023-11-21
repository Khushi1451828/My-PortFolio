import React from 'react'
import { FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screeen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-8 mt-20'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500 '>Contact</p>
            <div className='flex '><FaPhone size={15} className='mt-5'/>
            <p className='mt-4 ml-2'>9116498223</p>
            </div>
            <p className='py-6'>Submit the form below to get in touch with me</p>
        </div>

        <div className='flex justify-center items-center'>
            <form action='https://getform.io/f/98eff823-ae57-4239-9d79-276059f0314c' method='post' className='flex flex-col w-full md:w-1/2'>
    <input type='text' name="name" placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
    <input type='text' name="email" placeholder='Enter your email' className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
    <textarea name="message" placeholder='Enter your message' rows="10" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
    <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's talk</button>
            </form>
        </div>
      </div>
      <div className='border-t-2 border-gray-500 bg-gray-500 p-2'>
        <p className='text-center'>@ByKhushiSharma-23</p>
      </div>
    </div>
    
  )
}

export default Contact
