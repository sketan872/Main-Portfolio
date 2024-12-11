import { PointMaterial, Points, Preload } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import * as random from "maath/random/dist/maath-random.esm";
import React, { Suspense, useRef, useState } from 'react';
import styled from 'styled-components';
const StyleCanvasWrapper =styled.div`
width:100%;
height:100vh;
top:0;
left:0;
z-index:-1;
position:absolute;
inset:0;
`;
const Stars = (props) => {
    const ref=useRef();
    const [sphere]=useState(()=>random.inSphere(new Float32Array(5000),{radius:1.2}));
  useFrame((stars,delta)=>{
    ref.current.rotation.x=delta/10;
    ref.current.rotation.y=delta/15;
  })
    return (
    <group rotation={[0,0,Math.PI/4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial transparent color="#add8e6" size={0.005}
            sizeAttenuation={true}
            depthWrite={false}
        />
      </Points>
      
    </group>
  )
}
const StarCanvasStyle=()=>{
    return (
        <StyleCanvasWrapper>
            <Canvas camera={{position:[0,0,1]}}>
                <Suspense fallback={null}>
                    <Stars />
                </Suspense>
                <Preload all/>
            </Canvas>
        </StyleCanvasWrapper>
    );
};
export default StarCanvasStyle;
