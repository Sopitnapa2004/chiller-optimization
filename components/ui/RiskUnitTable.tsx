import { RiskUnit } from "@/types";
import StatusBadge from "./StatusBadge";

interface RiskUnitTableProps {
  units: RiskUnit[];
}

export default function RiskUnitTable({ units }: RiskUnitTableProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-lg overflow-hidden">
      <div className="border-b border-white/10 px-6 py-4">
        <h3 className="text-lg font-black tracking-tight text-white">
          High Risk Units
        </h3>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10 bg-white/[0.02]">
              <th className="px-6 py-3 text-left text-xs font-semibold tracking-wider text-white/60 uppercase">
                Unit ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold tracking-wider text-white/60 uppercase">
                Building
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold tracking-wider text-white/60 uppercase">
                Efficiency
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold tracking-wider text-white/60 uppercase">
                Approach
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold tracking-wider text-white/60 uppercase">
                Risk Score
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold tracking-wider text-white/60 uppercase">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            {units.map((unit) => (
              <tr
                key={unit.id}
                className="transition-colors hover:bg-white/[0.08]"
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-white">
                  {unit.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-white/70">
                  {unit.building}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                  {unit.efficiency.toFixed(2)} kW/ton
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                  {unit.approach.toFixed(1)}°C
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold">
                  <span
                    className={
                      unit.riskScore >= 80
                        ? "text-rose-300"
                        : unit.riskScore >= 60
                          ? "text-amber-300"
                          : "text-emerald-300"
                    }
                  >
                    {unit.riskScore}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <StatusBadge status={unit.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}