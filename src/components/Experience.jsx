import React from 'react'
import html from '../assets/html-5.png'
import css from '../assets/css.jpeg'
import js from '../assets/js.jpeg'
import tailwind from '../assets/tailwind.jpeg'
import bootstrap from '../assets/bootstrap.jpeg'
import react from '../assets/react.jpeg'
import git from '../assets/github.jpeg'
import express from '../assets/express.jpeg'
import jquery from '../assets/jquery.jpeg'
import mongo from '../assets/mongo.jpeg'
const Experience = () => {
    const techs=[
        {
            id:1,
            src:html,
            title:'HTML',
            style:'shadow-orange-500'
        },
        {
            id:2,
            src:css,
            title:'CSS',
            style:'shadow-blue-500'
        },
        {
            id:3,
            src:js,
            title:'JS',
            style:'shadow-yellow-500'
        },
        {
            id:4,
            src:tailwind,
            title:'Tailwind CSS',
            style:'shadow-white'
        },
        {
            id:5,
            src:bootstrap,
            title:'Bootstrap',
            style:'shadow-purple-500'
        },
        {
            id:6,
            src:react,
            title:'React JS',
            style:'shadow-blue-500'
        },
        {
            id:7,
            src:git,
            title:'Github',
            style:'shadow-white'
        },
        {
            id:8,
            src:express,
            title:'Express JS',
            style:'shadow-gray-700'
        },
        {
            id:9,
            src:jquery,
            title:'JQuery',
            style:'shadow-blue-500'
        },
        {
            id:10,
            src:mongo,
            title:'Mongo DB',
            style:'shadow-green-500'
        },
    ]
  return (
    <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
       <div className='pt-40 mt-10 mb-10'>
       <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
        <p className='py-6'>These are the technologies I've worked with</p>
       </div> 
        <div className='w-full grid grid-cols-2  sm:grid-cols-5 gap-8 text-center py-8 px-12 sm:px-0'>

        {
            techs.map(({id,src,title,style})=>(
                <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                <img alt="" src={src} className='w-20 mx-auto'/>
                <p className='mt-4'>{title}</p>
            </div>
            ))
        }

        </div>
      </div>
    </div>
  )
}

export default Experience
