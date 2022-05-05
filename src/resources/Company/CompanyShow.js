import * as React from 'react';
import {
  Show,
  SimpleShowLayout,
  TextField,
  DateField,
  BooleanField,
} from 'react-admin';

const CompanyShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source='id' />
      <TextField source='name' />
      <TextField source='nameSlug' />
      <TextField source='siret' />
      <TextField source='tva' />
      <DateField label='Created at' source='createdAt' />
      <DateField label='Updated at' source='updatedAt' />
      <BooleanField source='isActive' />
    </SimpleShowLayout>
  </Show>
);

export default CompanyShow;
