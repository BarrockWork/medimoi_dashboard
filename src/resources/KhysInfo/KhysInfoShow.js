import React from 'react';
import {
  Show,
  SimpleShowLayout,
  TextField,
  DateField,
  ReferenceField,
} from 'react-admin';

const KhysInfoShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source='id' />
      <TextField source='name' />
      <TextField source='nameSlug' />
      <TextField source='phoneNumber' />
      <TextField source='email' />
      <ReferenceField
        label='Address Road Type'
        source='address_road_type_id'
        reference='address_road_type'>
        <TextField source='name' />
      </ReferenceField>
      <TextField source='numberRoad' />
      <TextField source='streetName' />
      <TextField source='zipcode' />
      <TextField source='city' />
      <TextField source='country' />
      <TextField source='siret' />
      <TextField source='tva' />
      <DateField label='Created at' source='createdAt' />
      <DateField label='Updated at' source='updatedAt' />
    </SimpleShowLayout>
  </Show> // Show
);

export default KhysInfoShow;
