import AppShell from "@/components/layout/AppShell";
import RecommendationCard from "@/components/ui/RecommendationCard";
import RiskUnitTable from "@/components/ui/RiskUnitTable";
import SectionCard from "@/components/ui/SectionCard";
import TrendChart from "@/components/ui/TrendChart";
import { buildings, recommendations, riskUnits, unitTrendData } from "@/lib/mock-data";
import { getTrendDataByFilters, filterRiskUnits } from "@/lib/utils";

export default async function BuildingDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const building = buildings.find((b) => b.id === id);
  const buildingUnits = filterRiskUnits(riskUnits, { building: id });
  const trend = getTrendDataByFilters({ building: id }, unitTrendData);

  const mainIssue =
    building?.criticalCount && building.criticalCount > 0
      ? "Cooling tower / condenser related performance degradation"
      : "No major issue detected";

  const affectedUnits = buildingUnits
    .filter((u) => u.status !== "NORMAL")
    .map((u) => u.id)
    .join(", ");

  return (
    <AppShell title={`Asset Detail • ${building?.name ?? id}`}>
      <div className="space-y-8">
        <SectionCard title="Building Summary">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <p className="text-sm text-slate-500">Building</p>
              <p className="mt-2 text-2xl font-black text-white">{building?.name ?? id}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <p className="text-sm text-slate-500">Units</p>
              <p className="mt-2 text-2xl font-black text-white">{building?.units ?? "--"}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <p className="text-sm text-slate-500">Avg. Power/Ton</p>
              <p className="mt-2 text-2xl font-black text-white">
                {building ? building.avgPowerTon.toFixed(2) : "--"}
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <p className="text-sm text-slate-500">Critical</p>
              <p className="mt-2 text-2xl font-black text-rose-300">
                {building?.criticalCount ?? "--"}
              </p>
            </div>
          </div>
        </SectionCard>

        <SectionCard title="Problem Summary">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <p className="text-sm text-slate-500">Main Issue</p>
              <p className="mt-2 text-white font-semibold">{mainIssue}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <p className="text-sm text-slate-500">Affected Units</p>
              <p className="mt-2 text-white font-semibold">
                {affectedUnits || "No affected units"}
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <p className="text-sm text-slate-500">Recommended Action</p>
              <p className="mt-2 text-white font-semibold">
                Inspect tower performance and verify condenser water flow
              </p>
            </div>
          </div>
        </SectionCard>

        <div className="grid gap-6 xl:grid-cols-[1.6fr_1fr]">
          <SectionCard title="Building Trend">
            <TrendChart data={trend} title={building?.name ?? id} />
          </SectionCard>

          <SectionCard title="Recommended Actions">
            <div className="space-y-4">
              {recommendations.slice(0, 4).map((item) => (
                <RecommendationCard key={item.id} item={item} />
              ))}
            </div>
          </SectionCard>
        </div>

        <SectionCard title="Building Units">
          <RiskUnitTable units={buildingUnits} />
        </SectionCard>
      </div>
    </AppShell>
  );
}