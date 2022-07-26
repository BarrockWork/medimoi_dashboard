import * as React from 'react';
import {Person} from '@mui/icons-material'
import apiAxios from "../../../_config/axios";
import CardWithIcon from './CardWithIcon';
import {useEffect, useState} from "react";

const NbUsers = (props) => {
    const [nbUser, setNbUser] = useState(0);

    const getNbUsers = async() => {
        return await apiAxios.get('/users/count/true')
    }

    useEffect(() => {
        getNbUsers().then(r => setNbUser(r.data));
    }, [])
    return (
        <CardWithIcon
            to="/"
            icon={Person}
            title="Nombre d'utilisateurs"
            subtitle={nbUser}
        />
    );
};

export default NbUsers;