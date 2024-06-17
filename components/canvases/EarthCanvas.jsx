"use client";
import { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useTexture } from "@react-three/drei";
import CanvasLoader from "./CanvasLoader";
import { motion } from "framer-motion-3d";
import { useScroll, useTransform } from "framer-motion";

const Earth = ({ scale }) => {
  const [colorMap, bumpMap, cloudMap] = useTexture([
    "./earthTexture/earthmap1k.jpg",
    "./earthTexture/earthbump1k.jpg",
    "./earthTexture/earthCloud.png",
  ]);
  return (
    <>
      <ambientLight intensity={1} color={0xffffff} />
      <motion.group scale={scale}>
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.6, 32, 32]} />
          <meshPhongMaterial map={colorMap} />
        </mesh>
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.63, 32, 32]} />
          <meshPhongMaterial map={cloudMap} transparent={true} />
        </mesh>
      </motion.group>
    </>
  );
};

const EarthCanvas = () => {
  const earthScene = useRef(null);
  const { scrollYProgress } = useScroll({
    target: earthScene,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [4.5, 4, 3.5]);
  return (
    <Canvas
      ref={earthScene}
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
        <Earth scale={scale} />

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
