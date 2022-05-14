import './App.css';
import { ApiContext } from './contexts';
import { Admin, Resource } from 'react-admin';
import { useContext } from 'react';
// Components
import { Dashboard } from './components';
// Ressources
import Company from './resources/Company';
import Contact from './resources/Contact';
import ContactType from './resources/ContactType';
import NotificationType from './resources/NotificationType';
import UserCompany from './resources/UserCompany';
import medicalAdministrations from './resources/MedicalAdministration';
import treatments from './resources/Treatment';
import treatmentsDrugs from './resources/TreatmentDrug';
import treatmentPeriodicities from './resources/TreatmentPeriodicity';

import drugs from './resources/Drug';
import drugTypes from './resources/DrugType';
import drugLevels from './resources/DrugLevel';
import disease from './resources/Disease';
import diseaseTypes from './resources/DiseaseType';

import addressRoadType from './resources/AddressRoadType';
import userType from './resources/UserType';
import user from './resources/User';
import address from './resources/Address';
import userNotificationType from './resources/UserNotificationType';
import notificationHistory from './resources/NotificationHistory';

import KhysInfo from './resources/KhysInfo';
// App
const App = () => {
  const { medimoiProvider } = useContext(ApiContext);
  return (
    <Admin dashboard={Dashboard} dataProvider={medimoiProvider}>
      {/* Khys Info CRUD */}
      <Resource name='khys_info' {...KhysInfo} />
      {/* Contact CRUD */}
      <Resource name='contact' {...Contact} />
      {/* Contact Type CRUD */}
      <Resource name='contact_type' {...ContactType} />
      {/* Company CRUD */}
      <Resource name='company' {...Company} />
      {/* MedicalAdministration CRUD*/}
      <Resource name='medical_administrations' {...medicalAdministrations} />
      {/* NotificationType CRUD */}
      <Resource name='notification_type' {...NotificationType} />
      {/* UserCompany CRUD */}
      <Resource name='user_company' {...UserCompany} />
      {/* TreatmentDrud CRUD*/}
      <Resource name='treatment_drugs' {...treatmentsDrugs} />
      {/* TreatmentPeriodicity CRUD*/}
      <Resource name='treatment_periodicities' {...treatmentPeriodicities} />
      {/* MedicalAdministration CRUD*/}
      <Resource name='medical_administrations' {...medicalAdministrations} />
      {/* Treatment CRUD*/}
      <Resource name='treatments' {...treatments} />
      {/* DrugType CRUD*/}
      <Resource name='drug_types' {...drugTypes} />
      {/* Drug CRUD*/}
      <Resource name='drugs' {...drugs} />
      {/* DrugLevel CRUD*/}
      <Resource name='drug_levels' {...drugLevels} />
      {/* Disease CRUD*/}
      <Resource name='diseases' {...disease} />
      {/* DiseaseType CRUD*/}
      <Resource name='disease_types' {...diseaseTypes} />
      {/* UserType CRUD*/}
      <Resource name='user_type' {...userType} />
      {/* User CRUD*/}
      <Resource name='users' {...user} />
      {/* Address CRUD*/}
      <Resource name='address' {...address} />
      {/* AddressRoadType CRUD*/}
      <Resource name='address_road_type' {...addressRoadType} />
      {/* UserNotificationType CRUD*/}
      <Resource name='user_notification_type' {...userNotificationType} />
      {/* NotificationHistory CRUD*/}
      <Resource name='notification_history' {...notificationHistory} />
    </Admin>
  );
};

export default App;
