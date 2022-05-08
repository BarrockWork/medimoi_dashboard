import {Create, SimpleForm, BooleanInput, TextInput, required, ReferenceInput, RichTextField, SelectInput} from 'react-admin';
import * as React from "react";

export const DiseaseCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" validate={required()} />
            <ReferenceInput source="disease_type_id" reference="disease_types" validate={required()}>
                <SelectInput optionText="name" />
            </ReferenceInput>
            <RichTextField source="description" />
            <BooleanInput source="isActive" defaultValue="true"/>
        </SimpleForm>
    </Create>
);