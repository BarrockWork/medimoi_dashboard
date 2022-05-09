import {
    Create,
    SimpleForm,
    BooleanInput,
    ReferenceInput,
    SelectInput,
    required
} from 'react-admin';
import * as React from "react";

export const UserNotificationTypeCreate = () => (
    <Create>
        <SimpleForm>
            <ReferenceInput label="Utilisateur" source="user_id" reference="users">
                <SelectInput optionText="firstName" validate={required()}/>
            </ReferenceInput>
            <ReferenceInput label="Type de notification" source="notification_type_id" reference="notification_type">
                <SelectInput optionText="name" validate={required()}/>
            </ReferenceInput>
            <BooleanInput source="isActive" defaultValue="true"/>
        </SimpleForm>
    </Create>
);