import * as React from 'react';
import {
  BooleanInput,
  Create,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  required,
  TextInput,
} from 'react-admin';

const UserCompanyCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput disabled label='Id' source='id' />
      <ReferenceInput label='Company' source='company_id' reference='company'>
        <SelectInput source='name' validate={required()} />
      </ReferenceInput>
      <ReferenceInput label='User' source='user_id' reference='users'>
        <SelectInput source='email' validate={required()} />
      </ReferenceInput>
      <BooleanInput source='isActive' />
    </SimpleForm>
  </Create>
);

export default UserCompanyCreate;
