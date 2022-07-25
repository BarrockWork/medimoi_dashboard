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
                primary={new Date(order.date).toLocaleString('fr-FR')}
                secondary={`par ${order.user.firstName } ${order.user.lastName }`}
            />
            <ListItemSecondaryAction>
                <Box
                    component="span"
                    sx={{
                        marginRight: '1em',
                        color: 'text.primary',
                    }}
                >
                    {order.total}&euro;
                </Box>
            </ListItemSecondaryAction>
        </ListItem>
    );
};