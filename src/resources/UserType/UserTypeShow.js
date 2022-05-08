import * as React from "react";
import {Show, SimpleShowLayout, TextField, DateField} from 'react-admin';

export const UserTypeShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="name" />
            <TextField source="nameSlug" />
            <DateField label="Created at" source="createdAt" />
            <DateField label="Updated at" source="updatedAt" />
        </SimpleShowLayout>
    </Show>
);