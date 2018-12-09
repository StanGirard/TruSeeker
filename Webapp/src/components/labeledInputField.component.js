import React, { Component } from 'react'
import '../App.css'

const LabeledInputFieldComponent = (props) => {

  return(
      <div className={"labeled-input-container"}>

             <label> {props.labelText} <br />

            <input  type={props.inputType} value={props.inputValue} onChange={props.handleInput}/>
            </label>
      </div>

  )

}

export default LabeledInputFieldComponent;