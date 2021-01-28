import React from 'react';
import MainHeader from '../../atoms/mainHeader';
import Rights from '../../molecules/Rights';
import Menu from '../../organism/menu';
import PageStyle from '../styled/pageStyle';

const Login = () => {
    return (
        <PageStyle>
            <Menu/>
            <MainHeader/>
                <h3>LOG IN !</h3>         

            <Rights/>
        </PageStyle>
    );
};

export default Login;