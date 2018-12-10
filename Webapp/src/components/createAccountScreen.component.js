import React, { Component } from 'react'
import '../App.css'
import LabeledInputFieldComponent from './labeledInputField.component'
import ButtonComponent from '../components/buttonComponent.component'

class createAccountScreen extends Component{
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            userName: '',
            email: '',
            password: '',
            repeatPassword: ''
        }

        this.handleFirstNameInput = this.handleFirstNameInput.bind(this);
        this.handlelastNameInput = this.handlelastNameInput.bind(this);
        this.handleUserNameInput = this.handleUserNameInput.bind(this);
        this.handleEmailInput = this.handleEmailInput.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleRepeatPassword = this.handleRepeatPassword.bind(this);
    }

    handleFirstNameInput(event){

        this.setState({firstName: event.target.value});
    }

    handlelastNameInput(event){

        this.setState({lastName: event.target.value});
    }

    handleUserNameInput(event){

        this.setState({userName: event.target.value});
    }

    handleEmailInput(event){

        this.setState({email: event.target.value});
    }

    handlePassword(event){

        this.setState({password: event.target.value});
    }

    handleRepeatPassword(event){

        this.setState({repeatPassword: event.target.value});
    }

    render(){
       return(
           <div className="sign-in-container">
            <h5> { this.props.introText }</h5>
                    <LabeledInputFieldComponent inputValue={this.state.firstName} inputType={"text"} labelText={"First name"} handleInput={this.handleFirstNameInput} />
                    <LabeledInputFieldComponent inputValue={this.state.lastName} inputType={"text"} labelText={"Last name"} handleInput={this.handleLastNameInput} />
                    <LabeledInputFieldComponent inputValue={this.state.userName} inputType={"text"} labelText={"Username"} handleInput={this.handleUsernameInput} />
                    <LabeledInputFieldComponent inputValue={this.state.email} inputType={"text"} labelText={"Email address"} handleInput={this.handleEmailInput} />
                    <LabeledInputFieldComponent inputValue={this.state.password} inputType={"password"} labelText={"Enter password"} handleInput={this.handlePasswordInput} />
                    <LabeledInputFieldComponent inputValue={this.state.repeatPassword} inputType={"password"} labelText={"Repeat password"} handleInput={this.handleUsernameInput} />
           </div>
        )
    }

}
 export default createAccountScreen;