import AppShell from "@/components/layout/AppShell";
import RecommendationCard from "@/components/ui/RecommendationCard";
import SectionCard from "@/components/ui/SectionCard";
import TrendChart from "@/components/ui/TrendChart";
import StatusBadge from "@/components/ui/StatusBadge";
import { recommendations, riskUnits, unitTrendData } from "@/lib/mock-data";

export default async function DeviceDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const unit = riskUnits.find((item) => item.id === id);
  const trend = unitTrendData[id] ?? [];

  return (
    <AppShell title={`Unit Detail • ${id}`}>
      <div className="space-y-8">
        <SectionCard title="Unit Overview">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-6">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <p className="text-sm text-slate-500">Unit</p>
              <p className="mt-2 text-2xl font-black text-white">{id}</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <p className="text-sm text-slate-500">Building</p>
              <p className="mt-2 text-2xl font-black text-white">
                {unit?.building ?? "Unknown"}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <p className="text-sm text-slate-500">Efficiency</p>
              <p className="mt-2 text-2xl font-black text-white">
                {unit ? unit.efficiency.toFixed(2) : "--"} kW/Ton
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <p className="text-sm text-slate-500">Approach</p>
              <p className="mt-2 text-2xl font-black text-white">
                {unit ? unit.approach.toFixed(1) : "--"}°F
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <p className="text-sm text-slate-500">Risk Score</p>
              <p className="mt-2 text-2xl font-black text-white">
                {unit?.riskScore ?? "--"}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <p className="text-sm text-slate-500">Status</p>
              <div className="mt-3">
                <StatusBadge status={unit?.status ?? "WARNING"} />
              </div>
            </div>
          </div>
        </SectionCard>

        <SectionCard title="Problem Breakdown">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <p className="text-sm text-slate-500">Condenser</p>
              <p className="mt-2 text-white font-semibold">Cond. Approach: 5.8°F</p>
              <p className="text-slate-400 text-sm">Limit: &lt; 5°F</p>
              <p className="mt-2 text-amber-300 text-sm">Warning</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <p className="text-sm text-slate-500">Evaporator</p>
              <p className="mt-2 text-white font-semibold">Setpoint: 42°F</p>
              <p className="text-slate-400 text-sm">Target: 38–46°F</p>
              <p className="mt-2 text-emerald-300 text-sm">Normal</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <p className="text-sm text-slate-500">Cooling Tower</p>
              <p className="mt-2 text-white font-semibold">Tower Approach: 6.4°F</p>
              <p className="text-slate-400 text-sm">Limit: &lt; 5°F</p>
              <p className="mt-2 text-rose-300 text-sm">Critical</p>
            </div>
          </div>
        </SectionCard>

        <SectionCard title="Why This Matters">
          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <p className="text-sm leading-7 text-slate-300">
              High condenser approach and cooling tower inefficiency are likely reducing heat rejection performance,
              which directly increases system kW/Ton and raises operational risk.
            </p>
          </div>
        </SectionCard>

        <div className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
          <SectionCard title="Performance Trend">
            <TrendChart data={trend} title={`Historical Trend • ${id}`} showThreshold />
          </SectionCard>

          <SectionCard title="Recommended Actions">
            <div className="space-y-4">
              {recommendations
                .filter((item) => !unit?.system || !item.system || item.system === unit.system)
                .slice(0, 3)
                .map((item) => (
                  <RecommendationCard key={item.id} item={item} />
                ))}
            </div>
          </SectionCard>
        </div>
      </div>
    </AppShell>
  );
}