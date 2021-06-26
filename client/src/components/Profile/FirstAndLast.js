import React, { useContext } from 'react';
import EditContext from '../../contexts/EditProvider';

const FirstAndLast = () => {
    const { canEdit } = useContext(EditContext);

    return (
        <h1 style={{fontSize: '1.75rem', margin: '0px', padding: '0px'}}>FirstName LastName</h1>
    )
}

export default FirstAndLast;
