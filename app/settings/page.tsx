import AppShell from "@/components/layout/AppShell";
import SectionCard from "@/components/ui/SectionCard";

export default function SettingsPage() {
  return (
    <AppShell title="Settings">
      <div className="space-y-8">
        <SectionCard title="System Configuration">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {[
              "Threshold Configuration",
              "Alert Rules",
              "User Roles",
              "Facility Setup",
              "Notification Preferences",
              "Data Refresh Settings",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
              >
                <h3 className="text-base font-bold text-white">{item}</h3>
                <p className="mt-2 text-sm text-slate-400">
                  Manage core platform settings and monitoring behavior.
                </p>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>
    </AppShell>
  );
}
