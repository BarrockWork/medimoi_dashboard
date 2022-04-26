import * as React from "react";
import {
    TextInput,
    BooleanInput,
    Edit,
    SimpleForm,
    required,
    ReferenceInput,
    SelectInput,
    DateTimeInput
} from 'react-admin';

export const TreatmentEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="name" validate={required()} />
            <ReferenceInput label="User" source="User.id" reference="users" >
                <SelectInput optionText="email" validate={required()}/>
            </ReferenceInput>
            <ReferenceInput label="Periodicity" source="TreatmentPeriodicity.id" reference="treatment_periodicities" >
                <SelectInput optionText="name" validate={required()}/>
            </ReferenceInput>
            <DateTimeInput source={"startedAt"} validate={required()}/>
            <DateTimeInput source={"finishedAt"} />
            <BooleanInput source="isActive" />
        </SimpleForm>
    </Edit>
);