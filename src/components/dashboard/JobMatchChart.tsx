
import React from 'react';
import { BarChart as Chart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Amazon', matching: 92, interviews: 60 },
  { name: 'Microsoft', matching: 87, interviews: 72 },
  { name: 'Google', matching: 78, interviews: 55 },
  { name: 'Meta', matching: 75, interviews: 48 },
  { name: 'Apple', matching: 65, interviews: 40 },
];

const JobMatchChart: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-100">
        <h3 className="font-semibold text-lg">Job Match Analysis</h3>
        <p className="text-sm text-gray-500 mt-1">Top companies by profile match %</p>
      </div>
      
      <div className="p-4 h-80">
        <ResponsiveContainer width="100%" height="100%">
          <Chart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="matching" name="Profile Match %" fill="#2563eb" />
            <Bar dataKey="interviews" name="Interview Success %" fill="#4f46e5" />
          </Chart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default JobMatchChart;
