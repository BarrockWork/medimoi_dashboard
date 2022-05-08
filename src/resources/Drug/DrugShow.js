import * as React from 'react';
import {Show, SimpleShowLayout, TextField, BooleanField, ReferenceField, RichTextField, DateField} from 'react-admin';

export const DrugShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <ReferenceField label="Drug Type" source="drugType_id" reference="drug_types">
                <TextField source="name" />
            </ReferenceField>
            <ReferenceField label="Drug Level" source="drugLevel_id" reference="drug_levels">
                <TextField source="level" />
            </ReferenceField>
            <ReferenceField label="Medical Administration" source="medicalAdministration_id" reference="medical_administrations">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="name" />
            <TextField source="nameSlug" />
            <DateField label="Created at" source="createdAt" />
            <DateField label="Updated at" source="updatedAt" />
            <BooleanField source="isPrescription" />
            <BooleanField source="isActive" />
            <RichTextField source="description" />
        </SimpleShowLayout>
    </Show>
)