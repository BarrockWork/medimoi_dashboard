import * as React from "react";
import {
    Show,
    SimpleShowLayout,
    TextField,
    BooleanField,
    NumberField,
    EmailField, DateField
} from 'react-admin';

export const UserShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id"/>
            <TextField source="firstName"/>
            <TextField source="lastName"/>
            <NumberField source="age"/>
            <EmailField source="email"/>
            <TextField source="cellphone"/>
            <TextField source="workphone"/>
            <TextField source="homephone"/>
            <TextField source="role"/>
            <TextField label="Type" source="UserType.name" />
            <DateField label="Created at" source="createdAt"/>
            <DateField label="Updated at" source="updatedAt"/>
            <BooleanField source="isActive"/>
        </SimpleShowLayout>
    </Show>
);