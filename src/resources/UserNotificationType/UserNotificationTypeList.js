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
            <ReferenceField label="Nom" source="user_id" reference="Users">
                <TextField source="lastName" />
            </ReferenceField>
            <ReferenceField label="Prénom" source="user_id" reference="Users">
                <TextField source="firstName" />
            </ReferenceField>
            <ReferenceField label="Type de notification" source="notification_type_id" reference="notification_type">
                <TextField source="name"/>
            </ReferenceField>
            <BooleanField source="isActive"/>
            <ShowButton/>
            <EditButton/>
            <DeleteButton/>
        </Datagrid>
    </List>
);