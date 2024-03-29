import React from 'react'

import HTML from '../assets/html5_icon.png'
import JavaScript from '../assets/js_icon.png'
import Java from '../assets/java_icon.png'
import Python from '../assets/python_icon.png'
import Github from '../assets/github_icon.png'
import ReactImg from '../assets/react_icon.png'
import Pandas from '../assets/pandas_icon.png'
import Mongo from '../assets/mongodb_icon.png'


const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen mx-auto bg-[#474787] text-[#AAABB8] pt-20'>
        

        {/**Container div */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center items-center'>
        <div className='p-4'>
          <p className='text-4xl font-bold inline border-b-4 border-[#3a98a5] '>Skills</p>
          <p className='py-4 '>Some of the technologies I have worked with</p>
        </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#EB4E20] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#ECD63F] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={JavaScript} alt="JavaScript icon" />
                <p className='my-4'>JavaScript</p>
              </div>
              <div className='shadow-md shadow-[#F48518] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Java} alt="Java icon" />
                <p className='my-4'>Java</p>
              </div>
              <div className='shadow-md shadow-[#FEC019] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Python} alt="python icon" />
                <p className='my-4'>python</p>
              </div>
              <div className='shadow-md shadow-[#1F7629] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Github} alt="Github icon" />
                <p className='my-4'>Github</p>
              </div>
              <div className='shadow-md shadow-[#53D2FA] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={ReactImg} alt="React icon" />
                <p className='my-4'>React.js</p>
              </div>
              <div className='shadow-md shadow-[#DE0077] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Pandas} alt="Pandas icon" />
                <p className='my-4'>Pandas</p>
              </div>
              <div className='shadow-md shadow-[#429E32] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Mongo} alt="MongoDB icon" />
                <p className='my-4'>MongoDB</p>
              </div>

            </div>
        </div>


    </div>
  );
};

export default Skills