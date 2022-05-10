import {
    List,
    Datagrid,
    TextField,
    BooleanField,
    EditButton,
    DeleteButton,
    ShowButton,
    ReferenceField,
} from 'react-admin';
import * as React from "react";

export const NotificationHistoryList = () => (
    <List>
        <Datagrid>
            <TextField source="id"/>
            <ReferenceField label="Type de notification" source="user_notification_type_id" reference="user_notification_type">
                <TextField source="id"/>
            </ReferenceField>
            <ShowButton/>
            <EditButton/>
            <DeleteButton/>
        </Datagrid>
    </List>
);