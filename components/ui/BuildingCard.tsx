import Link from "next/link";
import { BuildingSummary } from "@/types";
import StatusBadge from "./StatusBadge";

interface BuildingCardProps {
  building: BuildingSummary;
}

export default function BuildingCard({ building }: BuildingCardProps) {
  return (
    <Link href={`/device/${building.name}`}>
      <div className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-lg transition-all hover:border-emerald-500/30 hover:bg-white/[0.08]">
        <div className="mb-5 flex items-start justify-between">
          <h3 className="text-lg font-black tracking-tight text-white">
            {building.name}
          </h3>
          <StatusBadge status={building.status} />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs font-semibold tracking-wide text-white/60 uppercase">
              Units
            </p>
            <p className="mt-1 text-2xl font-black tracking-tight text-emerald-300">
              {building.units}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-wide text-white/60 uppercase">
              Avg kW/ton
            </p>
            <p className="mt-1 text-2xl font-black tracking-tight text-white">
              {building.avgPowerTon.toFixed(2)}
            </p>
          </div>
        </div>

        <div className="mt-5 border-t border-white/10 pt-4">
          <div className="flex justify-between text-xs">
            <span className="text-amber-300/80">
              Warnings: {building.warningCount}
            </span>
            <span className="text-rose-300/80">
              Critical: {building.criticalCount}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}