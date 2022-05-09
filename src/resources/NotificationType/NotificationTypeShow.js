import * as React from 'react';
import {
  Show,
  SimpleShowLayout,
  TextField,
  DateField,
  BooleanField,
} from 'react-admin';

const NotificationTypeShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField disabled label='Id' source='id' />
      <TextField source='name' />
      <DateField source={'createdAt'} />
      <DateField source={'updatedAt'} />
      <BooleanField source='isActive' />
    </SimpleShowLayout>
  </Show>
);

export default NotificationTypeShow;