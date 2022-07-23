import {Create, SimpleForm, BooleanInput, TextInput, required,} from 'react-admin';
import { RichTextInput } from 'ra-input-rich-text';
import * as React from "react";

export const DiseaseTypeCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" validate={required()} />
            <RichTextInput source="description" validate={required()} />
            <BooleanInput source="isActive" defaultValue="true"/>
        </SimpleForm>
    </Create>
);