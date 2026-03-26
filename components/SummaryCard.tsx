interface SummaryCardProps {
  title: string;
  value: string;
  subtitle?: string;
  highlight?: "normal" | "warning" | "critical" | "success";
}

export function SummaryCard({
  title,
  value,
  subtitle,
  highlight = "normal",
}: SummaryCardProps) {
  const colorMap = {
    normal: "text-white",
    warning: "text-amber-400",
    critical: "text-rose-400",
    success: "text-emerald-400",
  };

  return (
    <div className="rounded-3xl border border-slate-800 bg-[#0F172A] p-6 shadow-xl">
      <p className="text-sm text-slate-400">{title}</p>
      <h3 className={`mt-3 text-3xl font-black ${colorMap[highlight]}`}>{value}</h3>
      {subtitle && <p className="mt-2 text-sm text-slate-500">{subtitle}</p>}
    </div>
  );
}
