import React from 'react';

import MainHeader from '../atoms/mainHeader';
import ActivitiesLink from '../atoms/activitiesLink';

//zrobić uniwersalność dwóch linków

const Main = () => {
    return (
        <>
        <div> 
            <MainHeader/>
            <p>Don't waste your time for searching, just use the app and spend it properly!</p>

            <section>
                <ActivitiesLink/>
            </section>
            
            <section>
                <ActivitiesLink/>
            </section>
        </div>
        
        </>
    );
};

export default Main;