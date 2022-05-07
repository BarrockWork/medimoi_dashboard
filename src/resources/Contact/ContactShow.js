import * as React from 'react';
import {
  Show,
  SimpleShowLayout,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
} from 'react-admin';

const ContactShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source='id' />
      <TextField source='firstName' />
      <TextField source='lastName' />
      <TextField source='phoneNumber' />
      <ReferenceField
        label='Contact Type'
        source='contact_type_id'
        reference='contact_type'>
        <TextField source='name' />
      </ReferenceField>
      <ReferenceField label='User' source='user_id' reference='users'>
        <TextField source='email' />
      </ReferenceField>
      <BooleanField source='isActive' />
    </SimpleShowLayout>
  </Show>
);

export default ContactShow;
