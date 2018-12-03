import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import firebase from './Firebase'

import Example from './view/example.view'
import Stan from './view/stan.view'
import Fay from './view/fay.view'
import Nadia from './view/nadia.view'
import Louis from './view/louis.view'
import Register from './components/register.component'
import News from './components/news.component'
import AddNews from './components/addnews.component'




class App extends Component {
  constructor(){
    super();
    this.state={
      user:null,
      users: null
    }
  }


  //first lunch
  componentWillMount(){

      firebase.database().ref('ch-users')
      .on('value',snapshot=>{
        this.setState({users:snapshot.val()})
      })
  }

  render () {
    return (
      <Router>
        <div>
          <Switch>
            {/* Here you can create root to different component*/}
            <Route exact path='/' component={News} />
            <Route exact path='/create' component={AddNews} />
            <Route exact path='/stan' component={Stan} />
            <Route exact path='/fay' component={Fay} />
            <Route exact path='/nadia' component={Nadia} />
            <Route exact path='/louis' component={Louis} />
            <Route exact path='/register' component={Register} />

          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
