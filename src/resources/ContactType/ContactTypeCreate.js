import * as React from 'react';
import {
  TextInput,
  BooleanInput,
  Create,
  SimpleForm,
  required,
} from 'react-admin';

const ContactTypeCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput disabled label='Id' source='id' />
      <TextInput source='name' validate={required()} />
      <BooleanInput source='isActive' />
    </SimpleForm>
  </Create>
);

export default ContactTypeCreate;
