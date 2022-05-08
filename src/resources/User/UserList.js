import {
    BooleanField,
    Datagrid,
    DateField,
    DeleteButton,
    EditButton,
    List,
    ShowButton,
    EmailField,
    NumberField,
    TextField, ReferenceField
} from "react-admin";
import * as React from "react";

export const UserList = () => (
    <List>
        <Datagrid>
            <TextField source="id"/>
            <TextField source="firstName"/>
            <TextField source="lastName"/>
            <NumberField source="age"/>
            <EmailField source="email"/>
            <TextField source="cellphone"/>
            <TextField source="role"/>
            <ReferenceField source="user_type_id" reference="user_type">
                <TextField source="name" />
            </ReferenceField>
            <DateField label="Created at" source="createdAt"/>
            <DateField label="last connection" source="lastConnection"/>
            <BooleanField source="isActive"/>
            <ShowButton/>
            <EditButton/>
            <DeleteButton/>
        </Datagrid>
    </List>
);