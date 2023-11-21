import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>
        <div className='hidden sm:mt-10 sm:block'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>
        <p className='text-xl mt-40'>
        Hello! I'm Khushi Sharma, a passionate full-stack web developer with a strong desire to create exceptional digital experiences. With a background in B. Tech(CSE Bracnch).
 My journey in web development has equipped me with proficiency in a variety of technologies and tools, including:<br/>

Front-End: HTML, CSS, JavaScript, React ,<br/>
Back-End: Node.js, Express ,<br/>
Databases:  MongoDB ,<br/>
Version Control: Git/GitHub
</p>
        <br/>
    <p className='text-xl'>
    I am currently actively seeking job opportunities to contribute to exciting projects and work with teams.

Let's connect and discuss how I can bring my expertise to your next web development project. I'm excited to be part of your journey in creating web solutions that make a difference.

    </p>
      </div>
    </div>
  )
}

export default About
