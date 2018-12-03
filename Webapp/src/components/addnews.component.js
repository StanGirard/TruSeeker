import React, { Component } from 'react'
import logo from '../logo.svg'
import {style} from '../App.css'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import {} from 'semantic-ui-react'
import firebase from '../Firebase'
 
import { Button, Form, Grid, Image, Message, Segment } from 'semantic-ui-react'
 import FlexView from 'react-flexview/lib';
import Menu from './menu.components'
import Header from './header.component'
 
  class AddNews extends Component {
    constructor(props) {
      super(props)
      

       this.state = {
        title: '',
        desc:'',
        rating:0,
        viewers:0,
        created_at: new Date(),
        errorMessage:null

      };
      this.handleChange=this.handleChange.bind(this);
      this.handleSubmit=this.handleSubmit.bind(this);

    }
    

    handleChange(e){
      const itemName=e.target.name;
      const itemValue=e.target.value;

      this.setState({[itemName]:itemValue},()=>{
        if(this.state.title!==null){
          this.setState({
            errorMessage:'News Title Cannot Be Empty !'
          })
        }else if(this.state.desc!==null){
          this.setState({
            errorMessage:'News Description Cannot Be Empty !'
          })
        }
      });

    }


    handleSubmit(e){
      var newsInfo={
        title: this.state.title,
        desc: this.state.desc,
        viewers:this.state.viewers,
        rating:this.state.rating,
        created_at:this.state.created_at
      }
      e.preventDefault();
 
      firebase.firestore().collection('news').add({
        newsInfo
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
                                Create News 
                        </h2>
                        <Form size='large' onSubmit={this.handleSubmit}>
                            <Segment stacked>
                            
                                 <Form.Input iconPosition='left' placeholder='Add News Title' name='title' value={this.state.title} onChange={this.handleChange}/>
                                <Form.Input  iconPosition='left' placeholder='Add Actual News Description' name='desc' value={this.state.desc} onChange={this.handleChange}/>
                                
                                 <div>
                                  {this.state.errorMessage!==null?
                                  <Message>
                                  {this.state.errorMessage}
                                  </Message>
                                   :null
                                  }
                                  </div>
                                
                                <Button color='teal' fluid size='large'>
                                    Add Article
                                </Button>

                            </Segment>
                        </Form>
                        
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
  )(AddNews))

