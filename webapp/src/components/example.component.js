import React, { Component } from 'react'
import '../App.css'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import {} from 'semantic-ui-react'
import FlexView from 'react-flexview'



  class Example extends Component {
    constructor(props) {
      super(props)
      // this is the constructor
      this.state = {
        text: 'Hello World !'
      } // this is the state of the component, you can add anything you want.
    }
    componentDidMount() {
      // Once the component is mounted, do something
    }

    componentWillUnmount(){
      // Does something right before the component gets unmounted.
    }

    render () {
      // You can add Code here that will be executed at each render
      return (
        <div>
          {/* Add your components and code here
              I encourage you to look at Semantic UI React Components.
          */}
        </div>

      )
    }
  }
  
  export default withRouter(connect(
    (state) => ({text : state.example.example.text}), // Here are the variables to which you want to subscribe in the store
    {history} // Here are the functions that dispatch an action
  )(Example))

