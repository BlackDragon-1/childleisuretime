import React from 'react';
import Header from '../../organism/menu';
import Main from '../../organism/main';
import Footer from '../../organism/footer';

const Menu = () => {
    return (<>
        <div>
            <header>
             <Header/>
            </header>
            
            <main>
             <Main/>
            </main>
            
            <footer>
             <Footer/>  
            </footer> 
         </div></>
    );
};

export default Menu;