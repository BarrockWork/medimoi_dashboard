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

export const DiseaseList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <ReferenceField source="disease_type_id" reference='disease_types'>
                <TextField source="name" />
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