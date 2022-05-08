import * as React from "react";
import {
    Show,
    SimpleShowLayout,
    TextField,
    BooleanField,
    DateField
} from 'react-admin';

export const UserNotificationTypeShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id"/>
            <TextField label="Prénom" source="user.firstName" />
            <TextField label="Nom" source="user.lastName" />
            <DateField label="Created at" source="createdAt"/>
            <DateField label="Updated at" source="updatedAt"/>
            <BooleanField source="isActive"/>
        </SimpleShowLayout>
    </Show>
);