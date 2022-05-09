import * as React from 'react';
import {
  TextInput,
  BooleanInput,
  Edit,
  SimpleForm,
  required,
} from 'react-admin';

const NotificationTypeEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput disabled label='Id' source='id' />
      <TextInput source='name' validate={required()} />
      <BooleanInput source='isActive' />
    </SimpleForm>
  </Edit>
);

export default NotificationTypeEdit;
