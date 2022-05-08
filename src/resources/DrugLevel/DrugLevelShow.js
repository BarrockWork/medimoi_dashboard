import * as React from "react";
import {Show, SimpleShowLayout, TextField, DateField, BooleanField} from 'react-admin';

export const DrugLevelShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField label="Id" source="id" />
            <TextField label="Level" source="level" />
            <TextField label="Description" source="description" />
            <DateField label="Created at" source="createdAt" />
            <DateField label="Updated at" source="updatedAt" />
            <BooleanField label="Is active" source="isActive" />
        </SimpleShowLayout>
    </Show>
)