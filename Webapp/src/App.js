import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Example from './view/example.view'
import Stan from './view/stan.view'
import Fay from './view/fay.view'
import Nadia from './view/nadia.view'
import Louis from './view/louis.view'
import Youbaraj from './view/youbaraj.view'
import CreateAccount from './view/createAccount.view'

class App extends Component {
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
            <Route exact path='/createAccount' component={CreateAccount} />



          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
