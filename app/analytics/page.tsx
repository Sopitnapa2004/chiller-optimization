import AppShell from "@/components/layout/AppShell";
import AlertDetailPanel from "@/components/ui/AlertDetailPanel";
import AlertList from "@/components/ui/AlertList";
import FilterBar from "@/components/ui/FilterBar";
import KpiCard from "@/components/ui/KpiCard";
import QuickActionBar from "@/components/ui/QuickActionBar";
import RecommendationCard from "@/components/ui/RecommendationCard";
import RiskUnitTable from "@/components/ui/RiskUnitTable";
import RootCauseCard from "@/components/ui/RootCauseCard";
import SectionCard from "@/components/ui/SectionCard";
import TrendChart from "@/components/ui/TrendChart";
import { alerts, recommendations, riskUnits, rootCauses, unitTrendData } from "@/lib/mock-data";
import {
  buildAnalyticsKpis,
  filterAlerts,
  filterAnomaliesOnly,
  filterRecommendations,
  filterRiskUnits,
  filterRootCauses,
  getTrendDataByFilters,
} from "@/lib/utils";

export default async function AnalyticsPage({
  searchParams,
}: {
  searchParams: Promise<{
    building?: string;
    unit?: string;
    compareUnit?: string;
    system?: string;
    criticalOnly?: string;
    anomalies?: string;
    alert?: string;
  }>;
}) {
  const params = await searchParams;

  const criticalOnly = params.criticalOnly === "true";
  const anomaliesOnly = params.anomalies === "true";

  const filters = {
    building: params.building,
    unit: params.unit,
    system: params.system,
    criticalOnly,
  };

  const filteredAlerts = filterAlerts(alerts, filters);
  const filteredRiskUnits = filterRiskUnits(riskUnits, filters);
  const filteredRootCauses = filterRootCauses(rootCauses, params.system);
  const filteredRecommendations = filterRecommendations(recommendations, params.system);

  const baseTrend = getTrendDataByFilters(
    { building: params.building, unit: params.unit },
    unitTrendData
  );
  const chartData = filterAnomaliesOnly(baseTrend, anomaliesOnly);

  const kpis = buildAnalyticsKpis(filteredRiskUnits, filteredAlerts, baseTrend);
  const selectedAlert = filteredAlerts.find((item) => item.id === params.alert);

  return (
    <AppShell title="Analytics">
      <div className="space-y-8">
        <QuickActionBar />

        <SectionCard title="Filters">
          <FilterBar />
        </SectionCard>

        <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-6">
          {kpis.map((item) => (
            <KpiCard key={item.title} item={item} />
          ))}
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.7fr_1fr]">
          <SectionCard
            title="Trend Analysis"
            right={<span className="text-sm text-slate-500">Last 24 hours</span>}
          >
            <TrendChart
              data={chartData}
              title="Filtered Performance View"
            />
          </SectionCard>

          <SectionCard title="Alert Detail">
            <AlertDetailPanel alert={selectedAlert} />
          </SectionCard>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1fr_1fr]">
          <SectionCard title="Active Alerts">
            <AlertList items={filteredAlerts} />
          </SectionCard>

          <SectionCard title="Root Cause + Recommendations">
            <div className="space-y-6">
              <div className="grid gap-4">
                {filteredRootCauses.map((item) => (
                  <RootCauseCard key={item.id} item={item} />
                ))}
              </div>

              <div className="space-y-4">
                {filteredRecommendations.map((item) => (
                  <RecommendationCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          </SectionCard>
        </div>

        <SectionCard title="Top Risk Units">
          <RiskUnitTable units={filteredRiskUnits} />
        </SectionCard>
      </div>
    </AppShell>
  );
}