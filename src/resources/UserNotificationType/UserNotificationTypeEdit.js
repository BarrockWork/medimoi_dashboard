import * as React from "react";
import {TextInput, Edit, SimpleForm, required, ReferenceInput, SelectInput} from 'react-admin';

export const UserNotificationTypeEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput disabled label="Id" source="id" />
            <ReferenceInput label="User" source="User.id" reference="users" >
                <SelectInput optionText="lastName" validate={required()}/>
            </ReferenceInput>
            <ReferenceInput label="Type de notification" source="notification_type_id" reference="notification_types" >
                <SelectInput optionText="name" validate={required()}/>
            </ReferenceInput>        </SimpleForm>
    </Edit>
);