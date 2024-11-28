import { create } from 'zustand';

interface EarthState {
  rotationSpeed: number;
  minDistance: number;
  maxDistance: number;
  setRotationSpeed: (speed: number) => void;
}

export const useEarthStore = create<EarthState>((set) => ({
  rotationSpeed: 0.001,
  minDistance: 1.5,
  maxDistance: 10,
  setRotationSpeed: (speed) => set({ rotationSpeed: speed }),
}));