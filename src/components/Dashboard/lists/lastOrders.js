import * as React from 'react';
import { Card, CardHeader, List } from '@mui/material';
import {OrderList} from "./Order";

const LastOrders = (props) => {
    const { orders = [] } = props;

    return (
        <Card sx={{ flex: 1 }}>
            <CardHeader title="Les 10 dernieres commandes" />
            <List dense={true}>
                {orders.map(record => (
                    <OrderList key={record.id} order={record} />
                ))}
            </List>
        </Card>
    );
};

export default LastOrders