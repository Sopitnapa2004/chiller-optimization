import { RecommendationItem } from "@/types";

interface RecommendationCardProps {
  item: RecommendationItem;
}

export default function RecommendationCard({ item }: RecommendationCardProps) {
  const priorityConfig = {
    LOW: {
      bg: "bg-blue-500/15",
      text: "text-blue-300",
      label: "Low Priority",
    },
    MEDIUM: {
      bg: "bg-amber-500/15",
      text: "text-amber-300",
      label: "Medium Priority",
    },
    HIGH: {
      bg: "bg-rose-500/15",
      text: "text-rose-300",
      label: "High Priority",
    },
  };

  const config = priorityConfig[item.priority];

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-lg">
      <div className="mb-4 flex items-start justify-between">
        <h3 className="text-lg font-black tracking-tight text-white">
          {item.title}
        </h3>
        <span
          className={`inline-flex items-center rounded-full border border-current px-2.5 py-1 text-xs font-semibold ${config.bg} ${config.text}`}
        >
          {config.label}
        </span>
      </div>

      <p className="text-sm text-white/70">{item.description}</p>
    </div>
  );
}