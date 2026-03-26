import { KpiItem } from "@/types";
import StatusBadge from "./StatusBadge";
import { statusClasses } from "@/lib/utils";

interface KpiCardProps {
  item: KpiItem;
}

export default function KpiCard({ item }: KpiCardProps) {
  const getStatusColor = (status?: string) => {
    switch (status) {
      case "CRITICAL":
        return "text-rose-300";
      case "WARNING":
        return "text-amber-300";
      case "NORMAL":
        return "text-emerald-300";
      case "INFO":
        return "text-blue-300";
      default:
        return "text-white";
    }
  };

  const statusColorClass = getStatusColor(item.status);

  return (
    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.04] p-6 backdrop-blur-lg">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-semibold tracking-wider text-white/60 uppercase">
            {item.title}
          </p>
          <p className={`text-3xl font-black tracking-tight ${statusColorClass} mt-2`}>
            {item.value}
          </p>
          {item.subtitle && (
            <p className="text-xs text-white/50 mt-1">{item.subtitle}</p>
          )}
        </div>
        {item.status && item.status !== "INFO" && (
          <StatusBadge status={item.status} />
        )}
      </div>
    </div>
  );
}