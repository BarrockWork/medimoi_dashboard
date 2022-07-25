import * as React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import CardWithIcon from './CardWithIcon';

const NbAbonnements = (props) => {
    return (
        <CardWithIcon
            to="/"
            icon={ShoppingCartIcon}
            title="Nombre d'abonnements vendues"
            subtitle={10}
        />
    );
};

export default NbAbonnements;