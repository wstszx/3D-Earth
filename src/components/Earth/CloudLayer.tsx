import * as THREE from 'three';

interface CloudLayerProps {
  cloudsMap: THREE.Texture;
}

export function CloudLayer({ cloudsMap }: CloudLayerProps) {
  return (
    <mesh scale={[1.003, 1.003, 1.003]}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshPhongMaterial
        map={cloudsMap}
        transparent
        opacity={0.4}
        depthWrite={false}
      />
    </mesh>
  );
}