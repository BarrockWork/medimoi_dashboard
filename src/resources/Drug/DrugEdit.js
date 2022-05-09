import {
    Edit,
    SimpleForm,
    BooleanInput,
    ReferenceInput,
    SelectInput,
    required,
    TextInput
} from 'react-admin';
import * as React from "react";
import { RichTextInput } from 'ra-input-rich-text';

export const DrugEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput disabled label="Id" source="id" />
            <ReferenceInput label="Drug Type" source="drug_type_id" reference="drug_types">
                <SelectInput optionText="name" validate={required()}/>
            </ReferenceInput>

            <ReferenceInput label='Drug Level' source="drug_level_id" reference="drug_levels">
                <SelectInput optionText="level" validate={required()}/>
            </ReferenceInput>

            <ReferenceInput label='Medical Administration' source="medical_administration_id" reference="medical_administrations">
                <SelectInput optionText="name" validate={required()}/>
            </ReferenceInput>
            <RichTextInput source={"description"}/>
            <TextInput source='name' validate={required()}/>
            <BooleanInput source='isPrescription'/>
            <BooleanInput source="isActive"/>
        </SimpleForm>
    </Edit>
)