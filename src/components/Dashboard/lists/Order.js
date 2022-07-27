import * as React from 'react';
import {
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
    Box,
} from '@mui/material';
import { Link } from 'react-router-dom';

export const OrderList = (props) => {
    const { order } = props;

    return (
        <ListItem key={`List_${order.id}`} button component={Link} to={`/commands/${order.id}`}>
            <ListItemText
                primary={new Date(order.billing_date).toLocaleString('fr-FR')}
                secondary={`par ${order.User.firstName } ${order.User.lastName }`}
            />
            <ListItemSecondaryAction>
                <Box
                    component="span"
                    sx={{
                        marginRight: '1em',
                        color: 'text.primary',
                    }}
                >
                    {order.Plan.price}&euro;
                </Box>
            </ListItemSecondaryAction>
        </ListItem>
    );
};