import {
    Create,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    required
} from 'react-admin';
import * as React from "react";

export const NotificationHistoryCreate = () => (
    <Create>
        <SimpleForm>
            <ReferenceInput label="Type de notification" source="user_notification_type_id" reference="user_notification_type">
                <SelectInput optionText="id" validate={required()}/>
            </ReferenceInput>
        </SimpleForm>
    </Create>
);