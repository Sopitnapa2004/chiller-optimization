import {
  AlertItem,
  BuildingSummary,
  KpiItem,
  RecommendationItem,
  RiskUnit,
  RootCauseItem,
  TrendPoint,
  UnitTrendMap,
} from "@/types";

export const dashboardKpis: KpiItem[] = [
  { title: "Total Buildings", value: "6", subtitle: "Active facility zones", status: "INFO" },
  { title: "Total Units", value: "18", subtitle: "Chiller-related equipment", status: "INFO" },
  { title: "Normal", value: "12", subtitle: "Operating within range", status: "NORMAL" },
  { title: "Warning", value: "4", subtitle: "Requires monitoring", status: "WARNING" },
  { title: "Critical", value: "2", subtitle: "Immediate action required", status: "CRITICAL" },
  { title: "Avg. Power/Ton", value: "0.75", subtitle: "Target = 0.75", status: "INFO" },
];

export const analyticsKpis: KpiItem[] = [
  { title: "Total Alerts", value: "18", subtitle: "Last 24 hours", status: "INFO" },
  { title: "Critical Events", value: "3", subtitle: "Immediate review", status: "CRITICAL" },
  { title: "Warning Events", value: "9", subtitle: "Monitor closely", status: "WARNING" },
  { title: "Predicted Breach", value: "2", subtitle: "Within 7 days", status: "WARNING" },
  { title: "Trend Change", value: "-5.8%", subtitle: "Efficiency degradation", status: "INFO" },
];

export const buildings: BuildingSummary[] = [
  { id: "B1", name: "Building 1", units: 3, avgPowerTon: 0.72, warningCount: 0, criticalCount: 0, status: "NORMAL" },
  { id: "B2", name: "Building 2", units: 2, avgPowerTon: 0.78, warningCount: 1, criticalCount: 0, status: "WARNING" },
  { id: "B3", name: "Building 3", units: 4, avgPowerTon: 0.74, warningCount: 0, criticalCount: 0, status: "NORMAL" },
  { id: "B4", name: "Building 4", units: 3, avgPowerTon: 0.83, warningCount: 1, criticalCount: 1, status: "CRITICAL" },
  { id: "B5", name: "Building 5", units: 2, avgPowerTon: 0.73, warningCount: 0, criticalCount: 0, status: "NORMAL" },
  { id: "B6", name: "Building 6", units: 4, avgPowerTon: 0.81, warningCount: 2, criticalCount: 1, status: "WARNING" },
];

export const rootCauses: RootCauseItem[] = [
  {
    id: "condenser",
    title: "Condenser",
    status: "WARNING",
    metrics: [
      { label: "Cond. Approach", value: "5.8°F", threshold: "< 5°F" },
      { label: "Entering Water", value: "91°F", threshold: "< 90°F" },
      { label: "Water Flow", value: "2400 GPM", threshold: "2500–3500 GPM" },
    ],
    summary: "Approach temperature and entering water temperature are trending above target.",
  },
  {
    id: "evaporator",
    title: "Evaporator",
    status: "NORMAL",
    metrics: [
      { label: "Evap. Approach", value: "4.1°F", threshold: "< 5°F" },
      { label: "Setpoint", value: "42°F", threshold: "38–46°F" },
      { label: "Water Flow", value: "2850 GPM", threshold: "2500–3500 GPM" },
    ],
    summary: "Evaporator is operating within acceptable performance range.",
  },
  {
    id: "tower",
    title: "Cooling Tower",
    status: "CRITICAL",
    metrics: [
      { label: "Tower Approach", value: "6.4°F", threshold: "< 5°F" },
      { label: "Wet Bulb Temp", value: "30°F", threshold: "< 29°F" },
    ],
    summary: "Cooling tower performance is likely contributing to system efficiency degradation.",
  },
];

export const riskUnits: RiskUnit[] = [
  {
    id: "CH-06",
    buildingId: "B6",
    building: "Building 6",
    efficiency: 0.96,
    approach: 6.0,
    riskScore: 95,
    status: "CRITICAL",
    system: "tower",
  },
  {
    id: "CH-08P",
    buildingId: "B6",
    building: "Building 6",
    efficiency: 0.92,
    approach: 5.8,
    riskScore: 82,
    status: "WARNING",
    system: "condenser",
  },
  {
    id: "CH-03",
    buildingId: "B4",
    building: "Building 4",
    efficiency: 0.88,
    approach: 5.1,
    riskScore: 74,
    status: "WARNING",
    system: "condenser",
  },
  {
    id: "CH-04",
    buildingId: "B2",
    building: "Building 2",
    efficiency: 0.84,
    approach: 4.9,
    riskScore: 63,
    status: "WARNING",
    system: "evaporator",
  },
];

export const recommendations: RecommendationItem[] = [
  {
    id: "r1",
    title: "Inspect condenser tube fouling",
    description: "High condenser approach suggests heat transfer degradation.",
    priority: "HIGH",
    system: "condenser",
  },
  {
    id: "r2",
    title: "Check cooling tower efficiency",
    description: "Cooling tower approach is above target and may be impacting overall system load.",
    priority: "HIGH",
    system: "tower",
  },
  {
    id: "r3",
    title: "Verify condenser water flow",
    description: "Measured flow is below recommended threshold.",
    priority: "MEDIUM",
    system: "condenser",
  },
  {
    id: "r4",
    title: "Schedule preventive maintenance",
    description: "Prepare inspection plan for top risk units within 3 days.",
    priority: "MEDIUM",
  },
  {
    id: "r5",
    title: "Validate evaporator setpoint",
    description: "Confirm setpoint remains in optimal range for current load profile.",
    priority: "LOW",
    system: "evaporator",
  }
];

export const alerts: AlertItem[] = [
  {
    id: "a1",
    unit: "CH-06",
    buildingId: "B6",
    building: "Building 6",
    message: "Approach temperature exceeded critical threshold.",
    time: "08:10",
    status: "CRITICAL",
    riskScore: 95,
    system: "tower",
  },
  {
    id: "a2",
    unit: "CH-08P",
    buildingId: "B6",
    building: "Building 6",
    message: "Flow fluctuation detected below optimal range.",
    time: "07:45",
    status: "WARNING",
    riskScore: 82,
    system: "condenser",
  },
  {
    id: "a3",
    unit: "CH-03",
    buildingId: "B4",
    building: "Building 4",
    message: "Efficiency degrading against baseline trend.",
    time: "07:10",
    status: "WARNING",
    riskScore: 74,
    system: "condenser",
  },
  {
    id: "a4",
    unit: "CH-04",
    buildingId: "B2",
    building: "Building 2",
    message: "Evaporator response slower than expected.",
    time: "06:30",
    status: "WARNING",
    riskScore: 63,
    system: "evaporator",
  }
];

export const systemTrendData: TrendPoint[] = [
  { time: "00:00", efficiency: 0.74, approach: 4.2, load: 58 },
  { time: "02:00", efficiency: 0.75, approach: 4.1, load: 55 },
  { time: "04:00", efficiency: 0.73, approach: 4.3, load: 52 },
  { time: "06:00", efficiency: 0.76, approach: 4.5, load: 61 },
  { time: "08:00", efficiency: 0.79, approach: 4.8, load: 66 },
  { time: "10:00", efficiency: 0.81, approach: 5.2, load: 72 },
  { time: "12:00", efficiency: 0.80, approach: 5.0, load: 74 },
  { time: "14:00", efficiency: 0.78, approach: 4.9, load: 69 },
  { time: "16:00", efficiency: 0.77, approach: 4.7, load: 65 },
  { time: "18:00", efficiency: 0.76, approach: 4.6, load: 60 },
  { time: "20:00", efficiency: 0.75, approach: 4.4, load: 57 },
  { time: "22:00", efficiency: 0.74, approach: 4.3, load: 54 }
];

export const unitTrendData: UnitTrendMap = {
  "CH-06": [
    { time: "00:00", efficiency: 0.88, approach: 5.0, load: 60 },
    { time: "02:00", efficiency: 0.89, approach: 5.1, load: 58 },
    { time: "04:00", efficiency: 0.90, approach: 5.2, load: 55 },
    { time: "06:00", efficiency: 0.92, approach: 5.4, load: 63 },
    { time: "08:00", efficiency: 0.94, approach: 5.7, load: 68 },
    { time: "10:00", efficiency: 0.95, approach: 5.9, load: 72 },
    { time: "12:00", efficiency: 0.96, approach: 6.0, load: 75 },
    { time: "14:00", efficiency: 0.95, approach: 5.9, load: 73 },
    { time: "16:00", efficiency: 0.94, approach: 5.8, load: 70 },
    { time: "18:00", efficiency: 0.93, approach: 5.7, load: 66 },
    { time: "20:00", efficiency: 0.92, approach: 5.5, load: 62 },
    { time: "22:00", efficiency: 0.91, approach: 5.3, load: 59 }
  ],
  "CH-08P": [
    { time: "00:00", efficiency: 0.84, approach: 4.9, load: 52 },
    { time: "02:00", efficiency: 0.85, approach: 5.0, load: 51 },
    { time: "04:00", efficiency: 0.86, approach: 5.1, load: 50 },
    { time: "06:00", efficiency: 0.88, approach: 5.3, load: 57 },
    { time: "08:00", efficiency: 0.89, approach: 5.4, load: 60 },
    { time: "10:00", efficiency: 0.91, approach: 5.6, load: 65 },
    { time: "12:00", efficiency: 0.92, approach: 5.8, load: 67 },
    { time: "14:00", efficiency: 0.91, approach: 5.6, load: 64 },
    { time: "16:00", efficiency: 0.90, approach: 5.5, load: 62 },
    { time: "18:00", efficiency: 0.89, approach: 5.4, load: 58 },
    { time: "20:00", efficiency: 0.88, approach: 5.2, load: 55 },
    { time: "22:00", efficiency: 0.87, approach: 5.1, load: 53 }
  ],
  "CH-03": [
    { time: "00:00", efficiency: 0.80, approach: 4.4, load: 48 },
    { time: "02:00", efficiency: 0.81, approach: 4.5, load: 47 },
    { time: "04:00", efficiency: 0.82, approach: 4.6, load: 49 },
    { time: "06:00", efficiency: 0.83, approach: 4.7, load: 53 },
    { time: "08:00", efficiency: 0.84, approach: 4.8, load: 57 },
    { time: "10:00", efficiency: 0.86, approach: 5.0, load: 61 },
    { time: "12:00", efficiency: 0.88, approach: 5.1, load: 64 },
    { time: "14:00", efficiency: 0.87, approach: 5.0, load: 62 },
    { time: "16:00", efficiency: 0.86, approach: 4.9, load: 59 },
    { time: "18:00", efficiency: 0.85, approach: 4.8, load: 56 },
    { time: "20:00", efficiency: 0.84, approach: 4.7, load: 53 },
    { time: "22:00", efficiency: 0.83, approach: 4.6, load: 50 }
  ],
  "CH-04": [
    { time: "00:00", efficiency: 0.76, approach: 4.1, load: 44 },
    { time: "02:00", efficiency: 0.77, approach: 4.2, load: 43 },
    { time: "04:00", efficiency: 0.78, approach: 4.3, load: 42 },
    { time: "06:00", efficiency: 0.79, approach: 4.4, load: 46 },
    { time: "08:00", efficiency: 0.80, approach: 4.5, load: 49 },
    { time: "10:00", efficiency: 0.82, approach: 4.7, load: 54 },
    { time: "12:00", efficiency: 0.84, approach: 4.9, load: 58 },
    { time: "14:00", efficiency: 0.83, approach: 4.8, load: 56 },
    { time: "16:00", efficiency: 0.82, approach: 4.7, load: 53 },
    { time: "18:00", efficiency: 0.81, approach: 4.6, load: 50 },
    { time: "20:00", efficiency: 0.80, approach: 4.5, load: 47 },
    { time: "22:00", efficiency: 0.79, approach: 4.4, load: 45 }
  ]
};

export const buildingTrendMap: Record<string, TrendPoint[]> = {
  B2: unitTrendData["CH-04"],
  B4: unitTrendData["CH-03"],
  B6: [
    { time: "00:00", efficiency: 0.86, approach: 5.0, load: 56 },
    { time: "02:00", efficiency: 0.87, approach: 5.1, load: 55 },
    { time: "04:00", efficiency: 0.88, approach: 5.15, load: 53 },
    { time: "06:00", efficiency: 0.90, approach: 5.35, load: 60 },
    { time: "08:00", efficiency: 0.915, approach: 5.55, load: 64 },
    { time: "10:00", efficiency: 0.93, approach: 5.75, load: 69 },
    { time: "12:00", efficiency: 0.94, approach: 5.9, load: 71 },
    { time: "14:00", efficiency: 0.93, approach: 5.75, load: 69 },
    { time: "16:00", efficiency: 0.92, approach: 5.65, load: 66 },
    { time: "18:00", efficiency: 0.91, approach: 5.55, load: 62 },
    { time: "20:00", efficiency: 0.90, approach: 5.35, load: 59 },
    { time: "22:00", efficiency: 0.89, approach: 5.2, load: 56 }
  ]
};

export const notifications = [
  {
    id: "n1",
    title: "Critical alert detected",
    description: "CH-06 exceeded approach threshold in Building 6.",
    time: "2 min ago",
    level: "CRITICAL",
  },
  {
    id: "n2",
    title: "Maintenance task recommended",
    description: "Cooling tower inspection suggested for Building 6.",
    time: "18 min ago",
    level: "WARNING",
  },
  {
    id: "n3",
    title: "Daily report generated",
    description: "Executive summary for today is ready to export.",
    time: "1 hour ago",
    level: "INFO",
  },
];

export const auditLogs = [
  {
    id: "l1",
    time: "2026-03-26 14:20",
    action: "Viewed Analytics",
    user: "Chief Engineer",
    target: "Building 6 / CH-06",
    result: "Success",
  },
  {
    id: "l2",
    time: "2026-03-26 14:10",
    action: "Opened Device Detail",
    user: "Maintenance Lead",
    target: "CH-08P",
    result: "Success",
  },
  {
    id: "l3",
    time: "2026-03-26 13:55",
    action: "Exported Report",
    user: "Operations Manager",
    target: "Daily Efficiency Report",
    result: "Success",
  },
  {
    id: "l4",
    time: "2026-03-26 13:30",
    action: "Updated Threshold Rule",
    user: "System Admin",
    target: "Condenser Approach Limit",
    result: "Success",
  },
];

export const users = [
  {
    id: "u1",
    name: "Chief Engineer",
    email: "chief.engineer@company.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: "u2",
    name: "Maintenance Lead",
    email: "maintenance.lead@company.com",
    role: "Engineer",
    status: "Active",
  },
  {
    id: "u3",
    name: "Operations Manager",
    email: "ops.manager@company.com",
    role: "Manager",
    status: "Active",
  },
  {
    id: "u4",
    name: "Facility Analyst",
    email: "facility.analyst@company.com",
    role: "Analyst",
    status: "Inactive",
  },
];