import {
    List,
    Datagrid,
    TextField,
    DateField,
    BooleanField,
    EditButton,
    DeleteButton,
    ShowButton,
    ReferenceField
} from 'react-admin';
import * as React from "react";

export const TreatmentList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <ReferenceField label="User" source="user_id" reference="users">
                <TextField source="id" />
            </ReferenceField>
            <ReferenceField label="Periodicity" source="treatment_periodicity_id" reference="treatment_periodicities">
                <TextField source="id" />
            </ReferenceField>
            <DateField source={"startedAt"} />
            <DateField source={"finishedAt"} />
            <BooleanField source="isActive" />
            <ShowButton />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);