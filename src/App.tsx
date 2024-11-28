import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Earth } from './components/Earth/Earth';
import { EarthControls } from './components/Controls/EarthControls';
import { ControlPanel } from './components/UI/ControlPanel';
import { LoadingScreen } from './components/UI/LoadingScreen';

function App() {
  return (
    <div className="w-full h-screen relative bg-black">
      <Canvas camera={{ position: [0, 0, 3], fov: 45 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.1} />
          <directionalLight position={[5, 3, 5]} intensity={1} />
          <Earth />
          <EarthControls />
        </Suspense>
      </Canvas>
      <Suspense fallback={<LoadingScreen />}>
        <ControlPanel />
      </Suspense>
    </div>
  );
}

export default App;