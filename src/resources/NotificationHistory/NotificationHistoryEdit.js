import * as React from "react";
import {
    Edit,
    SimpleForm,
    required,
    SelectInput, ReferenceInput,
} from 'react-admin';


export const NotificationHistoryEdit = () => (
    <Edit>
        <SimpleForm>
            <ReferenceInput label="Type de notification" source="user_notification_type_id"
                            reference="user_notification_type">
                <SelectInput optionText="id" validate={required()}/>
            </ReferenceInput>
        </SimpleForm>
    </Edit>
)