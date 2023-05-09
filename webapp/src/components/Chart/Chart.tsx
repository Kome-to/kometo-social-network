import React from 'react';
import { BarChart, Bar, XAxis, Legend, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './Chart.scss';

const data = [
  {
    name: 'Monday',
    d1: 40,
    d2: 88,
    d3: 59,
    d4: 92,
  },
  {
    name: 'Tuesday',
    d1: 40,
    d2: 88,
    d3: 59,
    d4: 92,
  },
  {
    name: 'Wednesday',
    d1: 40,
    d2: 88,
    d3: 59,
    d4: 92,
  },
  {
    name: 'Thursday',
    d1: 40,
    d2: 88,
    d3: 59,
    d4: 92,
  },
  {
    name: 'Friday',
    d1: 40,
    d2: 88,
    d3: 59,
    d4: 92,
  },
];

export const Chart: React.FunctionComponent = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          left: -20,
          bottom: 5,
        }}
        className="bar-chart"
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" axisLine={false} tickLine={false} />
        <YAxis axisLine={false} tickLine={false} tickCount={6} />
        <Tooltip />
        <Bar dataKey="d1" fill="#65A339" barSize={20} />
        <Bar dataKey="d2" fill="#CC3427" barSize={20} />
        <Bar dataKey="d3" fill="#F9CC59" barSize={20} />
        <Bar dataKey="d4" fill="#8B94B1" barSize={20} />
      </BarChart>
    </ResponsiveContainer>
  );
};
