import * as React from 'react';
import {Person} from '@mui/icons-material'

import CardWithIcon from './CardWithIcon';

const NbUsers = (props) => {
    return (
        <CardWithIcon
            to="/"
            icon={Person}
            title="Nombre d'utilisateurs"
            subtitle={10}
        />
    );
};

export default NbUsers;