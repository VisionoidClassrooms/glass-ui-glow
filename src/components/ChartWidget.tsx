
import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";

export function ChartWidget() {
  const [data, setData] = useState([
    { name: '00:00', value: 4000 },
    { name: '04:00', value: 3000 },
    { name: '08:00', value: 5000 },
    { name: '12:00', value: 7000 },
    { name: '16:00', value: 6000 },
    { name: '20:00', value: 8000 },
    { name: '24:00', value: 5500 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setData(prevData => 
        prevData.map(item => ({
          ...item,
          value: item.value + Math.random() * 1000 - 500
        }))
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-80 bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
      <h3 className="text-lg font-semibold text-slate-200 mb-4 flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
        Traffic Analytics
      </h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis 
            dataKey="name" 
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#64748b', fontSize: 12 }}
          />
          <YAxis 
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#64748b', fontSize: 12 }}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: '#0f172a',
              border: '1px solid #334155',
              borderRadius: '8px',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.5)'
            }}
            labelStyle={{ color: '#e2e8f0' }}
            itemStyle={{ color: '#00d4ff' }}
          />
          <Line 
            type="monotone" 
            dataKey="value" 
            stroke="#00d4ff" 
            strokeWidth={2}
            dot={{ fill: '#00d4ff', strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, stroke: '#00d4ff', strokeWidth: 2, fill: '#00d4ff' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
