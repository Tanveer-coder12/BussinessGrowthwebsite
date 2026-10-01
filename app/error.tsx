"use client";

export default function Error({
  reset
}: {
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <h2 className="text-4xl font-bold">Something went wrong</h2>
        <p className="text-gray-600 mt-4">
          We couldn't load this page. Please try again.
        </p>
        <button
          onClick={() => reset()}
          className="mt-8 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}