import * as React from "react";
import {Show, SimpleShowLayout, TextField, DateField, BooleanField, ReferenceField, FileField} from 'react-admin';

export const TreatmentShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="User.id" />
            <TextField source="TreatmentPeriodicity.id" />
            <DateField source={"startedAt"} />
            <DateField source={"finishedAt"} />
            <BooleanField source="isActive" />
            <FileField label="Liste des fichiers" source="TreatmentMedias" title="originalName"/>
        </SimpleShowLayout>
    </Show>
);