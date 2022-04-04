import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';
import './MyLineChart.css'

const MyLineChart = () => {
    const data = [
        {
          name: 'Supplier A',
          sales: 4000,
          price: 2400,
          amt: 2400,
        },
        {
          name: 'Supplier B',
          sales: 3000,
          price: 1398,
          amt: 2210,
        },
        {
          name: 'Supplier C',
          sales: 2000,
          price: 9800,
          amt: 2290,
        },
        {
          name: 'Supplier D',
          sales: 2780,
          price: 3908,
          amt: 2000,
        },
        {
          name: 'Supplier E',
          sales: 1890,
          price: 4800,
          amt: 2181,
        },
        {
          name: 'Supplier F',
          sales: 2390,
          price: 3800,
          amt: 2500,
        },
        {
          name: 'Supplier G',
          sales: 3490,
          price: 4300,
          amt: 2100,
        },
      ];
    return (
      <div className='chart'>
      <LineChart width={800} height={500} data={data}>
      <Line dataKey={"price"}></Line>
      <Line dataKey={"sales"}></Line>
      <XAxis dataKey={"name"}></XAxis>
      <YAxis></YAxis>
      </LineChart>
      </div>
    );
};

export default MyLineChart;