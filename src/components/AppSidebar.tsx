
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
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const collapsed = state === "collapsed";

  const isActive = (path: string) => currentPath === path;
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "bg-gradient-to-r from-lime-500/20 to-cyan-500/20 text-lime-400 border-l-2 border-lime-400 font-medium shadow-lg shadow-lime-500/20"
      : "hover:bg-slate-800/50 hover:text-cyan-300 transition-all duration-300";

  return (
    <Sidebar
      className={`${collapsed ? "w-16" : "w-64"} !bg-gradient-to-br !from-slate-950 !via-slate-900 !to-slate-950 border-r border-slate-800/50`}
      collapsible="icon"
      style={{
        background: 'linear-gradient(135deg, rgb(2 6 23) 0%, rgb(15 23 42) 50%, rgb(2 6 23) 100%)'
      }}
    >
      <div className="p-4 border-b border-slate-800/50 bg-transparent">
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

      <SidebarContent className="p-2 bg-transparent" style={{ background: 'transparent' }}>
        <SidebarGroup className="bg-transparent">
          <SidebarGroupLabel className="text-slate-400 text-xs uppercase tracking-wider mb-2">
            {!collapsed && "Navigation"}
          </SidebarGroupLabel>
          <SidebarGroupContent className="bg-transparent">
            <SidebarMenu className="space-y-1 bg-transparent">
              {items.map((item) => (
                <SidebarMenuItem key={item.title} className="bg-transparent">
                  <SidebarMenuButton asChild className="bg-transparent">
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
