import React from 'react';
import ActivitiesLinkStyle from './styled/activitiesLink';
import {Link} from 'react-router-dom';


//zrobić propsa indoor oraz outdoor

const ActivitiesLink = () => {

    return (

        <ActivitiesLinkStyle> 
            <Link to = '/outdoor-activity/'>Search for activity!</Link>
        </ActivitiesLinkStyle>
    );
};

export default ActivitiesLink;