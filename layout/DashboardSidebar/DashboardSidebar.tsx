"use client";

import Button from "@/ui/Button/Button";
import { getCurrentUser, logout } from "@/utils/auth";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

// Example Nav Items - You can move this to a separate config file later
const NAV_ITEMS = [
  { label: "Dashboard", icon: "📊", path: "/" },
  { label: "Projects", icon: "📁", path: "/projects" },
  { label: "Tasks", icon: "✅", path: "/tasks" },
  { label: "Settings", icon: "⚙️", path: "/settings" },
];

function DashboardSidebar() {
  const pathname = usePathname();

  const router = useRouter();

  const user = getCurrentUser();


  return (
    <aside className="h-screen w-64 bg-surface border-r border-border flex flex-col transition-all duration-300">
      {/* 1. Logo / Brand Section */}
      <div className="p-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">
            G
          </div>
          <span className="font-heading text-xl font-bold text-foreground tracking-tight">
            GeminiDev
          </span>
        </div>
      </div>

      {/* 2. Navigation Links */}
      <nav className="flex-1 px-4 py-4 space-y-1">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.path;

          return (
            <button
              key={item.label}
              className={`
                w-full flex items-center gap-3 px-4 py-3 rounded-xl font-body text-sm font-medium transition-all
                ${isActive
                  ? "bg-primary text-white shadow-lg shadow-primary/20"
                  : "text-secondary hover:bg-background hover:text-foreground"
                }
              `}
            >
              <span className="text-lg">{item.icon}</span>
              {item.label}
            </button>
          );
        })}
      </nav>

      {/* 3. User / Profile Section */}
      <div className="p-4 border-t border-border bg-background/50">
        <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-background transition-colors cursor-pointer text-left">
          <div className="w-10 h-10 rounded-full bg-secondary/20 border border-border flex items-center justify-center text-foreground font-bold">
            {user?.userName?.charAt(0).toUpperCase()}
          </div>
          <div className="flex-1 overflow-hidden">
            <p className="font-body text-sm font-semibold text-foreground truncate">
              {user?.userName}
            </p>
            <p className="font-body text-xs text-secondary truncate">
              {user?.email}
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default DashboardSidebar;
