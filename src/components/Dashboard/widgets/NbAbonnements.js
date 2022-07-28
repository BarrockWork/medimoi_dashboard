import * as React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import CardWithIcon from './CardWithIcon'
import {useEffect, useState} from "react";
import apiAxios from '../../../_config/axios';


const NbAbonnements = (props) => {
    const [nbAbo, setNbAbo] = useState("--")

    const getNbAbos = async () => {
        return await apiAxios.get("/user_plans/count/true")
    }
    
    useEffect(()=>{
        getNbAbos().then(response => setNbAbo(response.data))
    },[])


    return (
        <CardWithIcon
            to="/"
            icon={ShoppingCartIcon}
            title="Nombre d'abonnements vendues"
            subtitle={nbAbo}
        />
    );
};

export default NbAbonnements;