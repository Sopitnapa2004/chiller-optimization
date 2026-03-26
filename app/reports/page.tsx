import AppShell from "@/components/layout/AppShell";
import SectionCard from "@/components/ui/SectionCard";

export default function ReportsPage() {
  return (
    <AppShell title="Reports">
      <div className="space-y-8">
        <SectionCard title="Export Center">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {[
              "Daily Efficiency Report",
              "Weekly Alert Summary",
              "Monthly Building Comparison",
              "Maintenance Report",
              "Critical Unit Report",
              "Executive Summary",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
              >
                <h3 className="text-base font-bold text-white">{item}</h3>
                <p className="mt-2 text-sm text-slate-400">
                  Export and review performance data for stakeholders.
                </p>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>
    </AppShell>
  );
}
