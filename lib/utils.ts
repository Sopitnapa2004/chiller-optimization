import {
  AlertItem,
  BuildingSummary,
  RecommendationItem,
  RiskUnit,
  RootCauseItem,
  TrendPoint,
  UnitTrendMap,
  KpiCardItem,
} from "@/types";
import { buildingTrendMap, systemTrendData } from "./mock-data";

export function statusClasses(status: string) {
  switch (status) {
    case "CRITICAL":
      return "bg-rose-500/15 text-rose-300 border-rose-500/30";
    case "WARNING":
      return "bg-amber-500/15 text-amber-300 border-amber-500/30";
    case "NORMAL":
      return "bg-emerald-500/15 text-emerald-300 border-emerald-500/30";
    default:
      return "bg-sky-500/15 text-sky-300 border-sky-500/30";
  }
}

export function getDisplayFilterText(value?: string, fallback = "All") {
  return value && value.trim() !== "" ? value : fallback;
}

export function filterBuildings(buildings: BuildingSummary[], buildingId?: string) {
  if (!buildingId) return buildings;
  return buildings.filter((b) => b.id === buildingId);
}

export function filterRiskUnits(
  units: RiskUnit[],
  filters: { building?: string; unit?: string; system?: string }
) {
  return units.filter((item) => {
    const okBuilding = !filters.building || item.buildingId === filters.building;
    const okUnit = !filters.unit || item.id === filters.unit;
    const okSystem = !filters.system || item.system === filters.system;
    return okBuilding && okUnit && okSystem;
  });
}

export function filterAlerts(
  alerts: AlertItem[],
  filters: { building?: string; unit?: string; system?: string; criticalOnly?: boolean }
) {
  return alerts.filter((item) => {
    const okBuilding = !filters.building || item.buildingId === filters.building;
    const okUnit = !filters.unit || item.unit === filters.unit;
    const okSystem = !filters.system || item.system === filters.system;
    const okCritical = !filters.criticalOnly || item.severity === "CRITICAL";
    return okBuilding && okUnit && okSystem && okCritical;
  });
}

export function filterRootCauses(rootCauses: RootCauseItem[], system?: string) {
  if (!system) return rootCauses;
  return rootCauses.filter((item) => item.id === system);
}

export function filterRecommendations(
  items: RecommendationItem[],
  system?: string
) {
  if (!system) return items;
  return items.filter((item) => item.system === system || !item.system);
}

export function getTrendDataByFilters(
  filters: { building?: string; unit?: string; system?: string },
  unitTrendData: UnitTrendMap
): TrendPoint[] {
  if (filters.unit && unitTrendData[filters.unit]) {
    return unitTrendData[filters.unit];
  }

  if (filters.building && buildingTrendMap[filters.building]) {
    return buildingTrendMap[filters.building];
  }

  return systemTrendData;
}

export function filterAnomaliesOnly(data: TrendPoint[], anomaliesOnly: boolean): TrendPoint[] {
  if (!anomaliesOnly) return data;
  return data.filter((point) => point.anomaly === true);
}

export function buildAnalyticsKpis(
  riskUnits: RiskUnit[],
  alerts: AlertItem[],
  trendData: TrendPoint[]
): KpiCardItem[] {
  const criticalUnits = riskUnits.filter((u) => u.status === "CRITICAL").length;
  const warningUnits = riskUnits.filter((u) => u.status === "WARNING").length;
  const normalUnits = riskUnits.filter((u) => u.status === "NORMAL").length;
  const avgEfficiency =
    riskUnits.length > 0
      ? (riskUnits.reduce((sum, u) => sum + u.efficiency, 0) / riskUnits.length).toFixed(2)
      : "0.00";
  const recentAnomalies = trendData.filter((p) => p.anomaly).length;

  return [
    {
      title: "Total Units",
      value: riskUnits.length.toString(),
      subtitle: "Units analyzed",
      status: "INFO",
    },
    {
      title: "Normal",
      value: normalUnits.toString(),
      subtitle: "Operating normally",
      status: "NORMAL",
    },
    {
      title: "Warning",
      value: warningUnits.toString(),
      subtitle: "Requires monitoring",
      status: "WARNING",
    },
    {
      title: "Critical",
      value: criticalUnits.toString(),
      subtitle: "Immediate action",
      status: "CRITICAL",
    },
    {
      title: "Avg Efficiency",
      value: avgEfficiency,
      subtitle: "kW/Ton",
      status: "INFO",
    },
    {
      title: "Anomalies",
      value: recentAnomalies.toString(),
      subtitle: "Last 24 hours",
      status: recentAnomalies > 0 ? "WARNING" : "NORMAL",
    },
  ];
}
