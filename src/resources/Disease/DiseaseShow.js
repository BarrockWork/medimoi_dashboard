import * as React from "react";
import {Show, SimpleShowLayout, TextField, DateField, BooleanField, ReferenceField} from 'react-admin';

export const DiseaseShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="DiseaseType.id" />
            <DateField source={"startedAt"} />
            <DateField source={"finishedAt"} />
            <BooleanField source="isActive" />
        </SimpleShowLayout>
    </Show>
);