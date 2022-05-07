import * as React from 'react';
import {
  TextInput,
  BooleanInput,
  Create,
  SimpleForm,
  required,
  ReferenceInput,
  SelectInput
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
        source='ContactType.id'
        reference='contact_type'>
        <SelectInput optionText='name' validate={required()} />
      </ReferenceInput>
      <ReferenceInput label='User' source='User.id' reference='user'>
        <SelectInput optionText='name' validate={required()} />
      </ReferenceInput>
      <BooleanInput source='isActive' />
    </SimpleForm>
  </Create>
);

export default ContactCreate;
