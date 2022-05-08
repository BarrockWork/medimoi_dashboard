import {
    Create,
    SimpleForm,
    TextInput,
    PasswordInput,
    NumberInput,
    required,
    BooleanInput,
    SelectInput, ReferenceInput
} from 'react-admin';
import * as React from "react";

export const UserCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="firstName" validate={required()}/>
            <TextInput source="lastName" validate={required()}/>
            <NumberInput source="age" validate={required()}/>
            <TextInput source="email" validate={required()}/>
            <PasswordInput source="password" validate={required()}/>
            <TextInput source="cellphone" validate={required()}/>
            <TextInput source="homephone" validate={required()}/>
            <TextInput source="workphone"/>
            <SelectInput source="role" choices={[
                { id: 'user', name: 'USER' },
                { id: 'admin', name: 'ADMIN' },
                { id: 'super_admin', name: 'SUPER_ADMIN' },
            ]} />
            <ReferenceInput source="user_type_id" reference="user_type" validate={required()}>
                <SelectInput optionText="name" />
            </ReferenceInput>
                <BooleanInput source="isActive" defaultValue="true"/>
                </SimpleForm>
                </Create>
                );