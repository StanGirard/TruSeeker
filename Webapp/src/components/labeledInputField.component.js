import React, { Component } from 'react'
import '../App.css'

const LabeledInputFieldComponent = (props) => {

  return(
      <div className={"labeled-input-container"}>
          <label> {props.labelText} </label>

          <div class="ui input">
            <input type={props.inputType} value={props.inputValue} onChange={props.handleInput} />
          </div>

      </div>

  )

}

export default LabeledInputFieldComponent;