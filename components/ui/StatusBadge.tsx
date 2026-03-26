import { statusClasses } from "@/lib/utils";

export default function StatusBadge({ status }: { status: string }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold tracking-wide ${statusClasses(
        status
      )}`}
    >
      {status}
    </span>
  );
}