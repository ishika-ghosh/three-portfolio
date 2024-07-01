"use client";
import React, { Suspense } from "react";
import { useGLTF, OrbitControls, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import CanvasLoader from "./CanvasLoader";
import { Float } from "@react-three/drei";

export function Model() {
  const alien = useGLTF("/alien.glb");
  return (
    <primitive object={alien.scene} scale={3} position-y={-0.7} rotation-y={0} />
  );
}

useGLTF.preload("/little_astronaut.glb");

function Alien() {
  return (
    <Canvas>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableDamping
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Float
          speed={2}
          rotationIntensity={1}
          floatIntensity={1}
          floatingRange={[1, 1.5]}
        >
          <Model />
        </Float>
        <Environment preset="dawn" />
      </Suspense>
    </Canvas>
  );
}

export default Alien;
