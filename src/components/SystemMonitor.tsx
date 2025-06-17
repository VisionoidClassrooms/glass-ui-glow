
import { useState, useEffect } from "react";
import { Monitor } from "lucide-react";

export function SystemMonitor() {
  const [metrics, setMetrics] = useState({
    cpu: 45,
    memory: 62,
    disk: 38,
    network: 73
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        cpu: Math.max(0, Math.min(100, prev.cpu + (Math.random() - 0.5) * 10)),
        memory: Math.max(0, Math.min(100, prev.memory + (Math.random() - 0.5) * 5)),
        disk: Math.max(0, Math.min(100, prev.disk + (Math.random() - 0.5) * 3)),
        network: Math.max(0, Math.min(100, prev.network + (Math.random() - 0.5) * 15)),
      }));
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const getColorClass = (value: number) => {
    if (value > 80) return "bg-pink-500";
    if (value > 60) return "bg-yellow-500";
    return "bg-lime-500";
  };

  return (
    <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-pink-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/10">
      <h3 className="text-lg font-semibold text-slate-200 mb-4 flex items-center gap-2">
        <Monitor className="w-5 h-5 text-pink-400" />
        System Monitor
      </h3>
      <div className="space-y-4">
        {Object.entries(metrics).map(([key, value]) => (
          <div key={key} className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-slate-400 capitalize">{key}</span>
              <span className="text-slate-200">{Math.round(value)}%</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
              <div
                className={`h-2 rounded-full transition-all duration-1000 ${getColorClass(value)}`}
                style={{ width: `${value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
