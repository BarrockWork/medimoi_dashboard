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
  ReferenceField,
} from 'react-admin';

const UserCompanyList = () => (
  <List>
    <Datagrid>
      <ReferenceField label='Company' source='company_id' reference='company'>
        <TextField source='name' />
      </ReferenceField>
      <ReferenceField label='User' source='user_id' reference='users'>
        <TextField source='email' />
      </ReferenceField>
      <DateField source={'createdAt'} />
      <DateField source={'updatedAt'} />
      <BooleanField source='isActive' />
      <ShowButton />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export default UserCompanyList;
