import React, {Component, useState, useEffect} from 'react';

import MainHeader from '../../atoms/mainHeader';
import Menu from '../../organism/menu';
import Rights from '../../molecules/Rights';
import PageStyle from '../styled/pageStyle';

 
const ActivityOutdoor = () => {

        const [places, setPlaces] = useState([]);

        const [city, setCity] = useState("");
      
        useEffect(() => {
      
          fetch(`http://localhost:3004/attractions`)
            .then((res) => res.json())
            .then((data) => {
              setPlaces(data); 
            })
            .catch((err) => console.log(err));
             
        }, [city]);
      
        return (
        <>
            <PageStyle>
            <Menu/>
            <MainHeader/>
            <p>W mieście: </p>
            <div>
                <select value={city} onChange={(e) => setCity(e.target.value)}>
                <option value="Wrocław">Wrocław</option>
                <option value="Poznań">Poznań</option>
                <option value="Kraków">Kraków</option>
                </select>
                <p>możesz zobaczyć</p>
                <ol>
                {places.filter(el=>el.city===`${city}`).map((el) => {
                        return (<>   
                            <li key={el.id}>
                                <h3>{el.holidays}<span> przeznaczony dla dzieci w wieku</span>{el.age}</h3>
                            </li>
                        </>
                        );
                    })}
                </ol>
            </div>
          <Rights year="2021"/> 
        </PageStyle>
        </>
    );
};
      
export default ActivityOutdoor;