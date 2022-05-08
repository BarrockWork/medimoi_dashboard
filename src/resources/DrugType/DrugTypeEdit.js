import {TextInput, BooleanInput, Edit, SimpleForm, required} from 'react-admin';
import * as React from "react";
import {RichTextInput} from 'ra-input-rich-text';

export const DrugTypeEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput disabled label="Id" source="id" />
            <TextInput label="name" source="name" validate={required()} />
            <RichTextInput label="description" source="description" validate={required()}/>
            <BooleanInput source="isActive" />
        </SimpleForm>
    </Edit>
)