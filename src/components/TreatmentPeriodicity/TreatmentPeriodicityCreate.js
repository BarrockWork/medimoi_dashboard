import {Create, SimpleForm, BooleanInput, TextInput, required} from 'react-admin';
import * as React from "react";

export const TreatmentPeriodicityCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" validate={required()} />
            <BooleanInput source="isActive" />
        </SimpleForm>
    </Create>
);