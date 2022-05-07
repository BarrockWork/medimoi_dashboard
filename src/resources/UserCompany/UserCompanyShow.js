import * as React from 'react';
import {
  Show,
  SimpleShowLayout,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
} from 'react-admin';

const UserCompanyShow = () => (
  <Show>
    <SimpleShowLayout>
      <ReferenceField label='Company' source='company_id' reference='company'>
        <TextField source='name' />
      </ReferenceField>
      <ReferenceField label='User' source='user_id' reference='users'>
        <TextField source='email' />
      </ReferenceField>
      <DateField source={'createdAt'} />
      <DateField source={'updatedAt'} />
      <BooleanField source='isActive' />
    </SimpleShowLayout>
  </Show>
);

export default UserCompanyShow;
