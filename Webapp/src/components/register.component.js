import React, { Component } from 'react'
import logo from '../logo.svg'
import {style} from '../App.css'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import {} from 'semantic-ui-react'
import firebase from '../Firebase';


import { Button, Form, Grid, Image, Message, Segment } from 'semantic-ui-react'
  // 2. import reapop theme
import FlexView from 'react-flexview/lib';
import Menu from '../components/menu.components'
import Header from '../components/header.component'
import FormError from '../view/FormError'
import { error } from '@firebase/database/dist/src/core/util/util';


  class Register extends Component {
    constructor(props) {
      super(props)
       this.state = {
        fullName: '',
        emailAddress:'',
        passwordOne:'',
        passwordTwo:'',
        errorMessage:null

      };
      this.handleChange=this.handleChange.bind(this);
      this.handleSubmit=this.handleSubmit.bind(this);

    }
    componentDidMount() {
      }

    componentWillUnmount(){
      // Does something right before the component gets unmounted.
    }

    handleChange(e){
      const itemName=e.target.name;
      const itemValue=e.target.value;

      this.setState({[itemName]:itemValue},()=>{
        if(this.state.passwordOne!==this.state.passwordTwo){
          this.setState({
            errorMessage:'Passwords Not Matched'
          })
        }else{
          this.setState({
            errorMessage:null
          })
        }
      });

    }


    handleSubmit(e){
      var registrationInfo={
        displayName : this.state.fullName,
        email : this.state.emailAddress,
        password : this.state.passwordOne
      }
      e.preventDefault();
      firebase.auth()
      .createUserWithEmailAndPassword(registrationInfo.email,registrationInfo.password)
      .catch(error=>{
          if(error.message !=null){
          this.setState({
            errorMessage:error.message
          })
        }else{
          this.setState({
            errorMessage:null
          })
        }
      });

    }

    render () {
       return (
        <div className='App'>
            <Header/>
            <FlexView height={60} hAlignContent='center' marginTop={10} marginBottom={10}>
                <Menu/>
            </FlexView>

            <div className='login-form'>
                
                <style>
                    {'body > div, body > div > div, body > div > div > div.login-form { height: 100%;}'}
                </style>
                <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <h2 className='ui teal center aligned header'>
                            <img src={logo} className='ui image'/>
                                Create TRUESeeker Account.
                        </h2>
                        <Form size='large' onSubmit={this.handleSubmit}>
                            <Segment stacked>
                            
                            {/* view components */}
                                <Form.Input fluid icon='user' iconPosition='left' placeholder='Full Name' name='fullName' value={this.state.fullName} onChange={this.handleChange}/>
                                <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' name='emailAddress' value={this.state.emailAddress} onChange={this.handleChange}/>
                                <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' name='passwordOne' value={this.state.passwordOne} onChange={this.handleChange}/>
                                <Form.Input fluid icon='lock' iconPosition='left' placeholder='Confirm Password' name='passwordTwo' value={this.state.passwordTwo} onChange={this.handleChange}/>
                                <div>
                                  {this.state.errorMessage!==null?
                                  <Message>
                                  {this.state.errorMessage}
                                  </Message>
                                   :null
                                  }
                                  </div>
                                  
                                 {/* I want to use new component for all error messages
                                 <div>
                                  {this.state.errorMessage!==null?
                                  (<FormError errorMessage={this.state.errorMessage}/>):null
                                  }
                                  </div> */}
                                <Button color='teal' fluid size='large'>
                                    Register User
                                </Button>

                            </Segment>
                        </Form>
                        <Message>
                            New to us? <a href='#'>Sign In</a>
                        </Message>
                    </Grid.Column>
                    
                   
                </Grid>
                
            </div>
        </div>
    )

    }
  }
  
  export default withRouter(connect(
    (state) => ({text : state.example.example.text}), // Here are the variables to which you want to subscribe in the store
    {} // Here are the functions that dispatch an action
  )(Register))

