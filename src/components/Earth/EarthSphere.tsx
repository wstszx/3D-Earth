import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useEarthStore } from '../../store/earthStore';

interface EarthSphereProps {
  colorMap: THREE.Texture;
  normalMap: THREE.Texture;
  specularMap: THREE.Texture;
}

export function EarthSphere({ colorMap, normalMap, specularMap }: EarthSphereProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const { rotationSpeed } = useEarthStore();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += rotationSpeed;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshPhongMaterial
        map={colorMap}
        normalMap={normalMap}
        specularMap={specularMap}
        shininess={5}
      />
    </mesh>
  );
}