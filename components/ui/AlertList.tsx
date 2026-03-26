import Link from "next/link";
import { AlertItem } from "@/types";
import StatusBadge from "./StatusBadge";

export default function AlertList({ items }: { items: AlertItem[] }) {
  if (items.length === 0) {
    return (
      <div className="rounded-2xl border border-white/10 bg-black/20 p-6 text-sm text-slate-400">
        No alerts found for current filters.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {items.map((alert) => (
        <Link
          key={alert.id}
          href={`/device/${alert.unit}`}
          className="block rounded-2xl border border-white/10 bg-black/20 p-4 transition hover:border-white/20"
        >
          <div className="mb-3 flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">
                {alert.time} • {alert.building}
              </p>
              <h3 className="mt-1 text-base font-bold text-white">{alert.unit}</h3>
            </div>
            <StatusBadge status={alert.status} />
          </div>
          <p className="text-sm leading-6 text-slate-400">{alert.message}</p>
          <p className="mt-3 text-sm font-semibold text-white">
            Risk Score: {alert.riskScore}
          </p>
        </Link>
      ))}
    </div>
  );
}