"use client";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useTexture } from "@react-three/drei";
import CanvasLoader from "./CanvasLoader";

const Earth = () => {
  const [colorMap, bumpMap, cloudMap] = useTexture([
    "./earthTexture/earthmap1k.jpg",
    "./earthTexture/earthbump1k.jpg",
    "./earthTexture/earthCloud.png",
  ]);
  return (
    <>
      <ambientLight intensity={1} color={0xffffff} />
      <group scale={4.5}>
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.6, 32, 32]} />
          <meshPhongMaterial map={colorMap} />
        </mesh>
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.63, 32, 32]} />
          <meshPhongMaterial map={cloudMap} transparent={true} />
        </mesh>
      </group>
    </>
  );
};

const EarthCanvas = ({ id }) => {
  return (
    <Canvas
      id={id}
      className="overflow-visible"
      shadows
      frameloop="always"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;

// const earth = useGLTF("./planet/scene.gltf");
{
  /* // <primitive object={earth.scene} scale={4} position-y={-2} rotation-y={0} /> */
}
