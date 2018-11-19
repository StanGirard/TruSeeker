import logo from '../logo.svg'
import React from 'react'
import '../App.css'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'
import { exampleConstants } from '../actions/example.actions'
import Notification from '../components/example.notificationCreation'
import NotificationsSystem from 'reapop'
// 2. import reapop theme
import theme from 'reapop-theme-wybo'
//import ExampleComponent from '../components/example.component'
import LogInComponentContainerComponent from '../components/logInComponentContainer.component'
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

      <LogInComponentContainerComponent introText={"Welcome to TRUSeeker"}/>
    </div>
  )
}

export default withRouter(connect(
  (state) => ({ text: state.example.example.text }),
  { exampleConstants }
)(Example))
