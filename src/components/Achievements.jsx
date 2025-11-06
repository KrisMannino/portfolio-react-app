import React from 'react';
import researchPoster from '../assets/UNCDSD_KM_image.png'
import researchXLPoster from '../assets/UNCDSD_KM_image_XL.png'
import cADSPoster from '../assets/CADSposter.png'
import CADSXLPoster from '../assets/CADS_Poster.jpeg'
import jplHeadshot from '../assets/jpl_headshot.png'

const Achievements = () => {
  return (
    // <div name='achievements' className='w-full h-screen mx-auto bg-[#474787] text-[#AAABB8] pt-20'>
  <div name='achievements' className='w-full min-h-screen sm:h-screen mx-auto pt-20' style={{ backgroundColor: 'var(--page-bg)', color: 'var(--text-muted)' }}>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='p-4'>
          <p className='text-4xl font-bold inline border-b-4' style={{ borderBottomColor: 'var(--blue)', color: 'var(--bg-900)' }}>Achievements</p>
          <p className='py-4'>Here are some other things I have done</p>
        </div>

        <div className='w-full grid grid-cols-3 gap-4 text-center py-8'>

          {/* First Item */}
          <div className='col-span-2 text-left flex flex-col justify-center'>
              <h3 className='text-[#8FFF0A] text-4xl font-bold'>Thesis Research | UNC Data Science Day</h3>
              <p className='mt-2'>My thesis work on wildfire burn severity prediction. Presented at the third annual UNC Data Science Day and Scholarship day at <a href="https://wssu.edu">WSSU</a>, Spring-Summer 2025.</p>
            </div>
            <div className='flex justify-center items-center mb-8'>
              <a href={researchXLPoster}><img className='w-auto h-auto shadow-md shadow-[#374054] hover:scale-110 duration-500' src={researchPoster} alt="CADS Poster" /></a>
            </div>

          {/* Second Item */}
                    <div className='col-span-2 text-left flex flex-col justify-center'>
            <h3 className='text-[#0B3D91] text-4xl font-bold'><a href="https://www.wssu.edu/about/news/articles/2025/05/wssu-research-experience-leads-student-to-prestigious-nasa-internship.html">NASA Jet Propulsion Laboratory Internship</a></h3>
            <h3 className='text-[#8FFF0A] text-1xl font-bold'>
              <a href="https://www.wssu.edu/about/news/articles/2025/05/wssu-research-experience-leads-student-to-prestigious-nasa-internship.html">Read more about it in the WSSU article</a>
              </h3>
            <p className='mt-2'>Radar Science and Engineering Group, Summer 2025.</p>
            <p className='mt-2'>Winston-Salem State University graduate student Kris Mannino has been selected for a prestigious summer internship at NASA&apos;s Jet Propulsion Laboratory (JPL), managed by the California Institute of Technology (Caltech), in Pasadena, Calif. - wssu.edu</p>
            
          </div>
          <div className='flex justify-center items-center mb-8'>
            <a href={jplHeadshot}><img className='w-auto h-auto shadow-md shadow-[#374054] hover:scale-110 duration-500' src={jplHeadshot} alt="WSSU Article Kris Mannino" /></a>
          </div>
        

          
          {/* Third Item */}
         <div className='col-span-2 text-left flex flex-col justify-center'>
            <h3 className='text-[#8FFF0A] text-4xl font-bold'>Scholarship Day | Poster competition</h3>
            <p className='mt-2'>Awarded Third Place for the non-Biological Sciences category in the Poster competition on Scholarship day at <a href="https://wssu.edu">WSSU</a>, Spring 2023.</p>
          </div>
          <div className='flex justify-center items-center mb-8'>
            <a href={CADSXLPoster}><img className='w-auto h-auto shadow-md shadow-[#374054] hover:scale-110 duration-500' src={cADSPoster} alt="CADS Poster" /></a>
          </div>
          {/* Fourth Item */}
          <div className='col-span-2 text-left flex flex-col justify-center'>
            <h3 className='text-[#8FFF0A] text-4xl font-bold'>More to come...</h3>
            <p className='mt-2'>Click back in to see more of my awards, certifications, and other happenings</p>
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
