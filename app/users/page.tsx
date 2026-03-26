import AppShell from "@/components/layout/AppShell";
import SectionCard from "@/components/ui/SectionCard";
import UserTable from "@/components/ui/UserTable";
import { users } from "@/lib/mock-data";

export default function UsersPage() {
  return (
    <AppShell title="Users & Roles">
      <div className="space-y-8">
        <SectionCard title="User Management">
          <UserTable items={users} />
        </SectionCard>
      </div>
    </AppShell>
  );
}