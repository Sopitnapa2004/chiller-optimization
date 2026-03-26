import AppShell from "@/components/layout/AppShell";
import RecommendationCard from "@/components/ui/RecommendationCard";
import SectionCard from "@/components/ui/SectionCard";
import { recommendations } from "@/lib/mock-data";

export default function MaintenancePage() {
  return (
    <AppShell title="Maintenance">
      <div className="space-y-8">
        <SectionCard title="Preventive Maintenance Queue">
          <div className="space-y-4">
            {recommendations.map((item) => (
              <RecommendationCard key={item.id} item={item} />
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Schedule Overview">
          <div className="h-[260px] rounded-2xl border border-dashed border-white/10 bg-white/[0.04] p-6">
            <div className="flex h-full items-center justify-center text-slate-400">
              Maintenance calendar / planning area
            </div>
          </div>
        </SectionCard>
      </div>
    </AppShell>
  );
}
