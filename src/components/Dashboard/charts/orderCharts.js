import * as React from 'react';
import { Card, CardHeader, CardContent } from '@mui/material';
import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    LineChart,
    Legend,
    Line,
} from 'recharts';
import { format, subDays, addDays } from 'date-fns';
import {useEffect, useState} from "react";
import apiAxios from '../../../_config/axios';

const lastDay = new Date();
const lastMonthDays = Array.from({ length: 30 }, (_, i) => subDays(lastDay, i));
const aMonthAgo = subDays(new Date(), 30);

const dateFormatter = (date) => new Date(date).toLocaleDateString();


const OrderChart = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [chartData, setChartData] = useState([]);

    const getOrders = async () => {
        const response = await apiAxios.get("/user_plans/last_orders/7")
        setOrders(response.data)
        console.log(response.data, "response.data")
        setLoading(false)
    }
    useEffect(() => {
        getOrders()
    }, []);

    const data = [
        {
          name: 'Page A',
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          pv: 1800,
          amt: 2290,
        },
        {
          name: 'Page D',
          pv: 1908,
          amt: 2000,
        },
        {
          name: 'Page E',
          pv: 1800,
          amt: 2181,
        },
        {
          name: 'Page F',
          pv: 1800,
          amt: 2500,
        },
        {
          name: 'Page G',
          pv: 1300,
          amt: 2100,
        },
      ];

    if (!orders) return null;
    return (
        <Card>
            <CardHeader title="Commandes des 7 derniers jours" />
            <CardContent>
                <div style={{ width: '100%', height: 300 }}>
                    <ResponsiveContainer>
                        {/* <AreaChart data={orders}> */}
                            {/* <defs>
                                <linearGradient
                                    id="colorUv"
                                    x1="0"
                                    y1="0"
                                    x2="0"
                                    y2="1"
                                >
                                    <stop
                                        offset="5%"
                                        stopColor="#8884d8"
                                        stopOpacity={0.8}
                                    />
                                    <stop
                                        offset="95%"
                                        stopColor="#8884d8"
                                        stopOpacity={0}
                                    />
                                </linearGradient>
                            </defs>
                            <XAxis
                                dataKey="date"
                                name="Date"
                                type="number"
                                scale="time"
                                domain={[
                                    addDays(aMonthAgo, 1).getTime(),
                                    new Date().getTime(),
                                ]}
                                tickFormatter={dateFormatter}
                            />
                            <YAxis dataKey="total" name="Revenue" unit="€" />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip
                                cursor={{ strokeDasharray: '3 3' }}
                                formatter={(value) =>
                                    new Intl.NumberFormat(undefined, {
                                        style: 'currency',
                                        currency: 'USD',
                                    }).format(value)
                                }
                                labelFormatter={(label) =>
                                    dateFormatter(label)
                                }
                            />
                            <Area
                                type="monotone"
                                dataKey="total"
                                stroke="#8884d8"
                                strokeWidth={2}
                                fill="url(#colorUv)"
                            /> */}
                            {
                                loading ? <div>Loading...</div> :
                                <LineChart
                                    width={500}
                                    height={300}
                                    data={orders}
                                    margin={{
                                        top: 5,
                                        right: 30,
                                        left: 20,
                                        bottom: 5,
                                    }}
                                    >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    {/* <Legend /> */}
                                    <Line type="monotone" dataKey="nombre" stroke="#8884d8" activeDot={{ r: 8 }} />
                                    {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
                                </LineChart>
                            }
                        {/* </AreaChart> */}
                        
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    );
};

export default OrderChart;