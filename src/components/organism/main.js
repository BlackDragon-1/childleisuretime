import React from 'react';

import MainHeader from '../atoms/mainHeader';
import ActivitiesLink from '../atoms/activitiesLink';
import SubtitleStyle from './styled/menu/SubtitleStyle';
import ArticleActivitiesLink from './styled/main/ArticleActivitiesLink';

//zrobić uniwersalność dwóch linków

const Main = () => {
    return (
        <>
        <div> 
            <MainHeader/>
            <SubtitleStyle>Don't waste your time for searching - just use the app !</SubtitleStyle>
            
            <article>
                <section>
                    <ActivitiesLink/>
                </section>
            
                <section>
                    <ActivitiesLink/>
                </section>
            </article>
            
        </div>
        
        </>
    );
};

export default Main;