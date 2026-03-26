import EmptyState from "./EmptyState";
import StatusBadge from "./StatusBadge";

export default function NotificationList({
  items,
}: {
  items: {
    id: string;
    title: string;
    description: string;
    time: string;
    level: string;
  }[];
}) {
  if (items.length === 0) {
    return (
      <EmptyState
        title="No notifications"
        description="There are no notifications available right now."
      />
    );
  }

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="rounded-2xl border border-white/10 bg-black/20 p-4"
        >
          <div className="mb-3 flex items-center justify-between">
            <div>
              <h3 className="text-base font-semibold text-white">{item.title}</h3>
              <p className="mt-1 text-sm text-slate-500">{item.time}</p>
            </div>
            <StatusBadge status={item.level === "INFO" ? "NORMAL" : item.level} />
          </div>
          <p className="text-sm leading-6 text-slate-400">{item.description}</p>
        </div>
      ))}
    </div>
  );
}