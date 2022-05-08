import {
    Create,
    SimpleForm,
    TextInput,
    ReferenceInput,
    SelectInput,
    NumberInput,
    required
} from 'react-admin';
import * as React from "react";

export const AddressCreate = () => (
    <Create>
        <SimpleForm>
            <ReferenceInput label="User" source="user_id" reference="users">
                <SelectInput optionText="lastName" validate={required()}/>
            </ReferenceInput>
            <ReferenceInput label="Type" source="address_road_type_id" reference="address_road_type" >
                <SelectInput optionText="name" validate={required()}/>
            </ReferenceInput>
            <NumberInput source="numberRoad" validate={required()}/>
            <TextInput source="streetName" validate={required()}/>
            <TextInput source="zipcode" validate={required()}/>
            <TextInput source="city" validate={required()}/>
            <TextInput source="region" validate={required()}/>
            <TextInput source="country" validate={required()}/>
            <TextInput source="title" validate={required()}/>
        </SimpleForm>
    </Create>
);