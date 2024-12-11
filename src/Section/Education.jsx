import React from 'react';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import EduCards from '../components/EduCards';
import { educations } from '../data/constants';

const Education = () => {
  return (
    <div id='Education' className='flex flex-col justify-center relative z-1 items-center'>
      <div className='flex justify-between items-center relative flex-col w-full max-w-[1100px] gap-[12px]'>
        <div className='text-[#503beb] md:text-[52px] text-center font-semibold md:mt-[20px] text-[32px] mt-[12px]'>
          Education
        </div>
        <p className='md:text-[18px] mb-[40px] text-center font-semibold text-[16px]'>
          My Education has been a journey of self-discovery educational details are as follows.
        </p>
        <VerticalTimeline>
          {educations.map((education) => (
            <EduCards education={education} key={education.id} />
          ))}
        </VerticalTimeline>
        {/* <EarthCanvas/> */}
      </div>
    </div>
  );
}

export default Education;
