"use client";
import React, { Suspense, useRef } from "react";
import { useGLTF, OrbitControls, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion-3d";
import CanvasLoader from "./CanvasLoader";
import { zoomIn } from "@/utils/motion";

export function Model(props) {
  const { nodes, materials } = useGLTF("/little_astronaut.glb");
  return (
    <motion.group
      {...props}
      dispose={null}
      scale={5}
      position={[0, -8, 0]}
      variants={zoomIn(0.25, 0.75)}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.Character_Texture}
        position={[0, 1.636, -0.136]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_6.geometry}
        material={materials.Character_Texture}
        position={[0, 3.106, 0.123]}
        scale={[1.468, 1.531, 1.494]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_8.geometry}
        material={materials.Character_Texture}
        position={[0, 1.835, -1.056]}
        scale={[0.776, 0.394, 0.394]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_10.geometry}
        material={materials.Character_Texture}
        position={[0, 1.91, -1.041]}
      />
    </motion.group>
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
        <Model />
        <Environment preset="dawn" />
      </Suspense>
    </Canvas>
  );
}

export default Astronaut;
