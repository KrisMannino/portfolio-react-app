import React from 'react';
import cADSPoster from '../assets/CADSposter.png'
import CADSXLPoster from '../assets/CADS_Poster.jpeg'

const Achievements = () => {
  return (
    <div name='achievements' className='w-full h-screen mx-auto bg-[#474787] text-[#AAABB8] pt-20'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='p-4'>
          <p className='text-4xl font-bold inline border-b-4 border-[#3a98a5]'>Achievements</p>
          <p className='py-4'>Here are some other things I have done</p>
        </div>

        <div className='w-full grid grid-cols-3 gap-4 text-center py-8'>
          {/* First Item */}
          <div className='col-span-2 text-left flex flex-col justify-center'>
            <h3 className='text-[#7DF9FF] text-4xl font-bold'>Scholarship Day | Poster competition</h3>
            <p className='mt-2'>Awarded Third Place for the non-Biological Sciences category in the Poster competition on Scholarship day at <a href="wssu.edu">WSSU</a>, Spring 2023.</p>
          </div>
          <div className='flex justify-center items-center mb-8'>
            <a href={CADSXLPoster}><img className='w-auto h-auto shadow-md shadow-[#00A7E1] hover:scale-110 duration-500' src={cADSPoster} alt="CADS Poster" /></a>
          </div>

          {/* Second Item */}
          <div className='col-span-2 text-left flex flex-col justify-center'>
            <h3 className='text-[#7DF9FF] text-4xl font-bold'>Coming Soon...</h3>
            <p className='mt-2'>Click back in to see more of my awards, certifications, and other happenings</p>
          </div>
          <div className='flex justify-center items-center mb-8'>
          <div className='hidden md:block w-auto h-auto shadow-md shadow-[#00A7E1] hover:scale-110 duration-500 loader'></div>
          </div>

  
        </div>
      </div>
    </div>
  );
};

export default Achievements;
