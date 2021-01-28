import React from 'react';

import Menu from '../../organism/menu';
import Rights from '../../molecules/Rights';
import MainHeader from '../../atoms/mainHeader';
import PageStyle from '../styled/pageStyle';
import FooterStyle from '../../organism/styled/footer';
 ;

const ActivityOutdoorList = () => {
    return (
        <>
        <PageStyle>
            <Menu/>
            <MainHeader/>

                <div>
                    <span>The picked city:</span>
                    <h3>TABELKA Z GET</h3>
                </div> 

            <FooterStyle><Rights/></FooterStyle>
        </PageStyle>
        </>
    );
};

export default ActivityOutdoorList; 