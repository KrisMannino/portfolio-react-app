import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import Headshot from '../assets/Graduate_Profile_Session_20250912_kris_mannino_NO_GLASSES_500x500 copy.png'
import {Link} from 'react-scroll'

const Hero = () => {
  return (
    <div name='hero' className='w-full h-screen' style={{ backgroundColor: 'var(--page-bg)' }}>

      {/* HeroDiv */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
  <p className='text-muted'>Hello, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold' style={{ color: 'var(--bg-900)' }}>Kris Mannino</h1>
        <h2 className='text-2xl sm:text-5xl font-bold md:mr-[30%]' style={{ color: '#8FFF0A' }}>Computer Science student at <a href="https://wssu.edu" target="_blank" rel="noopener noreferrer">Winston-Salem State University</a></h2>

        {/* Image Headshot */}
        {/* <img className='max-w-[25%] absolute right-0 mr-12 rounded-full border-4 shadow-lg shadow-[#374054] border-[#3a98a5] bg-[#374054] gradient-border hidden md:block' src={Headshot} alt="Kris' Headshot" /> */}
        <img
          className='max-w-[25%] absolute right-0 mr-12 rounded-full border-4 shadow-lg gradient-border hidden md:block'
          src={Headshot}
          alt="Kris' Headshot"
          style={{ boxShadow: '0 10px 15px -3px var(--blue)', borderColor: 'var(--blue)', backgroundColor: '#374054' }}
        />

  <p className='py-4 max-w-[700px] md:mr-[30%]' style={{ color: 'var(--text-muted)' }}>
          I am currently pursuing my Masters degree in Computer Science, working as a research assistant in the <a href="https://www.wssu.edu/academics/colleges-and-departments/college-of-arts-sciences-business-education/center-for-applied-data-science/index.html" target="_blank" rel="noopener noreferrer">Center for Applied Data Science</a>, and I&#39;m an all around pretty cool guy.
        </p>

        <div>
          <Link to="work" smooth={true} duration={500}>
            <button
              className='rounded-full text-primary border-2 px-6 py-3 my-2 flex items-center'
              style={{ borderColor: 'var(--blue)' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--blue)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              View work
              <span className='hover:animate-spin'>
                <HiArrowNarrowRight className='ml-4 animate-bounce hidden md:block' />
              </span>
            </button>
          </Link>
        </div>

      </div>

    </div>
  )
}

export default Hero