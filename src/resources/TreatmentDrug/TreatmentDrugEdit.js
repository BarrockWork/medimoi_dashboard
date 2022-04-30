import * as React from "react";
import {
    BooleanInput,
    Edit,
    SimpleForm,
    required,
    ReferenceInput,
    SelectInput
} from 'react-admin';
import {RichTextInput} from "ra-input-rich-text";

export const TreatmentDrugEdit = () => (
    <Edit>
        <SimpleForm>
            <ReferenceInput label="Treatment" source="treatment_id" reference="treatments" >
                <SelectInput optionText="name" validate={required()}/>
            </ReferenceInput>
            <ReferenceInput label="Drug" source="drug_id" reference="drugs" >
                <SelectInput optionText="name" validate={required()}/>
            </ReferenceInput>
            <RichTextInput source={"comments"} />
            <BooleanInput source="isActive" defaultValue="true"/>
        </SimpleForm>
    </Edit>
);