import React from 'react';

import Socialmedia from '../molecules/Socialmedia';
import Rights from '../molecules/Rights';
import FooterStyle from './styled/footer';


const Footer = () => {
    return (
       <>
       <FooterStyle>
         <Socialmedia/>
        </FooterStyle>
        <FooterStyle>
         <Rights year="2021"/>
       </FooterStyle>
         
       </>
    );
};

export default Footer;