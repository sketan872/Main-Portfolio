import React, { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { IoReorderThreeOutline } from 'react-icons/io5';
import '../App.css';
import { Bio } from '../data/constants';
import logo from '../images/k.svg';
const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isdarkmode, setIsDarkMode] = useState(false);
  const [darkModeText, setDarkModeText] = useState('Dark Mode');

  // Check localStorage for dark mode preference
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(savedDarkMode);
    setDarkModeText(savedDarkMode ? 'Light Mode' : 'Dark Mode');
  }, []);

  // Handle dark mode toggle
  const handleDarkModeToggle = () => {
    setIsDarkMode(!isdarkmode);
    setDarkModeText(isdarkmode ? 'Dark Mode' : 'Light Mode');
    localStorage.setItem('darkMode', !isdarkmode);
  };

  useEffect(() => {
    if (isdarkmode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isdarkmode]);

  return (
    <nav>
      <div className='bg-[#111111] h-[80px] flex items-center justify-between text-[1rem] sticky top-0 z-10 px-4'>
        <a href='/' className=' text-blue py-0 px-6 no-underline text-xl font-semibold'>
          <img className='w-[50px] rounded-full mr-[10px]' src={logo} alt="K S"/>
        </a>
        <button
          className='md:hidden text-white'
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          <IoReorderThreeOutline className='w-6 h-7'/>
        </button>

        <div className='hidden md:flex w-full items-center justify-center space-x-6'>
          <a className='text-[#503beb] py-6 px-4 hover:text-[#503beb] transition-all duration-200' href="#About">About</a>
          <a className='text-[#503beb] py-6 px-4 hover:text-[#503beb] transition-all duration-200' href="#Skills">Skills</a>
          <a className='text-[#503beb] py-6 px-4 hover:text-[#503beb] transition-all duration-200' href="#Experience">Experience</a>
          <a className='text-[#503beb] py-6 px-4 hover:text-[#503beb] transition-all duration-200' href="#Projects">Projects</a>
          <a className='text-[#503beb] py-6 px-4 hover:text-[#503beb] transition-all duration-200' href="#Education">Education</a>

         
          {isdarkmode ? (
            <FaSun  className='text-3xl mr-[20px] cursor-pointer border-[2px] border-[#503beb] w-[70px] p-[5px] rounded-full hover:bg-yellow-300 hover:text-white transition-all duration-300 transform hover:scale-110' onClick={handleDarkModeToggle} />
          ) : (
            <FaMoon  className='text-3xl mr-[20px] cursor-pointer border-[2px] border-[#503beb] w-[70px] p-[5px] rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-110' onClick={handleDarkModeToggle} />
          )}
        </div>

        <a href={Bio.github} target='_blank' className='hidden md:flex items-center justify-end'>
          <button className='border border-white flex items-center cursor-pointer rounded-[10px] px-[20px] py-[1px] text-[15px] font-semibold text-[#503beb] transition-all duration-200 ease-in-out hover:bg-[#503beb] hover:text-white'>
            GitHub Profile
          </button>
        </a>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className='Mobile-view'>
        <div className='md:hidden bg-[#111111] flex flex-col items-end w-[-10%] font-semibold  py-4'>
          <a className='text-[#503beb] py-2 px-4 hover:text-black transition-all duration-200' href="#About">About</a>
          <a className='text-[#503beb] py-2 px-4 hover:text-black transition-all duration-200' href="#Skills">Skills</a>
          <a className='text-[#503beb] py-2 px-4 hover:text-black transition-all duration-200' href="#Experience">Experience</a>
          <a className='text-[#503beb] py-2 px-4 hover:text-black transition-all duration-200' href="#Projects">Projects</a>
          <a className='text-[#503beb] py-2 px-4 hover:text-black transition-all duration-200' href="#Education">Education</a>
          
            {isdarkmode ? (
  <FaSun 
    className='text-3xl mr-[20px] cursor-pointer border-[2px] border-[#503beb] w-[70px] p-[5px] rounded-full hover:bg-yellow-300 hover:text-white transition-all duration-300 transform hover:scale-110'
    onClick={handleDarkModeToggle} 
  />
) : (
  <FaMoon 
    className='text-3xl mr-[20px] cursor-pointer border-[2px] border-[#503beb] w-[70px] p-[5px] rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-110'
    onClick={handleDarkModeToggle} 
  />
)}


          
          
                    <a href={Bio.github} target='_blank' className='mt-4'>
            <button className='border border-white flex items-center cursor-pointer rounded-[10px] px-[20px] py-[15px] text-[16px] font-semibold text-[#503beb] transition-all duration-200 ease-in-out hover:bg-[#503beb]'>
              GitHub Profile
            </button>
          </a>
        </div>
        </div>
        
      )}
    </nav>
  );
};

export default Navbar;
