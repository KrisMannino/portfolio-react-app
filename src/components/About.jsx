import React from 'react'

const About = () => {
  return (
  <div name='about' className='w-full h-screen' >
      <div className='flex flex-col justify-center items-center w-full h-full'>
          <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8 pl-4'>
              <p className='sm:text-9xl font-bold inline border-b-4' style={{ borderBottomColor: 'var(--bg-900)', color: 'var(--bg-900)'}}>About</p>
            </div>
            
            <div>
            </div>
            
          </div>
          <div className='max-w-[1800px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p className='text-2xl sm:text-6xl font-bold' style={{ color: '#8FFF0A' }}>Hello, I am Kris</p>
            </div>
            <div>
              <p className='sm:text-2xl'>
              I’m a computer science researcher and developer based in Winston-Salem. My work sits at the intersection of machine learning, data systems, and practical software development. I’m currently completing my M.S. in Computer Science at Winston-Salem State University, where I’ve been part of NASA-funded wildfire modeling research focused on analyzing polarimetric UAVSAR data to predict burn severity pre-ignition. A big part of my work involves building data pipelines, running feature engineering workflows, and developing interpretable ML models that help turn complex geospatial and remote sensing data into something decision-makers can actually use.
              </p>
              <br />
              <p className='sm:text-2xl'> 
              I like working across the stack. I’ve built applications in Python, Go, PHP, and Java, and worked with SQL for data transformation and analysis. On the front-end side, I’m developing with frameworks like Angular, React, and Streamlit, building interfaces that stay clean, responsive, and usable. On the operational side, I’ve worked with cloud environments, CI/CD workflows, and collaborative version-controlled development focused on clarity and maintainability.
              </p>
              <br />
              <p className='sm:text-2xl'> 
              I care about building tools that are grounded in real data, have a real audience, and provide meaningful outcomes. Winston-Salem is home to me, and I’m committed to contributing to the tech and research community growing here in the Triad.

              If you want to collaborate, learn more about my work, or build something together, let’s connect.
  
              </p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default About
