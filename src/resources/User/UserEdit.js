import * as React from "react";
import {
    TextInput,
    BooleanInput,
    Edit,
    SimpleForm,
    required,
    SelectInput,
    NumberInput,
} from 'react-admin';


export const UserEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="firstName" validate={required()}/>
            <TextInput source="lastName" validate={required()}/>
            <NumberInput source="age" validate={required()}/>
            <TextInput source="email" validate={required()}/>
            <TextInput source="cellphone" validate={required()}/>
            <TextInput source="homephone" validate={required()}/>
            <TextInput source="workphone"/>
            <SelectInput source="role" choices={[
                {id: 'user', name: 'USER'},
                {id: 'admin', name: 'ADMIN'},
                {id: 'super_admin', name: 'SUPER_ADMIN'},
            ]}/>
            <BooleanInput source="isActive" defaultValue="true"/>
        </SimpleForm>
    </Edit>
)