import React from 'react';
import { ComposedChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line } from 'recharts';

export const PopulationChart = (props) => (
    <div className='populationChart'>
        <h1>Population chart, age 18-30, year 1990</h1>

        <ComposedChart width={600} height={300} data={props.data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="age" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="females" stackId="a" fill="#ecaa38" />
            <Bar dataKey="males" stackId="a" fill="#0f5b78" />
            <Line type="monotone" dataKey="total" stroke="#c02e1d" />
        </ComposedChart>
    </div>
);
