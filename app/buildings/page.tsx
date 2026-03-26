import AppShell from "@/components/layout/AppShell";
import BuildingCard from "@/components/ui/BuildingCard";
import RiskUnitTable from "@/components/ui/RiskUnitTable";
import SectionCard from "@/components/ui/SectionCard";
import { buildings, riskUnits } from "@/lib/mock-data";

export default function AssetsPage() {
  return (
    <AppShell title="Assets">
      <div className="space-y-8">
        <SectionCard title="Building Overview">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {buildings.map((item) => (
              <BuildingCard key={item.id} building={item} />
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Key Units">
          <RiskUnitTable units={riskUnits} />
        </SectionCard>
      </div>
    </AppShell>
  );
}