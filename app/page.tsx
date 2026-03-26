import AppShell from "@/components/layout/AppShell";
import BuildingCard from "@/components/ui/BuildingCard";
import KpiCard from "@/components/ui/KpiCard";
import QuickActionBar from "@/components/ui/QuickActionBar";
import RecommendationCard from "@/components/ui/RecommendationCard";
import RiskUnitTable from "@/components/ui/RiskUnitTable";
import RootCauseCard from "@/components/ui/RootCauseCard";
import SectionCard from "@/components/ui/SectionCard";
import TrendChart from "@/components/ui/TrendChart";
import {
  buildings,
  recommendations,
  riskUnits,
  rootCauses,
  systemTrendData,
} from "@/lib/mock-data";

const dashboardKpis = [
  { title: "Buildings", value: "6", subtitle: "Active facility zones", status: "INFO" as const },
  { title: "Normal", value: "12", subtitle: "Operating within range", status: "NORMAL" as const },
  { title: "Warning", value: "4", subtitle: "Requires monitoring", status: "WARNING" as const },
  { title: "Critical", value: "2", subtitle: "Immediate action required", status: "CRITICAL" as const },
  { title: "Avg. Power/Ton", value: "0.75", subtitle: "Target", status: "INFO" as const },
  { title: "Predicted Breach", value: "2", subtitle: "High-risk units", status: "WARNING" as const },
];

export default function DashboardPage() {
  return (
    <AppShell title="Dashboard">
      <div className="space-y-8">
        <QuickActionBar />

        <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-6">
          {dashboardKpis.map((item) => (
            <KpiCard key={item.title} item={item} />
          ))}
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.65fr_1fr]">
          <SectionCard
            title="System Performance"
            right={<span className="text-sm text-slate-500">Last 24 hours</span>}
          >
            <TrendChart data={systemTrendData} title="All Buildings Combined" />
          </SectionCard>

          <SectionCard title="Recommended Actions">
            <div className="space-y-4">
              {recommendations.slice(0, 4).map((item) => (
                <RecommendationCard key={item.id} item={item} />
              ))}
            </div>
          </SectionCard>
        </div>

        <SectionCard title="Building Health Overview">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {buildings.map((item) => (
              <BuildingCard key={item.id} building={item} />
            ))}
          </div>
        </SectionCard>

        <div className="grid gap-6 xl:grid-cols-[1.2fr_1fr]">
          <SectionCard title="Root Cause Overview">
            <div className="grid gap-4 md:grid-cols-3">
              {rootCauses.map((item) => (
                <RootCauseCard key={item.id} item={item} />
              ))}
            </div>
          </SectionCard>

          <SectionCard title="Top Risk Units">
            <RiskUnitTable units={riskUnits} />
          </SectionCard>
        </div>
      </div>
    </AppShell>
  );
}
