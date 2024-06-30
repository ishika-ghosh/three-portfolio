"use client";
import React, { Suspense, useRef } from "react";
import { useGLTF, OrbitControls, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion-3d";
import CanvasLoader from "./CanvasLoader";
import { Float } from "@react-three/drei";
import { zoomIn } from "@/utils/motion";

export function Model() {
  const astronaut = useGLTF("/little_astronaut.glb");
  return (
    <primitive
      object={astronaut.scene}
      scale={3}
      position-y={-7}
      rotation-y={0}
    />
  );
}

useGLTF.preload("/little_astronaut.glb");

function Astronaut() {
  return (
    <Canvas>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableDamping
          enableZoom={false}
          maxPolarAngle={Math.PI / 4}
          minPolarAngle={Math.PI / 4}
          maxAzimuthAngle={Math.PI / 5}
          minAzimuthAngle={Math.PI / 10}
        />
        {/* <ambientLight intensity={5} color={0xffffff} /> */}
        <Float
          speed={2}
          rotationIntensity={1} // XYZ rotation intensity, defaults to 1
          floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
          floatingRange={[1, 1.5]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        >
          <Model />
        </Float>
        <Environment preset="dawn" />
      </Suspense>
    </Canvas>
  );
}

export default Astronaut;
