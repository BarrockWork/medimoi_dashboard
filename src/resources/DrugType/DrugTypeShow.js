import * as React from "react";
import {Show, SimpleShowLayout, TextField, DateField, BooleanField} from 'react-admin';

export const DrugTypeShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="name" />
            <TextField source="nameSlug" />
            <DateField label="Created at" source="createdAt" />
            <DateField label="Updated at" source="updatedAt" />
            <BooleanField source="isActive"/>
        </SimpleShowLayout>
    </Show>
)