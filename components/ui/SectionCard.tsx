import { ReactNode } from "react";

interface SectionCardProps {
  title: string;
  children: ReactNode;
  right?: ReactNode;
}

export default function SectionCard({ title, children, right }: SectionCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-4 backdrop-blur-lg">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-lg font-black tracking-tight text-white">{title}</h3>
        {right && <div>{right}</div>}
      </div>
      {children}
    </div>
  );
}