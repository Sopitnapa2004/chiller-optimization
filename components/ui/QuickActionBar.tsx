"use client";

export default function QuickActionBar() {
  return (
    <div className="flex flex-wrap gap-3">
      <button className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-emerald-500/15 hover:text-emerald-300">
        🔍 View Anomalies
      </button>
      <button className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-rose-500/15 hover:text-rose-300">
        ⚠️ Critical Only
      </button>
      <button className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-blue-500/15 hover:text-blue-300">
        📊 Export Data
      </button>
    </div>
  );
}
