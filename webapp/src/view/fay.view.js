import logo from '../logo.svg'
import React from 'react'
import '../App.css'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Button, Form, Grid, Image, Message, Segment } from 'semantic-ui-react'
import { exampleConstants } from '../actions/example.actions'
import Notification from '../components/example.notificationCreation'
import NotificationsSystem from 'reapop'
// 2. import reapop theme
import theme from 'reapop-theme-wybo'
//import ExampleComponent from '../components/example.component'
import FlexView from 'react-flexview/lib';
import Menu from '../components/menu.components'
import Header from '../components/header.component'

const Example = (props) => {
    const { text, exampleConstants } = (props)


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
                                Login to your account
                        </h2>
                        <Form size='large'>
                            <Segment stacked>
                                <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
                                <Form.Input
                                    fluid
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Password'
                                    type='password'
                                    />

                                <Button color='teal' fluid size='large'>
                                    Login
                                </Button>
                            </Segment>
                        </Form>
                        <Message>
                            New to us? <a href='#'>Sign Up</a>
                        </Message>
                    </Grid.Column>
                </Grid>
            </div>
        </div>
    )
}

export default withRouter(connect(
    (state) => ({ text: state.example.example.text }),
    { exampleConstants }
)(Example))
