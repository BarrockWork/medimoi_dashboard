import * as React from 'react';
import {
  TextInput,
  BooleanInput,
  Edit,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  required,
} from 'react-admin';

const ContactEdit = () => (
  <Edit>
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
  </Edit>
);

export default ContactEdit;
