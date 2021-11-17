import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'

import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

import Nav from './components/Nav';

class App extends Component {
  render() {
    return (
      
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="*" component={NotFound}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
