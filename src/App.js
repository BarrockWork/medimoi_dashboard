import './App.css';
import {ApiContext} from "./contexts";
import {Admin, Resource} from "react-admin";
import {useContext} from "react";
// Components
import {
    Dashboard,
} from './components';
// Ressources
import medicalAdministrations from "./resources/MedicalAdministration"
import treatments from "./resources/Treatment";
import treatmentsDrugs from "./resources/TreatmentDrug";
import treatmentPeriodicities from "./resources/TreatmentPeriodicity";

import drugs from "./resources/Drug";
import drugTypes from "./resources/DrugType";
import drugLevels from "./resources/DrugLevel";
import disease from "./resources/Disease";
import diseaseTypes from "./resources/DiseaseType";


import addressRoadType from "./resources/AddressRoadType";
import userType from "./resources/UserType";
// App
const App = () => {
    const {medimoiProvider} = useContext(ApiContext);
    return (
        <Admin dashboard={Dashboard} dataProvider={medimoiProvider}>
            {/* MedicalAdministration CRUD*/}
            <Resource name="medical_administrations" {...medicalAdministrations}/>
            {/* Treatment CRUD*/}
            <Resource name="treatments" {...treatments}/>
            {/* TreatmentDrud CRUD*/}
            <Resource name="treatment_drugs" {...treatmentsDrugs}/>
            {/* TreatmentPeriodicity CRUD*/}
            <Resource name="treatment_periodicities" {...treatmentPeriodicities}/>
            {/* UserType CRUD*/}
            <Resource name="user_type" {...userType}/>
            {/* AddressRoadType CRUD*/}
            <Resource name="address_road_type" {...addressRoadType}/>
            {/* DrugType CRUD*/}
            <Resource name="drug_types" {...drugTypes}/>
            {/* Drug CRUD*/}
            <Resource name="drugs" {...drugs}/>
            {/* DrugLevel CRUD*/}
            <Resource name="drug_levels" {...drugLevels}/>
            {/* Disease CRUD*/}
            <Resource name="diseases" {...disease}/>
            {/* DiseaseType CRUD*/}
            <Resource name="disease_types" {...diseaseTypes}/>
        </Admin>
    );
}

export default App;
