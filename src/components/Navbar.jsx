import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/Kris-Logo-512x512.png'
// import {Link} from 'react-scroll'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#2C2C54] text-[#AAABB8]'>
      <div>
        <img src={Logo} alt="Kris' Logo" style={{width: '70px'}}/>
      </div>

      {/*Menu */}
        {/* <ul className='hidden md:flex'>
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
            <Link to="blog" smooth={true} duration={500}>Blog</Link>
          </li>
          <li>
            <Link to="gallery" smooth={true} duration={500}>Gallery</Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>Contact</Link>
          </li>
        </ul> */}
        {/* * Static Nav items         */}
         <ul className='hidden md:flex'>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/skills">Skills</a></li>
          <li><a href="/work">Work</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/gallery">Gallery</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>

      {/*Hamburger Menu */}
        <div onClick={handleClick} className='md:hidden z-10'>
          {!nav ? <FaBars/> : <FaTimes/>}
        </div>

      {/*Mobile Menu */}
        {/* <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#474787] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'><Link to="hero" onClick={handleClick} smooth={true} duration={500}>Home</Link></li>
            <li className='py-6 text-4xl'><Link to="about" onClick={handleClick} smooth={true} duration={500}>About</Link></li>
            <li className='py-6 text-4xl'><Link to="skills" onClick={handleClick} smooth={true} duration={500}>Skills</Link></li>
            <li className='py-6 text-4xl'><Link to="work" onClick={handleClick} smooth={true} duration={500}>Work</Link></li>
            <li className='py-6 text-4xl'><Link to="blog" onClick={handleClick} smooth={true} duration={500}>Blog</Link></li>
            <li className='py-6 text-4xl'><Link to="gallery" onClick={handleClick} smooth={true} duration={500}>Gallery</Link></li>
            <li className='py-6 text-4xl'><Link to="contact" onClick={handleClick} smooth={true} duration={500}>Contact</Link></li>
          </ul> */}
          {/* Static Mobile menu */}
          <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#474787] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'><a href="/">Home</a></li>
            <li className='py-6 text-4xl'><a href="/about">About</a></li>
            <li className='py-6 text-4xl'><a href="/skills">Skills</a></li>
            <li className='py-6 text-4xl'><a href="/work">Work</a></li>
            <li className='py-6 text-4xl'><a href="/blog">Blog</a></li>
            <li className='py-6 text-4xl'><a href="/gallery">Gallery</a></li>
            <li className='py-6 text-4xl'><a href="/contact">Contact</a></li>
          </ul>
          

      {/*Social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
          <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0072b1]'>
              <a href="/" className='flex justify-between items-center w-full text-[#ECECEC]'>
                LinkedIn <FaLinkedin size={30}/>
                </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[black]'>
              <a href="/" className='flex justify-between items-center w-full text-[#ECECEC]'>
                Github <FaGithub size={30}/>
                </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#DFFF00]'>
              <a href="/" className='flex justify-between items-center w-full text-[#2C2C54]'>
                Email <HiOutlineMail size={30}/>
                </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#FF6B6B]'>
              <a href="/" className='flex justify-between items-center w-full text-[#ECECEC]'>
                Resume <BsFillPersonLinesFill size={30}/>
                </a>
            </li>
          </ul>
        </div>


        </div>
  )
}

export default Navbar