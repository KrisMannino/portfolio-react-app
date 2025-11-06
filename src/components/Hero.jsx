import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import Headshot from '../assets/KrisWebProfile.png'
import {Link} from 'react-scroll'

const Hero = () => {
  return (
    <div name='hero' className='w-full h-screen bg-[#474787]'>

      {/* HeroDiv */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
  <p className='text-[#AD5E99]'>Hello, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#3a98a5]'>Kris Mannino</h1>
  <h2 className='text-2xl sm:text-5xl font-bold text-[#AD5E99] md:mr-[30%]'>Computer Science student at <a href="https://wssu.edu" target="_blank" rel="noopener noreferrer">Winston-Salem State University</a></h2>
        
        {/* Image Headshot */}
  {/* <img className='max-w-[25%] absolute right-0 mr-12 rounded-full border-4 shadow-lg shadow-[#3a98a5] border-[#3a98a5] bg-[#7DF9FF] gradient-border hidden md:block' src={Headshot} alt="Kris&#39; Headshot" /> */}
        
  <img className='max-w-[25%] absolute right-0 mr-12 rounded-full border-4 shadow-lg shadow-[#3a98a5] border-[#3a98a5] bg-[#7DF9FF] gradient-border hidden md:block' src={Headshot} alt={"Kris&apos; Headshot"} />
  {/* <img className='w-24 h-32 absolute top-24 left-3/4 transform -translate-x-1/2 rounded-full border-4 shadow-lg shadow-[#3a98a5] border-[#3a98a5] bg-[#7DF9FF] gradient-border block md:hidden' src={Headshot} alt="Kris&#39; Headshot" /> */}

  <p className='py-4 max-w-[700px] text-[#AAABB8] md:mr-[30%]' >I am currently pursuing my Masters degree in Computer Science, working as a research assistant in the <a href="https://www.wssu.edu/academics/colleges-and-departments/college-of-arts-sciences-business-education/center-for-applied-data-science/index.html" target="_blank" rel="noopener noreferrer">Center for Applied Data Science</a>, and I&#39;m an all around pretty cool guy.</p>
        <div>
          <Link to="work" smooth={true} duration={500}>
          <button className='rounded-full text-[#ECECEC] border-2 px-6 py-3 my-2 flex items-center hover:bg-[#3a98a5] hover:border-[#3a98a5]'>
            View work 
            <span className='hover:animate-spin'>
            <HiArrowNarrowRight className='ml-4 animate-bounce hidden md:block'/>
            </span>
          </button>
          </Link>
      </div>
  
        </div>

 


    </div>
  )
}

export default Hero