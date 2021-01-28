import React from 'react';
import RightsStyle from './styled/Rights';

const Rights = (props) => {

  
    return (
        <>
            <RightsStyle>All rights reserved {props.year}</RightsStyle>
        </>
    );
};

export default Rights;