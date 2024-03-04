import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
const Hero = () => {
  return (
    <div name='hero' className='w-full h-screen bg-[#474787]'>

      {/* HeroDiv */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#AD5E99]'>Hello, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#3a98a5]'>Kris Mannino</h1>
        <h2 className='text-2xl sm:text-5xl font-bold text-[#AD5E99]'>Computer Science student at <a href="wssu.edu">Winston-Salem State University</a></h2>
        <p className='py-4 max-w-[700px] text-[#AAABB8]'>I am currently pursuing my Masters degree in Computer Science, working as a research assitant in the <a href="https://www.wssu.edu/academics/colleges-and-departments/college-of-arts-sciences-business-education/center-for-applied-data-science/index.html">Center for Applied Data Science</a>, and I'm an all around pretty cool guy.</p>
        <div>
          <button className='rounded-full text-[#ECECEC] border-2 px-6 py-3 my-2 flex items-center hover:bg-[#3a98a5] hover:border-[#3a98a5]'>
            View work 
            <span className='hover:animate-spin'>
            <HiArrowNarrowRight className='ml-4 animate-bounce'/>
            </span>
          </button>
      </div>
      </div>


    </div>
  )
}

export default Hero