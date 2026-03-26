"use client";

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { TrendPoint } from "@/types";

export default function TrendChart({
  data,
  title,
  showThreshold = true,
}: {
  data: TrendPoint[];
  title?: string;
  showThreshold?: boolean;
}) {
  return (
    <div className="h-[360px] w-full rounded-2xl border border-white/10 bg-black/20 p-4">
      {title && <p className="mb-3 text-sm font-medium text-slate-300">{title}</p>}

      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" />
          <XAxis
            dataKey="time"
            stroke="#94A3B8"
            tickLine={false}
            axisLine={false}
            fontSize={12}
          />
          <YAxis
            yAxisId="left"
            stroke="#94A3B8"
            tickLine={false}
            axisLine={false}
            fontSize={12}
            domain={["auto", "auto"]}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            stroke="#94A3B8"
            tickLine={false}
            axisLine={false}
            fontSize={12}
            domain={[0, 100]}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#07111E",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "16px",
              color: "#fff",
            }}
          />
          <Legend />

          {showThreshold && (
            <ReferenceLine
              yAxisId="left"
              y={0.75}
              stroke="#FBBF24"
              strokeDasharray="5 5"
              label={{ value: "Power/Ton Target", position: "insideTopRight", fill: "#FBBF24" }}
            />
          )}

          <Line
            yAxisId="left"
            type="monotone"
            dataKey="efficiency"
            stroke="#7DD3FC"
            strokeWidth={3}
            dot={false}
            name="Efficiency (kW/Ton)"
          />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="approach"
            stroke="#34D399"
            strokeWidth={3}
            dot={false}
            name="Approach Temp"
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="load"
            stroke="#FBBF24"
            strokeWidth={3}
            dot={false}
            name="Load (%)"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}