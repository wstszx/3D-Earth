import { Compass, Globe2, Search, Settings } from 'lucide-react';
import { useEarthStore } from '../../store/earthStore';

export function ControlPanel() {
  const { rotationSpeed, setRotationSpeed } = useEarthStore();

  return (
    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <Globe2 className="w-5 h-5" />
          <span className="text-sm font-medium">Rotation Speed</span>
          <input
            type="range"
            min="0"
            max="0.02"
            step="0.001"
            value={rotationSpeed}
            onChange={(e) => setRotationSpeed(parseFloat(e.target.value))}
            className="w-32"
          />
        </div>
        
        <div className="flex gap-2">
          <button className="p-2 hover:bg-gray-100 rounded-lg" title="Search Location">
            <Search className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg" title="Toggle Compass">
            <Compass className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg" title="Settings">
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}