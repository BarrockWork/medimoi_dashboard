import * as React from "react";
import {
    TextInput,
    BooleanInput,
    Edit,
    SimpleForm,
    required,
    ReferenceInput,
    SelectInput,
    DateTimeInput,
    FileInput,
    FileField,
    WrapperField, TextField
} from 'react-admin';

export const TreatmentEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="name" validate={required()} />
            <ReferenceInput label="User" source="User.id" reference="users" >
                <SelectInput optionText="email" validate={required()}/>
            </ReferenceInput>
            <ReferenceInput label="Periodicity" source="treatment_periodicity.id" reference="treatment_periodicities" >
                <SelectInput optionText="name" validate={required()}/>
            </ReferenceInput>
            <DateTimeInput source={"startedAt"} validate={required()}/>
            <DateTimeInput source={"finishedAt"} />
            <BooleanInput source="isActive" />
            <FileField label="Liste des fichiers" source="TreatmentMedias" title="originalName"/>
            <FileInput
                source="files"
                label="Importer des fichiers"
                accept="application/pdf,image/png, image/jpg, image/jpeg, application/msword,application/vnd.ms-excel,application/vnd.ms-powerpoint"
                multiple={true}
                maxSize={5000000}
            >
                <FileField source="src"/>
            </FileInput>
        </SimpleForm>
    </Edit>
);