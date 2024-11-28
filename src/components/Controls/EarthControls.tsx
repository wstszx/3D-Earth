import { OrbitControls } from '@react-three/drei';
import { useEarthStore } from '../../store/earthStore';

export function EarthControls() {
  const { minDistance, maxDistance } = useEarthStore();

  return (
    <OrbitControls
      enablePan={true}
      enableZoom={true}
      enableRotate={true}
      minDistance={minDistance}
      maxDistance={maxDistance}
      autoRotate={false}
    />
  );
}