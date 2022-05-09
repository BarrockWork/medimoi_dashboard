import * as React from 'react';
import {
  TextInput,
  BooleanInput,
  Create,
  SimpleForm,
  required,
  ReferenceInput,
  SelectInput,
} from 'react-admin';

const ContactCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput disabled label='Id' source='id' />
      <TextInput source='firstName' validate={required()} />
      <TextInput source='lastName' validate={required()} />
      <TextInput source='phoneNumber' validate={required()} />
      <ReferenceInput
        label='Contact Type'
        source='contact_type_id'
        reference='contact_type'>
        <SelectInput optionText='name' validate={required()} />
      </ReferenceInput>
      <ReferenceInput label='User' source='user_id' reference='users'>
        <SelectInput optionText='email' validate={required()} />
      </ReferenceInput>
      <BooleanInput source='isActive' />
    </SimpleForm>
  </Create>
);

export default ContactCreate;
