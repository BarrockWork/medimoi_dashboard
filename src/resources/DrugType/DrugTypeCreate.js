import {Create, SimpleForm, BooleanInput, TextInput, required} from 'react-admin';
import * as React from "react";
import { RichTextInput } from 'ra-input-rich-text';

export const DrugTypeCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput label="name" source="name" validate={required()} />
            <RichTextInput label="description" source="description" validate={required()}/>
        </SimpleForm>
    </Create>
);