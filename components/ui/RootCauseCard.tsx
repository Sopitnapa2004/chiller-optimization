import Link from "next/link";
import { RootCauseItem } from "@/types";
import StatusBadge from "./StatusBadge";

interface RootCauseCardProps {
  item: RootCauseItem;
}

export default function RootCauseCard({ item }: RootCauseCardProps) {
  return (
    <Link href={`/analytics?cause=${item.title.replace(/\s+/g, "-")}`}>
      <div className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-lg transition-all hover:border-emerald-500/30 hover:bg-white/[0.08]">
        <div className="mb-5 flex items-start justify-between">
          <h3 className="text-lg font-black tracking-tight text-white">
            {item.title}
          </h3>
          <StatusBadge status={item.status} />
        </div>

        <div className="mb-4 grid grid-cols-3 gap-3">
          {item.metrics.map((metric, index) => (
            <div
              key={index}
              className="rounded-lg border border-white/10 bg-white/[0.02] p-3 text-center"
            >
              <p className="text-xs font-semibold tracking-wide text-white/60 uppercase">
                {metric.label}
              </p>
              <p className="mt-1 text-lg font-black tracking-tight text-emerald-300">
                {metric.value}
              </p>
              <p className="text-xs text-white/40">{metric.threshold}</p>
            </div>
          ))}
        </div>

        <p className="text-sm text-white/70">{item.summary}</p>
      </div>
    </Link>
  );
}