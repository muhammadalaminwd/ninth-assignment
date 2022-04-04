import React from 'react';
import LineBarAreaComposedChart from '../LineBarAreaComposedChart/LineBarAreaComposedChart';
import MyLineChart from '../MyLineChart/MyLineChart';

const Dashboard = () => {
    return (
        <div>
            <MyLineChart></MyLineChart>
            <LineBarAreaComposedChart></LineBarAreaComposedChart>
        </div>
    );
};

export default Dashboard;