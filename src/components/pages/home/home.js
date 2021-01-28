import React from 'react';
import Menu from '../../organism/menu';
import Main from '../../organism/main';
import Footer from '../../organism/footer';
import PageStyle from '../styled/pageStyle';



const Home = () => {
    return (
    <>
        <PageStyle>
            <header>
             <Menu/>
            </header>
            
            <main>
             <Main/>
            </main>
            
            <footer>
             <Footer/>  
            </footer> 
        </PageStyle>
    </>
    );
};

export default Home;