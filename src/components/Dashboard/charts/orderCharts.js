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
} from 'recharts';
import { format, subDays, addDays } from 'date-fns';
import {useEffect, useState} from "react";

const lastDay = new Date();
const lastMonthDays = Array.from({ length: 30 }, (_, i) => subDays(lastDay, i));
const aMonthAgo = subDays(new Date(), 30);

const dateFormatter = (date) => new Date(date).toLocaleDateString();


const OrderChart = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {

    }, []);

    if (!orders) return null;
    return (
        <Card>
            <CardHeader title="Chiffres d'affaires des 30 derniers jours" />
            <CardContent>
                <div style={{ width: '100%', height: 300 }}>
                    <ResponsiveContainer>
                        <AreaChart data={orders}>
                            <defs>
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
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    );
};

export default OrderChart;