import * as React from "react";
import {Show, SimpleShowLayout, TextField, BooleanField, ReferenceField, RichTextField} from 'react-admin';

export const TreatmentDrugShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <ReferenceField label="Treatment" source="treatment_id" reference="treatments">
                <TextField source="name" />
            </ReferenceField>
            <ReferenceField label="Drug" source="drug_id" reference="drugs">
                <TextField source="name" />
            </ReferenceField>
            <RichTextField source={"comments"} />
            <BooleanField source="isActive" />
        </SimpleShowLayout>
    </Show>
);