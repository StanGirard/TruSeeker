import React, { Component } from 'react'
import '../App.css'
import LabeledInputFieldComponent from './labeledInputField.component'
import ButtonComponent from '../components/buttonComponent.component'

class LogInComponentContainerComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }

        this.handleUsernameInput = this.handleUsernameInput.bind(this);
        this.handlePasswordInput = this.handlePasswordInput.bind(this);
    }

    handleUsernameInput(event){

        this.setState({username: event.target.value});
    }

    handlePasswordInput(event){

        this.setState({password: event.target.value});

    }

    render() {
        return(
            <div className="log-in-container">
                <h5> { this.props.introText }</h5>

                <LabeledInputFieldComponent inputValue={this.state.username} inputType={"text"} labelText={"Username"} handleInput={this.handleUsernameInput} />
                <LabeledInputFieldComponent inputType={this.state.password} inputType={"password"} labelText={"Password"} handleInput={this.handlePasswordInput} />

                <div className={"button-container"}>
                    <ButtonComponent buttonText={"Sign up >"}/>
                    <ButtonComponent buttonClass={"black-button"} buttonText={"Log in >"}/>
                </div>


            </div>
        )
    }


}

export default LogInComponentContainerComponent;