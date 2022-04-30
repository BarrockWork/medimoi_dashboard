import * as React from "react";
import {TextInput, BooleanInput, Edit, SimpleForm, required} from 'react-admin';

export const MedicalAdministrationEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput disabled label="Id" source="id" />
            <TextInput source="name" validate={required()} />
            <BooleanInput source="isActive" />
        </SimpleForm>
    </Edit>
);