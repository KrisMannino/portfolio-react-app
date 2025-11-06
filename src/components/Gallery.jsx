import React, { useState } from 'react'
import { BsChevronCompactLeft } from 'react-icons/bs'
import { BsChevronCompactRight } from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx';

import img1 from '../assets/ScholarshipWeek2023.jpeg'
import img2 from '../assets/CareerFairSprin2024.jpg'
import img3 from '../assets/2024careerExpoHeadshot.png'
import img4 from '../assets/KrisManninoAvatar.jpeg'
import img5 from '../assets/me_and_luna.jpeg'

const Gallery = () => {
  
  const images = [
    {src: img1, alt: "Scholarship Week 2023"},
    {src: img2, alt: "Career Fair Spring 2024"},
    {src: img3, alt: "Headshot Spring 2024"},
    {src: img4, alt: "My avatar"},
    {src: img5, alt: "Luna and Kris"},
  ];

  const [currentIndex, setCurrentIndex] = useState(0)

  const prevImage = () => {
    const isFirstImage = currentIndex ===0;
    const newIndex = isFirstImage ? images.length -1 : currentIndex -1;
    setCurrentIndex(newIndex)
  }
  const nextImage = () => {
    const isLastImage = currentIndex === images.length -1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  const goToImage = (imageIndex) => {
    setCurrentIndex(imageIndex);
  }

  return (
  <div name='gallery' className='w-full md:h-screen' style={{ backgroundColor: 'var(--page-bg)', color: 'var(--text-muted)' }}>
        
        {/* Gallery heading */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full pt-20'>
            <div className='pb-8'>
              <p className='text-4xl font-bold inline border-b-4' style={{ borderBottomColor: 'var(--blue)' }}>Gallery</p>
              <p className='py-6'>Some places I have popped up</p>
            </div>
        
          {/* Image container */}
          <div className='max-w-[600px]  mx-auto p-4 flex flex-col justify-center w-full h-full relative group'>
            
            {/* Images */}
            <div style={{backgroundImage: `url(${images[currentIndex].src})`}} className='w-full h-full rounded-2xl bg-center bg-cover duration-500'> </div>

            {/* Left Arrow */}
            <button aria-label="Previous image" onClick={prevImage} className='hidden group-hover:block absolute top-[50%] -translate-x-0 left-5 text-2xl rounded-full p-2' style={{ backgroundColor: 'rgba(173,89,153,0.4)', color: 'var(--text-muted)' }}>
              <BsChevronCompactLeft size={30}/>
            </button>
            {/* Right Arrow */}
            <button aria-label="Next image" onClick={nextImage} className='hidden group-hover:block absolute top-[50%] -translate-x-0 right-5 text-2xl rounded-full p-2' style={{ backgroundColor: 'rgba(173,89,153,0.3)', color: 'var(--text-muted)' }}>
              <BsChevronCompactRight size={30}/>
            </button>

            {/* Dots container */}
            <div className='flex top-4 justify-center'>
              {images.map((image, imageIndex) => (
                <button
                  key={imageIndex}
                  onClick={() => goToImage(imageIndex)}
                  aria-label={`Go to image ${imageIndex + 1}`}
                  className='text-4xl'
                >
                  <RxDotFilled />
                </button>
              ))}
            </div>

          </div>

        </div>

    </div>
  )
}

export default Gallery