import React from 'react'
import {Line,LineChart,Tooltip ,XAxis,
  Legend, CartesianGrid,
  YAxis, } from 'recharts'
const  OverviewChart=()=> {
  const data = [
    {
      name: 'Order 1',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Order 2',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Order 3',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Order 4',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Order 5',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Order 6',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Order 7',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <div>
<h1>

<LineChart width={800} height={500} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
</h1>
    </div>
  )
}

export default  OverviewChart