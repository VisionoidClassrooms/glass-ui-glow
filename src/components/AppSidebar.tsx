
import { useState } from "react";
import { Circle, Square, Triangle, Star, Bell, Settings, LayoutDashboard, ChartBar } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

const items = [
  { title: "Overview", url: "/", icon: LayoutDashboard },
  { title: "Analytics", url: "/analytics", icon: ChartBar },
  { title: "Alerts", url: "/alerts", icon: Bell },
  { title: "Settings", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  const { collapsed } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;
  const isExpanded = items.some((i) => isActive(i.url));
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive 
      ? "bg-gradient-to-r from-lime-500/20 to-cyan-500/20 text-lime-400 border-l-2 border-lime-400 font-medium shadow-lg shadow-lime-500/20" 
      : "hover:bg-slate-800/50 hover:text-cyan-300 transition-all duration-300";

  return (
    <Sidebar
      className={`${collapsed ? "w-16" : "w-64"} border-r border-slate-800/50 bg-slate-950/80 backdrop-blur-xl transition-all duration-300`}
      collapsible
    >
      <div className="p-4 border-b border-slate-800/50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-lime-400 to-cyan-500 flex items-center justify-center">
            <Circle className="w-4 h-4 text-slate-900" />
          </div>
          {!collapsed && (
            <div>
              <h2 className="text-lg font-bold bg-gradient-to-r from-lime-400 to-cyan-400 bg-clip-text text-transparent">
                Data UI
              </h2>
              <p className="text-xs text-slate-400">Analytics Platform</p>
            </div>
          )}
        </div>
      </div>

      <SidebarContent className="p-2">
        <SidebarGroup open={isExpanded}>
          <SidebarGroupLabel className="text-slate-400 text-xs uppercase tracking-wider mb-2">
            {!collapsed && "Navigation"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} end className={getNavCls}>
                      <item.icon className={`h-5 w-5 ${isActive(item.url) ? 'text-lime-400' : 'text-slate-400'}`} />
                      {!collapsed && <span className="ml-3">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
