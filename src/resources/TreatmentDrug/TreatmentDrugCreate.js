import {
    Create,
    SimpleForm,
    BooleanInput,
    ReferenceInput,
    SelectInput,
    required
} from 'react-admin';
import {RichTextInput} from "ra-input-rich-text";
import * as React from "react";

export const TreatmentDrugCreate = () => (
    <Create>
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
    </Create>
);