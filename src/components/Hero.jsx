import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { Tilt } from 'react-tilt';
import Typewriter from 'typewriter-effect';
import StarCanvasStyle from '../canvas/Stars';
import { Bio } from '../data/constants';
import HeroBgAnimation from '../HeroBgAnimation';
import HeroImg from '../images/Hero.jpg';
import { headContainerAnimation, headContentAnimation, headTextAnimation } from '../utils/motion';

const Hero = () => {
  const [isdarkmode, setIsDarkMode] = useState(false);

  // Check localStorage for dark mode preference
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(savedDarkMode);
  }, []);

  // Handle dark mode toggle
  const handleDarkModeToggle = () => {
    setIsDarkMode(!isdarkmode);
    localStorage.setItem('darkMode', !isdarkmode);
  };

  // Apply dark mode class to the body
  useEffect(() => {
    if (isdarkmode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isdarkmode]);

  return (
    <motion.div {...headContainerAnimation}>
      <div
        id="Home"
        className={`hero-container flex relative justify-center p-[80px_30px] z-[1] sm:p-[32px_16px] md:p-[66px_16px] ${isdarkmode ? 'hero-container dark-mode' : 'hero-container'}`}
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%)' }}
      >
        <StarCanvasStyle />
        <div
          className='absolute flex top-[50%] right-0 bottom-0 left-[50%] w-full h-full max-width:1360px md:justify-end justify-center p-[0_0px]'
          style={{
            WebkitTransform: 'translateX(-50%) translateY(-50%)',
            transform: 'translateX(-50%) translateY(-50%)',
          }}
        >
          <HeroBgAnimation />
        </div>

        <div className="relative bg-[] flex w-full justify-between items-center max-w-[1100px] flex-col md:flex-row gap-[40px]">
          <div className="w-full md:order-1  order-2 mb-[30px] flex flex-col items-center gap-[6px]">
            <motion.div {...headTextAnimation}>
              <div className="md:text-[50px] md:font-bold md:leading-[68px] font-semibold text-center text-[50px] leading-[48px]">
                Hi, I’m <br /> {Bio.name}
              </div>
              {/* Typewriter */}
              <div className="md:text-[32px] font-semibold md:flex md:gap-[12px] md:leading-[68px] text-center text-[22px] leading-[48px] mb-[16px]">
                I am a <span className="cursor-pointer text-[#503beb]">
                  <Typewriter
                    options={{
                      strings: Bio.roles,
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span>
              </div>
            </motion.div>
            {/* Description */}
            <motion.div {...headContentAnimation}>
              <div className="md:text-[20px] md:leading:[32px] mb-[42px] text-[#F2F3F4] text-[16px] leading-[32px]">
                {Bio.description}
              </div>
            </motion.div>
            {/* Resume Button */}
            <div>
              <button
                onClick={() => (window.open(Bio.resume), '_blank')}
                className="border w-[95%] font-bold md:text-[18px] text-[15px] text-white max-w-[300px] text-center md:p-[2px_40px] p-[2px_30px] rounded-[20px] hover:scale-110 transition-all ease-in-out"
                style={{
                  background: 'linear-gradient(225deg, #503beb 0%, #7a56e4 100%)',
                  boxShadow: '4px 4px 20px rgba(0, 0, 0, 0.1), -4px -4px 20px rgba(0, 0, 0, 0.1)',
                }}
              >
                Check Resume
              </button>
            </div>
          </div>

          {/* Right */}
          <div className="w-full md:order-2 order-1 flex md:justify-end flex-col justify-center items-center mb-[80px] sm:mb-[30px]">
            <Tilt>
              <img
                className="rounded-[50%] w-full h-full md:max-w-[450px] md:max-h-[500px] border-[2px] border-blue-400 max-w-[250px] max-h-[300px]"
                src={HeroImg}
                alt="not-found"
              />
            </Tilt>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
