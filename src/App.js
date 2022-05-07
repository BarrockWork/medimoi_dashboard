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
import NotificationType from './resources/NotificationType';

// App
const App = () => {
  const { medimoiProvider } = useContext(ApiContext);
  return (
    <Admin dashboard={Dashboard} dataProvider={medimoiProvider}>
      {/* Contact CRUD */}
      <Resource name='contact' {...Contact} />
      {/* Contact CRUD */}
      <Resource name='contact_type' {...ContactType} />
      {/* Company CRUD */}
      <Resource name='company' {...Company} />
      {/* MedicalAdministration CRUD*/}
      <Resource name='medical_administrations' {...medicalAdministrations} />
      {/* NotificationType CRUD */}
      <Resource name='notification_type' {...NotificationType} />
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
