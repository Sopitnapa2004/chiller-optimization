"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bell,
  Boxes,
  LayoutDashboard,
  Menu,
  Wrench,
} from "lucide-react";
import { useState } from "react";

const items = [
  { label: "Dashboard", href: "/", icon: LayoutDashboard },
  { label: "Analytics", href: "/analytics", icon: Bell },
  { label: "Assets", href: "/buildings", icon: Boxes },
  { label: "Maintenance", href: "/maintenance", icon: Wrench },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`sticky top-0 h-screen border-r border-white/10 bg-[#07111E] transition-all duration-300 ${
        collapsed ? "w-[88px]" : "w-[280px]"
      }`}
    >
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between px-5 py-5">
          {!collapsed && (
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
                Seagate
              </p>
              <h1 className="mt-1 text-lg font-bold text-white">
                Facility Intelligence
              </h1>
            </div>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="rounded-xl border border-white/10 bg-white/[0.04] p-2 text-slate-300 hover:bg-white/[0.08]"
          >
            <Menu size={18} />
          </button>
        </div>

        <nav className="mt-4 flex-1 overflow-y-auto px-3 pr-2">
          <div className="space-y-2">
            {items.map((item) => {
              const Icon = item.icon;
              const active =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition ${
                    active
                      ? "bg-emerald-500/15 text-emerald-300"
                      : "text-slate-300 hover:bg-white/[0.05] hover:text-white"
                  }`}
                >
                  <Icon size={18} />
                  {!collapsed && <span>{item.label}</span>}
                </Link>
              );
            })}
          </div>
        </nav>

        <div className="px-4 py-5">
          {!collapsed && (
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <p className="text-xs uppercase tracking-wider text-slate-500">
                System Status
              </p>
              <p className="mt-2 text-sm font-semibold text-emerald-300">
                Monitoring Active
              </p>
              <p className="mt-1 text-xs text-slate-400">Last sync: 2 min ago</p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
