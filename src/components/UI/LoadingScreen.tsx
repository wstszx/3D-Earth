export function LoadingScreen() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black text-white">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 border-4 border-t-blue-500 border-opacity-25 rounded-full animate-spin" />
        <p className="text-lg font-medium">Loading Earth...</p>
      </div>
    </div>
  );
}