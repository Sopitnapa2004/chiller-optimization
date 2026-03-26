import EmptyState from "./EmptyState";

export default function LogTable({
  items,
}: {
  items: {
    id: string;
    time: string;
    action: string;
    user: string;
    target: string;
    result: string;
  }[];
}) {
  if (items.length === 0) {
    return (
      <EmptyState
        title="No audit logs"
        description="There are no history records available."
      />
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10">
      <table className="w-full text-left">
        <thead className="bg-white/[0.04] text-sm text-slate-400">
          <tr>
            <th className="px-4 py-3">Time</th>
            <th className="px-4 py-3">Action</th>
            <th className="px-4 py-3">User</th>
            <th className="px-4 py-3">Target</th>
            <th className="px-4 py-3">Result</th>
          </tr>
        </thead>
        <tbody>
          {items.map((log) => (
            <tr key={log.id} className="border-t border-white/10 text-sm">
              <td className="px-4 py-3 text-slate-300">{log.time}</td>
              <td className="px-4 py-3 text-white font-medium">{log.action}</td>
              <td className="px-4 py-3 text-slate-300">{log.user}</td>
              <td className="px-4 py-3 text-slate-300">{log.target}</td>
              <td className="px-4 py-3 text-emerald-300">{log.result}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}