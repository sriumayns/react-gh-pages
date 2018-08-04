import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import {Test} from './components/Test';
import {Hello} from './components/Hello';
import {Home} from './components/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        <Router basename={process.env.PUBLIC_URL}>
          <div>
            <Link to='/test'>Test</Link><br/>
            <Link to='/hello'>Hello</Link>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/test' component={Test} />
              <Route exact path='/hello' component={Hello} />
            </Switch>
          </div>
        </Router>
        </p>
      </div>
    );
  }
}

export default App;
