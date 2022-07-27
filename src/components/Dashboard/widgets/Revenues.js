import * as React from 'react';
import {Euro} from "@mui/icons-material";
import CardWithIcon from './CardWithIcon';
import apiAxios from '../../../_config/axios';

const Revenues = (props) => {
    const [ca, setCa] = React.useState("--,--")

    const getCA = async () => {
        return await apiAxios.get('/user_plans/ca');
    }

    React.useEffect(()=>{
        getCA().then(response => setCa(response.data))
    },[])

    return (
        <CardWithIcon
            to="/"
            icon={Euro}
            title="Chiffre d'affaires / mois"
            subtitle={ca}
        />
    );
};

export default Revenues;