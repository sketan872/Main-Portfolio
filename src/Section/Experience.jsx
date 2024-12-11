import React from 'react';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import Card from '../components/Card';
import { experiences } from '../data/constants';

const Experience = () => {
  return (
    <div id='Experience' className='flex flex-col justify-center relative z-1 items-center mt-[50px]'>
    <div className='flex justify-between items-center relative flex-col w-full max-w-[1100px] gap-[12px]'>
      <div className='text-[#503beb] md:text-[52px] text-center font-semibold md:mt-[20px] text-[32px] mt-[12px]'>
          Experience</div>
          <p className='md:text-[18px] mb-[40px] text-center font-semibold  text-[16px]'>I am work Experience as a ReactJS Intern</p>
          <VerticalTimeline>
  {experiences.map((experience) => (
    <Card experience={experience} key={experience.id} />
  ))}
</VerticalTimeline>

    </div>
  </div>



  )
}

export default Experience
