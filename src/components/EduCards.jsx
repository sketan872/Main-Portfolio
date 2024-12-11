import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import styled from 'styled-components';
const Grade=styled.div`
font-size:14px;
font-weight:500;
color:white;
display:flex;
flex-wrap:wrap;
gap:8px;
@media only screen and (max-width:768px)
{
    font-size:12px;
}
`


const Description=styled.div`
width:100%;
font-size:15px;
font-weight:400;
color:grey;
margin-bottom:10px;
@media only screen and (max-width:768px)
{
 font-size:12px;
}

`
const Span=styled.div`
display:-webkit-box;
max-width:100%;

`
// const Description=styled.div``
const Top=styled.div`
width:100%;
display:flex;
max-width:100%;
gap:12px`;
const Image=styled.div`
height:50px;
border-radius:10px;
margin-top:4px;
@media only screen and (max-width:768px)
{
    height:40px;
}
`;
const Body=styled.div`
width:100%;
display:flex;
flex-direction:column;
`;
const School=styled.div`
font-size:18px;
font-weight:600px;
color:white;
@media only screen and (max-width:768px)
{
 font-size:14px;
}

`;
const Degree=styled.div`
font-size:14px;
font-weight:500px;
color:aqua;
@media only screen and (max-width:768px)
{
 font-size:12px;
}

`;
const Date=styled.div`
font-size:12px;
font-weight:400px;
color:white;
@media only screen and (max-width:768px)
{
 font-size:10px;
}

`;
const EduCards = ({education}) => {
  return (
    <VerticalTimelineElement 
    icon={
        <img src={education?.img} width='100%' height='100%' alt="Not Found" className='rounded-[50%] object-cover' />
    }
    contentStyle={{
        display:"flex",
flexDirection:"column",
gap:"12px",
background:"#1d1836",
color:"black",
boxShadow:"rgba(23,92,230,0.15) 0px 4px 24px",
backgroundColor:'rgba(17,25,40,0.83)',
border:"1px solid rgba(255,255,255,0.125)",
borderRadius:"6px",
    }}
    contentArrowStyle={{
        borderRight:"7px solid rgba(255,255,255,0.3)",

    }}

    date={education?.date}
    >
    <Top>
        <Image src={education?.img}/>
        <Body>
            <School>{education?.school}</School>
            <Degree>{education?.degree}</Degree>
            
            <Date>{education?.date}</Date>
        </Body>
        </Top>
        <Grade>
            <b>Grade :</b>
            {
                education?.grade
            }
        </Grade>
        <Description>
            {education?.desc&&<Span>{education.desc}</Span>}
            
        </Description>
    
      
    </VerticalTimelineElement>
  )
}

export default EduCards;
