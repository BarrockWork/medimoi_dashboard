import * as React from "react";
import {
    Show,
    SimpleShowLayout,
    TextField,
    NumberField,
     DateField
} from 'react-admin';

export const AddressShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id"/>
            <TextField label="Utilisateur" source="User.lastName" />
            <TextField source="AddressRoadType.name" />
            <NumberField source="numberRoad"/>
            <TextField source="streetName"/>
            <TextField source="zipcode"/>
            <TextField source="city"/>
            <TextField source="region"/>
            <TextField source="country"/>
            <TextField source="title"/>
            <DateField label="Created at" source="createdAt"/>
            <DateField label="Updated at" source="updatedAt"/>
        </SimpleShowLayout>
    </Show>
);