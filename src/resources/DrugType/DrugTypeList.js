import {
    List,
    Datagrid,
    TextField,
    DateField,
    BooleanField,
    EditButton,
    DeleteButton,
    ShowButton
} from 'react-admin';
import * as React from "react";

export const DrugTypeList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="nameSlug" />
            <DateField label="Created at" source="createdAt" />
            <DateField label="Updated at" source="updatedAt" />
            <BooleanField source="isActive"/>
            <ShowButton />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
)