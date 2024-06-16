"use client";

import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { TextureLoader } from "three/src/loaders/TextureLoader";

function MoonCanvas() {
  return (
    <Canvas>
      <ambientLight intensity={0.3} />

      <directionalLight intensity={2} position={[1, 0, -0.25]} />
      <OrbitControls
        autoRotate
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <Moon />
    </Canvas>
  );
}
const Moon = () => {
  const [color, normal, aoMap] = useLoader(TextureLoader, [
    "./moonTexture/moon-texture.jpg",
    "./moonTexture/normal.webp",
    "./moonTexture/moon-displacement.jpg",
  ]);

  return (
    <mesh scale={2.7}>
      <sphereGeometry args={[1, 64, 64]} />

      <meshStandardMaterial map={color} normalMap={normal} aoMap={aoMap} />
    </mesh>
  );
};
export default MoonCanvas;
