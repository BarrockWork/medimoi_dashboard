import * as React from "react";
import {TextInput, Edit, SimpleForm, required} from 'react-admin';

export const UserTypeEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput disabled label="Id" source="id" />
            <TextInput source="name" validate={required()} />
        </SimpleForm>
    </Edit>
);