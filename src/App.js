//import './App.css'; // there is no longer styles
import React from 'react';
import Home from './components/pages/home/home';
import Contact from './components/pages/contact/contact';
import ActivityOutdoor from './components/pages/outdoor/outdoor';

import {Route, 
  BrowserRouter,
  HashRouter,
  Link,
  Switch,
  NavLink} from 'react-router-dom';



function App() {
 

  return (<BrowserRouter>
      <>
        <Route exact path='/' component={Home}/>
        <Route path='/outdoor-activity/' component={ActivityOutdoor}/>
      
        <Route path='/contact/' component={Contact}/>

      </>
    </BrowserRouter>   
  );
}

export default App;



 
  