import{
    List,
    Datagrid,
    TextField,
    BooleanField,
    EditButton,
    DeleteButton,
    ShowButton,
    ReferenceField,
    DateField,
} from 'react-admin';
import * as React from "react";

export const DrugList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <ReferenceField label="Drug Type" source="drug_type_id" reference="drug_types">
                <TextField source="name" />
            </ReferenceField>
            <ReferenceField label="Drug Level" source="drug_level_id" reference="drug_levels">
                <TextField source="level" />
            </ReferenceField>
            <ReferenceField label="Medical Administration" source="medical_administration_id" reference="medical_administrations">
                <TextField source="name" />
            </ReferenceField>
            <TextField source='name' />
            <TextField source='nameSlug' />
            <DateField label="Created at" source="createdAt" />
            <DateField label="Updated at" source="updatedAt" />
            <BooleanField source='isPrescription' />
            <BooleanField source="isActive" />
            <ShowButton />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
)