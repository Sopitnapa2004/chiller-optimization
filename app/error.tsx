"use client";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <main className="min-h-screen bg-[#030B16] text-white flex items-center justify-center px-6">
      <div className="max-w-lg text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-slate-500">System Error</p>
        <h1 className="mt-4 text-4xl font-black">Something went wrong</h1>
        <p className="mt-4 text-slate-400">{error.message}</p>
        <button
          onClick={() => reset()}
          className="mt-8 rounded-2xl bg-emerald-500 px-5 py-3 font-semibold text-slate-950"
        >
          Try Again
        </button>
      </div>
    </main>
  );
}