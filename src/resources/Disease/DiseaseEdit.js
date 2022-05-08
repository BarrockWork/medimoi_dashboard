import {SimpleForm, BooleanInput, TextInput, required, ReferenceInput, RichTextField, Edit, SelectInput} from 'react-admin';
import * as React from "react";

export const DiseaseEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" disabled />
            <TextInput source="name" validate={required()} />
            <ReferenceInput source="disease_type_id" reference="disease_type" validate={required()}>
                <SelectInput optionText="name" />
            </ReferenceInput>
            <RichTextField source="description" />
            <BooleanInput source="isActive" defaultValue="true"/>
        </SimpleForm>
    </Edit>
);