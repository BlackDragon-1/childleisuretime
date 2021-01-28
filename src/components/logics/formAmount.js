import React, { Component, useState } from "react";

const FormAmount = () => {

    const [amount, setAmount] = useState("");

    return (
    <div>
        <p>Provide amount per person or zero for free</p>
           
            <select value={amount} onChange={(e) => setAmount(e.target.value)}>
                <option value="set amount pln">  set amount pln</option>
                <option value="0 (zero)">0 (zero)</option>
                <option value="0-19">0-19</option>
                <option value="20-49">20-49</option>
                <option value="50+">50+</option>
            </select>
        <span>{amount}</span>
    </div>
    );
};

export default FormAmount;