import './App.css';
import { ApiContext } from './contexts';
import { Admin, Resource } from 'react-admin';
import { useContext } from 'react';
// Components
import { Dashboard } from './components';
// Ressources
import medicalAdministrations from './resources/MedicalAdministration';
import treatments from './resources/Treatment';
import treatmentsDrugs from './resources/TreatmentDrug';
import treatmentPeriodicities from './resources/TreatmentPeriodicity';
import Company from './resources/Company';

// App
const App = () => {
  const { medimoiProvider } = useContext(ApiContext);
  console.log(ApiContext);
  return (
    <Admin dashboard={Dashboard} dataProvider={medimoiProvider}>
      {/* Company CRUD */}
      <Resource name='company' {...Company} />
      {/* MedicalAdministration CRUD*/}
      <Resource name='medical_administrations' {...medicalAdministrations} />
      {/* Treatment CRUD*/}
      <Resource name='treatments' {...treatments} />
      {/* TreatmentDrud CRUD*/}
      <Resource name='treatment_drugs' {...treatmentsDrugs} />
      {/* TreatmentPeriodicity CRUD*/}
      <Resource name='treatment_periodicities' {...treatmentPeriodicities} />
    </Admin>
  );
};

export default App;
