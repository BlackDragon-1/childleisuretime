import React, { Component, useState } from "react";
import FormAge from "../logics/formAge";
import FormCity from "../logics/formCity";
import FormAmount from "../logics/formAmount";

const Form = () => {

    return (
    <>
        <FormCity/>
        <FormAge/>   
        <FormAmount/>
    </>
    );
};

export default Form;