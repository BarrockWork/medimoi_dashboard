import {Create, SimpleForm, BooleanInput, TextInput, required} from 'react-admin';
import * as React from "react";

export const DrugTypeCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" validate={required()} />
            <BooleanInput source="isActive" defaultValue="true"/>
        </SimpleForm>
    </Create>
);