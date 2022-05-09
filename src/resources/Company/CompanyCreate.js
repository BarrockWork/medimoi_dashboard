import * as React from 'react';
import {
  TextInput,
  BooleanInput,
  Create,
  SimpleForm,
  required,
} from 'react-admin';

const CompanyCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput disabled label='Id' source='id' />
      <TextInput source='name' validate={required()} />
      <TextInput source='siret' validate={required()} />
      <TextInput source='tva' validate={required()} />
      <BooleanInput source='isActive' />
    </SimpleForm>
  </Create>
);

export default CompanyCreate;
