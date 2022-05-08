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

export const UserNotificationTypeList = () => (
    <List>
        <Datagrid>
            <TextField source="id"/>
            <ReferenceField label="User" source="user_id" reference="users">
                <TextField optionText="firstName" validate={required()}/>
                <TextField optionText="lastName" validate={required()}/>
            </ReferenceField>
            <ReferenceField label="Notification Type" source="notification_type_id" reference="notification_type">
                <TextField source="name"/>
            </ReferenceField>
            <BooleanField source="isActive"/>
            <ShowButton/>
            <EditButton/>
            <DeleteButton/>
        </Datagrid>
    </List>
);