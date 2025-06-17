
import { useState, useEffect } from "react";
import { Bell, Circle } from "lucide-react";

interface Alert {
  id: number;
  type: "warning" | "error" | "info";
  message: string;
  time: string;
}

export function AlertsWidget() {
  const [alerts, setAlerts] = useState<Alert[]>([
    { id: 1, type: "warning", message: "High CPU usage detected on Server-02", time: "2m ago" },
    { id: 2, type: "error", message: "Database connection timeout", time: "5m ago" },
    { id: 3, type: "info", message: "Backup completed successfully", time: "12m ago" },
    { id: 4, type: "warning", message: "Memory usage above threshold", time: "18m ago" },
  ]);

  const getAlertColor = (type: string) => {
    switch (type) {
      case "error": return "text-pink-400 bg-pink-500/20";
      case "warning": return "text-yellow-400 bg-yellow-500/20";
      case "info": return "text-cyan-400 bg-cyan-500/20";
      default: return "text-slate-400 bg-slate-500/20";
    }
  };

  return (
    <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-yellow-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/10">
      <h3 className="text-lg font-semibold text-slate-200 mb-4 flex items-center gap-2">
        <Bell className="w-5 h-5 text-yellow-400" />
        Recent Alerts
      </h3>
      <div className="space-y-3">
        {alerts.map((alert) => (
          <div key={alert.id} className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/30 hover:bg-slate-800/50 transition-all duration-300">
            <Circle className={`w-3 h-3 ${getAlertColor(alert.type)} rounded-full animate-pulse`} />
            <div className="flex-1">
              <p className="text-slate-200 text-sm">{alert.message}</p>
              <p className="text-slate-500 text-xs mt-1">{alert.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
