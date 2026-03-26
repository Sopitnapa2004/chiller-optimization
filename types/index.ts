export type Status = "NORMAL" | "WARNING" | "CRITICAL";

export interface BuildingSummary {
  id: string;
  name: string;
  units: number;
  avgPowerTon: number;
  warningCount: number;
  criticalCount: number;
  status: Status;
}

export interface RiskUnit {
  id: string;
  buildingId: string;
  building: string;
  efficiency: number;
  approach: number;
  riskScore: number;
  status: Status;
  system?: "condenser" | "evaporator" | "tower";
}

export interface RootCauseMetric {
  label: string;
  value: string;
  threshold: string;
}

export interface RootCauseItem {
  id: "condenser" | "evaporator" | "tower";
  title: string;
  status: Status;
  metrics: RootCauseMetric[];
  summary: string;
}

export interface RecommendationItem {
  id: string;
  title: string;
  description: string;
  priority: "LOW" | "MEDIUM" | "HIGH";
  system?: string;
}

export interface AlertItem {
  id: string;
  unit: string;
  buildingId: string;
  building: string;
  message: string;
  description?: string;
  time: string;
  status: Status;
  severity?: Status;
  riskScore: number;
  system?: string;
}

export interface KpiItem {
  title: string;
  value: string;
  subtitle?: string;
  status?: Status | "INFO";
}

export interface KpiCardItem {
  title: string;
  value: string;
  subtitle?: string;
  status: Status | "INFO";
}

export interface FilterState {
  building?: string;
  unit?: string;
  system?: string;
}

export interface TrendPoint {
  time: string;
  efficiency: number;
  approach: number;
  load: number;
  anomaly?: boolean;
}

export interface UnitTrendMap {
  [unitId: string]: TrendPoint[];
}
