import { useState, useEffect } from 'react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

const GrowthChart = () => {
  const data = [
    { value: 30 },
    { value: 10 },
    { value: 50 },
    { value: 20 },
    { value: 80 },
    { value: 30 },
    { value: 90 },
    { value: 70 },
  ];

  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setReloadKey(prev => prev + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-24" key={reloadKey}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <Line 
            type="monotone" 
            dataKey="value" 
            stroke="#1E90FF" 
            strokeWidth={2} 
            dot={false}
            isAnimationActive={true}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GrowthChart;
