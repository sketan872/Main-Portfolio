 import { FaArrowUp } from 'react-icons/fa';
import styled from 'styled-components';
import './App.css';
import StarCanvasStyle from './canvas/Stars';
import Hero from './components/Hero';
import Navbar from "./components/Navbar";
import Contact from './Section/Contact';
import Education from './Section/Education';
import Experience from './Section/Experience';
import Footer from './Section/Footer';
import Projects from './Section/Projects';
import Skills from './Section/Skills';
const Container=styled.div`
padding-bottom:100px;
background:linear-gradient(
  38.73deg,
  rgba(204,0,187,0.15) 0%,
  rgba(201,32,184,0) 50%
),
linear-gradient(141.27deg,
rgba(0,70,209,0) 50%,
rgba(0,70,209,0.15) 100%

);
width:100%;
clip-path:polygon(0 0,100% 0,100% 100%,30% 98% ,0 100%);


`
function App() {
  
  const handlescroll = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to the top
  };


  return (
<>


<Navbar/>
<Container>

<Hero/>

<StarCanvasStyle/>

<Skills/>
<Experience/>

</Container>
<Container>
<Education/>

</Container>
<Container>
<Projects/>
<Contact/>
<Footer/>
</Container>




<button 
        onClick={handlescroll} 
        className="fixed bottom-6 right-6 md:w-[60px] md:h-[60px] w-[50px] h-[50px] md:px-4 md:py-2 px-3 py-1 font-semibold text-white bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg shadow-lg hover:bg-gradient-to-l hover:from-indigo-600 hover:to-purple-500 transform hover:scale-105 transition-all duration-300 ease-in-out flex justify-center items-center gap-2 z-10"
      >
        <FaArrowUp className="text-white text-lg" /> {/* Arrow Icon */}
      </button>



</>    



    
  )
}

export default App
