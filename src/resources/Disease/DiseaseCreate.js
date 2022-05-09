import {Create, SimpleForm, BooleanInput, TextInput, required, ReferenceInput, SelectInput} from 'react-admin';
import { RichTextInput } from 'ra-input-rich-text';
import * as React from "react";

export const DiseaseCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" validate={required()} />
            <ReferenceInput source="disease_type_id" reference="disease_types" validate={required()}>
                <SelectInput optionText="name" />
            </ReferenceInput>
            <RichTextInput label="description" source="description" validate={required()}/>
            <TextInput label="Incubation period" source="incubationPeriod" />
            <TextInput label="Transmitting" source="transmitting" />
        </SimpleForm>
    </Create>
);