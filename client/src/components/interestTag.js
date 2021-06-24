import React from 'react';
import Badge from 'react-bootstrap/Badge';

const interestTag = (props) => {
    return (
        <span style={{margin: '.2rem'}}>
            <Badge pill variant="primary">{props.children}</Badge>
        </span> 
    )
}

export default interestTag;
