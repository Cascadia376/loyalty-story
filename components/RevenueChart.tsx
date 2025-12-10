import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, LabelList } from 'recharts';

const data = [
  {
    name: 'Current Value',
    amount: 1042,
    fill: '#331A0F', // Brand Brown
    label: '$1,042'
  },
  {
    name: 'With Loyalty',
    amount: 1250,
    fill: '#5C3A2A', // Lighter Brown
    label: '$1,250'
  },
  {
    name: 'New Revenue',
    amount: 208,
    fill: '#D72323', // Brand Red
    label: '+$208'
  },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 border border-brand-brown/10 shadow-xl rounded-lg">
        <p className="font-bold text-brand-brown">{label}</p>
        <p className="text-brand-red font-mono text-lg">
          ${payload[0].value}
        </p>
      </div>
    );
  }
  return null;
};

export const RevenueChart: React.FC = () => {
  return (
    <div className="h-[400px] w-full bg-white rounded-3xl p-6 shadow-2xl border border-gray-100">
      <h3 className="text-xl font-bold text-brand-brown mb-8 text-center font-serif">Annual Customer Value Projection</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis 
            dataKey="name" 
            tick={{ fill: '#666', fontSize: 12, fontWeight: 600 }} 
            axisLine={false}
            tickLine={false}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: 'transparent' }} />
          <Bar dataKey="amount" radius={[12, 12, 0, 0]} animationDuration={2000}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
             <LabelList dataKey="label" position="top" fill="#331A0F" fontWeight="bold" fontSize={16} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
