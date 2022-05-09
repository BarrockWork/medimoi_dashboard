import * as React from "react";
import {Show, SimpleShowLayout, TextField, DateField, BooleanField, RichTextField} from 'react-admin';

export const DrugTypeShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField label="name" source="name" />
            <TextField label="name slug" source="nameSlug" />
            <RichTextField label="description" source="description" />
            <DateField label="Created at" source="createdAt" />
            <DateField label="Updated at" source="updatedAt" />
            <BooleanField source="isActive"/>
        </SimpleShowLayout>
    </Show>
)