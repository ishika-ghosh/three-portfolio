import { useProgress, Html } from "@react-three/drei";

function CanvasLoader() {
  const { progress } = useProgress();
  return (
    <Html>
      <p className="mt-10">{progress.toString(2)}%</p>
    </Html>
  );
}

export default CanvasLoader;
