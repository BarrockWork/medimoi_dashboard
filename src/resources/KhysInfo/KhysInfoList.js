import React from 'react';
import {
  Datagrid,
  DateField,
  List,
  TextField,
  EditButton,
  DeleteButton,
  ReferenceField,
  ShowButton,
} from 'react-admin';

const KhysInfoList = () => (
  <List>
    <Datagrid>
      <TextField source='id' />
      <TextField source='name' />
      <TextField source='nameSlug' />
      <TextField source='phoneNumber' />
      <TextField source='email' />
      <ReferenceField
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
      <ShowButton />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export default KhysInfoList;
