import * as THREE from 'three';

export function Atmosphere() {
  return (
    <mesh scale={[1.01, 1.01, 1.01]}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshPhongMaterial
        transparent
        opacity={0.2}
        color="#88c4f7"
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
}