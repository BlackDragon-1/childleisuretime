import React, { Component, useState } from "react";

const FormAge = () => {

    const [age, setAge] = useState("");

    return (
        <div>
            <p>Provide the age range of your child</p>
        
            <select value={age} onChange={(e) => setAge(e.target.value)}>

                <option value="set age range">  set age range</option>
                <option value="0-2">0-2</option>
                <option value="3-6">3-6</option>
                <option value="7-13">7-13</option>
                <option value="14-17">14-17</option>
                <option value="over18">18</option>
                
            </select>

           <span>{age}</span>  

        </div>
    );
};
export default FormAge;