import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense, useEffect, useRef, useState } from 'react';

const Earth = () => {
    const earth = useGLTF('./planet/scene.gltf');
    return (
        <primitive
            object={earth.scene}
            scale={3}
            position-y={0}
            rotation={[0, Math.PI / 4, 0]} // Example of rotation
        />
    );
};

const EarthCanvas = () => {
    const canvasRef = useRef();
    const [contextLost, setContextLost] = useState(false);  // State to track if context is lost

    const handleContextLost = (event) => {
        console.log('WebGL Context Lost');
        event.preventDefault();
        setContextLost(true); // Set state to indicate context loss
    };

    const handleContextRestored = () => {
        console.log('WebGL Context Restored');
        setContextLost(false); // Reset context lost state
        // You might want to reinitialize your resources here if needed
    };

    useEffect(() => {
        const canvasElement = canvasRef.current?.domElement;
        if (canvasElement) {
            canvasElement.addEventListener('webglcontextlost', handleContextLost);
            canvasElement.addEventListener('webglcontextrestored', handleContextRestored);
        }

        return () => {
            if (canvasElement) {
                canvasElement.removeEventListener('webglcontextlost', handleContextLost);
                canvasElement.removeEventListener('webglcontextrestored', handleContextRestored);
            }
        };
    }, []);

    useEffect(() => {
        if (contextLost) {
            console.log('Attempting to reload resources...');
            // Logic to reload or reset the scene (e.g., clearing memory and reloading models)
        }
    }, [contextLost]);

    return (
        <Canvas
            ref={canvasRef} // Attach ref to Canvas to track the WebGL context
            shadows
            frameloop="demand"
            dpr={[1, 2]}
            gl={{ preserveDrawingBuffer: true }}
            camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [-4, 3, 6],
            }}
        >
            <Suspense fallback={<div>Loading...</div>}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
                <OrbitControls autoRotate enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
                <Earth />
                <Preload all />
            </Suspense>
        </Canvas>
    );
};

export default EarthCanvas;
