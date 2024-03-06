import React from 'react'
import Project1 from '../assets/ProjectImg.png'
import Paper1 from '../assets/PaperImg.png'
import portSite from '../assets/portfolio_site.png'
import sAlgorithms from '../assets/Sting_Matching_Report.pdf'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen pt-20 md:pt-0 bg-[#474787] text-[#AAABB8]'>
        
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
              <p className='text-4xl font-bold inline border-b-4 border-[#3a98a5]'>Work</p>
              <p className='py-6'>Here are some of my latest projects</p>
            </div>

            {/** Container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

              {/**PRoject card */}
              <div style={{backgroundImage: `url(${Project1})`}} 
              className='shadow-lg shadow-[#ECECEC] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/**Hover effects */}
                    <div className='opacity-0 group-hover:opacity-100 px-4' >
                      <span className='text-2xl font-bold text-[#ECECEC]'>
                        Pandas Project with IMDB dataset
                      </span>
                      <div>
                          <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#AAABB8] text-[#2C2C54] font-bold text-lg'>Demo</button>
                          </a>

                          <a href="/">
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
                          <a href={sAlgorithms}>
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
                          <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#AAABB8] text-[#2C2C54] font-bold text-lg'>Demo</button>
                          </a>

                          <a href="https://github.com/KrisMannino/portfolio-react-app">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#AAABB8] text-[#2C2C54] font-bold text-lg'>Code</button>
                          </a>
                      </div>
                    </div>{/**close  Hover----------*/}

              </div>{/**Close Project card---------- */}

              {/**PRoject card */}
              <div style={{backgroundImage: `url(${Paper1})`}} 
              className='hidden shadow-lg shadow-[#ECECEC] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/**Hover effects */}
                    <div className='opacity-0 group-hover:opacity-100 px-4' >
                      <span className='text-2xl font-bold text-[#ECECEC]'>
                        String Matching Algorithms research 
                      </span>
                      <div>
                          <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#AAABB8] text-[#2C2C54] font-bold text-lg'>View</button>
                          </a>
                      </div>
                    </div>{/**close  Hover----------*/}

              </div>{/**Close Project card---------- */}
              {/**PRoject card */}
              <div style={{backgroundImage: `url(${Project1})`}} 
              className='hidden shadow-lg shadow-[#ECECEC] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/**Hover effects */}
                    <div className='opacity-0 group-hover:opacity-100 px-4' >
                      <span className='text-2xl font-bold text-[#ECECEC]'>
                        Pandas Project with IMDB dataset
                      </span>
                      <div>
                          <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#AAABB8] text-[#2C2C54] font-bold text-lg'>Demo</button>
                          </a>

                          <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#AAABB8] text-[#2C2C54] font-bold text-lg'>Code</button>
                          </a>
                      </div>
                    </div>{/**close  Hover----------*/}

              </div>{/**Close Project card---------- */}

              {/**PRoject card */}
              <div style={{backgroundImage: `url(${Paper1})`}} 
              className='hidden shadow-lg shadow-[#ECECEC] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/**Hover effects */}
                    <div className='opacity-0 group-hover:opacity-100 px-4' >
                      <span className='text-2xl font-bold text-[#ECECEC]'>
                        String Matching Algorithms research
                      </span>
                      <div>
                          <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#AAABB8] text-[#2C2C54] font-bold text-lg'>View</button>
                          </a>
                      </div>
                    </div>{/**close  Hover----------*/}

              </div>{/**Close Project card---------- */}

            </div>{/**close Container-------- */}

            
        </div>
    </div>
  )
}

export default Work