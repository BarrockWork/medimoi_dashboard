import {TextInput, BooleanInput, Edit, SimpleForm, required} from 'react-admin';
import * as React from "react";

export const DiseaseTypeEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput disabled label="Id" source="id" />
            <TextInput source="name" validate={required()} />
            <BooleanInput source="isActive" />
        </SimpleForm>
    </Edit>
)