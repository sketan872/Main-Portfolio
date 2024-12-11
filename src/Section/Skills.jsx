import React from 'react';
import { Tilt } from "react-tilt";
import { skills } from "../data/constants";
const Skills = () => {
  return (
    
    <div id='Skills' className='flex flex-col justify-center relative z-1 items-center'>
      <div className='flex justify-between items-center relative flex-col w-full max-w-[1100px] gap-[12px]'>
        <div className='text-[#503beb] md:text-[52px] text-center font-semibold md:mt-[20px] text-[32px] mt-[12px]'>
            Skills</div>
            <p className='md:text-[18px] mb-[40px] text-center font-semibold  text-[16px]'>Here are some of my skills on which I have been work past 2 years</p>
    

    <div className='w-full flex flex-wrap mt-[20px] gap-[50px] justify-center'>

{skills.map((skill,index)=>(
    <Tilt>
    <div  key={index}
  className='w-full md:max-w-[500px] rounded-[16px] md:p-[18px_36px] p-[10px_36px] max-w-[330px]' 
  style={{
    backgroundColor: 'rgba(17, 25, 40, 0.83)', 
    border: '1px solid rgba(255, 255, 255, 0.125)', 
    boxShadow: 'rgba(23, 92, 230, 0.15) 0px 4px 24px'
  }}>
        <div className='text-[28px] font-semibold mb-[20px] text-center text-white'>{skill.title}</div>
        <div className='flex justify-center flex-wrap gap-[12px] mb-[20px]]'>{skill.skills.map((item,index_K)=>(
            <div key={index_K} className='text-[16px] font-normal border-[1px] border-white text-white rounded-[12px] p-[12px_16px] flex items-center justify-center gap-[8px]'>
            <img src={item.image} className='w-[24px] h-[24px]  text-white'/>
            {item.name }
            </div>
        ))}</div>
    </div>  
    </Tilt>
  
))
       }       </div>
    
      </div>
    </div>


    
  )
}

export default Skills
