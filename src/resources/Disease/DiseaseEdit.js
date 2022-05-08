import {SimpleForm, BooleanInput, TextInput, required, ReferenceInput, RichTextField, Edit, SelectInput} from 'react-admin';
import {RichTextInput} from 'ra-input-rich-text';
import * as React from "react";

export const DiseaseEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" disabled />
            <TextInput source="name" validate={required()} />
            <TextInput source="nameSlug" disabled />
            <ReferenceInput source="disease_type_id" reference="disease_types" validate={required()}>
                <SelectInput optionText="name" />
            </ReferenceInput>
            <RichTextInput label="description" source="description" validate={required()}/>
            <TextInput label="Incubation period" source="incubationPeriod" />
            <TextInput label="Transmitting" source="transmitting" />
            <BooleanInput source="isActive" defaultValue="true"/>
        </SimpleForm>
    </Edit>
);