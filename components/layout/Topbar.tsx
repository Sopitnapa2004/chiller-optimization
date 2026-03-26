export default function Topbar({ title }: { title: string }) {
  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-[#081220]/80 backdrop-blur">
      <div className="flex flex-wrap items-center justify-between gap-4 px-8 py-5">
        <div>
          <p className="text-sm text-slate-500">Seagate Korat Facility</p>
          <h2 className="text-2xl font-bold tracking-tight text-white">{title}</h2>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300">
            Today
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300">
            Last updated: 14:28
          </div>
          <div className="rounded-2xl border border-white/10 bg-emerald-500/15 px-4 py-2 text-sm font-semibold text-emerald-300">
            Chief Engineer
          </div>
        </div>
      </div>
    </header>
  );
}