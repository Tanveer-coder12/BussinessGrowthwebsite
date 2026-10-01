export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="w-10 h-10 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin mx-auto" />
        <p className="mt-4 text-gray-600">Loading Nova...</p>
      </div>
    </div>
  );
}