import * as React from 'react';
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

const NotificationTypeList = () => (
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

export default NotificationTypeList;
