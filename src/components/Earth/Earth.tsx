import { useTexture } from '@react-three/drei';
import { EarthSphere } from './EarthSphere';
import { Atmosphere } from './Atmosphere';
import { CloudLayer } from './CloudLayer';
import { EARTH_TEXTURES } from '../../constants/textures';
import { LoadingScreen } from '../UI/LoadingScreen';

export function Earth() {
  const [colorMap, normalMap, specularMap, cloudsMap] = useTexture([
    EARTH_TEXTURES.colorMap,
    EARTH_TEXTURES.normalMap,
    EARTH_TEXTURES.specularMap,
    EARTH_TEXTURES.cloudsMap
  ]);

  return (
    <group>
      <EarthSphere
        colorMap={colorMap}
        normalMap={normalMap}
        specularMap={specularMap}
      />
      <Atmosphere />
      <CloudLayer cloudsMap={cloudsMap} />
    </group>
  );
}