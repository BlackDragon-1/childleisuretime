import React from 'react';
import Rights from '../../molecules/Rights';
import RightsStyle from '../../molecules/styled/Rights';
import Menu from '../../organism/menu';
import PageStyle from '../styled/pageStyle';


const Contact = () => {
    return (
       <>
       <PageStyle>
            <Menu/>
            <div>
            <h3>Contact us!</h3>
            <span>leisure-time@with-child.com</span>
            </div>
           <RightsStyle><Rights/></RightsStyle> 
       </PageStyle>
       </>
    );
};

export default Contact;