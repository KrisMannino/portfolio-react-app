import React from 'react'
import Project1 from '../assets/ProjectImg.png'
import Paper1 from '../assets/PaperImg.png'
import portSite from '../assets/portfolio_site.png'
import sAlgorithms from '../assets/Sting_Matching_Report.pdf'
import ieeePoster from '../assets/ieee_wildfire.png'

const Work = () => {
  return (
  <div name='work' className='w-full md:h-screen pt-20 md:pt-0' style={{ backgroundColor: 'var(--page-bg)', color: 'var(--text-muted)' }}>
        
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
              <p className='text-4xl font-bold inline border-b-4' style={{ borderBottomColor: 'var(--blue)', color: 'var(--bg-900)' }}>Work</p>
              <p className='py-6'>Here are some of my latest projects</p>
            </div>
            {/** IEEE Poster as a project-style card */}
            <div className="w-full flex justify-center mb-8">
              <div
                style={{ backgroundImage: `url(${ieeePoster})` }}
                className="shadow-lg shadow-[#ECECEC] group container rounded-md flex justify-center items-center mx-auto content-div w-full max-w-3xl h-[380px] bg-center bg-cover"
              >
                <div className="opacity-0 group-hover:opacity-100 px-4 text-center">
                  <a href="https://ieeexplore.ieee.org/document/10971599" target="_blank" rel="noopener noreferrer" className="text-2xl font-bold px-3 py-2" style={{ color: 'var(--text-primary)' }}>
                    Pre-Ignition Wildfire Burn Severity Modeling with Polarimetric UAVSAR Data and Machine Learning
                    <span style={{ color: 'var(--blue)' }}> (IEEE Link)</span>
                  </a>
                </div>
              </div>
            </div>
            {/** Container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

              {/**PRoject card */}
              <div style={{backgroundImage: `url(${Project1})`}} 
              className='shadow-lg shadow-[#ECECEC] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/**Hover effects */}
                    <div className='opacity-0 group-hover:opacity-100 px-4' >
                      <span className='text-2xl font-bold' style={{ color: 'var(--text-primary)' }}>
                        Reactive Gallery page with PHP
                      </span>
                      <div>
                          {/* Demo placeholder - update href when live */}
                          {/* <a href="#">
                            <button className='text-center rounded-lg px-4 py-3 m-2' style={{ backgroundColor: '#AAABB8', color: '#2C2C54', fontWeight: 700, fontSize: '1.125rem' }}>Demo</button>
                          </a> */}

                          <a href="https://github.com/KrisMannino/GalleryPage" target="_blank" rel="noopener noreferrer">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#AAABB8] text-[#2C2C54] font-bold text-lg'>Code</button>
                          </a>
                      </div>
                    </div>{/**close  Hover----------*/}

              </div>{/**Close Project card---------- */}

              {/**PRoject card */}
              <div style={{backgroundImage: `url(${Paper1})`}} 
              className='shadow-lg shadow-[#ECECEC] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/**Hover effects */}
                    <div className='opacity-0 group-hover:opacity-100 px-4' >
                      <span className='text-2xl font-bold text-[#ECECEC]'>
                        String Matching Algorithms research 
                      </span>
                      <div>
                          <a href={sAlgorithms} target="_blank" rel="noopener noreferrer">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#AAABB8] text-[#2C2C54] font-bold text-lg'>View</button>
                          </a>
                      </div>
                    </div>{/**close  Hover----------*/}

              </div>{/**Close Project card---------- */}
              {/**PRoject card */}
              <div style={{backgroundImage: `url(${portSite})`}} 
              className='shadow-lg shadow-[#ECECEC] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/**Hover effects */}
                    <div className='opacity-0 group-hover:opacity-100 px-4' >
                      <span className='text-2xl font-bold text-[#ECECEC]'>
                        Portfolio site with React.js and Tailwind.css
                      </span>
                      <div>
                          {/* Demo placeholder - update href when live */}
                          {/* <a href="#">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#AAABB8] text-[#2C2C54] font-bold text-lg'>Demo</button>
                          </a> */}

                          <a href="https://github.com/KrisMannino/portfolio-react-app" target="_blank" rel="noopener noreferrer">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#AAABB8] text-[#2C2C54] font-bold text-lg'>Code</button>
                          </a>
                      </div>
                    </div>{/**close  Hover----------*/}

              </div>{/**Close Project card---------- */}

              {/**PRoject card (hidden placeholder 1) */}
              <div style={{backgroundImage: `url(${Paper1})`}} 
              className='hidden shadow-lg shadow-[#ECECEC] group container rounded-md justify-center items-center mx-auto content-div'>
                    
                    {/**Hover effects */}
                    <div className='opacity-0 group-hover:opacity-100 px-4' >
                      <span className='text-2xl font-bold text-[#ECECEC]'>
                        String Matching Algorithms research 
                      </span>
                      <div>
                          <button aria-disabled className='text-center rounded-lg px-4 py-3 m-2 bg-[#AAABB8] text-[#2C2C54] font-bold text-lg'>View</button>
                      </div>
                    </div>{/**close  Hover----------*/}

              </div>{/**Close Project card---------- */}

              {/**PRoject card (hidden placeholder 2) */}
              <div style={{backgroundImage: `url(${Project1})`}} 
              className='hidden shadow-lg shadow-[#ECECEC] group container rounded-md justify-center items-center mx-auto content-div'>
                    
                    {/**Hover effects */}
                    <div className='opacity-0 group-hover:opacity-100 px-4' >
                      <span className='text-2xl font-bold text-[#ECECEC]'>
                        Reactive Gallery page with PHP
                      </span>
                      <div>
                          {/* Demo placeholder - update href when live */}
                          <button aria-disabled className='text-center rounded-lg px-4 py-3 m-2 bg-[#AAABB8] text-[#2C2C54] font-bold text-lg'>Demo</button>
                          <button aria-disabled className='text-center rounded-lg px-4 py-3 m-2 bg-[#AAABB8] text-[#2C2C54] font-bold text-lg'>Code</button>
                      </div>
                    </div>{/**close  Hover----------*/}

              </div>{/**Close Project card---------- */}

              {/**PRoject card (hidden placeholder 3) */}
              <div style={{backgroundImage: `url(${Paper1})`}} 
              className='hidden shadow-lg shadow-[#ECECEC] group container rounded-md justify-center items-center mx-auto content-div'>
                    
                    {/**Hover effects */}
                    <div className='opacity-0 group-hover:opacity-100 px-4' >
                      <span className='text-2xl font-bold text-[#ECECEC]'>
                        String Matching Algorithms research
                      </span>
                      <div>
                          <button aria-disabled className='text-center rounded-lg px-4 py-3 m-2 bg-[#AAABB8] text-[#2C2C54] font-bold text-lg'>View</button>
                      </div>
                    </div>{/**close  Hover----------*/}

              </div>{/**Close Project card---------- */}

            </div>{/**close Container-------- */}

            
        </div>
    </div>
  )
}

export default Work