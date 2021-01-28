import React, { Component, useState } from "react";

const FormCity = () => {
    
    const [city, setCity] = useState("");
    
    return (
        <div>
            <p>In which city would You like to have a fun?</p>
            
            <select value={city} onChange={(e) => setCity(e.target.value)}>
                <option value="set city">set city</option>
                <option value="Wrocław">Wrocław</option>
                <option value="Poznań">Poznań</option>
                <option value="Kraków">Kraków</option>
                <option value="Warszawa">Warszawa</option>
            </select>
           <span>{city}</span>
        </div>
    );
};
export default FormCity;