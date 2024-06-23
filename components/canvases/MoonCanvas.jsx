"use client";
import { Canvas, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { useScroll } from "framer-motion";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { motion } from "framer-motion-3d";

function MoonCanvas() {
  const scene = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scene,
    offset: ["start end", "end start"],
  });
  const [color, normal, aoMap] = useLoader(TextureLoader, [
    "./moonTexture/moon-texture.jpg",
    "./moonTexture/normal.webp",
    "./moonTexture/moon-displacement.jpg",
  ]);
  return (
    <Canvas ref={scene}>
      <ambientLight intensity={0.3} color={"#b7ab98"} />

      <directionalLight intensity={2} position={[1, 0, -0.25]} />

      <motion.mesh scale={2.7} rotation-y={scrollYProgress}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial map={color} normalMap={normal} aoMap={aoMap} />
      </motion.mesh>
    </Canvas>
  );
}

export default MoonCanvas;
