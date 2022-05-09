import {SimpleForm, BooleanInput, required, NumberInput, Edit, TextField, TextInput} from 'react-admin';
import * as React from "react";
import { RichTextInput } from 'ra-input-rich-text';

export const DrugLevelEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput disabled label="Id" source="id"  />
            <NumberInput label="Level" source="level" validate={required()} />
            <RichTextInput label="Description" source="description" validate={required()} />
            <BooleanInput label="Is active" source="isActive" defaultValue="true"/>
        </SimpleForm>
    </Edit>
)