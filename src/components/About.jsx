import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#474787] text-[#AAABB8]'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
          <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8 pl-4'>
              <p className='text-4xl font-bold inline border-b-4 border-[#3a98a5]'>About</p>
            </div>
            
            <div>
            </div>
            
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hello, I am Kris. Have  a look at my site!</p>
            </div>
            <div>
              <p>
                I am a senior at <a href="wssu.edu">WSSU</a> with full-stack development skills. I am minoring in data science and am always expanding my knowledge in development by learnig different languages, frameworks, and system designs.
              </p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default About