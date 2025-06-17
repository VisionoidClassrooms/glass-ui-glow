
import { MetricCard } from "./MetricCard";
import { ChartWidget } from "./ChartWidget";
import { SystemMonitor } from "./SystemMonitor";
import { AlertsWidget } from "./AlertsWidget";
import { ProgressWidget } from "./ProgressWidget";
import { Monitor, Bell, ChartBar, Circle } from "lucide-react";

export function DashboardGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {/* Top Row - Key Metrics */}
      <MetricCard
        title="Active Users"
        value="12,847"
        change="+12.5%"
        positive={true}
        icon={Circle}
        accentColor="lime"
      />
      <MetricCard
        title="Revenue"
        value="$89,234"
        change="+8.2%"
        positive={true}
        icon={ChartBar}
        accentColor="cyan"
      />
      <MetricCard
        title="System Load"
        value="78.5%"
        change="-2.1%"
        positive={false}
        icon={Monitor}
        accentColor="pink"
      />
      <MetricCard
        title="Alerts"
        value="23"
        change="+3"
        positive={false}
        icon={Bell}
        accentColor="yellow"
      />

      {/* Second Row - Charts and Progress */}
      <div className="col-span-1 md:col-span-2">
        <ChartWidget />
      </div>
      <ProgressWidget />
      <SystemMonitor />

      {/* Third Row - Larger widgets */}
      <div className="col-span-1 md:col-span-2 lg:col-span-3">
        <AlertsWidget />
      </div>
      <div className="lg:col-span-1">
        <div className="h-full bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-lime-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-lime-500/10">
          <h3 className="text-lg font-semibold text-slate-200 mb-4 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-lime-400 animate-pulse"></div>
            Live Status
          </h3>
          <div className="space-y-3">
            {[
              { name: "API Gateway", status: "Online", color: "lime" },
              { name: "Database", status: "Online", color: "lime" },
              { name: "Cache", status: "Warning", color: "yellow" },
              { name: "CDN", status: "Online", color: "lime" },
            ].map((service) => (
              <div key={service.name} className="flex items-center justify-between">
                <span className="text-slate-400">{service.name}</span>
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full bg-${service.color}-400 animate-pulse`}></div>
                  <span className={`text-${service.color}-400 text-sm`}>{service.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
