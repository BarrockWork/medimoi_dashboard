import * as React from 'react';
import { Card, CardHeader, List } from '@mui/material';
import {OrderList} from "./Order";
import apiAxios from '../../../_config/axios';

const LastOrders = (props) => {
    const [orders, setOrders] = React.useState([]);

    const getLastOrders = async () => {
        return await apiAxios.get("/user_plans/last_orders")
    }

    React.useEffect(()=>{
        getLastOrders().then(response => setOrders(response.data))
    },[])

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