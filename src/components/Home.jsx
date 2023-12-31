import React from 'react';
import resume_pic from '../assets/resume_pic.jpg'
import {MdKeyboardArrowRight} from 'react-icons/md';
import {Link} from 'react-scroll'
const Home = () => {
  return (
    <div name="home" className=" h-screen w-full text-white bg-gradient-to-b from-black via-black to-gray-800">
    <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="mr-10 flex flex-col justify-center h-full">
            <h2 className='mt-40 text-4xl sm:text-7xl font-bold text-white'>
               I'm a Full Stack Developer 
            </h2>
            <p className='text-gray-500 py-4 max-w-md'>
                I love to work on web application using technologies like React,Next Js and html css
            </p>
            <div>
                <Link to="portfolio" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-400 to-blue-500 cursor-pointer'>
                    PortFolio
                        <span className='group-hover:rotate-90 duration-300'>
                        <MdKeyboardArrowRight size={25} className='ml-1'/>
                        </span>
                    
                </Link>
            </div>
        </div>
        <div>
            <img src={resume_pic} alt="my profile" className=" Hero-img rounded-2xl mx-auto md:w-full h-full"/>
        </div>
    </div>
    </div>
  )
}

export default Home
