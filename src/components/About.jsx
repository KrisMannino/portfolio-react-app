import React from 'react'

const About = () => {
  return (
  <div name='about' className='w-full h-screen' style={{ backgroundColor: 'var(--page-bg)', color: 'var(--text-muted)' }}>
      <div className='flex flex-col justify-center items-center w-full h-full'>
          <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8 pl-4'>
              <p className='text-4xl font-bold inline border-b-4' style={{ borderBottomColor: 'var(--bg-900)', color: 'var(--bg-900)'}}>About</p>
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
                Curious and driven computer science professional with a strong foundation in both front-end and back-end development. Experienced in working with diverse teams on open-source projects, data science research, and industry internships. Adept at problem-solving and committed to continuous learning. Seeking opportunities to contribute to innovative projects and further develop my skills in a real-world working environment.
              </p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default About
