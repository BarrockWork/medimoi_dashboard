import {Create, SimpleForm, TextInput, required} from 'react-admin';
import * as React from "react";

export const AddressRoadTypeCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" validate={required()}/>
        </SimpleForm>
    </Create>
);