import React, { Component } from 'react';
import '../../App.css';
import {HashRouter as Router, Route} from 'react-router-dom';
import Home from '../Home/Home'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path='/' component={Home} />
        </Router>
      </div>
    );
  }
}

export default App; 