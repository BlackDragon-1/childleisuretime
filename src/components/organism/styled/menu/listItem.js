import React from 'react';

import styled from 'styled-components';

const ListItem = styled.li`
    cursor: pointer;
    background-color:green;
    margin-left: auto;
    margin-right: auto;
    padding: 1em 1.4em 1em;
    text-decoration:none;
   
    color: ${props => props.active ? 'yellow' : 'black' };
    border: 1px solid darkgreen;

    &:hover{
        text-decoration:none;
        background-color: #3AA437;
    }
`;
 

export const BorderListItem = styled(ListItem)`
    border: 3px solid darkgreen;
`;

export default ListItem;

