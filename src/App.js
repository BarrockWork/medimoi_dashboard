import './App.css';
import {ApiContext} from "./contexts";
import {Admin, Resource} from "react-admin";
import PostIcon from '@mui/icons-material/Book';

import {
    Dashboard,
    TreatmentPeriodicityList,
    TreatmentPeriodicityShow,
    TreatmentPeriodicityEdit,
    TreatmentPeriodicityCreate
} from './components';
import {useContext} from "react";

const App = () => {
  const {medimoiProvider} = useContext(ApiContext);
  return (
    <Admin dashboard={Dashboard} dataProvider={medimoiProvider}>
      {/* TreatmentPeriodicity CRUD*/}
      <Resource
          name="treatment_periodicities"
          list={TreatmentPeriodicityList}
          show={TreatmentPeriodicityShow}
          edit={TreatmentPeriodicityEdit}
          create={TreatmentPeriodicityCreate}
          icon={PostIcon}
      />
    </Admin>
  );
}

export default App;
