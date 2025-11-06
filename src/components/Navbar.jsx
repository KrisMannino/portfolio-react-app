import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/Kris-Logo-512x512.png'
import {Link} from 'react-scroll'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
  <div className='fixed w-full h-[80px] flex justify-between items-center px-4 text-primary z-50' style={{ backgroundColor: 'var(--bg-900)' }}>
      <div>
  <a href="/"><img src={Logo} alt="Kris&#39; Logo" style={{width: '70px'}}/></a>
      </div>

      {/*Menu */}
        <ul className='hidden md:flex'>
          <li>
            <Link to="hero" smooth={true} duration={500}>Home</Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>About</Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500}>Skills</Link>
          </li>
          <li>
            <Link to="work" smooth={true} duration={500}>Work</Link>
          </li>
          <li>
            <Link to="achievements" smooth={true} duration={500}>Achievements</Link>
          </li>
          {/* <li>
            <Link to="gallery" smooth={true} duration={500}>Gallery</Link>
          </li> */}
          <li>
            <Link to="contact" smooth={true} duration={500}>Contact</Link>
          </li>
        </ul>
        {/* * Static Nav items         */}
         {/* <ul className='hidden md:flex'>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/skills">Skills</a></li>
          <li><a href="/work">Work</a></li>
          <li><a href="/achievements">Achievements</a></li>
          <li><a href="/gallery">Gallery</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul> */}

        {/*Hamburger Menu */}
        <button onClick={handleClick} aria-label={nav ? 'Close menu' : 'Open menu'} className='md:hidden'>
          {!nav ? <FaBars/> : <FaTimes/>}
        </button>

      {/*Mobile Menu */}
  <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center'} style={{ backgroundColor: 'var(--page-bg)' }}>
            <li className='py-6 text-4xl'><Link to="hero" onClick={handleClick} smooth={true} duration={500}>Home</Link></li>
            <li className='py-6 text-4xl'><Link to="about" onClick={handleClick} smooth={true} duration={500}>About</Link></li>
            <li className='py-6 text-4xl'><Link to="skills" onClick={handleClick} smooth={true} duration={500}>Skills</Link></li>
            <li className='py-6 text-4xl'><Link to="work" onClick={handleClick} smooth={true} duration={500}>Work</Link></li>
            <li className='py-6 text-4xl'><Link to="achievements" onClick={handleClick} smooth={true} duration={500}>Achievements</Link></li>
            <li className='py-6 text-4xl'><Link to="gallery" onClick={handleClick} smooth={true} duration={500}>Gallery</Link></li>
            <li className='py-6 text-4xl'><Link to="contact" onClick={handleClick} smooth={true} duration={500}>Contact</Link></li>
          </ul>
          {/* Static Mobile menu */}
          {/* <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#474787] flex flex-col justify-center items-center z-10'}>
            <li className='py-6 text-4xl'><a href="/">Home</a></li>
            <li className='py-6 text-4xl'><a href="/about">About</a></li>
            <li className='py-6 text-4xl'><a href="/skills">Skills</a></li>
            <li className='py-6 text-4xl'><a href="/work">Work</a></li>
            <li className='py-6 text-4xl'><a href="/achievements">Achievements</a></li>
            <li className='py-6 text-4xl'><a href="/gallery">Gallery</a></li>
            <li className='py-6 text-4xl'><a href="/contact">Contact</a></li>
          </ul> */}
          

 
        {/*Social icons */}
        <div className='flex fixed md:flex-row md:bottom-0 md:left-0 md:right-0 md:top-auto lg:flex-col lg:top-[35%] lg:left-0 lg:right-auto lg:bottom-auto flex-row bottom-0 left-0 right-0'>
          
          <ul className='flex flex-row justify-center w-full lg:flex-col lg:w-auto'>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-0 hover:mb-[-10px] lg:ml-[-100px] lg:hover:ml-[-10px] lg:hover:mb-0 duration-300 bg-[#0072b1]'>
              <a href="https://www.linkedin.com/in/krismannino/" target="_blank" rel="noopener noreferrer" aria-label="Kris Mannino LinkedIn" className='flex justify-between items-center w-full text-[#ECECEC]'>
                LinkedIn <FaLinkedin size={30}/>
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-0 hover:mb-[-10px] lg:ml-[-100px] lg:hover:ml-[-10px] lg:hover:mb-0 duration-300 bg-[black]'>
              <a href="https://github.com/KrisMannino" target="_blank" rel="noopener noreferrer" aria-label="Kris Mannino GitHub" className='flex justify-between items-center w-full text-[#ECECEC]'>
                Github <FaGithub size={30}/>
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-0 hover:mb-[-10px] lg:ml-[-100px] lg:hover:ml-[-10px] lg:hover:mb-0 duration-300 bg-[#DFFF00]'>
              <button onClick={() => { setNav(false); }} aria-label="Email link" className='flex justify-between items-center w-full text-[#ECECEC]'>
                Email <HiOutlineMail size={30}/>
              </button>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-0 hover:mb-[-10px] lg:ml-[-100px] lg:hover:ml-[-10px] lg:hover:mb-0 duration-300 bg-[#FF6B6B]'>
              <button onClick={() => { setNav(false); }} aria-label="Resume link" className='flex justify-between items-center w-full text-[#ECECEC]'>
                Resume <BsFillPersonLinesFill size={30}/>
              </button>
            </li>
          </ul>
        </div>

      </div>
  )
}

export default Navbar