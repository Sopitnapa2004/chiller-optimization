export default function LoadingPage() {
  return (
    <main className="min-h-screen bg-[#030B16] text-white flex items-center justify-center">
      <div className="text-center">
        <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-white/10 border-t-emerald-400" />
        <p className="mt-4 text-slate-400">Loading workspace...</p>
      </div>
    </main>
  );
}