import {
  List,
  Datagrid,
  TextField,
  DateField,
  BooleanField,
  EditButton,
  DeleteButton,
  ShowButton,
} from 'react-admin';
import * as React from 'react';

const ContactTypeList = () => (
  <List>
    <Datagrid>
      <TextField disabled label='Id' source='id' />
      <TextField source='name' />
      <BooleanField source='isActive' />
      <DateField source={'createdAt'} />
      <DateField source={'updatedAt'} />
      <ShowButton />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export default ContactTypeList;
