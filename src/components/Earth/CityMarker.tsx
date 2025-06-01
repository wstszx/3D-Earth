import { Html } from '@react-three/drei';
import * as THREE from 'three';

interface CityMarkerProps {
  name: string;
  lat: number;
  lon: number;
  population: number;
}

export function CityMarker({ name, lat, lon, population }: CityMarkerProps) {
  const radius = 1.01;
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);

  const position = new THREE.Vector3(
    -(radius * Math.sin(phi) * Math.cos(theta)),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );

  return (
    <group position={position}>
      <mesh>
        <sphereGeometry args={[0.01, 8, 8]} />
        <meshBasicMaterial color="red" />
      </mesh>
      <Html distanceFactor={10} position={[0, 0.02, 0]}>
        <div className="bg-white/80 text-xs px-1 rounded whitespace-nowrap">
          {name}: {population.toLocaleString()}
        </div>
      </Html>
    </group>
  );
}
