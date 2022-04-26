import {
    Create,
    SimpleForm,
    BooleanInput,
    TextInput,
    DateTimeInput,
    ReferenceInput,
    SelectInput,
    required
} from 'react-admin';
import * as React from "react";

export const TreatmentCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" validate={required()} />
            <ReferenceInput label="User" source="user_id" reference="users" >
                <SelectInput optionText="email" validate={required()}/>
            </ReferenceInput>
            <ReferenceInput label="Periodicity" source="Treatment_periodicity_id" reference="treatment_periodicities" >
                <SelectInput optionText="name" validate={required()}/>
            </ReferenceInput>
            <DateTimeInput source={"startedAt"} validate={required()}/>
            <DateTimeInput source={"finishedAt"} />
            <BooleanInput source="isActive" />
        </SimpleForm>
    </Create>
);