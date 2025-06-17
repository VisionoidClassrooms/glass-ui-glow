
import { LucideIcon } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  positive: boolean;
  icon: LucideIcon;
  accentColor: "lime" | "cyan" | "pink" | "yellow";
}

export function MetricCard({ title, value, change, positive, icon: Icon, accentColor }: MetricCardProps) {
  const accentClasses = {
    lime: "from-lime-500/20 to-lime-600/10 border-lime-500/30 shadow-lime-500/10",
    cyan: "from-cyan-500/20 to-cyan-600/10 border-cyan-500/30 shadow-cyan-500/10",
    pink: "from-pink-500/20 to-pink-600/10 border-pink-500/30 shadow-pink-500/10",
    yellow: "from-yellow-500/20 to-yellow-600/10 border-yellow-500/30 shadow-yellow-500/10",
  };

  const iconClasses = {
    lime: "text-lime-400",
    cyan: "text-cyan-400",
    pink: "text-pink-400",
    yellow: "text-yellow-400",
  };

  return (
    <div className={`bg-gradient-to-br ${accentClasses[accentColor]} backdrop-blur-sm border rounded-xl p-6 hover:shadow-lg transition-all duration-300 group hover:scale-105`}>
      <div className="flex items-center justify-between mb-4">
        <Icon className={`w-6 h-6 ${iconClasses[accentColor]} group-hover:scale-110 transition-transform duration-300`} />
        <span className={`text-sm font-medium ${positive ? 'text-lime-400' : 'text-pink-400'}`}>
          {change}
        </span>
      </div>
      <div>
        <h3 className="text-slate-400 text-sm mb-1">{title}</h3>
        <p className="text-2xl font-bold text-slate-100">{value}</p>
      </div>
    </div>
  );
}
