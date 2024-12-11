import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa' // Importing GitHub, Instagram, and LinkedIn icons
import {Bio} from "../data/constants"
const Footer = () => {
  return (
    <div className='w-full p-[2re_0] flex justify-center'>
      <div className='w-full max-w-[1200px] flex flex-col gap-[14px] align-center p-[1rem] text-[#F2F3F4]'>
        <div className='font-bold text-[20px] text-[#F2F3F9]'></div>
        <div className='w-full max-width-[800px] mt-[0.5rem] flex md:flex-row md:gap-[2rem] justify-center flex-wrap gap-[1rem] text-center text-[12px] '>  
          <a className='text-[#F2F3F9] text-[1rem] md:text-[1.2rem] hover:text-[#111111] transition-color duration-[150] ease-in-out' href="#About">About</a>
          <a className='text-[#F2F3F9] text-[1rem] md:text-[1.2rem] hover:text-[#111111] transition-color duration-[150] ease-in-out' href="#Skills">Skills</a>
          <a className='text-[#F2F3F9] text-[1rem] md:text-[1.2rem] hover:text-[#111111] transition-color duration-[150] ease-in-out' href="#Experience">Experience</a>
          <a className='text-[#F2F3F9] text-[1rem] md:text-[1.2rem] hover:text-[#111111] transition-color duration-[150] ease-in-out' href="#Projects">Projects</a>
          <a className='text-[#F2F3F9] text-[1rem] md:text-[1.2rem] hover:text-[#111111] transition-color duration-[150] ease-in-out' href="#Education">Education</a>
        </div>
        
        {/* Social Media Icons Section */}
        <div className='flex justify-center gap-[1rem] mt-[1rem]'>
          <a href={Bio.github} target='_blank' className='text-[#F2F3F9] hover:text-[#111111] transition-color duration-[150] ease-in-out'>
            <FaGithub size={24} /> 
          </a>
          <a href={Bio.instagram} target='_blank' className='text-[#F2F3F9] hover:text-[#111111] transition-color duration-[150] ease-in-out'>
            <FaInstagram size={24} />
          </a>
          <a href={Bio.linkedin} target='_blank' className='text-[#F2F3F9] hover:text-[#111111] transition-color duration-[150] ease-in-out'>
            <FaLinkedin size={24} /> 
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
