"use client";
import React, { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Preload, useTexture } from "@react-three/drei";
import { TextureLoader } from "three/src/loaders/TextureLoader";
// import CanvasLoader from "../Loader";

const Earth = () => {
  // const earth = useGLTF("./planet/scene.gltf");
  const [colorMap, bumpMap, cloudMap] = useTexture([
    "./earthTexture/earthmap1k.jpg",
    "./earthTexture/earthbump.jpg",
    "./earthTexture/earthCloud.png",
  ]);
  return (
    <>
      <ambientLight intensity={0.9} color={0xffffff} />

      {/* // <primitive object={earth.scene} scale={4} position-y={-2} rotation-y={0} /> */}
      <mesh scale={7} position={[0, -2, 0]}>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshPhongMaterial map={colorMap} bumpMap={bumpMap} bumpScale={-10} />
      </mesh>
      <mesh scale={7} position={[0, -2, 0]}>
        <sphereGeometry args={[0.63, 32, 32]} />
        <meshPhongMaterial map={cloudMap} transparent={true} />
      </mesh>
    </>
  );
};

const EarthCanvas = ({ id }) => {
  return (
    <Canvas
      id={id}
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
      <Suspense fallback={() => console.log("hello")}>
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
