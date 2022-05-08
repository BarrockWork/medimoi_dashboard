import {
    Create,
    SimpleForm,
    BooleanInput,
    ReferenceInput,
    SelectInput,
    required,
    TextInput
} from 'react-admin';
import * as React from "react";
import { RichTextInput } from 'ra-input-rich-text';

export const DrugCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput label="name" source='name' validate={required()}/>

            <RichTextInput label="description" source={"description"} validate={required()}/>

            <ReferenceInput label="Drug Type" source="drug_type_id" reference="drug_types">
                <SelectInput optionText="name" validate={required()}/>
            </ReferenceInput>

            <ReferenceInput label='Drug Level' source="drug_level_id" reference="drug_levels">
                <SelectInput optionText="level" validate={required()}/>
            </ReferenceInput>

            <ReferenceInput label='Medical Administration' source="medical_administration_id" reference="medical_administrations">
                <SelectInput optionText="name" validate={required()}/>
            </ReferenceInput>
            <BooleanInput source='isPrescription' defaultValue={false}/>
        </SimpleForm>
    </Create>
)