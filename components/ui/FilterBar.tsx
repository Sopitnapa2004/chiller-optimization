"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const buildings = [
  { label: "All Buildings", value: "" },
  { label: "Building 1", value: "B1" },
  { label: "Building 2", value: "B2" },
  { label: "Building 3", value: "B3" },
  { label: "Building 4", value: "B4" },
  { label: "Building 5", value: "B5" },
  { label: "Building 6", value: "B6" },
];

const units = [
  { label: "All Units", value: "" },
  { label: "CH-03", value: "CH-03" },
  { label: "CH-04", value: "CH-04" },
  { label: "CH-06", value: "CH-06" },
  { label: "CH-08P", value: "CH-08P" },
];

const systems = [
  { label: "All Systems", value: "" },
  { label: "Condenser", value: "condenser" },
  { label: "Evaporator", value: "evaporator" },
  { label: "Cooling Tower", value: "tower" },
];

function SelectField({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { label: string; value: string }[];
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
      <p className="text-xs uppercase tracking-wide text-slate-500">{label}</p>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full bg-transparent text-sm font-medium text-white outline-none"
      >
        {options.map((item) => (
          <option key={item.label} value={item.value} className="bg-[#07111E] text-white">
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default function FilterBar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const building = searchParams.get("building") ?? "";
  const unit = searchParams.get("unit") ?? "";
  const system = searchParams.get("system") ?? "";

  const updateParam = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-6">
      <SelectField
        label="Building"
        value={building}
        onChange={(val) => updateParam("building", val)}
        options={buildings}
      />
      <SelectField
        label="Unit"
        value={unit}
        onChange={(val) => updateParam("unit", val)}
        options={units}
      />
      <SelectField
        label="System"
        value={system}
        onChange={(val) => updateParam("system", val)}
        options={systems}
      />
      <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
        <p className="text-xs uppercase tracking-wide text-slate-500">Parameter</p>
        <p className="mt-2 text-sm font-medium text-white">All Parameters</p>
      </div>
      <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
        <p className="text-xs uppercase tracking-wide text-slate-500">Date Range</p>
        <p className="mt-2 text-sm font-medium text-white">Today</p>
      </div>
      <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
        <p className="text-xs uppercase tracking-wide text-slate-500">Interval</p>
        <p className="mt-2 text-sm font-medium text-white">Hour</p>
      </div>
    </div>
  );
}