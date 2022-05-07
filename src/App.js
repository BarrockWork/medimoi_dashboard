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
import Contact from './resources/Contact';
import ContactType from './resources/ContactType';

// App
const App = () => {
  const { medimoiProvider } = useContext(ApiContext);
  return (
    <Admin dashboard={Dashboard} dataProvider={medimoiProvider}>
      {/* Contact CRUD */}
      <Resource name='contact' {...Contact} />
      {/* Contact CRUD */}
      <Resource name='contact types' {...ContactType} />
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
