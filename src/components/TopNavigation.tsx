
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Bell, Settings, Menu, Fullscreen } from "lucide-react";

export function TopNavigation() {
  return (
    <header className="h-16 border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-xl flex items-center justify-between px-6">
      <div className="flex items-center gap-4">
        <SidebarTrigger className="text-slate-400 hover:text-lime-400 transition-colors duration-300" />
        <h1 className="text-2xl font-bold bg-gradient-to-r from-lime-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent">
          Data UI Dashboard
        </h1>
      </div>
      
      <div className="flex items-center gap-3">
        <button className="p-2 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 text-slate-400 hover:text-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
          <Bell className="w-5 h-5" />
        </button>
        <button className="p-2 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 text-slate-400 hover:text-lime-400 transition-all duration-300 hover:shadow-lg hover:shadow-lime-500/20">
          <Fullscreen className="w-5 h-5" />
        </button>
        <button className="p-2 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 text-slate-400 hover:text-pink-400 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20">
          <Settings className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
}
