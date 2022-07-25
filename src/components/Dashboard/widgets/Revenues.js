import * as React from 'react';
import {Euro} from "@mui/icons-material";
import CardWithIcon from './CardWithIcon';

const Revenues = (props) => {
    return (
        <CardWithIcon
            to="/"
            icon={Euro}
            title="Chiffre d'affaires"
            subtitle={10}
        />
    );
};

export default Revenues;