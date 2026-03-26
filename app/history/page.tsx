import AppShell from "@/components/layout/AppShell";
import LogTable from "@/components/ui/LogTable";
import SectionCard from "@/components/ui/SectionCard";
import { auditLogs } from "@/lib/mock-data";

export default function HistoryPage() {
  return (
    <AppShell title="History & Audit Log">
      <div className="space-y-8">
        <SectionCard title="System Activity History">
          <LogTable items={auditLogs} />
        </SectionCard>
      </div>
    </AppShell>
  );
}