import {
  Create,
  SimpleForm,
  TextInput,
  required,
  ReferenceInput,
  NumberInput,
  SelectInput,
} from 'react-admin';
import * as React from 'react';

const KhysInfoCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source='name' validate={required()} />
      <TextInput source='phoneNumber' validate={required()} />
      <TextInput source='email' validate={required()} />
      <ReferenceInput
        label=' Address Road Type'
        source='address_road_type_id'
        reference='address_road_type'>
        <SelectInput optionText='name' validate={required()} />
      </ReferenceInput>
      <NumberInput source='numberRoad' validate={required()} />
      <TextInput source='streetName' validate={required()} />
      <TextInput source='zipcode' validate={required()} />
      <TextInput source='city' validate={required()} />
      <TextInput source='region' validate={required()} />
      <TextInput source='country' validate={required()} />
      <TextInput source='siret' validate={required()} />
      <TextInput source='tva' validate={required()} />
    </SimpleForm>
  </Create>
);

export default KhysInfoCreate;
