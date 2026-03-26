import AppShell from "@/components/layout/AppShell";
import NotificationList from "@/components/ui/NotificationList";
import SectionCard from "@/components/ui/SectionCard";
import { notifications } from "@/lib/mock-data";

export default function NotificationsPage() {
  return (
    <AppShell title="Notifications">
      <div className="space-y-8">
        <SectionCard title="Notification Center">
          <NotificationList items={notifications} />
        </SectionCard>
      </div>
    </AppShell>
  );
}