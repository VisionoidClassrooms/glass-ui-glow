
import { useState, useEffect } from 'react';
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { TopNavigation } from "@/components/TopNavigation";
import { DashboardGrid } from "@/components/DashboardGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <AppSidebar />
          <div className="flex-1 flex flex-col">
            <TopNavigation />
            <main className="flex-1 p-6">
              <DashboardGrid />
            </main>
            <footer className="border-t border-slate-800/50 bg-slate-950/50 backdrop-blur-sm p-4 text-center text-slate-400 text-sm">
              <p>&copy; 2024 Data UI v2.1.0 | Advanced Analytics Platform</p>
            </footer>
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Index;
