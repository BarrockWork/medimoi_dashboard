import {
    Datagrid,
    DateField,
    DeleteButton,
    EditButton,
    List,
    ShowButton,
    NumberField,
    TextField, ReferenceField
} from "react-admin";
import * as React from "react";

export const AddressList = () => (
    <List>
        <Datagrid>
            <TextField source="id"/>
            <NumberField source="numberRoad"/>
            <ReferenceField source="address_road_type_id" reference="address_road_type">
                <TextField source="name" />
            </ReferenceField>
            <TextField label="Nom" source="streetName"/>
            <TextField label="Code postale" source="zipcode"/>
            <TextField source="city"/>
            <TextField source="country"/>
            <TextField source="region"/>
            <ReferenceField label="Nom" source="user_id" reference="Users">
                <TextField source="lastName" />
            </ReferenceField>
            <ReferenceField label="Prénom" source="user_id" reference="Users">
                <TextField source="firstName" />
            </ReferenceField>
            <DateField label="Created at" source="createdAt"/>
            <ShowButton/>
            <EditButton/>
            <DeleteButton/>
        </Datagrid>
    </List>
);