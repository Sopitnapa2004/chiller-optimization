import EmptyState from "./EmptyState";

export default function UserTable({
  items,
}: {
  items: {
    id: string;
    name: string;
    email: string;
    role: string;
    status: string;
  }[];
}) {
  if (items.length === 0) {
    return (
      <EmptyState
        title="No users"
        description="There are no user accounts available."
      />
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10">
      <table className="w-full text-left">
        <thead className="bg-white/[0.04] text-sm text-slate-400">
          <tr>
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">Email</th>
            <th className="px-4 py-3">Role</th>
            <th className="px-4 py-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {items.map((user) => (
            <tr key={user.id} className="border-t border-white/10 text-sm">
              <td className="px-4 py-3 text-white font-medium">{user.name}</td>
              <td className="px-4 py-3 text-slate-300">{user.email}</td>
              <td className="px-4 py-3 text-slate-300">{user.role}</td>
              <td
                className={`px-4 py-3 ${
                  user.status === "Active" ? "text-emerald-300" : "text-slate-400"
                }`}
              >
                {user.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}