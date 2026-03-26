import { AlertItem } from "@/types";
import SectionCard from "./SectionCard";

export default function AlertDetailPanel({ alert }: { alert?: AlertItem }) {
  if (!alert) {
    return (
      <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 text-center">
        <p className="text-sm text-slate-400">Select an alert to view details</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
        <p className="text-sm text-slate-500">Alert</p>
        <p className="mt-2 font-semibold text-white">{alert.message}</p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
        <p className="text-sm text-slate-500">Description</p>
        <p className="mt-2 text-sm text-slate-300">{alert.description || "No additional details"}</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
          <p className="text-sm text-slate-500">Unit</p>
          <p className="mt-2 font-semibold text-white">{alert.unit}</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
          <p className="text-sm text-slate-500">Status</p>
          <p className="mt-2 font-semibold text-white">{alert.status}</p>
        </div>
      </div>
    </div>
  );
}
