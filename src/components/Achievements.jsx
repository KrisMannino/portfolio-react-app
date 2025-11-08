import React from 'react';
import researchPoster from '../assets/UNCDSD_KM_image.png'
import researchXLPoster from '../assets/UNCDSD_KM_image_XL.png'
import cADSPoster from '../assets/CADSposter.png'
import CADSXLPoster from '../assets/CADS_Poster.jpeg'
import jplHeadshot from '../assets/jpl_headshot.png'

const Achievements = () => {
  return (
    // <div name='achievements' className='w-full h-screen mx-auto bg-[#474787] text-[#AAABB8] pt-20'>
  <div name='achievements' className='w-full min-h-screen sm:h-screen mx-auto pt-60'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full mt-9'>
        <div className='p-4'>
          <p className='sm:text-9xl font-bold inline border-b-4 mt-2' style={{ borderBottomColor: 'var(--bg-900)', color: 'var(--bg-900)'}}>Achievements</p>
          <p className='py-4 max-w-[900px] md:mr-[30%] sm:text-4xl mt-2' style={{ color: 'var(--text-muted)' }}>Here are some other things I have done</p>
        </div>

        <div className='w-full grid grid-cols-3 gap-4 text-center py-8'>

          {/* First Item */}
          <div className='col-span-2 text-left flex flex-col justify-center'>
              <h3 className='text-[#8FFF0A] text-4xl font-bold'>Thesis Research | UNC Data Science Day</h3>
              <p className='mt-2 sm:text-2xl'>My thesis work on wildfire burn severity prediction. Presented at the third annual UNC Data Science Day and Scholarship day at <a href="https://wssu.edu" >WSSU</a>, Spring-Summer 2025.</p>
            </div>
            <div className='flex justify-center items-center mb-8'>
              <a href={researchXLPoster}><img className='w-auto h-auto shadow-md shadow-[#374054] hover:scale-110 duration-500' src={researchPoster} alt="CADS Poster" /></a>
            </div>

          {/* Second Item */}
            <div className='col-span-2 text-left flex flex-col justify-center'>
              <a href="https://www.wssu.edu/about/news/articles/2025/05/wssu-research-experience-leads-student-to-prestigious-nasa-internship.html" target="_blank" rel="noopener noreferrer">
                <h3 className='text-[#8FFF0A] text-4xl font-bold'>NASA Jet Propulsion Laboratory Internship
                </h3>
                <h3 className='text-[#FFFFFF] text-3xl font-bold mt-4 italic'>
                  Read more about it in the WSSU article
                </h3>
              </a>
            <p className='mt-2 sm:text-2xl'>Radar Science and Engineering Group, Summer 2025.</p>
            <p className='mt-2 sm:text-2xl'>Winston-Salem State University graduate student Kris Mannino has been selected for a prestigious summer internship at NASA&apos;s Jet Propulsion Laboratory (JPL), managed by the California Institute of Technology (Caltech), in Pasadena, Calif. - wssu.edu</p>
            
          </div>
          <div className='flex justify-center items-center mb-8'>
            <a href="https://www.wssu.edu/about/news/articles/2025/05/wssu-research-experience-leads-student-to-prestigious-nasa-internship.html" target="_blank" rel="noopener noreferrer"><img className='w-auto h-auto shadow-md shadow-[#374054] hover:scale-110 duration-500' src={jplHeadshot} alt="WSSU Article Kris Mannino" /></a>
          
          </div>
          
        

          
          {/* Third Item */}
         <div className='col-span-2 text-left flex flex-col justify-center'>
            <h3 className='text-[#8FFF0A] text-4xl font-bold'>Scholarship Day | Poster competition</h3>
            <p className='mt-2 sm:text-2xl'>Awarded Third Place for the non-Biological Sciences category in the Poster competition on Scholarship day at <a href="https://wssu.edu">WSSU</a>, Spring 2023.</p>
          </div>
          <div className='flex justify-center items-center mb-8'>
            <a href={CADSXLPoster}><img className='w-auto h-auto shadow-md shadow-[#374054] hover:scale-110 duration-500' src={cADSPoster} alt="CADS Poster" /></a>
          </div>
          {/* Fourth Item */}
          <div className='col-span-2 text-left flex flex-col justify-center'>
            <h3 className='text-[#8FFF0A] text-4xl font-bold'>More to come...</h3>
            <p className='mt-2 sm:text-2xl'>Click back in to see more of my awards, certifications, and other happenings</p>
          </div>
          <div className='flex justify-center items-center mb-8'>
          <div className='hidden md:block w-auto h-auto shadow-md shadow-[#374054] hover:scale-110 duration-500 loader'></div>
          </div>

  
        </div>
      </div>
    </div>
  );
};

export default Achievements;
