import './App.css';
import {ApiContext} from "./contexts";
import {Admin, Resource} from "react-admin";
import {useContext} from "react";
// Components
import {
    Dashboard,
} from './components';
// Ressources
import treatments from "./resources/Treatment";
import treatmentPeriodicities from "./resources/TreatmentPeriodicity";
// App
const App = () => {
    const {medimoiProvider} = useContext(ApiContext);
    return (
        <Admin dashboard={Dashboard} dataProvider={medimoiProvider}>
            {/* Treatment CRUD*/}
            <Resource name="treatments" {...treatments}/>
            {/* TreatmentPeriodicity CRUD*/}
            <Resource name="treatment_periodicities" {...treatmentPeriodicities}/>
        </Admin>
    );
}

export default App;
