import * as React from 'react';
import {
  TextInput,
  BooleanInput,
  Edit,
  SimpleForm,
  required,
} from 'react-admin';

const CompanyEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput disabled label='Id' source='id' />
      <TextInput source='name' validate={required()} />
      <TextInput source='siret' validate={required()} />
      <TextInput source='tva' validate={required()} />
      <BooleanInput source='isActive' />
    </SimpleForm>
  </Edit>
);

export default CompanyEdit;
