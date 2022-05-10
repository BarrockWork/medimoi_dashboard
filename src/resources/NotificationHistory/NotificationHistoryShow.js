import * as React from "react";
import {
    Show,
    SimpleShowLayout,
    TextField,
    BooleanField, DateField
} from 'react-admin';

export const NotificationHistoryShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id"/>
            <TextField label="Type" source="UserNotificationType.id" />
            <DateField label="Created at" source="createdAt"/>
            <DateField label="Updated at" source="updatedAt"/>
        </SimpleShowLayout>
    </Show>
);