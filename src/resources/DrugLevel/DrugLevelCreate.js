import {Create, SimpleForm, BooleanInput, required, NumberInput} from 'react-admin';
import * as React from "react";
import { RichTextInput } from 'ra-input-rich-text';

export const DrugLevelCreate = () => (
    <Create>
        <SimpleForm>
            <NumberInput source="level" validate={required()} />
            <RichTextInput source="description" validate={required()} />
        </SimpleForm>
    </Create>
)