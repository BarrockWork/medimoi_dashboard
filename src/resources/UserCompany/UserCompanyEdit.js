import * as React from 'react';
import {
  TextInput,
  BooleanInput,
  Edit,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  required,
} from 'react-admin';

const UserCompanyEdit = () => (
  <Edit>
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
  </Edit>
);

export default UserCompanyEdit;
