import React, { useState } from 'react';
import styled from 'styled-components';
import ProjectCards from '../components/ProjectCards';
import { projects } from '../data/constants';

const CardContainer=styled.div`
display:flex;
justify-content:center;
align-items:center;
gap:28px;
flex-wrap:wrap;

`

const Projects = () => {
    const [toggle,SetToggle]=useState("all");
  return (
    <div id='Projects' className='flex flex-col justify-center relative z-1 items-center mt-[50px]'>
    <div className='flex justify-between items-center relative flex-col w-full max-w-[1100px] gap-[12px]'>
      <div className='text-[#503beb] md:text-[52px] text-center font-semibold md:mt-[20px] text-[32px] mt-[12px]'>
          Projects</div>
          <p className='md:text-[18px] mb-[40px] text-center font-semibold  text-[16px]'>I have Web Projects.Here are some of my projects.</p>
        <div className='flex  border-[1.5px] border-white md:text-16px text-[12px] rounded-[12px] font-medium m-[22px_0] '>
        <div
  className={`md:p-[8px_18px] md:rounded-[6px] p-[6px_8px] rounded-[4px] cursor-pointer hover:bg-white ${toggle === 'all' ? 'bg-green' : ''}`}
  onClick={() => SetToggle('all')}
>
  ALL
</div>
<div className='w-[1.5px] bg-black'></div>
<div
  className={`md:p-[8px_18px] md:rounded-[6px] p-[6px_8px] rounded-[4px] cursor-pointer hover:bg-white ${toggle === 'web' ? 'bg-green' : ''}`}
  onClick={() => SetToggle('Web')}
>
  Web App
</div>

        </div>
        <CardContainer>
  {toggle === 'all' && projects.map((project) => (
    <ProjectCards key={project.id} project={project} />
  ))}

  {toggle === 'Web' && projects
    .filter((item) => item.category === toggle)
    .map((project) => (
      <ProjectCards key={project.id} project={project} />
    ))}
</CardContainer>
 </div>
  </div>



  )
}

export default Projects;
