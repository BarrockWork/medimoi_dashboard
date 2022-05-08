import {Create, SimpleForm, BooleanInput, TextInput, required} from 'react-admin';
import * as React from "react";

export const UserTypeCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" validate={required()}/>
        </SimpleForm>
    </Create>
);