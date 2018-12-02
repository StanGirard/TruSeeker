import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import firebase from './Firebase';

import Example from './view/example.view'
import Stan from './view/stan.view'
import Fay from './view/fay.view'
import Nadia from './view/nadia.view'
import Louis from './view/louis.view'
import Youbaraj from './components/register.component'


class App extends Component {
  constructor(){
    super();
    this.state={
      user:null
    }
  }

  componentWillMount(){
      firebase.database().ref('user')
      .on('value',snapshot=>{
        this.setState({user:snapshot.val()})
      })
  }

  render () {
    return (
      <Router>
        <div>
          <Switch>
            {/* Here you can create root to different component*/}
            <Route exact path='/' component={Example} />
            <Route exact path='/stan' component={Stan} />
            <Route exact path='/fay' component={Fay} />
            <Route exact path='/nadia' component={Nadia} />
            <Route exact path='/louis' component={Louis} />
            <Route exact path='/youbaraj' component={Youbaraj} />

          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
