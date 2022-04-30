import {
    List,
    Datagrid,
    TextField,
    BooleanField,
    EditButton,
    DeleteButton,
    ShowButton,
    ReferenceField,
    RichTextField
} from 'react-admin';
import * as React from "react";

export const TreatmentDrugList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <ReferenceField label="Treatment" source="treatment_id" reference="treatments">
                <TextField source="name" />
            </ReferenceField>
            <ReferenceField label="Drug" source="drug_id" reference="drugs">
                <TextField source="name" />
            </ReferenceField>
            <RichTextField source={"comments"} />
            <BooleanField source="isActive" />
            <ShowButton />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);