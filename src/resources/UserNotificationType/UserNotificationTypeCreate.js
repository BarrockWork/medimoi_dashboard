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
            <ReferenceInput label="User" source="user_id" reference="users">
                <SelectInput optionText="firstName" validate={required()}/>
                <SelectInput optionText="lastName" validate={required()}/>
            </ReferenceInput>
            <ReferenceInput label="Notification Type" source="notification_type_id" reference="notification_type">
                <SelectInput optionText="firstName" validate={required()}/>
                <SelectInput optionText="lastName" validate={required()}/>
            </ReferenceInput>
            <BooleanInput source="isActive" defaultValue="true"/>
        </SimpleForm>
    </Create>
);