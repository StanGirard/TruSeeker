import React, { Component } from 'react'
import '../App.css'

const ButtonComponent = (props) => {

    return (
        /* check if we have prop named buttonClass and if yes adding as class name if not add empty */
            <button onClick={props.clickHandler} className={ "ui button " + props.buttonClass ? props.buttonClass : ""}>
                { props.buttonText }
            </button>


    );

};

export default ButtonComponent;