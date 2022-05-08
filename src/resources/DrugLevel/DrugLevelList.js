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

const DrugLevelList = () => (
    <List>
        <Datagrid>
            <TextField label="Id" source="id" />
            <TextField label="Level" source="level" />
            {/* <TextField label="Description" source="description" /> */}
            <DateField label="Created at" source="createdAt" />
            <DateField label="Updated at" source="updatedAt" />
            <BooleanField label="Is active" source="isActive" />
            <ShowButton />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
)

export {
    DrugLevelList
};