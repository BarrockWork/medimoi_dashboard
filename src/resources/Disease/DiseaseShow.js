import * as React from "react";
import {Show, SimpleShowLayout, TextField, DateField, BooleanField, ReferenceField, RichTextField} from 'react-admin';

export const DiseaseShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
            <TextField label="Disease Type" source="DiseaseType.name" />
            <RichTextField source="description" />
            <TextField source="incubationPeriod" />
            <TextField source="transmitting" />
            <DateField source="createdAt" />
            <DateField source="updatedAt" />
            <BooleanField source="isActive" />
        </SimpleShowLayout>
    </Show>
);