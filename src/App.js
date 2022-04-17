import './App.css';
import {ApiContext} from "./contexts";
import {Admin} from "react-admin";
import {useContext} from "react";

const App = () => {
  const {BaseApiUrl} = useContext(ApiContext);
  return (
    <Admin dataProvider={BaseApiUrl}/>
  );
}

export default App;
