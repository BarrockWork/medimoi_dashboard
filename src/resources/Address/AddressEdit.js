import * as React from "react";
import {
    TextInput,
    Edit,
    SimpleForm,
    required,
    ReferenceInput,
    SelectInput, NumberInput
} from 'react-admin';

export const AddressEdit = () => (
    <Edit>
        <SimpleForm>
            <ReferenceInput label="User" source="User.id" reference="users" >
                <SelectInput optionText="lastName" validate={required()}/>
            </ReferenceInput>
            <ReferenceInput label="Type" source="address_road_type_id" reference="address_road_type" >
                <SelectInput optionText="name" validate={required()}/>
            </ReferenceInput>
            <NumberInput source="numberRoad" validate={required()}/>
            <TextInput source="streetName" validate={required()} />
            <TextInput source="city" validate={required()}/>
            <TextInput source="zipcode" validate={required()}/>
            <TextInput source="region" validate={required()}/>
            <TextInput source="country" validate={required()}/>
            <TextInput source="title"/>
        </SimpleForm>
    </Edit>
);