export interface CityData {
  name: string;
  lat: number;
  lon: number;
  population: number;
}

export const CITIES: CityData[] = [
  { name: 'Tokyo', lat: 35.6895, lon: 139.6917, population: 37400068 },
  { name: 'Delhi', lat: 28.7041, lon: 77.1025, population: 29399141 },
  { name: 'Shanghai', lat: 31.2304, lon: 121.4737, population: 26317104 },
  { name: 'São Paulo', lat: -23.5505, lon: -46.6333, population: 21846507 },
  { name: 'Mexico City', lat: 19.4326, lon: -99.1332, population: 21671908 },
];

