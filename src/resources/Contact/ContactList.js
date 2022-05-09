import {
  List,
  Datagrid,
  TextField,
  DateField,
  BooleanField,
  EditButton,
  DeleteButton,
  ShowButton,
  ReferenceField,
} from 'react-admin';
import * as React from 'react';

const ContactList = () => (
  <List>
    <Datagrid>
      <TextField disabled label='Id' source='id' />
      <ReferenceField
        label='Contact Type'
        source='contact_type_id'
        reference='contact_type'>
        <TextField source='name' />
      </ReferenceField>
      <ReferenceField label='User' source='user_id' reference='users'>
        <TextField source='email' />
      </ReferenceField>
      <TextField source='firstName' />
      <TextField source='lastName' />
      <TextField source='phoneNumber' />

      <BooleanField source='isActive' />
      <ShowButton />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export default ContactList;
