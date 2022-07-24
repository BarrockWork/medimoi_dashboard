import {
    Create,
    SimpleForm,
    BooleanInput,
    TextInput,
    DateTimeInput,
    ReferenceInput,
    SelectInput,
    FileInput,
    FileField,
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
            <ReferenceInput label="Periodicity" source="treatment_periodicity_id" reference="treatment_periodicities" >
                <SelectInput optionText="name" validate={required()}/>
            </ReferenceInput>
            <DateTimeInput source={"startedAt"} validate={required()}/>
            <DateTimeInput source={"finishedAt"} />
            <BooleanInput source="isActive" defaultValue={true}/>
            <FileInput
                source="files"
                label="Importer des fichiers"
                accept="application/pdf,image/png,image/jpg,image/jpeg,application/msword,application/vnd.ms-excel,application/vnd.ms-powerpoint"
                multiple={true}
                maxSize={5000000}
            >
                <FileField source="src" />
            </FileInput>
        </SimpleForm>
    </Create>
);