import {
  Edit,
  SimpleForm,
  required,
  ReferenceInput,
  SelectInput,
  TextInput,
} from 'react-admin';

const KhysInfoShow = () => (
  <Edit>
    <SimpleForm>
      <TextInput disabled label='Id' source='id' />
      <TextInput source='name' validate={required()} />
      <TextInput source='phoneNumber' validate={required()} />
      <TextInput source='email' validate={required()} />
      <ReferenceInput
        label='Address Road Type'
        source='address_road_type_id'
        reference='address_road_type'>
        <SelectInput optionText='name' validate={required()} />
      </ReferenceInput>
      <TextInput source='numberRoad' validate={required()} />
      <TextInput source='streetName' validate={required()} />
      <TextInput source='zipcode' validate={required()} />
      <TextInput source='city' validate={required()} />
      <TextInput source='region' validate={required()} />
      <TextInput source='country' validate={required()} />
      <TextInput source='siret' validate={required()} />
      <TextInput source='tva' validate={required()} />
    </SimpleForm>
  </Edit>
);

export default KhysInfoShow;
