//import './App.css'; // there is no longer styles
import React from 'react';
import Home from './components/pages/home/home';
import Contact from './components/pages/contact/contact';
import ActivityOutdoor from './components/pages/outdoor/outdoor';
import ActivityOutdoorList from './components/pages/activityOutdoorList/activityOutdoorList';
import Login from './components/pages/login/login';
 

import {Route, 
  BrowserRouter,
  HashRouter,
  Link,
  Switch,
  NavLink} from 'react-router-dom';




function App() {
  
  return (
    <BrowserRouter>
      <>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/outdoor-activity/' component={ActivityOutdoor}/>
        <Route path='/contact/' component={Contact}/>
        <Route path='/activites-list/' component={ActivityOutdoorList}/>
        <Route path='/login/' component={Login}/>
        {/* <Route component={NotFound}/> */}
      </Switch>
        
        
      </>
    </BrowserRouter>   
  );
}

export default App;



 
  