import React from 'react';
import ListItem from './styled/menu/listItem';
import {BorderListItem} from './styled/menu/listItem';
import MenuList from './styled/menu/menuList';
import {Link} from 'react-router-dom';
 

const Menu = () => {
  
    return (
        <>
        <div>
          <nav>
            <MenuList>
             <BorderListItem active><Link to ="/">HOME</Link></BorderListItem>
              
             <ListItem active><Link to='/contact/'>CONTACT</Link></ListItem>
             
              <ListItem active>LOG IN</ListItem>
              <ListItem active>REGISTER</ListItem>
            </MenuList>
          </nav>
        </div>
        </>
    );
};

export default Menu;