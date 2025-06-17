
import { useState, useEffect } from "react";

export function ProgressWidget() {
  const [progress, setProgress] = useState(65);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newValue = prev + (Math.random() - 0.5) * 10;
        return Math.max(0, Math.min(100, newValue));
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const circumference = 2 * Math.PI * 45;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-lime-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-lime-500/10">
      <h3 className="text-lg font-semibold text-slate-200 mb-4 flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-lime-400 animate-pulse"></div>
        Performance
      </h3>
      <div className="flex items-center justify-center">
        <div className="relative">
          <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="#1e293b"
              strokeWidth="8"
              fill="none"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="url(#gradient)"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={strokeDasharray}
              strokeDashoffset={strokeDashoffset}
              className="transition-all duration-1000 ease-in-out"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00ff88" />
                <stop offset="100%" stopColor="#00d4ff" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold text-slate-100">{Math.round(progress)}%</span>
          </div>
        </div>
      </div>
      <p className="text-center text-slate-400 mt-4">System Efficiency</p>
    </div>
  );
}
